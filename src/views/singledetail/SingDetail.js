import  React, {Component } from 'react';
import single from '../../css/SingleDetail.module.css';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import { Carousel, Radio, Switch } from 'antd';
import { calendarFormat } from 'moment';
// 头部head
class Head extends Component {
    render(){
        return(
            <div className={single.header_wrap}>
                <div className={single.head_nav}>
                    <ul className={single.leftnav}>
                        <li className={single.lw_home}><img src={'http://i7.mbscss.com/img/moonbasa2/item/btn_03.png'}/><a href="http://www.moonbasa.com/" alt="">梦芭莎首页</a></li>
                        <li><img src={'http://i1.mbscss.com/img/moonbasa2/item/btn_05.png'}/><span>100%正品保证  创立于2006年</span></li>
                    </ul>
                    <ul className={single.rightnav}>
                        <li>
                            <NavLink to=''>登录</NavLink>
                        </li>
                        <li>
                            <NavLink to=''>注册</NavLink>
                            <li>|</li>
                        </li>
                        <li>
                            <i className={single.weixin}></i>
                            <NavLink to=''>微信</NavLink>
                            <li>|</li>
                        </li>
                        <li>
                            <i className={single.weibo}></i>
                            <NavLink to=''>微博</NavLink>
                            <li>|</li>
                        </li>
                        <li>
                            <i className={single.phone}></i>
                            <NavLink to=''>手机版</NavLink>
                            <li>|</li>
                        </li>
                        <li>
                            <NavLink to=''>收藏梦芭莎</NavLink>
                            <li>|</li>
                        </li>
                        <li>
                            <i className={single.car}></i>
                            <NavLink to=''>购物车</NavLink>
                            <li>|</li>
                        </li>
                        <li>
                            <i className={single.all}></i>
                            <NavLink to=''>全部分类</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

// 
// 
// 搜索框
class Search extends Component {
    render(){
        return(
            <div>
                <div className={single.search_wrap}>
                    <div className={single.btn}>
                        <div className={single.logo}>
                            <img src={"http://i3.mbscss.com/img/moonbasa2/item/logomoonbasa.png"} alt="梦芭莎"/>
                        </div>
                        <div className={single.boundary}></div>
                        <div class={single.brandtype}>
                            <p>原创设计女装</p>
                            <p className={single.textp}>梦芭莎自营品牌</p>
                        </div>
                        <div className={single.searchbtn}>
                            <div className={single.btn_Ts}>搜本店</div>
                            <div className={single.search1}>
                                <div className={single.first}>
                                    <span class="inpv1">
                                        <input type="text" class={single.ac_inputv1} size="100" maxlength="20" placeholder='秋新品震撼上市,搜千万精品低至9元'/>
                                    </span>
                                    <span class="subv1">
                                        <input type="button" style={{cursor:'pointer'}}  value="搜全站" mola="search" className={single.All}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={single.bglogo}></div>
            </div>
        )
    }
}

// 
// 导航
class Nav extends Component {
    render(){
        return(
            <div className={single.navWrap}>
                <div className={single.nav}>
                    <div>
                        <ul className={single.menu}>
                            <li><a className={single.on} rel="nofollow">首页</a></li>
                            <li><a rel="nofollow" target="_blank">全部商品</a></li>
                            <li><a rel="nofollow" target="_blank">秋装上市</a></li>
                            <li><a rel="nofollow" target="_blank">19春季新品</a></li>
                            <li><a rel="nofollow" target="_blank">热销商品</a></li>
                            <li><a rel="nofollow" target="_blank">连衣裙</a></li>
                            <li><a rel="nofollow" target="_blank">女士上衣</a></li>
                            <li><a rel="nofollow" target="_blank">女士裤装</a></li>
                            <li><a rel="nofollow" target="_blank">女士外套</a></li>
                            <li><a rel="nofollow" target="_blank">套装配饰</a></li>
                            <li className={single.last}><a rel="nofollow" target="_blank">活动专区</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
// 购物车
class Car extends Component{
    render(){
        return(
            <div className={single.car}>
                <div className={single.person}>
                    <div className={single.color}>
                    <ul>
                        <li className={single.tti}>颜色</li>
                        <li className={single.txt}>
                            <p>
                                <span><a title="红色"><img src={"http://images.suorang.com/ProductImg/9/1804/color/180918465-075-00-C.jpg"} alt=""/></a></span>
                                <i title="红色" className={single.title}>红色</i>
                            </p>
                        </li>
                    </ul>
                    </div>
                    <div className={single.sise}>
                    <ul>
                        <li className={single.sizetit}>尺码</li>
                        <li className={single.sizetxt}>
                            <span className={single.select}>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </li>
                    </ul>
                    </div>
                    <div className={single.num}>
                        <ul>
                            <li className={single.nums}>数量</li>
                            <li>
                                <p className={single.s_num}><b>1</b>
                                    <i class={single.add}></i>
                                    <i class={single.reduce}></i>
                                </p>
                                <span>仅剩余4件</span>
                            </li>
                        </ul>
                    </div>
                    <div className={single.buttons}>
                        <button className={single.buy}>立即购买</button>
                        <button className={single.buycar}>添加购物车</button>
                    </div>
                    <div className={single.test}>
                        <ul>
                            <li>
                                <div className={single.name}>
                                    <img src={"http://i2.mbscss.com/img/moonbasa2/20151209/16012209.png"}/>
                                    <span>7天无条件退换货</span>
                                </div>
                            </li>
                            <li>
                                <div className={single.name}>
                                    <img src={"http://i2.mbscss.com/img/moonbasa2/20151209/16012211.png"}/>
                                    <span>满180元免运费</span>
                                </div>
                            </li>
                            <li>
                                <div className={single.name}>
                                    <img src={"http://i2.mbscss.com/img/moonbasa2/20151209/16012213.png"}/>
                                    <span>梦芭莎发货</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
//轮播
class Look extends Component{
    constructor(props){
        super(props)
        this.state={
            dotPosition: 'right'
        }
    }
    render(){
        const { dotPosition } = this.state;
        return(
            <div className={single.look}>
                <Radio.Group
                onChange={this.handlePositionChange}
                value={dotPosition}
                style={{ marginBottom: 8 }}
                >
                </Radio.Group>
                <Carousel dotPosition={dotPosition}>
                <div className={single.ant_carousel}>
                    <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                    <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                    <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                </div>
                <div className={single.ant_carousel}>
                <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                </div>
                <div className={single.ant_carousel}>
                <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                    <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                    <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                    <img src={'http://images1.suorang.com/ProductImg/9/1804/small/180918476-565F-01-S.jpg'}/>
                    <p className={single.jzjg}>¥698</p>
                </div>
                </Carousel>
            </div>
        )
    }
}
//详情开始
class BigNav extends Component {
    render(){
        return(
            <div>
                <div className={single.topWrap}>
                     <div className={single.top}>
                        <div className={single.top_nav}>
{/* 左侧放大镜 */}
                            <div className={single.big_l}>
                                <div className={single.this_page}>
                                    <a rel="nofollow">首页</a>&gt; <a>T恤</a> &gt; <a>最新商品</a> &gt; <a>全部新品</a>
                                </div>
                                <div className={single.mainpic}><img src={'http://images.suorang.com/ProductImg/9/1803/large/184018309-015-01-L.jpg'} style={{width:380,height:513}}/>                                </div>
                                <div className={single.list}>
                                    <div className={single.listmenu}>
                                        <div className={single.left_r}></div>
                                        <div className={single.right_r}></div>
                                        <div className={single.middlepic}>
                                            <ul>
                                                <li>
                                                    <img src={'http://images.suorang.com/ProductImg/9/1803/small/184018309-009-01-S.jpg'}/>
                                                </li>
                                                <li>
                                                    <img src={'http://images.suorang.com/ProductImg/9/1803/small/184018309-009-01-S.jpg'}/>
                                                </li>
                                                <li>
                                                    <img src={'http://images.suorang.com/ProductImg/9/1803/small/184018309-009-01-S.jpg'}/>
                                                </li>
                                                <li>
                                                    <img src={'http://images.suorang.com/ProductImg/9/1803/small/184018309-009-01-S.jpg'}/>
                                                </li>
                                                <li>
                                                    <img src={'http://images.suorang.com/ProductImg/9/1803/small/184018309-009-01-S.jpg'}/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={single.right_pic}>
                            <h2>
                                <em>所然原创文艺时尚坑条套头打底毛衣</em>
                                <p className={single.tit}></p> 
                            </h2>
                            <div className={single.price}>
                                <div className={single.code}>
                                    <img className={single.cartoon_pic} src={"http://i2.mbscss.com/img/moonbasa2/20151209/move01.gif"} alt=""/>
                                    <div className={single.mb_p}><p>手机便捷购买</p></div>
                                </div>
                                <div className={single.price_s}>
                                <span className={single.leftPrice}><i>¥</i><b>789</b></span>
                                <div className={single.rightPrice}>
                                    <span>6.6折</span>
                                    <span>¥<del>1199</del></span>
                                </div>
                                <p class={single.priceBlock_dis}>
                                    <a>评价（<span>7</span>）条</a>&nbsp;|&nbsp;梦芭莎自营
                                </p>
                                </div>
                            </div>
                            <Car></Car>
                            </div>
                            <Look></Look>
                        </div>
                        <div className={single.bottom}>
                            <p className={single.ItemStyleCode}>商品编码：184018309</p>
                            <p className={single.ItemStyleCodes}>收藏</p>
                        </div>
                     </div>

                </div>
            </div>
        )
    }
}
//mainnav左侧图片
class Main extends Component {
    render(){
        return(
            <div className={single.mainWrap}>
                <div className={single.mainav}>
                    <div className={single.main_l}>
                        <ul>
                            <li>
                                <img src={'http://i2.mbscss.com/img/moonbasa/2019/kyq/M9_24_192617.jpg'}/>
                            </li>
                            <li>
                                <img src={'http://i3.mbscss.com/img/moonbasa/2018/zyc/M7_3_142657.jpg'}/>
                            </li>
                            <li>
                                <img src={'http://images1.moonbasa.com/ProductImg/1/1703/large/462017305-X14-01-L.jpg'}/>
                                <div className={single.mainprice}>
                                    <span class="sign">￥</span><span class="rmb">91.00</span>
                                    <i className={single.main_car}></i>
                                </div>
                            </li>
                            <li>
                                <img src={'http://images1.moonbasa.com/ProductImg/1/1703/large/462017305-X14-01-L.jpg'}/>
                                <div className={single.mainprice}>
                                    <span class="sign">￥</span><span class="rmb">91.00</span>
                                    <i className={single.main_car}></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Middle></Middle>
                </div>
            </div>
        )
    }
}
// 商品属性
class Shu extends Component{
    render(){
        return(
            <div className={single.shunav}>
                    <div className={single.shu_one}>
                        <img src={"http://i2.mbscss.com/img/moonbasa2/20151209/t_02.png"}/>
                    </div>
                    <div>
                        <div className={single.attribute}>
                                <dl className={single.attrList}>
                                    <dt>版型：</dt><dd title="标准型">标准型</dd></dl>
                                <dl className={single.attrList}>
                                    <dt>厚薄：</dt><dd title="适中">适中</dd></dl>
                                <dl className={single.attrList}>
                                    <dt>领型：</dt><dd title="连身领">连身领</dd></dl>
                                <dl className={single.attrList}>
                                    <dt>衣长：</dt><dd title="中长款">中长款</dd></dl>
                                <dl className={single.attrList}>
                                    <dt>袖长：</dt><dd title="长袖">长袖</dd></dl>
                                <dl className={single.attrList}>
                                    <dt>面料：</dt><dd title="面料：40%羊毛50%聚酯纤维10%聚丙烯腈纤维 里布：聚酯纤维">面料：40%羊毛50%聚酯纤维10%聚丙烯腈纤维 里布：聚酯纤维</dd></dl>
                        </div>
                    </div>
                </div>
        )
    }
}
//评论
class Toke extends Component{
    render(){
        return(
            <div className={single.toke}>
                
            </div>
        )
    }
}
class List extends Component{
    render(){
        let index =this.props.lei;
       // console.log(this.props.lei)
        switch (index) {
            case 1:
                return  <Shu></Shu>
            break;
            case 2:
                return  <h2>1111</h2>
        }
    }
}
//吸顶
class TopDom extends Component{
    constructor(props){
        super(props)
        this.state={
            index:1,
           // contentClass:"conditionArea"
           contentClass:'single.domTap'
        }
        this.windowOnScroll();
        let isScrollTop = true;

    }
    change(i){
        this.setState({index:i})
    }
    windowOnScroll(){
        let _this = this;
        window.onscroll = function(){
             //获取滚动条滚动的距离
            let h =document.documentElement.scrollTop ||  document.body.scrollTop; 
            console.log(h); 
            if(h > 74){
                console.log('111');
                _this.setState({
                    contentClass:"single.domTap single_fixed"
                });
            }else{
                _this.setState({
                    contentClass:"single.domTap"
                });
            }
        }
    }
    render(){
        let index =this.state.index
        return(
            <div className={this.state.contentClass}>
            <div className={single.topnav} ref='tab'>
                <ul>
                    <li className={index == 1 ? single.onselect :''} onClick={()=>this.change(1)}>商品详情</li>
                    <li className={index == 2 ? single.onselect :''} onClick={()=>this.change(2)}>评论(7)</li>
                    <li className={index == 3 ? single.onselect :''} onClick={()=>this.change(3)}>如何支付</li>
                    <li className={index == 4 ? single.onselect :''} onClick={()=>this.change(4)}>7天无条件退换货</li>
                    <div className={single.carbuy}>
                        <div className={single.carbtn}>加入购物车</div>
                        <div className={single.phonebtn}>
                            <span>手机购买
                            <img src={'http://i1.mbscss.com/img/moonbasa2/item/item_qr_icon.png'} className={single.phone1}/>
                            </span>
                            <b>¥</b>
                            <span>879</span>
                        </div>
                    </div>
                </ul>   
            </div>
            <div className={single.tab}>
                <List lei={index}></List>
            </div>
            </div>
        )
    }
}
//middle部分
class Middle extends Component{
    render(){
        return(
            <div className={single.middleWrap}>
                <TopDom></TopDom>
            </div>
        )
    }
}
class SingDetail extends Component {
    render() {
        return (
            <div>
                <Head></Head>
                <Search></Search>
                <Nav></Nav>
                <BigNav></BigNav>
                <Main></Main>
            </div>
        );
    }
}

export default SingDetail;