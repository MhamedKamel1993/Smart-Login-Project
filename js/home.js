var UserName=localStorage.getItem('UserName');
console.log(UserName);
var user_name=document.getElementById('UserName');
var logoutBtn=document.getElementById('logoutBtn');
user_name.innerHTML=UserName;
logoutBtn.addEventListener('click',function(){
  localStorage.removeItem('UserName')
})