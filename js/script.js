const APIURL = "https://gamehub.flywheelsites.com/wp-json/wc/store/products/";

const gamesContainer = document.querySelector(".desktop-games");
const gamesContainerMobile = document.querySelector(".game");

async function getGames() {
  try {
    const response = await fetch(APIURL);
    const gameData = await response.json();
    gamesContainer.innerHTML = "";
    for (let i = 0; i < gameData.length; i++) {
      let price = gameData[i].prices.price + gameData[i].prices.currency_code;
      gamesContainer.innerHTML += `<div class="desktop-game-singular">
      <img
        src="${gameData[i].images[0].src}"
        alt="${gameData[i].images[0].alt}"
        class="desktop-game-image"
      />
      <div class="desktop-game-content">
        <h4 class="desktop-game-title">${gameData[i].name}</h4>
        <p class="desktop-game-price">Price: ${price}</p>
        <a href="details.html?id=${gameData[i].id}" class="game-button"
          >Read more</a
        >
      </div>
    </div>`;
      gamesContainerMobile.innerHTML += `<img
      src="${gameData[i].images[0].src}"
      alt="${gameData[i].images[0].alt}"
        class="game-image"
      />
      <div class="game-content">
        <h4 class="game-title">${gameData[i].name}</h4>
        <p class="game-price">${price}</p>
        <a href="details.html?id=${gameData[i].id}" class="game-button"
          >Read more</a
        >`;
    }
  } catch (error) {
    gamesContainer.innerHTML = `<div class="fetch-error"> Bip bop something went wrong... </div>`;
  }
}

getGames();
