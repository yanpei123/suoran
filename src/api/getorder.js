import * as API from './index';


//购物车列表
export const getList=(params,token)=>{
    return API.HeadGet('/api/v1/shop_carts',params,token)
}
//订单列表
export const getOrderlist=(params,token)=>{
    return API.HeadGet('/api/v1/orders',params,token)
}
//提交订单
export const getSigleorder=(params,token)=>{
    return API.HeadPost('/api/v1/orders',params,token)
}