import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import { ChatProvider } from './context/ChatContext';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/" element={
        <ChatProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-4xl">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <ChatInterface />
              </div>
            </main>
          </div>
        </ChatProvider>
      } />
    </Routes>
  );
}

export default App;