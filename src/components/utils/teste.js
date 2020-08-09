// import axios from "axios";
const axios = require("axios");
const moment = require('moment');

const fun = async (days, currency) => {
    // const dataAtual = new Date();
    // const diaAtual = dataAtual.getDate();
    // const mesAtual =
    //     dataAtual.getMonth() > 8
    //         ? dataAtual.getMonth() + 1
    //         : `0${dataAtual.getMonth() + 1}`;
    const day = moment().format("DD")
    const month = moment().format("MM")
    const year = moment().format("YYYY");
    const dataInicio = `${moment().subtract(20,"days").format("YYYY-MM-DD")}`;
    const dataFinal = `${year}-${month}-${day}`;

    // console.log(moment().format("MM"));
    console.log(dataInicio);
    console.log(dataFinal);
    console.log(day);
    console.log(month);
    console.log(year);

    const result = await axios({
        method: "GET",
        url: `https://api.exchangerate.host/timeseries?start_date=${dataInicio}&end_date=${dataFinal}&base=${currency}&symbols=BRL`,
    })
        .then((response) => {
            return Object.entries(response.data.rates);
        })
        .catch((error) => {
            console.log(error);
        });

    const Values = [];
    const Dates = [];
    const arr = result.sort();
    const months = [
        "JANEIRO",
        "FEVEREIRO",
        "MARÇO",
        "ABRIL",
        "MAIO",
        "JUNHO",
        "JULHO",
        "AGOSTO",
        "SETEMBRO",
        "OUTUBRO",
        "NOVEMBRO",
        "DEZEMBRO",
    ];
    arr.forEach(([key, value]) => {
        Values.push(value.BRL.toFixed(2));
        // console.log(key);
        let month = key.split("-")[1];
        Dates.push(`${months[month-1].toUpperCase()} ${key.split("-")[2]}`);
    });

    console.log(Dates);
};
fun();
