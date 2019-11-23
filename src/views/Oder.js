import React from "react";
import axios from "axios";
import { Icon } from 'antd';
import { Tabs } from 'antd';
import {NavLink} from "react-router-dom";
import  oder from "./Oder.module.css";
export default class Oder extends React.Component{
	constructor(props){
		super(props)
		this.state={
			numtotalprice:0,
			day: 0,
            hour: 0,
            minute: 0,
            second: 0
		}
	}
	render(){
		return(
			<div>
			{/*head*/}
				<div className={oder.head}>
					<div className={oder.headtop}>
						<div className={oder.headtopleft}>
							<img src="http://i1.mbscss.com/img/moonbasa/2014/02/25/logo.jpg"/>
							<span>9年品质保证|</span>
							<span>7天无条件退换货|</span>
						</div>
						<div className={oder.headtopright}>
							<ul className={oder.headtoprightul}>
								<li className={oder.headtoprightullifirst}>欢迎光临梦芭莎!</li>
								<li>登录</li>
								<li>注册</li>
								<li>帮助中心</li>
								<li><Icon className={oder.Icon} type="wechat" style={{ fontSize: '12px', color: '#4dbf36' }} />微信</li>
								<li className={oder.headtoprightullilast}><Icon className={oder.Icon} type="shake" style={{ fontSize: '12px', color: '#bdbdbd' }} />手机版</li>
							</ul>
						</div>
					</div>
					
					<div className={oder.headjindutiao}>
						<p>我的购物车</p>
						<p>填写订单信息</p>
						<p className={oder.headjindutiaofirst}>订单提交成功</p>
					</div>
					
				</div>
				
				{/*head*/}
				
				{/*center*/}
				<div className={oder.center}>
					{/*订单提交成功*/}
					<div className={oder.centersuccess}>
						<div className={oder.centersuccesstop}>
							<p className={oder.centersuccesstopp1}><Icon  type="check-circle" style={{ fontSize: '22px', color: '#e50065' }}/> 订单提交成功,请您尽快完成在线支付</p>
							<div className={oder.centersuccesstopdiv}>
							<p>为保证及时处理您的订单,请于
								{/*<span className={oder.centersuccesstoptime}>
								24:00:00 
								</span>*/}
								
							 <span className={oder.centersuccesstoptime}>{this.state.day}天 {this.state.hour}:{this.state.minute}:{this.state.second}</span>		
							内支付,否则订单将被自动取消</p>
							<p className={oder.centersuccesstopdivp}>在线支付: <span className={oder.centersuccesstopprice}>￥{this.state.numtotalprice}</span></p>
							</div>
						</div>
						<div className={oder.centersuccesstiao}>
							<div className={oder.centersuccesstiaoleft}>
								<p>应付金额:￥{this.state.numtotalprice}</p>
							</div>
							<div className={oder.centersuccesstiaoright}>
								<p className={oder.centersuccesstiaorightp1}>订单号:0036943408</p>
								<p>网上在线支付:￥{this.state.numtotalprice}</p>
								<p>由梦芭莎发货</p>
							</div>
						</div>
						<div className={oder.remind}>
							<p>重要提醒：梦芭莎不会以<span>订单异常、系统升级</span>等任何理由，要求您提供银行卡信息办理退款或支付额外费用。请谨防上当受骗！</p>
							<p className={oder.remindp2}>查看订单<span>|</span>修改订单</p>
						</div>
						<div className={oder.allpay}>
						全部支付方式
						</div>
					</div>
					
					{/*订单提交成功*/}
					{/*支付*/}
					
					<div className={oder.pay}>
						<div className={oder.payquickpayment} >
							<div className={oder.payquickpaymenttop}>
								快捷支付
							</div>
							<img className={oder.payquickpaymentimg1}  src="http://shopping.moonbasa.com/images/pay_cover_ali.png"/>
							<img src="http://shopping.moonbasa.com/images/pay_cover_wx.png"/>
						</div>
						<div className={oder.payquickpaymentzhifu} >
							<div className={oder.payquickpaymenttop}>
								支付平台
							</div>
							<ul className={oder.payul}>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAY.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/99BILL2.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/PAYPAL.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/CHINABANK.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/JDPAYWEB.png"/>
								</li>
							</ul>
						</div>
						<div className={oder.payquickpaymentwang} >
							<div className={oder.payquickpaymenttop}>
								网上银行
							</div>
							<ul className={oder.payulwang}>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ICBCWEB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKCCB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKABC.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKBCOM.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKBOCB2C.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKGDB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKCIB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKCMBC.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKSHBANK.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKNBBANK.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKHZCBB2C.png"/>
								</li>
							</ul>
						</div>
						<div className={oder.payquickpaymentwang} >
							<div className={oder.payquickpaymenttop}>
								信用卡快捷支付(无需开通网银):
							</div>
							<ul className={oder.payulwang}>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/BILL99FASTPAB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ICBCWEB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKCCB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKABC.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKBCOM.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKBOCB2C.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKGDB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKCIB.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKCMBC.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKSHBANK.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKNBBANK.png"/>
								</li>
								<li >
								<img src="http://shopping.moonbasa.com/images/bank/ALIPAYBANKHZCBB2C.png"/>
								</li>
							</ul>
							
							<input className={oder.payliji}  type="button" value="立即支付"/>
							
						</div>
						
					</div>
					{/*支付*/}
				</div>
				
				
				{/*center*/}
				{/*foot-top*/}
			<div className={oder.foot}>
				<div className={oder.footconent}>
				<ul className={oder.footlist}>
					<NavLink to="/home"><li className={oder.footlisttit}>新手指南</li></NavLink>
					<NavLink to="/home"><li>注册新用户</li></NavLink>
					<NavLink to="/home"><li>如何订购</li></NavLink>
					<NavLink to="/home"><li>如何修改订单</li></NavLink>
					<NavLink to="/home"><li>尺码对照表</li></NavLink>
					
				</ul>
				
				<ul className={oder.footlist}>
					<NavLink to="/home"><li className={oder.footlisttit}>支付方式</li></NavLink>
					<NavLink to="/home"><li>支付方式</li></NavLink>
					<NavLink to="/home"><li>账户提现及退款时效</li></NavLink>
					<NavLink to="/home"><li>查看账户余额</li></NavLink>
				</ul>
				<ul className={oder.footlist}>
					<NavLink to="/home"><li className={oder.footlisttit}>配送方式</li></NavLink>
					<NavLink to="/home"><li>配送费收取标准</li></NavLink>
					<NavLink to="/home"><li>配送范围及配送时效</li></NavLink>
					<NavLink to="/home"><li>签收注意事项</li></NavLink>
					<NavLink to="/home"><li>海外订购</li></NavLink>
				</ul>
				
				<ul className={oder.footlist}>
					<NavLink to="/home"><li className={oder.footlisttit}>退换货服务</li></NavLink>
					<NavLink to="/home"><li>退换货政策</li></NavLink>
					<NavLink to="/home"><li>退换货流程</li></NavLink>
					<NavLink to="/home"><li>隐私申明</li></NavLink>
					
					
				</ul>
				<ul className={oder.footlist}>
					<NavLink to="/home"><li className={oder.footlisttit}>会员制度及优惠</li></NavLink>
					<NavLink to="/home"><li>优惠活动</li></NavLink>
					<NavLink to="/home"><li>VIP优惠尊享</li></NavLink>
					<NavLink to="/home"><li>大宗购物</li></NavLink>
					<NavLink to="/home"><li>积分制度</li></NavLink>
				</ul>
				
				<ul className={oder.footlist}>
					<NavLink to="/home"><li className={oder.footlisttit}>帮助中心</li></NavLink>
					<NavLink to="/home"><li>忘记密码</li></NavLink>
					<NavLink to="/home"><li>常见问题</li></NavLink>
					<NavLink to="/home"><li>在线客服</li></NavLink>
					<NavLink to="/home"><li>联系我们</li></NavLink>
					<NavLink to="/home"><li>专利平台</li></NavLink>
				</ul>
				<ul className={oder.footlist}>
					<NavLink to="/home"><li className={oder.footlisttit}>咨询订购</li></NavLink>
					<NavLink to="/home"><li>400-716-2828</li></NavLink>
					<NavLink to="/home"><li className={oder.footlisttit,oder.server}>客户服务</li></NavLink>
					<NavLink to="/home"><li>400-716-7878</li></NavLink>
				</ul>
				<ul className={oder.footlist}>
					<img src="http://i0.mbscss.com/img/moonbasa/2015/mobile/M4_14_150441.png"/>
					
				</ul>
				</div>
				
			
			</div>
			
			
			
			{/*foot-top*/}
			{/*foot-center*/}
			<div className={oder.footcenter}>
				<ul className={oder.footcenterul}>
				<li>
					<div className={oder.footcenterulleft}>
						<Icon type="sound" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={oder.footcenterulright}>
					<p>环球时尚 梦想成真<br/><span>全明星时代</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={oder.footcenterulleft}>
						<Icon type="history" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={oder.footcenterulright}>
					<p>7天无理由退货<br/><span>港澳台地区及海外订单除外</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={oder.footcenterulleft}>
						<Icon type="dollar" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={oder.footcenterulright}>
					<p>国内满180元免运费<br/><span>港澳台满300元/海外满2000元</span></p>
					
					</div>
				
				</li>
				
				</ul>
			
			</div>
			
			{/*foot-center*/}
			{/*foot-foot*/}
			<div className={oder.footfoot}>
				
				<ul className={oder.footfootul}>
					<NavLink to="/home"><li>首页</li></NavLink>
					<NavLink to="/home"><li>公司简介</li></NavLink>
					<NavLink to="/home"><li>旗下品牌</li></NavLink>
					<NavLink to="/home"><li>零售店址</li></NavLink>
					<NavLink to="/home"><li>梦芭莎网盟</li></NavLink>
					<NavLink to="/home"><li>网店代理</li></NavLink>
					<NavLink to="/home"><li>网站地图</li></NavLink>
					<NavLink to="/home"><li>友情链接</li></NavLink>
				</ul>
				
				<p>
Copyright © 2010-2019 梦芭莎官方网站，广州摩拉网络科技有限公司 All Rights Reserved 粤B2-20080069号 粤公网安备44010302000038 </p>
				
				<div className={oder.footfootimg}>
				<img src="http://i6.mbscss.com/img/moonbasa/2012/12/20/mbs_f_01.jpg"/>
				<img  src="http://i7.mbscss.com/img/moonbasa/2012/12/20/mbs_f_02.jpg"/>
				<img className={oder.thire} src="http://i1.mbscss.com/img/moonbasa/2012/12/20/mbs_f_04.jpg"/>
				<img src="http://i2.mbscss.com/img/moonbasa/2012/12/20/mbs_f_05.jpg"/>
				<img src="http://i3.mbscss.com/img/moonbasa/2012/12/20/mbs_f_06.jpg"/>
				<img src="http://i4.mbscss.com/img/moonbasa/2012/12/20/mbs_f_07.jpg"/>
				</div>
			</div>
			
			{/*foot-foot*/}
				
			
			</div>
		)
	}
	
	componentDidMount(){
		console.log(this.props.location.query.numtotalprice)
		this.setState({numtotalprice:this.props.location.query.numtotalprice})
	
	
		 const end = Date.parse(new Date('2019-11-29 24:00'))
         this.countFun(end);
	}
	
	countFun = (end) => {
 
     let now_time = Date.parse(new Date());
     var remaining = end - now_time;
  
     this.timer = setInterval(() => {
         //防止出现负数
       if (remaining > 1000) {
         remaining -= 1000;
         let day = Math.floor((remaining / 1000 / 3600) / 24);
         let hour = Math.floor((remaining / 1000 / 3600) % 24);
         let minute = Math.floor((remaining / 1000 / 60) % 60);
         let second = Math.floor(remaining / 1000 % 60);
 
         this.setState({
             day:day,
             hour:hour < 10 ? "0" + hour : hour,
             minute:minute < 10 ? "0" + minute : minute,
             second:second < 10 ? "0" + second : second
         })
       } else {
         clearInterval(this.timer);
         
       }
     }, 1000);
   }
 
 }
	
	
	
	

