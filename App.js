import React, { useState } from 'react';
import './App.css';  // تأكد من أن لديك ملف `App.css` مع التنسيقات

function App() {
  const [azkar, setAzkar] = useState('');  // لتخزين الأذكار المعروضة

  // أذكار الصباح
  const morningAzkar = `
    (1) أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ...
    (2) اللّهُ لا إله إلا هو الحي القيوم...
    (3) اللّهُـمَّ أَنْتَ رَبِّي لا إلهَ إلاّ أَنْتَ...
    (4) اللّهُـمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ...
  `;

  // أذكار المساء
  const eveningAzkar = `
    1. أَمْسَيْنا وَأَمْسَى المـلكُ للهِ...
    2. اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ...
    (بقية الأذكار...)
  `;

  // وظيفة لعرض الأذكار بناءً على الاختيار
  function showAzkar(timeOfDay) {
    let azkarText = timeOfDay === 'morning' ? morningAzkar : eveningAzkar;
    setAzkar(azkarText);  // تغيير النص المعروض
  }

  return (
    <div className="container">
      <h1 className="title">أذكار المسلم</h1>
      <div className="buttonsWrapper">
        <button className="cardButton" onClick={() => showAzkar('morning')}>
          📿 أذكار الصباح
        </button>
        <button className="cardButton" onClick={() => showAzkar('evening')}>
          🌙 أذكار المساء
        </button>
      </div>
      <div className="azkar">
        <p>{azkar}</p>  {/* عرض الأذكار هنا */}
      </div>
    </div>
  );
}

export default App;
