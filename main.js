
fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=dc410b76cac740ca95dc5ff15afe0a43")
  .then((result) => {
    let myData = result.json();
    return myData;
  }).then((currency) => {
    let dollar = document.querySelector(".amount")
    dollar.onkeyup = function () {
    let EGP = document.querySelector(".egp span");
    let SAR = document.querySelector(".sar span");
    let EUR = document.querySelector(".EUR span");
    let GBP = document.querySelector(".GBP span");
    let KWD = document.querySelector(".KWD span");
    let CHF = document.querySelector(".CHF span");
    EGP.innerHTML = Math.round(dollar.value * currency.rates["EGP"]);
    SAR.innerHTML = Math.round(dollar.value * currency.rates["SAR"]);
    EUR.innerHTML = Math.round(dollar.value * currency.rates["EUR"]);
    GBP.innerHTML = Math.round(dollar.value * currency.rates["GBP"]);
    KWD.innerHTML = Math.round(dollar.value * currency.rates["KWD"]);
    CHF.innerHTML = Math.round(dollar.value * currency.rates["CHF"]);
    }
  });