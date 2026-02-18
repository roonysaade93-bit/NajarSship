import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingRescue from './pages/LandingRescue';
import LandingPremium from './pages/LandingPremium';

function App() {
  return (
    <Router>
      <Routes>
        {/* דף ברירת מחדל שיפנה אותך לדפים האמיתיים */}
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-5">
            <h1 className="text-3xl">בחר דף לבדיקה:</h1>
            <a href="/rescue" className="bg-red-600 px-6 py-3 rounded text-xl">דף חילוץ (Rescue)</a>
            <a href="/premium" className="bg-blue-600 px-6 py-3 rounded text-xl">דף יוקרה (Premium)</a>
          </div>
        } />
        
        {/* הדפים שלנו */}
        <Route path="/rescue" element={<LandingRescue />} />
        <Route path="/premium" element={<LandingPremium />} />
      </Routes>
    </Router>
  );
}

export default App;