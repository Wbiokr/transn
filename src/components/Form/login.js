import { checkUsername } from './check'

export default (params) => {
  const { username, password,cb,sus,err } = params;
  checkUsername(username);

  (function(){
    if(!password){
      // this.$toast({msg:'密码不能为空'});
      cb&&cb()
      return false;
    }
  })()

  this.$axios({
    method:'post',
    url:'/login',
    data:{
      username,password
    }
  }).then(res=>res.json())
  .then(res=>{
    // console.log(res)
    sus&&sus(res)
  })
  .catch(err=>{
    err&&err(err)
  })
}