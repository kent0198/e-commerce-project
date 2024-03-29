import axios  from "./axios";

export const apiGetProducts=(params)=>axios({
    url:'/product/',
    method:'get',
    params
})
export const apigetProduct=(pid)=>axios({
    url:'/product/'+pid,
    method:'get',
    
})
export const apiRatings=(data)=>axios({
    url:'/product/ratings',
    method:'put',
    data
})
export const apiCreatePropduct=(data)=>axios({
    url:'/product/',
    method:'post',
    data
})