# 🛍️ Virtual Shopping Assistant

A **Virtual Shopping Assistant** built with **React + Vite + Tailwind CSS** that simulates an AI-powered shopping experience.  
The assistant provides product recommendations, conversational shopping, and a checkout simulation.

---

## 🚀 Features
- 🤖 **AI-like Chat Assistant** (simulated conversational shopping)
- 🛒 **Product Recommendations** (pulled from sample dataset in `src/data/products.ts`)
- 🎤 **Voice Interaction Ready** (extendable via Web Speech API)
- 💳 **Simulated Checkout Flow**
- 🎨 **Responsive UI** with Tailwind CSS
- ⚡ Built on **Vite + TypeScript** for fast development

---

## 📂 Project Structure
```
project/
 ├── src/
 │   ├── components/       # React components (Chat, ProductCard, etc.)
 │   ├── context/          # Chat context provider
 │   ├── data/             # Product dataset (sample products.ts)
 │   ├── services/         # API layer (extendable for backend calls)
 │   ├── App.tsx           # Root application
 │   └── main.tsx          # Entry point
 ├── index.html            # Main HTML entry
 ├── package.json          # Dependencies & scripts
 ├── tailwind.config.js    # Tailwind setup
 ├── vite.config.ts        # Vite configuration
 └── tsconfig.json         # TypeScript config
```

---

## 🛠️ Getting Started

### 1. Clone the repository & install dependencies
```bash
git clone <repo-url>
cd project
npm install
```

### 2. Run the development server
```bash
npm run dev
```
By default, the app runs at 👉 [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
npm run preview
```

---

## 🔧 Configuration

- **Products** are defined in [`src/data/products.ts`](src/data/products.ts).  
  You can replace this with API calls (Amazon/Flipkart APIs or custom backend).

- **API Layer**: Update [`src/services/api.ts`](src/services/api.ts) to connect to a backend/AI model if required.

---

## 📦 Dependencies
- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  

---

## 🌐 Deployment
You can deploy this project for free on platforms like:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Build command:
```bash
npm run build
```
Publish directory:
```
dist/
```

---

## 🤝 Contributing
Contributions are welcome!  
Feel free to open issues and submit pull requests.

---

## 📜 License
This project is licensed under the MIT License.
