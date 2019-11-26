import React from "react";
import {NavLink} from "react-router-dom";
import prolist from "./Prolist.module.css";
import { Icon } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';


import axios from "axios";



export default class Prolist extends React.Component{
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
			
				<div className={prolist.head}>
					<div className={prolist.headleft}>
						<ul className={prolist.headul}>
						<NavLink to="/home"><li><Icon type="home" style={{ fontSize: '12px', color: '#5c1938' }} />梦芭莎首页</li></NavLink>
						<NavLink to="/prolist"><li><Icon type="safety-certificate" style={{ fontSize: '12px', color: '#5c1938' }}/>100% 正品保证 创立于2006年</li></NavLink>
						</ul>
					
					</div>
					<div className={prolist.headright}>
						<ul className={prolist.headul_right}>
							<NavLink to="./login/Login"><li>登录</li></NavLink>
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
			<div className={prolist.search}>
				<div className={prolist.searchleft}>
					<img className={prolist.logo} src="http://i3.mbscss.com/img/moonbasa2/item/logomoonbasa.png"/>
					<div className={prolist.tit}>
						<p>原创设计女装<br/>
						<span className={prolist.band}>梦芭莎自营品牌</span>
						</p>
					</div>
					
					
				</div>
				<div className={prolist.searchright}>
					<Input style={{ width: 420 ,height:40 }} placeholder="秋新品震撼上市，千万精品低至9元" />  
				    <Button className={prolist.btnzhan}>搜全站</Button>
				    <Button className={prolist.btnben}>搜本店</Button>
				</div>
			
			</div>
			{/*search*/}
			{/*title*/}
			
			<div className={prolist.title}>
				<img className={prolist.titleimg} src="http://i2.mbscss.com/img/moonbasa2/item/b-Suorang.jpg"/>
				<ul className={prolist.titleul}>
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
			
			{/*center*/}
			
			<div className={prolist.centerwrap}> 
			<div className={prolist.center}>
				<div className={prolist.centertop}>
					<ul className={prolist.centerul}>
						<li>首页&gt;</li>
						<li>新品上线&gt;</li>
						<li>最新商品&gt;</li>
						<li>全部商品&gt;</li>
						<li>(共297件)</li>
					</ul>
				</div>
				<div className={prolist.centerbottom}>
					<div className={prolist.centerbottomleft}>
						<div>
						<img src="//i1.mbscss.com/list/topimg/1010.jpg"/>
						</div>
						
						<ul className={prolist.centerleftul}>
							<li className={prolist.centerleftultit}>按季节(319)</li>
							<li>春季(56)</li>
							<li>夏季(122)</li>
							<li>秋季(78)</li>
							<li>冬季(63)</li>
						</ul>
						<ul className={prolist.centerleftul}>
							<li className={prolist.centerleftultit}>按品类(319)</li>
							<li>T恤/衬衫(64)</li>
							<li>裙装(156)</li>
							<li>外套(27)</li>
							<li>毛衫(14)</li>
							<li>大衣风衣(17)</li>
							<li>棉衣羽绒(6)</li>
							<li>裤装(32)</li>
							<li>饰品(8)</li>
							<li>套装(3)</li>
						</ul>
						<ul className={prolist.centerleftul}>
							<li className={prolist.centerleftultit}>最新商品(322)</li>
							<li>春夏精选(59)</li>
							<li>秋季新品(20)</li>
							<li>冬季新品(24)</li>
							<li>春季新品(18)</li>
							<li>夏季新品(31)</li>
							<li>全部商品(298)</li>
							
						</ul>
						<ul className={prolist.centerleftul}>
							<li className={prolist.centerleftultit}>新品特惠套装(1)</li>
							<li>全部商品(1)</li>
							
						</ul>
						
						
						
						<div className={prolist.centerleftimg}>
							<img src="http://i0.mbscss.com/img/moonbasa/2019/kyq/M4_24_160057.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i1.mbscss.com/img/moonbasa/2019/kyq/M4_24_160100.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i2.mbscss.com/img/moonbasa/2019/kyq/M4_24_160103.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i3.mbscss.com/img/moonbasa/2019/kyq/M4_24_160106.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i4.mbscss.com/img/moonbasa/2019/kyq/M4_24_160109.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i5.mbscss.com/img/moonbasa/2019/kyq/M4_24_160111.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i6.mbscss.com/img/moonbasa/2019/kyq/M4_24_160114.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i7.mbscss.com/img/moonbasa/2019/kyq/M4_24_160117.jpg"/>
						</div>
						<div className={prolist.centerleftimg}>
							<img src="http://i0.mbscss.com/img/moonbasa/2019/kyq/M4_24_160120.jpg"/>
						</div>
						<div className={prolist.centerleftimghot}>
							<p><span>Hot!</span> 热卖排行榜</p>
							<div>
								<img src="http://images.suorang.com/ProductImg/9/1901/middle/187119104-160-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创中式立领七分</p>
								<p className={prolist.centerleftimghotprice}>￥599.00</p>
							</div>
							<div>
								<img src="http://images.suorang.com/ProductImg/9/1704/middle/187117407-009-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创文艺高领不对称绑带连衣裙</p>
								<p className={prolist.centerleftimghotprice}>￥199.00</p>
							</div>
							<div>
								<img src="http://images.suorang.com/ProductImg/9/1502/middle/183015362-00B-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创文艺圆领立体捏褶立体结构前后搭片不规则小衫</p>
								<p className={prolist.centerleftimghotprice}>￥269.00</p>
							</div>
						</div>
						<div className={prolist.centerleftimghot}>
							<p>最近浏览记录</p>
							<div>
								<img src="http://images.suorang.com/ProductImg//9/1804/middle/187018401-242-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创文艺时尚提花撞色透视半身裙</p>
								<p className={prolist.centerleftimghotprice}>￥299.00</p>
							</div>
							<div>
								<img src="http://images.suorang.com/ProductImg//9/1803/middle/184018309-009-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创文艺新中式立领短袖优雅东方艺术定位印花飘逸连衣裙</p>
								<p className={prolist.centerleftimghotprice}>￥99.00</p>
							</div>
							<div>
								<img src="http://images.suorang.com/ProductImg//9/1902/middle/187119246-533-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创文艺圆领立体捏褶立体结构前后搭片不规则小衫</p>
								<p className={prolist.centerleftimghotprice}>￥489.00</p>
							</div>
							<div>
								<img src="http://images.suorang.com/ProductImg//9/1901/middle/187119167-014-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创文艺翻领袖口绑带暗条格百搭连衣裙</p>
								<p className={prolist.centerleftimghotprice}>￥349.00</p>
							</div>
							<div>
								<img src="http://images.suorang.com/ProductImg//9/1703/middle/187117366-015-01-M.jpg"/>
								<p className={prolist.centerleftimghottit}>所然原创文艺肌理感小V领A型裙</p>
								<p className={prolist.centerleftimghotprice}>￥199.00</p>
							</div>
						</div>
						
					
					</div>
				
					
				{/*right*/}
					<div className={prolist.centerbottomright}> 
						{/*hot*/}
						<div className={prolist.centerrighthot}>
							<div className={prolist.centerhottop}>
								<p>热卖推荐</p>
							</div>
							<div className={prolist.centerhotbottom}>
								<div className={prolist.centerhotcard}>
									<div className={prolist.centerhotcardleft}>
										<img  src="http://images1.suorang.com/ProductImg/9/1803/middle/184018309-009-01-M.jpg"/>
									</div> 
									<div className={prolist.centerhotcardright}>
									<p className={prolist.centerhotcardtit}>所然原创文艺时尚<br/>坑条套头打底毛衣</p>
									<br/>
									<span className={prolist.centerhotcardprice}>￥99.00</span>
									<br/>
									<input className={prolist.centerhotcardbtn} type="button" value="立即抢购"/>
									</div>
								</div>
								<div className={prolist.centerhotcard}>
									<div className={prolist.centerhotcardleft}>
										<img  src="http://images7.suorang.com/ProductImg/9/1703/middle/183017303-014-01-M.jpg"/>
									</div> 
									<div className={prolist.centerhotcardright}>
									<p className={prolist.centerhotcardtit}>所然原创文艺高领<br/>百搭侧开叉长款针织衫</p>
									<br/>
									<span className={prolist.centerhotcardprice}>￥199.00</span>
									<br/>
									<input className={prolist.centerhotcardbtn} type="button" value="立即抢购"/>
									</div>
								</div>
								<div className={prolist.centerhotcard}>
									<div className={prolist.centerhotcardleft}>
										<img  src="http://images.suorang.com/ProductImg/9/1803/middle/184018307-290-01-M.jpg"/>
									</div> 
									<div className={prolist.centerhotcardright}>
									<p className={prolist.centerhotcardtit}>所然原创文艺民族<br/>风提花圆领毛衫连衣裙</p>
									<br/>
									<span className={prolist.centerhotcardprice}>￥299.00</span>
									<br/>
									<input className={prolist.centerhotcardbtn} type="button" value="立即抢购"/>
									</div>
								</div>
								<div className={prolist.centerhotcard}>
									<div className={prolist.centerhotcardleft}>
										<img  src="http://images2.suorang.com/ProductImg/9/1704/middle/187117407-009-01-M.jpg"/>
									</div> 
									<div className={prolist.centerhotcardright}>
									<p className={prolist.centerhotcardtit}>所然原创文艺高领<br/>不对称绑带连衣裙</p>
									<br/>
									<span className={prolist.centerhotcardprice}>￥199.00</span>
									<br/>
									<input className={prolist.centerhotcardbtn} type="button" value="立即抢购"/>
									</div>
								</div>
							</div>
						</div>
						{/*hot*/}
						{/*筛选*/}
						<ul className={prolist.centerselect}>
							<li>
								<p className={prolist.centerselecttit}>品类</p>
								<p>女装<span>(289)</span></p>
								<p>配饰<span>(4)</span></p>
								<p>饰品<span>(3)</span></p>
								<p>化妆品<span>(1)</span></p>
							</li>
							<li>
								<p className={prolist.centerselecttit}>性别</p>
								<p>女<span>(295)</span></p>
								<p>男<span>(3)</span></p>
							</li>
							<li>
							<p className={prolist.centerselecttit}>颜色</p>
								<p><span className={prolist.centerselectcolor1}></span></p>
								<p><span className={prolist.centerselectcolor2}></span></p>
								<p><span className={prolist.centerselectcolor3}></span></p>
								<p><span className={prolist.centerselectcolor4}></span></p>
								<p><span className={prolist.centerselectcolor5}></span></p>
								<p><span className={prolist.centerselectcolor6}></span></p>
								<p><span className={prolist.centerselectcolor7}></span></p>
								<p><span className={prolist.centerselectcolor8}></span></p>
								<p><span className={prolist.centerselectcolor9}></span></p>
								<p><span className={prolist.centerselectcolor10}></span></p>
							</li>
							<li>
							
							<p className={prolist.centerselecttit}>尺寸</p>
							<p>L<span>(201)</span></p>
							<p>M<span>(199)</span></p>
							<p>S<span>(155)</span></p>
							<p>XL<span>(148)</span></p>
							<p>均码<span>(1)</span></p>
							
							</li>
							<li>
								<p className={prolist.centerselecttit}>风格</p>
								<p>文艺<span>(261)</span></p>
								<p>原创<span>(13)</span></p>
								<p>欧美<span>(13)</span></p>
								<p>时尚<span>(5)</span></p>
								<p>通勤<span>(1)</span></p>
								<p>正装<span>(1)</span></p>
								<p>民族<span>(1)</span></p>
								<p>日韩<span>(1)</span></p>
								<p>复古<span>(1)</span></p>
							</li>
						</ul>
						
						{/*筛选*/}
						
						{/*prolist*/}
						<div className={prolist.centerprolist}>
							<div className={prolist.centerprolisttop}>
								<ul className={prolist.centerprolistul}>
									<li>默认<Icon type="arrow-down" style={{ fontSize: '12px', color: '#5c1938' }} /></li>
									<li>销量<Icon type="arrow-down" style={{ fontSize: '12px', color: '#5c1938' }} /></li>
									<li>好评<Icon type="arrow-down" style={{ fontSize: '12px', color: '#5c1938' }} /></li>
									<li>最新<Icon type="arrow-down" style={{ fontSize: '12px', color: '#5c1938' }} /></li>
									<li>价格<Icon type="arrow-down" style={{ fontSize: '12px', color: '#5c1938' }} /></li>
									<li>价格<Icon type="arrow-down" style={{ fontSize: '12px', color: '#5c1938' }} /></li>
								</ul>
								<div className={prolist.centerprolistinput}>
									<input className={prolist.centerprolistinput1}  type="number"  />-<input className={prolist.centerprolistinput1} type="number" />
									<input type="checkbox"/>促销商品
								</div>
								<span className={prolist.centerprolisttoptotal}>共225件商品</span>
							</div>
							{/*产品列表*/}
								<div className={prolist.prolist}>
									<ul className={prolist.prolistul}>
									
										{
											this.state.list.map((item)=>{
												return(

													<NavLink to={"/singledetail/"+item._id}>
													<li key={item._id}>
														<img className={prolist.prolistullargeimg} src={item.coverImg}/>
														<p className={prolist.prolistulcenter}>
															<img className={prolist.prolistulminimg} src={item.coverImg}/>
															<button className={prolist.prolistulbtn}><Icon type="star" style={{ fontSize: '12px', color: '#fff' }} />收藏</button>
														</p>
														<p className={prolist.prolistulinfo}>
														<span className={prolist.prolistulprice}>￥:{item.price}</span>
														<br/>
														<span  className={prolist.prolistuldetail}>{item.descriptions}</span>
														<br/>
														<span className={prolist.prolistulcomment}>库存 :<span className={prolist.prolistulkucun}>{item.quantity}</span></span>
														</p>
													</li>
													</NavLink>
													
												);
												
												
											})
										}
										
										
									</ul>
									<Pagination className={prolist.pagination} defaultCurrent={1} total={500} />
								</div>
								
							{/*产品列表*/}
						</div>
						
						{/*prolist*/}
					</div>
						
				</div>
				
				
			</div>
			
			</div>
			
		{/*center*/}
			



			{/*foot*/}
			{/*foot-top*/}
			<div className={prolist.foot}>
				<div className={prolist.footconent}>
				<ul className={prolist.footlist}>
					<NavLink to="/home"><li className={prolist.footlisttit}>新手指南</li></NavLink>
					<NavLink to="/home"><li>注册新用户</li></NavLink>
					<NavLink to="/home"><li>如何订购</li></NavLink>
					<NavLink to="/home"><li>如何修改订单</li></NavLink>
					<NavLink to="/home"><li>尺码对照表</li></NavLink>
					
				</ul>
				
				<ul className={prolist.footlist}>
					<NavLink to="/home"><li className={prolist.footlisttit}>支付方式</li></NavLink>
					<NavLink to="/home"><li>支付方式</li></NavLink>
					<NavLink to="/home"><li>账户提现及退款时效</li></NavLink>
					<NavLink to="/home"><li>查看账户余额</li></NavLink>
				</ul>
				<ul className={prolist.footlist}>
					<NavLink to="/home"><li className={prolist.footlisttit}>配送方式</li></NavLink>
					<NavLink to="/home"><li>配送费收取标准</li></NavLink>
					<NavLink to="/home"><li>配送范围及配送时效</li></NavLink>
					<NavLink to="/home"><li>签收注意事项</li></NavLink>
					<NavLink to="/home"><li>海外订购</li></NavLink>
				</ul>
				
				<ul className={prolist.footlist}>
					<NavLink to="/home"><li className={prolist.footlisttit}>退换货服务</li></NavLink>
					<NavLink to="/home"><li>退换货政策</li></NavLink>
					<NavLink to="/home"><li>退换货流程</li></NavLink>
					<NavLink to="/home"><li>隐私申明</li></NavLink>
					
					
				</ul>
				<ul className={prolist.footlist}>
					<NavLink to="/home"><li className={prolist.footlisttit}>会员制度及优惠</li></NavLink>
					<NavLink to="/home"><li>优惠活动</li></NavLink>
					<NavLink to="/home"><li>VIP优惠尊享</li></NavLink>
					<NavLink to="/home"><li>大宗购物</li></NavLink>
					<NavLink to="/home"><li>积分制度</li></NavLink>
				</ul>
				
				<ul className={prolist.footlist}>
					<NavLink to="/home"><li className={prolist.footlisttit}>帮助中心</li></NavLink>
					<NavLink to="/home"><li>忘记密码</li></NavLink>
					<NavLink to="/home"><li>常见问题</li></NavLink>
					<NavLink to="/home"><li>在线客服</li></NavLink>
					<NavLink to="/home"><li>联系我们</li></NavLink>
					<NavLink to="/home"><li>专利平台</li></NavLink>
				</ul>
				<ul className={prolist.footlist}>
					<NavLink to="/home"><li className={prolist.footlisttit}>咨询订购</li></NavLink>
					<NavLink to="/home"><li>400-716-2828</li></NavLink>
					<NavLink to="/home"><li className={prolist.footlisttit,prolist.server}>客户服务</li></NavLink>
					<NavLink to="/home"><li>400-716-7878</li></NavLink>
				</ul>
				<ul className={prolist.footlist}>
					<img src="http://i0.mbscss.com/img/moonbasa/2015/mobile/M4_14_150441.png"/>
					
				</ul>
				</div>
				
			
			</div>
			
			
			
			{/*foot-top*/}
			{/*foot-center*/}
			<div className={prolist.footcenter}>
				<ul className={prolist.footcenterul}>
				<li>
					<div className={prolist.footcenterulleft}>
						<Icon type="sound" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={prolist.footcenterulright}>
					<p>环球时尚 梦想成真<br/><span>全明星时代</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={prolist.footcenterulleft}>
						<Icon type="history" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={prolist.footcenterulright}>
					<p>7天无理由退货<br/><span>港澳台地区及海外订单除外</span></p>
					
					</div>
				
				</li>
				<li>
					<div className={prolist.footcenterulleft}>
						<Icon type="dollar" style={{ fontSize: '40px', color: '#5c1938' }} />
					</div>
					<div className={prolist.footcenterulright}>
					<p>国内满180元免运费<br/><span>港澳台满300元/海外满2000元</span></p>
					
					</div>
				
				</li>
				
				</ul>
			
			</div>
			
			{/*foot-center*/}
			{/*foot-foot*/}
			<div className={prolist.footfoot}>
				
				<ul className={prolist.footfootul}>
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
				
				<div className={prolist.footfootimg}>
				<img src="http://i6.mbscss.com/img/moonbasa/2012/12/20/mbs_f_01.jpg"/>
				<img  src="http://i7.mbscss.com/img/moonbasa/2012/12/20/mbs_f_02.jpg"/>
				<img className={prolist.thire} src="http://i1.mbscss.com/img/moonbasa/2012/12/20/mbs_f_04.jpg"/>
				<img src="http://i2.mbscss.com/img/moonbasa/2012/12/20/mbs_f_05.jpg"/>
				<img src="http://i3.mbscss.com/img/moonbasa/2012/12/20/mbs_f_06.jpg"/>
				<img src="http://i4.mbscss.com/img/moonbasa/2012/12/20/mbs_f_07.jpg"/>
				</div>
			</div>
			
			{/*foot-foot*/}
			{/*foot*/}
			
			
			</div>
			
			
		)
	}
	
	componentDidMount(){
		axios({
			url:"http://api.cat-shop.penkuoer.com/api/v1/products",
			params:{per:100,page:1,name:"",product_category:""}
		}).then((data)=>{
			//console.log(data.data.products)
			this.setState({list:data.data.products})
		})
	}
}



