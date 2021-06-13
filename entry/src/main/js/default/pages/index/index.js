import router from '@system.router';

var picker1value = 2;
var picker2value = '舒缓';


export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker2range: ["较慢", "舒缓", "较快"]
    },
    clickAction() {
        router.replace({
            uri: 'pages/index/countdown/countdown',
            params: {
                data1: picker1value,
                data2: picker2value
            }
        })
    },
    onInit() {
        console.log('主页面 onInit 正在被调用');
    },
    onReady() {
        console.log('主页面 onReady 正在被调用');
    },
    onShow() {
        console.log('主页面 onShow 正在被调用');
    },
    onDestroy() {
        console.log('主页面 onDestory 正在被调用');
    },
    changeAction1(pv) {
        console.log('左边的选中项 : ' + pv.newValue);
        picker1value = pv.newValue;
    },
    changeAction2(pv) {
        console.log('右边的选中项 : ' + pv.newValue);
        picker2value = pv.newValue;
    }
}
