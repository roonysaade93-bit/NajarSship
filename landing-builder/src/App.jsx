import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingRescue from './pages/LandingRescue';
import LandingPremium from './pages/LandingPremium';

// ... שאר הייבואים

function App() {
  return (
    // הוספנו כאן את basename="/promo"
    <Router basename="/promo"> 
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-5" dir="rtl">
            <h1 className="text-3xl">בחר דף לבדיקה:</h1>
            <a href="/promo/rescue" className="bg-red-600 px-6 py-3 rounded text-xl">דף חילוץ (Rescue)</a>
            <a href="/promo/premium" className="bg-blue-600 px-6 py-3 rounded text-xl">דף יוקרה (Premium)</a>
          </div>
        } />
        
        <Route path="/rescue" element={<LandingRescue />} />
        <Route path="/premium" element={<LandingPremium />} />
      </Routes>
    </Router>
  );
}

export default App;