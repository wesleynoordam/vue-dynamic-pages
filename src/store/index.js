import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    customerInformation: fetchCustomerInformation(),
    firstHeader: "Variable firstHeader value retrieved from store.",
    secondHeader: "Variable secondHeader value retrieved from store."
}

const actions = { }

function fetchCustomerInformation() {
    let dnsName = window.location.hostname;

    if (dnsName === "localhost") {
        return {
            name: "customer",
            css: "customer.css"
        }
    }
    else {
        return {
            name: "other",
            css: "other.css"
        }
    }
}

const mutations = {
    setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})