import React from 'react';
import { FaExclamationTriangle, FaClock, FaShieldAlt } from 'react-icons/fa';

const LandingRescue = () => {
  // --- הגדרות חשובות ---
  
  // 1. המספר המתוקן (ללא רווחים, מקפים או פלוס)
  const phoneNumber = "972542849889"; 
  
  const whatsappMessage = "مرحباً، لدي بضاعة عالقة وأحتاج مساعدة عاجلة (Rescue Service).";
  // הקישור משתמש במשתמש phoneNumber שהגדרנו למעלה
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // 2. הפונקציה ששולחת דיווח לפייסבוק
  const handleWhatsAppClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', { 
        content_name: 'Rescue Page Lead', 
        value: 10, 
        currency: 'ILS'
      });
      console.log("Pixel Fired: Rescue Lead");
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-900 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/busy-port.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-slate-900/90"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        
        <div className="bg-red-600/20 border border-red-500 text-red-400 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse flex items-center gap-2">
          <FaExclamationTriangle />
          <span>خدمة الطوارئ اللوجستية</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight mb-4 drop-shadow-lg">
          بضاعتك <span className="text-red-500">عالقة</span> في الصين أو تركيا؟ <br />
          لا تترك استثمارك للصدفة.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-10">
          نحن طوق النجاة الخاص بك: حلول جمركية ولوجستية ذكية خلال <span className="text-white font-bold border-b-2 border-red-500">24 ساعة فقط</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 p-6 rounded-xl hover:bg-white/10 transition duration-300">
            <FaClock className="text-red-500 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">تجنب الغرامات الباهظة</h3>
            <p className="text-gray-400 text-sm">كل ساعة تمر تزيد من التكاليف، تدخل الآن لإنقاذ أرباحك.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 p-6 rounded-xl hover:bg-white/10 transition duration-300">
            <FaShieldAlt className="text-red-500 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">خبرة في فك التعقيدات</h3>
            <p className="text-gray-400 text-sm">نملك القوة لإنهاء الإجراءات البيروقراطية المعقدة بلمحة بصر.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 p-6 rounded-xl hover:bg-white/10 transition duration-300">
            <FaExclamationTriangle className="text-red-500 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">قبل فوات الأوان</h3>
            <p className="text-gray-400 text-sm">الأسواق لا تنتظر، حرر بضاعتك اليوم لضمان وصولها في موعدها.</p>
          </div>
        </div>

        {/* הכפתור */}
        <a 
          href={whatsappLink}
          onClick={handleWhatsAppClick}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105"
        >
          <span className="flex items-center gap-3">
             حرر بضاعتي الآن
             <span className="group-hover:-translate-x-2 transition-transform">←</span>
          </span>
        </a>
        <p className="mt-4 text-gray-500 text-sm">استشارة فورية بدون التزام</p>

      </div>
    </div>
  );
};

export default LandingRescue;