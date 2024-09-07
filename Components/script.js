const countriesElem = document.querySelector(".countries");
const dropdown = document.querySelector(".dropdown button");
const dropElem = document.querySelector(".showDropDown");
const regionElems = document.querySelectorAll(".region");
const searchInput = document.querySelector(".form-control input");

async function getCountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);
    });
}
getCountry();

function showCountry(data) {
    const country = document.createElement("div");
    country.classList.add("country");
    country.innerHTML = `
        <div class="country-img">
            <img class="image" src="${data.flags.svg}" alt="Flag of ${data.name.common}">
        </div>
        <div class="countryInfo">
            <h5>${data.name.common}</h5>
            <p><b>Population:</b> ${data.population.toLocaleString()}</p>
            <p class="regionName"><b>Region:</b> ${data.region}</p>
            <p><b>Capital:</b> ${data.capital ? data.capital[0] : 'N/A'}</p>
        </div>
    `;
    countriesElem.appendChild(country);
}


dropdown.addEventListener("click", () => {
    dropElem.classList.toggle("showDropDown");
    console.log("Dropdown toggled");
});

regionElems.forEach(element => {
    element.addEventListener("click", () => {
        const selectedRegion = element.textContent;
        filterCountriesByRegion(selectedRegion);
    });
});

function filterCountriesByRegion(region) {
    const countryElems = document.querySelectorAll(".country");
    countryElems.forEach(country => {
        const regionName = country.querySelector(".regionName").textContent.split(': ')[1];
        if (region === "All" || regionName === region) {
            country.style.display = "grid";
        } else {
            country.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const countryElems = document.querySelectorAll(".country");
    countryElems.forEach(country => {
        const countryName = country.querySelector("h5").textContent.toLowerCase();
        if (countryName.includes(query)) {
            country.style.display = "grid";
        } else {
            country.style.display = "none";
        }
    });
});






// const countriesElem = document.querySelector(".countries");
// const dropdown = document.querySelector(".dropdown")
// const dropElem = document.querySelector(".drop")
// const region = document.querySelectorAll(".region")



// async function getCountry() {
//    const url= await fetch("https://restcountries.com/v3.1/all");
//    const res = await url.json();
//    console.log(res);
// //    showCountry(res);
//  res.forEach(element => {
//     showCountry(element)
//  });
// }
//    getCountry();
//    function showCountry(data){
//     const country= document.createElement("div")
//     country.classList.add("country")
//     country.innerHTML= `
//      <div class="country-img">

//                     <img class="image" src="${data.flag}" alt="">
//                 </div>
//                 <div class="countryInfo">
//                     <h5>${data.name}</h5>
//                     <p><b>${data.popultion}: </b>81,770,900</p>
//                     <p class="regionName"><b>${data.region}: </b>Europe</p>
//                     <p><b>${data.capital}: </b>Berlin</p>
//                 </div>
//                 `;
//                 countriesElem.appendChild(country);

//    }
//    dropdown.addEventListener("click", ()=> {
//        dropElem.classList.toggle("showDropDown")
//        console.log("Hello");
       
//    })
//    const regionName = document.getElementsByClassName(".regionName")
//    regionName.forEach(element => {
//     element.addEventListener("click", ()=> {
//         console.log(element);
        
//         Array.from(region).forEach(elem => {
//             if(element.innerText.includes(elem.innerText) || element.innerText == "All"){
//                 elem.parentElement.parentElement.style.display= "grid"
//             }else{
//                  element.parentElement.parentElement.style.display= "none"
//             }
//             })
            
            
//         })
        
//     })



