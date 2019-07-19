import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import UserHeader from '../../components/userHeader/index'

import { Upload, Icon, message } from 'antd';
import { Select } from 'antd';
import Footer from '../../components/footer/index'
import { DatePicker } from 'antd';
import moment from 'moment';
import { Modal } from 'antd';
import './index.css'
const { Option } = Select;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const countyData={
    Hangzhou:['Hz1','Hz2'] ,
    Nanjing:['Nj1','Nj2']
}
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/png';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

class UserInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            visible:false,
            defaultSex:'女',
            cities: cityData[provinceData[0]],
            counties:countyData[cityData[provinceData[0]][0]],
            secondCity: cityData[provinceData[0]][0],
            sendCounty:countyData[cityData[provinceData[0]][0]][0]
          };
        console.log(this.state.counties)
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>{
              console.log(imageUrl)
                  this.setState({
                      imageUrl,
                      loading: false,
                  })
          }

          );
        }
      };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };
    handleSelectChange = value => {
       this.setState({
           defaultSex:value
       })
    };
    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    };

    onSecondCityChange = value => {
        console.log(value)
        this.setState({
            countys: countyData[value],
            sendCounty: countyData[value][0],
        });
    };
    onSecondCountyChange=value=>{
        this.setState({
            sendCounty:value
        })
    }
    render(){
        const { cities ,counties} = this.state;
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;

        return(
            <div>
                <UserHeader></UserHeader>
                <div className='clear'></div>
                <div className='userInfo-content'>
                    <div className='Subtitle'>
                        <p><span>个人中心</span>> &nbsp;个人信息</p>
                    </div>
                    <div className='info-manage'>
                        <div className='head-pic'>
                            <p>个人信息</p>
                            <div>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                          </Upload>
                            </div>
                            
                        </div>
                        <div className='info-txt'>
                            <div className='item info-id'><p className='txt-title'>ID:</p><span>15901368702</span></div>
                            <div className='item info-nickName'><p className='txt-title'>昵称:</p>
                                <input type="text" placeholder='王老师'/>
                            </div>
                            <div className='item info-sex'><p className='txt-title'>性别:</p>
                                <Select value={this.state.defaultSex}
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="女">女</Option>
                                    <Option value="男">男</Option>
                                </Select>
                            </div>
                            <div className='item info-birth'><p className='txt-title'>生日:</p>

                            </div>
                            <div className='item info-email'><p className='txt-title'>邮箱:</p>
                                <input type="email" placeholder='wangxl1955@163.com'/>
                            </div>
                        </div>
                    </div>
                    <div className='payment-manage'>
                        <div className='manage-title'>
                            <h2>支付密码管理 <span>忘记密码</span></h2>
                        </div>
                        <div className='payment-content'>
                            <div className="paymet-item">
                                <input type="text" placeholder='请输入当前支付密码'/>
                            </div>
                            <div className="paymet-item">
                                <input type="text" placeholder='请设置新的支付密码'/>
                            </div>
                            <div className="paymet-item">
                                <input type="text" placeholder='请再输入新设置的支付密码，两遍保持一致'/>
                            </div>
                            <div className="paymet-item phoneCode">
                                <input type="text" placeholder='请输入手机验证码'/>
                                <button className='manage-btn'>点击获取验证码</button>
                            </div>
                            <div className='paymet-item'>
                                <button className='manage-btn confirm'>确认</button>
                            </div>
                        </div>
                    </div>
                    <div className='address-manage'>
                        <div className='manage-title'>
                            <h2>收货地址管理 <span>（每个账号可添加5个常用收货地址）</span></h2>
                            <div className='add-newAddress' onClick={this.showModal}>
                                <img src={require('../../images/userInfo/Newlybuild.png')} alt=""/>
                                <span>新增地址</span>
                            </div>
                            <Modal
                                title="添加收获地址"
                                visible={this.state.visible}
                                onOk={this.hideModal}
                                onCancel={this.hideModal}
                            >
                                <div className='modal-address modal-Consignee'>
                                    <p><span className='star-icon'>*</span>收货人:</p>
                                    <input type="text"/>
                                </div>
                                <div className='modal-address'>
                                    <p><span className='star-icon'>*</span>所在区域:</p>
                                    <input type="text"/>
                                </div>
                                <div className='modal-address modal-addressParts'>
                                    <p><span className='star-icon'>*</span>详细地址:</p>
                                    <input type="text"/>
                                </div>
                                <div className='modal-address modal-mobileNum'>
                                    <p><span className='star-icon'>*</span>手机号码:</p>
                                    <div>
                                        <span className='modal-areaNum'>0086</span><input type="number"/>
                                    </div>
                                </div>
                                <div className='modal-address modal-machineNum'>
                                    <p>固定号码:</p>
                                    <div>
                                        <span className='modal-areaNum'>0086</span><input type="number"/>
                                    </div>
                                </div>
                                <div className="modal-address modal-emailAddress">
                                    <p>邮箱地址：</p>
                                    <input type="text"/>
                                </div>
                                <div className="modal-address modal-aliasAddress">
                                    <p>地址别名：</p>
                                    <input type="text"/>
                                    <span className='modal-aliasAddress-tips'>建议填写常用名称</span>
                                    <div className='address_type'>
                                        <span>家</span>
                                        <span>父母家</span>
                                        <span>公司</span>
                                    </div>
                                </div>
                                <button className='modal-saveAddress-btn'>保存地址</button>
                            </Modal>
                        </div>
                        <div className='addAddress-content'>
                            <div className='addAddress-title'>
                                <p>地址一:</p>
                                <div><img src={require('../../images/userInfo/icon_delete.png')} alt=""/></div>
                            </div>
                            <div className='addAddress-info'>
                                <div className="addAddress-item address-consignee">
                                    <p className='addAddress-key'>收货人：</p>
                                    <input type="text" value='王老师'/>
                                </div>
                                <div className="addAddress-item address-area">
                                    <p className='addAddress-key'>所在地区：</p>
                                    <Select
                                        defaultValue={provinceData[0]}
                                        style={{ width: 114 }}
                                        onChange={this.handleProvinceChange}
                                    >
                                        {provinceData.map(province => (
                                            <Option key={province}>{province}</Option>
                                        ))}
                                    </Select>
                                    <Select
                                        style={{ width: 114}}
                                        value={this.state.secondCity}
                                        onChange={this.onSecondCityChange}
                                    >
                                        {cities.map(city => (
                                            <Option key={city}>{city}</Option>
                                        ))}
                                    </Select>
                                    <Select
                                        style={{ width: 114 }}
                                        value={this.state.sendCounty}
                                        onChange={this.onSecondCountyChange}
                                    >
                                        {counties.map(county => (
                                            <Option key={county}>{county}</Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="addAddress-item address-shipping">
                                    <p className='addAddress-key'>收货地址：</p>
                                    <input type="text" value='学院南路10号'/>
                                </div>
                                <div className="addAddress-item address-contact">
                                    <p className='addAddress-key'>联系电话：</p>
                                    <input type="text" value='13866668888'/>
                                    <button>保存</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='clear'></div>
                <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(UserInfo);