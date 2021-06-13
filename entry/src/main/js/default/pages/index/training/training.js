import router from '@system.router';


var picker1seconds = null;
var picker2seconds = null;
var picker3seconds = 0; //default

var timer1 = null;
var timer2 = null;
var timer3 = null;
var counter = 0;


export default {
    data: {
        title: '再坚持',
        seconds: 0,
        isShow: false,
        isShow2: true,
        breath: '呼气',
        percent: 100,
        duration: '',
        count: ''
    },
    onInit() {
        console.log('训练页面 onInit 正在被调用');
        console.log(this.data1);
        console.log(this.data2);
        picker1seconds = parseInt(this.data1);
        picker2seconds = this.data2;
        this.seconds = (picker1seconds ? picker1seconds:0) * 60;
        this.duration = picker1seconds + 's';
        switch(picker2seconds){
                case '较慢':
                    picker3seconds = 6;
                    break;
                case '舒缓':
                    picker3seconds = 4;
                    break;
                case '较快':
                    picker3seconds = 2;
                    break;
        };
        this.count = (this.seconds/picker3seconds).toString();
    },
    clickAction() {
        clearInterval(timer1);
        timer1 = null;
        clearInterval(timer2);
        timer2 = null;
        clearInterval(timer3);
        timer3 = null;
        router.replace({
            uri: 'pages/index/index'
        })
    },
    rul() {
        this.seconds--;
        if(this.seconds == 0){
            this.isShow = false;
            this.isShow2 = true;
            clearInterval(timer1);
            timer1 = null;
        }
    },
    rul2(){
        counter++;
        if(counter == this.seconds/picker3seconds){
            clearInterval(timer2);
            timer2 = null;
            this.breath = '已完成';
            this.percent = 100;
        }else{
            if (this.breath == '呼气'){
                this.breath = '吸气';
            }else if(this.breath == '吸气'){
                this.breath = '呼气';
            }
        }
    },
    rul3(){
        this.percent = parseInt(this.percent) + 1;
        if(this.percent == 100){
            clearInterval(timer3);
            timer3 = null;
        }else{
            this.percent = this.percent.toString();
        }
    },
    onReady() {
        console.log('训练页面 onReady 正在被调用');
    },
    onShow() {
        console.log('训练页面 onShow 正在被调用');
        if(this.seconds != 0) {
            this.isShow = true;
            this.isShow2 = false;
            this.percent = 0;
            timer1 = setInterval(this.rul, 1000);
            timer2 = setInterval(this.rul2, picker3seconds * 1000);
            timer3 = setInterval(this.rul3, (this.seconds/100) * 1000);
        }
    },
    onDestroy() {
        console.log('训练页面 onDestory 正在被调用');
    }
}
