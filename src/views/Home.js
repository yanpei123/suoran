import React,{Component} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import home from "./Home.module.css";
import { Icon } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';
const { Search } = Input;
export default class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	render(){
		return(
			<div>
			
			{/*head*/}
			
				<div className={home.head}>
					<div className={home.headleft}>
						<ul className={home.headul}>
						<NavLink to="/home"><li><Icon type="home" style={{ fontSize: '12px', color: '#5c1938' }} />梦芭莎首页</li></NavLink>
						<NavLink to="/home"><li><Icon type="safety-certificate" style={{ fontSize: '12px', color: '#5c1938' }}/>100% 正品保证 创立于2006年</li></NavLink>
						</ul>
					
					</div>
					<div className={home.headright}>
						<ul className={home.headul_right}>
							<li>登录</li>
							<li>注册</li>
							<li><Icon type="wechat" style={{ fontSize: '12px', color: '#469f45' }}/>微信</li>
							<li><Icon type="weibo" style={{ fontSize: '12px', color: '#ff8e1a' }}/>微博</li>
							<li><Icon type="shake" style={{ fontSize: '12px', color: '#7e2545' }}/>手机版</li>
							<li>收藏梦芭莎</li>
							<li><Icon type="shopping-cart" style={{ fontSize: '12px', color: '#7e2545' }}/>购物车</li>
						</ul>
					
					</div>
				</div>
			{/*head*/}
			{/*search*/}
			<div className={home.search}>
				<div className={home.searchleft}>
					<img className={home.logo} src="http://i3.mbscss.com/img/moonbasa2/item/logomoonbasa.png"/>
					<div className={home.tit}>
						<p>原创设计女装<br/>
						<span className={home.band}>梦芭莎自营品牌</span>
						</p>
					</div>
					
					
				</div>
				<div className={home.searchright}>
					<Input style={{ width: 420 ,height:40 }} placeholder="秋新品震撼上市，千万精品低至9元" />  
				    <Button className={home.btnzhan}>搜全站</Button>
				    <Button className={home.btnben}>搜本店</Button>
				</div>
			
			</div>
			{/*search*/}
			{/*title*/}
			
			<div className={home.title}>
				<img className={home.titleimg} src="http://i2.mbscss.com/img/moonbasa2/item/b-Suorang.jpg"/>
				<ul className={home.titleul}>
				<li>首页</li>
				<NavLink to="/prolist"><li>全部商品</li></NavLink>
				<li>秋装上市</li>
				<li>19春夏新品</li>
				<li>热销推荐</li>
				<li>连衣裙</li>
				<li>女士上衣</li>
				<li>女士裤装</li>
				<li>半身裙</li>
				<li>女士外套</li>
				<li>套装配饰</li>
				<li>活动专区</li>
				</ul>
			</div>
			
			{/*title*/}
			{/*双11*/}
			<div className={home.shuang}>
			<img src="http://i3.mbscss.com/img/moonbasa/2019/kyq/M11_6_185418_01.jpg"/>
			</div>
			{/*双11*/}
			
			{/*优惠券*/}
			<div className={home.quan}>
				<img src="http://i5.mbscss.com/img/moonbasa/2019/kyq/M11_6_185418_02.jpg" />
				
			</div>
			{/*优惠券*/}
			
			{/*产品分类*/}
			<div className={home.pro}>
			<img src="http://i7.mbscss.com/img/moonbasa/2019/kyq/M11_10_192249_02.jpg"/>
			</div>
			{/*产品分类*/}
			{/*热卖推荐*/}
			<div className={home.hot}>
				<img src="http://i1.mbscss.com/img/moonbasa/2019/kyq/M11_6_185418_04.jpg"/>
			
			</div>
			{/*热卖推荐*/}
			{/*产品*/}
			<div className={home.prolist}>
				<ul className={home.prolistul}>
				{
					this.state.list.map((item)=>{
						return(
							<li key={item._id} >
							<img className={home.prolistimg} src={item.coverImg}/>
							<h2 className={home.prolistprice}><Icon type="transaction" style={{ fontSize: '40px', color: '#85071d' }}/>{item.price}</h2>
							<h5 className={home.prolistdescriptions}>{item.descriptions}</h5>
							
							</li>
						)
					})
				}
			</ul>
			
			{/*分页*/}
			<Pagination className={home.pagination} defaultCurrent={1} total={500} />
			{/*分页*/}
			
			</div>
			
			{/*产品*/}
			{/*foot-top*/}
			<div className={home.foot}>
				<div className={home.footconent}>
				<ul className={home.footlist}>
					<NavLink to="/home"><li className={home.footlisttit}>新手指南</li></NavLink>
					<NavLink to="/home"><li>注册新用户</li></NavLink>
					<NavLink to="/home"><li>如何订购</li></NavLink>
					<NavLink to="/home"><li>如何修改订单</li></NavLink>
					<NavLink to="/home"><li>尺码对照表</li></NavLink>
					
				</ul>
				
				<ul className={home.footlist}>
					<NavLink to="/home"><li className={home.footlisttit}>支付方式</li></NavLink>
					<NavLink to="/home"><li>支付方式</li></NavLink>
					<NavLink to="/home"><li>账户提现及退款时效</li></NavLink>
					<NavLink to="/home"><li>查看账户余额</li></NavLink>
				</ul>
				<ul className={home.footlist}>
					<NavLink to="/home"><li className={home.footlisttit}>配送方式</li></NavLink>
					<NavLink to="/home"><li>配送费收取标准</li></NavLink>
					<NavLink to="/home"><li>配送范围及配送时效</li></NavLink>
					<NavLink to="/home"><li>签收注意事项</li></NavLink>
					<NavLink to="/home"><li>海外订购</li></NavLink>
				</ul>
				
				<ul className={home.footlist}>
					<NavLink to="/home"><li className={home.footlisttit}>退换货服务</li></NavLink>
					<NavLink to="/home"><li>退换货政策</li></NavLink>
					<NavLink to="/home"><li>退换货流程</li></NavLink>
					<NavLink to="/home"><li>隐私申明</li></NavLink>
					
					
				</ul>
				<ul className={home.footlist}>
					<NavLink to="/home"><li className={home.footlisttit}>会员制度及优惠</li></NavLink>
					<NavLink to="/home"><li>优惠活动</li></NavLink>
					<NavLink to="/home"><li>VIP优惠尊享</li></NavLink>
					<NavLink to="/home"><li>大宗购物</li></NavLink>
					<NavLink to="/home"><li>积分制度</li></NavLink>
				</ul>
				
				<ul className={home.footlist}>
					<NavLink to="/home"><li className={home.footlisttit}>帮助中心</li></NavLink>
					<NavLink to="/home"><li>忘记密码</li></NavLink>
					<NavLink to="/home"><li>常见问题</li></NavLink>
					<NavLink to="/home"><li>在线客服</li></NavLink>
					<NavLink to="/home"><li>联系我们</li></NavLink>
					<NavLink to="/home"><li>专利平台</li></NavLink>
				</ul>
				<ul className={home.footlist}>
					<NavLink to="/home"><li className={home.footlisttit}>咨询订购</li></NavLink>
					<NavLink to="/home"><li>400-716-2828</li></NavLink>
					<NavLink to="/home"><li className={home.footlisttit,home.server}>客户服务</li></NavLink>
					<NavLink to="/home"><li>400-716-7878</li></NavLink>
				</ul>
				<ul className={home.footlist}>
					<img src="http://i0.mbscss.com/img/moonbasa/2015/mobile/M4_14_150441.png"/>
					
				</ul>
				</div>
				
			
			</div>
			
			
			
			{/*foot-top*/}
			{/*foot-center*/}
			<div className={home.footcenter}>
				<ul className={home.footcenterul}>
				<li>
					<div className={home.footcenterulleft}>
						<Icon type="sound" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={home.footcenterulright}>
					<p>环球时尚 梦想成真<br/><span>全明星时代</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={home.footcenterulleft}>
						<Icon type="history" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={home.footcenterulright}>
					<p>7天无理由退货<br/><span>港澳台地区及海外订单除外</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={home.footcenterulleft}>
						<Icon type="dollar" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={home.footcenterulright}>
					<p>国内满180元免运费<br/><span>港澳台满300元/海外满2000元</span></p>
					
					</div>
				
				</li>
				
				</ul>
			
			</div>
			
			{/*foot-center*/}
			{/*foot-foot*/}
			<div className={home.footfoot}>
				
				<ul className={home.footfootul}>
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
				
				<div className={home.footfootimg}>
				<img src="http://i6.mbscss.com/img/moonbasa/2012/12/20/mbs_f_01.jpg"/>
				<img  src="http://i7.mbscss.com/img/moonbasa/2012/12/20/mbs_f_02.jpg"/>
				<img className={home.thire} src="http://i1.mbscss.com/img/moonbasa/2012/12/20/mbs_f_04.jpg"/>
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
		axios({
			url:"http://api.cat-shop.penkuoer.com/api/v1/products",
			params:{per:30,page:2,name:"",product_category:""}
		}).then((data)=>{
			console.log(data.data.products)
			this.setState({list:data.data.products})
		})
	}
	
	
}
