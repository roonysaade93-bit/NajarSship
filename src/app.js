import React from 'react';
// שים לב: שינינו ל-HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingRescue from './pages/LandingRescue';
import LandingPremium from './pages/LandingPremium';

function App() {
  return (
    // מחקנו את ה-basename, לא צריך אותו ב-HashRouter
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-5" dir="rtl">
            <h1 className="text-3xl">בחר דף לבדיקה:</h1>
            {/* שים לב לשינוי בלינקים: הוספנו # */}
            <a href="/promo/#/rescue" className="bg-red-600 px-6 py-3 rounded text-xl">דף חילוץ (Rescue)</a>
            <a href="/promo/#/premium" className="bg-blue-600 px-6 py-3 rounded text-xl">דף יוקרה (Premium)</a>
          </div>
        } />
        
        <Route path="/rescue" element={<LandingRescue />} />
        <Route path="/premium" element={<LandingPremium />} />
      </Routes>
    </Router>
  );
}

export default App;