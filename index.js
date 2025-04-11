<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>أذكار المسلم</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1 class="title">أذكار المسلم</h1>
    <div class="buttonsWrapper">
      <button class="cardButton" onclick="showAzkar('morning')">
        📿 أذكار الصباح
      </button>
      <button class="cardButton" onclick="showAzkar('evening')">
        🌙 أذكار المساء
      </button>
    </div>
    <div class="azkar">
      <p id="azkarText"></p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
