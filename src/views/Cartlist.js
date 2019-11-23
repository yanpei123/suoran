import React from "react";
import axios from "axios";
import { Icon } from 'antd';
import { Tabs } from 'antd';
import { BackTop } from 'antd';

import {NavLink} from "react-router-dom";
import cartlist from "./Cartlist.module.css";

const { TabPane } = Tabs;

export default class Cartlist extends React.Component{
	constructor(props){
		super(props)
		this.state={
			selectedall:false,
			totalprice:0,
			num:0,
			numtotalprice:0,
			list:[],
			list2:[]
		}
	}
	
	tap(i){
		console.log(i)
		let arr=this.state.list2;
		let qian=0;
		console.log(arr[i].product.price)
		arr[i].quantity=arr[i].quantity-1;
		
		if(arr[i].quantity<=1){
			arr[i].quantity=1
		}
		console.log(arr[i].quantity)
		console.log(arr[i]._id)
		var token=localStorage.getItem('token')
		axios({
			url:"http://api.cat-shop.penkuoer.com/api/v1/shop_carts",
			method:"post",
			headers: {
		    	authorization: 'Bearer '+token
			},
			params:{product:arr[i]._id,quantity:arr[i].quantity}
			
		}).then((data)=>{
			console.log(data)
		})
		
		//小计
		console.log(arr[i].product.quantity)
		var totalprice = arr[i].quantity * arr[i].product.price
		arr[i].product.quantity=totalprice
		this.setState({totalprice:arr[i].product.quantity})
		//总金额
		this.zong();
	}
	
	plus(i){
		console.log(i)
		let arr=this.state.list2;
		let qian=0;
		console.log(arr[i].product.price)
		arr[i].quantity=arr[i].quantity+1;
		console.log(arr[i].quantity)
		console.log(arr[i]._id)
		var token=localStorage.getItem('token')
		axios({
			url:"http://api.cat-shop.penkuoer.com/api/v1/shop_carts",
			method:"post",
			headers: {
		    	authorization: 'Bearer '+token
			},
			params:{product:arr[i]._id,quantity:arr[i].quantity}
			
		}).then((data)=>{
			console.log(data)
		})
		
		
		console.log(arr[i].product.quantity)
		var totalprice = arr[i].quantity * arr[i].product.price
		arr[i].product.quantity=totalprice
		this.setState({totalprice:arr[i].product.quantity})
		//总金额
		this.zong();
	}
	//删除
	del(i){
		console.log(i);
		let arr=this.state.list2;
		console.log(arr[i].product._id);
		let id=arr[i]._id;
		//console.log('http://api.cat-shop.penkuoer.com/api/v1/shop_carts/:'+id)
		var url='http://api.cat-shop.penkuoer.com/api/v1/shop_carts/'+id
		console.log(url)
		var token=localStorage.getItem('token')
		axios({
			url:url,
			params:{},
			method:"delete",
			headers:{
				authorization:"Bearer "+token
			}
		}).then((data)=>{
			console.log(data)
			window.location.reload();
		})
		
		this.props.history.push('/cartlist')
		
	}
	//全选
	quan(){
		let flag = this.state.selectedall;
		flag=!flag;
		this.setState({selectedall:flag})
		let arr=this.state.list;
		if(flag==true){
			arr.map((item)=>{
				item.onSale=true
			})
		}else{
			arr.map((item)=>{
				item.onSale=false
			})
		}
		//总金额
		this.zong();
	}
	
	//单选
	dan(i){
		let arr=this.state.list;
		arr[i].onSale=!arr[i].onSale;
		let arr1=arr.filter((item)=>item.onSale==true);
		
		if(arr1.length==arr.length){
			this.setState({
				list:arr,
				selectedall:true
			})
		}else{
			this.setState({
				list:arr,
				selectedall:false
			})
		}
		this.zong();
		
	}
	//总金额
	zong(){
		
		let arr=this.state.list2;
		let allqian=0;
		let numval=0
		arr.map((item,i)=>{
			if(item.product.onSale==true){
				allqian += item.product.price * item.quantity;
				numval += item.quantity
			}
		})
		console.log(allqian);
		this.setState({numtotalprice:allqian});
		this.setState({num:numval})
		
	}
	
	render(){
		return(
			<div>
				{/*head*/}
				<div className={cartlist.head}>
					<div className={cartlist.headtop}>
						<div className={cartlist.headtopleft}>
							<img src="http://i1.mbscss.com/img/moonbasa/2014/02/25/logo.jpg"/>
							<span>9年品质保证|</span>
							<span>7天无条件退换货|</span>
						</div>
						<div className={cartlist.headtopright}>
							<ul className={cartlist.headtoprightul}>
								<li className={cartlist.headtoprightullifirst}>欢迎光临梦芭莎!</li>
								<li>登录</li>
								<li>注册</li>
								<li>帮助中心</li>
								<li><Icon className={cartlist.Icon} type="wechat" style={{ fontSize: '12px', color: '#4dbf36' }} />微信</li>
								<li className={cartlist.headtoprightullilast}><Icon className={cartlist.Icon} type="shake" style={{ fontSize: '12px', color: '#bdbdbd' }} />手机版</li>
							</ul>
						</div>
					</div>
					
					<div className={cartlist.headjindutiao}>
						<p className={cartlist.headjindutiaofirst}>我的购物车</p>
						<p>填写订单信息</p>
						<p>订单提交成功</p>
					</div>
					
				</div>
				
				{/*head*/}
				{/*产品列表*/}
				<div className={cartlist.prolist}>
				<table className={cartlist.table} >
				<thead>
					<tr className={cartlist.tabletheadtr}>
					<td className={cartlist.tabletd1}><input className={cartlist.checkedAll} checked={this.state.selectedall} onClick={this.quan.bind(this)}   type="checkbox" />全部</td>
					<td className={cartlist.tabletd2}>商品</td>
					<td className={cartlist.tabletd3}>单价</td>
					<td className={cartlist.tabletd4}>数量</td>
					<td className={cartlist.tabletd5}>金额小计</td>
					<td className={cartlist.tabletd6}>操作</td>
					</tr>
				</thead>
				<tbody>
				
					{
						this.state.list2.map((item,i)=>{
							
							return(
							
							<tr key={i}>
							<td><input className={cartlist.checkedAll} checked={item.product.onSale}   onClick={this.dan.bind(this,i)} type="checkbox" /></td>
							<td>
							<div className={cartlist.tableleft}>
								<img src={item.product.coverImg}/>
							</div>
							<div className={cartlist.tableright}>
							<p>{item.product.descriptions}<br/><span>{item.product.name}</span></p>
							</div>
							</td>
							<td>￥{item.product.price}</td>
							
							<td>
							<span className={cartlist.min} onClick={this.tap.bind(this,i)}>-</span>
							<input className={cartlist.nums} type="text" value={item.quantity} ref="val" onChange={item.quantity} />
							<span className={cartlist.plus} onClick={this.plus.bind(this,i)}>+</span></td>
							{/*<td>￥{this.state.totalprice}</td>*/}
							<td>￥{item.product.quantity}</td>
							<td><input className={cartlist.delbtn} onClick={this.del.bind(this,i)} type="button" value="删除"/></td>
							</tr>
							
							
						)
						
						})
					}
				</tbody>
				
				</table>
				
				</div>
				{/*产品列表*/}
				{/*结算*/}
				<div className={cartlist.jiesuan}>
					<div className={cartlist.jiesuanleft}>
					<img className={cartlist.jiesuanlefterweima}  src="http://shopping.moonbasa.com/cart/qrcodecreate?version=6&content=http://qr.moonbasa.com/settlement/qr?guid=HZeOJ%2fDEgUhSlMiql3mrC9jzKlGkpppLjLYarT17DRQFX80xyxupGA%3d%3d"/>
					<img className={cartlist.jiesuanleftsaoyisao} src="http://i0.mbscss.com/img/moonbasa/2015/04/01/qc_code_bg.jpg"/>
					</div>
					<div className={cartlist.jiesuanright}>
						<p className={cartlist.pmoney}>
							<span >商品数量总计:</span>
							<span className={cartlist.procount}> {this.state.num}件</span>
							<span className={cartlist.moneytot}> 折后商品金额总计：</span>
							<span className={cartlist.money}> ￥{this.state.numtotalprice}</span>
						</p>
						<NavLink to={{pathname:"/oder",query:{numtotalprice:this.state.numtotalprice}}}><input className={cartlist.gopay}  type="button" value="去结算"/></NavLink>
					</div>
				</div>
				
				{/*结算*/}
				{/*热销商品*/}
				<div className={cartlist.hotprolist}>
					<div className={cartlist.hotprolisttop}>
						<p>热销商品</p>
					</div>
					<div className={cartlist.hotprolistcenter}>
						<Tabs defaultActiveKey="1">
							<TabPane
						    	tab={
						        	<span>
						          		<Icon type="heart" />
						         		 猜你喜欢
						        	</span>
						      		}
						      key="1"
							>
							
							
							
						    	<div className={cartlist.pro1}>
						    		<div className={cartlist.pro1like} >
						    			<img src="http://images1.moonbasa.com/ProductImg/1/1703/large/462017314-070-01-L.jpg"/>
						    			<div className={cartlist.pro1likedetail}>
						    				<p className={cartlist.pro1likedetaildis}>梦芭莎欧美时尚宽松款橡筋荷叶边袖口圆...</p>
						    				<p className={cartlist.pro1likedetailprice}>￥80.00<del> ￥99.00</del></p>
						    				
						    			</div>
						    			<input className={cartlist.pro1likedetailcart} type="button" value="加入购物车"/>         
						    		</div>
						    		<div className={cartlist.pro1like}>
						    			<img src="http://i3.mbsimg.com/ProductImg/20/1703/large/437317306-009-01-L.jpg"/>
						    			<div className={cartlist.pro1likedetail}>
						    				<p className={cartlist.pro1likedetaildis}>韩伊儿日韩时尚新颖趣味撞色条子装饰长......</p>
						    				<p className={cartlist.pro1likedetailprice}>￥120.00<del> ￥239.00</del></p>
						    				
						    			</div>
						    			<input className={cartlist.pro1likedetailcart} type="button" value="加入购物车"/>         
						    		</div>
						    	</div>
						    
						</TabPane>
						    <TabPane
						      tab={
						        <span>
						          <Icon type="eye" />
						          	查看更多
						        </span>
						      }
						      key="2"
						>
						     <div className={cartlist.pro1}>
						    		<div className={cartlist.pro1like}>
						    			<img src="http://images1.moonbasa.com/ProductImg/1/1703/large/462017314-070-01-L.jpg"/>
						    			<div className={cartlist.pro1likedetail}>
						    				<p className={cartlist.pro1likedetaildis}>梦芭莎欧美时尚宽松款橡筋荷叶边袖口圆...</p>
						    				<p className={cartlist.pro1likedetailprice}>￥80.00<del> ￥99.00</del></p>
						    				
						    			</div>
						    			<input className={cartlist.pro1likedetailcart} type="button" value="加入购物车"/>         
						    		</div>
						    		<div className={cartlist.pro1like}>
						    			<img src="http://images1.moonbasa.com/ProductImg/1/1703/large/462017311-010-01-L.jpg"/>
						    			<div className={cartlist.pro1likedetail}>
						    				<p className={cartlist.pro1likedetaildis}>梦芭莎优雅时尚合体圆领喇叭百褶长袖小...</p>
						    				<p className={cartlist.pro1likedetailprice}>￥79.00<del> ￥99.00</del></p>
						    				
						    			</div>
						    			<input className={cartlist.pro1likedetailcart} type="button" value="加入购物车"/>         
						    		</div>
						    		<div className={cartlist.pro1like}>
						    			<img src="http://images2.moonbasa.com/ProductImg/1/1703/large/462017301-075-01-L.jpg"/>
						    			<div className={cartlist.pro1likedetail}>
						    				<p className={cartlist.pro1likedetaildis}>梦芭莎一字领创意拼接肌理网纱五分袖间...</p>
						    				<p className={cartlist.pro1likedetailprice}>￥45.00<del> ￥89.00</del></p>
						    				
						    			</div>
						    			<input className={cartlist.pro1likedetailcart} type="button" value="加入购物车"/>         
						    		</div>
						    		<div className={cartlist.pro1like}>
						    			<img src="http://i3.mbsimg.com/ProductImg/20/1703/large/437217302-479-01-L.jpg"/>
						    			<div className={cartlist.pro1likedetail}>
						    				<p className={cartlist.pro1likedetaildis}>韩伊儿日韩时尚高街高质感网布拼接丝绒...</p>
						    				<p className={cartlist.pro1likedetailprice}>￥99.00<del> ￥139.00</del></p>
						    				
						    			</div>
						    			<input className={cartlist.pro1likedetailcart} type="button" value="加入购物车"/>         
						    		</div>
						    		<div className={cartlist.pro1like}>
						    			<img src="http://images4.suorang.com/ProductImg/9/1703/large/182017386-I38-01-L.jpg"/>
						    			<div className={cartlist.pro1likedetail}>
						    				<p className={cartlist.pro1likedetaildis}>所然原创文艺长款开叉圆领拼接绣花长T</p>
						    				<p className={cartlist.pro1likedetailprice}>￥139.00<del> ￥199.00</del></p>
						    				
						    			</div>
						    			<input className={cartlist.pro1likedetailcart} type="button" value="加入购物车"/>         
						    		</div>
						    	</div>
						    </TabPane>
						  </Tabs>
											
					</div>
					<div className={cartlist.hotprolistbottom}></div>
				</div>
				
				{/*热销商品*/}
				
				{/*other*/}
				<div className={cartlist.other}>
					<div className={cartlist.othertop}>
						<p className={cartlist.othertop1}>其他顾客同时购买了</p>
						<span>|</span>
						<p className={cartlist.othertop2}>最近收藏的商品</p>
					</div>
					<div className={cartlist.otherbottom}>
						<img src="http://shopping.moonbasa.com/images/loading.gif?id=2"/>
					</div>
				</div>
				{/*other*/}
				{/*foot-top*/}
			<div className={cartlist.foot}>
				<div className={cartlist.footconent}>
				<ul className={cartlist.footlist}>
					<NavLink to="/home"><li className={cartlist.footlisttit}>新手指南</li></NavLink>
					<NavLink to="/home"><li>注册新用户</li></NavLink>
					<NavLink to="/home"><li>如何订购</li></NavLink>
					<NavLink to="/home"><li>如何修改订单</li></NavLink>
					<NavLink to="/home"><li>尺码对照表</li></NavLink>
					
				</ul>
				
				<ul className={cartlist.footlist}>
					<NavLink to="/home"><li className={cartlist.footlisttit}>支付方式</li></NavLink>
					<NavLink to="/home"><li>支付方式</li></NavLink>
					<NavLink to="/home"><li>账户提现及退款时效</li></NavLink>
					<NavLink to="/home"><li>查看账户余额</li></NavLink>
				</ul>
				<ul className={cartlist.footlist}>
					<NavLink to="/home"><li className={cartlist.footlisttit}>配送方式</li></NavLink>
					<NavLink to="/home"><li>配送费收取标准</li></NavLink>
					<NavLink to="/home"><li>配送范围及配送时效</li></NavLink>
					<NavLink to="/home"><li>签收注意事项</li></NavLink>
					<NavLink to="/home"><li>海外订购</li></NavLink>
				</ul>
				
				<ul className={cartlist.footlist}>
					<NavLink to="/home"><li className={cartlist.footlisttit}>退换货服务</li></NavLink>
					<NavLink to="/home"><li>退换货政策</li></NavLink>
					<NavLink to="/home"><li>退换货流程</li></NavLink>
					<NavLink to="/home"><li>隐私申明</li></NavLink>
					
					
				</ul>
				<ul className={cartlist.footlist}>
					<NavLink to="/home"><li className={cartlist.footlisttit}>会员制度及优惠</li></NavLink>
					<NavLink to="/home"><li>优惠活动</li></NavLink>
					<NavLink to="/home"><li>VIP优惠尊享</li></NavLink>
					<NavLink to="/home"><li>大宗购物</li></NavLink>
					<NavLink to="/home"><li>积分制度</li></NavLink>
				</ul>
				
				<ul className={cartlist.footlist}>
					<NavLink to="/home"><li className={cartlist.footlisttit}>帮助中心</li></NavLink>
					<NavLink to="/home"><li>忘记密码</li></NavLink>
					<NavLink to="/home"><li>常见问题</li></NavLink>
					<NavLink to="/home"><li>在线客服</li></NavLink>
					<NavLink to="/home"><li>联系我们</li></NavLink>
					<NavLink to="/home"><li>专利平台</li></NavLink>
				</ul>
				<ul className={cartlist.footlist}>
					<NavLink to="/home"><li className={cartlist.footlisttit}>咨询订购</li></NavLink>
					<NavLink to="/home"><li>400-716-2828</li></NavLink>
					<NavLink to="/home"><li className={cartlist.footlisttit,cartlist.server}>客户服务</li></NavLink>
					<NavLink to="/home"><li>400-716-7878</li></NavLink>
				</ul>
				<ul className={cartlist.footlist}>
					<img src="http://i0.mbscss.com/img/moonbasa/2015/mobile/M4_14_150441.png"/>
					
				</ul>
				</div>
				
			
			</div>
			
			
			
			{/*foot-top*/}
			{/*foot-center*/}
			<div className={cartlist.footcenter}>
				<ul className={cartlist.footcenterul}>
				<li>
					<div className={cartlist.footcenterulleft}>
						<Icon type="sound" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={cartlist.footcenterulright}>
					<p>环球时尚 梦想成真<br/><span>全明星时代</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={cartlist.footcenterulleft}>
						<Icon type="history" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={cartlist.footcenterulright}>
					<p>7天无理由退货<br/><span>港澳台地区及海外订单除外</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={cartlist.footcenterulleft}>
						<Icon type="dollar" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={cartlist.footcenterulright}>
					<p>国内满180元免运费<br/><span>港澳台满300元/海外满2000元</span></p>
					
					</div>
				
				</li>
				
				</ul>
			
			</div>
			
			{/*foot-center*/}
			{/*foot-foot*/}
			<div className={cartlist.footfoot}>
				
				<ul className={cartlist.footfootul}>
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
				
				<div className={cartlist.footfootimg}>
				<img src="http://i6.mbscss.com/img/moonbasa/2012/12/20/mbs_f_01.jpg"/>
				<img  src="http://i7.mbscss.com/img/moonbasa/2012/12/20/mbs_f_02.jpg"/>
				<img className={cartlist.thire} src="http://i1.mbscss.com/img/moonbasa/2012/12/20/mbs_f_04.jpg"/>
				<img src="http://i2.mbscss.com/img/moonbasa/2012/12/20/mbs_f_05.jpg"/>
				<img src="http://i3.mbscss.com/img/moonbasa/2012/12/20/mbs_f_06.jpg"/>
				<img src="http://i4.mbscss.com/img/moonbasa/2012/12/20/mbs_f_07.jpg"/>
				</div>
			</div>
			
			{/*foot-foot*/}
			{/*回到顶部*/}
			 <div >
			    <BackTop>
			      <div className="ant-back-top-inner">UP</div>
			    </BackTop>
			   </div>
			  {/*回到顶部*/}
				
			</div>
		)
	}
	
	
	componentDidMount(){
	
		console.log(localStorage.getItem('token'));
		var token=localStorage.getItem('token')
		axios({
			url:"http://api.cat-shop.penkuoer.com/api/v1/shop_carts",
			params:{},
			headers: {
		    authorization: 'Bearer '+token
		}
		}).then((data)=>{
			console.log(data.data)
			var data=data.data
			data.map((item)=>{
				if(item.product!=null){
					this.state.list2.push(item)
					this.state.list.push(item.product)
					this.setState({list2:this.state.list2})
					this.setState({list:this.state.list})
				}
			})
		console.log(this.state.list2)
		
		let arr=this.state.list2;
		arr.map((item,i)=>{
			console.log(arr[i].product.quantity)
			arr[i].product.quantity=arr[i].quantity * arr[i].product.price
			this.setState({totalprice:arr[i].product.quantity})
		})
		
		
		console.log(this.state.list)	
	})
}

}

