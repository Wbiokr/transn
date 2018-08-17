<template>

  <nav class="sq-navbar" :class='{" -open -inverse":isMenuToggled,home:isHome,ost:isOffset}'>
    <div class="sq-navbar-bg"></div>
    <div class="sq-navbar-fill" :class="{' -visible ':isMenuToggled}"></div>
    <!-- <div class="sq-navbar-circle" :class="{' -full ':isMenuToggled}"><span></span></div> -->
    <div class="sq-navbar-wrap">
      <button class="sq-navbar-toggle" @click="isMenuToggled=!isMenuToggled" :class='{" -active ":isMenuToggled}'>
        <span class="sq-navbar-toggle-item -top"></span>
        <span class="sq-navbar-toggle-item -bottom"></span>
      </button>
      <div class="sq-navbar-container">
        <div class="sq-navbar-grid">
          <div class="sq-navbar-grid-col">
            <a class="navbar-brand sq-navbar-logo yes_home" v-if='isHome&&!isOffset' href="#/index"><img src="./logo_home.png" /></a>
            <a class="navbar-brand sq-navbar-logo " v-else href="#/index"><img src="./logo.png" /></a>

          </div>
          <div class="sq-navbar-grid-col">
            <div class="sq-navbar-menu" :class='{" -visible ":isMenuToggled}'>
              <section v-if='isHome&&!isOffset'>
                <router-link class="sq-navbar-menu-item home" v-for='(item,index) in links' :to='item.path' :key='index'>
                  <span> {{item.name}}</span>
                  <div class='navbar-sub' v-if='item.children'>
                    <router-link class="clearfix"  v-for='(unit,$i) in item.children' :key='$i' :to='unit.path'>
                      <img :src="unit.icon" alt="">
                      <span>{{unit.name}}</span>
                    </router-link>
                  </div>
                </router-link>
              </section>
              <section v-else>
                <router-link tag='a' class="sq-navbar-menu-item " v-for='(item,index) in links' :to='item.path' :key='index'>
                  <span>{{item.name}}</span>
                  <div class='navbar-sub' v-if='item.children'>
                    <router-link class="clearfix"  v-for='(unit,$i) in item.children' :key='$i' :to='unit.path'>
                      <img :src="unit.icon" alt="">
                      <span>{{unit.name}}</span>
                    </router-link>
                  </div>
                </router-link>
              </section>
              <div class="sq-navbar-menu-action">
                <div class="sq-navbar-menu-action-item -md">
                  <a class="sq-btn sq-btn_nav" href="#/register">
                    <span class="sq-btn_nav-fill"></span>
                    <span>Register</span>
                  </a>
                </div>
              </div>
              <div class="sq-navbar-menu-action">
                <div class="sq-navbar-menu-action-item -sm">
                  <a class="sq-btn sq-btn_nav -painted" href="#/login">
                    <span class="sq-btn_nav-fill"></span>
                    <span>Sign in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="sq-navbar-grid-col">
            <div class="sq-navbar-action">
              <div class="sq-navbar-action-item">
                <a class="sq-btn sq-btn_nav" href="#/register">
                  <span class="sq-btn_nav-fill"></span>
                  <span>Register</span>
                </a>
              </div>
              <div class="sq-navbar-action-item -sm">
                <a class="sq-btn sq-btn_nav -painted" href="#/login">
                  <span class="sq-btn_nav-fill"></span>
                  <span>Sign in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
// import

export default {
  props: {
    links: {
      default() {
        return [
          { name: 'Home', path: '/index' },
          { name: 'Free Quote', path: '/quote' },
          {
            name: 'Resources',
            path: 'javascript:void(0);',
            children: [
              {
                name: 'Dashboard',
                path: '/blog',
                icon: require('./dashboard-h.png')
              },
              {
                name: 'Community',
                path: '/blog/detail/121',
                icon: require('./community-h.png')
              }
            ]
          }
        ]
      }
    }
  },
  data() {
    return {
      isHome: false,
      isOffset: false,
      isMenuToggled: false
    }
  },

  mounted() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (scrollTop > 150) {
        this.isOffset = true
      } else {
        this.isOffset = false
      }
    }
  },

  created() {
    this.isHome = this.$route.path === '/index' ? true : false
  },

  methods: {
    toggleMenu() {}
  },
  watch: {
    $route(to) {
      if (to.path === '/index') {
        this.isHome = true
      } else {
        this.isHome = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sq-navbar-menu-item {
  position: relative;
  &:hover{
    .navbar-sub{

      // padding: 10px;
      // height: auto;
      opacity:  1;
      visibility: visible;
    }

  }
  .navbar-sub {
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    // background: transparent;
    // box-shadow: none;
    // border-radius: inherit;
    padding: 10px;
    box-shadow: 2px 3px 10px 0 rgba(216,62,75,0.18);
    border-radius: 6px;
    
    width: calc(100% + 20px);
    cursor: auto;
    overflow: hidden;
    // height: 0;
    opacity: 0;
    visibility: hidden;
    transition:opacity  0.2s  ease!important;
    background: #fff;
    // padding:0  10px;
    // box-sizing: content-box;
    // transition: height ease 0.3s; 
    a {
      cursor: pointer;
      display: block;
      font-size: 18px;
      letter-spacing: 0.03px;
      // line-height: 33px;
      color: #999;
      height: auto;
      margin: 10px 0;
      text-align: center;
      font-size: 14px;
      >*{
        float: left;
      }
      &:hover{
        color:#EC5B74;
        img{
          filter: grayscale(0);
        }
      }
      img{
        height: 16px;
        widows: 18px;
        margin-right: 10px;
        filter: grayscale(100%)
      }
    }
  }
}

// .sq-navbar-menu-item .navbar-sub
// .sq-navbar-menu-item .navbar-sub a.dash {
//   margin-bottom: 0;
// }
// .sq-navbar-menu-item .navbar-sub a i {
//   display: none;
// }
</style>


<style lang='scss' scoped>
.router-link-active {
  color: #ec5b74 !important;
  img:filter(0) !important;
}

* {
  box-sizing: border-box;
  margin:0;
  padding:0;
  transform:all ease 0.3s;
}
img {
  vertical-align: middle;
}
.clearfix:after,
.clearfix:before {
  content: ' ';
  display: table;
}
.clearfix:after {
  clear: both;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #fff;
  color: #414d5b;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: normal;
  line-height: normal;
  overflow: hidden;
  overflow-y: auto;
}
button {
  outline: none;
}
.sq-navbar {
  background: transparent;
  // box-shadow: 0 3px 9px 0 rgba(0,0,0,0.10);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  will-change: transform;
  
  transition: 0.3s ease-out;
}
.sq-navbar-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
 
  transform: translateY(-60px);
 
  transform-origin: top center;
  background: #ec5b74;
  background-image: linear-gradient(-223deg, #fff4ed 0%, #ffe4ee 100%);
  background-repeat: no-repeat;
  will-change: transform;
 
  transition: 0.3s ease-out;
}
@media (min-width: 768px) {
  .sq-navbar-bg {
    height: 84px;
     transform: translateY(-84px);
  }
}
.sq-navbar-container {
  padding: 0 30px;
  height: 100%;
}
@media (min-width: 375px) {
  .sq-navbar-container {
    padding: 0 37px;
  }
}
@media (min-width: 768px) {
  .sq-navbar-container {
    padding: 0 57px 0 30px;
  }
}
@media (min-width: 1024px) {
  .sq-navbar-container {
    padding: 0 54px;
  }
}
@media (min-width: 1280px) {
  .sq-navbar-container {
    padding: 0 49px;
  }
}
@media (min-width: 1440px) {
  .sq-navbar-container {
    padding: 0 60px;
  }
}
.sq-navbar-wrap {
  padding: 28px 0;
  transition: 0.3s ease-out;
}
@media (min-width: 768px) {
  .sq-navbar-wrap {
    padding: 28px 0;
  }
}
.sq-navbar-grid {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sq-navbar-grid-col {
  display: flex;
  align-items: center;
}
.sq-navbar-logo {
  position: relative;
  z-index: 1002;
  display: block;
  max-width: 100px;
  transition: max-width 0.3s ease-in-out;
}
@media (min-width: 768px) {
  .sq-navbar-logo {
    max-width: 120px;
  }
}
@media (min-width: 1280px) {
  .sq-navbar-logo {
    max-width: 144px;
  }
}
.sq-navbar-logo img {
  width: 100%;
}
.sq-navbar-menu {
  display: block;
}
@media (max-width: 1023px) {
  .sq-navbar-menu {
    padding: 0;
    position: fixed;
    z-index: 1001;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
  }
}
@media (min-width: 1024px) {
  .sq-navbar-menu {
    padding: 0 0 0 150px;
  }
}
@media (min-width: 1280px) {
  .sq-navbar-menu {
    padding: 0 0 0 130px;
  }
}
@media (min-width: 1360px) {
  .sq-navbar-menu {
    padding: 0 0 0 280px;
  }
}
@media (min-width: 1700px) {
  .sq-navbar-menu {
    padding: 0 0 0 600px;
  }
}
.sq-navbar-menu-item {
  display: inline-block;
  margin: 0 0 25px 0;
  opacity: 0;
  font-size: 18px;
  letter-spacing: 0.02px;
  line-height: 24px;
  color: #333;
}
.sq-navbar-menu-item:hover {
  text-decoration: none;
  color: #ec5b74;
}
.sq-navbar-menu-item:hover span:after {
  transform: scaleX(1);
}
.sq-navbar-menu-item:active,
.sq-navbar-menu-item:focus {
  color: #fff;
  text-decoration: none;
}
@media (min-width: 375px) {
  .sq-navbar-menu-item {
    margin: 0 0 35px 0;
    font-size: 24px;
    letter-spacing: 0.03px;
    line-height: 33px;
  }
}
@media (min-width: 768px) {
  .sq-navbar-menu-item {
    margin: 0 0 50px 0;
  }
}
@media (min-width: 1024px) {
  .sq-navbar-menu-item {
    margin: 0;
    padding: 0 17px;
    font-size: 16px;
    letter-spacing: 0.02px;
    line-height: 19px;
    opacity: 1;
    color: #333;
  }
}
@media (min-width: 1280px) {
  .sq-navbar-menu-item {
    padding: 0 20px;
    font-size: 16px;
    letter-spacing: 0.02px;
    line-height: 22px;
  }
}
@media (min-width: 1360px) {
  .sq-navbar-menu-item {
    padding: 0 40px;
  }
}
@media (min-width: 1440px) {
  .sq-navbar-menu-item {
    padding: 0 40px;
  }
}
.sq-navbar-menu-item span {
  position: relative;
}
.sq-navbar-menu-item span:after {
  display: none;
  content: '';
  position: absolute;
  left: 50%;
  right: 0;
  bottom: -10px;
  width: 14px;
  height: 3px;
  transform: scaleX(0);
  transform-origin: center center;
  margin: 0 0 0 -7px;
  background: #4c55a6;
  transition: 0.3s;
}
@media (min-width: 375px) {
  .sq-navbar-menu-item span:after {
    width: 16px;
    margin: 0 0 0 -8px;
  }
}
@media (min-width: 1024px) {
  .sq-navbar-menu-item span:after {
    left: 0;
    width: 12px;
    margin: 0;
    transform-origin: left center;
    background: #fff;
  }
}
.sq-navbar-menu-item.-active span:after {
  transform: scaleX(1);
}
@media (min-width: 1024px) {
  .sq-navbar-menu-item.-active span:after {
    transform: scaleX(1);
  }
}
.sq-navbar-menu-action {
  opacity: 0;
}
.sq-navbar-menu-action-item {
  margin: 0 0 20px 0;
}

@media (min-width: 375px) {
  .sq-navbar-menu-action-item {
    margin: 0 0 30px 0;
  }
}
.sq-navbar-menu-action-item.-md {
  display: block;
}

@media (min-width: 1024px) {
  .sq-navbar-menu-action-item.-md {
    display: none;
  }
}
.sq-navbar-menu-action-item.-sm {
  display: block;
}

@media (min-width: 768px) {
  .sq-navbar-menu-action-item.-sm {
    display: none;
  }
}
@media (max-width: 1023px) {
  .sq-navbar-menu.-visible {
    opacity: 1;
    pointer-events: auto;
  }
}

.sq-navbar-menu.-visible .sq-navbar-menu-item {
  opacity: 1;
  animation: sq-navbar-menu-item 0.4s cubic-bezier(0.75, -0.5, 0, 1.75) both;
}

.sq-navbar-menu.-visible .sq-navbar-menu-item:focus,
.sq-navbar-menu.-visible .sq-navbar-menu-item:hover {
  color: #ec5b74;
}

.sq-navbar-menu.-visible .sq-navbar-menu-item:focus span:after,
.sq-navbar-menu.-visible .sq-navbar-menu-item:hover span:after {
  transform: scaleX(1);
}

@media (min-width: 1024px) {
  .sq-navbar-menu.-visible .sq-navbar-menu-item:focus span:after,
  .sq-navbar-menu.-visible .sq-navbar-menu-item:hover span:after {
   
    transform: scaleX(1);
  }
}

.sq-navbar-menu.-visible .sq-navbar-menu-item:nth-child(0) {
  
  animation-delay: 0s;
}

.sq-navbar-menu.-visible .sq-navbar-menu-item:nth-child(1) {
  
  animation-delay: 50ms;
}

.sq-navbar-menu.-visible .sq-navbar-menu-item:nth-child(2) {
  
  animation-delay: 0.1s;
}

.sq-navbar-menu.-visible .sq-navbar-menu-item:nth-child(3) {
  
  animation-delay: 0.15s;
}

.sq-navbar-menu.-visible .sq-navbar-menu-action {
  opacity: 1;
 
  animation: sq-navbar-menu-item 0.4s cubic-bezier(0.75, -0.5, 0, 1.75) both;
}

.sq-navbar-menu.-visible .sq-navbar-menu-action:nth-child(0) {
  
  animation-delay: 0s;
}

.sq-navbar-menu.-visible .sq-navbar-menu-action:nth-child(1) {
 
  animation-delay: 50ms;
}

.sq-navbar-menu.-visible .sq-navbar-menu-action:nth-child(2) {
  
  animation-delay: 0.1s;
}

.sq-navbar-menu.-visible .sq-navbar-menu-action:nth-child(3) {
  
  animation-delay: 0.15s;
}

.sq-navbar-action {
  height: 100%;
  padding: 0;
  position: relative;
  z-index: 1;
}

.sq-navbar-action-text {
  display: none;
  margin: 0 20px 0 0;
  color: rgba(65, 77, 91, 0.4);
}

@media (min-width: 768px) {
  .sq-navbar-action-text {
    display: inline-block;
  }
}

.sq-navbar-action-item {
  margin: 0 60px 0 0;
  display: none;
}

@media (min-width: 1024px) {
  .sq-navbar-action-item {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 0 20px;
  }
}

.sq-navbar-action-item.-sm {
  display: none;
}

@media (min-width: 768px) {
  .sq-navbar-action-item.-sm {
    display: inline-block;
    vertical-align: middle;
  }
}

.sq-navbar-toggle {
  display: block;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 23px;
  height: 23px;
  z-index: 1002;
  padding: 0;
  border: none;
  background: 0 0;
  
  transition: top 0.2s ease-out;
  cursor: pointer;
}

@media (min-width: 375px) {
  .sq-navbar-toggle {
    right: 40px;
  }
}

@media (min-width: 768px) {
  .sq-navbar-toggle {
    top: 38px;
    right: 30px;
  }
}

@media (min-width: 1024px) {
  .sq-navbar-toggle {
    display: none;
  }
}

.sq-navbar-toggle-item {
  display: block;
  width: 100%;
  height: 3px;
  margin: 0 0 5px 0;
  background: #ec5b74;
 
  border-radius: 50px;
  
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sq-navbar-toggle.-active {
  position: fixed;
}

.sq-navbar-toggle.-active .sq-navbar-toggle-item {
  background: #4c55a6;
}

.sq-navbar-toggle.-active .sq-navbar-toggle-item.-top {
  
  transform: translateY(6px) translateY(-50%) rotate(-135deg);
}

.sq-navbar-toggle.-active .sq-navbar-toggle-item.-bottom {
  
  transform: translateY(-5px) translateY(50%) rotate(135deg);
}

.sq-navbar-fill {
  opacity: 0;
  position: fixed;
  top: inherit;
  right: 0;
  left: 0;
  visibility: hidden;
  width: 100%;
  height: 100vh;
  z-index: 99;
  
  transform-origin: top center;
  background: #fff;
  overflow: hidden;
  pointer-events: none;
  
  transition: 0.2s ease-in-out;
  will-change: transform;
}

.sq-navbar-fill.-visible {
  position: -webkit-sticky;
  position: sticky;
  opacity: 1;
  visibility: visible;
  pointer-events: none;
}
.sq-navbar.-open.-down .sq-navbar-logo {
  position: fixed;
  top: 18px;
}
@media (min-width: 768px) {
  .sq-navbar.-open.-down .sq-navbar-logo {
    top: 26px;
  }
}
.sq-navbar.-open.-down .sq-navbar-action {
  height: auto;
  position: fixed;
  z-index: 9999;
}
@media (min-width: 768px) {
  .sq-navbar.-open.-down .sq-navbar-action {
    top: 22px;
    right: 57px;
  }
}
.sq-navbar.-open .sq-navbar-logo {
  position: fixed;
  top: 28px;
}
@media (min-width: 768px) {
  .sq-navbar.-open .sq-navbar-logo {
    top: 38px;
  }
}
.sq-navbar.-open .sq-navbar-action {
  height: auto;
  position: fixed;
  z-index: 9999;
}
@media (min-width: 768px) {
  .sq-navbar.-open .sq-navbar-action {
    top: 35px;
    right: 57px;
  }
}
@media (min-width: 1024px) {
  .sq-navbar.-inverse .sq-navbar-menu-item {
    color: #414d5b;
  }
  .sq-navbar.-inverse .sq-navbar-menu-item:active,
  .sq-navbar.-inverse .sq-navbar-menu-item:focus,
  .sq-navbar.-inverse .sq-navbar-menu-item:hover {
    color: #414d5b;
  }
}
.sq-navbar.-inverse .sq-navbar-menu-item span {
  position: relative;
}
@media (min-width: 1024px) {
  .sq-navbar.-inverse .sq-navbar-menu-item span:after {
    background: #ec5b74;
  }
}
.sq-navbar.-inverse .sq-navbar-toggle-item {
  background: #ec5b74;
}
.sq-navbar.-down {
 
  transition: 0.3s ease-out;
}
.sq-navbar.-down .sq-navbar-bg {
  
  transform: translateY(0);
  
  transition: 0.3s ease-out;
}
.sq-navbar.-down .sq-navbar-toggle {
  top: 22px;
}
@media (min-width: 768px) {
  .sq-navbar.-down .sq-navbar-toggle {
    top: 33px;
  }
}
.sq-navbar.-down .sq-navbar-wrap {
  padding: 18px 0 0 0;
  opacity: 1;
  
  transition: 0.3s ease-out;
}
@media (min-width: 768px) {
  .sq-navbar.-down .sq-navbar-wrap {
    padding: 22px 0 0 0;
  }
}
.sq-navbar.-down .sq-navbar-circle {
  top: 22px;
}
@media (min-width: 768px) {
  .sq-navbar.-down .sq-navbar-circle {
    top: 33px;
  }
}
.sq-navbar.-up {
  
  transform: translateY(-60px);
  
  transition: 0.3s ease-out;
}
@media (min-width: 768px) {
  .sq-navbar.-up {
   
    transform: translateY(-84px);
  }
}
.sq-navbar.-up .sq-navbar-bg {
  
  transition: 1s ease-out;
}
.sq-navbar.-up .sq-navbar-wrap {
  opacity: 0;
 
  transition: 0.3s ease-out;
}
.sq-navbar.-notfixed {
  position: absolute;
}
@-webkit-keyframes sq-navbar-menu-item {
  from {
    opacity: 0;
    
    transform: translateX(50px);
  }
  to {
    opacity: 1;
   
    transform: translateX(0);
  }
}
@-moz-keyframes sq-navbar-menu-item {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
   
    transform: translateX(0);
  }
}
@-o-keyframes sq-navbar-menu-item {
  from {
    opacity: 0;
   
    transform: translateX(50px);
  }
  to {
    opacity: 1;
   
    transform: translateX(0);
  }
}
@keyframes sq-navbar-menu-item {
  from {
    opacity: 0;
    
    transform: translateX(50px);
  }
  to {
    opacity: 1;
   
    transform: translateX(0);
  }
}
.sq-btn_nav {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 40px;
  background: 0 0;
  border: none;
  outline: 0;
  letter-spacing: 0.02px;
  line-height: 38px;
  text-align: center;
  color: #ec5b74;
 
  transition: 0.3s, -webkit-transform 0.2s;
 
  transition: 0.3s, transform 0.2s;
  transition: 0.3s, transform 0.2s, -webkit-transform 0.2s, -moz-transform 0.2s,
    -o-transform 0.2s;
}
.sq-btn_nav:hover .sq-btn_nav-fill {
  
  transform: scale(1.08);
}
.sq-btn_nav:focus,
.sq-btn_nav:hover {
  color: #ec5b74;
  text-decoration: none;
}
.sq-btn_nav-fill {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: 0 0;
  outline: 0;
  
  transition: 0.25s cubic-bezier(0.25, 0.25, 0.5, 1.9);
  background: #ffffff;
  box-shadow: 2px 3px 10px 0 rgba(216, 62, 75, 0.18);
  
  border-radius: 50px;
}
.sq-btn_nav.-inverse {
  color: #414d5b;
}
.sq-btn_nav.-inverse:focus,
.sq-btn_nav.-inverse:hover {
  color: #414d5b;
  text-decoration: none;
}

.sq-btn_nav.-inverse .sq-btn_nav-fill {
  border: 1px solid #dedede;
}
.sq-btn_nav.-painted {
  color: #fff;
}
.sq-btn_nav.-painted:focus,
.sq-btn_nav.-painted:hover {
  color: #fff;
  text-decoration: none;
}
.sq-btn_nav.-painted .sq-btn_nav-fill {
  background-image: linear-gradient(-49deg, #fd76a6 0%, #ffdca2 100%);
  box-shadow: 2px 3px 10px 0 rgba(216, 62, 75, 0.18);
  border-radius: 50px;
}
.sq-btn_nav.-painted.-inverse {
  color: #fff;
}
.sq-btn_nav.-painted.-inverse:focus,
.sq-btn_nav.-painted.-inverse:hover {
  color: #fff;
  text-decoration: none;
}
.sq-btn_nav.-painted.-inverse .sq-btn_nav-fill {
  background: #4c55a6;
  border: none;
}
.sq-btn_nav.-lg {
  width: 114px;
}
.sq-btn_nav.-md {
  width: 153px;
  height: 54px;
  line-height: 54px;
}
.sq-btn_nav.-xl {
  width: 172px;
  height: 52px;
}
.sq-btn_nav.-xxl {
  width: 204px;
  height: 54px;
}
.sq-btn_nav.-transparent {
  background: 0 0;
  border: none;
  color: #414d5b;
  
  transition: color 0.2s;
}
.sq-btn_nav.-transparent:hover {
  color: rgba(65, 77, 91, 0.7);
}

.sq-navbar.ost {
  background: #fff;
  box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.4);
}
.sq-navbar-menu-item {
  transition: all ease 0.2s;
}
.sq-navbar-menu-item.home {
  color: #fff;
  transition: none;
  &:hover {
    color: #ec5b74;
  }
}
</style>
