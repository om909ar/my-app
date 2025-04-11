import React, { useState } from 'react';
import './App.css';
function App() {
  const [azkar, setAzkar] = useState('');

  const morningAzkar = `
    (1) أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ...
    (3) الأخلاص والمعوذتين...
    (1) أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله...
  `;

  const eveningAzkar = `
    1. أَمْسَيْنا وَأَمْسَى المـلكُ للهِ...
    2. اللّهـمَّ أَنْتَ رَبِّـي...
  `;

  return (
    <div className="container">
      <h1 className="title">أذكار المسلم</h1>

      <div className="buttonsWrapper">
        <button className="cardButton" onClick={() => setAzkar(morningAzkar)}>
          📿 أذكار الصباح
        </button>
        <button className="cardButton" onClick={() => setAzkar(eveningAzkar)}>
          🌙 أذكار المساء
        </button>
      </div>
      
      <div className="azkar">
        <p>{azkar}</p>
      </div>
    </div>
  );
}

export default App;
