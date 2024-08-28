const mode = document.getElementById("mode");
const imgIcon = document.getElementById("mainicone");
const selectMenu = document.querySelector(".selectMenu");
selectBtn = selectMenu.querySelector(".selectBtn");
options = selectMenu.querySelectorAll(".option");
reson = selectMenu.querySelector(".text");
const country = document.getElementById("cointener");

selectBtn.addEventListener("click", () =>
  selectMenu.classList.toggle("active")
);

mode.addEventListener("click", () => {
  document.body.classList.toggle(".dark-Mode");

  if (document.body.classList.toggle("dark-Mode")) {
    imgIcon.src = "/imgs/sun.png";
  } else {
    imgIcon.src = "/imgs/moon.png";
  }
});

function print(data) {
  country.innerHTML = ``;
  for (let i = 0; i < data.length; i++) {
    let countrys = document.createElement("div");
    countrys.classList.add("country");

    countrys.innerHTML = `<img src=${data[i]?.flags?.png} alt="${data[i]?.flags?.alt}">
            <div class="info"><hr>
            <h3>${data[i]?.name?.common}</h3><hr>
            <div>
            <b>Continent: </b>${data[i]?.continents}
            </div>
            
            <div>
            <b>Population: </b>${data[i]?.population}
            </div>
            
            <div>
            <b>Area: </b>${data[i]?.area}
            </div>
        
            </div>
            `;

    country.appendChild(countrys);
  }
}

let response = fetch("https://restcountries.com/v3.1/all");

response
  .then((reply) => {
    return reply.json();
  })
  .then((data) => {
    console.log(data);
    // console.log(data[69].name.common)
    print(data);
  })
  .catch((error) => {
    console.log("Api Not Calling ");
  });



  let search =document.querySelector("input[type='search']")

  search.addEventListener("input", ()=>{

    let searched;
    if (!search.value ==""){
      searched=fetch((`https://restcountries.com/v3.1/name/${search.value}`))
    }else{
      searched=response;
    }

    searched.then(response=>{
      return response.json();
    }).then(country =>{
      print(country);
    }).catch(error=>{
      console.log("Searching Not Happeing ")
      log(error)
    })
  })

  select.addEventListener('change',()=>{

    // log(select.value);
    let searchedRegion = fetch(`https://restcountries.com/v3.1/region/${Option.value}`);

    searchedRegion.then(response=>{
        return response.json();
    }).then(countryByRegion =>{
        print(countryByRegion);
    }).catch(err=>{
        log(err);
    })

    search.value = ``;
})

