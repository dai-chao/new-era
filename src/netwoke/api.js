const LOCAL='http://192.168.0.7:8080';
const API= {
    addPwdAndAnswers: LOCAL + '/user/addPwdAndAnswers',
    findQuestion: LOCAL + '/user/findQuestion',
    getUserInfo: LOCAL + '/user/getUserInfo',
    login: LOCAL + '/user/login',
    selectAll: LOCAL + '/user/selectAll',
    sendCode: LOCAL + '/user/sendCode'
}
export default API;