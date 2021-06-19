import {Chart} from "chart.js";
import data from "../lib/csvjson.js";

function setUpNumbers(){
    let labels = []
    let rates = []
    const numbers = {
        all: 300,
        covid: 0,
        good: 0,
    }
    let i = 0;
    let min = 1000
    while (i < 3000) {
        if (data[i]["y"] === 1) {
            const labelsInner = [data[i]["y"]]
            const ratesInner = [data[i]["x"]]
            numbers.covid++;
            i++;
            while (data[i]["y"] === 1 && i<3000) {
                i++;
                numbers.covid++;
                labelsInner.push(data[i]["y"])
                ratesInner.push(data[i]["x"])
                if(data[i]["x"]<min)min=data[i]["x"]
            }
            labels.push(labelsInner)
            rates.push(ratesInner)
        } else {
            i++;
            numbers.good++;
        }
    }
    numbers.all = numbers.covid + numbers.good;
    return {labels, rates, numbers, min }
}

export default function useChart(ctx) {

    const {labels, rates, numbers, min} = setUpNumbers();
    let labelsLink = labels[11]
    let ratesLink = rates[11]
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsLink,
            datasets: [{
                label: 'Rate',
                data: ratesLink,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    min: min,
                }
            },
            maintainAspectRatio: false
        }
    });
    return {chart, numbers, labels, rates, labelsLink, ratesLink}
}
