const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countryHTML = countries.map(country => getCountryHTML(country));
    // console.log(countryHTML[0]);
    const countiresContainer = document.getElementById("countries-container");
    countiresContainer.innerHTML = countryHTML.join(" ");
}

const getCountryHTML = ({name, flags}) =>{
    // const {name, flags} = country;
    return `
        <div class="country">
            <h1>${name.common}</h1>
            <img src="${flags.png}">
        </div>
    `
}


// option-2
// const getCountryHTML = ({name, flags}) =>{
//     // const {name, flags} = country;
//     return `
//         <div class="country">
//             <h1>${name.common}</h1>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// option-1
// const getCountryHTML = country =>{
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h1>${name.common}</h1>
//             <img src="${flags.png}">
//         </div>
//     `
// }



// // orginal
// const getCountryHTML = country =>{
//     return `
//         <div class="country">
//             <h1>${country.name.common}</h1>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }


loadCountries()