function GetRandomInt(min,max){
    var result=Math.floor(Math.random()*(max-min))+min;
    return result;
}

function GetArray(n){
    var result=[];
    for(var i=0;i<=n;i++){
        result[i]=GetRandomInt(1,10);
    }
    return result;
}


function GetResultArray(a){
    var result=[];
    var dop
    result=a;
    for(var i=0;i<result.length;i++){
        for(var j=0;j<result.length;j++){
            if (result[i]>=result[j]) {dop=result[i];result[i]=result[j];result[j]=dop}
        }
    }
    return result;
}

n=prompt("Введите размерность будущего массива");
var a=GetArray(n*n);
a=GetResultArray(a);
for(var i=0;i<n*n;i++){
    console.log(a[i]);
}
var mas=[];
for(var i=1;i<=n;i++){
    mas[i]=[];
}
k=0;
for(var j=1;j<=n;j++){
    for(i=1;i<=n;i++){
        if (j%2==1){mas[i][j]=a[k];k++;}
            else {mas[n-i+1][j]=a[k];k++;}
    }
}
var html='<table class="table table-striped">';
for(i=1;i<=n;i++){
    html+='<tr>';
    for(j=1;j<=n;j++){
        html+='<td>' + mas[i][j] + '</td>';
    }
    html+='</tr>';
}
html+= '</table>';
document.getElementById('table').innerHTML=html;