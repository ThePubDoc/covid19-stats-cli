const axios = require('axios');

module.exports = async () => {
	var config = {
		method: 'get',
		url: 'https://covidapi.info/api/v1/global',
		headers: {},
	};

	const data = {};
	data.worldwide = {};
	data.india = {};

	const globalRes = await axios.default.get(
		'https://covidapi.info/api/v1/global'
	);
	data.worldwide.date = globalRes.data.date;
	data.worldwide.confirmed = globalRes.data.result.confirmed;
	data.worldwide.deaths = globalRes.data.result.deaths;
	data.worldwide.recovered = globalRes.data.result.recovered;

	const indiaRes = await axios.default.get(
		'https://covidapi.info/api/v1/country/IND/latest'
	);

	for (cases in indiaRes.data.result) {
		data.india.date = cases;
		data.india.confirmed = indiaRes.data.result[cases].confirmed;
		data.india.deaths = indiaRes.data.result[cases].deaths;
		data.india.recovered = indiaRes.data.result[cases].recovered;
	}
	console.log(data);
};
