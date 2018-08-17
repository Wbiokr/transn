<template>

	<footer class="foot">
		<div class="btmcont clearfix">
			<div class="btmlogo fl"><img src="./logo2.png" /></div>
			<div class="btmlist">
				<ul>
          <li v-for='(item,$i) in links' :key='$i'>
            <p>{{item.title}}</p>
            <a v-if='item.children.length>0' v-for='(unit,index) in item.children' :href='unit.path'>{{unit.name}}</a>
          </li>
				</ul>
			</div>
			<!-- <div class="msgbox">
				<a href="javascript:;"><img src="./msg.png" /></a>
			</div> -->
		</div>
		<div class="copyright">
			<p>Copyright © 2008-2017 iol8.com All Rights Reserved. 京ICP备08001822号-37 京公网安备110105014183 </p>
		</div>
	</footer>
</template>

<script>
export default {
  props:{
    links:{
      default(){
        return [
          {
            title:'Translation Service',
            children:[
              {name:'High-Quality Translation',path:'#/'},
              {name:'Fast Turnaround Time',path:'#/'},
              {name:'Save Up to 40%',path:'#/'},
            ]
          },
          {
            title:'Site Map',
            children:[
              {name:'Blog',path:'#/blog'},
              {name:'Jobs',path:'https://www.iol8.com/home.html'},
            ]
          },
          {
            title:'Contact',
            children:[
              {name:'iol_globaljob@transn.com',path:'mailto:iol_globaljob@transn.com'}
            ]
          }
        ]
      }
    }
  }
}
</script>


<style lang='scss' scoped>
.foot {
  background: #fff;
  width: 100%;
  padding-top: 3%;
}
.copyright {
  margin: 0 3%;
  border-top: 1px solid rgba(108, 108, 108, 0.3);
  box-sizing: border-box;
  text-align: center;
}
.copyright p {
  width: 100%;
  padding: 42px 0 55px;
  font-size: 12px;
  color: #9D9D9D;
  line-height: 20px;
}
.btmcont {
  padding: 0 7% 5%;
  width: 100%;
  box-sizing: border-box;
}
.btmlogo {
  width: 195px;
  height: 46px;
  overflow: hidden;
}
.btmlogo img {
  width: 100%;
  height: 100%;
}
// .msgbox {
//   position: fixed;
//   bottom: 8%;
//   right: 7%;
// }
.btmlist {
  padding-left: 30%;
}
.btmlist ul li {
  float: left;
  line-height: 28px;
  text-align: left;
  width: 30%;
  padding-left: 10%;
  box-sizing: border-box;
}
.btmlist ul li p {
  font-size: 16px;
  color: #333;
  margin-bottom: 50px;
}
.btmlist ul li a {
  display: block;
  font-size: 14px;
  color: #999;
  padding-bottom: 30px;
  &:hover{
    opacity: 0.6;
  }
}
@media (max-width: 1260px) {
  .btmlist ul li {
    width: 32%;
    padding-left: 5%;
  }
}
@media (min-width: 661px) and (max-width: 1000px) {
  .btmlist {
    float: left;
    padding: 20px 0 0;
    width: 100%;
  }
  .btmlist ul li {
    width: 32%;
    padding-left: 0;
  }
  .btmlist ul li p {
    margin-bottom: 20px;
  }
}
@media (max-width: 660px) {
  .btmlist {
    float: left;
    padding: 20px 0 0;
    width: 100%;
  }
  .btmlist ul li {
    float: left;
    width: 32%;
    padding: 0;
  }
  .btmlist ul li p {
    margin-bottom: 10px;
  }
  .btmlist ul li a {
    padding-bottom: 20px;
  }
}
@media (max-width: 580px) {
  .btmlist {
    float: left;
    padding: 20px 0 0;
    width: 100%;
  }
  .btmlist ul li {
    float: inherit;
    width: 100%;
    padding: 0;
  }
  .btmlist ul li p {
    margin-bottom: 10px;
  }
  .btmlist ul li a {
    padding-bottom: 20px;
  }
}

</style>

