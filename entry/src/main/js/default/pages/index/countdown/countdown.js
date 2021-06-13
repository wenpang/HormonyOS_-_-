import router from '@system.router';

export default {
    data: {
        second: 3,
        imagers: '/common/images/',
        showImg: true
    },
    onInit(){
        this.imagers = this.imagers + '3.jpg';
        setInterval(this.run,1000);
    },
    run(){
        if(parseInt(this.second) == 0){
            this.showImg = false;
            router.replace({
                uri:'pages/index/training/training',
                params:{
                    data1: this.data1,
                    data2: this.data2
                }
            });
        }
        this.second--;
        console.log(this.second);
        this.imagers = '/common/images/' + this.second.toString() + '.jpg';
        console.log(this.imagers);
    }
}
