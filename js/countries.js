const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countryHTML = countries.map(country => getCountryHTML(country));
    console.log(countryHTML[0]);
    const countiresContainer = document.getElementById("countries-container");
    countiresContainer.innerHTML = countryHTML;
}

const getCountryHTML = country =>{
    return `
        <div>
            <h1>${country.name.common}</h1>
        </div>
    `
}


loadCountries()