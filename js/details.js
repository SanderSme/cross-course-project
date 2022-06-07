const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const gameID = params.get("id");

const API_URL =
  "https://gamehub.flywheelsites.com/wp-json/wc/store/products/" + gameID;

const details = document.querySelector(".game");
let title = document.querySelector("title");

async function getGameDetails() {
  try {
    const response = await fetch(API_URL);
    const singleGameData = await response.json();

    let gameImage = singleGameData.images[0].src;
    let gameTitle = singleGameData.name;
    let gameDescription = singleGameData.description;
    let amount = singleGameData.prices.price;
    let currency = singleGameData.prices.currency_code;
    let price = amount + currency;
    let imageAlt = singleGameData.images[0].alt;
    let category = singleGameData.categories[0].name;
    let releaseDate = singleGameData.short_description;

    title.innerHTML = `Gamehub - ${gameTitle}`;
    details.innerHTML = `<img
    src="${gameImage}"
    alt="${imageAlt}"
    class="game-image"
  />
  <div class="game-content">
    <h2 class="game-title">${gameTitle}</h2>
    <p class="game-information">
      ${gameDescription}
    </p>
    <div class="game-sellingpoints">
      <span> Price: </span> <span> ${price} </span>
    </div>
    <div class="game-sellingpoints">
      <span> Release date: </span> <span> ${releaseDate} </span>
    </div>
    <div class="game-sellingpoints">
      <span> Category: </span> <span> ${category}</span>
    </div>
  </div>`;
  } catch (error) {
    details.innerHTML = `<p class="fetch-error">Bip bop something went wrong</p>`
  }
}

getGameDetails();

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// const url =
//   "https://emilbacklund.flywheelsites.com/wp-json/wc/store/products/" + id;

// const breadcrumbGameName = document.querySelector(".breadcrumb-game-name");
// const gameHeading = document.querySelector(".game-detail-heading");
// const gameDetailBox = document.querySelector(".detail-youtube-box");

// async function fetchDetails() {
//   try {
//     const response = await fetch(url);
//     const detailData = await response.json();

//     console.log(detailData);
//     console.log(detailData.images[0].src);

//     let detailPicture = detailData.images[1].src;

//     breadcrumbGameName.innerHTML = `<a href="javascript:window.location.reload(true)">${detailData.name}</a>`;
//     gameHeading.innerHTML = `${detailData.name}`;
//     gameDetailBox.innerHTML = `
//     <div class="detail-img-container">
//     <img
//     style=
//     "background:url(${detailPicture});"
//     class="game-detail-youtube"
//     src="${detailPicture}"
//     alt="gameplay trailer for Cyberpunk"/>
//     </div>
//   <div class="game-detail-flex">
//     <div>
//       <img
//         class="heart"
//         src="/images/icons/heart.png"
//         alt="press the heart to like this gameplay trailer"
//       />
//       <p class="wish-list-text">Add to wish list</p>
//     </div>
//     <div>
//       <p class="game-cost-text">500 kr</p>
//       <a href="/payment-page.html"
//         ><button class="cta-button">Buy Digital</button></a
//       >
//     </div>
//   </div>`;
//   } catch (error) {}
// }

// fetchDetails();
