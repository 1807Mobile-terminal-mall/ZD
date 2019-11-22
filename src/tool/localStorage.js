export const setLocal = (key,val) => {
    if(typeof val == 'object'){
        val = JSON.stringify(val)
    }
    localStorage.setItem(key,val)
}
export const getLocal =(key) => {
    return localStorage.getItem(key)
}