<template>
  <form>
    <div>
      <input type="text" :placeholder="username" name='username' />
      <span>{{uernameError}}</span>
    </div>
    <div>
      <input type="password" :placeholder="password" name='password' />
      <span>{{passwordError}}</span>
    </div>
    <div>
      <input type="button" :value='submit' />
    </div>
  </form>
</template>
