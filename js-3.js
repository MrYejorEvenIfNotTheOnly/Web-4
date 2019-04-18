var a=[];

for(var i=1;i<=5;i++){
    a[i]=[]; 
}
for(var i=1;i<=5;i++){
    for(var j=1;j<=8;j++){
        a[i][j]=prompt("Введите очередной элемент массива",'');
    }
}
var k1=0;
var k2=0;
var a1=[];
var a2=[];
for(var i=1;i<=5;i++){
    for(var j=1;j<=8;j++){
        if (a[i][j]<0) {a2[k2]=a[i][j];k2++}
        else {a1[k1]=a[i][j];k1++}
    }
}
for(i=0;i<k1;i++){
    console.log(a1[i]);
}
console.log('');
for(i=0;i<k2;i++){
    console.log(a2[i]);
}