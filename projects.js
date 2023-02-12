const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const nothing = document.querySelector(".nothing");
const container = document.createElement("container");
container.className = "container";
container.innerHTML = "";

// Popular
const popular =
  "https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20";

fetch(popular)
  .then((response) => response.json())
  .then((data) => {
    const animeList = data.data;

    // animeList.forEach((anime) => {
    //   console.log(anime.attributes.titles.en_jp);
    // });

    for (let i = 0; i < data.data.length; i++) {
      // const element = array[i];
      const anime = data.data[i];
      const div = document.createElement("div");
      div.className = "box";
      console.log(anime);
      const tn = document.createElement("img");
      const p = document.createElement("p");
      const title = document.createElement("h3");
      const a = document.createElement("a");
      const button = document.createElement("button");
      button.className = "link";
      title.innerText = anime.attributes.titles.en_jp;
      button.innerText = "Watch Here";
      button.className = "btn";
      // console.log(anime.attributes.titles.en_jp);
      a.setAttribute = "target";
      a.target = "_blank";
      a.href = `https://zoro.to/search?keyword=${title.innerText}`;
      const thumb_nail_url = anime.attributes.posterImage.small;
      tn.src = thumb_nail_url;
      div.appendChild(tn);
      div.appendChild(title);
      div.appendChild(p);
      a.appendChild(button);
      div.appendChild(a);
      container.appendChild(div);
      document.body.appendChild(container);
      const desc = anime.attributes.description;
      // console.log(desc);
      if (desc) {
        p.textContent = desc.substring(0, 150);
        p.textContent += "...";
      } else {
        p.textContent = desc;
      }
    }
  })
  .catch((error) => console.error(error));

// Search Algo
function handleSubmit() {
  event.preventDefault();
  nothing.style.display = "none";
  const url = input.value.toLowerCase().replaceAll(" ", "-");
  console.log(url);
  const API_LINK = `https://kitsu.io/api/edge/anime?filter[text]=${input.value}`;
  container.innerHTML = "";

  fetch(API_LINK)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        // const element = array[i];
        const anime = data.data[i];
        const div = document.createElement("div");
        div.className = "box";
        console.log(anime);
        const tn = document.createElement("img");
        const p = document.createElement("p");
        const title = document.createElement("h3");
        const a = document.createElement("a");
        const button = document.createElement("button");
        button.className = "link";
        title.innerText = anime.attributes.titles.en_jp;
        button.innerText = "Watch Here";
        button.className = "btn";
        // console.log(anime.attributes.titles.en_jp);
        a.setAttribute = "target";
        a.target = "_blank";
        a.href = `https://zoro.to/search?keyword=${title.innerText}`;
        const thumb_nail_url = anime.attributes.posterImage.small;
        tn.src = thumb_nail_url;
        div.appendChild(tn);
        div.appendChild(title);
        div.appendChild(p);
        a.appendChild(button);
        div.appendChild(a);
        container.appendChild(div);
        document.body.appendChild(container);
        const desc = anime.attributes.description;
        // console.log(desc);
        if (desc) {
          p.textContent = desc.substring(0, 150);
          p.textContent += "...";
        } else {
          p.textContent = desc;
        }
      }
    });
}
