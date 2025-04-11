import React from 'react';
import ReactDOM from 'react-dom/client';  // تأكد من استخدام `react-dom/client`
import './index.css';
import App from './App';  // تأكد من استيراد App.js
import reportWebVitals from './reportWebVitals';  // للتأكد من أن الموقع يعمل بكفاءة

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();  // وظيفة مراقبة الأداء
