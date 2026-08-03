// ============================================================
//  Aussie 10 — 应用逻辑（朴素羊皮纸风 + 飞机飞行进度条）
//  - 默认进入「今日」tab
//  - 单词：单卡全屏 + 横向滑动（卡片内容居中 + 音标在词下方）
//  - 新闻：每天一篇，按日期分发，默认看当天，往期可切
//  - 新闻高亮词：点击弹底部抽屉
//  - 顶部进度条：飞机从起点飞往澳洲地标，每掌握一词前进一格
//  - TTS：优先选清晰的英文女声，含 fallback 与可见反馈
// ============================================================
(function () {
  "use strict";

  const BASE = new Date(2026, 6, 31); // 学习起始日
  const LS_KEY = "aussie10_v3";

  // ---- 状态 ----
  let state = loadState();
  let wordLoop = null; // { btn, text }
  let newsSpeak = null; // 新闻朗读状态 { btn } — 用于播放/暂停切换
  function loadState() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ---- 日期工具 ----
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function ymd(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function daysBetween(a, b) {
    return Math.round((b - a) / 86400000);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayIndex = daysBetween(BASE, today);
  const todayStr = ymd(today);

  if (!state.firstDate) state.firstDate = todayStr;

  // hash 路由：#archive / #news / #today（截图工具/外链用）
  function applyHashRoute() {
    const h = (location.hash || "").replace("#", "").trim();
    if (h === "archive" || h === "news" || h === "today") {
      switchPage(h);
    }
  }
  window.addEventListener("hashchange", applyHashRoute);

  function unitForDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    const idx = daysBetween(BASE, d);
    return ((idx % WORD_UNITS.length) + WORD_UNITS.length) % WORD_UNITS.length;
  }
  function newsForDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    const idx = daysBetween(BASE, d);
    return NEWS_ARTICLES[((idx % NEWS_ARTICLES.length) + NEWS_ARTICLES.length) % NEWS_ARTICLES.length];
  }
  function learnedFor(dateStr) {
    if (!state[dateStr]) {
      state[dateStr] = WORD_UNITS[unitForDate(dateStr)].words.map(function () { return false; });
    }
    return state[dateStr];
  }
  function learnedCount(arr) { return arr.filter(Boolean).length; }

  // ============================================================
  //  导航
  // ============================================================
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (t) {
    t.addEventListener("click", function () { switchPage(t.dataset.page); });
  });
  function switchPage(p) {
    stopWordPlay();
    if (newsSpeak) stopNewsSpeak();
    document.querySelectorAll(".page").forEach(function (s) { s.classList.remove("active"); });
    document.getElementById("page-" + p).classList.add("active");
    tabs.forEach(function (t) { t.classList.toggle("active", t.dataset.page === p); });
    if (p === "today") renderToday();
    if (p === "archive") renderArchive();
    if (p === "news") renderNews();
    window.scrollTo(0, 0);
    closeModal();
  }

  // ============================================================
  //  飞行进度条 —— 连续横条（橙填充 + 飞机 + 澳洲国旗）
  // ============================================================
  function updateFlight(c) {
    // c: 0..10
    const plane = document.getElementById("flightPlane");
    const fill  = document.getElementById("trackFill");
    const goal  = document.getElementById("flightGoal");
    if (!plane || !fill) return;

    const bar   = document.getElementById("flightBar");
    const track = bar.querySelector(".flight-track");
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const trackWidth = trackRect.width;
    const ratio = Math.max(0, Math.min(1, c / 10));

    // 橙填充宽度
    fill.style.width = (ratio * 100) + "%";

    // 飞机位置：紧贴橙填充右端。飞机图标 30px，中心位置 = ratio * trackWidth
    // translateX 用 px 计算（飞机 left 已设为 8px，是 .flight-bar 内左 padding 起点）
    const planeX = ratio * trackWidth;
    plane.style.setProperty("--fx", planeX + "px");
    plane.style.transform = "translateX(" + planeX + "px)";

    // 到达庆祝
    if (c >= 10) {
      plane.classList.add("arrived");
      if (goal) goal.classList.add("arrived");
    } else {
      plane.classList.remove("arrived");
      if (goal) goal.classList.remove("arrived");
    }
  }

  // ============================================================
  //  今日单词（堆叠卡片）
  // ============================================================
  let curWordIdx = 0;

  function renderToday() {
    const unit = WORD_UNITS[unitForDate(todayStr)];
    const learned = learnedFor(todayStr);

    document.getElementById("todayDate").textContent = todayStr;
    document.getElementById("todayDayNo").textContent = "DAY " + (dayIndex + 1);
    document.getElementById("todayTheme").textContent = unit.theme;
    document.getElementById("todayUnit").textContent = "UNIT " + (unitForDate(todayStr) + 1) + " / " + WORD_UNITS.length;
    // 主题头吉祥物
    const themeMascot = (function(t){
      const map = {
        "沙滩": "🏖️", "海": "🌊", "海洋": "🌊", "鱼": "🐠", "潜水": "🤿", "珊瑚": "🪸",
        "丛林": "🦘", "森林": "🌳", "野生动物": "🐨", "袋鼠": "🦘", "考拉": "🐨",
        "食物": "🍤", "咖啡": "☕", "酒": "🍷", "餐厅": "🍽️", "烤": "🥩", "早餐": "🥞",
        "天气": "☀️", "雨": "🌧️", "风": "💨", "雪": "❄️",
        "机票": "✈️", "机场": "✈️", "飞机": "✈️", "行李": "🧳", "登机": "✈️",
        "酒店": "🏨", "住宿": "🛏️", "帐篷": "⛺", "民宿": "🏠",
        "地图": "🗺️", "方向": "🧭", "交通": "🚗", "公交": "🚌", "出租": "🚕", "自驾": "🚙",
        "购物": "🛍️", "钱": "💰", "银行卡": "💳", "免税": "🛍️",
        "运动": "🏄", "冲浪": "🏄", "游泳": "🏊", "徒步": "🥾", "骑行": "🚴",
        "紧急": "🚨", "医院": "🏥", "警察": "👮", "安全": "🛟",
        "节日": "🎉", "派对": "🥳", "音乐": "🎵", "文化": "🎭",
      };
      for (const k in map) if (t.indexOf(k) >= 0) return map[k];
      return "🐨";
    })(unit.theme);
    const mascotEl = document.getElementById("todayMascot");
    if (mascotEl) mascotEl.textContent = themeMascot;

    const viewport = document.getElementById("wordViewport");
    const dots = document.getElementById("wordDots");
    viewport.innerHTML = "";
    dots.innerHTML = "";
    curWordIdx = 0;

    const themeEmoji = pickEmoji(unit.theme);

    // 一次性创建所有 10 张堆叠卡
    unit.words.forEach(function (w, i) {
      const isLearned = !!learned[i];
      const card = document.createElement("div");
      card.className = "word-card" + (isLearned ? " is-known" : "");
      card.dataset.i = i;
      card.innerHTML =
        '<div class="wc-top">' +
          '<div class="wc-top-left">' +
            '<div class="wc-bar"></div>' +
            '<span class="wc-day-label">TODAY · ' + (i + 1) + ' / 10</span>' +
          '</div>' +
        '</div>' +
        '<div class="wc-word">' + esc(w.word) + '</div>' +
        '<div class="wc-phonetic">' +
          '<span class="wc-ipa">' + esc(w.phonetic) + '</span>' +
          '<span class="wc-pos">' + esc(w.pos) + '</span>' +
        '</div>' +
        '<div class="wc-meaning">' + esc(w.meaning) + '</div>' +
        '<div class="wc-example">' +
          '<span class="wc-example-label">✦ EXAMPLE</span>' +
          '<button class="wc-example-play" data-i="' + i + '" title="朗读例句">♪</button>' +
          '<div class="wc-example-en">' + esc(w.example) + '</div>' +
          '<div class="wc-example-cn">' + esc(w.exampleZh) + '</div>' +
        '</div>' +
        '<div class="wc-controls">' +
          '<button class="wc-known-pill' + (isLearned ? ' is-on' : '') + '" data-i="' + i + '">' +
            '<span class="check">' + (isLearned ? '✓' : '') + '</span>' +
            '<span>' + (isLearned ? '已掌握' : '标记掌握') + '</span>' +
          '</button>' +
          '<button class="wc-circle-play" data-i="' + i + '" title="循环播放单词发音">' +
            '<span class="play-icon">♪</span>' +
          '</button>' +
        '</div>';
      viewport.appendChild(card);

      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " is-on" : "") + (isLearned ? " is-known" : "");
      dot.dataset.idx = i;
      dot.addEventListener("click", function () { goToSlide(i); });
      dots.appendChild(dot);
    });

    // 标记掌握（仅 pill 按钮）
    viewport.querySelectorAll(".wc-known-pill").forEach(function (b) {
      b.addEventListener("click", function () {
        toggleLearned(+b.dataset.i, viewport);
      });
    });
    // 大圆播放：点击一次朗读一次单词
    viewport.querySelectorAll(".wc-circle-play").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const i = +btn.dataset.i;
        const w = WORD_UNITS[unitForDate(todayStr)].words[i];
        playWordCard(w.word, btn);
      });
    });
    // 例句小喇叭：只播例句
    viewport.querySelectorAll(".wc-example-play").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const i = +btn.dataset.i;
        const w = WORD_UNITS[unitForDate(todayStr)].words[i];
        speak(w.example);
      });
    });

    bindSwipe(viewport);
    requestAnimationFrame(function () {
      updateProgress();
      goToSlide(0, false);
    });
  }

  function toggleLearned(i, viewport) {
    const arr = learnedFor(todayStr);
    arr[i] = !arr[i];
    saveState();
    const card = viewport.querySelector('.word-card[data-i="' + i + '"]');
    if (card) {
      card.classList.toggle("is-known", arr[i]);
      const btn = card.querySelector(".wc-known-pill");
      if (btn) {
        btn.classList.toggle("is-on", arr[i]);
        const check = btn.querySelector(".check");
        if (check) check.textContent = arr[i] ? "✓" : "";
        const txt = btn.querySelectorAll("span")[1];
        if (txt) txt.textContent = arr[i] ? "已掌握" : "标记掌握";
      }
    }
    const dot = document.querySelectorAll("#wordDots .dot")[i];
    if (dot) dot.classList.toggle("is-known", arr[i]);
    updateProgress();
  }

  function pickEmoji(theme) {
    const map = {
      "机场": "✈️", "酒店": "🛎️", "餐厅": "🍽️", "交通": "🚋",
      "购物": "🛍️", "景点": "🗺️", "应急": "🚑", "俚语": "🦘",
      "天气": "☀️", "寒暄": "👋", "食物": "🥧", "海边": "🏖️",
      "健康": "💊", "数字": "🕘", "支付": "💳", "城市": "🚖",
      "设施": "🛏️", "动物": "🐨", "自然": "🌿", "活动": "🎪",
      "网络": "📶", "摄影": "📷", "探险": "🥾", "历史": "🪨",
      "签证": "🛂", "商务": "💼", "咖啡": "☕", "水": "💧",
      "颜色": "🎨", "运动": "⚽", "登山": "⛰️", "酒": "🍷"
    };
    for (const k in map) if (theme.indexOf(k) !== -1) return map[k];
    return "🌏";
  }

  function goToSlide(i, animate) {
    stopWordPlay();
    if (animate === undefined) animate = true;
    curWordIdx = Math.max(0, Math.min(i, 9));
    const viewport = document.getElementById("wordViewport");
    if (!viewport) return;
    if (!animate) viewport.style.transition = "none";
    else viewport.style.transition = "";
    viewport.style.transform = "translateX(-" + (curWordIdx * 100) + "%)";
    if (!animate) requestAnimationFrame(function () {
      viewport.style.transition = "";
    });
    // 标记当前卡为可点击
    const cards = viewport.querySelectorAll(".word-card");
    cards.forEach(function (card) {
      card.classList.toggle("is-active", +card.dataset.i === curWordIdx);
    });
    document.querySelectorAll("#wordDots .dot").forEach(function (d, idx) {
      d.classList.toggle("is-on", idx === curWordIdx);
    });
    updateCounter();
  }
  function updateCounter() {
    const c = document.getElementById("wordCounter");
    if (c) c.textContent = (curWordIdx + 1) + " / 10";
  }
  window.addEventListener("resize", function () {
    goToSlide(curWordIdx, false);
    // 重新计算飞机位置
    const learned = learnedFor(todayStr);
    updateFlight(learnedCount(learned));
  });

  function bindSwipe(el) {
    const viewport = document.getElementById("wordViewport");
    let startX = 0, curX = 0, dragging = false, startTime = 0;
    function onStart(x) {
      dragging = true; startX = x; curX = x; startTime = Date.now();
      if (viewport) { viewport.classList.add("dragging"); viewport.style.transition = "none"; }
    }
    function onMove(x) {
      if (!dragging) return;
      curX = x;
      const dx = curX - startX;
      if (viewport) {
        viewport.style.transform = "translateX(calc(-" + (curWordIdx * 100) + "% + " + dx + "px))";
      }
    }
    function onEnd() {
      if (!dragging) return;
      dragging = false;
      const dx = curX - startX;
      const dt = Date.now() - startTime;
      const fast = Math.abs(dx) > 50 || (Math.abs(dx) > 20 && dt < 250);
      if (viewport) {
        viewport.classList.remove("dragging");
        viewport.style.transition = "";
      }
      if (fast && dx < 0) goToSlide(curWordIdx + 1);
      else if (fast && dx > 0) goToSlide(curWordIdx - 1);
      else goToSlide(curWordIdx); // 弹回
    }
    el.addEventListener("touchstart", function (e) { onStart(e.touches[0].clientX); }, { passive: true });
    el.addEventListener("touchmove",  function (e) { onMove(e.touches[0].clientX); }, { passive: true });
    el.addEventListener("touchend",   onEnd);
    let md = false;
    el.addEventListener("mousedown", function (e) { md = true; onStart(e.clientX); e.preventDefault(); });
    el.addEventListener("mousemove", function (e) { if (md) onMove(e.clientX); });
    el.addEventListener("mouseup", function () { if (md) { md = false; onEnd(); } });
    el.addEventListener("mouseleave", function () { if (md) { md = false; onEnd(); } });
  }
  document.addEventListener("keydown", function (e) {
    if (!document.getElementById("page-today").classList.contains("active")) return;
    if (e.key === "ArrowLeft")  goToSlide(curWordIdx - 1);
    if (e.key === "ArrowRight") goToSlide(curWordIdx + 1);
  });

  function updateProgress() {
    const learned = learnedFor(todayStr);
    const c = learnedCount(learned);
    const text = document.getElementById("progressText");
    if (text) text.textContent = c + " / 10";
    updateFlight(c);
  }

  // ============================================================
  //  往期
  // ============================================================
  function renderArchive() {
    const wrap = document.getElementById("archiveList");
    wrap.innerHTML = "";

    const days = daysBetween(BASE, today);
    let totalLearned = 0;
    for (let i = 0; i <= days; i++) {
      const d = new Date(BASE);
      d.setDate(d.getDate() + i);
      totalLearned += learnedCount(learnedFor(ymd(d)));
    }
    const stat = document.createElement("div");
    stat.className = "hint";
    stat.style.marginTop = "0";
    stat.innerHTML = "已学习 <b>" + (days + 1) + "</b> 天 · 累计掌握 <b>" + totalLearned + "</b> 词 · 词库共 <b>" + WORD_UNITS.length + "</b> 个主题。";
    wrap.appendChild(stat);

    for (let i = days; i >= 0; i--) {
      const d = new Date(BASE);
      d.setDate(d.getDate() + i);
      const ds = ymd(d);
      const u = WORD_UNITS[unitForDate(ds)];
      const learned = learnedFor(ds);
      const c = learnedCount(learned);
      const item = document.createElement("div");
      item.className = "archive-item" + (ds === todayStr ? " today" : "");
      const dayShort = ds.slice(8); // "08-03"
      const month = parseInt(ds.slice(5, 7), 10);
      const emoji = pickEmoji(u.theme);
      item.innerHTML =
        '<div class="archive-day">' +
          '<div class="archive-day-num">' + dayShort + '</div>' +
          '<div class="archive-day-label">' + emoji + '</div>' +
        '</div>' +
        '<div class="archive-info">' +
          '<div class="archive-date">' + ds + '</div>' +
          '<div class="archive-theme">' + esc(u.theme) + '</div>' +
        '</div>' +
        '<div class="archive-meta">' +
          (ds === todayStr
            ? '<div class="archive-count" style="background:var(--accent);color:white">今天</div>'
            : '<div class="archive-count">' + c + ' / 10 词</div>') +
          '<div class="archive-arrow">→</div>' +
        '</div>';
      item.addEventListener("click", function () { openDayWords(ds); });
      wrap.appendChild(item);
    }

    const allBtn = document.createElement("div");
    allBtn.className = "archive-item";
    allBtn.style.marginTop = "10px";
    allBtn.innerHTML =
      '<div class="archive-day" style="background:linear-gradient(135deg,#8088A8,#4A5374)">' +
        '<div class="archive-day-num">' + WORD_UNITS.length + '</div>' +
        '<div class="archive-day-label">UNITS</div>' +
      '</div>' +
      '<div class="archive-info">' +
        '<div class="archive-date">ALL UNITS</div>' +
        '<div class="archive-theme">浏览全部 ' + WORD_UNITS.length + ' 个主题</div>' +
      '</div>' +
      '<div class="archive-meta">' +
        '<div class="archive-count">查看</div>' +
        '<div class="archive-arrow">→</div>' +
      '</div>';
    allBtn.addEventListener("click", openAllUnits);
    wrap.appendChild(allBtn);
  }

  function openDayWords(dateStr) {
    const u = WORD_UNITS[unitForDate(dateStr)];
    const learned = learnedFor(dateStr);
    let html = '<div class="m-head"><div class="m-title">' + esc(u.theme) + '</div>' +
      '<button class="m-close" data-close>×</button></div>' +
      '<div class="hint" style="margin-top:0">' + dateStr + ' · 共 10 词</div>' +
      '<div class="day-words-list">';
    u.words.forEach(function (w, i) {
      html += '<div class="dw-item">' +
        '<div><div class="dw-w">' + esc(w.word) + ' <span style="color:var(--ink-soft);font-weight:400">' + esc(w.phonetic) + '</span></div>' +
        '<div class="dw-m">' + esc(w.meaning) + (learned[i] ? " · ✓" : "") + '</div></div>' +
        '<button class="dw-s" data-word="' + escAttr(w.word) + '">🔊</button>' +
        '</div>';
    });
    html += '</div>';
    openModal(html);
    document.querySelectorAll("#modalCard .dw-s").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        speak(b.dataset.word);
      });
    });
  }

  function openAllUnits() {
    let html = '<div class="m-head"><div class="m-title">All Units</div>' +
      '<button class="m-close" data-close>×</button></div>' +
      '<div class="hint" style="margin-top:0">点击任意主题查看 10 词（全部 ' + WORD_UNITS.length + ' 个）</div>' +
      '<div class="archive-list">';
    WORD_UNITS.forEach(function (u, idx) {
      html += '<div class="archive-item" data-u="' + idx + '">' +
        '<div><div class="ai-date">UNIT ' + (idx + 1) + '</div>' +
        '<div class="ai-theme">' + esc(u.theme) + '</div></div>' +
        '<div class="ai-badge">10 词 →</div></div>';
    });
    html += '</div>';
    openModal(html);
    document.querySelectorAll("#modalCard [data-u]").forEach(function (el) {
      el.addEventListener("click", function () {
        const u = WORD_UNITS[+el.dataset.u];
        let h = '<div class="m-head"><div class="m-title">' + esc(u.theme) + '</div>' +
          '<button class="m-close" data-close>×</button></div>' +
          '<div class="hint" style="margin-top:0">UNIT ' + (+el.dataset.u + 1) + ' / ' + WORD_UNITS.length + ' · 共 10 词</div>' +
          '<div class="day-words-list">';
        u.words.forEach(function (w) {
          h += '<div class="dw-item"><div><div class="dw-w">' + esc(w.word) + ' <span style="color:var(--ink-soft);font-weight:400">' + esc(w.phonetic) + '</span></div>' +
            '<div class="dw-m">' + esc(w.meaning) + '</div></div>' +
            '<button class="dw-s" data-word="' + escAttr(w.word) + '">🔊</button></div>';
        });
        h += '</div>';
        openModal(h);
        document.querySelectorAll("#modalCard .dw-s").forEach(function (b) {
          b.addEventListener("click", function (e) {
            e.stopPropagation();
            speak(b.dataset.word);
          });
        });
      });
    });
  }

  // ============================================================
  //  新闻
  // ============================================================
  let curNewsDate = todayStr;
  let curVocabMap = {};       // 当前文章的 (norm(key) -> {kind,data}) 映射，事件委托时使用
  let curVocabDisplay = {};   // 当前文章的 (key -> 展示文本)，未匹配时用作兜底显示

  function renderNews() {
    const picker = document.getElementById("newsPicker");
    picker.innerHTML = "";
    const days = daysBetween(BASE, today);

    if (curNewsDate && daysBetween(new Date(BASE), new Date(curNewsDate + "T00:00:00")) > days) {
      curNewsDate = todayStr;
    }

    for (let i = days; i >= 0; i--) {
      const d = new Date(BASE);
      d.setDate(d.getDate() + i);
      const ds = ymd(d);
      const el = document.createElement("div");
      el.className = "np-day" + (ds === curNewsDate ? " active" : "");
      el.textContent = ds.slice(5);
      el.title = ds;
      el.addEventListener("click", function () {
        curNewsDate = ds;
        renderNews();
        document.getElementById("newsMain").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      picker.appendChild(el);
    }

    const article = NEWS_ARTICLES[(((daysBetween(BASE, new Date(curNewsDate + "T00:00:00"))) % NEWS_ARTICLES.length) + NEWS_ARTICLES.length) % NEWS_ARTICLES.length];
    renderArticle(article, curNewsDate === todayStr);
  }

  function renderArticle(a, isToday) {
    curVocabMap = {};
    function add(key, kind, data) { curVocabMap[norm(key)] = { kind: kind, data: data }; }
    a.vocab.forEach(function (v) { add(v.word, "word", v); });
    a.phrases.forEach(function (p) { add(p.phrase, "phrase", p); });
    // 收集 content 里所有 data-v 出现过的 key 对应的展示文本（用于找不到注释时显示原词）
    curVocabDisplay = {};
    const spanRe = /<span class="vocab" data-v="([^"]+)">([^<]+)<\/span>/g;
    let mm;
    while ((mm = spanRe.exec(a.content)) !== null) {
      if (!curVocabDisplay[mm[1]]) curVocabDisplay[mm[1]] = mm[2];
    }

    const main = document.getElementById("newsMain");
    if (newsSpeak) stopNewsSpeak(); // 重新渲染时旧按钮已销毁，先清状态
    let html = '';
    html += '<div class="news-head">' +
      '<span class="nh-day">' + (isToday ? "TODAY · " : "") + curNewsDate + '</span>' +
      '<span style="color:var(--line)">|</span>' +
      '<span>' + esc(a.source.replace("示例外刊 · ", "")) + '</span>' +
    '</div>';
    html += '<div class="news-title">' + esc(a.title) + '</div>';
    html += '<div class="news-meta">' +
      '<span>生词 ' + a.vocab.length + ' · 词组 ' + a.phrases.length + ' · 长难句 ' + a.sentences.length + '</span>' +
      '<span>· 点击标红词查注释</span>' +
    '</div>';

    const plain = a.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    html += '<div class="news-actions">' +
      '<button class="news-btn primary" id="newsSpeakAll" data-label="🔊 朗读全文">🔊 朗读全文</button>' +
      '<button class="news-btn" id="newsSpeakTitle" data-label="📖 朗读标题">📖 朗读标题</button>' +
    '</div>';

    html += '<div class="article">' + a.content + '</div>';

    html += '<div class="sec-block"><div class="sec-label">Translation · 中文译文</div>' +
      '<div class="translation">' + esc(a.translation).replace(/\n/g, "<br>") + '</div></div>';
    html += '<div class="sec-block"><div class="sec-label">Phrases · 词组</div>';
    a.phrases.forEach(function (p) {
      html += '<div class="phrase-item"><div class="p-en"><b>' + esc(p.phrase) + '</b></div>' +
        '<div class="p-zh">' + esc(p.meaning) + '</div></div>';
    });
    html += '</div>';
    html += '<div class="sec-block"><div class="sec-label">Long Sentences · 长难句解析</div>';
    a.sentences.forEach(function (s) {
      html += '<div class="sent-item"><div class="sent-text">"' + esc(s.sentence) + '"</div>' +
        '<div class="sent-analysis">' + esc(s.analysis) + '</div></div>';
    });
    html += '</div>';

    main.innerHTML = html;

    main.querySelectorAll(".article p").forEach(function (p) {
      const txt = p.textContent.replace(/🔊$/, "").trim();
      if (!txt) return;
      const b = document.createElement("button");
      b.className = "speak-btn small";
      b.textContent = "🔊";
      b.title = "朗读本段";
      b.addEventListener("click", function (e) { e.stopPropagation(); speak(txt); });
      p.appendChild(document.createTextNode(" "));
      p.appendChild(b);
    });

    document.getElementById("newsSpeakAll").addEventListener("click", function (e) {
      const btn = e.currentTarget;
      const chunks = splitTextForSpeech(plain, 140);
      toggleNewsSpeak(btn, chunks.length ? chunks : [plain]);
    });
    document.getElementById("newsSpeakTitle").addEventListener("click", function (e) {
      const btn = e.currentTarget;
      toggleNewsSpeak(btn, [a.title]);
    });

    // .vocab 点击统一走 #newsMain 上的事件委托（见 initVocabDelegation）
  }

  function norm(s) {
    return String(s == null ? "" : s).toLowerCase().replace(/\s+/g, " ").trim();
  }

  function openVocabDrawer(entry) {
    const isWord = entry.kind === "word";
    const v = entry.data;
    const headWord = isWord ? v.word : v.phrase;
    const pos      = isWord ? v.pos   : "phrase";
    const phon     = isWord && v.phonetic ? v.phonetic : "";
    const meaning  = v.meaning || "";
    const speakText = isWord ? v.word : v.phrase;

    const html =
      '<div class="sheet-card vocab-sheet">' +
        '<div class="sheet-grip"></div>' +
        '<div class="sheet-head">' +
          '<div class="sh-word-row">' +
            '<span class="sh-word">' + esc(headWord) + '</span>' +
            '<span class="sh-pos">' + esc(pos) + '</span>' +
          '</div>' +
          '<button class="sheet-close" data-close aria-label="关闭">×</button>' +
        '</div>' +
        (phon ? '<div class="sh-phon">' + esc(phon) + '</div>' : '<div class="sh-phon" style="height:8px"></div>') +
        '<div class="vc-meaning">' + esc(meaning) + '</div>' +
        '<div class="vc-actions">' +
          '<button class="vc-speak" id="vcSpeak">🔊 听发音</button>' +
          '<button class="vc-done" data-close>明白了</button>' +
        '</div>' +
      '</div>';
    openModal(html, "sheet");
    document.getElementById("vcSpeak").addEventListener("click", function (e) {
      e.stopPropagation();
      flashSpeakBtn(e.currentTarget, "正在朗读…");
      speak(speakText);
    });
  }

  // 当 data-v 在 vocab/phrases 找不到时，仍然弹出抽屉显示该英文原词，避免"完全无反应"
  function openUnknownWordDrawer(display, key) {
    const html =
      '<div class="sheet-card vocab-sheet">' +
        '<div class="sheet-grip"></div>' +
        '<div class="sheet-head">' +
          '<div class="sh-word-row">' +
            '<span class="sh-word">' + esc(display || key) + '</span>' +
            '<span class="sh-pos">tap · 点击</span>' +
          '</div>' +
          '<button class="sheet-close" data-close aria-label="关闭">×</button>' +
        '</div>' +
        '<div class="vc-meaning" style="background:rgba(255,210,74,.18);border-style:dashed">' +
          '本词（<b>' + esc(key) + '</b>）的注释还没收录到词库里。<br>已为你自动朗读该词的发音。' +
        '</div>' +
        '<div class="vc-actions">' +
          '<button class="vc-speak" id="vcSpeakUnknown">🔊 听发音</button>' +
          '<button class="vc-done" data-close>关闭</button>' +
        '</div>' +
      '</div>';
    openModal(html, "sheet");
    document.getElementById("vcSpeakUnknown").addEventListener("click", function (e) {
      e.stopPropagation();
      flashSpeakBtn(e.currentTarget, "正在朗读…");
      speak(display || key);
    });
  }

  // 新闻标红词点击 —— 事件委托（绑定一次，永远稳定，不依赖 renderArticle 重渲染）
  function initVocabDelegation() {
    const main = document.getElementById("newsMain");
    if (!main || main.__vocabDelegated) return;
    main.__vocabDelegated = true;

    function handle(target) {
      const span = target.closest && target.closest(".vocab");
      if (!span || !main.contains(span)) return false;
      const key = span.dataset.v || "";
      const text = span.textContent || key;
      // 视觉反馈：active class（CSS 也已配 :active）
      span.classList.add("vocab-pressed");
      setTimeout(function () { span.classList.remove("vocab-pressed"); }, 200);

      const v = curVocabMap[norm(key)] || curVocabMap[norm(text)];
      if (v) {
        openVocabDrawer(v);
      } else {
        // 兜底：显示原词 + 朗读发音，避免"完全无反应"
        console.warn("[vocab miss]", key, "→", text);
        openUnknownWordDrawer(text, key);
      }
      return true;
    }

    // 同时绑定 click + pointerup，兼容移动端某些 WebView
    main.addEventListener("click", function (e) {
      if (handle(e.target)) e.stopPropagation();
    });
    // 移动端有些场景 click 会被拦截，额外绑 pointerup（不过度，仅在容器内）
    let lastPointerUp = 0;
    main.addEventListener("pointerup", function (e) {
      if (!e.target.closest || !e.target.closest(".vocab")) return;
      const now = Date.now();
      if (now - lastPointerUp < 250) return; // 防止 click + pointerup 双触发
      lastPointerUp = now;
      if (handle(e.target)) e.stopPropagation();
    });
  }

  // ============================================================
  //  通用弹窗
  // ============================================================
  const modal = document.getElementById("modal");
  const modalCard = document.getElementById("modalCard");
  function openModal(html, variant) {
    modalCard.innerHTML = html;
    modal.classList.toggle("sheet-mode", variant === "sheet");
    modal.classList.add("show");
    modalCard.scrollTop = 0;
    bindClose();
  }
  function closeModal() { modal.classList.remove("show"); }
  function bindClose() {
    modalCard.querySelectorAll("[data-close]").forEach(function (b) {
      b.addEventListener("click", closeModal);
    });
  }
  modal.querySelector(".modal-mask").addEventListener("click", closeModal);

  // ============================================================
  //  TTS
  // ============================================================
  let voices = [];
  function loadVoices() {
    if (window.speechSynthesis) voices = speechSynthesis.getVoices();
  }
  if (window.speechSynthesis) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
    setTimeout(loadVoices, 200);
    setTimeout(loadVoices, 1000);
  }

  const FEMALE_VOICE_HINTS = [
    "Microsoft Aria Online",
    "Microsoft Jenny Online",
    "Microsoft Zira",
    "Samantha",
    "Karen",
    "Google US English",
    "Google UK English Female",
    "Tessa",
    "Fiona",
    "Victoria",
    "Allison",
    "Microsoft Hazel"
  ];

  function pickFemaleVoice() {
    if (!voices.length) return null;
    for (let i = 0; i < FEMALE_VOICE_HINTS.length; i++) {
      const h = FEMALE_VOICE_HINTS[i];
      const found = voices.find(function (v) {
        return v.name && v.name.toLowerCase().indexOf(h.toLowerCase()) !== -1;
      });
      if (found) return found;
    }
    const enF = voices.find(function (v) {
      return /^en/i.test(v.lang) && /female|woman|girl|zira|samantha|karen|tessa|victoria|aria|jenny/i.test(v.name);
    });
    if (enF) return enF;
    return voices.find(function (v) { return /^en/i.test(v.lang); }) || voices[0];
  }

  function ensureVoices(cb) {
    if (!window.speechSynthesis) { showToast("此设备不支持语音合成"); cb(null); return; }
    if (voices.length) { cb(pickFemaleVoice()); return; }
    let waited = 0;
    const tick = setInterval(function () {
      waited += 200;
      loadVoices();
      if (voices.length) { clearInterval(tick); cb(pickFemaleVoice()); }
      else if (waited > 2500) { clearInterval(tick); cb(null); }
    }, 200);
  }

  function speak(text, onend) {
    if (!text) { onend && onend(); return; }
    if (newsSpeak) stopNewsSpeak(); // 朗读单词/标红词时，停掉新闻朗读并复位按钮
    if (!window.speechSynthesis) { showToast("此设备不支持语音合成"); onend && onend(); return; }
    window.speechSynthesis.cancel();
    ensureVoices(function (v) {
      if (!v) { showToast("未检测到英文语音"); onend && onend(); return; }
      try {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = v.lang || "en-US";
        u.rate = 0.92;
        u.pitch = 1.05;
        u.voice = v;
        u.onerror = function () { showToast("朗读失败，请重试"); onend && onend(); };
        u.onend = function () { onend && onend(); };
        window.speechSynthesis.speak(u);
      } catch (e) { showToast("朗读失败：" + (e.message || e)); onend && onend(); }
    });
  }

  function speakSeq(arr, onend) {
    if (!arr || !arr.length) { onend && onend(); return; }
    if (!window.speechSynthesis) { showToast("此设备不支持语音合成"); onend && onend(); return; }
    window.speechSynthesis.cancel();
    ensureVoices(function (v) {
      if (!v) { showToast("未检测到英文语音"); onend && onend(); return; }
      // iOS Safari 要求所有 speak() 必须在同一次用户手势里调用，
      // 所以这里一次性把所有 utterance 都 speak() 入队，而不是在 onend 里再调。
      const list = arr.filter(function (t) { return t && t.trim && t.trim(); });
      if (!list.length) { onend && onend(); return; }
      let pending = list.length;
      function doneOne() {
        pending--;
        if (pending <= 0 && onend) onend();
      }
      list.forEach(function (text, i) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = v.lang || "en-US";
        u.rate = 0.9;
        u.pitch = 1.05;
        u.voice = v;
        u.onend = doneOne;
        u.onerror = doneOne;
        window.speechSynthesis.speak(u);
      });
    });
  }

  function flashSpeakBtn(btn, text) {
    if (!btn || !btn.classList) return;  // 防呆：传进来的是元素（currentTarget），不是文字节点
    const orig = btn.dataset.origText != null ? btn.dataset.origText : btn.textContent;
    if (btn.dataset.origText == null) btn.dataset.origText = orig;
    btn.textContent = text;
    btn.disabled = true;
    btn.classList.add("is-speaking");
    setTimeout(function () {
      btn.textContent = orig;
      btn.disabled = false;
      btn.classList.remove("is-speaking");
    }, 1800);
  }

  // ---- 单词卡片朗读（大圆 ♪ 按钮）：点击一次朗读一次，再点停止 ----
  function resetWordPlayBtn(btn) {
    if (!btn || !btn.classList) return;
    btn.classList.remove("is-playing");
    const icon = btn.querySelector(".play-icon");
    if (icon) icon.textContent = "♪";
  }
  function stopWordPlay() {
    if (!wordLoop) return;
    const btn = wordLoop.btn;
    wordLoop = null;
    window.speechSynthesis.cancel();
    resetWordPlayBtn(btn);
  }
  function playWordCard(text, btn) {
    // 如果同一按钮正在播放，点击则停止
    if (wordLoop && wordLoop.btn === btn) {
      stopWordPlay();
      return;
    }
    // 停止其他按钮的播放
    stopWordPlay();
    wordLoop = { btn: btn, text: text };
    btn.classList.add("is-playing");
    const icon = btn.querySelector(".play-icon");
    if (icon) icon.textContent = "⏸";
    speak(text, function () {
      if (wordLoop && wordLoop.btn === btn) {
        wordLoop = null;
        resetWordPlayBtn(btn);
      }
    });
  }

  // ---- 新闻朗读：播放 / 暂停 / 继续 切换 ----
  // 注意：iOS Safari 的 speechSynthesis.pause()/resume() 不可靠，
  // 所以这里用「cancel 停声 + 记录当前句下标 + 从当前句重新入队」实现真暂停。
  function stopNewsSpeak() {
    if (!newsSpeak) return;
    const btn = newsSpeak.btn;
    newsSpeak = null;
    window.speechSynthesis.cancel();
    if (btn && btn.classList) {
      btn.textContent = btn.dataset.label || "🔊 朗读全文";
      btn.classList.remove("is-speaking");
    }
  }
  // 一次性把整段文本全部入队（沿用 v20 验证过在 iPhone 上能连续读的机制），
  // 并通过 onstart 记录当前播到第几句，供暂停后从断点继续。
  function speakNewsList(list, gen, onAllEnd) {
    if (!window.speechSynthesis) { showToast("此设备不支持语音合成"); onAllEnd(); return; }
    window.speechSynthesis.cancel();
    ensureVoices(function (v) {
      if (!v) { showToast("未检测到英文语音"); onAllEnd(); return; }
      const real = list.filter(function (t) { return t && t.trim; });
      if (!real.length) { onAllEnd(); return; }
      let pending = real.length;
      function done() {
        pending--;
        if (pending <= 0 && onAllEnd) onAllEnd();
      }
      real.forEach(function (text, i) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = v.lang || "en-US";
        u.rate = 0.9;
        u.pitch = 1.05;
        u.voice = v;
        u.onstart = function () { if (newsSpeak && newsSpeak.gen === gen) newsSpeak.idx = i; };
        u.onend = function () { if (newsSpeak && newsSpeak.gen === gen) done(); };
        u.onerror = u.onend;
        window.speechSynthesis.speak(u);
      });
    });
  }
  function toggleNewsSpeak(btn, texts) {
    // 同一按钮且正在朗读 → 切换 暂停 / 继续
    if (newsSpeak && newsSpeak.btn === btn) {
      if (newsSpeak.state === "playing") {
        // 暂停：直接 cancel 停声（iPhone 上最可靠）
        newsSpeak.state = "paused";
        window.speechSynthesis.cancel();
        btn.textContent = "▶ 继续";
        return;
      }
      if (newsSpeak.state === "paused") {
        // 继续：从当前句重新入队
        newsSpeak.state = "playing";
        btn.textContent = "⏸ 暂停";
        const gen = ++newsSpeak.gen; // 失效旧队列的回调
        speakNewsList(texts.slice(newsSpeak.idx), gen, function () {
          if (newsSpeak && newsSpeak.btn === btn && newsSpeak.state === "playing" && newsSpeak.gen === gen) {
            newsSpeak = null;
            btn.textContent = btn.dataset.label || "🔊 朗读全文";
            btn.classList.remove("is-speaking");
          }
        });
        return;
      }
    }
    // 全新开始
    stopNewsSpeak();
    newsSpeak = { btn: btn, list: texts, idx: 0, state: "playing", gen: 1 };
    btn.textContent = "⏸ 暂停";
    btn.classList.add("is-speaking");
    speakNewsList(texts, 1, function () {
      if (newsSpeak && newsSpeak.btn === btn && newsSpeak.state === "playing" && newsSpeak.gen === 1) {
        newsSpeak = null;
        btn.textContent = btn.dataset.label || "🔊 朗读全文";
        btn.classList.remove("is-speaking");
      }
    });
  }

  // ---- 长文本分块（避免 iOS 长 utterance 不发声）----
  function splitTextForSpeech(text, maxLen) {
    if (!text) return [];
    maxLen = maxLen || 150;
    const sentences = text.match(/[^.!?。！？]+[.!?。！？]+|[^.!?。！？]+$/g) || [text];
    const chunks = [];
    let cur = "";
    sentences.forEach(function (s) {
      s = s.trim();
      if (!s) return;
      if ((cur + " " + s).length <= maxLen) {
        cur = cur ? cur + " " + s : s;
      } else {
        if (cur) chunks.push(cur);
        cur = s;
      }
    });
    if (cur) chunks.push(cur);
    return chunks.length ? chunks : [text];
  }

  function showToast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 1800);
  }

  // ============================================================
  //  工具
  // ============================================================
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escAttr(s) { return esc(s); }

  // ============================================================
  //  启动
  // ============================================================
  saveState();
  initVocabDelegation();
  applyHashRoute();
  if (!location.hash) switchPage("today");
})();
