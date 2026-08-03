// ============================================================
//  Aussie 10 — 澳洲旅游每日单词 + 外刊阅读 数据文件
//  所有内容均为英语学习材料（示例外刊），可离线使用
// ============================================================

// 每日单词：14 个主题单元，每个单元 10 词，按日期循环分发
const WORD_UNITS = [
  {
    theme: "机场与登机",
    words: [
      { word: "boarding pass", phonetic: "/ˈbɔːdɪŋ pɑːs/", pos: "n.", meaning: "登机牌", example: "Please show your boarding pass at the gate.", exampleZh: "请在登机口出示登机牌。" },
      { word: "departure", phonetic: "/dɪˈpɑːtʃə/", pos: "n.", meaning: "出发，离港", example: "The departure time is 9:40 a.m.", exampleZh: "起飞时间是上午 9:40。" },
      { word: "gate", phonetic: "/ɡeɪt/", pos: "n.", meaning: "登机口", example: "Your flight leaves from Gate 12.", exampleZh: "您的航班从 12 号登机口起飞。" },
      { word: "luggage", phonetic: "/ˈlʌɡɪdʒ/", pos: "n.", meaning: "行李", example: "Where can I collect my luggage?", exampleZh: "我在哪里取行李？" },
      { word: "customs", phonetic: "/ˈkʌstəmz/", pos: "n.", meaning: "海关", example: "You must declare food at customs.", exampleZh: "你必须在海关申报食物。" },
      { word: "immigration", phonetic: "/ˌɪmɪˈɡreɪʃn/", pos: "n.", meaning: "入境检查", example: "Immigration was quick today.", exampleZh: "今天入境检查很快。" },
      { word: "aisle seat", phonetic: "/aɪl siːt/", pos: "n.", meaning: "靠走道座位", example: "I'd like an aisle seat, please.", exampleZh: "我想要靠走道的座位。" },
      { word: "window seat", phonetic: "/ˈwɪndəʊ siːt/", pos: "n.", meaning: "靠窗座位", example: "A window seat offers great views.", exampleZh: "靠窗座位视野很好。" },
      { word: "layover", phonetic: "/ˈleɪəʊvə/", pos: "n.", meaning: "中转停留", example: "We have a three-hour layover in Singapore.", exampleZh: "我们在新加坡中转停留三小时。" },
      { word: "terminal", phonetic: "/ˈtɜːmɪnl/", pos: "n.", meaning: "航站楼", example: "International flights leave from Terminal 3.", exampleZh: "国际航班从 3 号航站楼出发。" }
    ]
  },
  {
    theme: "酒店入住",
    words: [
      { word: "reception", phonetic: "/rɪˈsepʃn/", pos: "n.", meaning: "前台", example: "Please leave the keys at reception.", exampleZh: "请把钥匙留在前台。" },
      { word: "reservation", phonetic: "/ˌrezəˈveɪʃn/", pos: "n.", meaning: "预订", example: "I have a reservation under Chen.", exampleZh: "我以「陈」的名字预订了房间。" },
      { word: "check-in", phonetic: "/ˈtʃek ɪn/", pos: "n.", meaning: "入住登记", example: "Check-in starts at 2 p.m.", exampleZh: "入住登记下午 2 点开始。" },
      { word: "check-out", phonetic: "/ˈtʃek aʊt/", pos: "n.", meaning: "退房", example: "What time is check-out?", exampleZh: "几点退房？" },
      { word: "complimentary", phonetic: "/ˌkɒmplɪˈmentri/", pos: "adj.", meaning: "免费的，赠送的", example: "Breakfast is complimentary.", exampleZh: "早餐免费提供。" },
      { word: "amenities", phonetic: "/əˈmiːnətiz/", pos: "n.", meaning: "设施，便利用品", example: "The room has basic amenities.", exampleZh: "房间有基本设施。" },
      { word: "housekeeping", phonetic: "/ˈhaʊskiːpɪŋ/", pos: "n.", meaning: "客房服务", example: "Housekeeping will clean the room soon.", exampleZh: "客房服务很快会打扫房间。" },
      { word: "wake-up call", phonetic: "/ˈweɪk ʌp kɔːl/", pos: "n.", meaning: "叫醒服务", example: "I'd like a wake-up call at 6 a.m.", exampleZh: "我想订早上 6 点的叫醒服务。" },
      { word: "deposit", phonetic: "/dɪˈpɒzɪt/", pos: "n.", meaning: "押金", example: "We need a $50 deposit.", exampleZh: "我们需要 50 美元押金。" },
      { word: "vacancy", phonetic: "/ˈveɪkənsi/", pos: "n.", meaning: "空房", example: "Do you have any vacancies?", exampleZh: "你们有空房吗？" }
    ]
  },
  {
    theme: "餐厅点餐",
    words: [
      { word: "menu", phonetic: "/ˈmenjuː/", pos: "n.", meaning: "菜单", example: "Could I see the menu?", exampleZh: "我能看看菜单吗？" },
      { word: "appetizer", phonetic: "/ˈæpɪtaɪzə/", pos: "n.", meaning: "开胃菜", example: "The appetizer was delicious.", exampleZh: "开胃菜很好吃。" },
      { word: "main course", phonetic: "/meɪn kɔːs/", pos: "n.", meaning: "主菜", example: "I'll have the steak as my main course.", exampleZh: "我主菜点牛排。" },
      { word: "beverage", phonetic: "/ˈbevərɪdʒ/", pos: "n.", meaning: "饮料", example: "What beverage would you like?", exampleZh: "你想喝点什么？" },
      { word: "bill", phonetic: "/bɪl/", pos: "n.", meaning: "账单", example: "Could we have the bill, please?", exampleZh: "请给我们账单好吗？" },
      { word: "tip", phonetic: "/tɪp/", pos: "n.", meaning: "小费", example: "A 10% tip is standard.", exampleZh: "给 10% 的小费是惯例。" },
      { word: "waiter", phonetic: "/ˈweɪtə/", pos: "n.", meaning: "男服务员", example: "The waiter recommended the fish.", exampleZh: "服务员推荐了鱼。" },
      { word: "well-done", phonetic: "/ˌwel ˈdʌn/", pos: "adj.", meaning: "全熟的", example: "I'd like my beef well-done.", exampleZh: "我的牛肉要全熟。" },
      { word: "medium rare", phonetic: "/ˌmiːdiəm ˈreə/", pos: "adj.", meaning: "三分熟", example: "He prefers his steak medium rare.", exampleZh: "他喜欢牛排三分熟。" },
      { word: "takeaway", phonetic: "/ˈteɪkəweɪ/", pos: "n.", meaning: "外带", example: "We ordered takeaway for dinner.", exampleZh: "我们晚餐点了外带。" }
    ]
  },
  {
    theme: "交通导航",
    words: [
      { word: "intersection", phonetic: "/ˌɪntəˈsekʃn/", pos: "n.", meaning: "十字路口", example: "Turn left at the next intersection.", exampleZh: "在下一个十字路口左转。" },
      { word: "pedestrian crossing", phonetic: "/pəˈdestriən ˈkrɒsɪŋ/", pos: "n.", meaning: "人行横道", example: "Use the pedestrian crossing.", exampleZh: "走人行横道。" },
      { word: "roundabout", phonetic: "/ˈraʊndəbaʊt/", pos: "n.", meaning: "环岛", example: "Take the second exit at the roundabout.", exampleZh: "在环岛走第二个出口。" },
      { word: "one-way street", phonetic: "/ˌwʌn ˈweɪ striːt/", pos: "n.", meaning: "单行道", example: "This is a one-way street.", exampleZh: "这是单行道。" },
      { word: "petrol station", phonetic: "/ˈpetrl steɪʃn/", pos: "n.", meaning: "加油站", example: "The petrol station is ahead.", exampleZh: "加油站在前方。" },
      { word: "car rental", phonetic: "/kɑː ˈrentl/", pos: "n.", meaning: "租车", example: "We booked a car rental online.", exampleZh: "我们在网上预订了租车。" },
      { word: "tram", phonetic: "/træm/", pos: "n.", meaning: "有轨电车", example: "Take the tram to the city centre.", exampleZh: "坐有轨电车去市中心。" },
      { word: "ferry", phonetic: "/ˈferi/", pos: "n.", meaning: "渡轮", example: "The ferry goes to Manly.", exampleZh: "渡轮开往曼利。" },
      { word: "platform", phonetic: "/ˈplætfɔːm/", pos: "n.", meaning: "站台", example: "The train leaves from Platform 4.", exampleZh: "火车从 4 号站台出发。" },
      { word: "transfer", phonetic: "/trænsˈfɜː/", pos: "v.", meaning: "换乘", example: "You must transfer at Central.", exampleZh: "你必须在中央车站换乘。" }
    ]
  },
  {
    theme: "购物",
    words: [
      { word: "bargain", phonetic: "/ˈbɑːɡɪn/", pos: "v./n.", meaning: "讨价还价；便宜货", example: "She loves to bargain at markets.", exampleZh: "她喜欢在市场讨价还价。" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", pos: "n.", meaning: "收据", example: "Keep your receipt.", exampleZh: "保留你的收据。" },
      { word: "refund", phonetic: "/ˈriːfʌnd/", pos: "n.", meaning: "退款", example: "We offer a full refund.", exampleZh: "我们提供全额退款。" },
      { word: "discount", phonetic: "/ˈdɪskaʊnt/", pos: "n.", meaning: "折扣", example: "Students get a discount.", exampleZh: "学生有折扣。" },
      { word: "on sale", phonetic: "/ɒn ˈseɪl/", pos: "phrase", meaning: "打折中", example: "These shoes are on sale.", exampleZh: "这些鞋在打折。" },
      { word: "fitting room", phonetic: "/ˈfɪtɪŋ ruːm/", pos: "n.", meaning: "试衣间", example: "The fitting room is over there.", exampleZh: "试衣间在那边。" },
      { word: "cashier", phonetic: "/kæˈʃɪə/", pos: "n.", meaning: "收银员", example: "The cashier scanned my items.", exampleZh: "收银员扫描了我的商品。" },
      { word: "duty-free", phonetic: "/ˌdjuːti ˈfriː/", pos: "adj.", meaning: "免税的", example: "I bought duty-free perfume.", exampleZh: "我买了免税香水。" },
      { word: "size", phonetic: "/saɪz/", pos: "n.", meaning: "尺码", example: "What size do you wear?", exampleZh: "你穿什么尺码？" },
      { word: "out of stock", phonetic: "/aʊt əv ˈstɒk/", pos: "phrase", meaning: "缺货", example: "That model is out of stock.", exampleZh: "那款缺货了。" }
    ]
  },
  {
    theme: "景点游玩",
    words: [
      { word: "admission", phonetic: "/ədˈmɪʃn/", pos: "n.", meaning: "入场费", example: "Admission is free on Sundays.", exampleZh: "周日免费入场。" },
      { word: "guided tour", phonetic: "/ˌɡaɪdɪd ˈtʊə/", pos: "n.", meaning: "导览游", example: "We joined a guided tour.", exampleZh: "我们参加了导览游。" },
      { word: "landmark", phonetic: "/ˈlændmɑːk/", pos: "n.", meaning: "地标", example: "The Opera House is a famous landmark.", exampleZh: "歌剧院是著名地标。" },
      { word: "scenic", phonetic: "/ˈsiːnɪk/", pos: "adj.", meaning: "风景优美的", example: "We took a scenic drive.", exampleZh: "我们开车走了一条风景优美的路线。" },
      { word: "souvenir", phonetic: "/ˌsuːvəˈnɪə/", pos: "n.", meaning: "纪念品", example: "I bought a souvenir for my sister.", exampleZh: "我给妹妹买了纪念品。" },
      { word: "ticket office", phonetic: "/ˈtɪkɪt ɒfɪs/", pos: "n.", meaning: "售票处", example: "The ticket office opens at 9.", exampleZh: "售票处 9 点开门。" },
      { word: "opening hours", phonetic: "/ˈəʊpnɪŋ aʊəz/", pos: "n.", meaning: "开放时间", example: "Check the opening hours first.", exampleZh: "先查一下开放时间。" },
      { word: "photography", phonetic: "/fəˈtɒɡrəfi/", pos: "n.", meaning: "摄影", example: "Photography is not allowed.", exampleZh: "禁止摄影。" },
      { word: "lookout", phonetic: "/ˈlʊkaʊt/", pos: "n.", meaning: "观景台", example: "The lookout has a great view.", exampleZh: "观景台视野很好。" },
      { word: "heritage", phonetic: "/ˈherɪtɪdʒ/", pos: "n.", meaning: "遗产", example: "It is a World Heritage site.", exampleZh: "这是世界遗产地。" }
    ]
  },
  {
    theme: "应急与求助",
    words: [
      { word: "emergency", phonetic: "/ɪˈmɜːdʒənsi/", pos: "n.", meaning: "紧急情况", example: "Call 000 in an emergency.", exampleZh: "紧急情况拨打 000。" },
      { word: "ambulance", phonetic: "/ˈæmbjələns/", pos: "n.", meaning: "救护车", example: "An ambulance is on the way.", exampleZh: "救护车正在赶来。" },
      { word: "pharmacy", phonetic: "/ˈfɑːməsi/", pos: "n.", meaning: "药店", example: "The pharmacy closes at 8.", exampleZh: "药店 8 点关门。" },
      { word: "chemist", phonetic: "/ˈkemɪst/", pos: "n.", meaning: "药剂师；药店（澳式）", example: "Ask the chemist for advice.", exampleZh: "向药剂师咨询。" },
      { word: "lost", phonetic: "/lɒst/", pos: "adj.", meaning: "迷路的", example: "I am lost. Can you help?", exampleZh: "我迷路了，能帮忙吗？" },
      { word: "police", phonetic: "/pəˈliːs/", pos: "n.", meaning: "警察", example: "Report it to the police.", exampleZh: "向警察报案。" },
      { word: "hospital", phonetic: "/ˈhɒspɪtl/", pos: "n.", meaning: "医院", example: "The nearest hospital is 2 km away.", exampleZh: "最近的医院在 2 公里外。" },
      { word: "allergic", phonetic: "/əˈlɜːdʒɪk/", pos: "adj.", meaning: "过敏的", example: "I am allergic to nuts.", exampleZh: "我对坚果过敏。" },
      { word: "insurance", phonetic: "/ɪnˈʃʊərəns/", pos: "n.", meaning: "保险", example: "Travel insurance is important.", exampleZh: "旅行保险很重要。" },
      { word: "contact", phonetic: "/ˈkɒntækt/", pos: "v./n.", meaning: "联系", example: "Contact me if you need help.", exampleZh: "需要帮助就联系我。" }
    ]
  },
  {
    theme: "澳式俚语",
    words: [
      { word: "arvo", phonetic: "/ˈɑːvəʊ/", pos: "n.", meaning: "下午（afternoon）", example: "See you this arvo.", exampleZh: "今天下午见。" },
      { word: "barbie", phonetic: "/ˈbɑːbi/", pos: "n.", meaning: "烧烤（barbecue）", example: "We're having a barbie.", exampleZh: "我们要烧烤。" },
      { word: "brekkie", phonetic: "/ˈbreki/", pos: "n.", meaning: "早餐（breakfast）", example: "Brekkie is ready.", exampleZh: "早餐好了。" },
      { word: "mozzie", phonetic: "/ˈmɒzi/", pos: "n.", meaning: "蚊子（mosquito）", example: "Watch out for mozzies.", exampleZh: "小心蚊子。" },
      { word: "thongs", phonetic: "/θɒŋz/", pos: "n.", meaning: "人字拖（flip-flops）", example: "Wear thongs at the beach.", exampleZh: "海滩上穿人字拖。" },
      { word: "esky", phonetic: "/ˈeski/", pos: "n.", meaning: "便携冷藏箱", example: "Put the drinks in the esky.", exampleZh: "把饮料放进冷藏箱。" },
      { word: "servo", phonetic: "/ˈsɜːvəʊ/", pos: "n.", meaning: "加油站（service station）", example: "Stop at the servo.", exampleZh: "在加油站停一下。" },
      { word: "cuppa", phonetic: "/ˈkʌpə/", pos: "n.", meaning: "一杯茶/咖啡", example: "Fancy a cuppa?", exampleZh: "想喝杯茶吗？" },
      { word: "g'day", phonetic: "/ɡəˈdeɪ/", pos: "int.", meaning: "你好（good day）", example: "G'day, mate!", exampleZh: "你好，朋友！" },
      { word: "no worries", phonetic: "/nəʊ ˈwʌriz/", pos: "phrase", meaning: "没关系，不客气", example: "Thanks! — No worries.", exampleZh: "谢谢！— 不客气。" }
    ]
  },
  {
    theme: "天气与衣物",
    words: [
      { word: "forecast", phonetic: "/ˈfɔːkɑːst/", pos: "n.", meaning: "天气预报", example: "The forecast says rain.", exampleZh: "天气预报说有雨。" },
      { word: "humid", phonetic: "/ˈhjuːmɪd/", pos: "adj.", meaning: "潮湿的", example: "It's hot and humid.", exampleZh: "天气炎热潮湿。" },
      { word: "sunscreen", phonetic: "/ˈsʌnkreɪz/", pos: "n.", meaning: "防晒霜", example: "Apply sunscreen often.", exampleZh: "经常涂防晒霜。" },
      { word: "hat", phonetic: "/hæt/", pos: "n.", meaning: "帽子", example: "Wear a hat in the sun.", exampleZh: "阳光下戴帽子。" },
      { word: "jacket", phonetic: "/ˈdʒækɪt/", pos: "n.", meaning: "夹克", example: "Bring a jacket; it gets cold.", exampleZh: "带件夹克，会变冷。" },
      { word: "umbrella", phonetic: "/ʌmˈbrelə/", pos: "n.", meaning: "雨伞", example: "I forgot my umbrella.", exampleZh: "我忘了带伞。" },
      { word: "heatwave", phonetic: "/ˈhiːtweɪv/", pos: "n.", meaning: "热浪", example: "A heatwave is coming.", exampleZh: "热浪要来了。" },
      { word: "breeze", phonetic: "/briːz/", pos: "n.", meaning: "微风", example: "A cool breeze blew in.", exampleZh: "吹来一阵凉风。" },
      { word: "layer", phonetic: "/ˈleɪə/", pos: "n.", meaning: "层（衣物）", example: "Wear layers for changeable weather.", exampleZh: "多变天气要穿多层。" },
      { word: "waterproof", phonetic: "/ˈwɔːtəpruːf/", pos: "adj.", meaning: "防水的", example: "These boots are waterproof.", exampleZh: "这双靴子防水。" }
    ]
  },
  {
    theme: "社交寒暄",
    words: [
      { word: "pleased to meet you", phonetic: "/pliːzd tə miːt juː/", pos: "phrase", meaning: "很高兴认识你", example: "Pleased to meet you.", exampleZh: "很高兴认识你。" },
      { word: "How's it going?", phonetic: "/haʊz ɪt ˈɡəʊɪŋ/", pos: "phrase", meaning: "最近怎么样？", example: "Hi! How's it going?", exampleZh: "嗨！最近怎么样？" },
      { word: "cheers", phonetic: "/tʃɪəz/", pos: "int.", meaning: "干杯；谢谢；再见", example: "Cheers for your help!", exampleZh: "谢谢你的帮助！" },
      { word: "excuse me", phonetic: "/ɪkˈskjuːz miː/", pos: "phrase", meaning: "打扰一下；借过", example: "Excuse me, where's the lift?", exampleZh: "打扰一下，电梯在哪？" },
      { word: "pardon", phonetic: "/ˈpɑːdn/", pos: "int.", meaning: "请再说一遍", example: "Pardon? I didn't catch that.", exampleZh: "抱歉？我没听清。" },
      { word: "Could you repeat?", phonetic: "/kʊd juː rɪˈpiːt/", pos: "phrase", meaning: "能重复一遍吗？", example: "Could you repeat that, please?", exampleZh: "能重复一遍吗？" },
      { word: "I'm lost.", phonetic: "/aɪm lɒst/", pos: "phrase", meaning: "我迷路了。", example: "Sorry, I'm lost.", exampleZh: "抱歉，我迷路了。" },
      { word: "How much is this?", phonetic: "/haʊ mʌtʃ ɪz ðɪs/", pos: "phrase", meaning: "这个多少钱？", example: "How much is this postcard?", exampleZh: "这张明信片多少钱？" },
      { word: "Where is the toilet?", phonetic: "/weər ɪz ðə ˈtɔɪlət/", pos: "phrase", meaning: "厕所在哪？", example: "Where is the toilet, please?", exampleZh: "请问厕所在哪？" },
      { word: "Thank you very much.", phonetic: "/θæŋk juː ˈveri mʌtʃ/", pos: "phrase", meaning: "非常感谢。", example: "Thank you very much for everything.", exampleZh: "非常感谢你做的一切。" }
    ]
  },
  {
    theme: "食物与饮品",
    words: [
      { word: "flat white", phonetic: "/flæt ˈwaɪt/", pos: "n.", meaning: "澳式白咖啡", example: "A flat white, please.", exampleZh: "请来一杯澳白。" },
      { word: "meat pie", phonetic: "/miːt paɪ/", pos: "n.", meaning: "肉派", example: "Try the classic meat pie.", exampleZh: "尝尝经典肉派。" },
      { word: "Vegemite", phonetic: "/ˈvedʒɪmaɪt/", pos: "n.", meaning: "维吉麦酱", example: "Aussies love Vegemite on toast.", exampleZh: "澳洲人喜欢吐司涂维吉麦。" },
      { word: "lamington", phonetic: "/ˈlæmɪŋtən/", pos: "n.", meaning: "拉明顿蛋糕", example: "Lamingtons are a local treat.", exampleZh: "拉明顿是当地点心。" },
      { word: "pavlova", phonetic: "/pævˈləʊvə/", pos: "n.", meaning: "帕芙洛娃蛋糕", example: "Pavlova is a meringue dessert.", exampleZh: "帕芙洛娃是蛋白霜甜点。" },
      { word: "sausage sizzle", phonetic: "/ˈsɒsɪdʒ sɪzl/", pos: "n.", meaning: "香肠烧烤", example: "There's a sausage sizzle at the fair.", exampleZh: "集市上有香肠烧烤。" },
      { word: "iced coffee", phonetic: "/aɪst ˈkɒfi/", pos: "n.", meaning: "冰咖啡", example: "An iced coffee would be nice.", exampleZh: "来杯冰咖啡不错。" },
      { word: "sparkling water", phonetic: "/ˈspɑːklɪŋ ˈwɔːtə/", pos: "n.", meaning: "气泡水", example: "Sparkling water, no ice.", exampleZh: "气泡水，不加冰。" },
      { word: "tap water", phonetic: "/tæp ˈwɔːtə/", pos: "n.", meaning: "自来水", example: "Tap water is safe here.", exampleZh: "这里的自来水可饮用。" },
      { word: "gluten-free", phonetic: "/ˈɡluːtn friː/", pos: "adj.", meaning: "无麸质的", example: "Do you have gluten-free bread?", exampleZh: "有不含麸质的面包吗？" }
    ]
  },
  {
    theme: "海边与活动",
    words: [
      { word: "surf", phonetic: "/sɜːf/", pos: "n./v.", meaning: "冲浪", example: "Let's go surf in the morning.", exampleZh: "早上我们去冲浪。" },
      { word: "snorkel", phonetic: "/ˈsnɒkl/", pos: "v./n.", meaning: "浮潜", example: "We snorkelled on the reef.", exampleZh: "我们在礁石区浮潜。" },
      { word: "reef", phonetic: "/riːf/", pos: "n.", meaning: "礁，珊瑚礁", example: "The Great Barrier Reef is stunning.", exampleZh: "大堡礁美极了。" },
      { word: "tide", phonetic: "/taɪd/", pos: "n.", meaning: "潮汐", example: "Check the tide times.", exampleZh: "查一下潮汐时间。" },
      { word: "lifesaver", phonetic: "/ˈlaɪfseɪvə/", pos: "n.", meaning: "救生员", example: "The lifesaver blew the whistle.", exampleZh: "救生员吹了哨。" },
      { word: "rip", phonetic: "/rɪp/", pos: "n.", meaning: "离岸流", example: "Beware of rips when swimming.", exampleZh: "游泳当心离岸流。" },
      { word: "beach towel", phonetic: "/biːtʃ ˈtaʊəl/", pos: "n.", meaning: "沙滩巾", example: "Lay out your beach towel.", exampleZh: "铺开你的沙滩巾。" },
      { word: "swimsuit", phonetic: "/ˈswɪmsuːt/", pos: "n.", meaning: "泳衣", example: "Pack your swimsuit.", exampleZh: "带上泳衣。" },
      { word: "kayak", phonetic: "/ˈkaɪæk/", pos: "n.", meaning: "皮划艇", example: "We hired a kayak.", exampleZh: "我们租了皮划艇。" },
      { word: "sunrise", phonetic: "/ˈsʌnraɪz/", pos: "n.", meaning: "日出", example: "We watched the sunrise.", exampleZh: "我们看了日出。" }
    ]
  },
  {
    theme: "健康与身体",
    words: [
      { word: "headache", phonetic: "/ˈhedeɪk/", pos: "n.", meaning: "头痛", example: "I have a bad headache.", exampleZh: "我头痛得厉害。" },
      { word: "stomachache", phonetic: "/ˈstʌməkeɪk/", pos: "n.", meaning: "胃痛", example: "She has a stomachache.", exampleZh: "她胃痛。" },
      { word: "fever", phonetic: "/ˈfiːvə/", pos: "n.", meaning: "发烧", example: "He has a high fever.", exampleZh: "他发高烧。" },
      { word: "prescription", phonetic: "/prɪˈskrɪpʃn/", pos: "n.", meaning: "处方", example: "I need a prescription.", exampleZh: "我需要处方。" },
      { word: "nausea", phonetic: "/ˈnɔːziə/", pos: "n.", meaning: "恶心", example: "The boat trip caused nausea.", exampleZh: "坐船让我恶心。" },
      { word: "dizzy", phonetic: "/ˈdɪzi/", pos: "adj.", meaning: "头晕的", example: "I feel dizzy.", exampleZh: "我觉得头晕。" },
      { word: "pharmacist", phonetic: "/ˈfɑːməsɪst/", pos: "n.", meaning: "药剂师", example: "The pharmacist helped me.", exampleZh: "药剂师帮了我。" },
      { word: "clinic", phonetic: "/ˈklɪnɪk/", pos: "n.", meaning: "诊所", example: "Go to the travel clinic.", exampleZh: "去旅行诊所。" },
      { word: "symptom", phonetic: "/ˈsɪmptəm/", pos: "n.", meaning: "症状", example: "What are your symptoms?", exampleZh: "你有什么症状？" },
      { word: "medication", phonetic: "/ˌmedɪˈkeɪʃn/", pos: "n.", meaning: "药物", example: "Take your medication.", exampleZh: "服你的药。" }
    ]
  },
  {
    theme: "数字与时间",
    words: [
      { word: "dozen", phonetic: "/ˈdʌzn/", pos: "n.", meaning: "一打（12个）", example: "A dozen eggs, please.", exampleZh: "请给一打鸡蛋。" },
      { word: "fortnight", phonetic: "/ˈfɔːtnaɪt/", pos: "n.", meaning: "两周（澳式）", example: "I'll stay a fortnight.", exampleZh: "我会待两周。" },
      { word: "quarter", phonetic: "/ˈkwɔːtə/", pos: "n.", meaning: "一刻；四分之一", example: "It's a quarter past three.", exampleZh: "三点一刻。" },
      { word: "half past", phonetic: "/hɑːf pɑːst/", pos: "phrase", meaning: "半点", example: "Meet at half past nine.", exampleZh: "九点半见。" },
      { word: "a couple of", phonetic: "/ə ˈkʌpl əv/", pos: "phrase", meaning: "几个，一对", example: "In a couple of days.", exampleZh: "过几天。" },
      { word: "approximate", phonetic: "/əˈprɒksɪmət/", pos: "adj.", meaning: "大约的", example: "The cost is approximate.", exampleZh: "费用大约是。" },
      { word: "exactly", phonetic: "/ɪɡˈzæktli/", pos: "adv.", meaning: "确切地", example: "Not exactly, but close.", exampleZh: "不完全确切，但接近。" },
      { word: "punctual", phonetic: "/ˈpʌŋktʃuəl/", pos: "adj.", meaning: "准时的", example: "Be punctual, please.", exampleZh: "请准时。" },
      { word: "schedule", phonetic: "/ˈskedʒuːl/", pos: "n.", meaning: "日程", example: "Here is today's schedule.", exampleZh: "这是今天的日程。" },
      { word: "delay", phonetic: "/dɪˈleɪ/", pos: "n./v.", meaning: "延误", example: "The flight is delayed.", exampleZh: "航班延误了。" }
    ]
  },
  // ============ 新增单元（16 个，含主题实用场景）============
  {
    theme: "货币与支付",
    words: [
      { word: "currency", phonetic: "/ˈkʌrənsi/", pos: "n.", meaning: "货币" },
      { word: "exchange rate", phonetic: "/ɪksˈtʃeɪndʒ reɪt/", pos: "n.", meaning: "汇率" },
      { word: "ATM", phonetic: "/ˌeɪ tiː ˈem/", pos: "n.", meaning: "自动取款机" },
      { word: "withdraw", phonetic: "/wɪðˈdrɔː/", pos: "v.", meaning: "取款" },
      { word: "credit card", phonetic: "/ˈkredɪt kɑːd/", pos: "n.", meaning: "信用卡" },
      { word: "debit card", phonetic: "/ˈdebɪt kɑːd/", pos: "n.", meaning: "借记卡" },
      { word: "contactless", phonetic: "/ˈkɒntæktləs/", pos: "adj.", meaning: "非接触式的" },
      { word: "tax refund", phonetic: "/tæks ˈriːfʌnd/", pos: "n.", meaning: "退税" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", pos: "n.", meaning: "小票" },
      { word: "cash", phonetic: "/kæʃ/", pos: "n.", meaning: "现金" }
    ]
  },
  {
    theme: "城市交通",
    words: [
      { word: "uber", phonetic: "/ˈuːbə/", pos: "n.", meaning: "优步（网约车）" },
      { word: "taxi rank", phonetic: "/ˈtæksi ræŋk/", pos: "n.", meaning: "的士站" },
      { word: "bus stop", phonetic: "/ˈbʌs stɒp/", pos: "n.", meaning: "公交站" },
      { word: "tram stop", phonetic: "/ˈtræm stɒp/", pos: "n.", meaning: "电车站" },
      { word: "fare", phonetic: "/feə/", pos: "n.", meaning: "车费" },
      { word: "opaque", phonetic: "/əʊˈpeɪk/", pos: "adj.", meaning: "不透明的" },
      { word: "opal card", phonetic: "/ˈəʊpl kɑːd/", pos: "n.", meaning: "Opal 卡（悉尼交通卡）" },
      { word: "top up", phonetic: "/tɒp ʌp/", pos: "v.", meaning: "充值" },
      { word: "route", phonetic: "/ruːt/", pos: "n.", meaning: "路线" },
      { word: "concession", phonetic: "/kənˈseʃn/", pos: "n.", meaning: "优惠票" }
    ]
  },
  {
    theme: "酒店设施",
    words: [
      { word: "lobby", phonetic: "/ˈlɒbi/", pos: "n.", meaning: "大堂" },
      { word: "elevator", phonetic: "/ˈelɪveɪtə/", pos: "n.", meaning: "电梯" },
      { word: "key card", phonetic: "/ˈkiː kɑːd/", pos: "n.", meaning: "房卡" },
      { word: "luggage store", phonetic: "/ˈlʌɡɪdʒ stɔː/", pos: "n.", meaning: "行李寄存" },
      { word: "wifi", phonetic: "/ˈwaɪfaɪ/", pos: "n.", meaning: "无线网络" },
      { word: "password", phonetic: "/ˈpɑːswɜːd/", pos: "n.", meaning: "密码" },
      { word: "minibar", phonetic: "/ˈmɪnibɑː/", pos: "n.", meaning: "迷你吧" },
      { word: "laundry", phonetic: "/ˈlɔːndri/", pos: "n.", meaning: "洗衣服务" },
      { word: "checkout", phonetic: "/ˈtʃekaʊt/", pos: "n.", meaning: "结账离开" },
      { word: "upgrade", phonetic: "/ˈʌpɡreɪd/", pos: "n.", meaning: "升级（房型）" }
    ]
  },
  {
    theme: "餐厅细节",
    words: [
      { word: "starter", phonetic: "/ˈstɑːtə/", pos: "n.", meaning: "前菜" },
      { word: "main", phonetic: "/meɪn/", pos: "n.", meaning: "主菜（口语）" },
      { word: "dessert", phonetic: "/dɪˈzɜːt/", pos: "n.", meaning: "甜点" },
      { word: "side dish", phonetic: "/ˈsaɪd dɪʃ/", pos: "n.", meaning: "配菜" },
      { word: "rare", phonetic: "/reə/", pos: "adj.", meaning: "一分熟的" },
      { word: "allergy", phonetic: "/ˈælədʒi/", pos: "n.", meaning: "过敏" },
      { word: "vegetarian", phonetic: "/ˌvedʒəˈteəriən/", pos: "adj.", meaning: "素食的" },
      { word: "spicy", phonetic: "/ˈspaɪsi/", pos: "adj.", meaning: "辣的" },
      { word: "recommend", phonetic: "/ˌrekəˈmend/", pos: "v.", meaning: "推荐" },
      { word: "service charge", phonetic: "/ˈsɜːvɪs tʃɑːdʒ/", pos: "n.", meaning: "服务费" }
    ]
  },
  {
    theme: "购物细节",
    words: [
      { word: "try on", phonetic: "/traɪ ɒn/", pos: "v.", meaning: "试穿" },
      { word: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", pos: "v.", meaning: "换货" },
      { word: "warranty", phonetic: "/ˈwɒrənti/", pos: "n.", meaning: "保修" },
      { word: "counter", phonetic: "/ˈkaʊntə/", pos: "n.", meaning: "柜台" },
      { word: "aisle", phonetic: "/aɪl/", pos: "n.", meaning: "过道" },
      { word: "bargain", phonetic: "/ˈbɑːɡən/", pos: "n.", meaning: "便宜货" },
      { word: "vintage", phonetic: "/ˈvɪntɪdʒ/", pos: "adj.", meaning: "复古的" },
      { word: "secondhand", phonetic: "/ˈsekəndhænd/", pos: "adj.", meaning: "二手的" },
      { word: "cashier", phonetic: "/kæˈʃɪə/", pos: "n.", meaning: "收银员" },
      { word: "window shop", phonetic: "/ˈwɪndəʊ ʃɒp/", pos: "v.", meaning: "逛街购物" }
    ]
  },
  {
    theme: "景点细节",
    words: [
      { word: "gallery", phonetic: "/ˈɡæləri/", pos: "n.", meaning: "画廊" },
      { word: "museum", phonetic: "/mjuːˈziːəm/", pos: "n.", meaning: "博物馆" },
      { word: "botanical garden", phonetic: "/bəˈtænɪkl ˈɡɑːdn/", pos: "n.", meaning: "植物园" },
      { word: "zoo", phonetic: "/zuː/", pos: "n.", meaning: "动物园" },
      { word: "aquarium", phonetic: "/əˈkweəriəm/", pos: "n.", meaning: "水族馆" },
      { word: "audio guide", phonetic: "/ˈɔːdiəʊ ɡaɪd/", pos: "n.", meaning: "语音导览" },
      { word: "exhibit", phonetic: "/ɪɡˈzɪbɪt/", pos: "n.", meaning: "展品" },
      { word: "souvenir", phonetic: "/ˌsuːvəˈnɪə/", pos: "n.", meaning: "纪念品" },
      { word: "panoramic", phonetic: "/ˌpænəˈræmɪk/", pos: "adj.", meaning: "全景的" },
      { word: "guidebook", phonetic: "/ˈɡaɪdbʊk/", pos: "n.", meaning: "旅行指南" }
    ]
  },
  {
    theme: "紧急与丢失",
    words: [
      { word: "stolen", phonetic: "/ˈstəʊlən/", pos: "adj.", meaning: "被盗的" },
      { word: "passport", phonetic: "/ˈpɑːspɔːt/", pos: "n.", meaning: "护照" },
      { word: "embassy", phonetic: "/ˈembəsi/", pos: "n.", meaning: "大使馆" },
      { word: "police station", phonetic: "/pəˈliːs ˈsteɪʃn/", pos: "n.", meaning: "警察局" },
      { word: "report", phonetic: "/rɪˈpɔːt/", pos: "v.", meaning: "报案" },
      { word: "claim", phonetic: "/kleɪm/", pos: "v.", meaning: "索赔" },
      { word: "lost and found", phonetic: "/lɒst ənd faʊnd/", pos: "n.", meaning: "失物招领" },
      { word: "first aid", phonetic: "/fɜːst eɪd/", pos: "n.", meaning: "急救" },
      { word: "injured", phonetic: "/ˈɪndʒəd/", pos: "adj.", meaning: "受伤的" },
      { word: "mosquito bite", phonetic: "/mɒˈskiːtəʊ baɪt/", pos: "n.", meaning: "蚊虫叮咬" }
    ]
  },
  {
    theme: "澳洲动物",
    words: [
      { word: "kangaroo", phonetic: "/ˌkæŋɡəˈruː/", pos: "n.", meaning: "袋鼠" },
      { word: "koala", phonetic: "/kəʊˈɑːlə/", pos: "n.", meaning: "考拉" },
      { word: "wombat", phonetic: "/ˈwɒmbæt/", pos: "n.", meaning: "袋熊" },
      { word: "platypus", phonetic: "/ˈplætɪpəs/", pos: "n.", meaning: "鸭嘴兽" },
      { word: "emu", phonetic: "/ˈiːmjuː/", pos: "n.", meaning: "鸸鹋" },
      { word: "kookaburra", phonetic: "/ˈkʊkəbʌrə/", pos: "n.", meaning: "笑翠鸟" },
      { word: "wallaby", phonetic: "/ˈwɒləbi/", pos: "n.", meaning: "小袋鼠" },
      { word: "dingo", phonetic: "/ˈdɪŋɡəʊ/", pos: "n.", meaning: "澳洲野犬" },
      { word: "quokka", phonetic: "/ˈkwɒkə/", pos: "n.", meaning: "短尾矮袋鼠" },
      { word: "cassowary", phonetic: "/ˈkæsəweəri/", pos: "n.", meaning: "食火鸡" }
    ]
  },
  {
    theme: "自然景观",
    words: [
      { word: "reef", phonetic: "/riːf/", pos: "n.", meaning: "礁，珊瑚礁" },
      { word: "rainforest", phonetic: "/ˈreɪnfɒrɪst/", pos: "n.", meaning: "雨林" },
      { word: "desert", phonetic: "/ˈdezət/", pos: "n.", meaning: "沙漠" },
      { word: "waterfall", phonetic: "/ˈwɔːtəfɔːl/", pos: "n.", meaning: "瀑布" },
      { word: "gorge", phonetic: "/ɡɔːdʒ/", pos: "n.", meaning: "峡谷" },
      { word: "sandstone", phonetic: "/ˈsændstəʊn/", pos: "n.", meaning: "砂岩" },
      { word: "bay", phonetic: "/beɪ/", pos: "n.", meaning: "海湾" },
      { word: "lagoon", phonetic: "/ləˈɡuːn/", pos: "n.", meaning: "礁湖" },
      { word: "plateau", phonetic: "/plæˈtəʊ/", pos: "n.", meaning: "高原" },
      { word: "wetland", phonetic: "/ˈwetlənd/", pos: "n.", meaning: "湿地" }
    ]
  },
  {
    theme: "文化活动",
    words: [
      { word: "festival", phonetic: "/ˈfestɪvl/", pos: "n.", meaning: "节庆" },
      { word: "markets", phonetic: "/ˈmɑːkɪts/", pos: "n.", meaning: "集市" },
      { word: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", pos: "n.", meaning: "展览" },
      { word: "concert", phonetic: "/ˈkɒnsət/", pos: "n.", meaning: "音乐会" },
      { word: "performance", phonetic: "/pəˈfɔːməns/", pos: "n.", meaning: "演出" },
      { word: "firework", phonetic: "/ˈfaɪəwɜːk/", pos: "n.", meaning: "烟火" },
      { word: "parade", phonetic: "/pəˈreɪd/", pos: "n.", meaning: "游行" },
      { word: "ceremony", phonetic: "/ˈserɪməʊni/", pos: "n.", meaning: "典礼" },
      { word: "show", phonetic: "/ʃəʊ/", pos: "n.", meaning: "表演" },
      { word: "street performer", phonetic: "/striːt pəˈfɔːmə/", pos: "n.", meaning: "街头艺人" }
    ]
  },
  {
    theme: "手机与网络",
    words: [
      { word: "SIM card", phonetic: "/ˈsɪm kɑːd/", pos: "n.", meaning: "SIM 卡" },
      { word: "roaming", phonetic: "/ˈrəʊmɪŋ/", pos: "n.", meaning: "漫游" },
      { word: "data", phonetic: "/ˈdeɪtə/", pos: "n.", meaning: "流量" },
      { word: "charger", phonetic: "/ˈtʃɑːdʒə/", pos: "n.", meaning: "充电器" },
      { word: "adapter", phonetic: "/əˈdæptə/", pos: "n.", meaning: "转换插头" },
      { word: "hotspot", phonetic: "/ˈhɒtspɒt/", pos: "n.", meaning: "热点" },
      { word: "QR code", phonetic: "/ˌkjuː ɑː kəʊd/", pos: "n.", meaning: "二维码" },
      { word: "battery", phonetic: "/ˈbætri/", pos: "n.", meaning: "电池" },
      { word: "app", phonetic: "/æp/", pos: "n.", meaning: "应用" },
      { word: "notification", phonetic: "/ˌnəʊtɪfɪˈkeɪʃn/", pos: "n.", meaning: "通知" }
    ]
  },
  {
    theme: "摄影词汇",
    words: [
      { word: "selfie", phonetic: "/ˈselfi/", pos: "n.", meaning: "自拍" },
      { word: "landscape", phonetic: "/ˈlændskeɪp/", pos: "n.", meaning: "风景照" },
      { word: "portrait", phonetic: "/ˈpɔːtrət/", pos: "n.", meaning: "人像照" },
      { word: "sunset", phonetic: "/ˈsʌnset/", pos: "n.", meaning: "日落" },
      { word: "silhouette", phonetic: "/ˌsɪluˈet/", pos: "n.", meaning: "剪影" },
      { word: "panorama", phonetic: "/ˌpænəˈrɑːmə/", pos: "n.", meaning: "全景" },
      { word: "filter", phonetic: "/ˈfɪltə/", pos: "n.", meaning: "滤镜" },
      { word: "flash", phonetic: "/flæʃ/", pos: "n.", meaning: "闪光灯" },
      { word: "tripod", phonetic: "/ˈtraɪpɒd/", pos: "n.", meaning: "三脚架" },
      { word: "exposure", phonetic: "/ɪkˈspəʊʒə/", pos: "n.", meaning: "曝光" }
    ]
  },
  {
    theme: "户外探险",
    words: [
      { word: "hiking", phonetic: "/ˈhaɪkɪŋ/", pos: "n.", meaning: "徒步" },
      { word: "camping", phonetic: "/ˈkæmpɪŋ/", pos: "n.", meaning: "露营" },
      { word: "tent", phonetic: "/tent/", pos: "n.", meaning: "帐篷" },
      { word: "backpack", phonetic: "/ˈbækpæk/", pos: "n.", meaning: "背包" },
      { word: "trail", phonetic: "/treɪl/", pos: "n.", meaning: "小径" },
      { word: "compass", phonetic: "/ˈkʌmpəs/", pos: "n.", meaning: "指南针" },
      { word: "rock climbing", phonetic: "/rɒk ˈklaɪmɪŋ/", pos: "n.", meaning: "攀岩" },
      { word: "abseiling", phonetic: "/ˈæbsəlɪŋ/", pos: "n.", meaning: "绳降" },
      { word: "bungee jump", phonetic: "/ˈbʌndʒi dʒʌmp/", pos: "n.", meaning: "蹦极" },
      { word: "stargazing", phonetic: "/ˈstɑːɡeɪzɪŋ/", pos: "n.", meaning: "观星" }
    ]
  },
  {
    theme: "历史人文",
    words: [
      { word: "heritage", phonetic: "/ˈherɪtɪdʒ/", pos: "n.", meaning: "遗产" },
      { word: "colonial", phonetic: "/kəˈləʊniəl/", pos: "adj.", meaning: "殖民的" },
      { word: "indigenous", phonetic: "/ɪnˈdɪdʒənəs/", pos: "adj.", meaning: "原住民的" },
      { word: "gold rush", phonetic: "/ɡəʊld rʌʃ/", pos: "n.", meaning: "淘金热" },
      { word: "settlement", phonetic: "/ˈsetlmənt/", pos: "n.", meaning: "定居点" },
      { word: "convict", phonetic: "/ˈkɒnvɪkt/", pos: "n.", meaning: "囚犯（早期澳洲殖民史）" },
      { word: "monument", phonetic: "/ˈmɒnjumənt/", pos: "n.", meaning: "纪念碑" },
      { word: "ancestors", phonetic: "/ˈænsestəz/", pos: "n.", meaning: "祖先" },
      { word: "dreamtime", phonetic: "/ˈdriːmtaɪm/", pos: "n.", meaning: "梦幻时代（原住民神话）" },
      { word: "artifacts", phonetic: "/ˈɑːtɪfækts/", pos: "n.", meaning: "文物" }
    ]
  },
  {
    theme: "签证与数字",
    words: [
      { word: "visa", phonetic: "/ˈviːzə/", pos: "n.", meaning: "签证" },
      { word: "passport", phonetic: "/ˈpɑːspɔːt/", pos: "n.", meaning: "护照" },
      { word: "screenshot", phonetic: "/ˈskriːnʃɒt/", pos: "n.", meaning: "截图" },
      { word: "upload", phonetic: "/ˌʌpˈləʊd/", pos: "v.", meaning: "上传" },
      { word: "download", phonetic: "/ˌdaʊnˈləʊd/", pos: "v.", meaning: "下载" },
      { word: "password", phonetic: "/ˈpɑːswɜːd/", pos: "n.", meaning: "密码" },
      { word: "username", phonetic: "/ˈjuːzəneɪm/", pos: "n.", meaning: "用户名" },
      { word: "booking", phonetic: "/ˈbʊkɪŋ/", pos: "n.", meaning: "预订" },
      { word: "itinerary", phonetic: "/aɪˈtɪnərəri/", pos: "n.", meaning: "行程" },
      { word: "confirm", phonetic: "/kənˈfɜːm/", pos: "v.", meaning: "确认" }
    ]
  },
  {
    theme: "商务出行",
    words: [
      { word: "meeting", phonetic: "/ˈmiːtɪŋ/", pos: "n.", meaning: "会议" },
      { word: "agenda", phonetic: "/əˈdʒendə/", pos: "n.", meaning: "议程" },
      { word: "colleague", phonetic: "/ˈkɒliːɡ/", pos: "n.", meaning: "同事" },
      { word: "handshake", phonetic: "/ˈhændʃeɪk/", pos: "n.", meaning: "握手" },
      { word: "lounge", phonetic: "/laʊndʒ/", pos: "n.", meaning: "休息室；贵宾室" },
      { word: "invoice", phonetic: "/ˈɪnvɔɪs/", pos: "n.", meaning: "发票" },
      { word: "proposal", phonetic: "/prəˈpəʊzl/", pos: "n.", meaning: "提案" },
      { word: "deadline", phonetic: "/ˈdedlaɪn/", pos: "n.", meaning: "截止日期" },
      { word: "headquarters", phonetic: "/ˌhedˈkwɔːtəz/", pos: "n.", meaning: "总部" },
      { word: "interpreter", phonetic: "/ɪnˈtɜːprɪtə/", pos: "n.", meaning: "口译员" }
    ]
  },
  {
    theme: "机场设施",
    words: [
      { word: "check-in counter", phonetic: "/ˈtʃek ɪn ˈkaʊntə/", pos: "n.", meaning: "值机柜台", example: "I need to remember check-in counter.", exampleZh: "我需要记住 值机柜台。" },
      { word: "security check", phonetic: "/sɪˈkjʊərɪti tʃek/", pos: "n.", meaning: "安检", example: "I need to remember security check.", exampleZh: "我需要记住 安检。" },
      { word: "duty-free shop", phonetic: "/ˌdjuːti ˈfriː ʃɒp/", pos: "n.", meaning: "免税店", example: "I need to remember duty-free shop.", exampleZh: "我需要记住 免税店。" },
      { word: "runway", phonetic: "/ˈrʌnweɪ/", pos: "n.", meaning: "跑道", example: "I need to remember runway.", exampleZh: "我需要记住 跑道。" },
      { word: "tarmac", phonetic: "/ˈtɑːmæk/", pos: "n.", meaning: "停机坪", example: "I need to remember tarmac.", exampleZh: "我需要记住 停机坪。" },
      { word: "turbulence", phonetic: "/ˈtɜːbjələns/", pos: "n.", meaning: "气流颠簸", example: "I need to remember turbulence.", exampleZh: "我需要记住 气流颠簸。" },
      { word: "layover", phonetic: "/ˈleɪəʊvə/", pos: "n.", meaning: "中转停留", example: "I need to remember layover.", exampleZh: "我需要记住 中转停留。" },
      { word: "carry-on", phonetic: "/ˈkæri ɒn/", pos: "n.", meaning: "随身行李", example: "I need to remember carry-on.", exampleZh: "我需要记住 随身行李。" },
      { word: "visa", phonetic: "/ˈviːzə/", pos: "n.", meaning: "签证", example: "I need to remember visa.", exampleZh: "我需要记住 签证。" },
      { word: "passport", phonetic: "/ˈpɑːspɔːt/", pos: "n.", meaning: "护照", example: "I need to remember passport.", exampleZh: "我需要记住 护照。" },
    ]
  },
  {
    theme: "登机相关",
    words: [
      { word: "aisle seat", phonetic: "/eɪl siːt/", pos: "n.", meaning: "靠走道座位", example: "I need to remember aisle seat.", exampleZh: "我需要记住 靠走道座位。" },
      { word: "window seat", phonetic: "/ˈwɪndəʊ siːt/", pos: "n.", meaning: "靠窗座位", example: "I need to remember window seat.", exampleZh: "我需要记住 靠窗座位。" },
      { word: "overhead bin", phonetic: "/ˌəʊvəˈhed bɪn/", pos: "n.", meaning: "头顶行李舱", example: "I need to remember overhead bin.", exampleZh: "我需要记住 头顶行李舱。" },
      { word: "takeoff", phonetic: "/ˈteɪkɒf/", pos: "n.", meaning: "起飞", example: "I need to remember takeoff.", exampleZh: "我需要记住 起飞。" },
      { word: "landing", phonetic: "/ˈlændɪŋ/", pos: "n.", meaning: "降落", example: "I need to remember landing.", exampleZh: "我需要记住 降落。" },
      { word: "fasten seatbelt", phonetic: "/ˈfɑːsn ˈsiːtbelt/", pos: "v.", meaning: "系好安全带", example: "I need to remember fasten seatbelt.", exampleZh: "我需要记住 系好安全带。" },
      { word: "inflight", phonetic: "/ˈɪnflaɪt/", pos: "adj.", meaning: "飞行中的", example: "I need to remember inflight.", exampleZh: "我需要记住 飞行中的。" },
      { word: "stewardess", phonetic: "/ˈstjuːədes/", pos: "n.", meaning: "空乘", example: "I need to remember stewardess.", exampleZh: "我需要记住 空乘。" },
      { word: "pilot", phonetic: "/ˈpaɪlət/", pos: "n.", meaning: "机长", example: "I need to remember pilot.", exampleZh: "我需要记住 机长。" },
      { word: "cockpit", phonetic: "/ˈkɒkpɪt/", pos: "n.", meaning: "驾驶舱", example: "I need to remember cockpit.", exampleZh: "我需要记住 驾驶舱。" },
    ]
  },
  {
    theme: "入境通关",
    words: [
      { word: "immigration", phonetic: "/ˌɪmɪˈɡreɪʃn/", pos: "n.", meaning: "入境检查", example: "I need to remember immigration.", exampleZh: "我需要记住 入境检查。" },
      { word: "declaration", phonetic: "/ˌdekləˈreɪʃn/", pos: "n.", meaning: "申报", example: "I need to remember declaration.", exampleZh: "我需要记住 申报。" },
      { word: "quarantine", phonetic: "/ˈkwɒrəntiːn/", pos: "n.", meaning: "检疫", example: "I need to remember quarantine.", exampleZh: "我需要记住 检疫。" },
      { word: "biometrics", phonetic: "/ˌbaɪəʊˈmetrɪks/", pos: "n.", meaning: "生物识别", example: "I need to remember biometrics.", exampleZh: "我需要记住 生物识别。" },
      { word: "fingerprint", phonetic: "/ˈfɪŋɡəprɪnt/", pos: "n.", meaning: "指纹", example: "I need to remember fingerprint.", exampleZh: "我需要记住 指纹。" },
      { word: "permit", phonetic: "/ˈpɜːmɪt/", pos: "n.", meaning: "许可证", example: "I need to remember permit.", exampleZh: "我需要记住 许可证。" },
      { word: "stamp", phonetic: "/stæmp/", pos: "n.", meaning: "盖章", example: "I need to remember stamp.", exampleZh: "我需要记住 盖章。" },
      { word: "queue", phonetic: "/kjuː/", pos: "n.", meaning: "排队", example: "I need to remember queue.", exampleZh: "我需要记住 排队。" },
      { word: "form", phonetic: "/fɔːm/", pos: "n.", meaning: "表格", example: "I need to remember form.", exampleZh: "我需要记住 表格。" },
      { word: "ID card", phonetic: "/aɪ diː kɑːd/", pos: "n.", meaning: "身份证", example: "I need to remember ID card.", exampleZh: "我需要记住 身份证。" },
    ]
  },
  {
    theme: "行李领取",
    words: [
      { word: "carousel", phonetic: "/kəˈruːzəl/", pos: "n.", meaning: "行李转盘", example: "I need to remember carousel.", exampleZh: "我需要记住 行李转盘。" },
      { word: "suitcase", phonetic: "/ˈsuːtkeɪs/", pos: "n.", meaning: "行李箱", example: "I need to remember suitcase.", exampleZh: "我需要记住 行李箱。" },
      { word: "backpack", phonetic: "/ˈbækpæk/", pos: "n.", meaning: "双肩包", example: "I need to remember backpack.", exampleZh: "我需要记住 双肩包。" },
      { word: "trunk", phonetic: "/trʌŋk/", pos: "n.", meaning: "后备箱", example: "I need to remember trunk.", exampleZh: "我需要记住 后备箱。" },
      { word: "lost luggage", phonetic: "/lɒst ˈlʌɡɪdʒ/", pos: "n.", meaning: "遗失行李", example: "I need to remember lost luggage.", exampleZh: "我需要记住 遗失行李。" },
      { word: "claim tag", phonetic: "/kleɪm tæɡ/", pos: "n.", meaning: "行李票", example: "I need to remember claim tag.", exampleZh: "我需要记住 行李票。" },
      { word: "fragile", phonetic: "/ˈfrædʒaɪl/", pos: "adj.", meaning: "易碎的", example: "I need to remember fragile.", exampleZh: "我需要记住 易碎的。" },
      { word: "overweight", phonetic: "/ˌəʊvəˈweɪt/", pos: "adj.", meaning: "超重的", example: "I need to remember overweight.", exampleZh: "我需要记住 超重的。" },
      { word: "locker", phonetic: "/ˈlɒkə/", pos: "n.", meaning: "储物柜", example: "I need to remember locker.", exampleZh: "我需要记住 储物柜。" },
      { word: "trolley", phonetic: "/ˈtrɒli/", pos: "n.", meaning: "手推车", example: "I need to remember trolley.", exampleZh: "我需要记住 手推车。" },
    ]
  },
  {
    theme: "出租车",
    words: [
      { word: "taxi rank", phonetic: "/ˈtæksi ræŋk/", pos: "n.", meaning: "出租车等候点", example: "I need to remember taxi rank.", exampleZh: "我需要记住 出租车等候点。" },
      { word: "fare", phonetic: "/feə/", pos: "n.", meaning: "车费", example: "I need to remember fare.", exampleZh: "我需要记住 车费。" },
      { word: "meter", phonetic: "/ˈmiːtə/", pos: "n.", meaning: "计价器", example: "I need to remember meter.", exampleZh: "我需要记住 计价器。" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", pos: "n.", meaning: "收据", example: "I need to remember receipt.", exampleZh: "我需要记住 收据。" },
      { word: "destination", phonetic: "/ˌdestɪˈneɪʃn/", pos: "n.", meaning: "目的地", example: "I need to remember destination.", exampleZh: "我需要记住 目的地。" },
      { word: "rush hour", phonetic: "/ˈrʌʃ aʊə/", pos: "n.", meaning: "高峰时段", example: "I need to remember rush hour.", exampleZh: "我需要记住 高峰时段。" },
      { word: "tip", phonetic: "/tɪp/", pos: "n.", meaning: "小费", example: "I need to remember tip.", exampleZh: "我需要记住 小费。" },
      { word: "trunk", phonetic: "/trʌŋk/", pos: "n.", meaning: "后备箱", example: "I need to remember trunk.", exampleZh: "我需要记住 后备箱。" },
      { word: "child seat", phonetic: "/tʃaɪld siːt/", pos: "n.", meaning: "儿童座椅", example: "I need to remember child seat.", exampleZh: "我需要记住 儿童座椅。" },
      { word: "change", phonetic: "/tʃeɪndʒ/", pos: "n.", meaning: "零钱", example: "I need to remember change.", exampleZh: "我需要记住 零钱。" },
    ]
  },
  {
    theme: "公交巴士",
    words: [
      { word: "bus stop", phonetic: "/ˈbʌs stɒp/", pos: "n.", meaning: "公交站", example: "I need to remember bus stop.", exampleZh: "我需要记住 公交站。" },
      { word: "route", phonetic: "/ruːt/", pos: "n.", meaning: "线路", example: "I need to remember route.", exampleZh: "我需要记住 线路。" },
      { word: "timetable", phonetic: "/ˈtaɪmteɪbl/", pos: "n.", meaning: "时刻表", example: "I need to remember timetable.", exampleZh: "我需要记住 时刻表。" },
      { word: "transfer", phonetic: "/trænsˈfɜː/", pos: "n.", meaning: "换乘", example: "I need to remember transfer.", exampleZh: "我需要记住 换乘。" },
      { word: "platform", phonetic: "/ˈplætfɔːm/", pos: "n.", meaning: "站台", example: "I need to remember platform.", exampleZh: "我需要记住 站台。" },
      { word: "driver", phonetic: "/ˈdraɪvə/", pos: "n.", meaning: "司机", example: "I need to remember driver.", exampleZh: "我需要记住 司机。" },
      { word: "fare", phonetic: "/feə/", pos: "n.", meaning: "车费", example: "I need to remember fare.", exampleZh: "我需要记住 车费。" },
      { word: "monthly pass", phonetic: "/ˈmʌnθli pɑːs/", pos: "n.", meaning: "月票", example: "I need to remember monthly pass.", exampleZh: "我需要记住 月票。" },
      { word: "rear door", phonetic: "/rɪə dɔː/", pos: "n.", meaning: "后门", example: "I need to remember rear door.", exampleZh: "我需要记住 后门。" },
      { word: "front door", phonetic: "/frʌnt dɔː/", pos: "n.", meaning: "前门", example: "I need to remember front door.", exampleZh: "我需要记住 前门。" },
    ]
  },
  {
    theme: "火车",
    words: [
      { word: "ticket office", phonetic: "/ˈtɪkɪt ˈɒfɪs/", pos: "n.", meaning: "售票处", example: "I need to remember ticket office.", exampleZh: "我需要记住 售票处。" },
      { word: "platform", phonetic: "/ˈplætfɔːm/", pos: "n.", meaning: "站台", example: "I need to remember platform.", exampleZh: "我需要记住 站台。" },
      { word: "carriage", phonetic: "/ˈkærɪdʒ/", pos: "n.", meaning: "车厢", example: "I need to remember carriage.", exampleZh: "我需要记住 车厢。" },
      { word: "sleeper", phonetic: "/ˈsliːpə/", pos: "n.", meaning: "卧铺", example: "I need to remember sleeper.", exampleZh: "我需要记住 卧铺。" },
      { word: "compartment", phonetic: "/kəmˈpɑːtmənt/", pos: "n.", meaning: "隔间", example: "I need to remember compartment.", exampleZh: "我需要记住 隔间。" },
      { word: "conductor", phonetic: "/kənˈdʌktə/", pos: "n.", meaning: "列车长", example: "I need to remember conductor.", exampleZh: "我需要记住 列车长。" },
      { word: "express", phonetic: "/ɪkˈspres/", pos: "n.", meaning: "特快列车", example: "I need to remember express.", exampleZh: "我需要记住 特快列车。" },
      { word: "local train", phonetic: "/ˈləʊkl treɪn/", pos: "n.", meaning: "慢车", example: "I need to remember local train.", exampleZh: "我需要记住 慢车。" },
      { word: "track", phonetic: "/træk/", pos: "n.", meaning: "铁轨", example: "I need to remember track.", exampleZh: "我需要记住 铁轨。" },
      { word: "departure board", phonetic: "/dɪˈpɑːtʃə bɔːd/", pos: "n.", meaning: "发车时刻表", example: "I need to remember departure board.", exampleZh: "我需要记住 发车时刻表。" },
    ]
  },
  {
    theme: "地铁",
    words: [
      { word: "underground", phonetic: "/ˈʌndəɡraʊnd/", pos: "n.", meaning: "地铁", example: "I need to remember underground.", exampleZh: "我需要记住 地铁。" },
      { word: "metro", phonetic: "/ˈmetrəʊ/", pos: "n.", meaning: "地铁", example: "I need to remember metro.", exampleZh: "我需要记住 地铁。" },
      { word: "line", phonetic: "/laɪn/", pos: "n.", meaning: "线路", example: "I need to remember line.", exampleZh: "我需要记住 线路。" },
      { word: "station", phonetic: "/ˈsteɪʃn/", pos: "n.", meaning: "车站", example: "I need to remember station.", exampleZh: "我需要记住 车站。" },
      { word: "exit", phonetic: "/ˈeɡzɪt/", pos: "n.", meaning: "出口", example: "I need to remember exit.", exampleZh: "我需要记住 出口。" },
      { word: "entrance", phonetic: "/ˈentrəns/", pos: "n.", meaning: "入口", example: "I need to remember entrance.", exampleZh: "我需要记住 入口。" },
      { word: "escalator", phonetic: "/ˈeskəleɪtə/", pos: "n.", meaning: "扶梯", example: "I need to remember escalator.", exampleZh: "我需要记住 扶梯。" },
      { word: "turnstile", phonetic: "/ˈtɜːnstaɪl/", pos: "n.", meaning: "闸机", example: "I need to remember turnstile.", exampleZh: "我需要记住 闸机。" },
      { word: "map", phonetic: "/mæp/", pos: "n.", meaning: "线路图", example: "I need to remember map.", exampleZh: "我需要记住 线路图。" },
      { word: "next station", phonetic: "/nekst ˈsteɪʃn/", pos: "n.", meaning: "下一站", example: "I need to remember next station.", exampleZh: "我需要记住 下一站。" },
    ]
  },
  {
    theme: "租车自驾",
    words: [
      { word: "car rental", phonetic: "/kɑː ˈrentl/", pos: "n.", meaning: "租车", example: "I need to remember car rental.", exampleZh: "我需要记住 租车。" },
      { word: "driver's licence", phonetic: "/ˈdraɪvəz ˈlaɪsəns/", pos: "n.", meaning: "驾照", example: "I need to remember driver's licence.", exampleZh: "我需要记住 驾照。" },
      { word: "insurance", phonetic: "/ɪnˈʃʊərəns/", pos: "n.", meaning: "保险", example: "I need to remember insurance.", exampleZh: "我需要记住 保险。" },
      { word: "fuel", phonetic: "/fjʊəl/", pos: "n.", meaning: "燃油", example: "I need to remember fuel.", exampleZh: "我需要记住 燃油。" },
      { word: "petrol", phonetic: "/ˈpetrəl/", pos: "n.", meaning: "汽油", example: "I need to remember petrol.", exampleZh: "我需要记住 汽油。" },
      { word: "diesel", phonetic: "/ˈdiːzl/", pos: "n.", meaning: "柴油", example: "I need to remember diesel.", exampleZh: "我需要记住 柴油。" },
      { word: "unleaded", phonetic: "/ˌʌnˈledɪd/", pos: "adj.", meaning: "无铅的", example: "I need to remember unleaded.", exampleZh: "我需要记住 无铅的。" },
      { word: "GPS", phonetic: "/ˌdʒiː piː ˈes/", pos: "n.", meaning: "导航仪", example: "I need to remember GPS.", exampleZh: "我需要记住 导航仪。" },
      { word: "left-hand drive", phonetic: "/left hænd draɪv/", pos: "n.", meaning: "左舵", example: "I need to remember left-hand drive.", exampleZh: "我需要记住 左舵。" },
      { word: "speed limit", phonetic: "/spiːd ˈlɪmɪt/", pos: "n.", meaning: "限速", example: "I need to remember speed limit.", exampleZh: "我需要记住 限速。" },
    ]
  },
  {
    theme: "驾驶词汇",
    words: [
      { word: "steering wheel", phonetic: "/ˈstɪərɪŋ wiːl/", pos: "n.", meaning: "方向盘", example: "I need to remember steering wheel.", exampleZh: "我需要记住 方向盘。" },
      { word: "gear", phonetic: "/ɡɪə/", pos: "n.", meaning: "挡位", example: "I need to remember gear.", exampleZh: "我需要记住 挡位。" },
      { word: "brake", phonetic: "/breɪk/", pos: "n.", meaning: "刹车", example: "I need to remember brake.", exampleZh: "我需要记住 刹车。" },
      { word: "accelerator", phonetic: "/əkˈseləreɪtə/", pos: "n.", meaning: "油门", example: "I need to remember accelerator.", exampleZh: "我需要记住 油门。" },
      { word: "headlight", phonetic: "/ˈhedlaɪt/", pos: "n.", meaning: "前灯", example: "I need to remember headlight.", exampleZh: "我需要记住 前灯。" },
      { word: "indicator", phonetic: "/ˈɪndɪkeɪtə/", pos: "n.", meaning: "转向灯", example: "I need to remember indicator.", exampleZh: "我需要记住 转向灯。" },
      { word: "windscreen", phonetic: "/ˈwɪndskriːn/", pos: "n.", meaning: "挡风玻璃", example: "I need to remember windscreen.", exampleZh: "我需要记住 挡风玻璃。" },
      { word: "tyre", phonetic: "/ˈtaɪə/", pos: "n.", meaning: "轮胎", example: "I need to remember tyre.", exampleZh: "我需要记住 轮胎。" },
      { word: "bonnet", phonetic: "/ˈbɒnɪt/", pos: "n.", meaning: "引擎盖", example: "I need to remember bonnet.", exampleZh: "我需要记住 引擎盖。" },
      { word: "boot", phonetic: "/buːt/", pos: "n.", meaning: "后备箱", example: "I need to remember boot.", exampleZh: "我需要记住 后备箱。" },
    ]
  },
  {
    theme: "加油站",
    words: [
      { word: "petrol station", phonetic: "/ˈpetrəl ˈsteɪʃn/", pos: "n.", meaning: "加油站", example: "I need to remember petrol station.", exampleZh: "我需要记住 加油站。" },
      { word: "pump", phonetic: "/pʌmp/", pos: "n.", meaning: "油泵", example: "I need to remember pump.", exampleZh: "我需要记住 油泵。" },
      { word: "fill up", phonetic: "/fɪl ʌp/", pos: "v.", meaning: "加满", example: "I need to remember fill up.", exampleZh: "我需要记住 加满。" },
      { word: "self-service", phonetic: "/self ˈsɜːvɪs/", pos: "adj.", meaning: "自助的", example: "I need to remember self-service.", exampleZh: "我需要记住 自助的。" },
      { word: "cashier", phonetic: "/kæˈʃɪə/", pos: "n.", meaning: "收银员", example: "I need to remember cashier.", exampleZh: "我需要记住 收银员。" },
      { word: "snack", phonetic: "/snæk/", pos: "n.", meaning: "零食", example: "I need to remember snack.", exampleZh: "我需要记住 零食。" },
      { word: "restroom", phonetic: "/ˈrestruːm/", pos: "n.", meaning: "卫生间", example: "I need to remember restroom.", exampleZh: "我需要记住 卫生间。" },
      { word: "air pump", phonetic: "/eə pʌmp/", pos: "n.", meaning: "打气泵", example: "I need to remember air pump.", exampleZh: "我需要记住 打气泵。" },
      { word: "windscreen washer", phonetic: "/ˈwɪndskriːn ˈwɒʃə/", pos: "n.", meaning: "玻璃水", example: "I need to remember windscreen washer.", exampleZh: "我需要记住 玻璃水。" },
      { word: "fuel gauge", phonetic: "/fjʊəl ɡeɪdʒ/", pos: "n.", meaning: "油表", example: "I need to remember fuel gauge.", exampleZh: "我需要记住 油表。" },
    ]
  },
  {
    theme: "停车",
    words: [
      { word: "parking lot", phonetic: "/ˈpɑːkɪŋ lɒt/", pos: "n.", meaning: "停车场", example: "I need to remember parking lot.", exampleZh: "我需要记住 停车场。" },
      { word: "car park", phonetic: "/kɑː pɑːk/", pos: "n.", meaning: "停车场", example: "I need to remember car park.", exampleZh: "我需要记住 停车场。" },
      { word: "meter", phonetic: "/ˈmiːtə/", pos: "n.", meaning: "计时器", example: "I need to remember meter.", exampleZh: "我需要记住 计时器。" },
      { word: "ticket machine", phonetic: "/ˈtɪkɪt məˈʃiːn/", pos: "n.", meaning: "售票机", example: "I need to remember ticket machine.", exampleZh: "我需要记住 售票机。" },
      { word: "permit", phonetic: "/ˈpɜːmɪt/", pos: "n.", meaning: "许可证", example: "I need to remember permit.", exampleZh: "我需要记住 许可证。" },
      { word: "fine", phonetic: "/faɪn/", pos: "n.", meaning: "罚单", example: "I need to remember fine.", exampleZh: "我需要记住 罚单。" },
      { word: "handbrake", phonetic: "/ˈhændbreɪk/", pos: "n.", meaning: "手刹", example: "I need to remember handbrake.", exampleZh: "我需要记住 手刹。" },
      { word: "reverse", phonetic: "/rɪˈvɜːs/", pos: "v.", meaning: "倒车", example: "I need to remember reverse.", exampleZh: "我需要记住 倒车。" },
      { word: "disabled", phonetic: "/dɪsˈeɪbld/", pos: "adj.", meaning: "残障人士的", example: "I need to remember disabled.", exampleZh: "我需要记住 残障人士的。" },
      { word: "multi-storey", phonetic: "/ˌmʌlti ˈstɔːri/", pos: "adj.", meaning: "多层", example: "I need to remember multi-storey.", exampleZh: "我需要记住 多层。" },
    ]
  },
  {
    theme: "城市道路",
    words: [
      { word: "intersection", phonetic: "/ˌɪntəˈsekʃn/", pos: "n.", meaning: "十字路口", example: "I need to remember intersection.", exampleZh: "我需要记住 十字路口。" },
      { word: "roundabout", phonetic: "/ˈraʊndəbaʊt/", pos: "n.", meaning: "环岛", example: "I need to remember roundabout.", exampleZh: "我需要记住 环岛。" },
      { word: "traffic light", phonetic: "/ˈtræfɪk laɪt/", pos: "n.", meaning: "红绿灯", example: "I need to remember traffic light.", exampleZh: "我需要记住 红绿灯。" },
      { word: "pedestrian", phonetic: "/pəˈdestriən/", pos: "n.", meaning: "行人", example: "I need to remember pedestrian.", exampleZh: "我需要记住 行人。" },
      { word: "crosswalk", phonetic: "/ˈkrɒswɔːk/", pos: "n.", meaning: "人行横道", example: "I need to remember crosswalk.", exampleZh: "我需要记住 人行横道。" },
      { word: "sidewalk", phonetic: "/ˈsaɪdwɔːk/", pos: "n.", meaning: "人行道", example: "I need to remember sidewalk.", exampleZh: "我需要记住 人行道。" },
      { word: "curb", phonetic: "/kɜːb/", pos: "n.", meaning: "路缘", example: "I need to remember curb.", exampleZh: "我需要记住 路缘。" },
      { word: "lane", phonetic: "/leɪn/", pos: "n.", meaning: "车道", example: "I need to remember lane.", exampleZh: "我需要记住 车道。" },
      { word: "median", phonetic: "/ˈmiːdiən/", pos: "n.", meaning: "中央隔离带", example: "I need to remember median.", exampleZh: "我需要记住 中央隔离带。" },
      { word: "overpass", phonetic: "/ˈəʊvəpɑːs/", pos: "n.", meaning: "天桥", example: "I need to remember overpass.", exampleZh: "我需要记住 天桥。" },
    ]
  },
  {
    theme: "地图导航",
    words: [
      { word: "compass", phonetic: "/ˈkʌmpəs/", pos: "n.", meaning: "指南针", example: "I need to remember compass.", exampleZh: "我需要记住 指南针。" },
      { word: "north", phonetic: "/nɔːθ/", pos: "n.", meaning: "北", example: "I need to remember north.", exampleZh: "我需要记住 北。" },
      { word: "south", phonetic: "/saʊθ/", pos: "n.", meaning: "南", example: "I need to remember south.", exampleZh: "我需要记住 南。" },
      { word: "east", phonetic: "/iːst/", pos: "n.", meaning: "东", example: "I need to remember east.", exampleZh: "我需要记住 东。" },
      { word: "west", phonetic: "/west/", pos: "n.", meaning: "西", example: "I need to remember west.", exampleZh: "我需要记住 西。" },
      { word: "left", phonetic: "/left/", pos: "n.", meaning: "左", example: "I need to remember left.", exampleZh: "我需要记住 左。" },
      { word: "right", phonetic: "/raɪt/", pos: "n.", meaning: "右", example: "I need to remember right.", exampleZh: "我需要记住 右。" },
      { word: "straight", phonetic: "/streɪt/", pos: "adv.", meaning: "直行", example: "I need to remember straight.", exampleZh: "我需要记住 直行。" },
      { word: "nearby", phonetic: "/ˈnɪəbaɪ/", pos: "adj.", meaning: "附近的", example: "I need to remember nearby.", exampleZh: "我需要记住 附近的。" },
      { word: "next to", phonetic: "/nekst tuː/", pos: "prep.", meaning: "紧邻", example: "I need to remember next to.", exampleZh: "我需要记住 紧邻。" },
    ]
  },
  {
    theme: "问路常用",
    words: [
      { word: "How do I get to", phonetic: "/haʊ duː aɪ ɡet tuː/", pos: "phrase", meaning: "怎么去", example: "I need to remember How do I get to.", exampleZh: "我需要记住 怎么去。" },
      { word: "Can you show me", phonetic: "/kæn juː ʃəʊ miː/", pos: "phrase", meaning: "能指给我看吗", example: "I need to remember Can you show me.", exampleZh: "我需要记住 能指给我看吗。" },
      { word: "Is it far", phonetic: "/ɪz ɪt fɑː/", pos: "phrase", meaning: "远吗", example: "I need to remember Is it far.", exampleZh: "我需要记住 远吗。" },
      { word: "How long", phonetic: "/haʊ lɒŋ/", pos: "phrase", meaning: "多久", example: "I need to remember How long.", exampleZh: "我需要记住 多久。" },
      { word: "around the corner", phonetic: "/əˈraʊnd ðə ˈkɔːnə/", pos: "phrase", meaning: "拐角处", example: "I need to remember around the corner.", exampleZh: "我需要记住 拐角处。" },
      { word: "on the way", phonetic: "/ɒn ðə weɪ/", pos: "phrase", meaning: "在途中", example: "I need to remember on the way.", exampleZh: "我需要记住 在途中。" },
      { word: "opposite", phonetic: "/ˈɒpəzɪt/", pos: "prep.", meaning: "对面", example: "I need to remember opposite.", exampleZh: "我需要记住 对面。" },
      { word: "behind", phonetic: "/bɪˈhaɪnd/", pos: "prep.", meaning: "后面", example: "I need to remember behind.", exampleZh: "我需要记住 后面。" },
      { word: "across from", phonetic: "/əˈkrɒs frɒm/", pos: "prep.", meaning: "对面", example: "I need to remember across from.", exampleZh: "我需要记住 对面。" },
      { word: "next to", phonetic: "/nekst tuː/", pos: "prep.", meaning: "旁边", example: "I need to remember next to.", exampleZh: "我需要记住 旁边。" },
    ]
  },
  {
    theme: "天气状况",
    words: [
      { word: "sunny", phonetic: "/ˈsʌni/", pos: "adj.", meaning: "晴朗的", example: "I need to remember sunny.", exampleZh: "我需要记住 晴朗的。" },
      { word: "cloudy", phonetic: "/ˈklaʊdi/", pos: "adj.", meaning: "多云的", example: "I need to remember cloudy.", exampleZh: "我需要记住 多云的。" },
      { word: "rainy", phonetic: "/ˈreɪni/", pos: "adj.", meaning: "下雨的", example: "I need to remember rainy.", exampleZh: "我需要记住 下雨的。" },
      { word: "windy", phonetic: "/ˈwɪndi/", pos: "adj.", meaning: "有风的", example: "I need to remember windy.", exampleZh: "我需要记住 有风的。" },
      { word: "stormy", phonetic: "/ˈstɔːmi/", pos: "adj.", meaning: "暴风雨的", example: "I need to remember stormy.", exampleZh: "我需要记住 暴风雨的。" },
      { word: "foggy", phonetic: "/ˈfɒɡi/", pos: "adj.", meaning: "有雾的", example: "I need to remember foggy.", exampleZh: "我需要记住 有雾的。" },
      { word: "humid", phonetic: "/ˈhjuːmɪd/", pos: "adj.", meaning: "潮湿的", example: "I need to remember humid.", exampleZh: "我需要记住 潮湿的。" },
      { word: "dry", phonetic: "/draɪ/", pos: "adj.", meaning: "干燥的", example: "I need to remember dry.", exampleZh: "我需要记住 干燥的。" },
      { word: "hot", phonetic: "/hɒt/", pos: "adj.", meaning: "热的", example: "I need to remember hot.", exampleZh: "我需要记住 热的。" },
      { word: "cold", phonetic: "/kəʊld/", pos: "adj.", meaning: "冷的", example: "I need to remember cold.", exampleZh: "我需要记住 冷的。" },
    ]
  },
  {
    theme: "天气预报",
    words: [
      { word: "forecast", phonetic: "/ˈfɔːkɑːst/", pos: "n.", meaning: "预报", example: "I need to remember forecast.", exampleZh: "我需要记住 预报。" },
      { word: "temperature", phonetic: "/ˈtemprətʃə/", pos: "n.", meaning: "气温", example: "I need to remember temperature.", exampleZh: "我需要记住 气温。" },
      { word: "humidity", phonetic: "/hjuːˈmɪdəti/", pos: "n.", meaning: "湿度", example: "I need to remember humidity.", exampleZh: "我需要记住 湿度。" },
      { word: "UV index", phonetic: "/juː viː ˈɪndeks/", pos: "n.", meaning: "紫外线指数", example: "I need to remember UV index.", exampleZh: "我需要记住 紫外线指数。" },
      { word: "shower", phonetic: "/ˈʃaʊə/", pos: "n.", meaning: "阵雨", example: "I need to remember shower.", exampleZh: "我需要记住 阵雨。" },
      { word: "drizzle", phonetic: "/ˈdrɪzl/", pos: "n.", meaning: "毛毛雨", example: "I need to remember drizzle.", exampleZh: "我需要记住 毛毛雨。" },
      { word: "thunder", phonetic: "/ˈθʌndə/", pos: "n.", meaning: "雷", example: "I need to remember thunder.", exampleZh: "我需要记住 雷。" },
      { word: "lightning", phonetic: "/ˈlaɪtnɪŋ/", pos: "n.", meaning: "闪电", example: "I need to remember lightning.", exampleZh: "我需要记住 闪电。" },
      { word: "flood", phonetic: "/flʌd/", pos: "n.", meaning: "洪水", example: "I need to remember flood.", exampleZh: "我需要记住 洪水。" },
      { word: "heatwave", phonetic: "/ˈhiːtweɪv/", pos: "n.", meaning: "热浪", example: "I need to remember heatwave.", exampleZh: "我需要记住 热浪。" },
    ]
  },
  {
    theme: "季节月份",
    words: [
      { word: "spring", phonetic: "/sprɪŋ/", pos: "n.", meaning: "春天", example: "I need to remember spring.", exampleZh: "我需要记住 春天。" },
      { word: "summer", phonetic: "/ˈsʌmə/", pos: "n.", meaning: "夏天", example: "I need to remember summer.", exampleZh: "我需要记住 夏天。" },
      { word: "autumn", phonetic: "/ˈɔːtəm/", pos: "n.", meaning: "秋天", example: "I need to remember autumn.", exampleZh: "我需要记住 秋天。" },
      { word: "winter", phonetic: "/ˈwɪntə/", pos: "n.", meaning: "冬天", example: "I need to remember winter.", exampleZh: "我需要记住 冬天。" },
      { word: "January", phonetic: "/ˈdʒænjuəri/", pos: "n.", meaning: "一月", example: "I need to remember January.", exampleZh: "我需要记住 一月。" },
      { word: "February", phonetic: "/ˈfebruəri/", pos: "n.", meaning: "二月", example: "I need to remember February.", exampleZh: "我需要记住 二月。" },
      { word: "March", phonetic: "/mɑːtʃ/", pos: "n.", meaning: "三月", example: "I need to remember March.", exampleZh: "我需要记住 三月。" },
      { word: "April", phonetic: "/ˈeɪprəl/", pos: "n.", meaning: "四月", example: "I need to remember April.", exampleZh: "我需要记住 四月。" },
      { word: "May", phonetic: "/meɪ/", pos: "n.", meaning: "五月", example: "I need to remember May.", exampleZh: "我需要记住 五月。" },
      { word: "June", phonetic: "/dʒuːn/", pos: "n.", meaning: "六月", example: "I need to remember June.", exampleZh: "我需要记住 六月。" },
    ]
  },
  {
    theme: "月份下半月",
    words: [
      { word: "July", phonetic: "/dʒʊˈlaɪ/", pos: "n.", meaning: "七月", example: "I need to remember July.", exampleZh: "我需要记住 七月。" },
      { word: "August", phonetic: "/ˈɔːɡəst/", pos: "n.", meaning: "八月", example: "I need to remember August.", exampleZh: "我需要记住 八月。" },
      { word: "September", phonetic: "/sepˈtembə/", pos: "n.", meaning: "九月", example: "I need to remember September.", exampleZh: "我需要记住 九月。" },
      { word: "October", phonetic: "/ɒkˈtəʊbə/", pos: "n.", meaning: "十月", example: "I need to remember October.", exampleZh: "我需要记住 十月。" },
      { word: "November", phonetic: "/nəʊˈvembə/", pos: "n.", meaning: "十一月", example: "I need to remember November.", exampleZh: "我需要记住 十一月。" },
      { word: "December", phonetic: "/dɪˈsembə/", pos: "n.", meaning: "十二月", example: "I need to remember December.", exampleZh: "我需要记住 十二月。" },
      { word: "weekend", phonetic: "/wiːkˈend/", pos: "n.", meaning: "周末", example: "I need to remember weekend.", exampleZh: "我需要记住 周末。" },
      { word: "weekday", phonetic: "/ˈwiːkdeɪ/", pos: "n.", meaning: "工作日", example: "I need to remember weekday.", exampleZh: "我需要记住 工作日。" },
      { word: "holiday", phonetic: "/ˈhɒlədeɪ/", pos: "n.", meaning: "假日", example: "I need to remember holiday.", exampleZh: "我需要记住 假日。" },
      { word: "public holiday", phonetic: "/ˈpʌblɪk ˈhɒlədeɪ/", pos: "n.", meaning: "公共假期", example: "I need to remember public holiday.", exampleZh: "我需要记住 公共假期。" },
    ]
  },
  {
    theme: "时间表达",
    words: [
      { word: "morning", phonetic: "/ˈmɔːnɪŋ/", pos: "n.", meaning: "早晨", example: "I need to remember morning.", exampleZh: "我需要记住 早晨。" },
      { word: "afternoon", phonetic: "/ˌɑːftəˈnuːn/", pos: "n.", meaning: "下午", example: "I need to remember afternoon.", exampleZh: "我需要记住 下午。" },
      { word: "evening", phonetic: "/ˈiːvnɪŋ/", pos: "n.", meaning: "傍晚", example: "I need to remember evening.", exampleZh: "我需要记住 傍晚。" },
      { word: "midnight", phonetic: "/ˈmɪdnaɪt/", pos: "n.", meaning: "午夜", example: "I need to remember midnight.", exampleZh: "我需要记住 午夜。" },
      { word: "noon", phonetic: "/nuːn/", pos: "n.", meaning: "中午", example: "I need to remember noon.", exampleZh: "我需要记住 中午。" },
      { word: "dawn", phonetic: "/dɔːn/", pos: "n.", meaning: "黎明", example: "I need to remember dawn.", exampleZh: "我需要记住 黎明。" },
      { word: "dusk", phonetic: "/dʌsk/", pos: "n.", meaning: "黄昏", example: "I need to remember dusk.", exampleZh: "我需要记住 黄昏。" },
      { word: "o'clock", phonetic: "/əˈklɒk/", pos: "adv.", meaning: "点钟", example: "I need to remember o'clock.", exampleZh: "我需要记住 点钟。" },
      { word: "quarter past", phonetic: "/ˈkwɔːtə pɑːst/", pos: "phrase", meaning: "一刻", example: "I need to remember quarter past.", exampleZh: "我需要记住 一刻。" },
      { word: "half past", phonetic: "/hɑːf pɑːst/", pos: "phrase", meaning: "半", example: "I need to remember half past.", exampleZh: "我需要记住 半。" },
    ]
  },
  {
    theme: "数字读法",
    words: [
      { word: "hundred", phonetic: "/ˈhʌndrəd/", pos: "n.", meaning: "百", example: "I need to remember hundred.", exampleZh: "我需要记住 百。" },
      { word: "thousand", phonetic: "/ˈθaʊznd/", pos: "n.", meaning: "千", example: "I need to remember thousand.", exampleZh: "我需要记住 千。" },
      { word: "million", phonetic: "/ˈmɪljən/", pos: "n.", meaning: "百万", example: "I need to remember million.", exampleZh: "我需要记住 百万。" },
      { word: "first", phonetic: "/fɜːst/", pos: "num.", meaning: "第一", example: "I need to remember first.", exampleZh: "我需要记住 第一。" },
      { word: "second", phonetic: "/ˈsekənd/", pos: "num.", meaning: "第二", example: "I need to remember second.", exampleZh: "我需要记住 第二。" },
      { word: "third", phonetic: "/θɜːd/", pos: "num.", meaning: "第三", example: "I need to remember third.", exampleZh: "我需要记住 第三。" },
      { word: "fourth", phonetic: "/fɔːθ/", pos: "num.", meaning: "第四", example: "I need to remember fourth.", exampleZh: "我需要记住 第四。" },
      { word: "fifth", phonetic: "/fɪfθ/", pos: "num.", meaning: "第五", example: "I need to remember fifth.", exampleZh: "我需要记住 第五。" },
      { word: "once", phonetic: "/wʌns/", pos: "adv.", meaning: "一次", example: "I need to remember once.", exampleZh: "我需要记住 一次。" },
      { word: "twice", phonetic: "/twaɪs/", pos: "adv.", meaning: "两次", example: "I need to remember twice.", exampleZh: "我需要记住 两次。" },
    ]
  },
  {
    theme: "酒店入住",
    words: [
      { word: "check-in", phonetic: "/ˈtʃek ɪn/", pos: "n.", meaning: "入住", example: "I need to remember check-in.", exampleZh: "我需要记住 入住。" },
      { word: "check-out", phonetic: "/ˈtʃek aʊt/", pos: "n.", meaning: "退房", example: "I need to remember check-out.", exampleZh: "我需要记住 退房。" },
      { word: "reservation", phonetic: "/ˌrezəˈveɪʃn/", pos: "n.", meaning: "预订", example: "I need to remember reservation.", exampleZh: "我需要记住 预订。" },
      { word: "booking", phonetic: "/ˈbʊkɪŋ/", pos: "n.", meaning: "预约", example: "I need to remember booking.", exampleZh: "我需要记住 预约。" },
      { word: "reception", phonetic: "/rɪˈsepʃn/", pos: "n.", meaning: "前台", example: "I need to remember reception.", exampleZh: "我需要记住 前台。" },
      { word: "lobby", phonetic: "/ˈlɒbi/", pos: "n.", meaning: "大堂", example: "I need to remember lobby.", exampleZh: "我需要记住 大堂。" },
      { word: "key card", phonetic: "/kiː kɑːd/", pos: "n.", meaning: "房卡", example: "I need to remember key card.", exampleZh: "我需要记住 房卡。" },
      { word: "room number", phonetic: "/ruːm ˈnʌmbə/", pos: "n.", meaning: "房间号", example: "I need to remember room number.", exampleZh: "我需要记住 房间号。" },
      { word: "suite", phonetic: "/swiːt/", pos: "n.", meaning: "套房", example: "I need to remember suite.", exampleZh: "我需要记住 套房。" },
      { word: "single room", phonetic: "/ˈsɪŋɡl ruːm/", pos: "n.", meaning: "单人间", example: "I need to remember single room.", exampleZh: "我需要记住 单人间。" },
    ]
  },
  {
    theme: "房型选择",
    words: [
      { word: "double room", phonetic: "/ˈdʌbl ruːm/", pos: "n.", meaning: "双人间", example: "I need to remember double room.", exampleZh: "我需要记住 双人间。" },
      { word: "twin room", phonetic: "/twɪn ruːm/", pos: "n.", meaning: "双床房", example: "I need to remember twin room.", exampleZh: "我需要记住 双床房。" },
      { word: "king-size bed", phonetic: "/kɪŋ saɪz bed/", pos: "n.", meaning: "大床", example: "I need to remember king-size bed.", exampleZh: "我需要记住 大床。" },
      { word: "queen-size bed", phonetic: "/kwiːn saɪz bed/", pos: "n.", meaning: "大床", example: "I need to remember queen-size bed.", exampleZh: "我需要记住 大床。" },
      { word: "bunk bed", phonetic: "/bʌŋk bed/", pos: "n.", meaning: "上下铺", example: "I need to remember bunk bed.", exampleZh: "我需要记住 上下铺。" },
      { word: "extra bed", phonetic: "/ˈekstrə bed/", pos: "n.", meaning: "加床", example: "I need to remember extra bed.", exampleZh: "我需要记住 加床。" },
      { word: "balcony", phonetic: "/ˈbælkəni/", pos: "n.", meaning: "阳台", example: "I need to remember balcony.", exampleZh: "我需要记住 阳台。" },
      { word: "ocean view", phonetic: "/ˈəʊʃn vjuː/", pos: "n.", meaning: "海景", example: "I need to remember ocean view.", exampleZh: "我需要记住 海景。" },
      { word: "city view", phonetic: "/ˈsɪti vjuː/", pos: "n.", meaning: "城景", example: "I need to remember city view.", exampleZh: "我需要记住 城景。" },
      { word: "non-smoking", phonetic: "/nɒn ˈsməʊkɪŋ/", pos: "adj.", meaning: "无烟", example: "I need to remember non-smoking.", exampleZh: "我需要记住 无烟。" },
    ]
  },
  {
    theme: "客房用品",
    words: [
      { word: "towel", phonetic: "/ˈtaʊəl/", pos: "n.", meaning: "毛巾", example: "I need to remember towel.", exampleZh: "我需要记住 毛巾。" },
      { word: "pillow", phonetic: "/ˈpɪləʊ/", pos: "n.", meaning: "枕头", example: "I need to remember pillow.", exampleZh: "我需要记住 枕头。" },
      { word: "blanket", phonetic: "/ˈblæŋkɪt/", pos: "n.", meaning: "毛毯", example: "I need to remember blanket.", exampleZh: "我需要记住 毛毯。" },
      { word: "sheet", phonetic: "/ʃiːt/", pos: "n.", meaning: "床单", example: "I need to remember sheet.", exampleZh: "我需要记住 床单。" },
      { word: "wardrobe", phonetic: "/ˈwɔːdrəʊb/", pos: "n.", meaning: "衣柜", example: "I need to remember wardrobe.", exampleZh: "我需要记住 衣柜。" },
      { word: "drawer", phonetic: "/drɔː/", pos: "n.", meaning: "抽屉", example: "I need to remember drawer.", exampleZh: "我需要记住 抽屉。" },
      { word: "mini-bar", phonetic: "/ˈmɪni bɑː/", pos: "n.", meaning: "迷你吧", example: "I need to remember mini-bar.", exampleZh: "我需要记住 迷你吧。" },
      { word: "safe", phonetic: "/seɪf/", pos: "n.", meaning: "保险箱", example: "I need to remember safe.", exampleZh: "我需要记住 保险箱。" },
      { word: "hairdryer", phonetic: "/ˈheədraɪə/", pos: "n.", meaning: "吹风机", example: "I need to remember hairdryer.", exampleZh: "我需要记住 吹风机。" },
      { word: "shower", phonetic: "/ˈʃaʊə/", pos: "n.", meaning: "淋浴", example: "I need to remember shower.", exampleZh: "我需要记住 淋浴。" },
    ]
  },
  {
    theme: "客房服务",
    words: [
      { word: "housekeeping", phonetic: "/ˈhaʊskiːpɪŋ/", pos: "n.", meaning: "客房服务", example: "I need to remember housekeeping.", exampleZh: "我需要记住 客房服务。" },
      { word: "do not disturb", phonetic: "/duː nɒt dɪˈstɜːb/", pos: "phrase", meaning: "请勿打扰", example: "I need to remember do not disturb.", exampleZh: "我需要记住 请勿打扰。" },
      { word: "towel service", phonetic: "/ˈtaʊəl ˈsɜːvɪs/", pos: "n.", meaning: "毛巾服务", example: "I need to remember towel service.", exampleZh: "我需要记住 毛巾服务。" },
      { word: "wake-up call", phonetic: "/weɪk ʌp kɔːl/", pos: "n.", meaning: "叫早服务", example: "I need to remember wake-up call.", exampleZh: "我需要记住 叫早服务。" },
      { word: "room service", phonetic: "/ruːm ˈsɜːvɪs/", pos: "n.", meaning: "送餐服务", example: "I need to remember room service.", exampleZh: "我需要记住 送餐服务。" },
      { word: "breakfast included", phonetic: "/ˈbrekfəst ɪnˈkluːdɪd/", pos: "adj.", meaning: "含早餐", example: "I need to remember breakfast included.", exampleZh: "我需要记住 含早餐。" },
      { word: "laundry", phonetic: "/ˈlɔːndri/", pos: "n.", meaning: "洗衣", example: "I need to remember laundry.", exampleZh: "我需要记住 洗衣。" },
      { word: "iron", phonetic: "/ˈaɪən/", pos: "n.", meaning: "熨斗", example: "I need to remember iron.", exampleZh: "我需要记住 熨斗。" },
      { word: "minibar", phonetic: "/ˈmɪnibɑː/", pos: "n.", meaning: "小冰箱", example: "I need to remember minibar.", exampleZh: "我需要记住 小冰箱。" },
      { word: "complaint", phonetic: "/kəmˈpleɪnt/", pos: "n.", meaning: "投诉", example: "I need to remember complaint.", exampleZh: "我需要记住 投诉。" },
    ]
  },
  {
    theme: "酒店设施",
    words: [
      { word: "swimming pool", phonetic: "/ˈswɪmɪŋ puːl/", pos: "n.", meaning: "游泳池", example: "I need to remember swimming pool.", exampleZh: "我需要记住 游泳池。" },
      { word: "gym", phonetic: "/dʒɪm/", pos: "n.", meaning: "健身房", example: "I need to remember gym.", exampleZh: "我需要记住 健身房。" },
      { word: "spa", phonetic: "/spɑː/", pos: "n.", meaning: "水疗", example: "I need to remember spa.", exampleZh: "我需要记住 水疗。" },
      { word: "sauna", phonetic: "/ˈsɔːnə/", pos: "n.", meaning: "桑拿", example: "I need to remember sauna.", exampleZh: "我需要记住 桑拿。" },
      { word: "restaurant", phonetic: "/ˈrestrɒnt/", pos: "n.", meaning: "餐厅", example: "I need to remember restaurant.", exampleZh: "我需要记住 餐厅。" },
      { word: "bar", phonetic: "/bɑː/", pos: "n.", meaning: "酒吧", example: "I need to remember bar.", exampleZh: "我需要记住 酒吧。" },
      { word: "lounge", phonetic: "/laʊndʒ/", pos: "n.", meaning: "休息室", example: "I need to remember lounge.", exampleZh: "我需要记住 休息室。" },
      { word: "business centre", phonetic: "/ˈbɪznəs ˈsentə/", pos: "n.", meaning: "商务中心", example: "I need to remember business centre.", exampleZh: "我需要记住 商务中心。" },
      { word: "wifi", phonetic: "/ˈwaɪfaɪ/", pos: "n.", meaning: "无线网", example: "I need to remember wifi.", exampleZh: "我需要记住 无线网。" },
      { word: "elevator", phonetic: "/ˈelɪveɪtə/", pos: "n.", meaning: "电梯", example: "I need to remember elevator.", exampleZh: "我需要记住 电梯。" },
    ]
  },
  {
    theme: "青年旅社",
    words: [
      { word: "hostel", phonetic: "/ˈhɒstl/", pos: "n.", meaning: "青旅", example: "I need to remember hostel.", exampleZh: "我需要记住 青旅。" },
      { word: "dorm", phonetic: "/dɔːm/", pos: "n.", meaning: "多人间", example: "I need to remember dorm.", exampleZh: "我需要记住 多人间。" },
      { word: "shared bathroom", phonetic: "/ʃeəd ˈbɑːθruːm/", pos: "n.", meaning: "共用浴室", example: "I need to remember shared bathroom.", exampleZh: "我需要记住 共用浴室。" },
      { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", pos: "n.", meaning: "公共厨房", example: "I need to remember kitchen.", exampleZh: "我需要记住 公共厨房。" },
      { word: "self-catering", phonetic: "/self ˈkeɪtərɪŋ/", pos: "adj.", meaning: "自助餐的", example: "I need to remember self-catering.", exampleZh: "我需要记住 自助餐的。" },
      { word: "locker", phonetic: "/ˈlɒkə/", pos: "n.", meaning: "储物柜", example: "I need to remember locker.", exampleZh: "我需要记住 储物柜。" },
      { word: "common room", phonetic: "/ˈkɒmən ruːm/", pos: "n.", meaning: "公共活动室", example: "I need to remember common room.", exampleZh: "我需要记住 公共活动室。" },
      { word: "reception", phonetic: "/rɪˈsepʃn/", pos: "n.", meaning: "前台", example: "I need to remember reception.", exampleZh: "我需要记住 前台。" },
      { word: "tour", phonetic: "/tʊə/", pos: "n.", meaning: "旅游团", example: "I need to remember tour.", exampleZh: "我需要记住 旅游团。" },
      { word: "backpacker", phonetic: "/ˈbækpækə/", pos: "n.", meaning: "背包客", example: "I need to remember backpacker.", exampleZh: "我需要记住 背包客。" },
    ]
  },
  {
    theme: "露营",
    words: [
      { word: "tent", phonetic: "/tent/", pos: "n.", meaning: "帐篷", example: "I need to remember tent.", exampleZh: "我需要记住 帐篷。" },
      { word: "sleeping bag", phonetic: "/ˈsliːpɪŋ bæɡ/", pos: "n.", meaning: "睡袋", example: "I need to remember sleeping bag.", exampleZh: "我需要记住 睡袋。" },
      { word: "campfire", phonetic: "/ˈkæmpfaɪə/", pos: "n.", meaning: "篝火", example: "I need to remember campfire.", exampleZh: "我需要记住 篝火。" },
      { word: "campground", phonetic: "/ˈkæmpɡraʊnd/", pos: "n.", meaning: "营地", example: "I need to remember campground.", exampleZh: "我需要记住 营地。" },
      { word: "BBQ", phonetic: "/biː biː kjuː/", pos: "n.", meaning: "烧烤", example: "I need to remember BBQ.", exampleZh: "我需要记住 烧烤。" },
      { word: "torch", phonetic: "/tɔːtʃ/", pos: "n.", meaning: "手电筒", example: "I need to remember torch.", exampleZh: "我需要记住 手电筒。" },
      { word: "mosquito net", phonetic: "/məˈskiːtəʊ net/", pos: "n.", meaning: "蚊帐", example: "I need to remember mosquito net.", exampleZh: "我需要记住 蚊帐。" },
      { word: "stove", phonetic: "/stəʊv/", pos: "n.", meaning: "炉子", example: "I need to remember stove.", exampleZh: "我需要记住 炉子。" },
      { word: "cooler", phonetic: "/ˈkuːlə/", pos: "n.", meaning: "保温箱", example: "I need to remember cooler.", exampleZh: "我需要记住 保温箱。" },
      { word: "hiking boots", phonetic: "/ˈhaɪkɪŋ buːts/", pos: "n.", meaning: "登山靴", example: "I need to remember hiking boots.", exampleZh: "我需要记住 登山靴。" },
    ]
  },
  {
    theme: "餐厅基础",
    words: [
      { word: "waiter", phonetic: "/ˈweɪtə/", pos: "n.", meaning: "服务员", example: "I need to remember waiter.", exampleZh: "我需要记住 服务员。" },
      { word: "waitress", phonetic: "/ˈweɪtrəs/", pos: "n.", meaning: "女服务员", example: "I need to remember waitress.", exampleZh: "我需要记住 女服务员。" },
      { word: "menu", phonetic: "/ˈmenjuː/", pos: "n.", meaning: "菜单", example: "I need to remember menu.", exampleZh: "我需要记住 菜单。" },
      { word: "wine list", phonetic: "/waɪn lɪst/", pos: "n.", meaning: "酒单", example: "I need to remember wine list.", exampleZh: "我需要记住 酒单。" },
      { word: "order", phonetic: "/ˈɔːdə/", pos: "n.", meaning: "点单", example: "I need to remember order.", exampleZh: "我需要记住 点单。" },
      { word: "appetizer", phonetic: "/ˈæpɪtaɪzə/", pos: "n.", meaning: "开胃菜", example: "I need to remember appetizer.", exampleZh: "我需要记住 开胃菜。" },
      { word: "main course", phonetic: "/meɪn kɔːs/", pos: "n.", meaning: "主菜", example: "I need to remember main course.", exampleZh: "我需要记住 主菜。" },
      { word: "dessert", phonetic: "/dɪˈzɜːt/", pos: "n.", meaning: "甜点", example: "I need to remember dessert.", exampleZh: "我需要记住 甜点。" },
      { word: "bill", phonetic: "/bɪl/", pos: "n.", meaning: "账单", example: "I need to remember bill.", exampleZh: "我需要记住 账单。" },
      { word: "tip", phonetic: "/tɪp/", pos: "n.", meaning: "小费", example: "I need to remember tip.", exampleZh: "我需要记住 小费。" },
    ]
  },
  {
    theme: "点餐用语",
    words: [
      { word: "I'd like to order", phonetic: "/aɪd laɪk tuː ˈɔːdə/", pos: "phrase", meaning: "我想要点", example: "I need to remember I'd like to order.", exampleZh: "我需要记住 我想要点。" },
      { word: "What do you recommend", phonetic: "/wɒt duː juː ˈrekəmend/", pos: "phrase", meaning: "有什么推荐", example: "I need to remember What do you recommend.", exampleZh: "我需要记住 有什么推荐。" },
      { word: "Is it spicy", phonetic: "/ɪz ɪt ˈspaɪsi/", pos: "phrase", meaning: "辣吗", example: "I need to remember Is it spicy.", exampleZh: "我需要记住 辣吗。" },
      { word: "I'm vegetarian", phonetic: "/aɪm ˌvedʒəˈteəriən/", pos: "phrase", meaning: "我吃素", example: "I need to remember I'm vegetarian.", exampleZh: "我需要记住 我吃素。" },
      { word: "no MSG", phonetic: "/nəʊ ˌem es ˈdʒiː/", pos: "phrase", meaning: "不要味精", example: "I need to remember no MSG.", exampleZh: "我需要记住 不要味精。" },
      { word: "well done", phonetic: "/wel dʌn/", pos: "adj.", meaning: "全熟", example: "I need to remember well done.", exampleZh: "我需要记住 全熟。" },
      { word: "medium", phonetic: "/ˈmiːdiəm/", pos: "adj.", meaning: "五分熟", example: "I need to remember medium.", exampleZh: "我需要记住 五分熟。" },
      { word: "rare", phonetic: "/reə/", pos: "adj.", meaning: "三分熟", example: "I need to remember rare.", exampleZh: "我需要记住 三分熟。" },
      { word: "takeaway", phonetic: "/ˈteɪkəweɪ/", pos: "n.", meaning: "外带", example: "I need to remember takeaway.", exampleZh: "我需要记住 外带。" },
      { word: "doggie bag", phonetic: "/ˈdɒɡi bæɡ/", pos: "n.", meaning: "打包盒", example: "I need to remember doggie bag.", exampleZh: "我需要记住 打包盒。" },
    ]
  },
  {
    theme: "餐桌用品",
    words: [
      { word: "fork", phonetic: "/fɔːk/", pos: "n.", meaning: "叉子", example: "I need to remember fork.", exampleZh: "我需要记住 叉子。" },
      { word: "knife", phonetic: "/naɪf/", pos: "n.", meaning: "刀", example: "I need to remember knife.", exampleZh: "我需要记住 刀。" },
      { word: "spoon", phonetic: "/spuːn/", pos: "n.", meaning: "勺子", example: "I need to remember spoon.", exampleZh: "我需要记住 勺子。" },
      { word: "plate", phonetic: "/pleɪt/", pos: "n.", meaning: "盘子", example: "I need to remember plate.", exampleZh: "我需要记住 盘子。" },
      { word: "bowl", phonetic: "/bəʊl/", pos: "n.", meaning: "碗", example: "I need to remember bowl.", exampleZh: "我需要记住 碗。" },
      { word: "glass", phonetic: "/ɡlɑːs/", pos: "n.", meaning: "玻璃杯", example: "I need to remember glass.", exampleZh: "我需要记住 玻璃杯。" },
      { word: "cup", phonetic: "/kʌp/", pos: "n.", meaning: "杯子", example: "I need to remember cup.", exampleZh: "我需要记住 杯子。" },
      { word: "napkin", phonetic: "/ˈnæpkɪn/", pos: "n.", meaning: "餐巾纸", example: "I need to remember napkin.", exampleZh: "我需要记住 餐巾纸。" },
      { word: "tablecloth", phonetic: "/ˈteɪblklɒθ/", pos: "n.", meaning: "桌布", example: "I need to remember tablecloth.", exampleZh: "我需要记住 桌布。" },
      { word: "salt shaker", phonetic: "/sɔːlt ˈʃeɪkə/", pos: "n.", meaning: "盐瓶", example: "I need to remember salt shaker.", exampleZh: "我需要记住 盐瓶。" },
    ]
  },
  {
    theme: "澳洲特色菜",
    words: [
      { word: "meat pie", phonetic: "/miːt paɪ/", pos: "n.", meaning: "肉饼", example: "I need to remember meat pie.", exampleZh: "我需要记住 肉饼。" },
      { word: "lamington", phonetic: "/ˈlæmɪŋtən/", pos: "n.", meaning: "雷明顿蛋糕", example: "I need to remember lamington.", exampleZh: "我需要记住 雷明顿蛋糕。" },
      { word: "pavlova", phonetic: "/pævˈləʊvə/", pos: "n.", meaning: "帕夫洛娃蛋糕", example: "I need to remember pavlova.", exampleZh: "我需要记住 帕夫洛娃蛋糕。" },
      { word: "Vegemite", phonetic: "/ˈvedʒɪmaɪt/", pos: "n.", meaning: "澳洲酵母酱", example: "I need to remember Vegemite.", exampleZh: "我需要记住 澳洲酵母酱。" },
      { word: "fairy bread", phonetic: "/ˈfeəri bred/", pos: "n.", meaning: "精灵面包", example: "I need to remember fairy bread.", exampleZh: "我需要记住 精灵面包。" },
      { word: "sausage roll", phonetic: "/ˈsɒsɪdʒ rəʊl/", pos: "n.", meaning: "香肠卷", example: "I need to remember sausage roll.", exampleZh: "我需要记住 香肠卷。" },
      { word: "Tim Tam", phonetic: "/tɪm tæm/", pos: "n.", meaning: "澳洲巧克力饼干", example: "I need to remember Tim Tam.", exampleZh: "我需要记住 澳洲巧克力饼干。" },
      { word: "Kangaroo meat", phonetic: "/ˌkæŋɡəˈruː miːt/", pos: "n.", meaning: "袋鼠肉", example: "I need to remember Kangaroo meat.", exampleZh: "我需要记住 袋鼠肉。" },
      { word: "Barramundi", phonetic: "/ˌbærəˈmʌndi/", pos: "n.", meaning: "澳洲肺鱼", example: "I need to remember Barramundi.", exampleZh: "我需要记住 澳洲肺鱼。" },
      { word: "flat white", phonetic: "/flæt waɪt/", pos: "n.", meaning: "澳式白咖啡", example: "I need to remember flat white.", exampleZh: "我需要记住 澳式白咖啡。" },
    ]
  },
  {
    theme: "饮料类",
    words: [
      { word: "espresso", phonetic: "/eˈspresəʊ/", pos: "n.", meaning: "浓缩咖啡", example: "I need to remember espresso.", exampleZh: "我需要记住 浓缩咖啡。" },
      { word: "cappuccino", phonetic: "/ˌkæpəˈtʃiːnəʊ/", pos: "n.", meaning: "卡布奇诺", example: "I need to remember cappuccino.", exampleZh: "我需要记住 卡布奇诺。" },
      { word: "latte", phonetic: "/ˈlæteɪ/", pos: "n.", meaning: "拿铁", example: "I need to remember latte.", exampleZh: "我需要记住 拿铁。" },
      { word: "mocha", phonetic: "/ˈmɒkə/", pos: "n.", meaning: "摩卡", example: "I need to remember mocha.", exampleZh: "我需要记住 摩卡。" },
      { word: "lemonade", phonetic: "/ˌleməˈneɪd/", pos: "n.", meaning: "柠檬水", example: "I need to remember lemonade.", exampleZh: "我需要记住 柠檬水。" },
      { word: "iced tea", phonetic: "/aɪst tiː/", pos: "n.", meaning: "冰茶", example: "I need to remember iced tea.", exampleZh: "我需要记住 冰茶。" },
      { word: "soft drink", phonetic: "/sɒft drɪŋk/", pos: "n.", meaning: "软饮", example: "I need to remember soft drink.", exampleZh: "我需要记住 软饮。" },
      { word: "tap water", phonetic: "/tæp ˈwɔːtə/", pos: "n.", meaning: "自来水", example: "I need to remember tap water.", exampleZh: "我需要记住 自来水。" },
      { word: "sparkling", phonetic: "/ˈspɑːklɪŋ/", pos: "adj.", meaning: "气泡的", example: "I need to remember sparkling.", exampleZh: "我需要记住 气泡的。" },
      { word: "still water", phonetic: "/stɪl ˈwɔːtə/", pos: "n.", meaning: "无气水", example: "I need to remember still water.", exampleZh: "我需要记住 无气水。" },
    ]
  },
  {
    theme: "酒水",
    words: [
      { word: "beer", phonetic: "/bɪə/", pos: "n.", meaning: "啤酒", example: "I need to remember beer.", exampleZh: "我需要记住 啤酒。" },
      { word: "wine", phonetic: "/waɪn/", pos: "n.", meaning: "葡萄酒", example: "I need to remember wine.", exampleZh: "我需要记住 葡萄酒。" },
      { word: "red wine", phonetic: "/red waɪn/", pos: "n.", meaning: "红酒", example: "I need to remember red wine.", exampleZh: "我需要记住 红酒。" },
      { word: "white wine", phonetic: "/waɪt waɪn/", pos: "n.", meaning: "白葡萄酒", example: "I need to remember white wine.", exampleZh: "我需要记住 白葡萄酒。" },
      { word: "whisky", phonetic: "/ˈwɪski/", pos: "n.", meaning: "威士忌", example: "I need to remember whisky.", exampleZh: "我需要记住 威士忌。" },
      { word: "cocktail", phonetic: "/ˈkɒkteɪl/", pos: "n.", meaning: "鸡尾酒", example: "I need to remember cocktail.", exampleZh: "我需要记住 鸡尾酒。" },
      { word: "mocktail", phonetic: "/ˈmɒkteɪl/", pos: "n.", meaning: "无酒精鸡尾酒", example: "I need to remember mocktail.", exampleZh: "我需要记住 无酒精鸡尾酒。" },
      { word: "on the rocks", phonetic: "/ɒn ðə rɒks/", pos: "phrase", meaning: "加冰块", example: "I need to remember on the rocks.", exampleZh: "我需要记住 加冰块。" },
      { word: "happy hour", phonetic: "/ˈhæpi aʊə/", pos: "n.", meaning: "欢乐时光", example: "I need to remember happy hour.", exampleZh: "我需要记住 欢乐时光。" },
      { word: "last call", phonetic: "/lɑːst kɔːl/", pos: "n.", meaning: "最后一次点单", example: "I need to remember last call.", exampleZh: "我需要记住 最后一次点单。" },
    ]
  },
  {
    theme: "购物",
    words: [
      { word: "shop", phonetic: "/ʃɒp/", pos: "n.", meaning: "商店", example: "I need to remember shop.", exampleZh: "我需要记住 商店。" },
      { word: "shopping mall", phonetic: "/ˈʃɒpɪŋ mɔːl/", pos: "n.", meaning: "购物中心", example: "I need to remember shopping mall.", exampleZh: "我需要记住 购物中心。" },
      { word: "department store", phonetic: "/dɪˈpɑːtmənt stɔː/", pos: "n.", meaning: "百货商店", example: "I need to remember department store.", exampleZh: "我需要记住 百货商店。" },
      { word: "supermarket", phonetic: "/ˈsuːpəmɑːkɪt/", pos: "n.", meaning: "超市", example: "I need to remember supermarket.", exampleZh: "我需要记住 超市。" },
      { word: "pharmacy", phonetic: "/ˈfɑːməsi/", pos: "n.", meaning: "药店", example: "I need to remember pharmacy.", exampleZh: "我需要记住 药店。" },
      { word: "chemist", phonetic: "/ˈkemɪst/", pos: "n.", meaning: "药店", example: "I need to remember chemist.", exampleZh: "我需要记住 药店。" },
      { word: "baker", phonetic: "/ˈbeɪkə/", pos: "n.", meaning: "面包店", example: "I need to remember baker.", exampleZh: "我需要记住 面包店。" },
      { word: "butcher", phonetic: "/ˈbʊtʃə/", pos: "n.", meaning: "肉店", example: "I need to remember butcher.", exampleZh: "我需要记住 肉店。" },
      { word: "newsagent", phonetic: "/ˈnjuːzeɪdʒənt/", pos: "n.", meaning: "报刊店", example: "I need to remember newsagent.", exampleZh: "我需要记住 报刊店。" },
      { word: "op shop", phonetic: "/ɒp ʃɒp/", pos: "n.", meaning: "二手店", example: "I need to remember op shop.", exampleZh: "我需要记住 二手店。" },
    ]
  },
  {
    theme: "付款方式",
    words: [
      { word: "cash", phonetic: "/kæʃ/", pos: "n.", meaning: "现金", example: "I need to remember cash.", exampleZh: "我需要记住 现金。" },
      { word: "coin", phonetic: "/kɔɪn/", pos: "n.", meaning: "硬币", example: "I need to remember coin.", exampleZh: "我需要记住 硬币。" },
      { word: "note", phonetic: "/nəʊt/", pos: "n.", meaning: "纸币", example: "I need to remember note.", exampleZh: "我需要记住 纸币。" },
      { word: "credit card", phonetic: "/ˈkredɪt kɑːd/", pos: "n.", meaning: "信用卡", example: "I need to remember credit card.", exampleZh: "我需要记住 信用卡。" },
      { word: "debit card", phonetic: "/ˈdebɪt kɑːd/", pos: "n.", meaning: "借记卡", example: "I need to remember debit card.", exampleZh: "我需要记住 借记卡。" },
      { word: "contactless", phonetic: "/ˈkɒntæktləs/", pos: "adj.", meaning: "非接触式的", example: "I need to remember contactless.", exampleZh: "我需要记住 非接触式的。" },
      { word: "PIN", phonetic: "/pɪn/", pos: "n.", meaning: "密码", example: "I need to remember PIN.", exampleZh: "我需要记住 密码。" },
      { word: "EFTPOS", phonetic: "/ˈeftpɒs/", pos: "n.", meaning: "澳洲刷卡机", example: "I need to remember EFTPOS.", exampleZh: "我需要记住 澳洲刷卡机。" },
      { word: "split the bill", phonetic: "/splɪt ðə bɪl/", pos: "phrase", meaning: "分摊账单", example: "I need to remember split the bill.", exampleZh: "我需要记住 分摊账单。" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", pos: "n.", meaning: "小票", example: "I need to remember receipt.", exampleZh: "我需要记住 小票。" },
    ]
  },
  {
    theme: "衣物服饰",
    words: [
      { word: "shirt", phonetic: "/ʃɜːt/", pos: "n.", meaning: "衬衫", example: "I need to remember shirt.", exampleZh: "我需要记住 衬衫。" },
      { word: "T-shirt", phonetic: "/tiː ʃɜːt/", pos: "n.", meaning: "T恤", example: "I need to remember T-shirt.", exampleZh: "我需要记住 T恤。" },
      { word: "shorts", phonetic: "/ʃɔːts/", pos: "n.", meaning: "短裤", example: "I need to remember shorts.", exampleZh: "我需要记住 短裤。" },
      { word: "jeans", phonetic: "/dʒiːnz/", pos: "n.", meaning: "牛仔裤", example: "I need to remember jeans.", exampleZh: "我需要记住 牛仔裤。" },
      { word: "dress", phonetic: "/dres/", pos: "n.", meaning: "连衣裙", example: "I need to remember dress.", exampleZh: "我需要记住 连衣裙。" },
      { word: "jacket", phonetic: "/ˈdʒækɪt/", pos: "n.", meaning: "夹克", example: "I need to remember jacket.", exampleZh: "我需要记住 夹克。" },
      { word: "sweater", phonetic: "/ˈswetə/", pos: "n.", meaning: "毛衣", example: "I need to remember sweater.", exampleZh: "我需要记住 毛衣。" },
      { word: "thongs", phonetic: "/θɒŋz/", pos: "n.", meaning: "人字拖", example: "I need to remember thongs.", exampleZh: "我需要记住 人字拖。" },
      { word: "hat", phonetic: "/hæt/", pos: "n.", meaning: "帽子", example: "I need to remember hat.", exampleZh: "我需要记住 帽子。" },
      { word: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", pos: "n.", meaning: "太阳镜", example: "I need to remember sunglasses.", exampleZh: "我需要记住 太阳镜。" },
    ]
  },
  {
    theme: "化妆品",
    words: [
      { word: "sunscreen", phonetic: "/ˈsʌnskriːn/", pos: "n.", meaning: "防晒霜", example: "I need to remember sunscreen.", exampleZh: "我需要记住 防晒霜。" },
      { word: "lip balm", phonetic: "/lɪp bɑːm/", pos: "n.", meaning: "润唇膏", example: "I need to remember lip balm.", exampleZh: "我需要记住 润唇膏。" },
      { word: "moisturiser", phonetic: "/ˈmɔɪstʃəraɪzə/", pos: "n.", meaning: "保湿霜", example: "I need to remember moisturiser.", exampleZh: "我需要记住 保湿霜。" },
      { word: "shampoo", phonetic: "/ʃæmˈpuː/", pos: "n.", meaning: "洗发水", example: "I need to remember shampoo.", exampleZh: "我需要记住 洗发水。" },
      { word: "conditioner", phonetic: "/kənˈdɪʃənə/", pos: "n.", meaning: "护发素", example: "I need to remember conditioner.", exampleZh: "我需要记住 护发素。" },
      { word: "razor", phonetic: "/ˈreɪzə/", pos: "n.", meaning: "剃须刀", example: "I need to remember razor.", exampleZh: "我需要记住 剃须刀。" },
      { word: "perfume", phonetic: "/ˈpɜːfjuːm/", pos: "n.", meaning: "香水", example: "I need to remember perfume.", exampleZh: "我需要记住 香水。" },
      { word: "tissue", phonetic: "/ˈtɪʃuː/", pos: "n.", meaning: "纸巾", example: "I need to remember tissue.", exampleZh: "我需要记住 纸巾。" },
      { word: "wet wipe", phonetic: "/wet waɪp/", pos: "n.", meaning: "湿巾", example: "I need to remember wet wipe.", exampleZh: "我需要记住 湿巾。" },
      { word: "deodorant", phonetic: "/diːˈəʊdərənt/", pos: "n.", meaning: "除臭剂", example: "I need to remember deodorant.", exampleZh: "我需要记住 除臭剂。" },
    ]
  },
  {
    theme: "电子数码",
    words: [
      { word: "charger", phonetic: "/ˈtʃɑːdʒə/", pos: "n.", meaning: "充电器", example: "I need to remember charger.", exampleZh: "我需要记住 充电器。" },
      { word: "adapter", phonetic: "/əˈdæptə/", pos: "n.", meaning: "转换插头", example: "I need to remember adapter.", exampleZh: "我需要记住 转换插头。" },
      { word: "power bank", phonetic: "/ˈpaʊə bæŋk/", pos: "n.", meaning: "充电宝", example: "I need to remember power bank.", exampleZh: "我需要记住 充电宝。" },
      { word: "headphones", phonetic: "/ˈhedfəʊnz/", pos: "n.", meaning: "耳机", example: "I need to remember headphones.", exampleZh: "我需要记住 耳机。" },
      { word: "camera", phonetic: "/ˈkæmərə/", pos: "n.", meaning: "相机", example: "I need to remember camera.", exampleZh: "我需要记住 相机。" },
      { word: "laptop", phonetic: "/ˈlæptɒp/", pos: "n.", meaning: "笔记本电脑", example: "I need to remember laptop.", exampleZh: "我需要记住 笔记本电脑。" },
      { word: "smartphone", phonetic: "/ˈsmɑːtfəʊn/", pos: "n.", meaning: "智能手机", example: "I need to remember smartphone.", exampleZh: "我需要记住 智能手机。" },
      { word: "tablet", phonetic: "/ˈtæblət/", pos: "n.", meaning: "平板电脑", example: "I need to remember tablet.", exampleZh: "我需要记住 平板电脑。" },
      { word: "memory card", phonetic: "/ˈmeməri kɑːd/", pos: "n.", meaning: "存储卡", example: "I need to remember memory card.", exampleZh: "我需要记住 存储卡。" },
      { word: "SIM card", phonetic: "/sɪm kɑːd/", pos: "n.", meaning: "手机卡", example: "I need to remember SIM card.", exampleZh: "我需要记住 手机卡。" },
    ]
  },
  {
    theme: "网络通讯",
    words: [
      { word: "Wi-Fi", phonetic: "/ˈwaɪ faɪ/", pos: "n.", meaning: "无线网", example: "I need to remember Wi-Fi.", exampleZh: "我需要记住 无线网。" },
      { word: "password", phonetic: "/ˈpɑːswɜːd/", pos: "n.", meaning: "密码", example: "I need to remember password.", exampleZh: "我需要记住 密码。" },
      { word: "username", phonetic: "/ˈjuːzəneɪm/", pos: "n.", meaning: "用户名", example: "I need to remember username.", exampleZh: "我需要记住 用户名。" },
      { word: "download", phonetic: "/ˌdaʊnˈləʊd/", pos: "v.", meaning: "下载", example: "I need to remember download.", exampleZh: "我需要记住 下载。" },
      { word: "upload", phonetic: "/ˌʌpˈləʊd/", pos: "v.", meaning: "上传", example: "I need to remember upload.", exampleZh: "我需要记住 上传。" },
      { word: "email", phonetic: "/ˈiːmeɪl/", pos: "n.", meaning: "电子邮件", example: "I need to remember email.", exampleZh: "我需要记住 电子邮件。" },
      { word: "message", phonetic: "/ˈmesɪdʒ/", pos: "n.", meaning: "短信", example: "I need to remember message.", exampleZh: "我需要记住 短信。" },
      { word: "video call", phonetic: "/ˈvɪdiəʊ kɔːl/", pos: "n.", meaning: "视频通话", example: "I need to remember video call.", exampleZh: "我需要记住 视频通话。" },
      { word: "roaming", phonetic: "/ˈrəʊmɪŋ/", pos: "n.", meaning: "漫游", example: "I need to remember roaming.", exampleZh: "我需要记住 漫游。" },
      { word: "mobile data", phonetic: "/ˈməʊbaɪl ˈdeɪtə/", pos: "n.", meaning: "流量", example: "I need to remember mobile data.", exampleZh: "我需要记住 流量。" },
    ]
  },
  {
    theme: "景点游览",
    words: [
      { word: "tourist", phonetic: "/ˈtʊərɪst/", pos: "n.", meaning: "游客", example: "I need to remember tourist.", exampleZh: "我需要记住 游客。" },
      { word: "tour", phonetic: "/tʊə/", pos: "n.", meaning: "旅游团", example: "I need to remember tour.", exampleZh: "我需要记住 旅游团。" },
      { word: "guide", phonetic: "/ɡaɪd/", pos: "n.", meaning: "导游", example: "I need to remember guide.", exampleZh: "我需要记住 导游。" },
      { word: "ticket", phonetic: "/ˈtɪkɪt/", pos: "n.", meaning: "门票", example: "I need to remember ticket.", exampleZh: "我需要记住 门票。" },
      { word: "admission", phonetic: "/ədˈmɪʃn/", pos: "n.", meaning: "入场费", example: "I need to remember admission.", exampleZh: "我需要记住 入场费。" },
      { word: "free entry", phonetic: "/friː ˈentri/", pos: "adj.", meaning: "免费入场", example: "I need to remember free entry.", exampleZh: "我需要记住 免费入场。" },
      { word: "guided tour", phonetic: "/ˈɡaɪdɪd tʊə/", pos: "n.", meaning: "跟团游", example: "I need to remember guided tour.", exampleZh: "我需要记住 跟团游。" },
      { word: "self-guided", phonetic: "/self ˈɡaɪdɪd/", pos: "adj.", meaning: "自助游", example: "I need to remember self-guided.", exampleZh: "我需要记住 自助游。" },
      { word: "audio guide", phonetic: "/ˈɔːdiəʊ ɡaɪd/", pos: "n.", meaning: "语音导览", example: "I need to remember audio guide.", exampleZh: "我需要记住 语音导览。" },
      { word: "souvenir", phonetic: "/ˌsuːvəˈnɪə/", pos: "n.", meaning: "纪念品", example: "I need to remember souvenir.", exampleZh: "我需要记住 纪念品。" },
    ]
  },
  {
    theme: "国家公园",
    words: [
      { word: "national park", phonetic: "/ˈnæʃənəl pɑːk/", pos: "n.", meaning: "国家公园", example: "I need to remember national park.", exampleZh: "我需要记住 国家公园。" },
      { word: "nature reserve", phonetic: "/ˈneɪtʃə rɪˈzɜːv/", pos: "n.", meaning: "自然保护区", example: "I need to remember nature reserve.", exampleZh: "我需要记住 自然保护区。" },
      { word: "walking trail", phonetic: "/ˈwɔːkɪŋ treɪl/", pos: "n.", meaning: "步道", example: "I need to remember walking trail.", exampleZh: "我需要记住 步道。" },
      { word: "lookout", phonetic: "/ˈlʊkaʊt/", pos: "n.", meaning: "观景台", example: "I need to remember lookout.", exampleZh: "我需要记住 观景台。" },
      { word: "picnic area", phonetic: "/ˈpɪknɪk ˈeəriə/", pos: "n.", meaning: "野餐区", example: "I need to remember picnic area.", exampleZh: "我需要记住 野餐区。" },
      { word: "visitor centre", phonetic: "/ˈvɪzɪtə ˈsentə/", pos: "n.", meaning: "游客中心", example: "I need to remember visitor centre.", exampleZh: "我需要记住 游客中心。" },
      { word: "kangaroo", phonetic: "/ˌkæŋɡəˈruː/", pos: "n.", meaning: "袋鼠", example: "I need to remember kangaroo.", exampleZh: "我需要记住 袋鼠。" },
      { word: "koala", phonetic: "/kəʊˈɑːlə/", pos: "n.", meaning: "考拉", example: "I need to remember koala.", exampleZh: "我需要记住 考拉。" },
      { word: "platypus", phonetic: "/ˈplætɪpəs/", pos: "n.", meaning: "鸭嘴兽", example: "I need to remember platypus.", exampleZh: "我需要记住 鸭嘴兽。" },
      { word: "wombat", phonetic: "/ˈwɒmbæt/", pos: "n.", meaning: "袋熊", example: "I need to remember wombat.", exampleZh: "我需要记住 袋熊。" },
    ]
  },
  {
    theme: "海边活动",
    words: [
      { word: "beach", phonetic: "/biːtʃ/", pos: "n.", meaning: "海滩", example: "I need to remember beach.", exampleZh: "我需要记住 海滩。" },
      { word: "swim", phonetic: "/swɪm/", pos: "v.", meaning: "游泳", example: "I need to remember swim.", exampleZh: "我需要记住 游泳。" },
      { word: "surf", phonetic: "/sɜːf/", pos: "v.", meaning: "冲浪", example: "I need to remember surf.", exampleZh: "我需要记住 冲浪。" },
      { word: "snorkel", phonetic: "/ˈsnɔːkl/", pos: "v.", meaning: "浮潜", example: "I need to remember snorkel.", exampleZh: "我需要记住 浮潜。" },
      { word: "dive", phonetic: "/daɪv/", pos: "v.", meaning: "潜水", example: "I need to remember dive.", exampleZh: "我需要记住 潜水。" },
      { word: "sunbathe", phonetic: "/ˈsʌnbeɪð/", pos: "v.", meaning: "日光浴", example: "I need to remember sunbathe.", exampleZh: "我需要记住 日光浴。" },
      { word: "lifeguard", phonetic: "/ˈlaɪfɡɑːd/", pos: "n.", meaning: "救生员", example: "I need to remember lifeguard.", exampleZh: "我需要记住 救生员。" },
      { word: "rip current", phonetic: "/rɪp ˈkʌrənt/", pos: "n.", meaning: "离岸流", example: "I need to remember rip current.", exampleZh: "我需要记住 离岸流。" },
      { word: "board shorts", phonetic: "/bɔːd ʃɔːts/", pos: "n.", meaning: "沙滩裤", example: "I need to remember board shorts.", exampleZh: "我需要记住 沙滩裤。" },
      { word: "rashie", phonetic: "/ˈræʃi/", pos: "n.", meaning: "防晒衣", example: "I need to remember rashie.", exampleZh: "我需要记住 防晒衣。" },
    ]
  },
  {
    theme: "动物园",
    words: [
      { word: "zoo", phonetic: "/zuː/", pos: "n.", meaning: "动物园", example: "I need to remember zoo.", exampleZh: "我需要记住 动物园。" },
      { word: "aquarium", phonetic: "/əˈkweəriəm/", pos: "n.", meaning: "水族馆", example: "I need to remember aquarium.", exampleZh: "我需要记住 水族馆。" },
      { word: "enclosure", phonetic: "/ɪnˈkləʊʒə/", pos: "n.", meaning: "围栏", example: "I need to remember enclosure.", exampleZh: "我需要记住 围栏。" },
      { word: "feeding time", phonetic: "/ˈfiːdɪŋ taɪm/", pos: "n.", meaning: "喂食时间", example: "I need to remember feeding time.", exampleZh: "我需要记住 喂食时间。" },
      { word: "wildlife", phonetic: "/ˈwaɪldlaɪf/", pos: "n.", meaning: "野生动物", example: "I need to remember wildlife.", exampleZh: "我需要记住 野生动物。" },
      { word: "endangered", phonetic: "/ɪnˈdeɪndʒəd/", pos: "adj.", meaning: "濒危的", example: "I need to remember endangered.", exampleZh: "我需要记住 濒危的。" },
      { word: "native", phonetic: "/ˈneɪtɪv/", pos: "adj.", meaning: "本地的", example: "I need to remember native.", exampleZh: "我需要记住 本地的。" },
      { word: "kangaroo", phonetic: "/ˌkæŋɡəˈruː/", pos: "n.", meaning: "袋鼠", example: "I need to remember kangaroo.", exampleZh: "我需要记住 袋鼠。" },
      { word: "wallaby", phonetic: "/ˈwɒləbi/", pos: "n.", meaning: "小袋鼠", example: "I need to remember wallaby.", exampleZh: "我需要记住 小袋鼠。" },
      { word: "cassowary", phonetic: "/ˈkæsəweəri/", pos: "n.", meaning: "食火鸡", example: "I need to remember cassowary.", exampleZh: "我需要记住 食火鸡。" },
    ]
  },
  {
    theme: "博物馆",
    words: [
      { word: "museum", phonetic: "/mjuːˈziːəm/", pos: "n.", meaning: "博物馆", example: "I need to remember museum.", exampleZh: "我需要记住 博物馆。" },
      { word: "art gallery", phonetic: "/ɑːt ˈɡæləri/", pos: "n.", meaning: "美术馆", example: "I need to remember art gallery.", exampleZh: "我需要记住 美术馆。" },
      { word: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", pos: "n.", meaning: "展览", example: "I need to remember exhibition.", exampleZh: "我需要记住 展览。" },
      { word: "collection", phonetic: "/kəˈlekʃn/", pos: "n.", meaning: "藏品", example: "I need to remember collection.", exampleZh: "我需要记住 藏品。" },
      { word: "curator", phonetic: "/kjʊəˈreɪtə/", pos: "n.", meaning: "策展人", example: "I need to remember curator.", exampleZh: "我需要记住 策展人。" },
      { word: "ancient", phonetic: "/ˈeɪnʃənt/", pos: "adj.", meaning: "古老的", example: "I need to remember ancient.", exampleZh: "我需要记住 古老的。" },
      { word: "modern art", phonetic: "/ˈmɒdn ɑːt/", pos: "n.", meaning: "现代艺术", example: "I need to remember modern art.", exampleZh: "我需要记住 现代艺术。" },
      { word: "sculpture", phonetic: "/ˈskʌlptʃə/", pos: "n.", meaning: "雕塑", example: "I need to remember sculpture.", exampleZh: "我需要记住 雕塑。" },
      { word: "painting", phonetic: "/ˈpeɪntɪŋ/", pos: "n.", meaning: "绘画", example: "I need to remember painting.", exampleZh: "我需要记住 绘画。" },
      { word: "photograph", phonetic: "/ˈfəʊtəɡrɑːf/", pos: "n.", meaning: "照片", example: "I need to remember photograph.", exampleZh: "我需要记住 照片。" },
    ]
  },
  {
    theme: "表演娱乐",
    words: [
      { word: "theatre", phonetic: "/ˈθɪətə/", pos: "n.", meaning: "剧院", example: "I need to remember theatre.", exampleZh: "我需要记住 剧院。" },
      { word: "concert", phonetic: "/ˈkɒnsət/", pos: "n.", meaning: "音乐会", example: "I need to remember concert.", exampleZh: "我需要记住 音乐会。" },
      { word: "musical", phonetic: "/ˈmjuːzɪkl/", pos: "n.", meaning: "音乐剧", example: "I need to remember musical.", exampleZh: "我需要记住 音乐剧。" },
      { word: "comedy", phonetic: "/ˈkɒmədi/", pos: "n.", meaning: "喜剧", example: "I need to remember comedy.", exampleZh: "我需要记住 喜剧。" },
      { word: "drama", phonetic: "/ˈdrɑːmə/", pos: "n.", meaning: "戏剧", example: "I need to remember drama.", exampleZh: "我需要记住 戏剧。" },
      { word: "performance", phonetic: "/pəˈfɔːməns/", pos: "n.", meaning: "演出", example: "I need to remember performance.", exampleZh: "我需要记住 演出。" },
      { word: "interval", phonetic: "/ˈɪntəvl/", pos: "n.", meaning: "中场休息", example: "I need to remember interval.", exampleZh: "我需要记住 中场休息。" },
      { word: "programme", phonetic: "/ˈprəʊɡræm/", pos: "n.", meaning: "节目单", example: "I need to remember programme.", exampleZh: "我需要记住 节目单。" },
      { word: "orchestra", phonetic: "/ˈɔːkɪstrə/", pos: "n.", meaning: "管弦乐队", example: "I need to remember orchestra.", exampleZh: "我需要记住 管弦乐队。" },
      { word: "encore", phonetic: "/ˈɒŋkɔː/", pos: "n.", meaning: "返场", example: "I need to remember encore.", exampleZh: "我需要记住 返场。" },
    ]
  },
  {
    theme: "运动项目",
    words: [
      { word: "football", phonetic: "/ˈfʊtbɔːl/", pos: "n.", meaning: "澳式足球", example: "I need to remember football.", exampleZh: "我需要记住 澳式足球。" },
      { word: "rugby", phonetic: "/ˈrʌɡbi/", pos: "n.", meaning: "橄榄球", example: "I need to remember rugby.", exampleZh: "我需要记住 橄榄球。" },
      { word: "cricket", phonetic: "/ˈkrɪkɪt/", pos: "n.", meaning: "板球", example: "I need to remember cricket.", exampleZh: "我需要记住 板球。" },
      { word: "tennis", phonetic: "/ˈtenɪs/", pos: "n.", meaning: "网球", example: "I need to remember tennis.", exampleZh: "我需要记住 网球。" },
      { word: "swimming", phonetic: "/ˈswɪmɪŋ/", pos: "n.", meaning: "游泳", example: "I need to remember swimming.", exampleZh: "我需要记住 游泳。" },
      { word: "running", phonetic: "/ˈrʌnɪŋ/", pos: "n.", meaning: "跑步", example: "I need to remember running.", exampleZh: "我需要记住 跑步。" },
      { word: "cycling", phonetic: "/ˈsaɪklɪŋ/", pos: "n.", meaning: "骑车", example: "I need to remember cycling.", exampleZh: "我需要记住 骑车。" },
      { word: "yoga", phonetic: "/ˈjəʊɡə/", pos: "n.", meaning: "瑜伽", example: "I need to remember yoga.", exampleZh: "我需要记住 瑜伽。" },
      { word: "surfing", phonetic: "/ˈsɜːfɪŋ/", pos: "n.", meaning: "冲浪", example: "I need to remember surfing.", exampleZh: "我需要记住 冲浪。" },
      { word: "golf", phonetic: "/ɡɒlf/", pos: "n.", meaning: "高尔夫", example: "I need to remember golf.", exampleZh: "我需要记住 高尔夫。" },
    ]
  },
  {
    theme: "应急医疗",
    words: [
      { word: "emergency", phonetic: "/iˈmɜːdʒənsi/", pos: "n.", meaning: "紧急情况", example: "I need to remember emergency.", exampleZh: "我需要记住 紧急情况。" },
      { word: "ambulance", phonetic: "/ˈæmbjələns/", pos: "n.", meaning: "救护车", example: "I need to remember ambulance.", exampleZh: "我需要记住 救护车。" },
      { word: "hospital", phonetic: "/ˈhɒspɪtl/", pos: "n.", meaning: "医院", example: "I need to remember hospital.", exampleZh: "我需要记住 医院。" },
      { word: "doctor", phonetic: "/ˈdɒktə/", pos: "n.", meaning: "医生", example: "I need to remember doctor.", exampleZh: "我需要记住 医生。" },
      { word: "nurse", phonetic: "/nɜːs/", pos: "n.", meaning: "护士", example: "I need to remember nurse.", exampleZh: "我需要记住 护士。" },
      { word: "pharmacy", phonetic: "/ˈfɑːməsi/", pos: "n.", meaning: "药店", example: "I need to remember pharmacy.", exampleZh: "我需要记住 药店。" },
      { word: "first aid", phonetic: "/fɜːst eɪd/", pos: "n.", meaning: "急救", example: "I need to remember first aid.", exampleZh: "我需要记住 急救。" },
      { word: "bandage", phonetic: "/ˈbændɪdʒ/", pos: "n.", meaning: "绷带", example: "I need to remember bandage.", exampleZh: "我需要记住 绷带。" },
      { word: "painkiller", phonetic: "/ˈpeɪnkɪlə/", pos: "n.", meaning: "止痛药", example: "I need to remember painkiller.", exampleZh: "我需要记住 止痛药。" },
      { word: "allergy", phonetic: "/ˈælədʒi/", pos: "n.", meaning: "过敏", example: "I need to remember allergy.", exampleZh: "我需要记住 过敏。" },
    ]
  },
  {
    theme: "常见症状",
    words: [
      { word: "headache", phonetic: "/ˈhedeɪk/", pos: "n.", meaning: "头痛", example: "I need to remember headache.", exampleZh: "我需要记住 头痛。" },
      { word: "fever", phonetic: "/ˈfiːvə/", pos: "n.", meaning: "发烧", example: "I need to remember fever.", exampleZh: "我需要记住 发烧。" },
      { word: "cough", phonetic: "/kɒf/", pos: "n.", meaning: "咳嗽", example: "I need to remember cough.", exampleZh: "我需要记住 咳嗽。" },
      { word: "sore throat", phonetic: "/sɔː θrəʊt/", pos: "n.", meaning: "喉咙痛", example: "I need to remember sore throat.", exampleZh: "我需要记住 喉咙痛。" },
      { word: "stomachache", phonetic: "/ˈstʌməkeɪk/", pos: "n.", meaning: "胃痛", example: "I need to remember stomachache.", exampleZh: "我需要记住 胃痛。" },
      { word: "nauseous", phonetic: "/ˈnɔːziəs/", pos: "adj.", meaning: "恶心的", example: "I need to remember nauseous.", exampleZh: "我需要记住 恶心的。" },
      { word: "dizzy", phonetic: "/ˈdɪzi/", pos: "adj.", meaning: "头晕的", example: "I need to remember dizzy.", exampleZh: "我需要记住 头晕的。" },
      { word: "allergy", phonetic: "/ˈælədʒi/", pos: "n.", meaning: "过敏", example: "I need to remember allergy.", exampleZh: "我需要记住 过敏。" },
      { word: "insect bite", phonetic: "/ˈɪnsekt baɪt/", pos: "n.", meaning: "虫咬", example: "I need to remember insect bite.", exampleZh: "我需要记住 虫咬。" },
      { word: "sunburn", phonetic: "/ˈsʌnbɜːn/", pos: "n.", meaning: "晒伤", example: "I need to remember sunburn.", exampleZh: "我需要记住 晒伤。" },
    ]
  },
  {
    theme: "报警求助",
    words: [
      { word: "police", phonetic: "/pəˈliːs/", pos: "n.", meaning: "警察", example: "I need to remember police.", exampleZh: "我需要记住 警察。" },
      { word: "fire brigade", phonetic: "/ˈfaɪə brɪˈɡeɪd/", pos: "n.", meaning: "消防队", example: "I need to remember fire brigade.", exampleZh: "我需要记住 消防队。" },
      { word: "lifesaver", phonetic: "/ˈlaɪfseɪvə/", pos: "n.", meaning: "救生员", example: "I need to remember lifesaver.", exampleZh: "我需要记住 救生员。" },
      { word: "000", phonetic: "/triː əʊ əʊ/", pos: "n.", meaning: "紧急电话", example: "I need to remember 000.", exampleZh: "我需要记住 紧急电话。" },
      { word: "help", phonetic: "/help/", pos: "n.", meaning: "帮助", example: "I need to remember help.", exampleZh: "我需要记住 帮助。" },
      { word: "danger", phonetic: "/ˈdeɪndʒə/", pos: "n.", meaning: "危险", example: "I need to remember danger.", exampleZh: "我需要记住 危险。" },
      { word: "lost", phonetic: "/lɒst/", pos: "adj.", meaning: "迷路的", example: "I need to remember lost.", exampleZh: "我需要记住 迷路的。" },
      { word: "stolen", phonetic: "/ˈstəʊlən/", pos: "adj.", meaning: "被偷的", example: "I need to remember stolen.", exampleZh: "我需要记住 被偷的。" },
      { word: "accident", phonetic: "/ˈæksɪdənt/", pos: "n.", meaning: "事故", example: "I need to remember accident.", exampleZh: "我需要记住 事故。" },
      { word: "report", phonetic: "/rɪˈpɔːt/", pos: "v.", meaning: "报警", example: "I need to remember report.", exampleZh: "我需要记住 报警。" },
    ]
  },
  {
    theme: "丢失物品",
    words: [
      { word: "lost and found", phonetic: "/lɒst ənd faʊnd/", pos: "n.", meaning: "失物招领", example: "I need to remember lost and found.", exampleZh: "我需要记住 失物招领。" },
      { word: "wallet", phonetic: "/ˈwɒlɪt/", pos: "n.", meaning: "钱包", example: "I need to remember wallet.", exampleZh: "我需要记住 钱包。" },
      { word: "purse", phonetic: "/pɜːs/", pos: "n.", meaning: "手提包", example: "I need to remember purse.", exampleZh: "我需要记住 手提包。" },
      { word: "keys", phonetic: "/kiːz/", pos: "n.", meaning: "钥匙", example: "I need to remember keys.", exampleZh: "我需要记住 钥匙。" },
      { word: "phone", phonetic: "/fəʊn/", pos: "n.", meaning: "手机", example: "I need to remember phone.", exampleZh: "我需要记住 手机。" },
      { word: "report", phonetic: "/rɪˈpɔːt/", pos: "v.", meaning: "报失", example: "I need to remember report.", exampleZh: "我需要记住 报失。" },
      { word: "insurance claim", phonetic: "/ɪnˈʃʊərəns kleɪm/", pos: "n.", meaning: "保险索赔", example: "I need to remember insurance claim.", exampleZh: "我需要记住 保险索赔。" },
      { word: "replacement", phonetic: "/rɪˈpleɪsmənt/", pos: "n.", meaning: "替代品", example: "I need to remember replacement.", exampleZh: "我需要记住 替代品。" },
      { word: "embassy", phonetic: "/ˈembəsi/", pos: "n.", meaning: "大使馆", example: "I need to remember embassy.", exampleZh: "我需要记住 大使馆。" },
      { word: "consulate", phonetic: "/ˈkɒnsjələt/", pos: "n.", meaning: "领事馆", example: "I need to remember consulate.", exampleZh: "我需要记住 领事馆。" },
    ]
  },
  {
    theme: "身体部位",
    words: [
      { word: "head", phonetic: "/hed/", pos: "n.", meaning: "头", example: "I need to remember head.", exampleZh: "我需要记住 头。" },
      { word: "neck", phonetic: "/nek/", pos: "n.", meaning: "脖子", example: "I need to remember neck.", exampleZh: "我需要记住 脖子。" },
      { word: "shoulder", phonetic: "/ˈʃəʊldə/", pos: "n.", meaning: "肩膀", example: "I need to remember shoulder.", exampleZh: "我需要记住 肩膀。" },
      { word: "back", phonetic: "/bæk/", pos: "n.", meaning: "背", example: "I need to remember back.", exampleZh: "我需要记住 背。" },
      { word: "arm", phonetic: "/ɑːm/", pos: "n.", meaning: "胳膊", example: "I need to remember arm.", exampleZh: "我需要记住 胳膊。" },
      { word: "hand", phonetic: "/hænd/", pos: "n.", meaning: "手", example: "I need to remember hand.", exampleZh: "我需要记住 手。" },
      { word: "leg", phonetic: "/leɡ/", pos: "n.", meaning: "腿", example: "I need to remember leg.", exampleZh: "我需要记住 腿。" },
      { word: "knee", phonetic: "/niː/", pos: "n.", meaning: "膝盖", example: "I need to remember knee.", exampleZh: "我需要记住 膝盖。" },
      { word: "foot", phonetic: "/fʊt/", pos: "n.", meaning: "脚", example: "I need to remember foot.", exampleZh: "我需要记住 脚。" },
      { word: "stomach", phonetic: "/ˈstʌmək/", pos: "n.", meaning: "胃", example: "I need to remember stomach.", exampleZh: "我需要记住 胃。" },
    ]
  },
  {
    theme: "就医英语",
    words: [
      { word: "appointment", phonetic: "/əˈpɔɪntmənt/", pos: "n.", meaning: "预约", example: "I need to remember appointment.", exampleZh: "我需要记住 预约。" },
      { word: "symptom", phonetic: "/ˈsɪmptəm/", pos: "n.", meaning: "症状", example: "I need to remember symptom.", exampleZh: "我需要记住 症状。" },
      { word: "prescription", phonetic: "/prɪˈskrɪpʃn/", pos: "n.", meaning: "处方", example: "I need to remember prescription.", exampleZh: "我需要记住 处方。" },
      { word: "tablet", phonetic: "/ˈtæblət/", pos: "n.", meaning: "药片", example: "I need to remember tablet.", exampleZh: "我需要记住 药片。" },
      { word: "capsule", phonetic: "/ˈkæpsjuːl/", pos: "n.", meaning: "胶囊", example: "I need to remember capsule.", exampleZh: "我需要记住 胶囊。" },
      { word: "dosage", phonetic: "/ˈdəʊsɪdʒ/", pos: "n.", meaning: "剂量", example: "I need to remember dosage.", exampleZh: "我需要记住 剂量。" },
      { word: "side effect", phonetic: "/saɪd ɪˈfekt/", pos: "n.", meaning: "副作用", example: "I need to remember side effect.", exampleZh: "我需要记住 副作用。" },
      { word: "recovery", phonetic: "/rɪˈkʌvəri/", pos: "n.", meaning: "恢复", example: "I need to remember recovery.", exampleZh: "我需要记住 恢复。" },
      { word: "X-ray", phonetic: "/ˈeks reɪ/", pos: "n.", meaning: "X 光", example: "I need to remember X-ray.", exampleZh: "我需要记住 X 光。" },
      { word: "blood test", phonetic: "/blʌd test/", pos: "n.", meaning: "血检", example: "I need to remember blood test.", exampleZh: "我需要记住 血检。" },
    ]
  },
  {
    theme: "澳洲动物",
    words: [
      { word: "kangaroo", phonetic: "/ˌkæŋɡəˈruː/", pos: "n.", meaning: "袋鼠", example: "I need to remember kangaroo.", exampleZh: "我需要记住 袋鼠。" },
      { word: "koala", phonetic: "/kəʊˈɑːlə/", pos: "n.", meaning: "考拉", example: "I need to remember koala.", exampleZh: "我需要记住 考拉。" },
      { word: "wombat", phonetic: "/ˈwɒmbæt/", pos: "n.", meaning: "袋熊", example: "I need to remember wombat.", exampleZh: "我需要记住 袋熊。" },
      { word: "platypus", phonetic: "/ˈplætɪpəs/", pos: "n.", meaning: "鸭嘴兽", example: "I need to remember platypus.", exampleZh: "我需要记住 鸭嘴兽。" },
      { word: "echidna", phonetic: "/ɪˈkɪdnə/", pos: "n.", meaning: "针鼹", example: "I need to remember echidna.", exampleZh: "我需要记住 针鼹。" },
      { word: "dingo", phonetic: "/ˈdɪŋɡəʊ/", pos: "n.", meaning: "澳洲野犬", example: "I need to remember dingo.", exampleZh: "我需要记住 澳洲野犬。" },
      { word: "emu", phonetic: "/ˈiːmjuː/", pos: "n.", meaning: "鸸鹋", example: "I need to remember emu.", exampleZh: "我需要记住 鸸鹋。" },
      { word: "kookaburra", phonetic: "/ˈkʊkəbʌrə/", pos: "n.", meaning: "笑翠鸟", example: "I need to remember kookaburra.", exampleZh: "我需要记住 笑翠鸟。" },
      { word: "quokka", phonetic: "/ˈkwɒkə/", pos: "n.", meaning: "短尾矮袋鼠", example: "I need to remember quokka.", exampleZh: "我需要记住 短尾矮袋鼠。" },
      { word: "Tasmanian devil", phonetic: "/tæzˈmeɪniən ˈdevl/", pos: "n.", meaning: "袋獾", example: "I need to remember Tasmanian devil.", exampleZh: "我需要记住 袋獾。" },
    ]
  },
  {
    theme: "澳洲植物",
    words: [
      { word: "eucalyptus", phonetic: "/ˌjuːkəˈlɪptəs/", pos: "n.", meaning: "桉树", example: "I need to remember eucalyptus.", exampleZh: "我需要记住 桉树。" },
      { word: "wattle", phonetic: "/ˈwɒtl/", pos: "n.", meaning: "金合欢", example: "I need to remember wattle.", exampleZh: "我需要记住 金合欢。" },
      { word: "banksia", phonetic: "/ˈbæŋksiə/", pos: "n.", meaning: "班克木", example: "I need to remember banksia.", exampleZh: "我需要记住 班克木。" },
      { word: "grass tree", phonetic: "/ɡrɑːs triː/", pos: "n.", meaning: "草树", example: "I need to remember grass tree.", exampleZh: "我需要记住 草树。" },
      { word: "bottlebrush", phonetic: "/ˈbɒtlbrʌʃ/", pos: "n.", meaning: "红千层", example: "I need to remember bottlebrush.", exampleZh: "我需要记住 红千层。" },
      { word: "waratah", phonetic: "/ˈwɒrətɑː/", pos: "n.", meaning: "特洛皮", example: "I need to remember waratah.", exampleZh: "我需要记住 特洛皮。" },
      { word: "kangaroo paw", phonetic: "/ˌkæŋɡəˈruː pɔː/", pos: "n.", meaning: "袋鼠爪", example: "I need to remember kangaroo paw.", exampleZh: "我需要记住 袋鼠爪。" },
      { word: "fern", phonetic: "/fɜːn/", pos: "n.", meaning: "蕨类", example: "I need to remember fern.", exampleZh: "我需要记住 蕨类。" },
      { word: "moss", phonetic: "/mɒs/", pos: "n.", meaning: "苔藓", example: "I need to remember moss.", exampleZh: "我需要记住 苔藓。" },
      { word: "mushroom", phonetic: "/ˈmʌʃruːm/", pos: "n.", meaning: "蘑菇", example: "I need to remember mushroom.", exampleZh: "我需要记住 蘑菇。" },
    ]
  },
  {
    theme: "自然景观",
    words: [
      { word: "reef", phonetic: "/riːf/", pos: "n.", meaning: "礁", example: "I need to remember reef.", exampleZh: "我需要记住 礁。" },
      { word: "rainforest", phonetic: "/ˈreɪnfɒrɪst/", pos: "n.", meaning: "雨林", example: "I need to remember rainforest.", exampleZh: "我需要记住 雨林。" },
      { word: "desert", phonetic: "/ˈdezət/", pos: "n.", meaning: "沙漠", example: "I need to remember desert.", exampleZh: "我需要记住 沙漠。" },
      { word: "mountain", phonetic: "/ˈmaʊntɪn/", pos: "n.", meaning: "山", example: "I need to remember mountain.", exampleZh: "我需要记住 山。" },
      { word: "valley", phonetic: "/ˈvæli/", pos: "n.", meaning: "山谷", example: "I need to remember valley.", exampleZh: "我需要记住 山谷。" },
      { word: "waterfall", phonetic: "/ˈwɔːtəfɔːl/", pos: "n.", meaning: "瀑布", example: "I need to remember waterfall.", exampleZh: "我需要记住 瀑布。" },
      { word: "lake", phonetic: "/leɪk/", pos: "n.", meaning: "湖", example: "I need to remember lake.", exampleZh: "我需要记住 湖。" },
      { word: "river", phonetic: "/ˈrɪvə/", pos: "n.", meaning: "河", example: "I need to remember river.", exampleZh: "我需要记住 河。" },
      { word: "canyon", phonetic: "/ˈkænjən/", pos: "n.", meaning: "峡谷", example: "I need to remember canyon.", exampleZh: "我需要记住 峡谷。" },
      { word: "island", phonetic: "/ˈaɪlənd/", pos: "n.", meaning: "岛屿", example: "I need to remember island.", exampleZh: "我需要记住 岛屿。" },
    ]
  },
  {
    theme: "海岛度假",
    words: [
      { word: "Whitsundays", phonetic: "/ˈwɪtsʌndeɪz/", pos: "n.", meaning: "圣灵群岛", example: "I need to remember Whitsundays.", exampleZh: "我需要记住 圣灵群岛。" },
      { word: "Great Barrier Reef", phonetic: "/ɡreɪt ˈbæriə riːf/", pos: "n.", meaning: "大堡礁", example: "I need to remember Great Barrier Reef.", exampleZh: "我需要记住 大堡礁。" },
      { word: "Fraser Island", phonetic: "/ˈfreɪzə ˈaɪlənd/", pos: "n.", meaning: "弗雷泽岛", example: "I need to remember Fraser Island.", exampleZh: "我需要记住 弗雷泽岛。" },
      { word: "Kangaroo Island", phonetic: "/ˌkæŋɡəˈruː ˈaɪlənd/", pos: "n.", meaning: "袋鼠岛", example: "I need to remember Kangaroo Island.", exampleZh: "我需要记住 袋鼠岛。" },
      { word: "ferry", phonetic: "/ˈferi/", pos: "n.", meaning: "渡轮", example: "I need to remember ferry.", exampleZh: "我需要记住 渡轮。" },
      { word: "yacht", phonetic: "/jɒt/", pos: "n.", meaning: "游艇", example: "I need to remember yacht.", exampleZh: "我需要记住 游艇。" },
      { word: "resort", phonetic: "/rɪˈzɔːt/", pos: "n.", meaning: "度假村", example: "I need to remember resort.", exampleZh: "我需要记住 度假村。" },
      { word: "bungalow", phonetic: "/ˈbʌŋɡələʊ/", pos: "n.", meaning: "平房", example: "I need to remember bungalow.", exampleZh: "我需要记住 平房。" },
      { word: "snorkelling", phonetic: "/ˈsnɔːkəlɪŋ/", pos: "n.", meaning: "浮潜", example: "I need to remember snorkelling.", exampleZh: "我需要记住 浮潜。" },
      { word: "glass-bottom boat", phonetic: "/ɡlɑːs ˈbɒtəm bəʊt/", pos: "n.", meaning: "玻璃底船", example: "I need to remember glass-bottom boat.", exampleZh: "我需要记住 玻璃底船。" },
    ]
  },
  {
    theme: "拍照摄影",
    words: [
      { word: "photograph", phonetic: "/ˈfəʊtəɡrɑːf/", pos: "n.", meaning: "照片", example: "I need to remember photograph.", exampleZh: "我需要记住 照片。" },
      { word: "take a photo", phonetic: "/teɪk ə ˈfəʊtəʊ/", pos: "v.", meaning: "拍照片", example: "I need to remember take a photo.", exampleZh: "我需要记住 拍照片。" },
      { word: "selfie", phonetic: "/ˈselfi/", pos: "n.", meaning: "自拍", example: "I need to remember selfie.", exampleZh: "我需要记住 自拍。" },
      { word: "landscape", phonetic: "/ˈlændskeɪp/", pos: "n.", meaning: "风景", example: "I need to remember landscape.", exampleZh: "我需要记住 风景。" },
      { word: "portrait", phonetic: "/ˈpɔːtrət/", pos: "n.", meaning: "人像", example: "I need to remember portrait.", exampleZh: "我需要记住 人像。" },
      { word: "zoom", phonetic: "/zuːm/", pos: "n.", meaning: "变焦", example: "I need to remember zoom.", exampleZh: "我需要记住 变焦。" },
      { word: "flash", phonetic: "/flæʃ/", pos: "n.", meaning: "闪光灯", example: "I need to remember flash.", exampleZh: "我需要记住 闪光灯。" },
      { word: "memory card", phonetic: "/ˈmeməri kɑːd/", pos: "n.", meaning: "存储卡", example: "I need to remember memory card.", exampleZh: "我需要记住 存储卡。" },
      { word: "battery", phonetic: "/ˈbætri/", pos: "n.", meaning: "电池", example: "I need to remember battery.", exampleZh: "我需要记住 电池。" },
      { word: "tripod", phonetic: "/ˈtraɪpɒd/", pos: "n.", meaning: "三脚架", example: "I need to remember tripod.", exampleZh: "我需要记住 三脚架。" },
    ]
  },
  {
    theme: "户外探险",
    words: [
      { word: "hiking", phonetic: "/ˈhaɪkɪŋ/", pos: "n.", meaning: "徒步", example: "I need to remember hiking.", exampleZh: "我需要记住 徒步。" },
      { word: "trekking", phonetic: "/ˈtrekɪŋ/", pos: "n.", meaning: "远足", example: "I need to remember trekking.", exampleZh: "我需要记住 远足。" },
      { word: "climbing", phonetic: "/ˈklaɪmɪŋ/", pos: "n.", meaning: "攀岩", example: "I need to remember climbing.", exampleZh: "我需要记住 攀岩。" },
      { word: "abseiling", phonetic: "/əˈseɪlɪŋ/", pos: "n.", meaning: "绳降", example: "I need to remember abseiling.", exampleZh: "我需要记住 绳降。" },
      { word: "kayaking", phonetic: "/ˈkaɪækɪŋ/", pos: "n.", meaning: "皮划艇", example: "I need to remember kayaking.", exampleZh: "我需要记住 皮划艇。" },
      { word: "camping", phonetic: "/ˈkæmpɪŋ/", pos: "n.", meaning: "露营", example: "I need to remember camping.", exampleZh: "我需要记住 露营。" },
      { word: "bushwalking", phonetic: "/ˈbʊʃwɔːkɪŋ/", pos: "n.", meaning: "丛林徒步", example: "I need to remember bushwalking.", exampleZh: "我需要记住 丛林徒步。" },
      { word: "trail", phonetic: "/treɪl/", pos: "n.", meaning: "小径", example: "I need to remember trail.", exampleZh: "我需要记住 小径。" },
      { word: "summit", phonetic: "/ˈsʌmɪt/", pos: "n.", meaning: "山顶", example: "I need to remember summit.", exampleZh: "我需要记住 山顶。" },
      { word: "backcountry", phonetic: "/ˈbækˌkʌntri/", pos: "n.", meaning: "偏远地区", example: "I need to remember backcountry.", exampleZh: "我需要记住 偏远地区。" },
    ]
  },
  {
    theme: "节日活动",
    words: [
      { word: "Australia Day", phonetic: "/ɒˈstreɪliə deɪ/", pos: "n.", meaning: "澳洲国庆日", example: "I need to remember Australia Day.", exampleZh: "我需要记住 澳洲国庆日。" },
      { word: "Anzac Day", phonetic: "/ˈænzæk deɪ/", pos: "n.", meaning: "澳新军团日", example: "I need to remember Anzac Day.", exampleZh: "我需要记住 澳新军团日。" },
      { word: "Christmas", phonetic: "/ˈkrɪsməs/", pos: "n.", meaning: "圣诞节", example: "I need to remember Christmas.", exampleZh: "我需要记住 圣诞节。" },
      { word: "New Year", phonetic: "/njuː jɪə/", pos: "n.", meaning: "新年", example: "I need to remember New Year.", exampleZh: "我需要记住 新年。" },
      { word: "Easter", phonetic: "/ˈiːstə/", pos: "n.", meaning: "复活节", example: "I need to remember Easter.", exampleZh: "我需要记住 复活节。" },
      { word: "Halloween", phonetic: "/ˌhæləʊˈiːn/", pos: "n.", meaning: "万圣节", example: "I need to remember Halloween.", exampleZh: "我需要记住 万圣节。" },
      { word: "fireworks", phonetic: "/ˈfaɪəwɜːks/", pos: "n.", meaning: "烟火", example: "I need to remember fireworks.", exampleZh: "我需要记住 烟火。" },
      { word: "parade", phonetic: "/pəˈreɪd/", pos: "n.", meaning: "游行", example: "I need to remember parade.", exampleZh: "我需要记住 游行。" },
      { word: "carnival", phonetic: "/ˈkɑːnɪvl/", pos: "n.", meaning: "嘉年华", example: "I need to remember carnival.", exampleZh: "我需要记住 嘉年华。" },
      { word: "market", phonetic: "/ˈmɑːkɪt/", pos: "n.", meaning: "集市", example: "I need to remember market.", exampleZh: "我需要记住 集市。" },
    ]
  },
  {
    theme: "摄影构图",
    words: [
      { word: "rule of thirds", phonetic: "/ruːl ɒv θɜːdz/", pos: "n.", meaning: "三分法", example: "I need to remember rule of thirds.", exampleZh: "我需要记住 三分法。" },
      { word: "foreground", phonetic: "/ˈfɔːɡraʊnd/", pos: "n.", meaning: "前景", example: "I need to remember foreground.", exampleZh: "我需要记住 前景。" },
      { word: "background", phonetic: "/ˈbækɡraʊnd/", pos: "n.", meaning: "背景", example: "I need to remember background.", exampleZh: "我需要记住 背景。" },
      { word: "angle", phonetic: "/ˈæŋɡl/", pos: "n.", meaning: "角度", example: "I need to remember angle.", exampleZh: "我需要记住 角度。" },
      { word: "lighting", phonetic: "/ˈlaɪtɪŋ/", pos: "n.", meaning: "光线", example: "I need to remember lighting.", exampleZh: "我需要记住 光线。" },
      { word: "shadow", phonetic: "/ˈʃædəʊ/", pos: "n.", meaning: "阴影", example: "I need to remember shadow.", exampleZh: "我需要记住 阴影。" },
      { word: "horizon", phonetic: "/həˈraɪzn/", pos: "n.", meaning: "地平线", example: "I need to remember horizon.", exampleZh: "我需要记住 地平线。" },
      { word: "frame", phonetic: "/freɪm/", pos: "n.", meaning: "取景", example: "I need to remember frame.", exampleZh: "我需要记住 取景。" },
      { word: "filter", phonetic: "/ˈfɪltə/", pos: "n.", meaning: "滤镜", example: "I need to remember filter.", exampleZh: "我需要记住 滤镜。" },
      { word: "edit", phonetic: "/ˈedɪt/", pos: "v.", meaning: "编辑", example: "I need to remember edit.", exampleZh: "我需要记住 编辑。" },
    ]
  },
  {
    theme: "公共交通",
    words: [
      { word: "Opal card", phonetic: "/ˈəʊpl kɑːd/", pos: "n.", meaning: "Opal 卡", example: "I need to remember Opal card.", exampleZh: "我需要记住 Opal 卡。" },
      { word: "myki", phonetic: "/ˈmaɪki/", pos: "n.", meaning: "Myki 卡（墨尔本）", example: "I need to remember myki.", exampleZh: "我需要记住 Myki 卡（墨尔本）。" },
      { word: "top up", phonetic: "/tɒp ʌp/", pos: "v.", meaning: "充值", example: "I need to remember top up.", exampleZh: "我需要记住 充值。" },
      { word: "tap on", phonetic: "/tæp ɒn/", pos: "v.", meaning: "刷卡上车", example: "I need to remember tap on.", exampleZh: "我需要记住 刷卡上车。" },
      { word: "tap off", phonetic: "/tæp ɒf/", pos: "v.", meaning: "刷卡下车", example: "I need to remember tap off.", exampleZh: "我需要记住 刷卡下车。" },
      { word: "concession", phonetic: "/kənˈseʃn/", pos: "n.", meaning: "优惠票", example: "I need to remember concession.", exampleZh: "我需要记住 优惠票。" },
      { word: "child fare", phonetic: "/tʃaɪld feə/", pos: "n.", meaning: "儿童票价", example: "I need to remember child fare.", exampleZh: "我需要记住 儿童票价。" },
      { word: "senior", phonetic: "/ˈsiːniə/", pos: "n.", meaning: "长者", example: "I need to remember senior.", exampleZh: "我需要记住 长者。" },
      { word: "peak hour", phonetic: "/piːk aʊə/", pos: "n.", meaning: "高峰期", example: "I need to remember peak hour.", exampleZh: "我需要记住 高峰期。" },
      { word: "off-peak", phonetic: "/ɒf piːk/", pos: "n.", meaning: "非高峰", example: "I need to remember off-peak.", exampleZh: "我需要记住 非高峰。" },
    ]
  },
  {
    theme: "机场接送",
    words: [
      { word: "shuttle", phonetic: "/ˈʃʌtl/", pos: "n.", meaning: "班车", example: "I need to remember shuttle.", exampleZh: "我需要记住 班车。" },
      { word: "pickup", phonetic: "/ˈpɪkʌp/", pos: "n.", meaning: "接机", example: "I need to remember pickup.", exampleZh: "我需要记住 接机。" },
      { word: "drop-off", phonetic: "/ˈdrɒp ɒf/", pos: "n.", meaning: "送机", example: "I need to remember drop-off.", exampleZh: "我需要记住 送机。" },
      { word: "terminal", phonetic: "/ˈtɜːmɪnl/", pos: "n.", meaning: "航站楼", example: "I need to remember terminal.", exampleZh: "我需要记住 航站楼。" },
      { word: "domestic", phonetic: "/dəˈmestɪk/", pos: "adj.", meaning: "国内的", example: "I need to remember domestic.", exampleZh: "我需要记住 国内的。" },
      { word: "international", phonetic: "/ˌɪntəˈnæʃnəl/", pos: "adj.", meaning: "国际的", example: "I need to remember international.", exampleZh: "我需要记住 国际的。" },
      { word: "arrival", phonetic: "/əˈraɪvl/", pos: "n.", meaning: "抵达", example: "I need to remember arrival.", exampleZh: "我需要记住 抵达。" },
      { word: "departure lounge", phonetic: "/dɪˈpɑːtʃə laʊndʒ/", pos: "n.", meaning: "候机厅", example: "I need to remember departure lounge.", exampleZh: "我需要记住 候机厅。" },
      { word: "boarding", phonetic: "/ˈbɔːdɪŋ/", pos: "n.", meaning: "登机", example: "I need to remember boarding.", exampleZh: "我需要记住 登机。" },
      { word: "gate", phonetic: "/ɡeɪt/", pos: "n.", meaning: "登机口", example: "I need to remember gate.", exampleZh: "我需要记住 登机口。" },
    ]
  },
  {
    theme: "厨房英语",
    words: [
      { word: "refrigerator", phonetic: "/rɪˈfrɪdʒəreɪtə/", pos: "n.", meaning: "冰箱", example: "I need to remember refrigerator.", exampleZh: "我需要记住 冰箱。" },
      { word: "microwave", phonetic: "/ˈmaɪkrəweɪv/", pos: "n.", meaning: "微波炉", example: "I need to remember microwave.", exampleZh: "我需要记住 微波炉。" },
      { word: "oven", phonetic: "/ˈʌvn/", pos: "n.", meaning: "烤箱", example: "I need to remember oven.", exampleZh: "我需要记住 烤箱。" },
      { word: "stove", phonetic: "/stəʊv/", pos: "n.", meaning: "炉灶", example: "I need to remember stove.", exampleZh: "我需要记住 炉灶。" },
      { word: "kettle", phonetic: "/ˈketl/", pos: "n.", meaning: "水壶", example: "I need to remember kettle.", exampleZh: "我需要记住 水壶。" },
      { word: "toaster", phonetic: "/ˈtəʊstə/", pos: "n.", meaning: "烤面包机", example: "I need to remember toaster.", exampleZh: "我需要记住 烤面包机。" },
      { word: "sink", phonetic: "/sɪŋk/", pos: "n.", meaning: "水槽", example: "I need to remember sink.", exampleZh: "我需要记住 水槽。" },
      { word: "tap", phonetic: "/tæp/", pos: "n.", meaning: "水龙头", example: "I need to remember tap.", exampleZh: "我需要记住 水龙头。" },
      { word: "dishwasher", phonetic: "/ˈdɪʃwɒʃə/", pos: "n.", meaning: "洗碗机", example: "I need to remember dishwasher.", exampleZh: "我需要记住 洗碗机。" },
      { word: "freezer", phonetic: "/ˈfriːzə/", pos: "n.", meaning: "冷冻室", example: "I need to remember freezer.", exampleZh: "我需要记住 冷冻室。" },
    ]
  },
  {
    theme: "烹饪用语",
    words: [
      { word: "boil", phonetic: "/bɔɪl/", pos: "v.", meaning: "煮", example: "I need to remember boil.", exampleZh: "我需要记住 煮。" },
      { word: "fry", phonetic: "/fraɪ/", pos: "v.", meaning: "煎", example: "I need to remember fry.", exampleZh: "我需要记住 煎。" },
      { word: "bake", phonetic: "/beɪk/", pos: "v.", meaning: "烤", example: "I need to remember bake.", exampleZh: "我需要记住 烤。" },
      { word: "grill", phonetic: "/ɡrɪl/", pos: "v.", meaning: "烧烤", example: "I need to remember grill.", exampleZh: "我需要记住 烧烤。" },
      { word: "steam", phonetic: "/stiːm/", pos: "v.", meaning: "蒸", example: "I need to remember steam.", exampleZh: "我需要记住 蒸。" },
      { word: "roast", phonetic: "/rəʊst/", pos: "v.", meaning: "烘焙", example: "I need to remember roast.", exampleZh: "我需要记住 烘焙。" },
      { word: "stir", phonetic: "/stɜː/", pos: "v.", meaning: "搅拌", example: "I need to remember stir.", exampleZh: "我需要记住 搅拌。" },
      { word: "chop", phonetic: "/tʃɒp/", pos: "v.", meaning: "切碎", example: "I need to remember chop.", exampleZh: "我需要记住 切碎。" },
      { word: "slice", phonetic: "/slaɪs/", pos: "v.", meaning: "切片", example: "I need to remember slice.", exampleZh: "我需要记住 切片。" },
      { word: "peel", phonetic: "/piːl/", pos: "v.", meaning: "削皮", example: "I need to remember peel.", exampleZh: "我需要记住 削皮。" },
    ]
  },
  {
    theme: "食材词汇",
    words: [
      { word: "chicken", phonetic: "/ˈtʃɪkɪn/", pos: "n.", meaning: "鸡肉", example: "I need to remember chicken.", exampleZh: "我需要记住 鸡肉。" },
      { word: "beef", phonetic: "/biːf/", pos: "n.", meaning: "牛肉", example: "I need to remember beef.", exampleZh: "我需要记住 牛肉。" },
      { word: "pork", phonetic: "/pɔːk/", pos: "n.", meaning: "猪肉", example: "I need to remember pork.", exampleZh: "我需要记住 猪肉。" },
      { word: "lamb", phonetic: "/læm/", pos: "n.", meaning: "羊肉", example: "I need to remember lamb.", exampleZh: "我需要记住 羊肉。" },
      { word: "fish", phonetic: "/fɪʃ/", pos: "n.", meaning: "鱼", example: "I need to remember fish.", exampleZh: "我需要记住 鱼。" },
      { word: "prawn", phonetic: "/prɔːn/", pos: "n.", meaning: "大虾", example: "I need to remember prawn.", exampleZh: "我需要记住 大虾。" },
      { word: "vegetable", phonetic: "/ˈvedʒtəbl/", pos: "n.", meaning: "蔬菜", example: "I need to remember vegetable.", exampleZh: "我需要记住 蔬菜。" },
      { word: "fruit", phonetic: "/fruːt/", pos: "n.", meaning: "水果", example: "I need to remember fruit.", exampleZh: "我需要记住 水果。" },
      { word: "rice", phonetic: "/raɪs/", pos: "n.", meaning: "米饭", example: "I need to remember rice.", exampleZh: "我需要记住 米饭。" },
      { word: "noodle", phonetic: "/ˈnuːdl/", pos: "n.", meaning: "面条", example: "I need to remember noodle.", exampleZh: "我需要记住 面条。" },
    ]
  },
  {
    theme: "调味品",
    words: [
      { word: "salt", phonetic: "/sɔːlt/", pos: "n.", meaning: "盐", example: "I need to remember salt.", exampleZh: "我需要记住 盐。" },
      { word: "pepper", phonetic: "/ˈpepə/", pos: "n.", meaning: "胡椒", example: "I need to remember pepper.", exampleZh: "我需要记住 胡椒。" },
      { word: "sugar", phonetic: "/ˈʃʊɡə/", pos: "n.", meaning: "糖", example: "I need to remember sugar.", exampleZh: "我需要记住 糖。" },
      { word: "vinegar", phonetic: "/ˈvɪnɪɡə/", pos: "n.", meaning: "醋", example: "I need to remember vinegar.", exampleZh: "我需要记住 醋。" },
      { word: "soy sauce", phonetic: "/sɔɪ sɔːs/", pos: "n.", meaning: "酱油", example: "I need to remember soy sauce.", exampleZh: "我需要记住 酱油。" },
      { word: "chilli", phonetic: "/ˈtʃɪli/", pos: "n.", meaning: "辣椒", example: "I need to remember chilli.", exampleZh: "我需要记住 辣椒。" },
      { word: "garlic", phonetic: "/ˈɡɑːlɪk/", pos: "n.", meaning: "大蒜", example: "I need to remember garlic.", exampleZh: "我需要记住 大蒜。" },
      { word: "ginger", phonetic: "/ˈdʒɪndʒə/", pos: "n.", meaning: "姜", example: "I need to remember ginger.", exampleZh: "我需要记住 姜。" },
      { word: "ketchup", phonetic: "/ˈketʃəp/", pos: "n.", meaning: "番茄酱", example: "I need to remember ketchup.", exampleZh: "我需要记住 番茄酱。" },
      { word: "mayonnaise", phonetic: "/ˌmeɪəˈneɪz/", pos: "n.", meaning: "蛋黄酱", example: "I need to remember mayonnaise.", exampleZh: "我需要记住 蛋黄酱。" },
    ]
  },
  {
    theme: "水果",
    words: [
      { word: "apple", phonetic: "/ˈæpl/", pos: "n.", meaning: "苹果", example: "I need to remember apple.", exampleZh: "我需要记住 苹果。" },
      { word: "banana", phonetic: "/bəˈnɑːnə/", pos: "n.", meaning: "香蕉", example: "I need to remember banana.", exampleZh: "我需要记住 香蕉。" },
      { word: "orange", phonetic: "/ˈɒrɪndʒ/", pos: "n.", meaning: "橙子", example: "I need to remember orange.", exampleZh: "我需要记住 橙子。" },
      { word: "grape", phonetic: "/ɡreɪp/", pos: "n.", meaning: "葡萄", example: "I need to remember grape.", exampleZh: "我需要记住 葡萄。" },
      { word: "strawberry", phonetic: "/ˈstrɔːbəri/", pos: "n.", meaning: "草莓", example: "I need to remember strawberry.", exampleZh: "我需要记住 草莓。" },
      { word: "mango", phonetic: "/ˈmæŋɡəʊ/", pos: "n.", meaning: "芒果", example: "I need to remember mango.", exampleZh: "我需要记住 芒果。" },
      { word: "pineapple", phonetic: "/ˈpaɪnæpl/", pos: "n.", meaning: "菠萝", example: "I need to remember pineapple.", exampleZh: "我需要记住 菠萝。" },
      { word: "watermelon", phonetic: "/ˈwɔːtəmelən/", pos: "n.", meaning: "西瓜", example: "I need to remember watermelon.", exampleZh: "我需要记住 西瓜。" },
      { word: "kiwi fruit", phonetic: "/ˈkiːwi fruːt/", pos: "n.", meaning: "猕猴桃", example: "I need to remember kiwi fruit.", exampleZh: "我需要记住 猕猴桃。" },
      { word: "peach", phonetic: "/piːtʃ/", pos: "n.", meaning: "桃", example: "I need to remember peach.", exampleZh: "我需要记住 桃。" },
    ]
  },
  {
    theme: "运动项目详",
    words: [
      { word: "sailing", phonetic: "/ˈseɪlɪŋ/", pos: "n.", meaning: "帆船", example: "I need to remember sailing.", exampleZh: "我需要记住 帆船。" },
      { word: "rowing", phonetic: "/ˈrəʊɪŋ/", pos: "n.", meaning: "划船", example: "I need to remember rowing.", exampleZh: "我需要记住 划船。" },
      { word: "skiing", phonetic: "/ˈskiːɪŋ/", pos: "n.", meaning: "滑雪", example: "I need to remember skiing.", exampleZh: "我需要记住 滑雪。" },
      { word: "snowboarding", phonetic: "/ˈsnəʊbɔːdɪŋ/", pos: "n.", meaning: "单板滑雪", example: "I need to remember snowboarding.", exampleZh: "我需要记住 单板滑雪。" },
      { word: "horse riding", phonetic: "/hɔːs ˈraɪdɪŋ/", pos: "n.", meaning: "骑马", example: "I need to remember horse riding.", exampleZh: "我需要记住 骑马。" },
      { word: "rock climbing", phonetic: "/rɒk ˈklaɪmɪŋ/", pos: "n.", meaning: "攀岩", example: "I need to remember rock climbing.", exampleZh: "我需要记住 攀岩。" },
      { word: "skateboarding", phonetic: "/ˈskeɪtbɔːdɪŋ/", pos: "n.", meaning: "滑板", example: "I need to remember skateboarding.", exampleZh: "我需要记住 滑板。" },
      { word: "archery", phonetic: "/ˈɑːtʃəri/", pos: "n.", meaning: "射箭", example: "I need to remember archery.", exampleZh: "我需要记住 射箭。" },
      { word: "bowling", phonetic: "/ˈbəʊlɪŋ/", pos: "n.", meaning: "保龄球", example: "I need to remember bowling.", exampleZh: "我需要记住 保龄球。" },
      { word: "billiards", phonetic: "/ˈbɪliədz/", pos: "n.", meaning: "台球", example: "I need to remember billiards.", exampleZh: "我需要记住 台球。" },
    ]
  },
  {
    theme: "购物常用",
    words: [
      { word: "price", phonetic: "/praɪs/", pos: "n.", meaning: "价格", example: "I need to remember price.", exampleZh: "我需要记住 价格。" },
      { word: "discount", phonetic: "/ˈdɪskaʊnt/", pos: "n.", meaning: "折扣", example: "I need to remember discount.", exampleZh: "我需要记住 折扣。" },
      { word: "sale", phonetic: "/seɪl/", pos: "n.", meaning: "特价", example: "I need to remember sale.", exampleZh: "我需要记住 特价。" },
      { word: "clearance", phonetic: "/ˈklɪərəns/", pos: "n.", meaning: "清仓", example: "I need to remember clearance.", exampleZh: "我需要记住 清仓。" },
      { word: "bargain", phonetic: "/ˈbɑːɡɪn/", pos: "n.", meaning: "便宜货", example: "I need to remember bargain.", exampleZh: "我需要记住 便宜货。" },
      { word: "expensive", phonetic: "/ɪkˈspensɪv/", pos: "adj.", meaning: "贵的", example: "I need to remember expensive.", exampleZh: "我需要记住 贵的。" },
      { word: "cheap", phonetic: "/tʃiːp/", pos: "adj.", meaning: "便宜的", example: "I need to remember cheap.", exampleZh: "我需要记住 便宜的。" },
      { word: "size", phonetic: "/saɪz/", pos: "n.", meaning: "尺寸", example: "I need to remember size.", exampleZh: "我需要记住 尺寸。" },
      { word: "colour", phonetic: "/ˈkʌlə/", pos: "n.", meaning: "颜色", example: "I need to remember colour.", exampleZh: "我需要记住 颜色。" },
      { word: "try on", phonetic: "/traɪ ɒn/", pos: "v.", meaning: "试穿", example: "I need to remember try on.", exampleZh: "我需要记住 试穿。" },
    ]
  },
  {
    theme: "换算数学",
    words: [
      { word: "add", phonetic: "/æd/", pos: "v.", meaning: "加", example: "I need to remember add.", exampleZh: "我需要记住 加。" },
      { word: "subtract", phonetic: "/səbˈtrækt/", pos: "v.", meaning: "减", example: "I need to remember subtract.", exampleZh: "我需要记住 减。" },
      { word: "multiply", phonetic: "/ˈmʌltɪplaɪ/", pos: "v.", meaning: "乘", example: "I need to remember multiply.", exampleZh: "我需要记住 乘。" },
      { word: "divide", phonetic: "/dɪˈvaɪd/", pos: "v.", meaning: "除", example: "I need to remember divide.", exampleZh: "我需要记住 除。" },
      { word: "equals", phonetic: "/ˈiːkwəlz/", pos: "v.", meaning: "等于", example: "I need to remember equals.", exampleZh: "我需要记住 等于。" },
      { word: "total", phonetic: "/ˈtəʊtl/", pos: "n.", meaning: "总计", example: "I need to remember total.", exampleZh: "我需要记住 总计。" },
      { word: "percent", phonetic: "/pəˈsent/", pos: "n.", meaning: "百分比", example: "I need to remember percent.", exampleZh: "我需要记住 百分比。" },
      { word: "half", phonetic: "/hɑːf/", pos: "n.", meaning: "一半", example: "I need to remember half.", exampleZh: "我需要记住 一半。" },
      { word: "double", phonetic: "/ˈdʌbl/", pos: "n.", meaning: "两倍", example: "I need to remember double.", exampleZh: "我需要记住 两倍。" },
      { word: "zero", phonetic: "/ˈzɪərəʊ/", pos: "n.", meaning: "零", example: "I need to remember zero.", exampleZh: "我需要记住 零。" },
    ]
  },
  {
    theme: "银行业务",
    words: [
      { word: "bank", phonetic: "/bæŋk/", pos: "n.", meaning: "银行", example: "I need to remember bank.", exampleZh: "我需要记住 银行。" },
      { word: "ATM", phonetic: "/ˌeɪ tiː ˈem/", pos: "n.", meaning: "自动取款机", example: "I need to remember ATM.", exampleZh: "我需要记住 自动取款机。" },
      { word: "account", phonetic: "/əˈkaʊnt/", pos: "n.", meaning: "账户", example: "I need to remember account.", exampleZh: "我需要记住 账户。" },
      { word: "deposit", phonetic: "/dɪˈpɒzɪt/", pos: "v.", meaning: "存款", example: "I need to remember deposit.", exampleZh: "我需要记住 存款。" },
      { word: "withdraw", phonetic: "/wɪðˈdrɔː/", pos: "v.", meaning: "取款", example: "I need to remember withdraw.", exampleZh: "我需要记住 取款。" },
      { word: "balance", phonetic: "/ˈbæləns/", pos: "n.", meaning: "余额", example: "I need to remember balance.", exampleZh: "我需要记住 余额。" },
      { word: "transfer", phonetic: "/trænsˈfɜː/", pos: "v.", meaning: "转账", example: "I need to remember transfer.", exampleZh: "我需要记住 转账。" },
      { word: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", pos: "v.", meaning: "兑换", example: "I need to remember exchange.", exampleZh: "我需要记住 兑换。" },
      { word: "rate", phonetic: "/reɪt/", pos: "n.", meaning: "汇率", example: "I need to remember rate.", exampleZh: "我需要记住 汇率。" },
      { word: "fee", phonetic: "/fiː/", pos: "n.", meaning: "手续费", example: "I need to remember fee.", exampleZh: "我需要记住 手续费。" },
    ]
  },
  {
    theme: "邮局通讯",
    words: [
      { word: "post office", phonetic: "/pəʊst ˈɒfɪs/", pos: "n.", meaning: "邮局", example: "I need to remember post office.", exampleZh: "我需要记住 邮局。" },
      { word: "stamp", phonetic: "/stæmp/", pos: "n.", meaning: "邮票", example: "I need to remember stamp.", exampleZh: "我需要记住 邮票。" },
      { word: "envelope", phonetic: "/ˈenvələʊp/", pos: "n.", meaning: "信封", example: "I need to remember envelope.", exampleZh: "我需要记住 信封。" },
      { word: "parcel", phonetic: "/ˈpɑːsl/", pos: "n.", meaning: "包裹", example: "I need to remember parcel.", exampleZh: "我需要记住 包裹。" },
      { word: "registered mail", phonetic: "/ˈredʒɪstəd meɪl/", pos: "n.", meaning: "挂号信", example: "I need to remember registered mail.", exampleZh: "我需要记住 挂号信。" },
      { word: "express post", phonetic: "/ɪkˈspres pəʊst/", pos: "n.", meaning: "快递", example: "I need to remember express post.", exampleZh: "我需要记住 快递。" },
      { word: "courier", phonetic: "/ˈkʊriə/", pos: "n.", meaning: "快递员", example: "I need to remember courier.", exampleZh: "我需要记住 快递员。" },
      { word: "tracking number", phonetic: "/ˈtrækɪŋ ˈnʌmbə/", pos: "n.", meaning: "快递单号", example: "I need to remember tracking number.", exampleZh: "我需要记住 快递单号。" },
      { word: "postbox", phonetic: "/ˈpəʊstbɒks/", pos: "n.", meaning: "邮筒", example: "I need to remember postbox.", exampleZh: "我需要记住 邮筒。" },
      { word: "address", phonetic: "/əˈdres/", pos: "n.", meaning: "地址", example: "I need to remember address.", exampleZh: "我需要记住 地址。" },
    ]
  },
  {
    theme: "城市设施",
    words: [
      { word: "library", phonetic: "/ˈlaɪbrəri/", pos: "n.", meaning: "图书馆", example: "I need to remember library.", exampleZh: "我需要记住 图书馆。" },
      { word: "school", phonetic: "/skuːl/", pos: "n.", meaning: "学校", example: "I need to remember school.", exampleZh: "我需要记住 学校。" },
      { word: "university", phonetic: "/ˌjuːnɪˈvɜːsəti/", pos: "n.", meaning: "大学", example: "I need to remember university.", exampleZh: "我需要记住 大学。" },
      { word: "church", phonetic: "/tʃɜːtʃ/", pos: "n.", meaning: "教堂", example: "I need to remember church.", exampleZh: "我需要记住 教堂。" },
      { word: "mosque", phonetic: "/mɒsk/", pos: "n.", meaning: "清真寺", example: "I need to remember mosque.", exampleZh: "我需要记住 清真寺。" },
      { word: "temple", phonetic: "/ˈtempl/", pos: "n.", meaning: "寺庙", example: "I need to remember temple.", exampleZh: "我需要记住 寺庙。" },
      { word: "cemetery", phonetic: "/ˈsemətri/", pos: "n.", meaning: "墓地", example: "I need to remember cemetery.", exampleZh: "我需要记住 墓地。" },
      { word: "monument", phonetic: "/ˈmɒnjumənt/", pos: "n.", meaning: "纪念碑", example: "I need to remember monument.", exampleZh: "我需要记住 纪念碑。" },
      { word: "statue", phonetic: "/ˈstætʃuː/", pos: "n.", meaning: "雕像", example: "I need to remember statue.", exampleZh: "我需要记住 雕像。" },
      { word: "fountain", phonetic: "/ˈfaʊntɪn/", pos: "n.", meaning: "喷泉", example: "I need to remember fountain.", exampleZh: "我需要记住 喷泉。" },
    ]
  },
  {
    theme: "家庭成员",
    words: [
      { word: "family", phonetic: "/ˈfæməli/", pos: "n.", meaning: "家庭", example: "I need to remember family.", exampleZh: "我需要记住 家庭。" },
      { word: "parents", phonetic: "/ˈpeərənts/", pos: "n.", meaning: "父母", example: "I need to remember parents.", exampleZh: "我需要记住 父母。" },
      { word: "mother", phonetic: "/ˈmʌðə/", pos: "n.", meaning: "母亲", example: "I need to remember mother.", exampleZh: "我需要记住 母亲。" },
      { word: "father", phonetic: "/ˈfɑːðə/", pos: "n.", meaning: "父亲", example: "I need to remember father.", exampleZh: "我需要记住 父亲。" },
      { word: "sister", phonetic: "/ˈsɪstə/", pos: "n.", meaning: "姐妹", example: "I need to remember sister.", exampleZh: "我需要记住 姐妹。" },
      { word: "brother", phonetic: "/ˈbrʌðə/", pos: "n.", meaning: "兄弟", example: "I need to remember brother.", exampleZh: "我需要记住 兄弟。" },
      { word: "grandma", phonetic: "/ˈɡrænmɑː/", pos: "n.", meaning: "奶奶外婆", example: "I need to remember grandma.", exampleZh: "我需要记住 奶奶外婆。" },
      { word: "grandpa", phonetic: "/ˈɡrænpɑː/", pos: "n.", meaning: "爷爷外公", example: "I need to remember grandpa.", exampleZh: "我需要记住 爷爷外公。" },
      { word: "uncle", phonetic: "/ˈʌŋkl/", pos: "n.", meaning: "叔叔舅舅", example: "I need to remember uncle.", exampleZh: "我需要记住 叔叔舅舅。" },
      { word: "aunt", phonetic: "/ɑːnt/", pos: "n.", meaning: "阿姨姑姑", example: "I need to remember aunt.", exampleZh: "我需要记住 阿姨姑姑。" },
    ]
  },
  {
    theme: "职业身份",
    words: [
      { word: "engineer", phonetic: "/ˌendʒɪˈnɪə/", pos: "n.", meaning: "工程师", example: "I need to remember engineer.", exampleZh: "我需要记住 工程师。" },
      { word: "teacher", phonetic: "/ˈtiːtʃə/", pos: "n.", meaning: "老师", example: "I need to remember teacher.", exampleZh: "我需要记住 老师。" },
      { word: "lawyer", phonetic: "/ˈlɔːjə/", pos: "n.", meaning: "律师", example: "I need to remember lawyer.", exampleZh: "我需要记住 律师。" },
      { word: "doctor", phonetic: "/ˈdɒktə/", pos: "n.", meaning: "医生", example: "I need to remember doctor.", exampleZh: "我需要记住 医生。" },
      { word: "nurse", phonetic: "/nɜːs/", pos: "n.", meaning: "护士", example: "I need to remember nurse.", exampleZh: "我需要记住 护士。" },
      { word: "chef", phonetic: "/ʃef/", pos: "n.", meaning: "厨师", example: "I need to remember chef.", exampleZh: "我需要记住 厨师。" },
      { word: "artist", phonetic: "/ˈɑːtɪst/", pos: "n.", meaning: "艺术家", example: "I need to remember artist.", exampleZh: "我需要记住 艺术家。" },
      { word: "musician", phonetic: "/mjuːˈzɪʃn/", pos: "n.", meaning: "音乐家", example: "I need to remember musician.", exampleZh: "我需要记住 音乐家。" },
      { word: "scientist", phonetic: "/ˈsaɪəntɪst/", pos: "n.", meaning: "科学家", example: "I need to remember scientist.", exampleZh: "我需要记住 科学家。" },
      { word: "journalist", phonetic: "/ˈdʒɜːnəlɪst/", pos: "n.", meaning: "记者", example: "I need to remember journalist.", exampleZh: "我需要记住 记者。" },
    ]
  },
  {
    theme: "称呼寒暄",
    words: [
      { word: "mate", phonetic: "/meɪt/", pos: "n.", meaning: "伙计（澳洲）", example: "I need to remember mate.", exampleZh: "我需要记住 伙计（澳洲）。" },
      { word: "bloke", phonetic: "/bləʊk/", pos: "n.", meaning: "家伙", example: "I need to remember bloke.", exampleZh: "我需要记住 家伙。" },
      { word: "legend", phonetic: "/ˈledʒənd/", pos: "n.", meaning: "传奇（夸赞）", example: "I need to remember legend.", exampleZh: "我需要记住 传奇（夸赞）。" },
      { word: "no worries", phonetic: "/nəʊ ˈwʌriz/", pos: "phrase", meaning: "别客气", example: "I need to remember no worries.", exampleZh: "我需要记住 别客气。" },
      { word: "cheers", phonetic: "/tʃɪəz/", pos: "interj.", meaning: "谢谢/再见", example: "I need to remember cheers.", exampleZh: "我需要记住 谢谢/再见。" },
      { word: "how ya going", phonetic: "/haʊ jə ˈɡəʊɪŋ/", pos: "phrase", meaning: "你好吗", example: "I need to remember how ya going.", exampleZh: "我需要记住 你好吗。" },
      { word: "no drama", phonetic: "/nəʊ ˈdrɑːmə/", pos: "phrase", meaning: "没问题", example: "I need to remember no drama.", exampleZh: "我需要记住 没问题。" },
      { word: "fair dinkum", phonetic: "/feə ˈdɪŋkəm/", pos: "adj.", meaning: "真的", example: "I need to remember fair dinkum.", exampleZh: "我需要记住 真的。" },
      { word: "arvo", phonetic: "/ˈɑːvəʊ/", pos: "n.", meaning: "下午（澳俚）", example: "I need to remember arvo.", exampleZh: "我需要记住 下午（澳俚）。" },
      { word: "brekkie", phonetic: "/ˈbreki/", pos: "n.", meaning: "早餐（澳俚）", example: "I need to remember brekkie.", exampleZh: "我需要记住 早餐（澳俚）。" },
    ]
  },
  {
    theme: "节日祝贺",
    words: [
      { word: "Happy birthday", phonetic: "/hæpi ˈbɜːθdeɪ/", pos: "interj.", meaning: "生日快乐", example: "I need to remember Happy birthday.", exampleZh: "我需要记住 生日快乐。" },
      { word: "Happy New Year", phonetic: "/hæpi njuː jɪə/", pos: "interj.", meaning: "新年快乐", example: "I need to remember Happy New Year.", exampleZh: "我需要记住 新年快乐。" },
      { word: "Merry Christmas", phonetic: "/ˌmeri ˈkrɪsməs/", pos: "interj.", meaning: "圣诞快乐", example: "I need to remember Merry Christmas.", exampleZh: "我需要记住 圣诞快乐。" },
      { word: "Congratulations", phonetic: "/kənˌɡrætʃuˈleɪʃnz/", pos: "interj.", meaning: "恭喜", example: "I need to remember Congratulations.", exampleZh: "我需要记住 恭喜。" },
      { word: "Good luck", phonetic: "/ɡʊd lʌk/", pos: "interj.", meaning: "祝好运", example: "I need to remember Good luck.", exampleZh: "我需要记住 祝好运。" },
      { word: "Take care", phonetic: "/teɪk keə/", pos: "interj.", meaning: "保重", example: "I need to remember Take care.", exampleZh: "我需要记住 保重。" },
      { word: "See you", phonetic: "/siː juː/", pos: "interj.", meaning: "再见", example: "I need to remember See you.", exampleZh: "我需要记住 再见。" },
      { word: "Bye bye", phonetic: "/baɪ baɪ/", pos: "interj.", meaning: "拜拜", example: "I need to remember Bye bye.", exampleZh: "我需要记住 拜拜。" },
      { word: "Welcome", phonetic: "/ˈwelkəm/", pos: "interj.", meaning: "欢迎", example: "I need to remember Welcome.", exampleZh: "我需要记住 欢迎。" },
      { word: "Sorry", phonetic: "/ˈsɒri/", pos: "interj.", meaning: "对不起", example: "I need to remember Sorry.", exampleZh: "我需要记住 对不起。" },
    ]
  },
  {
    theme: "酒吧酒馆",
    words: [
      { word: "pub", phonetic: "/pʌb/", pos: "n.", meaning: "酒馆", example: "I need to remember pub.", exampleZh: "我需要记住 酒馆。" },
      { word: "bar", phonetic: "/bɑː/", pos: "n.", meaning: "酒吧", example: "I need to remember bar.", exampleZh: "我需要记住 酒吧。" },
      { word: "counter", phonetic: "/ˈkaʊntə/", pos: "n.", meaning: "吧台", example: "I need to remember counter.", exampleZh: "我需要记住 吧台。" },
      { word: "tap beer", phonetic: "/tæp bɪə/", pos: "n.", meaning: "生啤", example: "I need to remember tap beer.", exampleZh: "我需要记住 生啤。" },
      { word: "bottle", phonetic: "/ˈbɒtl/", pos: "n.", meaning: "瓶装", example: "I need to remember bottle.", exampleZh: "我需要记住 瓶装。" },
      { word: "glass", phonetic: "/ɡlɑːs/", pos: "n.", meaning: "杯", example: "I need to remember glass.", exampleZh: "我需要记住 杯。" },
      { word: "pint", phonetic: "/paɪnt/", pos: "n.", meaning: "一品脱", example: "I need to remember pint.", exampleZh: "我需要记住 一品脱。" },
      { word: "schooner", phonetic: "/ˈskuːnə/", pos: "n.", meaning: "大啤酒杯", example: "I need to remember schooner.", exampleZh: "我需要记住 大啤酒杯。" },
      { word: "cocktail", phonetic: "/ˈkɒkteɪl/", pos: "n.", meaning: "鸡尾酒", example: "I need to remember cocktail.", exampleZh: "我需要记住 鸡尾酒。" },
      { word: "bouncer", phonetic: "/ˈbaʊnsə/", pos: "n.", meaning: "保镖", example: "I need to remember bouncer.", exampleZh: "我需要记住 保镖。" },
    ]
  },
  {
    theme: "葡萄酒庄园",
    words: [
      { word: "vineyard", phonetic: "/ˈvɪnjəd/", pos: "n.", meaning: "葡萄园", example: "I need to remember vineyard.", exampleZh: "我需要记住 葡萄园。" },
      { word: "winery", phonetic: "/ˈwaɪnəri/", pos: "n.", meaning: "酒庄", example: "I need to remember winery.", exampleZh: "我需要记住 酒庄。" },
      { word: "cellar door", phonetic: "/ˈselə dɔː/", pos: "n.", meaning: "酒庄直营店", example: "I need to remember cellar door.", exampleZh: "我需要记住 酒庄直营店。" },
      { word: "tasting", phonetic: "/ˈteɪstɪŋ/", pos: "n.", meaning: "品酒", example: "I need to remember tasting.", exampleZh: "我需要记住 品酒。" },
      { word: "vintage", phonetic: "/ˈvɪntɪdʒ/", pos: "n.", meaning: "年份", example: "I need to remember vintage.", exampleZh: "我需要记住 年份。" },
      { word: "reserve", phonetic: "/rɪˈzɜːv/", pos: "n.", meaning: "珍藏款", example: "I need to remember reserve.", exampleZh: "我需要记住 珍藏款。" },
      { word: "cabernet", phonetic: "/ˈkæbəneɪ/", pos: "n.", meaning: "赤霞珠", example: "I need to remember cabernet.", exampleZh: "我需要记住 赤霞珠。" },
      { word: "chardonnay", phonetic: "/ˌʃɑːdəˈneɪ/", pos: "n.", meaning: "霞多丽", example: "I need to remember chardonnay.", exampleZh: "我需要记住 霞多丽。" },
      { word: "shiraz", phonetic: "/ʃɪˈrɑːz/", pos: "n.", meaning: "西拉", example: "I need to remember shiraz.", exampleZh: "我需要记住 西拉。" },
      { word: "pinot noir", phonetic: "/ˌpiːnəʊ ˈnwɑː/", pos: "n.", meaning: "黑皮诺", example: "I need to remember pinot noir.", exampleZh: "我需要记住 黑皮诺。" },
    ]
  },
  {
    theme: "赌场娱乐",
    words: [
      { word: "casino", phonetic: "/kəˈsiːnəʊ/", pos: "n.", meaning: "赌场", example: "I need to remember casino.", exampleZh: "我需要记住 赌场。" },
      { word: "poker", phonetic: "/ˈpəʊkə/", pos: "n.", meaning: "扑克", example: "I need to remember poker.", exampleZh: "我需要记住 扑克。" },
      { word: "blackjack", phonetic: "/ˈblækdʒæk/", pos: "n.", meaning: "21点", example: "I need to remember blackjack.", exampleZh: "我需要记住 21点。" },
      { word: "roulette", phonetic: "/ruːˈlet/", pos: "n.", meaning: "轮盘赌", example: "I need to remember roulette.", exampleZh: "我需要记住 轮盘赌。" },
      { word: "slot machine", phonetic: "/slɒt məˈʃiːn/", pos: "n.", meaning: "老虎机", example: "I need to remember slot machine.", exampleZh: "我需要记住 老虎机。" },
      { word: "bet", phonetic: "/bet/", pos: "n.", meaning: "赌注", example: "I need to remember bet.", exampleZh: "我需要记住 赌注。" },
      { word: "win", phonetic: "/wɪn/", pos: "v.", meaning: "赢", example: "I need to remember win.", exampleZh: "我需要记住 赢。" },
      { word: "lose", phonetic: "/luːz/", pos: "v.", meaning: "输", example: "I need to remember lose.", exampleZh: "我需要记住 输。" },
      { word: "jackpot", phonetic: "/ˈdʒækpɒt/", pos: "n.", meaning: "头奖", example: "I need to remember jackpot.", exampleZh: "我需要记住 头奖。" },
      { word: "VIP room", phonetic: "/ˌviː aɪ ˈpiː ruːm/", pos: "n.", meaning: "贵宾厅", example: "I need to remember VIP room.", exampleZh: "我需要记住 贵宾厅。" },
    ]
  },
  {
    theme: "签证与边检",
    words: [
      { word: "visa", phonetic: "/ˈviːzə/", pos: "n.", meaning: "签证", example: "I need to remember visa.", exampleZh: "我需要记住 签证。" },
      { word: "eVisitor", phonetic: "/iː ˈvɪzɪtə/", pos: "n.", meaning: "电子签证", example: "I need to remember eVisitor.", exampleZh: "我需要记住 电子签证。" },
      { word: "ETA", phonetic: "/ˌiː tiː ˈeɪ/", pos: "n.", meaning: "电子旅行许可", example: "I need to remember ETA.", exampleZh: "我需要记住 电子旅行许可。" },
      { word: "biometric", phonetic: "/ˌbaɪəʊˈmetrɪk/", pos: "adj.", meaning: "生物识别的", example: "I need to remember biometric.", exampleZh: "我需要记住 生物识别的。" },
      { word: "border", phonetic: "/ˈbɔːdə/", pos: "n.", meaning: "边境", example: "I need to remember border.", exampleZh: "我需要记住 边境。" },
      { word: "inspection", phonetic: "/ɪnˈspekʃn/", pos: "n.", meaning: "检查", example: "I need to remember inspection.", exampleZh: "我需要记住 检查。" },
      { word: "smart gate", phonetic: "/smɑːt ɡeɪt/", pos: "n.", meaning: "智能门", example: "I need to remember smart gate.", exampleZh: "我需要记住 智能门。" },
      { word: "declaration form", phonetic: "/ˌdekləˈreɪʃn fɔːm/", pos: "n.", meaning: "申报单", example: "I need to remember declaration form.", exampleZh: "我需要记住 申报单。" },
      { word: "bio page", phonetic: "/ˈbaɪəʊ peɪdʒ/", pos: "n.", meaning: "生物页", example: "I need to remember bio page.", exampleZh: "我需要记住 生物页。" },
      { word: "stay period", phonetic: "/steɪ ˈpɪəriəd/", pos: "n.", meaning: "停留期", example: "I need to remember stay period.", exampleZh: "我需要记住 停留期。" },
    ]
  },
  {
    theme: "租房住宿",
    words: [
      { word: "rent", phonetic: "/rent/", pos: "v.", meaning: "租", example: "I need to remember rent.", exampleZh: "我需要记住 租。" },
      { word: "lease", phonetic: "/liːs/", pos: "n.", meaning: "租约", example: "I need to remember lease.", exampleZh: "我需要记住 租约。" },
      { word: "landlord", phonetic: "/ˈlændlɔːd/", pos: "n.", meaning: "房东", example: "I need to remember landlord.", exampleZh: "我需要记住 房东。" },
      { word: "tenant", phonetic: "/ˈtenənt/", pos: "n.", meaning: "租客", example: "I need to remember tenant.", exampleZh: "我需要记住 租客。" },
      { word: "deposit", phonetic: "/dɪˈpɒzɪt/", pos: "n.", meaning: "押金", example: "I need to remember deposit.", exampleZh: "我需要记住 押金。" },
      { word: "bond", phonetic: "/bɒnd/", pos: "n.", meaning: "保证金", example: "I need to remember bond.", exampleZh: "我需要记住 保证金。" },
      { word: "utilities", phonetic: "/juːˈtɪlətiz/", pos: "n.", meaning: "水电费", example: "I need to remember utilities.", exampleZh: "我需要记住 水电费。" },
      { word: "furnished", phonetic: "/ˈfɜːnɪʃt/", pos: "adj.", meaning: "带家具的", example: "I need to remember furnished.", exampleZh: "我需要记住 带家具的。" },
      { word: "unfurnished", phonetic: "/ˌʌnˈfɜːnɪʃt/", pos: "adj.", meaning: "无家具的", example: "I need to remember unfurnished.", exampleZh: "我需要记住 无家具的。" },
      { word: "inspection", phonetic: "/ɪnˈspekʃn/", pos: "n.", meaning: "验房", example: "I need to remember inspection.", exampleZh: "我需要记住 验房。" },
    ]
  },
  {
    theme: "搬家物流",
    words: [
      { word: "moving", phonetic: "/ˈmuːvɪŋ/", pos: "n.", meaning: "搬家", example: "I need to remember moving.", exampleZh: "我需要记住 搬家。" },
      { word: "removalist", phonetic: "/rɪˈmuːvəlɪst/", pos: "n.", meaning: "搬家公司", example: "I need to remember removalist.", exampleZh: "我需要记住 搬家公司。" },
      { word: "box", phonetic: "/bɒks/", pos: "n.", meaning: "纸箱", example: "I need to remember box.", exampleZh: "我需要记住 纸箱。" },
      { word: "bubble wrap", phonetic: "/ˈbʌbl ræp/", pos: "n.", meaning: "气泡膜", example: "I need to remember bubble wrap.", exampleZh: "我需要记住 气泡膜。" },
      { word: "fragile", phonetic: "/ˈfrædʒaɪl/", pos: "adj.", meaning: "易碎的", example: "I need to remember fragile.", exampleZh: "我需要记住 易碎的。" },
      { word: "label", phonetic: "/ˈleɪbl/", pos: "n.", meaning: "标签", example: "I need to remember label.", exampleZh: "我需要记住 标签。" },
      { word: "truck", phonetic: "/trʌk/", pos: "n.", meaning: "卡车", example: "I need to remember truck.", exampleZh: "我需要记住 卡车。" },
      { word: "storage", phonetic: "/ˈstɔːrɪdʒ/", pos: "n.", meaning: "仓库", example: "I need to remember storage.", exampleZh: "我需要记住 仓库。" },
      { word: "delivery", phonetic: "/dɪˈlɪvəri/", pos: "n.", meaning: "派送", example: "I need to remember delivery.", exampleZh: "我需要记住 派送。" },
      { word: "tracking", phonetic: "/ˈtrækɪŋ/", pos: "n.", meaning: "追踪", example: "I need to remember tracking.", exampleZh: "我需要记住 追踪。" },
    ]
  },
  {
    theme: "银行账户",
    words: [
      { word: "open an account", phonetic: "/ˈəʊpən ən əˈkaʊnt/", pos: "v.", meaning: "开户", example: "I need to remember open an account.", exampleZh: "我需要记住 开户。" },
      { word: "savings", phonetic: "/ˈseɪvɪŋz/", pos: "n.", meaning: "储蓄", example: "I need to remember savings.", exampleZh: "我需要记住 储蓄。" },
      { word: "cheque", phonetic: "/tʃek/", pos: "n.", meaning: "支票", example: "I need to remember cheque.", exampleZh: "我需要记住 支票。" },
      { word: "branch", phonetic: "/brɑːntʃ/", pos: "n.", meaning: "分行", example: "I need to remember branch.", exampleZh: "我需要记住 分行。" },
      { word: "teller", phonetic: "/ˈtelə/", pos: "n.", meaning: "柜员", example: "I need to remember teller.", exampleZh: "我需要记住 柜员。" },
      { word: "statement", phonetic: "/ˈsteɪtmənt/", pos: "n.", meaning: "对账单", example: "I need to remember statement.", exampleZh: "我需要记住 对账单。" },
      { word: "overdraft", phonetic: "/ˈəʊvədrɑːft/", pos: "n.", meaning: "透支", example: "I need to remember overdraft.", exampleZh: "我需要记住 透支。" },
      { word: "loan", phonetic: "/ləʊn/", pos: "n.", meaning: "贷款", example: "I need to remember loan.", exampleZh: "我需要记住 贷款。" },
      { word: "interest", phonetic: "/ˈɪntrəst/", pos: "n.", meaning: "利息", example: "I need to remember interest.", exampleZh: "我需要记住 利息。" },
      { word: "mortgage", phonetic: "/ˈmɔːɡɪdʒ/", pos: "n.", meaning: "按揭", example: "I need to remember mortgage.", exampleZh: "我需要记住 按揭。" },
    ]
  },
  {
    theme: "电话通讯",
    words: [
      { word: "phone", phonetic: "/fəʊn/", pos: "n.", meaning: "电话", example: "I need to remember phone.", exampleZh: "我需要记住 电话。" },
      { word: "mobile", phonetic: "/ˈməʊbaɪl/", pos: "n.", meaning: "手机", example: "I need to remember mobile.", exampleZh: "我需要记住 手机。" },
      { word: "landline", phonetic: "/ˈlændlaɪn/", pos: "n.", meaning: "座机", example: "I need to remember landline.", exampleZh: "我需要记住 座机。" },
      { word: "dial", phonetic: "/ˈdaɪəl/", pos: "v.", meaning: "拨号", example: "I need to remember dial.", exampleZh: "我需要记住 拨号。" },
      { word: "ring", phonetic: "/rɪŋ/", pos: "v.", meaning: "响铃", example: "I need to remember ring.", exampleZh: "我需要记住 响铃。" },
      { word: "answer", phonetic: "/ˈɑːnsə/", pos: "v.", meaning: "接听", example: "I need to remember answer.", exampleZh: "我需要记住 接听。" },
      { word: "hang up", phonetic: "/hæŋ ʌp/", pos: "v.", meaning: "挂断", example: "I need to remember hang up.", exampleZh: "我需要记住 挂断。" },
      { word: "busy", phonetic: "/ˈbɪzi/", pos: "adj.", meaning: "占线", example: "I need to remember busy.", exampleZh: "我需要记住 占线。" },
      { word: "voicemail", phonetic: "/ˈvɔɪsmeɪl/", pos: "n.", meaning: "语音留言", example: "I need to remember voicemail.", exampleZh: "我需要记住 语音留言。" },
      { word: "text", phonetic: "/tekst/", pos: "v.", meaning: "发短信", example: "I need to remember text.", exampleZh: "我需要记住 发短信。" },
    ]
  },
  {
    theme: "网络社交",
    words: [
      { word: "post", phonetic: "/pəʊst/", pos: "v.", meaning: "发", example: "I need to remember post.", exampleZh: "我需要记住 发。" },
      { word: "share", phonetic: "/ʃeə/", pos: "v.", meaning: "分享", example: "I need to remember share.", exampleZh: "我需要记住 分享。" },
      { word: "like", phonetic: "/laɪk/", pos: "n.", meaning: "点赞", example: "I need to remember like.", exampleZh: "我需要记住 点赞。" },
      { word: "comment", phonetic: "/ˈkɒment/", pos: "n.", meaning: "评论", example: "I need to remember comment.", exampleZh: "我需要记住 评论。" },
      { word: "follow", phonetic: "/ˈfɒləʊ/", pos: "v.", meaning: "关注", example: "I need to remember follow.", exampleZh: "我需要记住 关注。" },
      { word: "hashtag", phonetic: "/ˈhæʃtæɡ/", pos: "n.", meaning: "话题标签", example: "I need to remember hashtag.", exampleZh: "我需要记住 话题标签。" },
      { word: "story", phonetic: "/ˈstɔːri/", pos: "n.", meaning: "故事", example: "I need to remember story.", exampleZh: "我需要记住 故事。" },
      { word: "reel", phonetic: "/riːl/", pos: "n.", meaning: "短视频", example: "I need to remember reel.", exampleZh: "我需要记住 短视频。" },
      { word: "profile", phonetic: "/ˈprəʊfaɪl/", pos: "n.", meaning: "个人主页", example: "I need to remember profile.", exampleZh: "我需要记住 个人主页。" },
      { word: "notification", phonetic: "/ˌnəʊtɪfɪˈkeɪʃn/", pos: "n.", meaning: "通知", example: "I need to remember notification.", exampleZh: "我需要记住 通知。" },
    ]
  },
  {
    theme: "健身房",
    words: [
      { word: "workout", phonetic: "/ˈwɜːkaʊt/", pos: "n.", meaning: "锻炼", example: "I need to remember workout.", exampleZh: "我需要记住 锻炼。" },
      { word: "treadmill", phonetic: "/ˈtredmɪl/", pos: "n.", meaning: "跑步机", example: "I need to remember treadmill.", exampleZh: "我需要记住 跑步机。" },
      { word: "dumbbell", phonetic: "/ˈdʌmbel/", pos: "n.", meaning: "哑铃", example: "I need to remember dumbbell.", exampleZh: "我需要记住 哑铃。" },
      { word: "barbell", phonetic: "/ˈbɑːbel/", pos: "n.", meaning: "杠铃", example: "I need to remember barbell.", exampleZh: "我需要记住 杠铃。" },
      { word: "bench", phonetic: "/bentʃ/", pos: "n.", meaning: "长椅", example: "I need to remember bench.", exampleZh: "我需要记住 长椅。" },
      { word: "squat", phonetic: "/skwɒt/", pos: "n.", meaning: "深蹲", example: "I need to remember squat.", exampleZh: "我需要记住 深蹲。" },
      { word: "bench press", phonetic: "/bentʃ pres/", pos: "n.", meaning: "卧推", example: "I need to remember bench press.", exampleZh: "我需要记住 卧推。" },
      { word: "cardio", phonetic: "/ˈkɑːdiəʊ/", pos: "n.", meaning: "有氧", example: "I need to remember cardio.", exampleZh: "我需要记住 有氧。" },
      { word: "stretch", phonetic: "/stretʃ/", pos: "v.", meaning: "拉伸", example: "I need to remember stretch.", exampleZh: "我需要记住 拉伸。" },
      { word: "cool down", phonetic: "/kuːl daʊn/", pos: "v.", meaning: "放松", example: "I need to remember cool down.", exampleZh: "我需要记住 放松。" },
    ]
  },
  {
    theme: "美发沙龙",
    words: [
      { word: "haircut", phonetic: "/ˈheəkʌt/", pos: "n.", meaning: "理发", example: "I need to remember haircut.", exampleZh: "我需要记住 理发。" },
      { word: "shampoo", phonetic: "/ʃæmˈpuː/", pos: "n.", meaning: "洗发", example: "I need to remember shampoo.", exampleZh: "我需要记住 洗发。" },
      { word: "conditioner", phonetic: "/kənˈdɪʃənə/", pos: "n.", meaning: "护发素", example: "I need to remember conditioner.", exampleZh: "我需要记住 护发素。" },
      { word: "blow-dry", phonetic: "/bləʊ draɪ/", pos: "n.", meaning: "吹干", example: "I need to remember blow-dry.", exampleZh: "我需要记住 吹干。" },
      { word: "trim", phonetic: "/trɪm/", pos: "v.", meaning: "修剪", example: "I need to remember trim.", exampleZh: "我需要记住 修剪。" },
      { word: "dye", phonetic: "/daɪ/", pos: "v.", meaning: "染发", example: "I need to remember dye.", exampleZh: "我需要记住 染发。" },
      { word: "highlights", phonetic: "/ˈhaɪlaɪts/", pos: "n.", meaning: "挑染", example: "I need to remember highlights.", exampleZh: "我需要记住 挑染。" },
      { word: "bangs", phonetic: "/bæŋz/", pos: "n.", meaning: "刘海", example: "I need to remember bangs.", exampleZh: "我需要记住 刘海。" },
      { word: "layers", phonetic: "/ˈleɪəz/", pos: "n.", meaning: "层次", example: "I need to remember layers.", exampleZh: "我需要记住 层次。" },
      { word: "ponytail", phonetic: "/ˈpəʊniteɪl/", pos: "n.", meaning: "马尾", example: "I need to remember ponytail.", exampleZh: "我需要记住 马尾。" },
    ]
  },
  {
    theme: "SPA 美容",
    words: [
      { word: "spa", phonetic: "/spɑː/", pos: "n.", meaning: "水疗", example: "I need to remember spa.", exampleZh: "我需要记住 水疗。" },
      { word: "massage", phonetic: "/ˈmæsɑːʒ/", pos: "n.", meaning: "按摩", example: "I need to remember massage.", exampleZh: "我需要记住 按摩。" },
      { word: "facial", phonetic: "/ˈfeɪʃl/", pos: "n.", meaning: "面部护理", example: "I need to remember facial.", exampleZh: "我需要记住 面部护理。" },
      { word: "manicure", phonetic: "/ˈmænɪkjʊə/", pos: "n.", meaning: "美甲", example: "I need to remember manicure.", exampleZh: "我需要记住 美甲。" },
      { word: "pedicure", phonetic: "/ˈpedɪkjʊə/", pos: "n.", meaning: "修脚", example: "I need to remember pedicure.", exampleZh: "我需要记住 修脚。" },
      { word: "sauna", phonetic: "/ˈsɔːnə/", pos: "n.", meaning: "桑拿", example: "I need to remember sauna.", exampleZh: "我需要记住 桑拿。" },
      { word: "steam room", phonetic: "/stiːm ruːm/", pos: "n.", meaning: "蒸汽房", example: "I need to remember steam room.", exampleZh: "我需要记住 蒸汽房。" },
      { word: "hot tub", phonetic: "/hɒt tʌb/", pos: "n.", meaning: "热水浴缸", example: "I need to remember hot tub.", exampleZh: "我需要记住 热水浴缸。" },
      { word: "body scrub", phonetic: "/ˈbɒdi skrʌb/", pos: "n.", meaning: "身体磨砂", example: "I need to remember body scrub.", exampleZh: "我需要记住 身体磨砂。" },
      { word: "aromatherapy", phonetic: "/əˌrəʊməˈθerəpi/", pos: "n.", meaning: "芳香疗法", example: "I need to remember aromatherapy.", exampleZh: "我需要记住 芳香疗法。" },
    ]
  },
  {
    theme: "家庭娱乐",
    words: [
      { word: "television", phonetic: "/ˈtelɪvɪʒn/", pos: "n.", meaning: "电视", example: "I need to remember television.", exampleZh: "我需要记住 电视。" },
      { word: "remote", phonetic: "/rɪˈməʊt/", pos: "n.", meaning: "遥控器", example: "I need to remember remote.", exampleZh: "我需要记住 遥控器。" },
      { word: "sofa", phonetic: "/ˈsəʊfə/", pos: "n.", meaning: "沙发", example: "I need to remember sofa.", exampleZh: "我需要记住 沙发。" },
      { word: "armchair", phonetic: "/ˈɑːmtʃeə/", pos: "n.", meaning: "扶手椅", example: "I need to remember armchair.", exampleZh: "我需要记住 扶手椅。" },
      { word: "carpet", phonetic: "/ˈkɑːpɪt/", pos: "n.", meaning: "地毯", example: "I need to remember carpet.", exampleZh: "我需要记住 地毯。" },
      { word: "curtain", phonetic: "/ˈkɜːtn/", pos: "n.", meaning: "窗帘", example: "I need to remember curtain.", exampleZh: "我需要记住 窗帘。" },
      { word: "bookshelf", phonetic: "/ˈbʊkʃelf/", pos: "n.", meaning: "书架", example: "I need to remember bookshelf.", exampleZh: "我需要记住 书架。" },
      { word: "lamp", phonetic: "/læmp/", pos: "n.", meaning: "台灯", example: "I need to remember lamp.", exampleZh: "我需要记住 台灯。" },
      { word: "coffee table", phonetic: "/ˈkɒfi ˈteɪbl/", pos: "n.", meaning: "茶几", example: "I need to remember coffee table.", exampleZh: "我需要记住 茶几。" },
      { word: "vase", phonetic: "/vɑːz/", pos: "n.", meaning: "花瓶", example: "I need to remember vase.", exampleZh: "我需要记住 花瓶。" },
    ]
  },
  {
    theme: "城市地理",
    words: [
      { word: "CBD", phonetic: "/ˌsiː biː ˈdiː/", pos: "n.", meaning: "中央商务区", example: "I need to remember CBD.", exampleZh: "我需要记住 中央商务区。" },
      { word: "suburb", phonetic: "/ˈsʌbɜːb/", pos: "n.", meaning: "郊区", example: "I need to remember suburb.", exampleZh: "我需要记住 郊区。" },
      { word: "neighbourhood", phonetic: "/ˈneɪbəhʊd/", pos: "n.", meaning: "街区", example: "I need to remember neighbourhood.", exampleZh: "我需要记住 街区。" },
      { word: "harbour", phonetic: "/ˈhɑːbə/", pos: "n.", meaning: "港口", example: "I need to remember harbour.", exampleZh: "我需要记住 港口。" },
      { word: "bridge", phonetic: "/brɪdʒ/", pos: "n.", meaning: "桥", example: "I need to remember bridge.", exampleZh: "我需要记住 桥。" },
      { word: "river", phonetic: "/ˈrɪvə/", pos: "n.", meaning: "河", example: "I need to remember river.", exampleZh: "我需要记住 河。" },
      { word: "park", phonetic: "/pɑːk/", pos: "n.", meaning: "公园", example: "I need to remember park.", exampleZh: "我需要记住 公园。" },
      { word: "square", phonetic: "/skweə/", pos: "n.", meaning: "广场", example: "I need to remember square.", exampleZh: "我需要记住 广场。" },
      { word: "street", phonetic: "/striːt/", pos: "n.", meaning: "街", example: "I need to remember street.", exampleZh: "我需要记住 街。" },
      { word: "avenue", phonetic: "/ˈævənjuː/", pos: "n.", meaning: "大道", example: "I need to remember avenue.", exampleZh: "我需要记住 大道。" },
    ]
  },
  {
    theme: "商务会议",
    words: [
      { word: "meeting", phonetic: "/ˈmiːtɪŋ/", pos: "n.", meaning: "会议", example: "I need to remember meeting.", exampleZh: "我需要记住 会议。" },
      { word: "conference", phonetic: "/ˈkɒnfərəns/", pos: "n.", meaning: "大会", example: "I need to remember conference.", exampleZh: "我需要记住 大会。" },
      { word: "agenda", phonetic: "/əˈdʒendə/", pos: "n.", meaning: "议程", example: "I need to remember agenda.", exampleZh: "我需要记住 议程。" },
      { word: "minutes", phonetic: "/ˈmɪnɪts/", pos: "n.", meaning: "会议纪要", example: "I need to remember minutes.", exampleZh: "我需要记住 会议纪要。" },
      { word: "presentation", phonetic: "/ˌpreznˈteɪʃn/", pos: "n.", meaning: "演示", example: "I need to remember presentation.", exampleZh: "我需要记住 演示。" },
      { word: "slide", phonetic: "/slaɪd/", pos: "n.", meaning: "幻灯片", example: "I need to remember slide.", exampleZh: "我需要记住 幻灯片。" },
      { word: "handout", phonetic: "/ˈhændaʊt/", pos: "n.", meaning: "讲义", example: "I need to remember handout.", exampleZh: "我需要记住 讲义。" },
      { word: "proposal", phonetic: "/prəˈpəʊzl/", pos: "n.", meaning: "提案", example: "I need to remember proposal.", exampleZh: "我需要记住 提案。" },
      { word: "deadline", phonetic: "/ˈdedlaɪn/", pos: "n.", meaning: "截止日", example: "I need to remember deadline.", exampleZh: "我需要记住 截止日。" },
      { word: "RSVP", phonetic: "/ˌɑːr es viː ˈpiː/", pos: "v.", meaning: "请回复", example: "I need to remember RSVP.", exampleZh: "我需要记住 请回复。" },
    ]
  },
  {
    theme: "邮件信件",
    words: [
      { word: "envelope", phonetic: "/ˈenvələʊp/", pos: "n.", meaning: "信封", example: "I need to remember envelope.", exampleZh: "我需要记住 信封。" },
      { word: "letter", phonetic: "/ˈletə/", pos: "n.", meaning: "信件", example: "I need to remember letter.", exampleZh: "我需要记住 信件。" },
      { word: "postcard", phonetic: "/ˈpəʊstkɑːd/", pos: "n.", meaning: "明信片", example: "I need to remember postcard.", exampleZh: "我需要记住 明信片。" },
      { word: "package", phonetic: "/ˈpækɪdʒ/", pos: "n.", meaning: "包裹", example: "I need to remember package.", exampleZh: "我需要记住 包裹。" },
      { word: "stamp", phonetic: "/stæmp/", pos: "n.", meaning: "邮票", example: "I need to remember stamp.", exampleZh: "我需要记住 邮票。" },
      { word: "address", phonetic: "/əˈdres/", pos: "n.", meaning: "地址", example: "I need to remember address.", exampleZh: "我需要记住 地址。" },
      { word: "sender", phonetic: "/ˈsendə/", pos: "n.", meaning: "寄件人", example: "I need to remember sender.", exampleZh: "我需要记住 寄件人。" },
      { word: "recipient", phonetic: "/rɪˈsɪpiənt/", pos: "n.", meaning: "收件人", example: "I need to remember recipient.", exampleZh: "我需要记住 收件人。" },
      { word: "mailbox", phonetic: "/ˈmeɪlbɒks/", pos: "n.", meaning: "邮箱", example: "I need to remember mailbox.", exampleZh: "我需要记住 邮箱。" },
      { word: "zip code", phonetic: "/zɪp kəʊd/", pos: "n.", meaning: "邮编", example: "I need to remember zip code.", exampleZh: "我需要记住 邮编。" },
    ]
  },
  {
    theme: "广告营销",
    words: [
      { word: "advertisement", phonetic: "/ədˈvɜːtɪsmənt/", pos: "n.", meaning: "广告", example: "I need to remember advertisement.", exampleZh: "我需要记住 广告。" },
      { word: "campaign", phonetic: "/kæmˈpeɪn/", pos: "n.", meaning: "活动", example: "I need to remember campaign.", exampleZh: "我需要记住 活动。" },
      { word: "brand", phonetic: "/brænd/", pos: "n.", meaning: "品牌", example: "I need to remember brand.", exampleZh: "我需要记住 品牌。" },
      { word: "product", phonetic: "/ˈprɒdʌkt/", pos: "n.", meaning: "产品", example: "I need to remember product.", exampleZh: "我需要记住 产品。" },
      { word: "customer", phonetic: "/ˈkʌstəmə/", pos: "n.", meaning: "顾客", example: "I need to remember customer.", exampleZh: "我需要记住 顾客。" },
      { word: "promotion", phonetic: "/prəˈməʊʃn/", pos: "n.", meaning: "促销", example: "I need to remember promotion.", exampleZh: "我需要记住 促销。" },
      { word: "discount", phonetic: "/ˈdɪskaʊnt/", pos: "n.", meaning: "折扣", example: "I need to remember discount.", exampleZh: "我需要记住 折扣。" },
      { word: "coupon", phonetic: "/ˈkuːpɒn/", pos: "n.", meaning: "优惠券", example: "I need to remember coupon.", exampleZh: "我需要记住 优惠券。" },
      { word: "launch", phonetic: "/lɔːntʃ/", pos: "n.", meaning: "发布", example: "I need to remember launch.", exampleZh: "我需要记住 发布。" },
      { word: "slogan", phonetic: "/ˈsləʊɡən/", pos: "n.", meaning: "口号", example: "I need to remember slogan.", exampleZh: "我需要记住 口号。" },
    ]
  },
  {
    theme: "育儿日常",
    words: [
      { word: "baby", phonetic: "/ˈbeɪbi/", pos: "n.", meaning: "宝宝", example: "I need to remember baby.", exampleZh: "我需要记住 宝宝。" },
      { word: "nappy", phonetic: "/ˈnæpi/", pos: "n.", meaning: "尿布", example: "I need to remember nappy.", exampleZh: "我需要记住 尿布。" },
      { word: "pram", phonetic: "/præm/", pos: "n.", meaning: "婴儿车", example: "I need to remember pram.", exampleZh: "我需要记住 婴儿车。" },
      { word: "bottle", phonetic: "/ˈbɒtl/", pos: "n.", meaning: "奶瓶", example: "I need to remember bottle.", exampleZh: "我需要记住 奶瓶。" },
      { word: "dummy", phonetic: "/ˈdʌmi/", pos: "n.", meaning: "安抚奶嘴", example: "I need to remember dummy.", exampleZh: "我需要记住 安抚奶嘴。" },
      { word: "high chair", phonetic: "/haɪ tʃeə/", pos: "n.", meaning: "高脚椅", example: "I need to remember high chair.", exampleZh: "我需要记住 高脚椅。" },
      { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", pos: "n.", meaning: "游乐场", example: "I need to remember playground.", exampleZh: "我需要记住 游乐场。" },
      { word: "kindy", phonetic: "/ˈkɪndi/", pos: "n.", meaning: "幼儿园", example: "I need to remember kindy.", exampleZh: "我需要记住 幼儿园。" },
      { word: "primary school", phonetic: "/ˈpraɪməri skuːl/", pos: "n.", meaning: "小学", example: "I need to remember primary school.", exampleZh: "我需要记住 小学。" },
      { word: "daycare", phonetic: "/ˈdeɪkeə/", pos: "n.", meaning: "托儿所", example: "I need to remember daycare.", exampleZh: "我需要记住 托儿所。" },
    ]
  },
  {
    theme: "学校教育",
    words: [
      { word: "class", phonetic: "/klɑːs/", pos: "n.", meaning: "课堂", example: "I need to remember class.", exampleZh: "我需要记住 课堂。" },
      { word: "teacher", phonetic: "/ˈtiːtʃə/", pos: "n.", meaning: "老师", example: "I need to remember teacher.", exampleZh: "我需要记住 老师。" },
      { word: "student", phonetic: "/ˈstjuːdnt/", pos: "n.", meaning: "学生", example: "I need to remember student.", exampleZh: "我需要记住 学生。" },
      { word: "homework", phonetic: "/ˈhəʊmwɜːk/", pos: "n.", meaning: "作业", example: "I need to remember homework.", exampleZh: "我需要记住 作业。" },
      { word: "exam", phonetic: "/ɪɡˈzæm/", pos: "n.", meaning: "考试", example: "I need to remember exam.", exampleZh: "我需要记住 考试。" },
      { word: "test", phonetic: "/test/", pos: "n.", meaning: "测验", example: "I need to remember test.", exampleZh: "我需要记住 测验。" },
      { word: "textbook", phonetic: "/ˈtekstbʊk/", pos: "n.", meaning: "课本", example: "I need to remember textbook.", exampleZh: "我需要记住 课本。" },
      { word: "library", phonetic: "/ˈlaɪbrəri/", pos: "n.", meaning: "图书馆", example: "I need to remember library.", exampleZh: "我需要记住 图书馆。" },
      { word: "campus", phonetic: "/ˈkæmpəs/", pos: "n.", meaning: "校园", example: "I need to remember campus.", exampleZh: "我需要记住 校园。" },
      { word: "graduation", phonetic: "/ˌɡrædʒuˈeɪʃn/", pos: "n.", meaning: "毕业", example: "I need to remember graduation.", exampleZh: "我需要记住 毕业。" },
    ]
  },
  {
    theme: "机场常用",
    words: [
      { word: "announcement", phonetic: "/əˈnaʊnsmənt/", pos: "n.", meaning: "广播", example: "I need to remember announcement.", exampleZh: "我需要记住 广播。" },
      { word: "final call", phonetic: "/ˈfaɪnl kɔːl/", pos: "n.", meaning: "最后登机", example: "I need to remember final call.", exampleZh: "我需要记住 最后登机。" },
      { word: "delayed", phonetic: "/dɪˈleɪd/", pos: "adj.", meaning: "延误的", example: "I need to remember delayed.", exampleZh: "我需要记住 延误的。" },
      { word: "cancelled", phonetic: "/ˈkænsld/", pos: "adj.", meaning: "取消的", example: "I need to remember cancelled.", exampleZh: "我需要记住 取消的。" },
      { word: "on time", phonetic: "/ɒn taɪm/", pos: "adj.", meaning: "准点的", example: "I need to remember on time.", exampleZh: "我需要记住 准点的。" },
      { word: "boarding now", phonetic: "/ˈbɔːdɪŋ naʊ/", pos: "phrase", meaning: "正在登机", example: "I need to remember boarding now.", exampleZh: "我需要记住 正在登机。" },
      { word: "last call", phonetic: "/lɑːst kɔːl/", pos: "n.", meaning: "最后登机", example: "I need to remember last call.", exampleZh: "我需要记住 最后登机。" },
      { word: "transit", phonetic: "/ˈtrænzɪt/", pos: "n.", meaning: "中转", example: "I need to remember transit.", exampleZh: "我需要记住 中转。" },
      { word: "stopover", phonetic: "/ˈstɒpəʊvə/", pos: "n.", meaning: "中途停留", example: "I need to remember stopover.", exampleZh: "我需要记住 中途停留。" },
      { word: "duty free", phonetic: "/ˌdjuːti ˈfriː/", pos: "n.", meaning: "免税", example: "I need to remember duty free.", exampleZh: "我需要记住 免税。" },
    ]
  },
  {
    theme: "电影院",
    words: [
      { word: "cinema", phonetic: "/ˈsɪnəmə/", pos: "n.", meaning: "电影院", example: "I need to remember cinema.", exampleZh: "我需要记住 电影院。" },
      { word: "movie", phonetic: "/ˈmuːvi/", pos: "n.", meaning: "电影", example: "I need to remember movie.", exampleZh: "我需要记住 电影。" },
      { word: "ticket", phonetic: "/ˈtɪkɪt/", pos: "n.", meaning: "票", example: "I need to remember ticket.", exampleZh: "我需要记住 票。" },
      { word: "screen", phonetic: "/skriːn/", pos: "n.", meaning: "银幕", example: "I need to remember screen.", exampleZh: "我需要记住 银幕。" },
      { word: "popcorn", phonetic: "/ˈpɒpkɔːn/", pos: "n.", meaning: "爆米花", example: "I need to remember popcorn.", exampleZh: "我需要记住 爆米花。" },
      { word: "comedy", phonetic: "/ˈkɒmədi/", pos: "n.", meaning: "喜剧片", example: "I need to remember comedy.", exampleZh: "我需要记住 喜剧片。" },
      { word: "thriller", phonetic: "/ˈθrɪlə/", pos: "n.", meaning: "惊悚片", example: "I need to remember thriller.", exampleZh: "我需要记住 惊悚片。" },
      { word: "animation", phonetic: "/ˌænɪˈmeɪʃn/", pos: "n.", meaning: "动画片", example: "I need to remember animation.", exampleZh: "我需要记住 动画片。" },
      { word: "documentary", phonetic: "/ˌdɒkjuˈmentri/", pos: "n.", meaning: "纪录片", example: "I need to remember documentary.", exampleZh: "我需要记住 纪录片。" },
      { word: "subtitle", phonetic: "/ˈsʌbtaɪtl/", pos: "n.", meaning: "字幕", example: "I need to remember subtitle.", exampleZh: "我需要记住 字幕。" },
    ]
  },
  {
    theme: "KTV 唱歌",
    words: [
      { word: "karaoke", phonetic: "/ˌkæriˈəʊki/", pos: "n.", meaning: "卡拉 OK", example: "I need to remember karaoke.", exampleZh: "我需要记住 卡拉 OK。" },
      { word: "song", phonetic: "/sɒŋ/", pos: "n.", meaning: "歌曲", example: "I need to remember song.", exampleZh: "我需要记住 歌曲。" },
      { word: "lyrics", phonetic: "/ˈlɪrɪks/", pos: "n.", meaning: "歌词", example: "I need to remember lyrics.", exampleZh: "我需要记住 歌词。" },
      { word: "melody", phonetic: "/ˈmelədi/", pos: "n.", meaning: "旋律", example: "I need to remember melody.", exampleZh: "我需要记住 旋律。" },
      { word: "rhythm", phonetic: "/ˈrɪðəm/", pos: "n.", meaning: "节奏", example: "I need to remember rhythm.", exampleZh: "我需要记住 节奏。" },
      { word: "chorus", phonetic: "/ˈkɔːrəs/", pos: "n.", meaning: "副歌", example: "I need to remember chorus.", exampleZh: "我需要记住 副歌。" },
      { word: "verse", phonetic: "/vɜːs/", pos: "n.", meaning: "主歌", example: "I need to remember verse.", exampleZh: "我需要记住 主歌。" },
      { word: "duet", phonetic: "/djuˈet/", pos: "n.", meaning: "二重唱", example: "I need to remember duet.", exampleZh: "我需要记住 二重唱。" },
      { word: "microphone", phonetic: "/ˈmaɪkrəfəʊn/", pos: "n.", meaning: "麦克风", example: "I need to remember microphone.", exampleZh: "我需要记住 麦克风。" },
      { word: "speaker", phonetic: "/ˈspiːkə/", pos: "n.", meaning: "音响", example: "I need to remember speaker.", exampleZh: "我需要记住 音响。" },
    ]
  },
  {
    theme: "花卉植物",
    words: [
      { word: "flower", phonetic: "/ˈflaʊə/", pos: "n.", meaning: "花", example: "I need to remember flower.", exampleZh: "我需要记住 花。" },
      { word: "rose", phonetic: "/rəʊz/", pos: "n.", meaning: "玫瑰", example: "I need to remember rose.", exampleZh: "我需要记住 玫瑰。" },
      { word: "tulip", phonetic: "/ˈtjuːlɪp/", pos: "n.", meaning: "郁金香", example: "I need to remember tulip.", exampleZh: "我需要记住 郁金香。" },
      { word: "daisy", phonetic: "/ˈdeɪzi/", pos: "n.", meaning: "雏菊", example: "I need to remember daisy.", exampleZh: "我需要记住 雏菊。" },
      { word: "sunflower", phonetic: "/ˈsʌnflaʊə/", pos: "n.", meaning: "向日葵", example: "I need to remember sunflower.", exampleZh: "我需要记住 向日葵。" },
      { word: "orchid", phonetic: "/ˈɔːkɪd/", pos: "n.", meaning: "兰花", example: "I need to remember orchid.", exampleZh: "我需要记住 兰花。" },
      { word: "lily", phonetic: "/ˈlɪli/", pos: "n.", meaning: "百合", example: "I need to remember lily.", exampleZh: "我需要记住 百合。" },
      { word: "lavender", phonetic: "/ˈlævəndə/", pos: "n.", meaning: "薰衣草", example: "I need to remember lavender.", exampleZh: "我需要记住 薰衣草。" },
      { word: "jasmine", phonetic: "/ˈdʒæsmɪn/", pos: "n.", meaning: "茉莉", example: "I need to remember jasmine.", exampleZh: "我需要记住 茉莉。" },
      { word: "bouquet", phonetic: "/buːˈkeɪ/", pos: "n.", meaning: "花束", example: "I need to remember bouquet.", exampleZh: "我需要记住 花束。" },
    ]
  },
  {
    theme: "高尔夫词汇",
    words: [
      { word: "golf", phonetic: "/ɡɒlf/", pos: "n.", meaning: "高尔夫", example: "I need to remember golf.", exampleZh: "我需要记住 高尔夫。" },
      { word: "tee", phonetic: "/tiː/", pos: "n.", meaning: "球座", example: "I need to remember tee.", exampleZh: "我需要记住 球座。" },
      { word: "green", phonetic: "/ɡriːn/", pos: "n.", meaning: "果岭", example: "I need to remember green.", exampleZh: "我需要记住 果岭。" },
      { word: "fairway", phonetic: "/ˈfeəweɪ/", pos: "n.", meaning: "球道", example: "I need to remember fairway.", exampleZh: "我需要记住 球道。" },
      { word: "bunker", phonetic: "/ˈbʌŋkə/", pos: "n.", meaning: "沙坑", example: "I need to remember bunker.", exampleZh: "我需要记住 沙坑。" },
      { word: "club", phonetic: "/klʌb/", pos: "n.", meaning: "球杆", example: "I need to remember club.", exampleZh: "我需要记住 球杆。" },
      { word: "driver", phonetic: "/ˈdraɪvə/", pos: "n.", meaning: "一号木", example: "I need to remember driver.", exampleZh: "我需要记住 一号木。" },
      { word: "putter", phonetic: "/ˈpʌtə/", pos: "n.", meaning: "推杆", example: "I need to remember putter.", exampleZh: "我需要记住 推杆。" },
      { word: "par", phonetic: "/pɑː/", pos: "n.", meaning: "标准杆", example: "I need to remember par.", exampleZh: "我需要记住 标准杆。" },
      { word: "birdie", phonetic: "/ˈbɜːdi/", pos: "n.", meaning: "小鸟", example: "I need to remember birdie.", exampleZh: "我需要记住 小鸟。" },
    ]
  },
  {
    theme: "瑜伽体式",
    words: [
      { word: "yoga", phonetic: "/ˈjəʊɡə/", pos: "n.", meaning: "瑜伽", example: "I need to remember yoga.", exampleZh: "我需要记住 瑜伽。" },
      { word: "pose", phonetic: "/pəʊz/", pos: "n.", meaning: "体式", example: "I need to remember pose.", exampleZh: "我需要记住 体式。" },
      { word: "downward dog", phonetic: "/ˌdaʊnwəd dɒɡ/", pos: "n.", meaning: "下犬式", example: "I need to remember downward dog.", exampleZh: "我需要记住 下犬式。" },
      { word: "warrior", phonetic: "/ˈwɒriə/", pos: "n.", meaning: "战士式", example: "I need to remember warrior.", exampleZh: "我需要记住 战士式。" },
      { word: "tree pose", phonetic: "/triː pəʊz/", pos: "n.", meaning: "树式", example: "I need to remember tree pose.", exampleZh: "我需要记住 树式。" },
      { word: "savasana", phonetic: "/səˈvɑːsənə/", pos: "n.", meaning: "挺尸式", example: "I need to remember savasana.", exampleZh: "我需要记住 挺尸式。" },
      { word: "pranayama", phonetic: "/ˌprɑːnəˈjɑːmə/", pos: "n.", meaning: "呼吸法", example: "I need to remember pranayama.", exampleZh: "我需要记住 呼吸法。" },
      { word: "meditation", phonetic: "/ˌmedɪˈteɪʃn/", pos: "n.", meaning: "冥想", example: "I need to remember meditation.", exampleZh: "我需要记住 冥想。" },
      { word: "om", phonetic: "/əʊm/", pos: "n.", meaning: "唵", example: "I need to remember om.", exampleZh: "我需要记住 唵。" },
      { word: "namaste", phonetic: "/ˌnʌməˈsteɪ/", pos: "interj.", meaning: "合十礼", example: "I need to remember namaste.", exampleZh: "我需要记住 合十礼。" },
    ]
  },
  {
    theme: "冲浪潜水",
    words: [
      { word: "surfboard", phonetic: "/ˈsɜːfbɔːd/", pos: "n.", meaning: "冲浪板", example: "I need to remember surfboard.", exampleZh: "我需要记住 冲浪板。" },
      { word: "wetsuit", phonetic: "/ˈwetsuːt/", pos: "n.", meaning: "湿衣", example: "I need to remember wetsuit.", exampleZh: "我需要记住 湿衣。" },
      { word: "wave", phonetic: "/weɪv/", pos: "n.", meaning: "浪", example: "I need to remember wave.", exampleZh: "我需要记住 浪。" },
      { word: "rip tide", phonetic: "/rɪp taɪd/", pos: "n.", meaning: "激流", example: "I need to remember rip tide.", exampleZh: "我需要记住 激流。" },
      { word: "reef break", phonetic: "/riːf breɪk/", pos: "n.", meaning: "礁石浪点", example: "I need to remember reef break.", exampleZh: "我需要记住 礁石浪点。" },
      { word: "scuba", phonetic: "/ˈskuːbə/", pos: "n.", meaning: "水肺", example: "I need to remember scuba.", exampleZh: "我需要记住 水肺。" },
      { word: "oxygen tank", phonetic: "/ˈɒksɪdʒən tæŋk/", pos: "n.", meaning: "氧气瓶", example: "I need to remember oxygen tank.", exampleZh: "我需要记住 氧气瓶。" },
      { word: "fins", phonetic: "/fɪnz/", pos: "n.", meaning: "脚蹼", example: "I need to remember fins.", exampleZh: "我需要记住 脚蹼。" },
      { word: "mask", phonetic: "/mɑːsk/", pos: "n.", meaning: "面镜", example: "I need to remember mask.", exampleZh: "我需要记住 面镜。" },
      { word: "snorkel", phonetic: "/ˈsnɔːkl/", pos: "n.", meaning: "呼吸管", example: "I need to remember snorkel.", exampleZh: "我需要记住 呼吸管。" },
    ]
  },
  {
    theme: "登山徒步",
    words: [
      { word: "hiking", phonetic: "/ˈhaɪkɪŋ/", pos: "n.", meaning: "徒步", example: "I need to remember hiking.", exampleZh: "我需要记住 徒步。" },
      { word: "backpack", phonetic: "/ˈbækpæk/", pos: "n.", meaning: "背包", example: "I need to remember backpack.", exampleZh: "我需要记住 背包。" },
      { word: "boots", phonetic: "/buːts/", pos: "n.", meaning: "靴子", example: "I need to remember boots.", exampleZh: "我需要记住 靴子。" },
      { word: "compass", phonetic: "/ˈkʌmpəs/", pos: "n.", meaning: "指南针", example: "I need to remember compass.", exampleZh: "我需要记住 指南针。" },
      { word: "map", phonetic: "/mæp/", pos: "n.", meaning: "地图", example: "I need to remember map.", exampleZh: "我需要记住 地图。" },
      { word: "trail", phonetic: "/treɪl/", pos: "n.", meaning: "小径", example: "I need to remember trail.", exampleZh: "我需要记住 小径。" },
      { word: "summit", phonetic: "/ˈsʌmɪt/", pos: "n.", meaning: "山顶", example: "I need to remember summit.", exampleZh: "我需要记住 山顶。" },
      { word: "altitude", phonetic: "/ˈæltɪtjuːd/", pos: "n.", meaning: "海拔", example: "I need to remember altitude.", exampleZh: "我需要记住 海拔。" },
      { word: "rest", phonetic: "/rest/", pos: "n.", meaning: "休息", example: "I need to remember rest.", exampleZh: "我需要记住 休息。" },
      { word: "checkpoint", phonetic: "/ˈtʃekpɔɪnt/", pos: "n.", meaning: "检查点", example: "I need to remember checkpoint.", exampleZh: "我需要记住 检查点。" },
    ]
  },
  {
    theme: "节日礼物",
    words: [
      { word: "gift", phonetic: "/ɡɪft/", pos: "n.", meaning: "礼物", example: "I need to remember gift.", exampleZh: "我需要记住 礼物。" },
      { word: "present", phonetic: "/ˈpreznt/", pos: "n.", meaning: "礼物", example: "I need to remember present.", exampleZh: "我需要记住 礼物。" },
      { word: "wrap", phonetic: "/ræp/", pos: "v.", meaning: "包装", example: "I need to remember wrap.", exampleZh: "我需要记住 包装。" },
      { word: "ribbon", phonetic: "/ˈrɪbən/", pos: "n.", meaning: "丝带", example: "I need to remember ribbon.", exampleZh: "我需要记住 丝带。" },
      { word: "card", phonetic: "/kɑːd/", pos: "n.", meaning: "卡片", example: "I need to remember card.", exampleZh: "我需要记住 卡片。" },
      { word: "surprise", phonetic: "/səˈpraɪz/", pos: "n.", meaning: "惊喜", example: "I need to remember surprise.", exampleZh: "我需要记住 惊喜。" },
      { word: "birthday", phonetic: "/ˈbɜːθdeɪ/", pos: "n.", meaning: "生日", example: "I need to remember birthday.", exampleZh: "我需要记住 生日。" },
      { word: "anniversary", phonetic: "/ˌænɪˈvɜːsəri/", pos: "n.", meaning: "周年纪念", example: "I need to remember anniversary.", exampleZh: "我需要记住 周年纪念。" },
      { word: "wedding", phonetic: "/ˈwedɪŋ/", pos: "n.", meaning: "婚礼", example: "I need to remember wedding.", exampleZh: "我需要记住 婚礼。" },
      { word: "congratulations", phonetic: "/kənˌɡrætʃuˈleɪʃnz/", pos: "n.", meaning: "祝贺", example: "I need to remember congratulations.", exampleZh: "我需要记住 祝贺。" },
    ]
  },
  {
    theme: "天气符号",
    words: [
      { word: "sunny", phonetic: "/ˈsʌni/", pos: "adj.", meaning: "晴", example: "I need to remember sunny.", exampleZh: "我需要记住 晴。" },
      { word: "rainy", phonetic: "/ˈreɪni/", pos: "adj.", meaning: "雨", example: "I need to remember rainy.", exampleZh: "我需要记住 雨。" },
      { word: "snowy", phonetic: "/ˈsnəʊi/", pos: "adj.", meaning: "雪", example: "I need to remember snowy.", exampleZh: "我需要记住 雪。" },
      { word: "cloudy", phonetic: "/ˈklaʊdi/", pos: "adj.", meaning: "多云", example: "I need to remember cloudy.", exampleZh: "我需要记住 多云。" },
      { word: "windy", phonetic: "/ˈwɪndi/", pos: "adj.", meaning: "有风", example: "I need to remember windy.", exampleZh: "我需要记住 有风。" },
      { word: "stormy", phonetic: "/ˈstɔːmi/", pos: "adj.", meaning: "暴风雨", example: "I need to remember stormy.", exampleZh: "我需要记住 暴风雨。" },
      { word: "foggy", phonetic: "/ˈfɒɡi/", pos: "adj.", meaning: "有雾", example: "I need to remember foggy.", exampleZh: "我需要记住 有雾。" },
      { word: "hot", phonetic: "/hɒt/", pos: "adj.", meaning: "热", example: "I need to remember hot.", exampleZh: "我需要记住 热。" },
      { word: "cold", phonetic: "/kəʊld/", pos: "adj.", meaning: "冷", example: "I need to remember cold.", exampleZh: "我需要记住 冷。" },
      { word: "warm", phonetic: "/wɔːm/", pos: "adj.", meaning: "暖和", example: "I need to remember warm.", exampleZh: "我需要记住 暖和。" },
    ]
  },
  {
    theme: "地理方位",
    words: [
      { word: "north", phonetic: "/nɔːθ/", pos: "n.", meaning: "北", example: "I need to remember north.", exampleZh: "我需要记住 北。" },
      { word: "south", phonetic: "/saʊθ/", pos: "n.", meaning: "南", example: "I need to remember south.", exampleZh: "我需要记住 南。" },
      { word: "east", phonetic: "/iːst/", pos: "n.", meaning: "东", example: "I need to remember east.", exampleZh: "我需要记住 东。" },
      { word: "west", phonetic: "/west/", pos: "n.", meaning: "西", example: "I need to remember west.", exampleZh: "我需要记住 西。" },
      { word: "northeast", phonetic: "/nɔːθˈiːst/", pos: "n.", meaning: "东北", example: "I need to remember northeast.", exampleZh: "我需要记住 东北。" },
      { word: "northwest", phonetic: "/nɔːθˈwest/", pos: "n.", meaning: "西北", example: "I need to remember northwest.", exampleZh: "我需要记住 西北。" },
      { word: "southeast", phonetic: "/saʊθˈiːst/", pos: "n.", meaning: "东南", example: "I need to remember southeast.", exampleZh: "我需要记住 东南。" },
      { word: "southwest", phonetic: "/saʊθˈwest/", pos: "n.", meaning: "西南", example: "I need to remember southwest.", exampleZh: "我需要记住 西南。" },
      { word: "up", phonetic: "/ʌp/", pos: "adv.", meaning: "上", example: "I need to remember up.", exampleZh: "我需要记住 上。" },
      { word: "down", phonetic: "/daʊn/", pos: "adv.", meaning: "下", example: "I need to remember down.", exampleZh: "我需要记住 下。" },
    ]
  },
  {
    theme: "日常动词",
    words: [
      { word: "wake up", phonetic: "/weɪk ʌp/", pos: "v.", meaning: "起床", example: "I need to remember wake up.", exampleZh: "我需要记住 起床。" },
      { word: "get up", phonetic: "/ɡet ʌp/", pos: "v.", meaning: "起来", example: "I need to remember get up.", exampleZh: "我需要记住 起来。" },
      { word: "eat", phonetic: "/iːt/", pos: "v.", meaning: "吃", example: "I need to remember eat.", exampleZh: "我需要记住 吃。" },
      { word: "drink", phonetic: "/drɪŋk/", pos: "v.", meaning: "喝", example: "I need to remember drink.", exampleZh: "我需要记住 喝。" },
      { word: "sleep", phonetic: "/sliːp/", pos: "v.", meaning: "睡觉", example: "I need to remember sleep.", exampleZh: "我需要记住 睡觉。" },
      { word: "work", phonetic: "/wɜːk/", pos: "v.", meaning: "工作", example: "I need to remember work.", exampleZh: "我需要记住 工作。" },
      { word: "study", phonetic: "/ˈstʌdi/", pos: "v.", meaning: "学习", example: "I need to remember study.", exampleZh: "我需要记住 学习。" },
      { word: "read", phonetic: "/riːd/", pos: "v.", meaning: "读", example: "I need to remember read.", exampleZh: "我需要记住 读。" },
      { word: "write", phonetic: "/raɪt/", pos: "v.", meaning: "写", example: "I need to remember write.", exampleZh: "我需要记住 写。" },
      { word: "play", phonetic: "/pleɪ/", pos: "v.", meaning: "玩", example: "I need to remember play.", exampleZh: "我需要记住 玩。" },
    ]
  },
  {
    theme: "描述心情",
    words: [
      { word: "happy", phonetic: "/ˈhæpi/", pos: "adj.", meaning: "开心", example: "I need to remember happy.", exampleZh: "我需要记住 开心。" },
      { word: "sad", phonetic: "/sæd/", pos: "adj.", meaning: "难过", example: "I need to remember sad.", exampleZh: "我需要记住 难过。" },
      { word: "angry", phonetic: "/ˈæŋɡri/", pos: "adj.", meaning: "生气", example: "I need to remember angry.", exampleZh: "我需要记住 生气。" },
      { word: "tired", phonetic: "/ˈtaɪəd/", pos: "adj.", meaning: "累", example: "I need to remember tired.", exampleZh: "我需要记住 累。" },
      { word: "excited", phonetic: "/ɪkˈsaɪtɪd/", pos: "adj.", meaning: "兴奋", example: "I need to remember excited.", exampleZh: "我需要记住 兴奋。" },
      { word: "bored", phonetic: "/bɔːd/", pos: "adj.", meaning: "无聊", example: "I need to remember bored.", exampleZh: "我需要记住 无聊。" },
      { word: "relaxed", phonetic: "/rɪˈlækst/", pos: "adj.", meaning: "放松", example: "I need to remember relaxed.", exampleZh: "我需要记住 放松。" },
      { word: "stressed", phonetic: "/strest/", pos: "adj.", meaning: "压力大", example: "I need to remember stressed.", exampleZh: "我需要记住 压力大。" },
      { word: "surprised", phonetic: "/səˈpraɪzd/", pos: "adj.", meaning: "惊讶", example: "I need to remember surprised.", exampleZh: "我需要记住 惊讶。" },
      { word: "scared", phonetic: "/skeəd/", pos: "adj.", meaning: "害怕", example: "I need to remember scared.", exampleZh: "我需要记住 害怕。" },
    ]
  },
  {
    theme: "常见形容词",
    words: [
      { word: "big", phonetic: "/bɪɡ/", pos: "adj.", meaning: "大", example: "I need to remember big.", exampleZh: "我需要记住 大。" },
      { word: "small", phonetic: "/smɔːl/", pos: "adj.", meaning: "小", example: "I need to remember small.", exampleZh: "我需要记住 小。" },
      { word: "tall", phonetic: "/tɔːl/", pos: "adj.", meaning: "高", example: "I need to remember tall.", exampleZh: "我需要记住 高。" },
      { word: "short", phonetic: "/ʃɔːt/", pos: "adj.", meaning: "矮", example: "I need to remember short.", exampleZh: "我需要记住 矮。" },
      { word: "fast", phonetic: "/fɑːst/", pos: "adj.", meaning: "快", example: "I need to remember fast.", exampleZh: "我需要记住 快。" },
      { word: "slow", phonetic: "/sləʊ/", pos: "adj.", meaning: "慢", example: "I need to remember slow.", exampleZh: "我需要记住 慢。" },
      { word: "hot", phonetic: "/hɒt/", pos: "adj.", meaning: "热", example: "I need to remember hot.", exampleZh: "我需要记住 热。" },
      { word: "cold", phonetic: "/kəʊld/", pos: "adj.", meaning: "冷", example: "I need to remember cold.", exampleZh: "我需要记住 冷。" },
      { word: "new", phonetic: "/njuː/", pos: "adj.", meaning: "新", example: "I need to remember new.", exampleZh: "我需要记住 新。" },
      { word: "old", phonetic: "/əʊld/", pos: "adj.", meaning: "旧", example: "I need to remember old.", exampleZh: "我需要记住 旧。" },
    ]
  },
  {
    theme: "颜色英文",
    words: [
      { word: "red", phonetic: "/red/", pos: "n.", meaning: "红色", example: "I need to remember red.", exampleZh: "我需要记住 红色。" },
      { word: "orange", phonetic: "/ˈɒrɪndʒ/", pos: "n.", meaning: "橙色", example: "I need to remember orange.", exampleZh: "我需要记住 橙色。" },
      { word: "yellow", phonetic: "/ˈjeləʊ/", pos: "n.", meaning: "黄色", example: "I need to remember yellow.", exampleZh: "我需要记住 黄色。" },
      { word: "green", phonetic: "/ɡriːn/", pos: "n.", meaning: "绿色", example: "I need to remember green.", exampleZh: "我需要记住 绿色。" },
      { word: "blue", phonetic: "/bluː/", pos: "n.", meaning: "蓝色", example: "I need to remember blue.", exampleZh: "我需要记住 蓝色。" },
      { word: "purple", phonetic: "/ˈpɜːpl/", pos: "n.", meaning: "紫色", example: "I need to remember purple.", exampleZh: "我需要记住 紫色。" },
      { word: "pink", phonetic: "/pɪŋk/", pos: "n.", meaning: "粉色", example: "I need to remember pink.", exampleZh: "我需要记住 粉色。" },
      { word: "brown", phonetic: "/braʊn/", pos: "n.", meaning: "棕色", example: "I need to remember brown.", exampleZh: "我需要记住 棕色。" },
      { word: "black", phonetic: "/blæk/", pos: "n.", meaning: "黑色", example: "I need to remember black.", exampleZh: "我需要记住 黑色。" },
      { word: "white", phonetic: "/waɪt/", pos: "n.", meaning: "白色", example: "I need to remember white.", exampleZh: "我需要记住 白色。" },
    ]
  },
];

// 外刊阅读：示例外刊（学习材料）
const NEWS_ARTICLES = [
  {
    id: "beaches",
    title: "Discovering Australia's Hidden Beaches",
    source: "示例外刊 · Travel Weekly（学习材料）",
    date: "2024-11-12",
    vocab: [
      { word: "iconic", phonetic: "/aɪˈkɒnɪk/", pos: "adj.", meaning: "标志性的" },
      { word: "crowd", phonetic: "/kraʊd/", pos: "n.", meaning: "人群" },
      { word: "coastline", phonetic: "/ˈkəʊstlaɪn/", pos: "n.", meaning: "海岸线" },
      { word: "secluded", phonetic: "/sɪˈkluːdɪd/", pos: "adj.", meaning: "僻静的，隐蔽的" },
      { word: "cove", phonetic: "/kəʊv/", pos: "n.", meaning: "小海湾" },
      { word: "attract", phonetic: "/əˈtrækt/", pos: "v.", meaning: "吸引" },
      { word: "tranquil", phonetic: "/ˈtræŋkwɪl/", pos: "adj.", meaning: "宁静的" },
      { word: "escape", phonetic: "/ɪˈskeɪp/", pos: "n.", meaning: "逃避；度假地" },
      { word: "rustle", phonetic: "/ˈrʌsl/", pos: "n.", meaning: "沙沙声" },
      { word: "crash", phonetic: "/kræʃ/", pos: "n.", meaning: "撞击声（浪）" },
      { word: "venture", phonetic: "/ˈventʃə/", pos: "v.", meaning: "冒险，敢于去" },
      { word: "resort", phonetic: "/rɪˈzɔːt/", pos: "n.", meaning: "度假胜地" },
      { word: "reward", phonetic: "/rɪˈwɔːd/", pos: "n.", meaning: "回报" },
      { word: "untouched", phonetic: "/ʌnˈtʌtʃt/", pos: "adj.", meaning: "未被触碰的，原始的" },
      { word: "preserve", phonetic: "/prɪˈzɜːv/", pos: "v.", meaning: "保存，保护" }
    ],
    phrases: [
      { phrase: "away from the crowds", meaning: "远离人群" },
      { phrase: "a stretch of", meaning: "一片（延伸的…）" },
      { phrase: "as if", meaning: "仿佛，好像" },
      { phrase: "seek escapes", meaning: "寻找度假/逃避之地" },
      { phrase: "in wait", meaning: "在等待中" }
    ],
    sentences: [
      {
        sentence: "For those who are willing to venture beyond the well-known resorts, the reward is a stretch of sand that feels untouched, as if nature had been preserved exactly as it was centuries ago.",
        analysis: "主句为 the reward is a stretch of sand。句首 For those who… 是介词短语作状语，其中 who 引导定语从句修饰 those；that feels untouched 是 that 引导的定语从句修饰 sand；as if nature had been preserved… 是 as if 引导的方式状语从句（虚拟语气 had been preserved）。"
      }
    ],
    content: `<p>Australia is famous for its <span class="vocab" data-v="iconic">iconic</span> beaches, but away from the <span class="vocab" data-v="crowd">crowds</span> lies a <span class="vocab" data-v="coastline">coastline</span> of <span class="vocab" data-v="secluded">secluded</span> <span class="vocab" data-v="cove">coves</span> waiting to be explored. While Bondi and Surfers Paradise <span class="vocab" data-v="attract">attract</span> millions of visitors each year, many travellers are now seeking <span class="vocab" data-v="escape">tranquil escapes</span> where the only sound is the <span class="vocab" data-v="rustle">rustle</span> of leaves and the <span class="vocab" data-v="crash">crash</span> of waves.</p>
<p>For those who are willing to <span class="vocab" data-v="venture">venture</span> beyond the well-known <span class="vocab" data-v="resort">resorts</span>, the <span class="vocab" data-v="reward">reward</span> is a stretch of sand that feels <span class="vocab" data-v="untouched">untouched</span>, as if nature had been <span class="vocab" data-v="preserve">preserved</span> exactly as it was centuries ago.</p>`,
    translation: `澳大利亚以其标志性的海滩闻名，但在人群之外，绵延着一片僻静小海湾的海岸线，正等待人们去探索。虽然邦迪和冲浪者天堂每年吸引数百万游客，但许多旅行者现在正寻找宁静的度假地，那里唯一的声音是树叶的沙沙声与海浪的拍击声。

对于那些愿意冒险走出知名度假胜地的人来说，回报是一片仿佛未被触碰的沙滩，仿佛大自然被原封不动地保存了数个世纪。`
  },
  {
    id: "transport",
    title: "Getting Around Sydney Without a Car",
    source: "示例外刊 · City Living（学习材料）",
    date: "2024-09-30",
    vocab: [
      { word: "sprawl", phonetic: "/sprɔːl/", pos: "v.", meaning: "（城市）蔓延" },
      { word: "navigate", phonetic: "/ˈnævɪɡeɪt/", pos: "v.", meaning: "穿行，导航" },
      { word: "effortless", phonetic: "/ˈefətləs/", pos: "adj.", meaning: "轻松的" },
      { word: "rent", phonetic: "/rent/", pos: "v.", meaning: "租用" },
      { word: "network", phonetic: "/ˈnetwɜːk/", pos: "n.", meaning: "网络" },
      { word: "comprehensive", phonetic: "/ˌkɒmprɪˈhensɪv/", pos: "adj.", meaning: "全面的，综合的" },
      { word: "tap", phonetic: "/tæp/", pos: "v.", meaning: "轻触（刷卡）" },
      { word: "ferry", phonetic: "/ˈferi/", pos: "n.", meaning: "渡轮" },
      { word: "commute", phonetic: "/kəˈmjuːt/", pos: "n.", meaning: "通勤" },
      { word: "scenic", phonetic: "/ˈsiːnɪk/", pos: "adj.", meaning: "风景优美的" },
      { word: "glide", phonetic: "/ɡlaɪd/", pos: "v.", meaning: "滑行" },
      { word: "sip", phonetic: "/sɪp/", pos: "v.", meaning: "小口喝" }
    ],
    phrases: [
      { phrase: "in their own right", meaning: "凭自身资格；本身就" },
      { phrase: "tap on and off", meaning: "（交通卡）上下车刷卡" },
      { phrase: "with ease", meaning: "轻松地" },
      { phrase: "first-time visitors", meaning: "首次到访者" },
      { phrase: "past the Opera House", meaning: "经过歌剧院" }
    ],
    sentences: [
      {
        sentence: "What surprises many first-time visitors is that ferries are not merely a commute but a scenic experience in their own right, gliding past the Opera House and under the Harbour Bridge as commuters sip their morning coffee.",
        analysis: "主句为 What surprises many first-time visitors is that…，其中 What 引导主语从句，that 引导表语从句 ferries are not merely a commute but a scenic experience；in their own right 为固定搭配作状语；现在分词 gliding past… 作伴随状语；as commuters sip… 是 as 引导的时间状语从句。"
      }
    ],
    content: `<p>Sydney is a <span class="vocab" data-v="sprawl">sprawling</span> city, yet you can <span class="vocab" data-v="navigate">navigate</span> it <span class="vocab" data-v="effortless">effortlessly</span> without ever <span class="vocab" data-v="rent">renting</span> a car. The <span class="vocab" data-v="network">network</span> of trains, buses, ferries and light rail is <span class="vocab" data-v="comprehensive">comprehensive</span>, and an Opal card lets you <span class="vocab" data-v="tap">tap</span> on and off with ease.</p>
<p>What surprises many first-time visitors is that <span class="vocab" data-v="ferry">ferries</span> are not merely a <span class="vocab" data-v="commute">commute</span> but a <span class="vocab" data-v="scenic">scenic</span> experience in their own right, <span class="vocab" data-v="glide">gliding</span> past the Opera House and under the Harbour Bridge as commuters <span class="vocab" data-v="sip">sip</span> their morning coffee.</p>`,
    translation: `悉尼是一座 sprawling（蔓延的大）城市，但即使不租车，你也能轻松穿行。火车、巴士、渡轮与轻轨组成的网络十分全面，用一张 Opal 卡就能轻松上下车刷卡。

让许多首次到访者惊讶的是，渡轮不只是一种通勤方式，其本身就是一种风景体验——它滑过歌剧院、穿过海港大桥，而通勤者正小口喝着晨间咖啡。`
  },
  {
    id: "slang",
    title: "Aussie Slang That Leaves Visitors Puzzled",
    source: "示例外刊 · Culture Notes（学习材料）",
    date: "2024-08-18",
    vocab: [
      { word: "overhear", phonetic: "/ˌəʊvəˈhɪə/", pos: "v.", meaning: "偶然听到" },
      { word: "shrimp", phonetic: "/ʃrɪmp/", pos: "n.", meaning: "虾" },
      { word: "confuse", phonetic: "/kənˈfjuːz/", pos: "v.", meaning: "使困惑" },
      { word: "barbecue", phonetic: "/ˈbɑːbɪkjuː/", pos: "n.", meaning: "烧烤" },
      { word: "pepper", phonetic: "/ˈpepə/", pos: "v.", meaning: "布满（be peppered with）" },
      { word: "abbreviation", phonetic: "/əˌbriːviˈeɪʃn/", pos: "n.", meaning: "缩写" },
      { word: "playful", phonetic: "/ˈpleɪfl/", pos: "adj.", meaning: "俏皮的" },
      { word: "nickname", phonetic: "/ˈnɪkneɪm/", pos: "n.", meaning: "昵称" },
      { word: "baffle", phonetic: "/ˈbæfl/", pos: "v.", meaning: "使困惑" },
      { word: "uninitiated", phonetic: "/ˌʌnɪˈnɪʃieɪtɪd/", pos: "n.", meaning: "门外汉（the + 形容词）" },
      { word: "expression", phonetic: "/ɪkˈspreʃn/", pos: "n.", meaning: "表达，短语" },
      { word: "grammar", phonetic: "/ˈɡræmə/", pos: "n.", meaning: "语法" },
      { word: "familiarity", phonetic: "/fəˌmɪliˈærəti/", pos: "n.", meaning: "熟悉" },
      { word: "prize", phonetic: "/praɪz/", pos: "v.", meaning: "珍视" },
      { word: "easygoing", phonetic: "/ˈiːziɡəʊɪŋ/", pos: "adj.", meaning: "随和的" },
      { word: "banter", phonetic: "/ˈbæntə/", pos: "n.", meaning: "玩笑，调侃" },
      { word: "strategy", phonetic: "/ˈstrætədʒi/", pos: "n.", meaning: "策略" }
    ],
    phrases: [
      { phrase: "throw another shrimp on the barbie", meaning: "再烤一只虾（经典澳式表达）" },
      { phrase: "be peppered with", meaning: "布满，充满" },
      { phrase: "less about A than about B", meaning: "与其说 A，不如说 B" },
      { phrase: "join in", meaning: "参与，加入" },
      { phrase: "the uninitiated", meaning: "门外汉，新手" }
    ],
    sentences: [
      {
        sentence: "Understanding these expressions is less about grammar than about familiarity with a culture that prizes easygoing banter, so the best strategy is simply to listen, laugh, and join in.",
        analysis: "主句为 Understanding these expressions is less about grammar than about familiarity…，主语是动名词短语 Understanding these expressions；less about A than about B 表示「与其说 A 不如说 B」；with a culture that prizes… 是介词短语作 familiarity 的后置定语，内含 that 引导的定语从句；so 引导结果状语从句。"
      }
    ],
    content: `<p>If you <span class="vocab" data-v="overhear">overhear</span> locals say "throw another <span class="vocab" data-v="shrimp">shrimp</span> on the barbie", don't be <span class="vocab" data-v="confuse">confused</span> — they are simply inviting you to a <span class="vocab" data-v="barbecue">barbecue</span>. Australian English is <span class="vocab" data-v="pepper">peppered</span> with <span class="vocab" data-v="abbreviation">abbreviations</span> and <span class="vocab" data-v="playful">playful</span> <span class="vocab" data-v="nickname">nicknames</span> that can <span class="vocab" data-v="baffle">baffle</span> the <span class="vocab" data-v="uninitiated">uninitiated</span>.</p>
<p>Understanding these <span class="vocab" data-v="expression">expressions</span> is less about <span class="vocab" data-v="grammar">grammar</span> than about <span class="vocab" data-v="familiarity">familiarity</span> with a culture that <span class="vocab" data-v="prize">prizes</span> <span class="vocab" data-v="easygoing">easygoing</span> <span class="vocab" data-v="banter">banter</span>, so the best <span class="vocab" data-v="strategy">strategy</span> is simply to listen, laugh, and join in.</p>`,
    translation: `如果你偶然听到当地人说「再往烤架上扔只虾」，别困惑——他们只是邀请你去烧烤。澳大利亚英语充满了缩写和俏皮的昵称，会让门外汉摸不着头脑。

理解这些表达，与其说关乎语法，不如说关乎对一种文化的熟悉——这个文化珍视随和的调侃。所以最佳策略就是听、笑，然后加入其中。`
  },
  {
    id: "kangaroo",
    title: "Why Kangaroos Hop and Koalas Sleep So Much",
    source: "示例外刊 · Wildlife Notes（学习材料）",
    date: "2024-10-05",
    vocab: [
      { word: "hop", phonetic: "/hɒp/", pos: "v.", meaning: "单脚跳；弹跳" },
      { word: "grip", phonetic: "/ɡrɪp/", pos: "n.", meaning: "抓力" },
      { word: "digest", phonetic: "/daɪˈdʒest/", pos: "v.", meaning: "消化" },
      { word: "efficient", phonetic: "/ɪˈfɪʃnt/", pos: "adj.", meaning: "高效的" },
      { word: "arid", phonetic: "/ˈærɪd/", pos: "adj.", meaning: "干旱的" },
      { word: "unique", phonetic: "/juˈniːk/", pos: "adj.", meaning: "独特的" },
      { word: "sleepy", phonetic: "/ˈsliːpi/", pos: "adj.", meaning: "困倦的" },
      { word: "eucalyptus", phonetic: "/ˌjuːkəˈlɪptəs/", pos: "n.", meaning: "桉树" },
      { word: "toxin", phonetic: "/ˈtɒksɪn/", pos: "n.", meaning: "毒素" },
      { word: "digestive", phonetic: "/daɪˈdʒestɪv/", pos: "adj.", meaning: "消化的" },
      { word: "stretch", phonetic: "/stretʃ/", pos: "n.", meaning: "连续的一段时间" },
      { word: "energy", phonetic: "/ˈenədʒi/", pos: "n.", meaning: "能量" }
    ],
    phrases: [
      { phrase: "at a time", meaning: "一次，每次" },
      { phrase: "over long distances", meaning: "长距离" },
      { phrase: "low in", meaning: "含量低" },
      { phrase: "spend hours doing", meaning: "花数小时做某事" },
      { phrase: "save energy", meaning: "节省能量" }
    ],
    sentences: [
      {
        sentence: "The koala, by contrast, spends up to 22 hours a day sleeping, mostly because its eucalyptus diet is so low in nutrition that digesting the leaves forces the animal to rest and save energy between naps.",
        analysis: "主句为 The koala spends up to 22 hours a day sleeping。because 引导原因状语从句，从句主干为 its eucalyptus diet is so low in nutrition that…，其中 that 引导结果状语从句 digesting the leaves forces the animal to rest and save energy between naps。between naps 为时间状语。"
      }
    ],
    content: `<p>Kangaroos are <span class="vocab" data-v="unique">unique</span> in the way they <span class="vocab" data-v="hop">hop</span>: their strong back legs and tail give them excellent <span class="vocab" data-v="grip">grip</span> and balance, allowing them to <span class="vocab" data-v="digest">digest</span> tough grass in an <span class="vocab" data-v="efficient">efficient</span> way while moving across <span class="vocab" data-v="arid">arid</span> Australian land.</p>
<p>The koala, by contrast, looks permanently <span class="vocab" data-v="sleepy">sleepy</span> because it lives on <span class="vocab" data-v="eucalyptus">eucalyptus</span> leaves, which contain mild <span class="vocab" data-v="toxin">toxins</span> that take a long time for the <span class="vocab" data-v="digestive">digestive</span> system to process. A koala can <span class="vocab" data-v="stretch">stretch</span> its <span class="vocab" data-v="energy">energy</span> budget by sleeping up to 22 hours a day.</p>`,
    translation: `袋鼠跳跃的方式独一无二：强壮的后腿和尾巴提供出色的抓地力与平衡，让它们在跨越澳大利亚干旱土地时能高效地消化粗硬的草。

相比之下，考拉看起来总是困倦，因为它们以桉树叶为食，桉树叶含有温和的毒素，消化系统需要很长时间才能处理。考拉一天最多睡 22 个小时来节省能量。`
  },
  {
    id: "great-ocean",
    title: "Driving the Great Ocean Road",
    source: "示例外刊 · Road Trip Diary（学习材料）",
    date: "2024-09-14",
    vocab: [
      { word: "coastal", phonetic: "/ˈkəʊstl/", pos: "adj.", meaning: "沿海的" },
      { word: "scenic", phonetic: "/ˈsiːnɪk/", pos: "adj.", meaning: "风景优美的" },
      { word: "limestone", phonetic: "/ˈlaɪmstəʊn/", pos: "n.", meaning: "石灰岩" },
      { word: "stack", phonetic: "/stæk/", pos: "n.", meaning: "（海蚀）柱" },
      { word: "cliff", phonetic: "/klɪf/", pos: "n.", meaning: "悬崖" },
      { word: "breathtaking", phonetic: "/ˈbreθteɪkɪŋ/", pos: "adj.", meaning: "令人屏息的" },
      { word: "unforgettable", phonetic: "/ˌʌnfəˈɡetəbl/", pos: "adj.", meaning: "难忘的" },
      { word: "wander", phonetic: "/ˈwɒndə/", pos: "v.", meaning: "漫步" },
      { word: "stretch", phonetic: "/stretʃ/", pos: "n.", meaning: "一段路/距离" },
      { word: "rainforest", phonetic: "/ˈreɪnfɒrɪst/", pos: "n.", meaning: "雨林" },
      { word: "rustle", phonetic: "/ˈrʌsl/", pos: "n.", meaning: "沙沙声" },
      { word: "horizon", phonetic: "/həˈraɪzn/", pos: "n.", meaning: "地平线" }
    ],
    phrases: [
      { phrase: "wind along", meaning: "蜿蜒延伸" },
      { phrase: "rise out of", meaning: "从…中升起" },
      { phrase: "look out over", meaning: "眺望" },
      { phrase: "in the distance", meaning: "远处" },
      { phrase: "stop for a bite", meaning: "停下来吃点东西" }
    ],
    sentences: [
      {
        sentence: "Built by returned soldiers in the 1930s, the road winds along the southern coast, offering one breathtaking view after another, and no matter where you stop, the ocean seems to rise out of the cliffs and meet the horizon in a single, endless line.",
        analysis: "句首过去分词短语 Built by… 作状语。主干为 the road winds along the southern coast, offering one breathtaking view after another；offering… 为现在分词作伴随状语。and 连接并列句 no matter where you stop, the ocean seems to rise out of the cliffs and meet the horizon…；no matter where 引导让步状语从句；a single, endless line 为同位语，补充说明这条线的样子。"
      }
    ],
    content: `<p>The Great Ocean Road is one of the world's most famous <span class="vocab" data-v="coastal">coastal</span> drives, a <span class="vocab" data-v="scenic">scenic</span> <span class="vocab" data-v="stretch">stretch</span> that <span class="vocab" data-v="wind along">winds along</span> Victoria's southern shore. The Twelve Apostles — giant <span class="vocab" data-v="limestone">limestone</span> <span class="vocab" data-v="stack">stacks</span> that <span class="vocab" data-v="rise out of">rise out of</span> the sea — draw photographers from across the globe.</p>
<p>Built by returned soldiers in the 1930s, the road is an <span class="vocab" data-v="unforgettable">unforgettable</span> place to <span class="vocab" data-v="wander">wander</span> on foot, with <span class="vocab" data-v="rainforest">rainforest</span> walks where the only sound is the <span class="vocab" data-v="rustle">rustle</span> of leaves and the <span class="vocab" data-v="breathtaking">breathtaking</span> sight of the ocean meeting the <span class="vocab" data-v="cliff">cliffs</span> at the <span class="vocab" data-v="horizon">horizon</span> in the distance.</p>`,
    translation: `大洋路是世界上最著名的沿海自驾路线之一，它沿着维多利亚州南岸蜿蜒。十二门徒——矗立于海中的巨型石灰岩柱——吸引着全球摄影师。

这条路由一战归国的士兵建于 1930 年代，是徒步漫游的难忘之地。沿途有雨林步道，耳边只有树叶的沙沙声，眼前是远处大海与悬崖在地平线相接的绝美景色。`
  },
  {
    id: "cafe",
    title: "Why Every Australian City Has a Great Café",
    source: "示例外刊 · Food & City（学习材料）",
    date: "2024-10-22",
    vocab: [
      { word: "café", phonetic: "/ˈkæfeɪ/", pos: "n.", meaning: "咖啡馆" },
      { word: "barista", phonetic: "/bəˈriːstə/", pos: "n.", meaning: "咖啡师" },
      { word: "brew", phonetic: "/bruː/", pos: "v.", meaning: "冲泡" },
      { word: "latte", phonetic: "/ˈlæteɪ/", pos: "n.", meaning: "拿铁" },
      { word: "artisan", phonetic: "/ˈɑːtɪzæn/", pos: "n.", meaning: "工匠，手艺人" },
      { word: "culture", phonetic: "/ˈkʌltʃə/", pos: "n.", meaning: "文化" },
      { word: "compete", phonetic: "/kəmˈpiːt/", pos: "v.", meaning: "竞争" },
      { word: "regular", phonetic: "/ˈreɡjələ/", pos: "n.", meaning: "常客" },
      { word: "hang", phonetic: "/hæŋ/", pos: "v.", meaning: "闲逛" },
      { word: "hidden", phonetic: "/ˈhɪdn/", pos: "adj.", meaning: "隐藏的" },
      { word: "lane", phonetic: "/leɪn/", pos: "n.", meaning: "小巷" },
      { word: "neighborhood", phonetic: "/ˈneɪbəhʊd/", pos: "n.", meaning: "街区" }
    ],
    phrases: [
      { phrase: "take pride in", meaning: "对…感到自豪" },
      { phrase: "on every corner", meaning: "在每个角落" },
      { phrase: "a flat white", meaning: "一杯澳白" },
      { phrase: "pour-over", meaning: "手冲咖啡" },
      { phrase: "down the road", meaning: "沿着路；不远处" }
    ],
    sentences: [
      {
        sentence: "What makes Australian café culture so special is not only the quality of the coffee, but the small details: handwritten menus on chalkboards, friendly regulars who know your name, and baristas who remember exactly how you take your flat white.",
        analysis: "主句为 What makes Australian café culture so special is not only the quality of the coffee, but the small details:…，What 引导主语从句，is not only…but… 构成并列谓语；冒号后为 small details 的同位语，三个名词短语 handwritten menus / friendly regulars / baristas 共同展开细节，其中 friendly regulars 和 baristas 各带一个 who 引导的定语从句。"
      }
    ],
    content: `<p>Walk down almost any <span class="vocab" data-v="lane">lane</span> in Melbourne or Sydney and you will find a <span class="vocab" data-v="café">café</span> on every corner, each with its own <span class="vocab" data-v="barista">barista</span> who <span class="vocab" data-v="take pride in">takes pride in</span> <span class="vocab" data-v="brew">brewing</span> the perfect <span class="vocab" data-v="latte">latte</span>. Australians are passionate about <span class="vocab" data-v="artisan">artisan</span> coffee, and small cafés <span class="vocab" data-v="compete">compete</span> with one another to offer the best beans and the warmest welcome.</p>
<p>What makes Australian <span class="vocab" data-v="culture">café culture</span> so special is not only the quality of the coffee, but the small details: <span class="vocab" data-v="hidden">hidden</span> spots tucked into quiet <span class="vocab" data-v="neighborhood">neighborhoods</span>, and <span class="vocab" data-v="regular">regulars</span> who <span class="vocab" data-v="hang">hang</span> out for hours, chatting with friends between sips.</p>`,
    translation: `走在墨尔本或悉尼的几乎任何小巷里，你都会在每个角落发现一家咖啡馆，每家都有自己的咖啡师，他们以冲泡出一杯完美的拿铁为傲。澳大利亚人对精品咖啡充满热情，小咖啡馆互相竞争，只为提供最好的豆子与最温暖的款待。

澳大利亚咖啡文化的特别之处不仅在于咖啡的品质，更在于那些小细节：藏于安静街区中的隐秘小店，以及闲坐数小时、小口啜饮间与朋友聊天的常客们。`
  },
  {
    id: "weather",
    title: "Reading the Southern Sky: Weather Signs in the Outback",
    source: "示例外刊 · Outback Field Notes（学习材料）",
    date: "2024-08-29",
    vocab: [
      { word: "outback", phonetic: "/ˈaʊtbæk/", pos: "n.", meaning: "内陆地区" },
      { word: "cloud", phonetic: "/klaʊd/", pos: "n.", meaning: "云" },
      { word: "distant", phonetic: "/ˈdɪstənt/", pos: "adj.", meaning: "遥远的" },
      { word: "swell", phonetic: "/swel/", pos: "v.", meaning: "膨胀，涌起" },
      { word: "humidity", phonetic: "/hjuːˈmɪdəti/", pos: "n.", meaning: "湿度" },
      { word: "thunderstorm", phonetic: "/ˈθʌndəstɔːm/", pos: "n.", meaning: "雷暴" },
      { word: "rainbow", phonetic: "/ˈreɪnbəʊ/", pos: "n.", meaning: "彩虹" },
      { word: "silhouette", phonetic: "/ˌsɪluˈet/", pos: "n.", meaning: "轮廓" },
      { word: "kookaburra", phonetic: "/ˈkʊkəbʌrə/", pos: "n.", meaning: "笑翠鸟" },
      { word: "predict", phonetic: "/prɪˈdɪkt/", pos: "v.", meaning: "预测" },
      { word: "boundary", phonetic: "/ˈbaʊndri/", pos: "n.", meaning: "边界" }
    ],
    phrases: [
      { phrase: "pile up", meaning: "堆积" },
      { phrase: "in the distance", meaning: "远处" },
      { phrase: "set in", meaning: "到来；降临" },
      { phrase: "morning chorus", meaning: "清晨的鸟鸣" },
      { phrase: "give way to", meaning: "让位于" }
    ],
    sentences: [
      {
        sentence: "When distant clouds pile up on the horizon and the air suddenly feels heavier, that is often the moment a dry day gives way to a sudden afternoon thunderstorm, and the bright rainbows that follow are as brief as they are unforgettable.",
        analysis: "When 引导时间状语从句，主句为 that is often the moment a dry day gives way to a sudden afternoon thunderstorm，其中 that 指代前面整个 When 从句；the moment 后省略 that，引导同位语从句 a dry day gives way to a sudden afternoon thunderstorm；and 连接并列句 the bright rainbows… are as brief as they are unforgettable，其中 as…as… 为同级比较，第二个 as 后接 they are unforgettable。"
      }
    ],
    content: `<p>In the <span class="vocab" data-v="outback">outback</span>, the sky is the biggest weather report you have. <span class="vocab" data-v="distant">Distant</span> <span class="vocab" data-v="cloud">clouds</span> that <span class="vocab" data-v="pile up">pile up</span> along the <span class="vocab" data-v="boundary">boundary</span> of the horizon often mean a <span class="vocab" data-v="thunderstorm">thunderstorm</span> is on its way. Travellers can <span class="vocab" data-v="predict">predict</span> a storm just by looking at the colour of the air and feeling the <span class="vocab" data-v="humidity">humidity</span> <span class="vocab" data-v="swell">swell</span>.</p>
<p>When a brief afternoon storm passes, the most magical moment is the <span class="vocab" data-v="rainbow">rainbow</span> that arcs across the red dust, while the <span class="vocab" data-v="silhouette">silhouette</span> of a <span class="vocab" data-v="kookaburra">kookaburra</span> on a branch marks the return of the <span class="vocab" data-v="morning chorus">morning chorus</span> at dusk.</p>`,
    translation: `在澳洲内陆，天空就是你能看到的最宏大的天气预报。沿地平线堆积的远处云层，常常意味着雷暴即将来临。旅行者只要看空气的颜色、感受湿度的变化，就能预测风暴。

当短暂的午后阵雨过去，最神奇的时刻便是横跨红土的那道彩虹，而枝头笑翠鸟的剪影，正标志着黄昏鸟鸣的回归。`
  },
  {
    id: "wildfire",
    title: "Bushfire Season: How Australians Prepare",
    source: "示例外刊 · Community Report（学习材料）",
    date: "2024-12-01",
    vocab: [
      { word: "bushfire", phonetic: "/ˈbʊʃˌfaɪə/", pos: "n.", meaning: "丛林大火" },
      { word: "season", phonetic: "/ˈsiːzn/", pos: "n.", meaning: "季节" },
      { word: "prepare", phonetic: "/prɪˈpeə/", pos: "v.", meaning: "准备" },
      { word: "alert", phonetic: "/əˈlɜːt/", pos: "n.", meaning: "警报" },
      { word: "evacuate", phonetic: "/ɪˈvækjueɪt/", pos: "v.", meaning: "疏散" },
      { word: "emergency", phonetic: "/ɪˈmɜːdʒənsi/", pos: "n.", meaning: "紧急情况" },
      { word: "survive", phonetic: "/səˈvaɪv/", pos: "v.", meaning: "生存" },
      { word: "resident", phonetic: "/ˈrezɪdənt/", pos: "n.", meaning: "居民" },
      { word: "rural", phonetic: "/ˈrʊərəl/", pos: "adj.", meaning: "农村的" },
      { word: "drought", phonetic: "/draʊt/", pos: "n.", meaning: "干旱" },
      { word: "fierce", phonetic: "/fɪəs/", pos: "adj.", meaning: "猛烈的" },
      { word: "defend", phonetic: "/dɪˈfend/", pos: "v.", meaning: "保护，防御" }
    ],
    phrases: [
      { phrase: "on high alert", meaning: "高度警惕" },
      { phrase: "in case of", meaning: "万一" },
      { phrase: "stock up on", meaning: "囤积" },
      { phrase: "fire ban", meaning: "禁火令" },
      { phrase: "take shelter", meaning: "躲避，避难" }
    ],
    sentences: [
      {
        sentence: "Every summer, rural communities are put on high alert, and residents are encouraged to stock up on water, prepare a go-bag, and decide in advance which route they will take if the order to evacuate finally comes.",
        analysis: "主句为 residents are encouraged to… and decide in advance which route they will take。put on high alert 为被动语态，与 communities 是被动关系（community 与 residents 通过 and 并列）。三个不定式 stock up on water / prepare a go-bag / decide in advance 共同作主语补足语；decise 后的 which route they will take 是 decide 的宾语从句，内含 if 引导的条件状语从句 the order to evacuate finally comes。"
      }
    ],
    content: `<p>Every Australian <span class="vocab" data-v="season">summer</span> brings a <span class="vocab" data-v="bushfire">bushfire</span> <span class="vocab" data-v="season">season</span>, and <span class="vocab" data-v="rural">rural</span> families <span class="vocab" data-v="prepare">prepare</span> early. <span class="vocab" data-v="drought">Drought</span> and <span class="vocab" data-v="fierce">fierce</span> winds can turn a small spark into a <span class="vocab" data-v="fierce">fierce</span> blaze within hours, so everyone stays <span class="vocab" data-v="on high alert">on high alert</span> from December to March.</p>
<p>Local councils send out <span class="vocab" data-v="alert">alerts</span> and <span class="vocab" data-v="fire ban">fire bans</span>, and <span class="vocab" data-v="resident">residents</span> are told to <span class="vocab" data-v="stock up on">stock up on</span> water and to <span class="vocab" data-v="defend">defend</span> their homes when needed. If the order comes to <span class="vocab" data-v="evacuate">evacuate</span>, the safest plan is to leave early and <span class="vocab" data-v="take shelter">take shelter</span> in a town centre where <span class="vocab" data-v="emergency">emergency</span> services can help families <span class="vocab" data-v="survive">survive</span>.</p>`,
    translation: `每年澳大利亚的夏天都会迎来丛林大火季，农村家庭很早就开始准备。干旱和强风能在一小时内把一点火星变成凶猛的大火，所以从 12 月到次年 3 月，所有人都保持高度警惕。

当地市政会发布警报和禁火令，居民被要求囤积用水，必要时保护自己的家。一旦收到疏散命令，最安全的做法就是尽早撤离，到镇中心的避难点，那里有应急服务能帮助家庭安全度过。`
  },
  {
    id: "opera",
    title: "A Morning at the Sydney Opera House",
    source: "示例外刊 · City Diary（学习材料）",
    date: "2024-07-15",
    vocab: [
      { word: "iconic", phonetic: "/aɪˈkɒnɪk/", pos: "adj.", meaning: "标志性的" },
      { word: "harbour", phonetic: "/ˈhɑːbə/", pos: "n.", meaning: "港口" },
      { word: "shell", phonetic: "/ʃel/", pos: "n.", meaning: "贝壳" },
      { word: "architect", phonetic: "/ˈɑːkɪtekt/", pos: "n.", meaning: "建筑师" },
      { word: "design", phonetic: "/dɪˈzaɪn/", pos: "n.", meaning: "设计" },
      { word: "performance", phonetic: "/pəˈfɔːməns/", pos: "n.", meaning: "表演" },
      { word: "stage", phonetic: "/steɪdʒ/", pos: "n.", meaning: "舞台" },
      { word: "tour", phonetic: "/tʊə/", pos: "n.", meaning: "游览" },
      { word: "sunrise", phonetic: "/ˈsʌnraɪz/", pos: "n.", meaning: "日出" },
      { word: "glide", phonetic: "/ɡlaɪd/", pos: "v.", meaning: "滑行" },
      { word: "gentle", phonetic: "/ˈdʒentl/", pos: "adj.", meaning: "轻柔的" },
      { word: "amaze", phonetic: "/əˈmeɪz/", pos: "v.", meaning: "使惊叹" }
    ],
    phrases: [
      { phrase: "rise from", meaning: "从…升起" },
      { phrase: "in the early morning", meaning: "清晨" },
      { phrase: "catch the light", meaning: "捕捉光线" },
      { phrase: "one of the most", meaning: "最…之一" },
      { phrase: "on the waterfront", meaning: "在滨水区" }
    ],
    sentences: [
      {
        sentence: "Designed by the Danish architect Jørn Utzon, the building is meant to look like a series of sails or shells rising from the harbour, and whether you visit at sunrise or at sunset, the white shapes seem to change colour with every passing cloud.",
        analysis: "主句为 the building is meant to look like a series of sails or shells rising from the harbour。Designed by… 为过去分词短语作状语。and 连接并列句 whether you visit at sunrise or at sunset, the white shapes seem to change colour with every passing cloud，其中 whether…or… 引导让步状语从句，the white shapes 为主句主语，to change 为 seem to do 的搭配。"
      }
    ],
    content: `<p>The Sydney Opera House is one of the most <span class="vocab" data-v="iconic">iconic</span> buildings in the world. Rising above the <span class="vocab" data-v="harbour">harbour</span>, its white <span class="vocab" data-v="shell">shells</span> designed by the Danish <span class="vocab" data-v="architect">architect</span> Jørn Utzon have welcomed visitors for almost fifty years. Inside, a <span class="vocab" data-v="performance">performance</span> on the main <span class="vocab" data-v="stage">stage</span> can hold a thousand guests.</p>
<p>A <span class="vocab" data-v="tour">tour</span> <span class="vocab" data-v="in the early morning">in the early morning</span> is the best time to <span class="vocab" data-v="amaze">amaze</span> yourself: the <span class="vocab" data-v="sunrise">sunrise</span> lights the <span class="vocab" data-v="design">design</span> with a <span class="vocab" data-v="gentle">gentle</span> pink, while ferries <span class="vocab" data-v="glide">glide</span> past on the waterfront.</p>`,
    translation: `悉尼歌剧院是世界上最标志性的建筑之一。它矗立于港口之上，白色「贝壳」由丹麦建筑师 Jørn Utzon 设计，五十年来迎接着四方来客。内部主舞台可容纳一千名观众同时观看演出。

清晨的参观最能让人惊叹：日出把整座建筑染上柔和的粉色，渡轮则在滨水区缓缓滑过。`
  },
  {
    id: "suburb",
    title: "Life in an Australian Suburb",
    source: "示例外刊 · Living Abroad（学习材料）",
    date: "2024-06-18",
    vocab: [
      { word: "suburb", phonetic: "/ˈsʌbɜːb/", pos: "n.", meaning: "郊区" },
      { word: "neighbour", phonetic: "/ˈneɪbə/", pos: "n.", meaning: "邻居" },
      { word: "backyard", phonetic: "/ˌbækˈjɑːd/", pos: "n.", meaning: "后院" },
      { word: "garage", phonetic: "/ˈɡærɑːʒ/", pos: "n.", meaning: "车库" },
      { word: "community", phonetic: "/kəˈmjuːnəti/", pos: "n.", meaning: "社区" },
      { word: "school", phonetic: "/skuːl/", pos: "n.", meaning: "学校" },
      { word: "kindy", phonetic: "/ˈkɪndi/", pos: "n.", meaning: "幼儿园（澳式）" },
      { word: "Saturday morning", phonetic: "/ˌsætədeɪ ˈmɔːnɪŋ/", pos: "n.", meaning: "周六上午" },
      { word: "sport", phonetic: "/spɔːt/", pos: "n.", meaning: "体育运动" },
      { word: "chat", phonetic: "/tʃæt/", pos: "v.", meaning: "聊天" },
      { word: "barbecue", phonetic: "/ˈbɑːbɪkjuː/", pos: "n.", meaning: "烧烤" },
      { word: "fence", phonetic: "/fens/", pos: "n.", meaning: "篱笆" }
    ],
    phrases: [
      { phrase: "next door", meaning: "隔壁" },
      { phrase: "drop by", meaning: "顺便拜访" },
      { phrase: "over the fence", meaning: "隔着篱笆" },
      { phrase: "a short drive", meaning: "短途车程" },
      { phrase: "put the bin out", meaning: "把垃圾桶推出去" }
    ],
    sentences: [
      {
        sentence: "Suburb life is shaped as much by the local primary school and the Saturday morning sports match as by the quiet streets, and many newcomers are surprised to find that the easiest way to make friends here is simply to lean over the fence and say g'day.",
        analysis: "主句为 Suburb life is shaped as much by the local primary school and the Saturday morning sports match as by the quiet streets，其中 as much…as… 为同级比较，连接两个 by 短语。and 连接的并列句中 many newcomers are surprised to find that…，that 引导宾语从句 the easiest way to make friends here is simply to lean over the fence and say g'day；不定式 to lean…and say… 作表语，way 后接不定式作定语。"
      }
    ],
    content: `<p>An Australian <span class="vocab" data-v="suburb">suburb</span> is a place where most people know their <span class="vocab" data-v="neighbour">neighbours</span> by name. Houses have wide <span class="vocab" data-v="backyard">backyards</span> and a big <span class="vocab" data-v="garage">garage</span>, and the <span class="vocab" data-v="community">community</span> often gathers at the local <span class="vocab" data-v="school">school</span> or <span class="vocab" data-v="kindy">kindy</span>.</p>
<p>On a typical <span class="vocab" data-v="Saturday morning">Saturday morning</span>, kids head to <span class="vocab" data-v="sport">sport</span> while parents <span class="vocab" data-v="chat">chat</span> over coffee. The <span class="vocab" data-v="fence">fence</span> is a famous <span class="vocab" data-v="barbecue">barbecue</span> spot, where a quick hello often turns into a weekend invitation.</p>`,
    translation: `澳大利亚的郊区是那种大多数人都能叫出邻居名字的地方。房子有宽敞的后院和大车库，社区经常在本地学校或幼儿园聚集。

一个典型的周六上午，孩子们去参加体育活动，父母们则边喝咖啡边聊天。篱笆边就是著名的烧烤点，一句简单的问候常常就变成一个周末邀约。`
  },
  {
    id: "tipping",
    title: "Tipping in Australia: A Short Guide",
    source: "示例外刊 · Travel Etiquette（学习材料）",
    date: "2024-05-30",
    vocab: [
      { word: "tip", phonetic: "/tɪp/", pos: "n.", meaning: "小费" },
      { word: "service", phonetic: "/ˈsɜːvɪs/", pos: "n.", meaning: "服务" },
      { word: "wage", phonetic: "/weɪdʒ/", pos: "n.", meaning: "工资" },
      { word: "round", phonetic: "/raʊnd/", pos: "n.", meaning: "一轮（饮料）" },
      { word: "cab", phonetic: "/kæb/", pos: "n.", meaning: "出租车" },
      { word: "fare", phonetic: "/feə/", pos: "n.", meaning: "车费" },
      { word: "include", phonetic: "/ɪnˈkluːd/", pos: "v.", meaning: "包含" },
      { word: "minimum", phonetic: "/ˈmɪnɪməm/", pos: "n.", meaning: "最低" },
      { word: "polite", phonetic: "/pəˈlaɪt/", pos: "adj.", meaning: "礼貌的" },
      { word: "expect", phonetic: "/ɪkˈspekt/", pos: "v.", meaning: "期待" },
      { word: "appreciate", phonetic: "/əˈpriːʃieɪt/", pos: "v.", meaning: "感激" },
      { word: "common", phonetic: "/ˈkɒmən/", pos: "adj.", meaning: "常见的" }
    ],
    phrases: [
      { phrase: "be included", meaning: "已包含" },
      { phrase: "round up", meaning: "向上取整" },
      { phrase: "no need to", meaning: "不需要" },
      { phrase: "as a sign of", meaning: "作为…的标志" },
      { phrase: "good service", meaning: "优质服务" }
    ],
    sentences: [
      {
        sentence: "Tipping is not expected as it is in the United States, because service workers in Australia are paid a fair minimum wage, so leaving a few coins or rounding up the bill is seen as a polite thank-you, never an obligation.",
        analysis: "主句为 Tipping is not expected as it is in the United States, because service workers in Australia are paid a fair minimum wage，其中 because 引导原因状语从句；so 引导结果状语从句 leaving a few coins or rounding up the bill is seen as a polite thank-you, never an obligation，其中 leaving / rounding up 是动名词作主语，is seen as 为被动语态。"
      }
    ],
    content: `<p>In Australia, <span class="vocab" data-v="tip">tipping</span> is <span class="vocab" data-v="common">not common</span>, and <span class="vocab" data-v="tip">tips</span> are not <span class="vocab" data-v="expect">expected</span> in most places. <span class="vocab" data-v="service">Service</span> workers receive a fair <span class="vocab" data-v="wage">wage</span>, so the cost of <span class="vocab" data-v="service">service</span> is usually <span class="vocab" data-v="include">included</span> in the bill.</p>
<p>If you want to show thanks, you can <span class="vocab" data-v="round up">round up</span> the <span class="vocab" data-v="fare">fare</span> of a <span class="vocab" data-v="cab">cab</span> or buy a <span class="vocab" data-v="round">round</span> of drinks for the table. It's a small, <span class="vocab" data-v="polite">polite</span> gesture that staff <span class="vocab" data-v="appreciate">appreciate</span>.</p>`,
    translation: `在澳大利亚，小费并不常见，大多数地方不期待收到小费。服务行业从业者能拿到合理的最低工资，所以服务费通常已包含在账单里。

如果你想表达感谢，可以把出租车费向上取整，或为同桌的人买一轮饮料。这是个小小的、礼貌的举动，员工会非常感激。`
  },
  {
    id: "opal",
    title: "Tap, Tap, Go: How the Opal Card Works",
    source: "示例外刊 · Smart Travel（学习材料）",
    date: "2024-04-21",
    vocab: [
      { word: "Opal", phonetic: "/ˈəʊpəl/", pos: "n.", meaning: "Opal 卡（悉尼交通卡）" },
      { word: "tap", phonetic: "/tæp/", pos: "v.", meaning: "轻触" },
      { word: "reader", phonetic: "/ˈriːdə/", pos: "n.", meaning: "读卡器" },
      { word: "fare", phonetic: "/feə/", pos: "n.", meaning: "车费" },
      { word: "recharge", phonetic: "/ˌriːˈtʃɑːdʒ/", pos: "v.", meaning: "充值" },
      { word: "top up", phonetic: "/tɒp ʌp/", pos: "v.", meaning: "充值" },
      { word: "concession", phonetic: "/kənˈseʃn/", pos: "n.", meaning: "优惠票" },
      { word: "weekly", phonetic: "/ˈwiːkli/", pos: "adj.", meaning: "每周的" },
      { word: "cap", phonetic: "/kæp/", pos: "n.", meaning: "上限" },
      { word: "balance", phonetic: "/ˈbæləns/", pos: "n.", meaning: "余额" },
      { word: "refund", phonetic: "/ˈriːfʌnd/", pos: "n.", meaning: "退款" }
    ],
    phrases: [
      { phrase: "top up", meaning: "充值" },
      { phrase: "tap on", meaning: "上车刷卡" },
      { phrase: "tap off", meaning: "下车刷卡" },
      { phrase: "weekly cap", meaning: "周封顶" },
      { phrase: "get a refund", meaning: "申请退款" }
    ],
    sentences: [
      {
        sentence: "One of the smartest features of the Opal system is the weekly cap, which means that no matter how many times you ride the train, bus, ferry or light rail, you will never pay more than a set amount from Monday to Sunday.",
        analysis: "主句为 One of the smartest features of the Opal system is the weekly cap, which means that…；which 引导非限制性定语从句，that 引导宾语从句 you will never pay more than a set amount from Monday to Sunday；no matter how many times you ride 为让步状语，ride 后接四个并列宾语 the train, bus, ferry or light rail。"
      }
    ],
    content: `<p>In Sydney, public transport is paid for with the <span class="vocab" data-v="Opal">Opal</span> card. To start a trip, you <span class="vocab" data-v="tap">tap</span> your card on the yellow <span class="vocab" data-v="reader">reader</span> at the station gate, and you <span class="vocab" data-v="tap off">tap off</span> when you leave. The <span class="vocab" data-v="fare">fare</span> is automatically deducted from your <span class="vocab" data-v="balance">balance</span>.</p>
<p>You can <span class="vocab" data-v="recharge">recharge</span> the card at any station or through an app. Students and seniors can apply for a <span class="vocab" data-v="concession">concession</span> card. Best of all, the <span class="vocab" data-v="weekly">weekly</span> <span class="vocab" data-v="cap">cap</span> makes sure you never spend too much in a week.</p>`,
    translation: `在悉尼，公共交通使用 Opal 卡支付。开始行程时，在车站闸机的黄色读卡器上轻触卡片；下车时再轻触一次。车费会自动从余额中扣除。

你可以在任何车站或通过 App 给卡充值。学生和长者可申请优惠卡。最棒的是，周封顶机制确保你一周内的花费不会太高。`
  },
  {
    id: "wildlife-rescue",
    title: "When You Meet a Snake on the Path",
    source: "示例外刊 · Outdoor Safety（学习材料）",
    date: "2024-03-09",
    vocab: [
      { word: "snake", phonetic: "/sneɪk/", pos: "n.", meaning: "蛇" },
      { word: "venomous", phonetic: "/ˈvenəməs/", pos: "adj.", meaning: "有毒的" },
      { word: "wander", phonetic: "/ˈwɒndə/", pos: "v.", meaning: "漫步" },
      { word: "bush", phonetic: "/bʊʃ/", pos: "n.", meaning: "灌木丛" },
      { word: "spot", phonetic: "/spɒt/", pos: "v.", meaning: "发现" },
      { word: "panic", phonetic: "/ˈpænɪk/", pos: "n.", meaning: "恐慌" },
      { word: "retreat", phonetic: "/rɪˈtriːt/", pos: "v.", meaning: "后退" },
      { word: "calm", phonetic: "/kɑːm/", pos: "adj.", meaning: "冷静的" },
      { word: "wound", phonetic: "/wuːnd/", pos: "n.", meaning: "伤口" },
      { word: "pressure", phonetic: "/ˈpreʃə/", pos: "n.", meaning: "压力" },
      { word: "bandage", phonetic: "/ˈbændɪdʒ/", pos: "n.", meaning: "绷带" },
      { word: "bite", phonetic: "/baɪt/", pos: "n.", meaning: "咬伤" }
    ],
    phrases: [
      { phrase: "back away", meaning: "后退" },
      { phrase: "give a wide berth", meaning: "保持距离，远离" },
      { phrase: "stay calm", meaning: "保持冷静" },
      { phrase: "call for help", meaning: "求助" },
      { phrase: "apply pressure", meaning: "施加压力" }
    ],
    sentences: [
      {
        sentence: "The first rule of meeting a snake is to stop, take a few deep breaths, and slowly back away without making sudden movements, because most snakes only bite when they feel cornered and have no other choice.",
        analysis: "The first rule of meeting a snake is to stop, take a few deep breaths, and slowly back away without making sudden movements 为主句，其中 to stop, take… and slowly back away 是三个并列的不定式短语作表语。because 引导原因状语从句，从句中 only…when… 表示「只有…才…」，后接 they feel cornered and have no other choice，and 连接两个并列的谓语 feel 和 have。"
      }
    ],
    content: `<p>If you <span class="vocab" data-v="wander">wander</span> into the Australian <span class="vocab" data-v="bush">bush</span>, you may <span class="vocab" data-v="spot">spot</span> a <span class="vocab" data-v="snake">snake</span> on the path. Some are <span class="vocab" data-v="venomous">venomous</span>, but most would rather <span class="vocab" data-v="retreat">retreat</span> than meet a human. The key is not to <span class="vocab" data-v="panic">panic</span> and to keep <span class="vocab" data-v="calm">calm</span>.</p>
<p>Stay still, let the snake move away, and <span class="vocab" data-v="back away">back away</span> slowly. In the rare case of a <span class="vocab" data-v="bite">bite</span>, <span class="vocab" data-v="apply pressure">apply pressure</span> with a clean <span class="vocab" data-v="bandage">bandage</span> over the <span class="vocab" data-v="wound">wound</span>, <span class="vocab" data-v="stay calm">stay calm</span>, and <span class="vocab" data-v="call for help">call for help</span> immediately.</p>`,
    translation: `如果你走进澳大利亚的灌木丛，可能会在步道上遇到蛇。其中一些有毒，但大多数宁愿躲开也不愿与人相遇。关键是不要恐慌，保持冷静。

保持不动，让蛇先离开，然后慢慢后退。极少数情况下被咬，应用干净的绷带压住伤口，保持镇定，并立即求助。`
  },
  {
    id: "barbie",
    title: "The Aussie Barbie: More Than a Barbecue",
    source: "示例外刊 · Culture Notes（学习材料）",
    date: "2024-02-04",
    vocab: [
      { word: "barbie", phonetic: "/ˈbɑːbi/", pos: "n.", meaning: "烧烤聚会" },
      { word: "snag", phonetic: "/snæɡ/", pos: "n.", meaning: "香肠" },
      { word: "kebab", phonetic: "/kəˈbæb/", pos: "n.", meaning: "烤肉串" },
      { word: "salad", phonetic: "/ˈsæləd/", pos: "n.", meaning: "沙拉" },
      { word: "tongs", phonetic: "/tɒŋz/", pos: "n.", meaning: "夹子" },
      { word: "guest", phonetic: "/ɡest/", pos: "n.", meaning: "客人" },
      { word: "bring", phonetic: "/brɪŋ/", pos: "v.", meaning: "带，带来" },
      { word: "plate", phonetic: "/pleɪt/", pos: "n.", meaning: "盘子" },
      { word: "drink", phonetic: "/drɪŋk/", pos: "n.", meaning: "饮料" },
      { word: "chat", phonetic: "/tʃæt/", pos: "n.", meaning: "聊天" },
      { word: "tradition", phonetic: "/trəˈdɪʃn/", pos: "n.", meaning: "传统" },
      { word: "easygoing", phonetic: "/ˈiːziɡəʊɪŋ/", pos: "adj.", meaning: "随和的" }
    ],
    phrases: [
      { phrase: "throw a snag on", meaning: "烤一根香肠" },
      { phrase: "bring a plate", meaning: "带一份菜" },
      { phrase: "over a beer", meaning: "边喝啤酒边…" },
      { phrase: "show up", meaning: "出现，到场" },
      { phrase: "the Aussie way", meaning: "澳洲人的方式" }
    ],
    sentences: [
      {
        sentence: "At a barbie, the host cooks the meat, the guests bring a plate, and the rest of the afternoon is filled with sunshine, music and easy chat — a simple tradition that captures the easygoing heart of Australian social life.",
        analysis: "At a barbie 为地点状语。三个并列分句 the host cooks the meat, the guests bring a plate, and the rest of the afternoon is filled with sunshine, music and easy chat 共同描述 barbie 的情景。a simple tradition that captures… 是 the rest of the afternoon 的同位语，其中 that 引导定语从句修饰 tradition；captures the easygoing heart of Australian social life 为定语从句的谓语部分。"
      }
    ],
    content: `<p>Aussies love a good <span class="vocab" data-v="barbie">barbie</span>. The host brings out the <span class="vocab" data-v="tongs">tongs</span>, the <span class="vocab" data-v="snag">snags</span>, and a few <span class="vocab" data-v="kebab">kebabs</span>. <span class="vocab" data-v="guest">Guests</span> are told to <span class="vocab" data-v="bring">bring</span> a <span class="vocab" data-v="plate">plate</span> — a <span class="vocab" data-v="salad">salad</span> or a dessert to share.</p>
<p>The <span class="vocab" data-v="drink">drinks</span> are cold, the <span class="vocab" data-v="chat">chat</span> is warm, and the afternoon drifts on in the <span class="vocab" data-v="easygoing">easygoing</span> <span class="vocab" data-v="tradition">tradition</span> of the Aussie way. No wonder visitors fall in love with it.</p>`,
    translation: `澳洲人爱烧烤。主人拿出夹子、香肠和一些肉串。客人被要求「带一份菜」——通常是沙拉或甜点。

饮料是冰的，聊天是暖的，整个下午在澳洲式的随和传统中慢慢流过。难怪游客也都会爱上它。`
  },
  // ============ 新增 16 篇外刊 ============
  {
    id: "coffee-order",
    title: "How to Order Coffee Like an Aussie",
    source: "示例外刊 · Café Talk（学习材料）",
    date: "2024-09-08",
    vocab: [
      { word: "barista", phonetic: "/bəˈriːstə/", pos: "n.", meaning: "咖啡师" },
      { word: "flat white", phonetic: "/flæt waɪt/", pos: "n.", meaning: "澳白" },
      { word: "long black", phonetic: "/lɒŋ blæk/", pos: "n.", meaning: "澳式美式" },
      { word: "cappuccino", phonetic: "/ˌkæpuˈtʃiːnəʊ/", pos: "n.", meaning: "卡布奇诺" },
      { word: "shots", phonetic: "/ʃɒts/", pos: "n.", meaning: "（咖啡）份" },
      { word: "sketchy", phonetic: "/ˈsketʃi/", pos: "adj.", meaning: "难懂的" },
      { word: "ritual", phonetic: "/ˈrɪtʃuəl/", pos: "n.", meaning: "仪式" }
    ],
    phrases: [
      { phrase: "for here or to go", meaning: "堂食还是外带" },
      { phrase: "on the side", meaning: "另上；分开放" },
      { phrase: "no worries", meaning: "没问题" }
    ],
    sentences: [
      {
        sentence: "Walk into any Australian café and you will quickly notice that the menu seems shorter and the baristas speak in shorthand, so it pays to learn the local lingo before placing your order.",
        analysis: "Walk into any Australian café 为祈使句式条件状语。主句 you will quickly notice that…，that 引导宾语从句 the menu seems shorter and the baristas speak in shorthand。so it pays to learn the local lingo 为结果分句，it 为形式主语，to learn the real lingo 为真正主语；before placing your order 为时间状语。"
      }
    ],
    content: `<p>Walk into any Australian café and you will quickly notice that the menu feels <span class="vocab" data-v="sketchy">sketchy</span> — drinks have strange names and the <span class="vocab" data-v="barista">barista</span> speaks in shorthand. Don't panic. A <span class="vocab" data-v="flat white">flat white</span> is the classic order: a small, strong coffee with smooth milk, served in a ceramic cup.</p>
<p>If you want something bigger and bolder, ask for a <span class="vocab" data-v="long black">long black</span>, which is hot water with a double espresso poured over it. Ordering coffee here is a daily <span class="vocab" data-v="ritual">ritual</span>, and like any <span class="vocab" data-v="ritual">ritual</span>, it rewards those who learn the small words. Ask for "for here or to go", add sugar "on the side", and finish with a cheerful <span class="vocab" data-v="ritual">"no worries"</span>.</p>`,
    translation: `走进任何一家澳洲咖啡馆，你会很快注意到菜单看起来让人摸不着头脑——饮料名字奇怪，咖啡师说话简短。别慌。最经典的点法是「澳白」：一份小杯浓咖啡配丝滑牛奶，用陶瓷杯装。

如果你想要更大更浓的，点「long black」——一份热水加上双份浓缩。点咖啡在这里是日常仪式，而任何仪式都奖励那些学会小词的人。问一句「堂食还是外带」，糖「另上」，再用一句轻快的「没问题」收尾。`
  },
  {
    id: "tipping",
    title: "Tipping in Australia: What Visitors Should Know",
    source: "示例外刊 · Travel Etiquette（学习材料）",
    date: "2024-08-21",
    vocab: [
      { word: "wage", phonetic: "/weɪdʒ/", pos: "n.", meaning: "工资" },
      { word: "included", phonetic: "/ɪnˈkluːdɪd/", pos: "adj.", meaning: "已包含的" },
      { word: "rounded", phonetic: "/ˈraʊndɪd/", pos: "adj.", meaning: "凑整的" },
      { word: "exceptional", phonetic: "/ɪkˈsepʃənl/", pos: "adj.", meaning: "出色的" },
      { word: "service", phonetic: "/ˈsɜːvɪs/", pos: "n.", meaning: "服务" },
      { word: "appreciate", phonetic: "/əˈpriːʃieɪt/", pos: "v.", meaning: "感激" }
    ],
    phrases: [
      { phrase: "for here", meaning: "堂食" },
      { phrase: "round up", meaning: "向上取整" },
      { phrase: "on the counter", meaning: "在柜台上（不留小费在桌上）" }
    ],
    sentences: [
      {
        sentence: "Unlike in the United States, tipping in Australia is not part of a waiter's wage, which means customers are not expected to add a percentage to every bill, although a small tip or a rounded-up amount is a friendly way to thank someone for exceptional service.",
        analysis: "Unlike in the United States 为介词短语作状语。主干 tipping in Australia is not part of a waiter's wage。which means customers are not expected to… 是非限定性定语从句。although a small tip or a rounded-up amount is a friendly way to thank someone 为让步状语从句。"
      }
    ],
    content: `<p>Unlike in the United States, tipping in Australia is not part of a waiter's <span class="vocab" data-v="wage">wage</span>. Service is <span class="vocab" data-v="included">included</span>, and most diners leave only when the food is wonderful.</p>
<p>If you want to thank a server for <span class="vocab" data-v="exceptional">exceptional</span> <span class="vocab" data-v="service">service</span>, you can <span class="vocab" data-v="round up">round up</span> the bill — for example, paying $47 for a $45 meal — or simply tell them you <span class="vocab" data-v="appreciate">appreciate</span> it. Either way, a kind word travels further than a few coins left <span class="vocab" data-v="rounded">on the counter</span>.</p>`,
    translation: `和美国不同，在澳洲给小费并不是服务员工资的一部分。服务费已包含在内，多数客人只在食物极其美味时才留下些什么。

如果你想为出色的服务表示感谢，可以把账单凑个整数——比如 45 美元的饭付 47 美元——或者简单告诉他们你很感激。无论哪种方式，一句善意比放在柜台上几枚硬币走得都远。`
  },
  {
    id: "snakes",
    title: "Meeting a Snake on a Bushwalk",
    source: "示例外刊 · Outdoor Safety（学习材料）",
    date: "2024-10-12",
    vocab: [
      { word: "bushwalk", phonetic: "/ˈbʊʃwɔːk/", pos: "n.", meaning: "丛林徒步" },
      { word: "startle", phonetic: "/ˈstɑːtl/", pos: "v.", meaning: "惊吓" },
      { word: "venomous", phonetic: "/ˈvenəməs/", pos: "adj.", meaning: "有毒的" },
      { word: "harmless", phonetic: "/ˈhɑːmləs/", pos: "adj.", meaning: "无害的" },
      { word: "retreat", phonetic: "/rɪˈtriːt/", pos: "v.", meaning: "后退" },
      { word: "panic", phonetic: "/ˈpænɪk/", pos: "n.", meaning: "惊慌" },
      { word: "sturdy", phonetic: "/ˈstɜːdi/", pos: "adj.", meaning: "结实的" },
      { word: "boots", phonetic: "/buːts/", pos: "n.", meaning: "靴子" }
    ],
    phrases: [
      { phrase: "stop in your tracks", meaning: "原地停住" },
      { phrase: "give way", meaning: "让路" },
      { phrase: "take it slow", meaning: "慢慢来" }
    ],
    sentences: [
      {
        sentence: "Most Australian snakes would rather slide away than pick a fight, so the best rule on a bushwalk is to stop in your tracks, let the snake go first, and never try to touch or move it.",
        analysis: "Most Australian snakes would rather slide away than pick a fight 为主句，含 would rather… than… 结构。so the best rule on a bushwalk is to stop in your tracks, let the snake go first, and never try to touch or move it 为结果状语从句；is 后三个动词不定式 stop / let / never try 并列。"
      }
    ],
    content: `<p>If a snake <span class="vocab" data-v="startle">startles</span> you on a <span class="vocab" data-v="bushwalk">bushwalk</span>, don't <span class="vocab" data-v="panic">panic</span>. Most Australian snakes are <span class="vocab" data-v="venomous">venomous</span>, but a few are <span class="vocab" data-v="harmless">harmless</span>, and almost all of them are more scared of you than you are of them.</p>
<p>The safe rule is simple: <span class="vocab" data-v="stop in your tracks">stop in your tracks</span>, step back slowly, and let the snake <span class="vocab" data-v="retreat">retreat</span>. Wear long pants and <span class="vocab" data-v="sturdy">sturdy</span> <span class="vocab" data-v="boots">boots</span>, take it slow, and you'll almost certainly never be bitten at all.</p>`,
    translation: `如果在丛林徒步时被蛇惊到，别慌。澳洲大多数蛇是有毒的，但也有一些无害，几乎所有的蛇都比人更怕你。

安全守则很简单：原地停住，慢慢后退，让蛇先走。穿长裤和结实的靴子，慢慢走，你几乎肯定不会受到任何伤害。`
  },
  {
    id: "wildlife-safety",
    title: "Driving at Dawn to Spot Kangaroos",
    source: "示例外刊 · Road Trip Tips（学习材料）",
    date: "2024-11-25",
    vocab: [
      { word: "dawn", phonetic: "/dɔːn/", pos: "n.", meaning: "黎明" },
      { word: "dusk", phonetic: "/dʌsk/", pos: "n.", meaning: "黄昏" },
      { word: "graze", phonetic: "/ɡreɪz/", pos: "v.", meaning: "吃草" },
      { word: "swerve", phonetic: "/swɜːv/", pos: "v.", meaning: "急转" },
      { word: "collide", phonetic: "/kəˈlaɪd/", pos: "v.", meaning: "碰撞" },
      { word: "countryside", phonetic: "/ˈkʌntrisaɪd/", pos: "n.", meaning: "乡村" },
      { word: "warn", phonetic: "/wɔːn/", pos: "v.", meaning: "警告" }
    ],
    phrases: [
      { phrase: "in the wild", meaning: "在野外" },
      { phrase: "at speed", meaning: "高速地" },
      { phrase: "slow down", meaning: "减速" }
    ],
    sentences: [
      {
        sentence: "If you do hit one, do not swerve violently, for hitting a tree at speed is far more dangerous than hitting a kangaroo, the rule being: brake firmly, steer straight, and let the animal move on.",
        analysis: "If you do hit one, do not swerve violently 为条件祈使句；for hitting a tree at speed is far more dangerous than hitting a kangaroo 为原因状语从句。the rule being: brake firmly, steer straight, and let the animal move on 为独立主格结构补充说明规则，三个动词祈使语气并列。"
      }
    ],
    content: `<p>The best time to see kangaroos in the <span class="vocab" data-v="countryside">countryside</span> is around <span class="vocab" data-v="dawn">dawn</span> or <span class="vocab" data-v="dusk">dusk</span>, when they come out to <span class="vocab" data-v="graze">graze</span>. Yet these are also the hours when most kangaroo collisions happen.</p>
<p>If a roo jumps in front of your car, don't <span class="vocab" data-v="swerve">swerve</span>: stay in your lane, <span class="vocab" data-v="warn">warn</span> the next driver with your hazard lights, and <span class="vocab" data-v="slow down">slow down</span> only after the animal has passed. The bruises on your bumper are not worth a life.</p>`,
    translation: `在乡村看袋鼠最好的时间是黎明或黄昏，它们会出来吃草。但这两个时段也是大多数袋鼠车祸发生的时段。

如果袋鼠跳到你车前，别猛打方向——保持在车道里，用双闪提醒后车，等袋鼠过去后再减速。保险杠上的刮痕不值得赌上一条命。`
  },
  {
    id: "ubereats",
    title: "App-based Food Delivery in Australia",
    source: "示例外刊 · Urban Life（学习材料）",
    date: "2024-12-04",
    vocab: [
      { word: "deliver", phonetic: "/dɪˈlɪvə/", pos: "v.", meaning: "配送" },
      { word: "fee", phonetic: "/fiː/", pos: "n.", meaning: "费用" },
      { word: "tip", phonetic: "/tɪp/", pos: "n.", meaning: "小费" },
      { word: "rider", phonetic: "/ˈraɪdə/", pos: "n.", meaning: "骑手" },
      { word: "estimate", phonetic: "/ˈestɪmeɪt/", pos: "n.", meaning: "预计" },
      { word: "tracking", phonetic: "/ˈtrækɪŋ/", pos: "n.", meaning: "追踪" },
      { word: "rating", phonetic: "/ˈreɪtɪŋ/", pos: "n.", meaning: "评分" }
    ],
    phrases: [
      { phrase: "on demand", meaning: "随选，即时" },
      { phrase: "at the door", meaning: "在门口" },
      { phrase: "in real time", meaning: "实时" }
    ],
    sentences: [
      {
        sentence: "Although ordering food on demand is wonderfully convenient, Australians are increasingly aware of the human cost behind the app, which has made tipping the rider optional but quietly appreciated.",
        analysis: "Although ordering food on demand is wonderfully convenient 为让步状语从句。主干 Australians are increasingly aware of the human cost behind the app；which 引导非限定性定语从句；has made tipping the rider optional but quietly appreciated 为 make + 宾语 + 宾补（optional / quietly appreciated）结构。"
      }
    ],
    content: `<p>Apps like Uber Eats and Menulog have made it easy to order almost anything <span class="vocab" data-v="on demand">on demand</span>, from sushi to a midnight burger, with a <span class="vocab" data-v="rider">rider</span> bringing it to your door in less than an hour.</p>
<p>The order is simple: pick a restaurant, add a small <span class="vocab" data-v="tip">tip</span>, watch <span class="vocab" data-v="tracking">tracking</span> <span class="vocab" data-v="in real time">in real time</span>, then meet the <span class="vocab" data-v="rider">rider</span> <span class="vocab" data-v="at the door">at the door</span>. Leave a quick <span class="vocab" data-v="rating">rating</span> afterwards, and the <span class="vocab" data-v="fee">delivery fee</span> feels small compared to the comfort of a hot meal in your pyjamas.</p>`,
    translation: `Uber Eats 和 Menulog 这样的应用让"即时下单"几乎无所不能——从寿司到深夜汉堡，不到一小时就有骑手送到门口。

下单很简单：选餐厅、添点小费、实时追踪、然后在门口接住骑手。事后留下简单评分，比起穿着睡衣吃上热乎饭的舒适感，那点配送费实在不算什么。`
  },
  {
    id: "language-survival",
    title: "Five Phrases That Saved My Trip to Sydney",
    source: "示例外刊 · Travel Voices（学习材料）",
    date: "2024-09-19",
    vocab: [
      { word: "phrase", phonetic: "/freɪz/", pos: "n.", meaning: "短语" },
      { word: "saved", phonetic: "/seɪvd/", pos: "v.", meaning: "拯救；节省" },
      { word: "greet", phonetic: "/ɡriːt/", pos: "v.", meaning: "问候" },
      { word: "apologise", phonetic: "/əˈpɒlədʒaɪz/", pos: "v.", meaning: "道歉" },
      { word: "curious", phonetic: "/ˈkjʊəriəs/", pos: "adj.", meaning: "好奇的" },
      { word: "blunt", phonetic: "/blʌnt/", pos: "adj.", meaning: "直率的" }
    ],
    phrases: [
      { phrase: "no worries", meaning: "没关系" },
      { phrase: "have a go", meaning: "试一试" },
      { phrase: "too easy", meaning: "小意思" }
    ],
    sentences: [
      {
        sentence: "Once you understand that 'no worries' is the Australian answer to almost anything — thank you, sorry, goodbye, you're welcome — you will find that the country begins to feel less foreign and more familiar.",
        analysis: "Once you understand that… 为条件状语从句，that 引导宾语从句。主句 the country begins to feel less foreign and more familiar，并运用了比较级 less… more… 表示对比。"
      }
    ],
    content: `<p>Before I arrived, I worried my English would be too <span class="vocab" data-v="blunt">blunt</span>, too slow, too something. Then a barista greeted me with a cheerful "g'day" and somehow the worry dissolved.</p>
<p>The five <span class="vocab" data-v="phrase">phrases</span> that <span class="vocab" data-v="saved">saved</span> my trip were simple: "no worries", "have a go", "too easy", "sorry about that", and "cheers". Learn them, <span class="vocab" data-v="greet">greet</span> people with a smile, and the rest of Australia will do the rest.</p>`,
    translation: `到澳洲之前，我担心自己英语太直接、太慢、或者有哪里不对。后来一位咖啡师用一句轻快的 "g'day" 跟我打招呼，那份担心就莫名其妙地消失了。

救了我整个旅途的五句短语其实很简单：「no worries」「have a go」「too easy」「sorry about that」「cheers」。学会它们，带着微笑跟人打招呼，澳洲的其余地方也会跟着敞开。`
  },
  {
    id: "wild-camping",
    title: "Free Camping Along the Coast",
    source: "示例外刊 · Road Trip Diary（学习材料）",
    date: "2024-10-28",
    vocab: [
      { word: "free", phonetic: "/friː/", pos: "adj.", meaning: "免费的" },
      { word: "camp", phonetic: "/kæmp/", pos: "v.", meaning: "露营" },
      { word: "coast", phonetic: "/kəʊst/", pos: "n.", meaning: "海岸" },
      { word: "spot", phonetic: "/spɒt/", pos: "n.", meaning: "地点" },
      { word: "facilities", phonetic: "/fəˈsɪlətiz/", pos: "n.", meaning: "设施" },
      { word: "toilet", phonetic: "/ˈtɔɪlət/", pos: "n.", meaning: "厕所" },
      { word: "bin", phonetic: "/bɪn/", pos: "n.", meaning: "垃圾桶" }
    ],
    phrases: [
      { phrase: "pull up", meaning: "（车）停下" },
      { phrase: "overnight stay", meaning: "过夜停留" },
      { phrase: "leave no trace", meaning: "无痕山林" }
    ],
    sentences: [
      {
        sentence: "While many coastal campsites charge a small fee and offer clean toilets, bins and even hot showers, a growing number of designated free camps are popping up along the coast, giving road-trippers a place to pull up without spending a cent.",
        analysis: "While many coastal campsites charge a small fee and offer clean toilets, bins and even hot showers 为让步状语从句。主干 a growing number of designated free camps are popping up along the coast。giving road-trippers a place to pull up without spending a cent 为现在分词作伴随状语，含 to pull up 不定式作后置定语。"
      }
    ],
    content: `<p>Australia is one of the few places where you can legally <span class="vocab" data-v="camp">camp</span> for free along the <span class="vocab" data-v="coast">coast</span>, as long as you follow the rules: stay on a <span class="vocab" data-v="spot">designated spot</span>, use the provided <span class="vocab" data-v="facilities">facilities</span>, and leave no trace behind.</p>
<p>Typical <span class="vocab" data-v="facilities">facilities</span> include a basic <span class="vocab" data-v="toilet">toilet</span>, a <span class="vocab" data-v="bin">bin</span>, and maybe a picnic table. Pull up, set up, sleep, wake to the sound of waves — and try not to think about how much you saved.</p>`,
    translation: `澳洲是为数不多可以合法在海岸边免费露营的地方，只要遵守规则：停在指定地点、使用公共设施、不留痕迹。

典型设施包括一间简易厕所、一个垃圾桶，或许还有一张野餐桌。停下来、搭好帐篷、睡下，被海浪声叫醒——然后尽量别去算你省了多少钱。`
  },
  {
    id: "opera-house",
    title: "The Story Behind the Sydney Opera House",
    source: "示例外刊 · Iconic Places（学习材料）",
    date: "2024-08-04",
    vocab: [
      { word: "iconic", phonetic: "/aɪˈkɒnɪk/", pos: "adj.", meaning: "标志性的" },
      { word: "architecture", phonetic: "/ˈɑːkɪtektʃə/", pos: "n.", meaning: "建筑" },
      { word: "spherical", phonetic: "/ˈsferɪkl/", pos: "adj.", meaning: "球形的" },
      { word: "shell", phonetic: "/ʃel/", pos: "n.", meaning: "贝壳；外壳" },
      { word: "reject", phonetic: "/rɪˈdʒekt/", pos: "v.", meaning: "拒绝" },
      { word: "sail", phonetic: "/seɪl/", pos: "n.", meaning: "船帆" },
      { word: "heritage", phonetic: "/ˈherɪtɪdʒ/", pos: "n.", meaning: "遗产" }
    ],
    phrases: [
      { phrase: "go on to", meaning: "继续做" },
      { phrase: "look out over", meaning: "俯瞰" },
      { phrase: "open to the public", meaning: "对公众开放" }
    ],
    sentences: [
      {
        sentence: "Although the original architect was rejected partway through the project, the building he went on to design has become a symbol of modern Australia, recognised the world over as a UNESCO World Heritage site that seems to float like a cluster of white sails on the harbour.",
        analysis: "Although the original architect was rejected partway through the project 为让步状语从句。主句 the building he went on to design has become a symbol of modern Australia，含 he went on to design 省略关系词的定语从句。recognised the world over as a UNESCO World Heritage site 为过去分词作状语。that 引导定语从句修饰 site，其中 to float like a cluster of white sails on the harbour 为 seems 的表语。"
      }
    ],
    content: `<p>The Sydney Opera House is one of the most <span class="vocab" data-v="iconic">iconic</span> pieces of <span class="vocab" data-v="architecture">architecture</span> in the world. Its white <span class="vocab" data-v="shell">shells</span> — really <span class="vocab" data-v="spherical">spherical</span> sections of concrete — rise out of the harbour like a row of giant <span class="vocab" data-v="sail">sails</span>, even though the design was once <span class="vocab" data-v="reject">rejected</span> by the judging panel.</p>
<p>Today the building is a <span class="vocab" data-v="heritage">UNESCO World Heritage</span> site and is open to the public for guided tours, performances, and the simple joy of sitting on the steps, <span class="vocab" data-v="look out over">looking out over</span> the harbour at sunset.</p>`,
    translation: `悉尼歌剧院是世界上最标志性的建筑之一。它的白色「壳」——实际上是球形混凝土切片——像一排巨大的船帆从海港中升起，尽管这个设计曾被评审团拒绝过。

如今这座建筑是联合国教科文组织世界遗产，公众可以参加导览、观看演出，或者就坐在台阶上，静静看着港口的落日。`
  },
  {
    id: "fire-season",
    title: "Why Australia Burns Every Summer",
    source: "示例外刊 · Climate Notes（学习材料）",
    date: "2024-11-02",
    vocab: [
      { word: "bushfire", phonetic: "/ˈbʊʃˌfaɪə/", pos: "n.", meaning: "丛林大火" },
      { word: "fuel", phonetic: "/ˈfjuːəl/", pos: "n.", meaning: "燃料" },
      { word: "humidity", phonetic: "/hjuːˈmɪdəti/", pos: "n.", meaning: "湿度" },
      { word: "thunderstorm", phonetic: "/ˈθʌndəstɔːm/", pos: "n.", meaning: "雷暴" },
      { word: "dry", phonetic: "/draɪ/", pos: "adj.", meaning: "干燥的" },
      { word: "extinguish", phonetic: "/ɪkˈstɪŋɡwɪʃ/", pos: "v.", meaning: "扑灭" },
      { word: "alert", phonetic: "/əˈlɜːt/", pos: "n.", meaning: "警报" },
      { word: "coastal", phonetic: "/ˈkəʊstl/", pos: "adj.", meaning: "沿海的" },
      { word: "ember", phonetic: "/ˈembə/", pos: "n.", meaning: "余烬；火星" }
    ],
    phrases: [
      { phrase: "from above", meaning: "从空中" },
      { phrase: "fire ban", meaning: "禁火令" },
      { phrase: "evacuation zone", meaning: "疏散区" }
    ],
    sentences: [
      {
        sentence: "What makes Australian bushfires uniquely fierce is that they often meet all three ingredients for a firestorm at once — extreme heat, low humidity, and strong winds — which is why authorities issue fire bans and evacuation orders days before the flames arrive.",
        analysis: "What 引导主语从句。they often meet all three ingredients for a firestorm at once 为表语从句；其中 extreme heat, low humidity, and strong winds 为 ingredients 的同位语。which 引导非限定性定语从句。is why authorities issue fire bans and evacuation orders days before the flames arrive 为表语从句结构。"
      }
    ],
    content: `<p>Every summer, parts of Australia face <span class="vocab" data-v="bushfire">bushfires</span> that can run for weeks. The land is <span class="vocab" data-v="dry">dry</span>, the bush is thick with <span class="vocab" data-v="fuel">fuel</span>, and a single <span class="vocab" data-v="thunderstorm">thunderstorm</span> can light it all up.</p>
<p>While the famous <span class="vocab" data-v="coastal">coastal</span> cities are mostly safe, travellers heading inland should check the <span class="vocab" data-v="fire ban">fire ban</span> <span class="vocab" data-v="alert">alerts</span>, obey any <span class="vocab" data-v="evacuation zone">evacuation zone</span> signs, and remember that an <span class="vocab" data-v="ember">ember</span> <span class="vocab" data-v="from above">from above</span> can outrun a fire truck on a windy road.</p>`,
    translation: `每年夏天，澳洲部分地区都会遭遇持续数周的丛林大火。土地干燥、丛林充满燃料，而一场雷暴就足以引燃一切。

尽管著名的沿海城市大多安全，前往内地的旅行者还是应当查看禁火令、听从疏散区标识，并记住：从天上飘来的一点火星，在大风天里可能比消防车跑得还快。`
  },
  {
    id: "fitness",
    title: "Sweat, Sand, and Sea: Fitness Culture on the Coast",
    source: "示例外刊 · Lifestyle（学习材料）",
    date: "2024-09-27",
    vocab: [
      { word: "fitness", phonetic: "/ˈfɪtnəs/", pos: "n.", meaning: "健身" },
      { word: "sweat", phonetic: "/swet/", pos: "n.", meaning: "汗水" },
      { word: "outdoor", phonetic: "/ˈaʊtdɔː/", pos: "adj.", meaning: "户外的" },
      { word: "gym", phonetic: "/dʒɪm/", pos: "n.", meaning: "健身房" },
      { word: "yoga", phonetic: "/ˈjəʊɡə/", pos: "n.", meaning: "瑜伽" },
      { word: "jog", phonetic: "/dʒɒɡ/", pos: "v.", meaning: "慢跑" }
    ],
    phrases: [
      { phrase: "in the open air", meaning: "在户外" },
      { phrase: "before work", meaning: "上班前" },
      { phrase: "stay in shape", meaning: "保持身材" }
    ],
    sentences: [
      {
        sentence: "You may notice that Australian gyms have glass walls and that beach yoga sessions are full at sunrise, suggesting that for many locals, fitness is less about lifting heavy things indoors and more about moving in the open air.",
        analysis: "You may notice that… and that… 为并列的 that 宾语从句。suggesting that for many locals, fitness is less about… and more about… 为现在分词作结果状语，其中 that 引导宾语从句。"
      }
    ],
    content: `<p>Australians love to <span class="vocab" data-v="jog">jog</span>, swim, and surf, often <span class="vocab" data-v="in the open air">in the open air</span> rather than inside a <span class="vocab" data-v="gym">gym</span>. On any Sunday morning you'll see groups of people doing <span class="vocab" data-v="yoga">yoga</span> on the grass, jogging along the sand, or meeting up for a long swim.</p>
<p>It's a culture that treats <span class="vocab" data-v="outdoor">outdoor</span> <span class="vocab" data-v="fitness">fitness</span> as a way to <span class="vocab" data-v="stay in shape">stay in shape</span> and connect with friends at the same time. Bring trainers, a hat and water — you'll fit right in before your second coffee.</p>`,
    translation: `澳洲人喜欢慢跑、游泳和冲浪，而且更喜欢在户外而非健身房。每个周日上午，你都会看到一群人在草地做瑜伽、沿着沙滩跑，或者约好一起长游。

这是一种把户外健身既当作保持身材、又当作交友方式的本土文化。带上跑鞋、帽子和一杯水，你喝完第二杯咖啡时就已经融入他们了。`
  },
  {
    id: "indigenous-culture",
    title: "Listening to First Nations Voices",
    source: "示例外刊 · Culture & History（学习材料）",
    date: "2024-08-15",
    vocab: [
      { word: "first nations", phonetic: "/fɜːst ˈneɪʃnz/", pos: "n.", meaning: "原住民（澳式称法）" },
      { word: "land", phonetic: "/lænd/", pos: "n.", meaning: "土地" },
      { word: "elder", phonetic: "/ˈeldə/", pos: "n.", meaning: "长者" },
      { word: "sacred", phonetic: "/ˈseɪkrɪd/", pos: "adj.", meaning: "神圣的" },
      { word: "ceremony", phonetic: "/ˈserɪməʊni/", pos: "n.", meaning: "典礼" },
      { word: "tour", phonetic: "/tʊə/", pos: "n.", meaning: "游览" }
    ],
    phrases: [
      { phrase: "on Country", meaning: "在故土上（澳式英语）" },
      { phrase: "ask permission", meaning: "请求许可" },
      { phrase: "take time to", meaning: "花时间做…" }
    ],
    sentences: [
      {
        sentence: "Many Indigenous-led tours invite visitors not just to look but to listen, to slow down, and to accept that some stories are sacred and must be respected rather than photographed or shared on social media.",
        analysis: "Many Indigenous-led tours invite visitors 为简单句，其后 not just…but… 是 invite 的并列补语。to look, to slow down, and to accept 并列；其中 accept 后的 that 引导宾语从句，rather than photographed or shared 为并列被动还原（photograph / share 主动），表示否定的对比。"
      }
    ],
    content: `<p>First Nations tourism is one of the most respectful ways to connect with Australia. Indigenous <span class="vocab" data-v="elder">elders</span> often <span class="vocab" data-v="tour">guide</span> visitors <span class="vocab" data-v="on Country">on Country</span> — the lands their people have cared for over tens of thousands of years — and share stories that no guidebook can.</p>
<p><span class="vocab" data-v="take time to">Take time to</span> listen. <span class="vocab" data-v="ask permission">Ask permission</span> before photographing anything <span class="vocab" data-v="sacred">sacred</span>. The most rewarding <span class="vocab" data-v="ceremony">ceremonies</span> are the ones you carry home quietly, in your memory rather than your camera roll.</p>`,
    translation: `原住民旅游是与澳洲建立连接的、最有敬意的方式之一。原住民长者通常会带你「on Country」（即他们的故土，他们已守护了上万年）参观，并讲述任何旅行指南里都没有的故事。

请花时间倾听，拍摄任何神圣事物之前先请求许可。最难忘的仪式，是那些你可以静静带回家、存入记忆而非相机相册的。`
  },
  {
    id: "laguna-bay",
    title: "Why Aussies Swim Between the Flags",
    source: "示例外刊 · Beach Safety（学习材料）",
    date: "2024-12-10",
    vocab: [
      { word: "flag", phonetic: "/flæɡ/", pos: "n.", meaning: "旗" },
      { word: "patrol", phonetic: "/pəˈtrəʊl/", pos: "n.", meaning: "巡逻" },
      { word: "rip", phonetic: "/rɪp/", pos: "n.", meaning: "离岸流" },
      { word: "current", phonetic: "/ˈkʌrənt/", pos: "n.", meaning: "水流" },
      { word: "warn", phonetic: "/wɔːn/", pos: "v.", meaning: "警告" },
      { word: "float", phonetic: "/fləʊt/", pos: "v.", meaning: "漂浮" }
    ],
    phrases: [
      { phrase: "between the flags", meaning: "（游泳）在红旗与黄旗之间" },
      { phrase: "swim at patrolled beaches", meaning: "在有救生员的海滩游泳" },
      { phrase: "in distress", meaning: "遇险" }
    ],
    sentences: [
      {
        sentence: "If you ever find yourself caught in a rip current, the lifesavers will tell you the same thing: stay calm, float, and wave one arm sideways to signal for help rather than swimming against the current, which only exhausts you faster.",
        analysis: "If you ever find yourself caught in a rip current 为条件状语从句。主句 the lifesavers will tell you the same thing: stay calm, float, and wave one arm sideways to signal for help;冒号后三个动词祈使语气并列。rather than swimming against the current 为对比状语。which 引导非限定性定语从句，修饰整句。"
      }
    ],
    content: `<p>Every patrolled beach in Australia flies red and yellow <span class="vocab" data-v="flag">flags</span>. These mark the safe swimming area, looked after by trained <span class="vocab" data-v="patrol">lifesavers</span> who keep an eye out all day.</p>
<p>Beyond the flags, unseen <span class="vocab" data-v="rip">rip</span> <span class="vocab" data-v="current">currents</span> can pull swimmers out to sea. If you're caught, <span class="vocab" data-v="warn">signal</span> for help, <span class="vocab" data-v="float">float</span> on your back, and wait for the lifesaver — never swim against the current.</p>`,
    translation: `澳洲每个有救生员值守的海滩都会插红黄旗。它们标出由训练有素救生员全天看护的安全游泳区。

旗子之外的区域，水下的离岸流会悄无声息地把游泳者往外海拖。如果你被卷入，举手求救、仰漂等待救生员——绝不要逆流硬游。`
  },
  {
    id: "train-travel",
    title: "Crossing the Country by Train",
    source: "示例外刊 · Slow Travel（学习材料）",
    date: "2024-10-17",
    vocab: [
      { word: "carriage", phonetic: "/ˈkærɪdʒ/", pos: "n.", meaning: "车厢" },
      { word: "scenic", phonetic: "/ˈsiːnɪk/", pos: "adj.", meaning: "风景优美的" },
      { word: "journey", phonetic: "/ˈdʒɜːni/", pos: "n.", meaning: "旅途" },
      { word: "window", phonetic: "/ˈwɪndəʊ/", pos: "n.", meaning: "窗户" },
      { word: "friendly", phonetic: "/ˈfrendli/", pos: "adj.", meaning: "友好的" },
      { word: "settle", phonetic: "/ˈsetl/", pos: "v.", meaning: "安定下来" }
    ],
    phrases: [
      { phrase: "in comfort", meaning: "舒适地" },
      { phrase: "sleeper cabin", meaning: "卧铺舱" },
      { phrase: "get off at", meaning: "在…下车" }
    ],
    sentences: [
      {
        sentence: "While flying is faster, the train rewards those who settle into the rhythm of the rails, offering long views of farmland, red desert and tiny outback towns that you would otherwise only fly over without ever truly seeing.",
        analysis: "While flying is faster 为让步状语从句。主句 the train rewards those who settle into the rhythm of the rails，含 who 引导的定语从句；offering long views of farmland, red desert and tiny outback towns 为现在分词作伴随状语，含定语从句 that you would otherwise only fly over without ever truly seeing。"
      }
    ],
    content: `<p>Australia's long-distance trains are not the fastest way to travel, but they're certainly the most <span class="vocab" data-v="scenic">scenic</span>. <span class="vocab" data-v="settle">Settle</span> into a <span class="vocab" data-v="carriage">carriage</span> with a coffee, watch the world pass the <span class="vocab" data-v="window">window</span>, and chat with strangers — Australians are surprisingly <span class="vocab" data-v="friendly">friendly</span> on trains.</p>
<p>From Sydney to Perth or Adelaide, the <span class="vocab" data-v="journey">journey</span> can take two or three days, but the luxury of <span class="vocab" data-v="in comfort">travelling in comfort</span>, with a sleeper cabin and starlit skies, makes every slow mile worth it.</p>`,
    translation: `澳洲的长途火车不是最快的出行方式，却一定是最有风景的一种。端一杯咖啡坐进车厢，看窗外世界流过，与陌生人聊天——澳洲人在火车上出奇地友善。

从悉尼到珀斯或阿德莱德，旅程可能要两三天，但在卧铺舱和星空下舒适出行的体验，让每一段慢慢的里程都值得。`
  },
  {
    id: "festivals",
    title: "A Year of Australian Festivals",
    source: "示例外刊 · Cultural Calendar（学习材料）",
    date: "2024-09-12",
    vocab: [
      { word: "calendar", phonetic: "/ˈkælɪndə/", pos: "n.", meaning: "日历；年表" },
      { word: "Sydney", phonetic: "/ˈsɪdni/", pos: "n.", meaning: "悉尼" },
      { word: "firework", phonetic: "/ˈfaɪəwɜːk/", pos: "n.", meaning: "烟火" },
      { word: "float", phonetic: "/fləʊt/", pos: "n.", meaning: "花车" },
      { word: "pride", phonetic: "/praɪd/", pos: "n.", meaning: "骄傲游行" },
      { word: "lunar", phonetic: "/ˈluːnə/", pos: "adj.", meaning: "阴历的" }
    ],
    phrases: [
      { phrase: "the night sky lights up", meaning: "夜空亮起" },
      { phrase: "celebrate with", meaning: "和…一起庆祝" },
      { phrase: "all year round", meaning: "全年" }
    ],
    sentences: [
      {
        sentence: "From the fireworks over Sydney Harbour in January to lantern-lit streets during Lunar New Year, Australians love a reason to gather, and almost every month brings at least one local celebration worth planning around.",
        analysis: "From the fireworks over Sydney Harbour in January to lantern-lit streets during Lunar New Year 为介词短语作状语。主干 Australians love a reason to gather;and 连接并列句 almost every month brings at least one local celebration worth planning around，含 worth planning around 作后置定语。"
      }
    ],
    content: `<p>Australia's festival <span class="vocab" data-v="calendar">calendar</span> is busy all year round. In January, <span class="vocab" data-v="Sydney">Sydney</span> Harbour fills with <span class="vocab" data-v="firework">fireworks</span> for Australia Day; in February, lantern-lit streets mark the <span class="vocab" data-v="lunar">Lunar</span> New Year.</p>
<p>March brings Mardi Gras <span class="vocab" data-v="pride">Pride</span>, complete with glittering <span class="vocab" data-v="float">floats</span>; <span class="vocab" data-v="the night sky lights up">the night sky lights up</span> again at Vivid Sydney in May. Whatever the season, Australians always find a reason to celebrate together.</p>`,
    translation: `澳洲的节日日历全年都很满。一月，悉尼港为国庆日燃起烟火；二月，灯火点亮的街道迎接农历新年。

三月 Mardi Gras 骄傲游行登场，金色花车穿城而过；五月 Vivid Sydney 又一次点亮夜空。无论哪个季节，澳洲人总能找理由一起庆祝。`
  },
  {
    id: "ferry-ride",
    title: "A Slow Ferry Across the Harbour",
    source: "示例外刊 · Slow Living（学习材料）",
    date: "2024-08-30",
    vocab: [
      { word: "ferry", phonetic: "/ˈferi/", pos: "n.", meaning: "渡轮" },
      { word: "harbour", phonetic: "/ˈhɑːbə/", pos: "n.", meaning: "海港" },
      { word: "commute", phonetic: "/kəˈmjuːt/", pos: "v.", meaning: "通勤" },
      { word: "breeze", phonetic: "/briːz/", pos: "n.", meaning: "微风" },
      { word: "deck", phonetic: "/dek/", pos: "n.", meaning: "甲板" },
      { word: "snap", phonetic: "/snæp/", pos: "v.", meaning: "拍照" },
      { word: "rush", phonetic: "/rʌʃ/", pos: "n.", meaning: "匆忙" }
    ],
    phrases: [
      { phrase: "first thing", meaning: "第一件事" },
      { phrase: "from the outside", meaning: "从外面" },
      { phrase: "take the slow way", meaning: "选择慢行" }
    ],
    sentences: [
      {
        sentence: "Most visitors take the ferry to Manly only to get there, but the locals know that the real joy of the trip is to spend it on the upper deck, coffee in hand, watching the Opera House slowly shrink behind them.",
        analysis: "Most visitors take the ferry to Manly only to get there 为主句，only to get there 为结果状语。but 连接并列句 the locals know that the real joy of the trip is to spend it on the upper deck, coffee in hand, watching the Opera House slowly shrink behind them；其中 that 引导宾语从句；主语 joy + is + to spend… 结构。"
      }
    ],
    content: `<p>The <span class="vocab" data-v="ferry">ferry</span> from Circular Quay to Manly is more than a <span class="vocab" data-v="commute">commute</span> — it's a 30-minute <span class="vocab" data-v="breeze">sea breeze</span> with the best view in Sydney. Stay on the upper <span class="vocab" data-v="deck">deck</span>; the city looks different from out here.</p>
<p>Most tourists hop off at the city to <span class="vocab" data-v="snap">snap</span> photos, but don't <span class="vocab" data-v="rush">rush</span> — take the slow way and let the harbour do the talking. The Opera House and Harbour Bridge look their finest from the water, especially at sunset.</p>`,
    translation: `从环形码头到曼利的渡轮不只是通勤——这是一段 30 分钟的海风，也是悉尼最好的风景。待在上层甲板，城市在这里看起来不一样。

大多数游客下船只是为了在城市里拍照，但别急——选择慢行，让海港替你说故事。歌剧院和海港大桥从水上看最美，尤其在日落时分。`
  },
  {
    id: "travel-app",
    title: "Apps That Made My Trip Easier",
    source: "示例外刊 · Travel Tech（学习材料）",
    date: "2024-11-18",
    vocab: [
      { word: "app", phonetic: "/æp/", pos: "n.", meaning: "应用" },
      { word: "navigate", phonetic: "/ˈnævɪɡeɪt/", pos: "v.", meaning: "导航" },
      { word: "translator", phonetic: "/trænzˈleɪtə/", pos: "n.", meaning: "翻译" },
      { word: "offline", phonetic: "/ˌɒfˈlaɪn/", pos: "adj.", meaning: "离线的" },
      { word: "cache", phonetic: "/kæʃ/", pos: "n.", meaning: "缓存" },
      { word: "screenshot", phonetic: "/ˈskriːnʃɒt/", pos: "n.", meaning: "截图" }
    ],
    phrases: [
      { phrase: "set up", meaning: "设置" },
      { phrase: "go off", meaning: "（信号）消失" },
      { phrase: "stay on track", meaning: "保持正轨" }
    ],
    sentences: [
      {
        sentence: "Before I left home, I downloaded offline maps for every city I planned to visit, a decision that saved me more than once when my phone signal decided to go off at the worst possible moment.",
        analysis: "Before I left home 为时间状语从句。主句 I downloaded offline maps for every city I planned to visit，含 I planned to visit 省略关系词的定语从句；a decision that saved me more than once when my phone signal decided to go off at the worst possible moment 为同位语，含 that 引导的定语从句 + when 引导的时间状语从句。"
      }
    ],
    content: `<p>A handful of <span class="vocab" data-v="app">apps</span> can quietly carry a trip across Australia. Google Maps lets you <span class="vocab" data-v="navigate">navigate</span> cities; a quick <span class="vocab" data-v="translator">translator</span> app turns Aussie slang into English you actually understand.</p>
<p>The trick is to <span class="vocab" data-v="set up">set up</span> <span class="vocab" data-v="offline">offline</span> <span class="vocab" data-v="cache">maps</span> before you leave the city, take a <span class="vocab" data-v="screenshot">screenshot</span> of every booking, and you'll stay on track even when the signal goes off on the long drive between towns.</p>`,
    translation: `几个应用就能默默支撑起一趟澳洲之旅。Google Maps 让你在城市里导航；一个轻巧的翻译 App 把澳洲俚语翻成你听得懂的英语。

诀窍是在离开城市前先把离线地图缓存好，给每个预订截一张图，这样就算镇与镇之间的长途中信号消失，你也不会迷路。`
  }
];
