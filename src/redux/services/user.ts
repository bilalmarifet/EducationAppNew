import { AsyncStorage } from "react-native";
import axios from 'axios'
import {EDU_API_LOGIN } from '../../constants'


export function fetchImageService(page?: number, limit?: number) {
  return new Promise((resolve, reject) => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then(res => {
        return res.json();
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}


export function controlUsername(username: string) {
return new Promise((resolve,reject) => {
  //control username if its exist 

});
}




export function loginUserService(username: string, password: string) {

  console.log(username+password)

//   fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });



  return axios.post(EDU_API_LOGIN, {
    username: username,
    password: password
  })
  .then((response) =>{
  if(response.data.isSuccess){
    console.log(response.data.result.token)
  }

  })
  .catch((err) => {
 console.error(err);
  });

  // return new Promise((resolve, reject) => {
  //   let userToken = `${username}${password}`;
  //   AsyncStorage.setItem("userToken", userToken)
  //     .then(() => {
  //       resolve(userToken);
  //     })
  //     .catch(error => {
  //       reject(error);
  //     });
  // });
}

export function logoutUserService() {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem("userToken")
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}
