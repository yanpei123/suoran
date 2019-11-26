import  React, {Component } from 'react';
import {NavLink} from "react-router-dom";
import add from '../../css/Address.module.css';
import order from '../../css/Uporder.module.css';
import { isMethod, blockStatement } from '@babel/types';
import * as api from '../../api/address';
import * as apis from '../../api/getorder';
import axios from 'axios';
import Head from '../common/Head';
import Footer from '../common/Footer';


class Order extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            str:'',
            index:'',
            num:'',
            phone:'',
            username:'',
            address:'',
            id:'',
            btn:'block',
            arr:[],
            arrs:[],
            receiver:'',
            regions:'',
            obj:{},
            olist:[],
            numtotalprice:0

        }
    }
    update(n){
        this.setState({index:n})
    }
// 增加address
    addres(){
        this.props.history.push('/address')
    }
// 删除address
    del(id){
       //console.log(id)
       api.getDel(
           id,
           {},
           localStorage.getItem('token')
       ).then((data)=>{
           //console.log(data)
           if(data.status == 200){
               alert('删除成功')
           }
       })
    }
    supdate(uid,n){
        //console.log(uid,n)
        //console.log(this.refs)
        this.setState({num:n,id:uid});
    }
// 修改address
    btn(){
        let id =this.state.id;
      //  console.log(id)
        if (this.state.btn == 'block') {
            this.setState({
                btn: 'none',
            })
        }
        api.getUpdate(
            id,
            {
                receiver:this.refs.username.value,
                mobile:this.refs.phone.value,
                regions:'河南省-郑州市-二七区',
                address:this.refs.address.value,
                idDefault:'true'
            },localStorage.getItem('token')
        ).then((data)=>{
            if(data.status == 200){
                alert('修改成功');
               window.location.reload() ;
            }
        })
    }
// 提交订单
    oder(){
    	
    	
     //   console.log(this.state.olist)
        let receiver=this.refs.receiver.value,
            regions=this.refs.regions.value,
            address=this.refs.address.value,
            olist=this.state.olist
        apis.getSigleorder(
            {
                receiver:receiver,
                regions:regions,
                address:address,
                orderDetails:olist
            },localStorage.getItem('token')
        ).then((data)=>{
            if(data.data.code == 'success'){
                alert(data.data.message)
                this.props.history.push("/oder")
            }
        })
    }
    render(){
        let item =this.state.str;
        return(
            <div>
                <Head></Head>
                <div className={order.wrap}>
                    <div className={order.mains}>
                        <div className={add.tit} style={{width:1200}}>
                            <span>收货信息</span>
                            <span className={add.update} onClick={()=>this.update(1)} >[修改]</span>
                            <span className={add.update} onClick={()=>this.update(2)} >[取消修改]</span>
                            <span className={add.update} onClick={()=>this.addres()} >[新增收货地址]</span>
                        </div>
                        <div className={order.tabs}>
                            {this.state.index == 1?
                             this.state.list.map((items)=>{
                                 return(
                                     <div key={items._id} className={order.lists}>
                                        <div className={order.check}>
                                            <div className={order.xinxi}>
                                                <span>{items.receiver}&nbsp;&nbsp;&nbsp;</span>
                                                <span>{items.regions}&nbsp;&nbsp;&nbsp;</span>
                                                <span>{items.address}&nbsp;&nbsp;&nbsp;</span>
                                                <span>{items.mobile}&nbsp;&nbsp;&nbsp;</span>
                                            </div>
                                            <div className={order.caozuo}>
                                                <span className={order.del}><em onClick={()=>this.supdate(items._id,1)}>修改</em><em onClick={()=>this.del(items._id)}>删除</em></span>
                                            </div>                                       
                                        </div>
                                    </div>
                                 )
                             }) 
                                :
                                <div className={order.dizhi}>
                                    <div className={order.top}></div>
                                    <dl>
                                        <dd>
                                        <span>
                                            <input type='text'  ref='receiver' value={item.receiver}/>
                                        </span>
                                        <input type='text'  ref='regions' value={item.regions}/>
                                        <input type='text'  ref='address' value={item.address}/>
                                        <span>{item.mobile}&nbsp;&nbsp;&nbsp;</span>
                                        </dd>
                                    </dl>
                                </div>
                            }
                        </div>
                        {this.state.num ==1 ?
                        <div style={{display:this.state.btn}}>
                           <div className={add.infromation}>
                            <div className={add.person}>
                                <div className={add.pname}>
                                    <span className={add.start}>*</span><span className={add.sname}>收货人:</span>
                                </div>
                                <div className={add.pnews}>
                                    <input type='text' placeholder='请填写准确的收货人姓名' className={add.pername} ref='username'/>
                                </div>
                            </div>

                        
                            <div className={add.person}>
                                <div className={add.pname}>
                                    <span className={add.start}>*</span><span className={add.sname}>详细地址:</span>
                                </div>
                                <div className={add.pnews}>
                                    <input type='text' placeholder='请填写准确的收货人的详细地址' className={add.pername} ref='address'/>
                                </div>
                            </div>

                            <div className={add.person}>
                                <div className={add.pname}>
                                    <span className={add.start}>*</span><span className={add.sname}>手机:</span>
                                </div>
                                <div className={add.pnews}>
                                    <input type='text' placeholder='请填写手机号码' className={add.pername} ref='phone'/>
                                </div>
                            </div>
                            <button className={add.btn} onClick={()=>this.btn()}>确定</button>
                            
                        </div>
                        </div>
                        
                        :''}
                        <div className={order.tits} style={{width:1200}}>
                            <span>支付以及配送方式</span>
                            <span>[修改]</span>
                        </div>
                        <div className={order.monycar}>
                            <div className={order.lipin}>
                            <span>账户余额/礼券抵扣：</span>
                            <span>
                                <div className={order.lpkjh}>礼品卡激活</div>
                                <span className={order.add}>+</span>
                            </span>
                            </div>
                            <div className={order.select}>
                                您选择使用：<span className={order.red_txt}> 在线支付</span><br/>
                                <span className={order.red_txt}>2样商品</span>：梦芭莎快递运输
                            </div>
                        </div>
                        <div className={add.titpic} style={{width:1200,heigth:100}}>
                            <span></span>
                        </div>
                    </div>
                    <div className={order.spxx}>
                        <div className={order.xxtitle}>
                            <span>商品信息</span>
                            <a>返回修改购物车 </a>
                        </div>
                        <div className={order.shop}>
                        <span className={order.left}> 以下商品由 梦芭莎 发货<span className={order.yunfei}> <span className={order.red}>免配送费</span></span></span>
                        </div>
                        <div className={order.tab}>
                            <table style={{cellspacing:'0',cellpadding:'0',border:'0'}}>
                                <tr>
                                    <th>商品名称</th>
                                    <th>梦芭莎价格</th>
                                    <th>数量</th>
                                    <th>小计</th>
                                </tr>
                                {
                                    this.state.arr.map((item)=>{
                                        return(
                                        <tr>
                                            <td className={order.ttd}>
                                                <div className={order.tabpic}>
                                                    <img src={item.product.coverImg} style={{width:39,height:53}}/>
                                                </div>
                                                <div className={order.text}>
                                                    <p>{item.product.descriptions}</p>
                                                    <p>{item.product.name}</p>
                                                </div>
                                            </td>
                                            <td className={order.tds}><span className={order.price_icon}>￥</span>{item.product.price}</td>
                                            <td className={order.num}>{item.quantity}</td>
                                            <td className={order.price}>
                                                <span>
                                                    <b className={order.price_icon}>￥&nbsp;</b>
                                                    <a style={{color:'#d90077'}}>
                                                        {item.product.price * item.quantity}
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                        )
                                    }) 
                                }
                            </table>
                            <div className={order.prices}>
                                <p>商品总价：</p>
                                <p>配送费:免配运费</p>
                                <p>应付金额：<span className={order.totprice}>￥{this.state.numtotalprice}</span></p>
                                <div className={order.kai}>
                                    <p style={{width:260}}>如需开具发票，请在订单签收7天后联系客服开具</p>
                                </div>
                            </div>
                        </div>
                        <div className={order.btnget}>
                            <div className={order.order_p}>
                            <NavLink to={{pathname:"/oder",query:{numtotalprice:this.state.numtotalprice}}}><button onClick={()=>this.oder()}>提交订单</button></NavLink>
                            <span>请核对以上信息，确认无误后点击"提交订单"</span>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className={order.footer}>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
    componentDidMount(){
    	console.log(this.props.location.query.numtotalprice)
		this.setState({numtotalprice:this.props.location.query.numtotalprice})
    	
        let token =localStorage.getItem('token')
        api.getList(
            {
                per:'',
                page:''
            },token
        ).then((data)=>{
            this.setState({str:data.data.addresses[0]});
            this.setState({list:data.data.addresses});
        })
        // apis.getOrderlist(
        //     {
        //         per:'',
        //         page:''
        //     },token
        // ).then((data=>{
        //     console.log(data);
        // }))
        apis.getList(
            {},
            token
        ).then((data)=>{
           // console.log(data.data);
            let datas=data.data;
            let s=this.state.arr;
            let t=this.state.olist;
            datas.map((item)=>{
                if(item.product != null){
                    this.setState({s:s.push(item)});
                    this.setState({obj:{quantity:item.quantity,product:item.product._id,price:item.product.price}})
                    this.setState({t:t.push(this.state.obj)});
                }
                // console.log(this.state.obj);
                // console.log(this.state.olist);
            })
        })
    }
}
export default Order;