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

    const history = document.getElementById("callHistory");
    if (history) {
      history.insertAdjacentHTML(
        "afterbegin",
        `<div class="bg-gray-50 rounded-xl px-4 py-3 flex items-start justify-between">
          <div>
            <div class="font-semibold leading-tight">${title}</div>
            <div class="text-sm text-gray-500">${number}</div>
          </div>
          <div class="text-sm text-gray-500 whitespace-nowrap mt-1">${time}</div>
        </div>`
      );
    }

    alert("Call logged successfully!");
  });
}


// HEART: +1 header counter
const hearts = document.getElementsByClassName("fa-heart");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    const heartWrap = document.getElementById("heart");
    const current = parseInt(heartWrap.textContent, 10) || 0;
    const next = current + 1;
    heartWrap.innerHTML = next + ` <img class="max-w-5" src="assets/heart.png">`;
  });
}

// COPY: copy card number + bump header counter
const copies = document.getElementsByClassName("copy");
for (let i = 0; i < copies.length; i++) {
  copies[i].addEventListener("click", function () {
    const card = this.closest(".p-8") || this.closest("article");
    const number = card?.querySelector("h1")?.innerText.trim() || "";

    // ✅ actually copy to clipboard
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(number).then(() => {
        alert(`Number ${number} copied to clipboard!`);
      });
    } else {
      const ta = document.createElement("textarea");
      ta.value = number;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert(`Number ${number} copied to clipboard!`);
    }

    // bump counter
    const copyCounter = document.getElementById("copy-count");
    const current = parseInt(copyCounter.textContent, 10) || 0;
    copyCounter.textContent = current + 1;
  });
}


// CLEAR: wipe call history list
const clearBtn = document.getElementById("clearHistoryBtn");
if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    const history = document.getElementById("callHistory");
    if (history) {
      history.innerHTML = "";
    }
  });
}
