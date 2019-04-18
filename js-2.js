var sum=0;
var a=[];
a[0]=1;
a[1]=1;
sum=2;
var i=2;
while(i<12) {
a[i]=a[i-1]+a[i-2];
sum+=a[i];
i++
}
sum=sum/12;
console.log("Среднее арифметическое первых 12 членов ряда Фибоначчи = "+sum);
