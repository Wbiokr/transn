import ToastTemplate from './Toast.vue';

const Toast={};

Toast.lock=false;

Toast.install=($)=>{

  if(Toast.lock){return ;}

  Toast.lock=true;
  

  const ToastConstructor=$.extend(ToastTemplate);

  const MyToast=new ToastConstructor();

  MyToast.$mount(document.createElement('div'));

  document.body.appendChild(MyToast.$el);

  $.prototype.$toast=({
    msg,
    time=3000,
    type='middle',
  })=>{
    MyToast.toastTxt=msg;
    MyToast.toastShow=true;
    MyToast.type=type;

    setTimeout(()=>{
      MyToast.toastShow=false;
      Toast.lock=false;
    
    },time)
  }
};

export default Toast ;