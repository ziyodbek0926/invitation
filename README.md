# 🌸 Tug'ilgan kun taklifnomasi

tug'ilgan kunga bag'ishlangan nafis va kreativ web-taklifnoma.

---

## 📁 Loyiha tuzilmasi

```
odina-invitation/
├── index.html                  ← asosiy sahifa
├── styles.css                  ← barcha stillar
├── script.js                   ← countdown, modal, musiqa, animatsiya
├── vercel.json                 ← Vercel sozlamasi
├── happy-birthday-piano.mp3    ← ⚠️ SIZ QO'SHIShINGIZ KERAK
└── README.md
```

---


## 🚀 Vercelga deploy qilish

```bash
# Vercel CLI o'rnatish (bir marta)
npm i -g vercel

# Loyiha papkasiga kiring
cd odina-invitation

# Deploy
vercel

# Productionga (odina.vercel.app)
vercel --prod
```

### GitHub + Vercel Dashboard

1. Papkani GitHub repo sifatida push qiling:
   ```bash
   git init
   git add .
   git commit -m "Odina birthday invitation"
   git branch -M main
   git remote add origin https://github.com/USERNAME/odina-invitation.git
   git push -u origin main
   ```
---
## ✨ Xususiyatlar

- 🎀 **Welcome modal** — sahifa ochilganda "Assalomu alaykum, aziz do'stim!" xabari
- ⏰ **Jonli countdown** — 14-mayga qolgan kun/soat/daqiqa/soniya
- 🌸 **Gullar yog'ilishi** — orqa fonda doimiy petal animatsiyasi
- 🎵 **Piano fon musiqasi** — "Rahmat!" bosilgandan keyin avtomatik (past tovush)
- 🔐 **Parol kartochkasi** — bosilsa "Yaxshi kayfiyat" clipboardga nusxalanadi
- 💗 **"Sizni yaxshi ko'ramiz" widget** — bosilsa uchuvchi yuraklar
- 📱 **Responsive** — telefon, planshet, kompyuterga moslashgan
- ✨ **Scroll reveal** — sahifalab pastga siljishda elementlar chiroyli paydo bo'ladi

---

## 🎨 Dizayn tafsilotlari

| Element | Qiymat |
|---------|--------|
| Asosiy rang | `#9d4661` (nafis rose) |
| Fon gradienti | cream → rose-light → cream |
| Display shrift | Playfair Display Italic |
| Body shrift | Cormorant Garamond Italic |
| Sans shrift | Montserrat (labels uchun) |

---

## 📝 Matnni o'zgartirish

Agar xabarni to'g'rilamoqchi bo'lsangiz — `index.html` faylida quyidagi joylarga qarang:

- **Hero ism** (`Odina`) → `<h1 class="hero__name">`
- **Sana** → `.hero__date` ichidagi `14 • MAY • 2026`
- **Taklif xabari** → `.invitation` section
- **Parol** → `.password-card__value`
- **Xususiyatlar** → `.features__grid` ichidagi `.feature-card` lar

JavaScript'da countdown sanasini o'zgartirish uchun `script.js` dagi birinchi qatorga qarang:
```js
const targetDate = new Date('2026-05-14T00:00:00').getTime();
```

---

Odinaga tug'ilgan kuni muborak bo'lsin! 🎂🌸💐
