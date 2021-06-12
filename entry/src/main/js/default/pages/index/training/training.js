import router from '@system.router';

var picker1seconds = null;
var timer1 = null;



export default {
    data: {
        title: '再坚持',
        seconds: 0,
        isShow: true
    },
    onInit() {
        console.log('训练页面 onInit 正在被调用');
        console.log(this.data1);
        console.log(this.data2);
        this.seconds = (parseInt(this.data1) ? this.data1:0) * 60;
    },
    clickAction() {
        clearInterval(timer1);
        timer1 = null;

        router.replace({
            uri: 'pages/index/index'
        })
    },
    rul() {
        this.seconds--;
        if(this.seconds == 0){
            clearInterval(timer1);
            timer1 = null;
            this.isShow = false;
        }
    },
    onReady() {
        console.log('训练页面 onReady 正在被调用');
    },
    onShow() {
        console.log('训练页面 onShow 正在被调用');
        if(this.seconds != 0) {
            timer1 = setInterval(this.rul, 1000);
        }
    },
    onDestroy() {
        console.log('训练页面 onDestory 正在被调用');
    }
}
