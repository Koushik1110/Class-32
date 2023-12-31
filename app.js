"use strict";

// //fetch data from any api

// function fetchData() {
//   renderLoading(true);

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (!res.ok)
//         throw new Error("An error has occurred. Failed to fetch the data.");

//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderData(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       renderError(err.message);
//     })
//     .finally(() => {
//       renderLoading(false);
//     });
// }

// function renderData(posts) {
//   posts.forEach((post) => {
//     const template = `
//       <div>
//       <h1>${post.id} - ${post.title}</h1>
//       </div>
//       `;
//     document.body.insertAdjacentHTML("beforeend", template);
//   });
// }

// function renderError(msg) {
//   const template = `<h1>${msg}</h1>`;
//   document.body.insertAdjacentHTML("beforeend", template);
// }

// function renderLoading(loadingState) {
//   const template = `<h1 class="loading">loading...</h1>`;

//   if (loadingState) {
//     document.body.insertAdjacentHTML("beforeend", template);
//   } else {
//     document.querySelector(".loading").style.display = "none";
//   }
// }

// fetchData();

//Await

async function fetchData() {
  try {
    renderLoading(true)
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok)
      throw new Error("Something went wrong. Failed to fetch the data.");
    const data = await res.json();
    console.log(data);
    renderData(data);
  } catch (err) {
    console.log(err.message);
    renderError(err.message)
  }finally{
    renderLoading(false)
  }
}

function renderData(countries) {
  countries.forEach((country) => {
    const template = `<div>
      <h1>Country Name: ${country?.name?.common}</h1>
      <h2>Capital: ${country?.capital?.at(0)}</h2>
      <p>Area: ${country?.area} km<sup>2</sup></p>
      <p>Population: ${
        country?.population > 1000000
          ? (country?.population / 1000000).toFixed(4)
          : country?.population
      }
      ${country?.population > 1000000 ? "M" : ""}</p>
    </div>`;

    document.body.insertAdjacentHTML("beforeend", template);
  });
}

function renderError(msg) {
  const template =`<p>${msg}</p>`

  document.body.insertAdjacentHTML("beforeend", template)
}

function renderLoading(loadingState) {
  const template = `<h1 class="loading">loading...</h1>`;

  if (loadingState) {
    document.body.insertAdjacentHTML("beforeend", template);
  } else {
    document.querySelector(".loading").style.display = "none";
  }
}
fetchData();
