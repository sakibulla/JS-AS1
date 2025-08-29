// CALL: spend coins, add history, block if not enough
const callEls = document.getElementsByClassName("call");
for (let i = 0; i < callEls.length; i++) {
  callEls[i].addEventListener("click", function (e) {
    const coinsEl = document.getElementById("coins");
    const coins = parseInt(coinsEl.textContent, 10) || 0;

    // 🚨 If not enough coins, stop immediately
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 to make a call.");
      e.preventDefault(); // stop tel: link
      return; // terminate handler
    }

    // ✅ Deduct 20 coins
    const newCoins = coins - 20;
    coinsEl.innerHTML = newCoins + ` <img class="max-w-5" src="assets/coin.png">`;

    // Add to call history
    const card = this.closest(".p-8") || this.closest("article");
    const title = card ? (card.querySelector("h3")?.innerText.trim() || "Unknown Service") : "Unknown Service";
    const number = card ? (card.querySelector("h1")?.innerText.trim() || "") : "";
    const time = new Date().toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });