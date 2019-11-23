import  React, {Component} from 'react';
import register from '../../css/Register.module.css';
import login from '../../css/Login.module.css';
import * as api from '../../api/getregist';
// 手机注册
class Register extends Component {
    constructor(props) {
		super(props);
		this.state = {
            index: 2,
            select:true,
            ipt:'',
            pwd:'',
            spwd:'',
            phone:/^[1][3,4,5,7,8][0-9]{9}$/
		};
	
    }
    select(){
        let user =localStorage.getItem('user');
        if(this.refs.ipt.value == user){
            alert('该用户重复')
        }else if(this.refs.pwd.value.length <8){
            alert('密码长度不能小于8位')
        }else if(this.refs.pwd.value != this.refs.spwd.value){
            alert('请保持密码一致')
        }else if(this.state.phone.test(this.refs.ipt.value)){
            api.getRegist({
                userName:this.refs.ipt.value,
                password:this.refs.pwd.value,
                nickName:'',
                avatar:''
            }).then((data)=>{
                console.log(data)
                if(data.status == 200){
                    localStorage.setItem('token',data.data.token)
                    localStorage.setItem('user',this.refs.ipt.value);
                    this.props.history.push('./login')
                }
            })
        }else{
            alert('格式错误')
        }
    }

    change(n){
        this.setState({index:n})
    }
    change1(){
        this.props.history.push('./login')
    }
    btn(){
        this.props.history.push('./register')
    }
    render() {
        let index =this.state.index;
        let select =this.state.select;
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
                            <li className={login.text} onClick={()=>this.change1()}>
                                {/* <span className={index == 1 ? login.line :''}></span> */}
                                登录
                            </li>
                            <li className={login.text} onClick={()=>this.change(2)}>
                                <span className={index == 2 ? login.line :''}></span>
                                注册
                            </li> 
                        </ul>
                        <div className={login.form}>
{/* 输入框 */}
                            <div className={login.block}>
                                <div className={login.userTab}>
                                    <label className={login.label}>
                                        <svg className={login.icon}>
                                            <use xlinkHref="#icon-icon"></use>
                                        </svg>
                                    </label>  
                                    <input type="text" title="请输入帐号"  className={login.i_text}  placeholder="手机号" ref='ipt'/>
                                </div>
                                <div className={login.userTab}>
                                    <input type="text" name="member_mobile_Code" title="请输入动态口令"  className={login.i_text} placeholder="动态口令" style={{width:180}}></input>
                                    <input type="button" value='获取动态口令' className={login.ip_text} onClick={()=>this.getTime()}/>
                                </div>
                                <div className={login.userTab}>
                                    <label className={login.label}>
                                        <svg className={login.icon}>
                                            <use xlinkHref="#icon-mima"></use>
                                        </svg>
                                    </label>  
                                    <input type="password"  title="请输入帐号"  className={login.i_text}  placeholder="密码" ref='pwd'/>
                                </div>
                                <div className={login.userTab}>
                                    <label className={login.label}>
                                        <svg className={login.icon}>
                                            <use xlinkHref="#icon-mima"></use>
                                        </svg>
                                    </label>  
                                    <input type="password" name="txtLoginPwd" title="请输入密码"  className={login.b_text} placeholder="确认密码"  ref='spwd'/> 
                                </div>
                            </div>

{/* 底部登录 */}
                            <div className={register.f_item}>
                                <div>
                                    <input type="button" name="btnLogin"  className={register.i_btn_ok} value="同意以下协议,提交" onClick={()=>this.select()}/>
                                    <div className={register.f_item}>
                                        <span className="rmb-content">
                                            <input type="checkbox" checked={select}/>同意<span className={register.mbs_articles} id="J_mbs_articles">梦芭莎注册条款</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* footer */}
                <div className={register.footer}>
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


export default Register;