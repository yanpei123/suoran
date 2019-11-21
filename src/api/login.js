import * as API from './index';
// 登录接口
export const getLogin =(params)=>{
    return API.POST('/api/v1/auth/login',params)
}