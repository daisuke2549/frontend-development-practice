let score = 70;
console.log(score+20);


const  name = "suzuki";
console.log("hello " +name);



let number = [1,2,3,4];
console.log(number);

let index = 0;
while(index < number.length){
   index++;     //++ インクリメント
   console.log(index);
}


if(number.length > 3){
    console.log('イケイケ');
}else{
    console.log('ダメダメ');
}

function sum(a,b){
    return a-b;
}

console.log(sum(100,150));


const test = {
    color: 'pink',
    size: 'large',
    perfume: 'minto',
    testfunction: () => {
        console.log('hello world');
    }
};

console.log(window.innerWidth);