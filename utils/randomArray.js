
// 从一个数组中随机选取0-num个随机值
function randomArray(arr,num){
    // 随机选取n(0-num)个
    const n = parseInt(Math.random()*(num+1));
    // 如果n=0,结束
    if(n === 0){
        return null;
    }
   
    let numArr = []; // 新建数组，暂存取出来的下标
    const len = arr.length;//参数数组的长度
    // 无限循环，达到条件退出
    while(true){
        // 从参数数组长度选取下标
        const a = Math.ceil(Math.random()*len) - 1;
        // 如果新建的数组里面含有随机的下标，continue
        if(numArr.indexOf(a)=== -1){
            numArr.push(a);
        }else{
           continue; 
        }
        // 新建数组达到长度，退出循环
        if(numArr.length >= n){
            break;
        }
    }
    let Arr = [];
    for(let i = 0; i < numArr.length; i++){
        Arr.push(arr[numArr[i]]);
    }
    return Arr;
}

module.exports = randomArray;