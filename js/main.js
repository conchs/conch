const newsData = [
  {
    title: "Cruise Ship Sets Sail After 2 Years",
    img: "assets/cruise.jpg",
    category: "Cruise",
    summary: "After a long pause, international cruises resume with new safety norms."
  },
  {
    title: "Global Shipping Faces New Fuel Rules",
    img: "assets/shipping.jpg",
    category: "Commercial Shipping",
    summary: "IMO regulations require greener fuels for ocean freighters starting 2025."
  }
];

const container = document.getElementById("news-tiles");
newsData.forEach(news => {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.innerHTML = `
    <img src="${news.img}" alt="${news.title}" />
    <h3>${news.title}</h3>
    <p>${news.summary}</p>
  `;
  container.appendChild(tile);
});
