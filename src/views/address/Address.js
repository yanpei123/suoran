import  React, {Component } from 'react';
import add from '../../css/Address.module.css';
import { isMethod } from '@babel/types';
import * as api from '../../api/address';
import Head from '../common/Head';
import Footer from '../common/Footer';
//footer

class Address extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            phone:'',
            address:'',

        }
    }
// 增加
    btn(){
        let token =localStorage.getItem('token')
        api.getAdd(
            {
                receiver:this.refs.username.value,
                mobile:this.refs.phone.value,
                regions:'河南省-郑州市-二七区',
                address:this.refs.address.value,
                idDefault:'true'
            },token
        ).then((data)=>{
            if(data.data.code == 'success'){
                alert(data.data.message)
               this.props.history.push('/uporder')
            }
        })
    }
    render() {
        return (
            <div>
                <Head></Head>
                <div className={add.main}>
                    <div className={add.order}>
                        <div className={add.tit}>
                            <span>收货信息</span>
                            <span className={add.update}>[修改]</span>
                        </div>

                        <div className={add.infromation}>
                            <div className={add.person}>
                                <div className={add.pname}>
                                    <span className={add.start}>*</span><span className={add.sname}>收货人:</span>
                                </div>
                                <div className={add.pnews}>
                                    <input type='text' placeholder='请填写准确的收货人姓名' className={add.pername} ref='username'/>
                                </div>
                            </div>

                            <div className={add.res}>
                                <div className={add.area}><span className={add.start}>*</span>选择地区:</div>
                                <div className={add.area_con}><select id="J_province" name="Province">
                                    <option value="">请选择省份</option>
                                    <option value="099019">广东省</option>
                                    <option value="099009">上海市</option><option value="099001">北京市</option>                                                            <option value="099010">江苏省</option>                                                            <option value="099023">四川省</option>                                                            <option value="099013">福建省</option>                                                            <option value="099011">浙江省</option>                                                            <option value="099017">湖北省</option>                                                            <option value="099018">湖南省</option>                                                            <option value="099015">山东省</option>                                                            <option value="099020">广西省</option>                                                            <option value="099016">河南省</option>                                                            <option value="099025">云南省</option>                                                            <option value="099027">陕西省</option>                                                            <option value="099002">天津市</option>                                                            <option value="099006">辽宁省</option>                                                            <option value="099003">河北省</option>                                                            <option value="099022">重庆市</option>                                                            <option value="099014">江西省</option>                                                            <option value="099024">贵州省</option>                                                            <option value="099012">安徽省</option>                                                            <option value="099004">山西省</option>                                                            <option value="099021">海南省</option>                                                            <option value="099008">黑龙江</option>                                                            <option value="099031">新疆</option>                                                            <option value="099007">吉林省</option>                                                            <option value="099005">内蒙古</option>                                                            <option value="099028">甘肃省</option>                                                            <option value="099030">宁夏</option>                                                            <option value="099029">青海省</option>                                                            <option value="099026">西藏</option>                                                    </select>                                                <select id="J_city" name="City">                            <option selected="">请选择城市</option>                        </select>                        <select id="J_area" name="District">                            <option selected="">请选择区/县</option>                        </select>                        <span id="J_erae_warn" class="area-warning fn-none"></span>
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
                                    <span className={add.start}>*</span><span className={add.sname}>邮政编码:</span>
                                </div>
                                <div className={add.pnews}>
                                    <input type='text' placeholder='请填写邮政编码' className={add.pername}/>
                                </div>
                            </div>

                            <div className={add.person}>
                                <div className={add.pname}>
                                <span className={add.start}></span><span className={add.sname}>电子邮件:</span>
                                </div>
                                <div className={add.pnews}>
                                    <input type='text' placeholder='请填写邮箱' className={add.pername}/>
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

                            <div className={add.person}>
                                <div className={add.pname}>
                                <span className={add.start}></span><span className={add.sname}>电话:</span>
                                </div>
                                <div className={add.pnews}>
                                    <input type='text' placeholder='请填写电话号码' className={add.pername}/>
                                    <span className={add.grey}>电话格式：如：010-65690100-021</span>
                                </div>
                            </div>
                            <button className={add.btn} onClick={()=>this.btn()}>确定</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Address;