# 🧱 Remwaste Skip Selector – My Development Approach

Hi there! This project is a simple React web application I created to allow users to choose a skip size for waste disposal. It’s clean, mobile-friendly, and built with modern tools like Vite and Tailwind CSS. Below, I’ve shared the way I approached building it.

---

## 🛠️ What I Used

- **React** – for building the UI
- **Vite** – to quickly spin up and build the project
- **Tailwind CSS** – for styling without writing custom CSS
- **Lucide Icons** – for nice modern icons
- **GitHub Pages** – to deploy the site live online

---

## 💡 My Approach (In Simple Words)

1. **Started with a basic React setup** using Vite to keep everything fast and lightweight.

2. **Added Tailwind CSS** and configured dark mode so users can switch between light and dark themes.

3. **Split the layout into components**:

   - `SkipCard.jsx` shows each skip option with size, price, and reviews.
   - `BillingSummary.jsx` shows the price details after a skip is selected.
   - `ThemeToggle.jsx` lets users switch color mode.
   - `TitleSection.jsx` displays a nice heading and subtitle.

4. **Made it responsive** – On desktop, product cards are displayed in a responsive way. On mobile, the product cards adjust their size according to screen size.

5. **Used fake data** in a file called `skipData.js` so I could focus on layout and logic without needing a backend.

6. **Tested the UI on mobile and desktop** to make sure everything looked good, resized properly, and the buttons worked without breaking the layout.

7. **Added smooth hover effects and selected states** to make the UI feel a bit more interactive.

8. **Prepared for deployment** by updating `vite.config.js` and `package.json` to work with GitHub Pages.

---

## 🚀 To Run Locally

```bash
npm install
npm run dev
```

## 🌐 To Deploy

```bash
npm run build
npm run deploy
```

---

## 🧩 App Preview Screenshots

Here are a few screenshots that show how the Remwaste Skip Selector works:

![Skip Options](https://github.com/user-attachments/assets/e4df69ca-ac05-47f5-8c15-fd4f457c12d6)
![Dark Mode](https://github.com/user-attachments/assets/a862bc0c-1515-4a45-ae41-d073abe77e85)
![Responsive UI](https://github.com/user-attachments/assets/b0291b72-7363-42c3-a021-e0fbb80b1be5)
![Billing Summary](https://github.com/user-attachments/assets/5c896684-c0fb-410e-a46b-a3d1a0175a82)
![Mobile View](https://github.com/user-attachments/assets/0dd189fd-4c42-4900-93cd-d845e49dd18d)
![Theme Toggle](https://github.com/user-attachments/assets/6dbd3b04-b6bd-4d78-a7c0-d666f8f6d43a)

Thanks for checking out my work! 😊
