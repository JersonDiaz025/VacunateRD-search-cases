const axios = require('axios').default;

async function api_covid() {
    try {
        let API = await axios.get(`https://covid-19.dataflowkit.com/v1/spain`);
        const obj = {
            activeCases: API.data['Active Cases_text'] ? API.data['Active Cases_text']: "0",
            country: API.data['Country_text'] ? API.data['Country_text']:'0',
            lastUpdate: API.data['Last Update'] ? API.data['Last Update']:'0',
            newCases: API.data['New Cases_text'] ? API.data['New Cases_text']:'0',
            newDeaths: API.data['New Deaths_text'] ? API.data['New Deaths_text']:'0',
            totalCases: API.data['Total Cases_text'] ? API.data['Total Cases_text']:'0',
            totalDeaths: API.data['Total Deaths_text'] ? API.data['Total Deaths_text']:'0',
            totalRecovered: API.data['Total Recovered_text'] ? API.data['Total Recovered_text']:'0'
        }
        return obj

    } catch (error) {
        console.log(error.message);
    }
}
module.exports = api_covid;
