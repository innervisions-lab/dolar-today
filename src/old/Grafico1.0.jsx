import React, { useState, useEffect } from "react";
import "../../styles/css/Grafico.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { FECHAMENTO_URL } from "../../utils/URLS";

export default (props) => {
    const [chartData, setChartData] = useState("");
    const [chartOptions, setChartOptions] = useState("");

    useEffect(() => {
        buscarVariacao();
    }, []);

    const buscarVariacao = async () => {
        const result = await axios({
            method: "GET",
            url: `https://api.exchangerate.host/timeseries?start_date=2020-06-01&end_date=2020-06-16&base=USD&symbols=BRL`,
        })
            .then((response) => {
                return Object.entries(response.data.rates);
            })
            .catch((error) => {
                console.log(error);
            });

        const variacaoValores = [];
        const variacaoDatas = [];
        const arr = result.sort();
        const date = new Date();
        const month = date.toLocaleString("pt", { month: "short" });
        arr.forEach(([key, value]) => {
            variacaoValores.push(value.BRL.toFixed(2));
            variacaoDatas.push(`${month.toUpperCase()} ${key.split("-")[2]}`);
        });

        Chart(variacaoValores, variacaoDatas);
    };

    const Chart = (variacaoValores, variacaoDatas) => {
        setChartData({
            labels: variacaoDatas,
            datasets: [
                {
                    label: `Variação Dolar X Real`,
                    // fill: false,
                    data: variacaoValores,
                    backgroundColor: ["rgb(88, 180, 103)"],
                    pointBorderWidth: 8,
                    pointHoverRadius: 8,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: false,
                    borderWidth: 4,
                },
            ],
        });

        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontFamily: "Roboto Mono",
                            fontColor: "#556F7B",
                            fontStyle: "bold",
                            //   beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 20,
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false,
                            drawBorder: false,
                        },
                    },
                ],
                xAxes: [
                    {
                        gridLines: {
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#556F7B",
                            fontStyle: "bold",
                            fontFamily: "Roboto Mono",
                            maxTicksLimit: 6,
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false,
                            drawBorder: false,
                        },
                    },
                ],
            },
        });
    };

    return (
        <div className="grafico-container">
            <div className="Grafico">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};
