# Landing Kit — 部署說明

## 檔案結構
```
landing-kit/
├── index.html   ← 主頁面（不需要改）
├── style.css    ← 樣式（不需要改）
├── config.js    ← 只需要改這一個
└── README.md
```

---

## 第一步：填入你的設定

打開 `config.js`，做兩件事：

**1. 填入 Supabase 金鑰**
```js
supabase: {
  url:      "https://你的專案ID.supabase.co",
  anon_key: "eyJhbGci...你的 anon key",
},
```

**2. 改成你的市場內容**
改 `product`、`pains`、`features` 區塊的文字即可。

---

## 第二步：上傳到 GitHub

1. 去 github.com → New repository
2. 命名（例如 `landing-page`），選 Public，按 Create
3. 點 **uploading an existing file**
4. 把三個檔案（index.html、style.css、config.js）全部拖進去
5. 按 **Commit changes**

---

## 第三步：開啟 GitHub Pages

1. 進入你的 repo → **Settings**
2. 左側點 **Pages**
3. Source 選 **Deploy from a branch**
4. Branch 選 **main**，資料夾選 **/ (root)**
5. 按 **Save**

等 1–2 分鐘，你的網址就是：
```
https://你的GitHub帳號.github.io/landing-page/
```

---

## 測試不同市場

在網址後面加參數：
```
https://你的網址/?p=ai-automation&utm_source=threads
https://你的網址/?p=nail-salon&utm_source=ig
https://你的網址/?p=real-estate&utm_source=fb
```

資料會自動帶 `param_key` 和 `utm_source` 存進 Supabase。

---

## 切換主題

`config.js` 裡改一個字：
```js
theme: "dark-minimal",   // 黑底霓虹黃
theme: "warm-cream",     // 奶油棕紅
theme: "electric-bold",  // 深夜紫藍
theme: "soft-pastel",    // 薰衣草白
```

---

## 查看名單

登入 Supabase → Table Editor → `leads` 表

可以看到每一筆：聯絡方式 / 來源市場 / 平台 / 時間

---

## 名額額滿自動切換候補

`config.js` 裡把 `slots.taken` 改成等於 `slots.total`：
```js
slots: {
  total: 30,
  taken: 30,  // ← 改成跟 total 一樣，頁面自動變成候補模式
}
```
