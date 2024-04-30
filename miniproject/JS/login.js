/* 获取container */ 
const container = document.querySelector('#container');

const signInButton = document.querySelector('#signIn');

const signUpButton = document.querySelector('#signUp');

/* 点击增加事件 */
signUpButton.addEventListener('click',() => container.classList.add('right-panel-active'));
signInButton.addEventListener('click',() => container.classList.remove('right-panel-active'));

/* 登录表单输入的信息打印到控制台 */  
function login() {
  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;
  console.log(`用户名为: ${username}, 密码为: ${password}`);
}

/* 注册表单输入的信息打印到控制台 */  
function signUp() {
  const username = document.querySelector('#signup-username').value;
  const password = document.querySelector('#signup-password').value;
  const email = document.querySelector('#signup-email').value;
  const code = document.querySelector('#signup-code').value;
  console.log(`用户名为: ${username}, 密码为: ${password}, 邮箱为: ${email}, 验证码为: ${code}`);
} 

 

/* 登录时验证用户名和密码 */  
function validateLogin() {
  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;
  if (username === 'admin' && password === '123456') {
    console.log('登录成功');
    window.location.href = 'index.html';
    return true;
  } else {
    console.log('登录失败');
    return false;
  }
} 

/* 使用正则表达式验证登录时的用户名和密码是否合法 */  
function checkusernameandpassword() {
  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;

  const usernameRegex = /^[a-zA-Z0-9_-]{5,15}$/;
  const passwordRegex = /^[a-zA-Z0-9_-]{5,15}$/;
  if (usernameRegex.test(username) && passwordRegex.test(password)) {
    console.log('用户名和密码合法');
    return true;
  } else {
    console.log('用户名或密码不合法');
    return false;
  }
} 

/* 一个按钮绑定两个事件 */  
// const loginButton = document.querySelector('#login-btn');
// loginButton.addEventListener('click', () => {
//   if (login() && validateLogin()) {
//     login();
//   }
// }); 

var btn = document.getElementById("login-btn");
btn.addEventListener("click", login);
btn.addEventListener("click", validateLogin);