import React from 'react';
import { FaGem, FaChartLine, FaUserTie } from 'react-icons/fa';

const LandingPremium = () => {
  // --- הגדרות חשובות ---
  
  // 1. המספר המתוקן (ללא רווחים, מקפים או פלוס)
  const phoneNumber = "972542849889"; 
  
  const whatsappMessage = "مرحباً، أود الانضمام لنخبة المستوردين (VIP Service).";
  // הקישור משתמש במשתמש phoneNumber שהגדרנו למעלה
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // 2. הפונקציה ששולחת דיווח לפייסבוק
  const handleWhatsAppClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', { 
        content_name: 'Premium VIP Lead',
        value: 20, 
        currency: 'ILS'
      });
      console.log("Pixel Fired: Premium Lead");
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        
        <div className="bg-white/5 border border-amber-500/40 text-amber-400 px-6 py-1 rounded-full text-xs tracking-widest uppercase mb-8 backdrop-blur-md">
          Premium Logistic Partner
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-l from-white via-gray-200 to-gray-400">
          القوة التكنولوجية في خدمة استيرادك: <br />
          <span className="text-white">سيطر على تجارتك العالمية بهدوء.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-12 font-light">
          أكثر من مجرد شحن، نحن شريكك اللوجستي الاستراتيجي للنمو بلا حدود.
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-500 group">
            <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/40 transition">
                <FaChartLine className="text-blue-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">شفافية مطلقة</h3>
            <p className="text-gray-400 text-sm leading-relaxed">تتبع مسار شحناتك لحظة بلحظة بدقة رقمية متناهية عبر لوحة تحكم ذكية.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-500 group">
            <div className="bg-amber-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/40 transition">
                <FaGem className="text-amber-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">صفر مفاجآت</h3>
            <p className="text-gray-400 text-sm leading-relaxed">تسعير دقيق ونهائي منذ البداية، دون أي رسوم خفية أو غير متوقعة.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-500 group">
             <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/40 transition">
                <FaUserTie className="text-purple-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">مرافقة شخصية VIP</h3>
            <p className="text-gray-400 text-sm leading-relaxed">مستشار لوجستي مخصص يضمن لك أعلى معايير الخدمة والسرية.</p>
          </div>
        </div>

        {/* הכפתור */}
        <a 
          href={whatsappLink}
          onClick={handleWhatsAppClick}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xl font-bold py-4 px-16 rounded-full shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all transform hover:-translate-y-1"
        >
          انضم لنخبة المستوردين
        </a>
        
      </div>
    </div>
  );
};

export default LandingPremium;