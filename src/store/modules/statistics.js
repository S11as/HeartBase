import {SET_NUMBERS, UPDATE_CHART} from "@/store/types";

const state = () => {
    return {
        good: 0,
        all: 0,
        covid: 0,
        labels: [],
        rates: [],
        labelsLink: null,
        ratesLink: null,
        chart: null,
        index: 0
    }
}

const getters = {
    percent: state => {
        return state.covid/state.all * 500
    }
}

const mutations = {
    [SET_NUMBERS](state, payload) {
        state.good = payload.good;
        state.all = payload.all;
        state.covid = payload.covid;
        state.labels = payload.labels;
        state.rates = payload.rates;
        state.chart = payload.chart;
        state.labelsLink = payload.labelsLink;
        state.ratesLink = payload.ratesLink;
    },
    [UPDATE_CHART](state, payload) {
        state.index = payload;
        state.chart.data.labels = state.labels[payload]
        state.chart.data.datasets[0].data = state.rates[payload]
        state.chart.update()
    }
}

export default {
    state,
    getters,
    mutations
}
