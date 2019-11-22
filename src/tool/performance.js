// 节流
let throttle = function throttle(strId, wait, fun) {
    let flag = true
    let dom = document.getElementById(strId)
    dom.addEventListener('touchmove',function(){
        if(flag){
            flag = false
            setTimeout(function(){
                flag = true
                fun&&fun()
            },wait)
        }
    })
}
// 防抖
let debounce = function debounce(domId, wait, fun) {
    let userIput = document.getElementById(domId)
    let timeId = null
    userIput.addEventListener('input',function(){
        let data = userIput.value.trim()
        clearTimeout(timeId)
        timeId = setTimeout(function(){
            fun(data)
        },wait)
    })
}
export default {
    throttle,
    debounce
}