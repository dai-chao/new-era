import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import UserHeader from '../../components/userHeader/index'

import { Upload, Icon, message } from 'antd';

import Footer from '../../components/footer/index'
import { DatePicker } from 'antd';
import moment from 'moment';
import './index.css'



function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
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
          };
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

    render(){

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
                            <div>ID:<span>15901368702</span></div>
                            <div>昵称:
                                <input type="text" placeholder='王老师'/>
                            </div>
                            <div>性别:
                                <select name="" id="">
                                    <option value="">
                                        男
                                    </option>
                                    <option value="">
                                        女
                                    </option>
                                </select>
                            </div>
                            <div>生日:

                            </div>
                            <div>邮箱:
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className='payment-manage'>

                    </div>
                    <div className='address-manage'>

                    </div>
                </div>
                <div className='clear'></div>
                <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(UserInfo);