fetch('https://disease.sh/v3/covid-19/countries/india')
.then((response) => {
  return response.json();
})
.then((data) => {
    console.log(data);
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("critical").innerHTML = data.critical.toLocaleString();
    document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("todayCases").innerHTML = data.todayCases.toLocaleString();
    document.getElementById("todayRecovered").innerHTML = data.todayRecovered.toLocaleString();

    document.getElementById("flag").src = data.countryInfo.flag;

})