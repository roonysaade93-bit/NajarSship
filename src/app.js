import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ייבוא הדפים שיצרת בתיקיית pages
import LandingRescue from './pages/LandingRescue';
import LandingPremium from './pages/LandingPremium';

function App() {
  return (
    <Router>
      <Routes>
        {/* אם מישהו נכנס לדף הבית הרגיל (אופציונלי) */}
        <Route path="/" element={<div className="p-10 text-center">ברוכים הבאים ל-NajarSship</div>} />

        {/* הדפים החדשים שלנו */}
        <Route path="/rescue" element={<LandingRescue />} />
        <Route path="/premium" element={<LandingPremium />} />
      </Routes>
    </Router>
  );
}

export default App;