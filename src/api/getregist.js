import * as API from './index';
//注册接口
export const getRegist=(params)=>{
    return API.POST('/api/v1/auth/reg',params)
}