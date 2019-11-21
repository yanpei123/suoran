import API from './index';

export const getDetail=(params,id)=>{
    return API.GET('/api/v1/products/',{params:params},id)
}