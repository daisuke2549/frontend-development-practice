
for(var i = 0; i <100000000000; i++){
    if(i === 4){
    continue;
   }
   console.log(i);
}

function sayHello(){
    console.log("hello");
}

sayHello();


function cal(x,y){
    return x/y;
};


var result = cal(9, 3);
console.log(result);


// クラス
// データ= プロパティ(クラスの中にある)
// メソッド = 処理をまとめたもの(クラス内で定義されている)

//クラス名の先頭は大文字
class Student {
   constructor(gender){
      this.gender = gender;
   }
   avg(math, english){    //メソッド名を記述 引数も記載
       console.log((math+english)/2);
   }
}

var a001  = new Student("male");

console.log(a001.gender);


var a002 = new Student("female");
console.log(a002.gender);
