import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state:{
name: 'Anonymous',
answered: 0,
total: 0,
category:  null
    },
    // getters:{
    //     totalQuestions: state => {
    //         return state.answered + state.total
    //     }
    // },
    mutations:{
        updateName(state,name){
            state.name = name
        },
        updateCategory(state,category){
            state.category = category
        },
        incrementAnswered(state){
            state.answered ++
        },
        incrementTotal(state){
            state.total ++
        }
    }
});