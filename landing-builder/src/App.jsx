import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingRescue from './pages/LandingRescue';
import LandingPremium from './pages/LandingPremium';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-8" dir="rtl">
            <h1 className="text-4xl font-bold">בחר דף לבדיקה:</h1>
            <div className="flex flex-col gap-4">
              {/* הלינקים פה לא משנים, ה-Router מטפל בזה, אבל ליתר ביטחון: */}
              <Link to="/rescue" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-2xl font-bold text-center">
                דף חילוץ (Rescue)
              </Link>
              <Link to="/premium" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-2xl font-bold text-center">
                דף יוקרה (Premium)
              </Link>
            </div>
          </div>
        } />
        <Route path="/rescue" element={<LandingRescue />} />
        <Route path="/premium" element={<LandingPremium />} />
      </Routes>
    </Router>
  );
}

export default App;