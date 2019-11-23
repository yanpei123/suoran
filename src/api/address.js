import * as API from './index';
//新增地址
export const getAdd=(params,token)=>{
    return API.HeadPost('/api/v1/addresses',params,token)
}
//地址列表
export const getList=(params,token)=>{
    return API.HeadGet('/api/v1/addresses',params,token)
}
//删除地址
export const getDel=(id,params,token)=>{
    return API.HeadDel('/api/v1/addresses/'+id,params,token)
}
//修改
export const getUpdate=(id,params,token)=>{
    return API.HeadPut('/api/v1/addresses/'+id,params,token)
}

//订单列表
export const getCar =(params,token)=>{
    return API.HeadGet('/api/v1/shop_carts',token)
}
