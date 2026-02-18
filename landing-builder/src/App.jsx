import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingRescue from './pages/LandingRescue';
import LandingPremium from './pages/LandingPremium';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* דף התפריט הראשי */}
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-8" dir="rtl">
            <h1 className="text-4xl font-bold mb-4">בחר דף לבדיקה:</h1>
            
            <div className="flex flex-col gap-6 w-full max-w-md px-4">
              {/* שינינו ל-a href רגיל עם סולמית מפורשת! */}
              <a href="#/rescue" className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg text-2xl font-bold text-center shadow-lg transition transform hover:scale-105">
                דף חילוץ (Rescue)
              </a>
              
              <a href="#/premium" className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-2xl font-bold text-center shadow-lg transition transform hover:scale-105">
                דף יוקרה (Premium)
              </a>
            </div>
          </div>
        } />
        
        <Route path="/rescue" element={<LandingRescue />} />
        <Route path="/premium" element={<LandingPremium />} />
      </Routes>
    </HashRouter>
  );
}

export default App;