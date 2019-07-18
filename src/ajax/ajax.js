
import axios from "axios"

let param = new URLSearchParams()
        param.append('phone', '15350608251')
        
        axios({
            method: 'post',
            url: 'http://192.168.0.7:8080/user/sendCode',
            data: param
        })

          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });