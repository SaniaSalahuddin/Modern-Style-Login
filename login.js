const container=document.getElementById('container');
const registerBtn=document.getElementById('register');
const loginBtn=document.getElementById('login');
registerBtn.addEventListener("click",()=>{
    container.classList.add('active');
    console.log('hy');
});
loginBtn.addEventListener("click",()=>{
    container.classList.remove('active');
    console.log('hello');
})