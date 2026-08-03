# Aussie 10 · 澳洲旅游每日单词

移动端 H5 PWA：每日 10 词（按日期循环 142 单元 × 10 词 = 1420 词，无重复覆盖约 4.6 个月）+ 往期回顾 + 外刊阅读（30 篇带注释短文循环）。

**视觉风格**：磨砂玻璃音乐 App 风（冷蓝紫 + 暖橘点缀）。所有数据内嵌在 `data.js`，进度存 localStorage（key `aussie10_v3`），无需后端。

---

## 📦 项目结构

```
.
├── index.html          # 单页入口（含 PWA meta）
├── style.css           # 样式（约 1100 行）
├── app.js              # 主逻辑（约 780 行）
├── data.js             # 142 单元词库 + 30 篇外刊（内嵌）
├── manifest.json       # PWA 清单
├── sw.js               # Service Worker（离线缓存）
├── icons/
│   ├── icon-192.png    # Android Chrome 默认
│   ├── icon-512.png    # Android Chrome 高清
│   ├── apple-touch-icon.png  # iOS 主屏（180×180）
│   ├── favicon-16.png  # 浏览器 tab
│   ├── favicon-32.png
│   └── favicon-64.png
├── .gitignore
└── README.md
```

---

## 🚀 部署步骤（推荐 GitHub Pages）

> **PWA 必须 HTTPS**：本地 HTTP 测试可行，但「安装到主屏」「Service Worker 注册」都需要 HTTPS（GitHub Pages/Vercel/Netlify/Cloudflare Pages 全都自带 HTTPS，零配置）。

### 方式 A：GitHub Pages（最简单，零成本）

1. **在 GitHub 创建一个新仓库**
   - 打开 https://github.com/new
   - 仓库名填 `aussie-10`（或你喜欢的）
   - 选 **Public**（Pages 免费托管要 Public）
   - 不要勾选 "Add a README"（我们本地有）

2. **推送本地仓库到 GitHub**
   ```bash
   # 在项目根目录执行
   git remote add origin https://github.com/你的用户名/aussie-10.git
   git branch -M main
   git push -u origin main
   ```

3. **开启 GitHub Pages**
   - 打开仓库 → **Settings** → 左侧 **Pages**
   - **Source** 选 `Deploy from a branch`
   - **Branch** 选 `main`，目录 `/ (root)`
   - 点 **Save**
   - 等 1-2 分钟，刷新页面会显示一行绿色："Your site is live at ..."

4. **访问你的 H5**
   - 地址：`https://你的用户名.github.io/aussie-10/`
   - 重要：路径末尾的 `/` 不能省（GitHub Pages 子目录规则）

### 方式 B：Vercel（自动部署，零配置，国内外访问都快）

1. 打开 https://vercel.com → 用 GitHub 登录
2. 点 **Add New Project** → 选 `aussie-10` 仓库 → **Import**
3. 配置保持默认（Framework Preset: Other）→ 点 **Deploy**
4. 30 秒后给你一个 `xxx.vercel.app` 域名（自动 HTTPS + 全球 CDN）

### 方式 C：Netlify Drop（最最快，3 秒部署）

1. 打开 https://app.netlify.com/drop
2. **把整个项目文件夹直接拖进网页**（不需要 git）
3. 自动给你一个 `xxx.netlify.app` 域名
4. 之后想接 GitHub 自动部署，再去 Netlify 后台关联仓库

### 方式 D：Cloudflare Pages（国内访问最稳）

1. 打开 https://pages.cloudflare.com → 登录
2. **Create a project** → **Connect to Git** → 选仓库
3. Build settings 留空（无构建步骤）→ **Save and Deploy**
4. 自动给你 `xxx.pages.dev` 域名（Cloudflare CDN 国内连通性最好）

---

## 📱 让 H5「像原生 App」（PWA 安装）

部署完成后，用户第一次访问 HTTPS 域名时会自动有安装提示，但你可以主动告诉用户：

### iOS Safari（iPhone/iPad）

1. 用 Safari 打开你的网址
2. 点底部分享按钮 `□↑` → 选 **「添加到主屏幕」**
3. 名字默认 `Aussie 10` → 点右上角 **添加**
4. 回到桌面看到新图标，点开就是**全屏 App 模式**（无地址栏、无 Safari 工具栏）

### Android Chrome

1. 用 Chrome 打开网址
2. 浏览器会自动弹出 **「添加到主屏幕」** 横幅
3. 也可以手动：右上角菜单 `⋮` → **「添加到主屏幕」** 或 **「安装应用」**
4. 安装后从桌面点开就是**独立窗口**（无地址栏）

### 桌面 Chrome / Edge

1. 地址栏右侧会出现 **安装图标** `⊕`（电脑图标+下箭头）
2. 点击 → 确认安装 → 桌面出现独立窗口 App
3. 启动时和原生 App 一样，无浏览器界面

---

## 🧪 本地测试 PWA

```bash
# 启动一个简单的本地服务器（项目根目录）
python3 -m http.server 8000
# 或
npx serve -l 8000
```

- 浏览器打开 http://localhost:8000
- 桌面 Chrome → DevTools（F12）→ **Application** 标签：
  - **Manifest**：应显示名字、图标、theme-color、display: standalone
  - **Service Workers**：应显示 `sw.js` 已激活
  - **Storage → Cache Storage**：应看到 `aussie10-v3-2026-08-03` 缓存
- 手机测试：用同一局域网 IP 访问 `http://192.168.x.x:8000`，但**安装到主屏幕需要 HTTPS**，所以要装到主屏幕必须先用上面 4 种方式之一部署到公网。

---

## 🛠 常见问题

### Q: iOS 状态栏和刘海重叠？
A: 已在 `style.css` 用 `env(safe-area-inset-*)` 适配。如果想顶部留更多空间，改 `#app` 的 `padding-top` 那个 calc。

### Q: 图标看起来糊？
A: 源图 500×500 缩到 16/32 时会有点糊。可以用 Photoshop 等做"正方形 + 圆角 + 描边 + 留白"的版本替换 `icons/favicon-*.png`。

### Q: Service Worker 改了不生效？
A: 改 `sw.js` 后必须改 `CACHE_NAME`（如 `aussie10-v3-2026-08-03` → `aussie10-v3-2026-08-04`），用户访问会清旧缓存。

### Q: 数据更新后用户看不到？
A: `data.js` 在 SW 预缓存里，version bump 后会自动更新。如果只是改词库不改 SW，用户需要手动清缓存（DevTools → Application → Clear storage）。

### Q: 想换图标？
A: 把新的源图复制到 `icons/source.png`（500×500+），重新跑：
```bash
sips -z 512 512 icons/source.png --out icons/icon-512.png
sips -z 192 192 icons/source.png --out icons/icon-192.png
sips -z 180 180 icons/source.png --out icons/apple-touch-icon.png
sips -z 32 32 icons/source.png --out icons/favicon-32.png
sips -z 16 16 icons/source.png --out icons/favicon-16.png
```

---

## 📝 开发约定

- 词库/新闻数据：改 `data.js`，确保 `WORD_UNITS` 和 `NEWS_ARTICLES` 数组结构不变
- 进度存储：localStorage key 是 `aussie10_v3`，改 key 要做兼容
- TTS：用 Web Speech API，强制英文女声（`FEMALE_VOICE_HINTS` 优先级列表）
- 视觉风格：当前是**磨砂玻璃音乐 App 风**（冷蓝紫 + 暖橘），改风格前先看 `.workbuddy/memory/` 的迭代历史，避免重复试错

---

部署有任何问题随时问我。
