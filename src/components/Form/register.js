import { checkUsername, checkPassword, checkActor } from './check'


export default (params) => {
  const { username, password, actor, cb } = params;
  checkUsername(username);
  checkPassword(password);
  checkActor(actor);

  this.$axios({
    method: 'post',
    url: '/register',
    data: {
      username, password, actor
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)

      cb && cb(res)

    })
    .catch(err => {
      console.log(err)
    })
}