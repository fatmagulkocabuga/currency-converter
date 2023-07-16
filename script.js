<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Döviz Uygulaması</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Döviz Çevirici</h1>
      <div class="currencyContainer">
        <select id="currencyFirst">
          <option value="USD" selected>USD</option>
          <option value="EUR">EUR</option>
          <option value="AUD">AUD</option>
          <option value="JPY">JPY</option>
          <option value="CAD">CAD</option>
        </select>
        <input type="number" id="count" value="1" min="0" />
      </div>

      <div class="currencyContainer">
        <select id="currencySecond">
          <option value="TRY" selected>TL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="AUD">AUD</option>
          <option value="JPY">JPY</option>
          <option value="CAD">CAD</option>
        </select>
        <span id="equal">43</span>
      </div>

      <p class="exchangeRate" id="exchangeRate"></p>
    </div>

    <script src="script.js"></script>
  </body>
</html>
