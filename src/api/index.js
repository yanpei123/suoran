import axios from 'axios';

let baseUrl='http://api.cat-shop.penkuoer.com';



//get请求；
export const GET=(url,params)=>{
    return axios.get(`${baseUrl}${url}`,{params:params}).then(data=>data)
}


//post请求
export const POST=(url,params)=>{
    return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}
//加入购物车token验证；
export const HeadPost = (url,params,token)=>{
	return axios({
		method:"post",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
//get
export const HeadGet =(url,params,token)=>{
	return axios({
		method:'get',
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
//put
export const HeadPut = (url,params,token)=>{
	return axios({
		method:"put",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
export const HeadDel = (url,params,token)=>{
	return axios({
		method:"delete",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
// axios({
        //     method:'post',
        //     url:'http://api.cat-shop.penkuoer.com/api/v1/addresses',
        //     params:{
        //         receiver:'xxx',
        //         mobile:'12346789',
        //         regions:'河南省-郑州市-二七区',
        //         address:'航海路1290号',
        //         idDefault:'true'
        //     },
        //     headers:{
        //         authorization:"Bearer "+token
        //     }
        // }).then((data=>{
        //     console.log(data);
        // }))
        //console.log(this.refs.username.value)