// ============================================================
//  只需要改這一個檔案，就能切換任何市場
//  改完存進 GitHub，30 秒內自動上線
// ============================================================

window.CONFIG = {

  // ── Supabase 連線 ─────────────────────────────────────────
  supabase: {
    url:      "https://hquzczhzcoygnmninemvp.supabase.co",
    anon_key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxdXpjaHpjb3lnbm1uaW5lbXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNzIwMjQsImV4cCI6MjA5NDc0ODAyNH0.igTevzpprg0W_tb3FgcVt5gILcONWMG1jYAW_p7GhYk",
  },

  // ── 主題 ─────────────────────────────────────────────────
  // "dark-minimal" | "warm-cream" | "electric-bold" | "soft-pastel"
  theme: "dark-minimal",

  // ── 產品內容 ──────────────────────────────────────────────
  product: {
    name:     "AI 自動化工作流",
    tagline:  "專為中小企業打造，最快 2 天上線",
    badge:    "封測資格 · 僅開放 3 家免費試用",
    headline: "每週省下 10 小時\n不需要工程師",
    subtext:  "將重複的 LINE 客服回覆、Excel 資料整理、訂單狀態追蹤交給 AI 24 小時自動運作。你不需要懂程式碼，最快 2 天內上線。",
    cta_main: "搶先卡位 3 名封測資格",
    cta_sub:  "",
    demo_url: "",
  },

  // ── 名額設定 ──────────────────────────────────────────────
  slots: {
    total: 3,
    taken: 1,
    unit:  "家",
  },

  // ── 社會證明 ──────────────────────────────────────────────
  social_proof: {
    count: "47",
    unit:  "家企業正在候補",
  },

  // ── 開發者信任區塊 ────────────────────────────────────────
  founder: {
    enabled: true,
    name:    "Isaac",
    age:     "16 歲獨立開發者",
    story:   "我發現台灣多數中小企業不是不想數位轉型，而是卡在請工程師太貴、套裝軟體太複雜。我用最頂尖的 AI 技術棧，幫你用 1/10 的成本搭建客製化流程。這是我公開的實驗，我只找 3 家在地企業免費測試，用數據說話。",
    image:   "",   // 填入你的照片或 n8n 截圖 URL，留空顯示預設圖示
  },

  // ── 痛點 ──────────────────────────────────────────────────
  pains: [
    {
      icon:  "😤",
      title: "員工卡在雜事",
      desc:  "每天花 2–3 小時手動複製 LINE 訂單到 Excel，沒時間做真正帶來業績的銷售。",
    },
    {
      icon:  "💸",
      title: "資料凌亂漏單",
      desc:  "LINE、Google Sheet、CRM 數據對不起來，漏掉一筆大單，損失的就是好幾萬。",
    },
    {
      icon:  "🔄",
      title: "流動率高、難請人",
      desc:  "好不容易教會一個客服，下個月就離職。AI 永遠不離職，交接成本為零。",
    },
  ],

  // ── 賣點 ──────────────────────────────────────────────────
  features: [
    {
      icon:  "⚡",
      title: "最快 2 天上線",
      desc:  "固定流程模板，不用等 3 個月開發週期，上線即開始省人力。",
    },
    {
      icon:  "🤖",
      title: "24 小時自動運作",
      desc:  "LINE 客服、報表整理、訂單追蹤，AI 全天候處理，你只需要看結果。",
    },
    {
      icon:  "🛡️",
      title: "免費封測，數據說話",
      desc:  "3 家名額完全免費。30 天後用實際數據告訴你省了多少時間與人力成本。",
    },
  ],

  // ── 表單 ──────────────────────────────────────────────────
  form: {
    title:       "搶先卡位封測資格",
    placeholder: "電子信箱 或 LINE ID",
    button:      "免費獲取我的 AI 自動化方案",
    privacy:     "",
  },

  // ── 候補模式 ──────────────────────────────────────────────
  waitlist: {
    enabled:     true,
    title:       "3 家封測名額已額滿",
    subtitle:    "下一批預計下週開放，加入候補清單優先通知",
    button:      "加入候補名單 →",
    placeholder: "留下你的 Email 或 LINE ID",
    note:        "候補成功者將在開放 24 小時前優先通知",
  },

  // ── 感謝頁 ────────────────────────────────────────────────
  thankyou: {
    title:   "收到了！我會親自聯絡你 🎉",
    message: "我是 Isaac，會在 24 小時內以你留下的方式親自聯絡你，了解你的流程痛點，確認是否適合這次封測。",
    share:   true,
  },

  // ── 追蹤代碼（選填） ─────────────────────────────────────
  tracking: {
    ga4:      "",
    fb_pixel: "",
  },

};
