export const checkUsername = (v) => {
  if (v.length == 0 || v == undefined || v.exec(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/)) {
    this.$toast({ msg: '输入的用户名无效' })
    return false;
  }

}

export const checkPassword = (p) => {
  if (!p.exec(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{8,16}$/)) {
    this.$toast({ msg: "密码长度应为8~16位，数字+字母组合" })
    return false;
  }
}

export const checkActor = (a) => {
  if (a == undefined) {
    this.$toast({ msg: '未选择身份' })
    return false;
  }
}