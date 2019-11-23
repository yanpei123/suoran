import * as API from './index';

export const getDetail=(id,params)=>{
    return API.GET('/api/v1/products/'+id ,params)
}
export const getCar=(params,token)=>{
    return API.HeadPost('/api/v1/shop_carts',params,token)
}
