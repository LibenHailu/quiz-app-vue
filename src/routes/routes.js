import Choice from '../components/Choice.vue';
import First from '../components/First.vue';
import ChoiceDetail from '../components/ChoiceDetail.vue';
// import YabApp from '../components/YabApp.vue';
export const routes = [
    { path: '/prefs', component: Choice},
    { path: '', component: First},
    { path: '/details', component: ChoiceDetail},
    // {path:'/quest',component: YabApp}
];