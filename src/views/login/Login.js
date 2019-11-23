import React, {Component } from 'react';
import login from '../../css/Login.module.css';
import weixin from '../../img/wx.jpg';
import qq from '../../img/qqlogo0.jpg';
import weibo from '../../img/weibologin0.jpg';
import xl from '../../img/l_050.jpg';
import * as api from '../../api/login'
// 手机登陆
class TabPhone extends Component{
    constructor(props) {
		super(props);
		this.state = {
            phone:""
		};
	
    }
    phologin(){
        if(this.refs.phone.value ==''){
            alert('不能为空')
        }else{
            api.getLogin({
                userName:this.refs.phone.value
            }).then((data)=>{
               if(data.data.code == 'success'){
                   alert('home')
                 // this.props.history.push('./home')
               }else{
                   alert('用户名错误')
               }
            })
        }
     }       
    render(){
        return(
            <div className={login.block}>
                <div className={login.userTab}>
                    <label className={login.label}>
                        <svg className={login.icon}>
                            <use xlinkHref="#icon-icon"></use>
                        </svg>
                    </label>  
                    <input type="text" name="txtLoginID" title="请输入帐号"  className={login.i_text}  placeholder="输入手机号" ref='phone'/>
                </div>
                <div className={login.userTab}>
                    <label className={login.label}>
                        <svg className={login.icon}>
                            <use xlinkHref="#icon-mima"></use>
                        </svg>
                    </label> 
                    <input type="text" name="member_mobile_Code" title="请输入动态口令"  className={login.i_text} placeholder="动态口令" style={{width:180}}></input>
                    <input type="button" value='获取动态口令' className={login.ip_text} onClick={()=>this.getTime()}/>
                </div>
                <div className={login.f_item}>
                    <a href="/reset/step1" target="_parent" className={login.forget_pwd}>忘记密码？</a>
                        <a className={login.login_reg} onClick={()=>this.btn()}>注册</a>
                    <div>
                        <input type="button" name="btnLogin"  className={login.i_btn_ok} value="立即登录" onClick={()=>this.phologin()}/>
                    </div>
                </div>
            </div>
        )
    }
}
// 普通登录
// class TabUser extends Component{
//     constructor(props) {
// 		super(props);
// 		this.state = {
//             user:"",
//             pwd:''
// 		};
	
//     }
  
//     render(){
//         return(
            
//         )
//     }
// }
class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
            index: 1,
            user:"",
            pwd:''
		};
	
    }
    change(n){
        this.setState({index:n})
    }
    btn(){
        this.props.history.push('./register')
    }
    famlogin(){
        let user =localStorage.getItem('user');
        if(this.refs.user.value == '' || this.refs.pwd.value ==''){
            alert('不能为空')
        }else{
            api.getLogin({
                userName:this.refs.user.value,
                password:this.refs.pwd.value
            }).then((data)=>{
               if(data.data.code == 'success'){
                    localStorage.setItem('token',data.data.token);
                    localStorage.setItem('user',user);
                    this.props.history.push('/home')
               }
            })
        }
     }

    render() {
        let index =this.state.index;
        return (
            <div className={login.main}>
                <p className={login.pic}>
                    <img src={'http://i0.mbscss.com/img/moonbasa/2017/xy/M4_5_134701.jpg'} alt=""/>
                </p>
                <div className={login.user}>
                    <div className={login.u_left}>
                    <p><img src={"http://i0.mbscss.com/img/moonbasa/2018/zf/M10_19_113700.jpg"} alt=""/></p>
                    </div>
                    <div className={login.u_right}>
                        <ul className={login.head}>
                            <li className={login.text} onClick={()=>this.change(1)}>
                                <span className={index == 1 ? login.line :''}></span>
                                普通登录
                            </li>
                            <li className={login.text} onClick={()=>this.change(2)}>
                                <span className={index == 2 ? login.line :''}></span>
                                无密码登录
                            </li> 
                        </ul>
                        <div className={login.form}>
                            {this.state.index == 1 ? 
                            // <TabUser></TabUser>
                                <div className={login.block}>
                                    <div className={login.userTab}>
                                        <label className={login.label}>
                                            <svg className={login.icon}>
                                                <use xlinkHref="#icon-icon"></use>
                                            </svg>
                                        </label>  
                                        <input type="text"  title="请输入帐号"  className={login.i_text}  placeholder="手机号/邮箱/会员卡号" ref='user'/>
                                    </div>
                                    <div className={login.userTab}>
                                        <label className={login.label}>
                                            <svg className={login.icon}>
                                                <use xlinkHref="#icon-mima"></use>
                                            </svg>
                                        </label>  
                                        <input type="password"  title="请输入密码"  className={login.b_text} placeholder="密码" ref='pwd'/> 
                                    </div>
                                    <div className={login.f_item}>
                                        <a href="/reset/step1" target="_parent" className={login.forget_pwd}>忘记密码？</a>
                                            <a className={login.login_reg} onClick={()=>this.btn()}>注册</a>
                                        <div>
                                            <input type="button" name="btnLogin"  className={login.i_btn_ok} value="立即登录" onClick={()=>this.famlogin()}/>
                                        </div>
                                    </div>
                                </div>
                            
                            : <TabPhone></TabPhone>}

{/* 底部登录 */}
                            <div className={login.other}>
                                <span className={login.i_label}>其他登录方式：</span>
                                <a title="微信登录" href="/weixin/login" target="_parent">
                                    <img src={weixin} alt="" style={{width:39,height:39}} className={login.pics}/>
                                </a>
                                <a title="qq登录" href="/weixin/login" target="_parent">
                                    <img src={qq} alt="" style={{width:39,height:39}} className={login.pics}/>
                                </a>
                                <a title="支付宝登录" href="/weixin/login" target="_parent">
                                    <img src={xl} alt="" style={{width:39,height:39}} className={login.pics}/>
                                </a>
                                <a title="微博登录" href="/weixin/login" target="_parent">
                                    <img src={weibo} alt="" style={{width:39,height:39}} className={login.pics}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={login.footer}>
                    <a href="http://www.moonbasa.com/" rel="nofollow" title="女性内衣专家梦芭莎首页">首页</a> 
                    <a href="http://help.moonbasa.com/help/detial/33" rel="nofollow">公司简介</a> 
                    <a href="http://www.moonbasa.com/" title="梦芭莎">旗下品牌</a> 
                    <a href="http://help.moonbasa.com/help/ShopMap.aspx" rel="nofollow">零售店址</a> 
                    <a href="http://union.moonbasa.com" title="梦芭莎网站联盟">梦芭莎网盟</a> 
                    <a href="http://fenxiao.moonbasa.com/">网店代理</a> 
                    <a href="http://www.moonbasa.com/home/sitemap" target="_blank" title="梦芭莎网店代理">网站地图</a> 
                    <a href="http://www.moonbasa.com/category">友情链接</a> 
                    <a href="http://help.moonbasa.com/help/jop.html" title="梦芭莎评论">加入我们</a> 
                    <br/>
                    Copyright © 2010-2019 梦芭莎官方网站，广州摩拉网络科技有限公司 All Rights Reserved 粤B2-20080069号
                </div>
            </div>
        );
    }
}

export default Login;