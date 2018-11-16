import api from '../../api/overview'

export default {
    state: {
        chartData: {
            male: [],
            female: []
        }
    },
    mutations: {
        setChartDate(state, data) {
            console.log("set")
            state.chartData = {
                male:data.male,
                female:data.female
            };
        }
    },
    actions: {
        setChartDate({ commit }) {
            api.getChartDate((data) => {
                commit('setChartDate',data)
            })
        }
    }
}