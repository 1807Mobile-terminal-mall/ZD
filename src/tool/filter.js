import Vue from 'vue'
Vue.filter('addHeader',function(value,con=''){
    return con + value
})
Vue.filter('addFooter',function(value,con=''){
    return value + con
})
Vue.filter('dateToString',function(val){
    return new Date(val).toLocaleString()
})