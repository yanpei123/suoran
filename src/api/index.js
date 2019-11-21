import axios from 'axios';

let baseUrl='http://api.cat-shop.penkuoer.com';



//get请求；
export const GET=(url,params)=>{
    return axios.get(`${baseUrl}${url}`,{params:params}).then((data)=>{return data})
}


//post请求
export const POST=(url,params)=>{
    return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}
//有id的get请求
