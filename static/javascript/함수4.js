// 함수4.js

// 브라우저에 모두 표시되면 발생하는 이벤트 onload
window.onload=function calc(){
    document.getElementById("calc").addEventListener('click',function(){
        var a=Number(document.getElementById("kor").value);
        var b=Number(document.getElementById("mat").value);
        var c=Number(document.getElementById("eng").value);
        var d=Number(document.getElementById("his").value);
        총점계산(a,b,c,d);
    });
}
function 총점계산 (a, b, c, d) {  // 총점 계산만 하는 함수
    var total=a+b+c+d;
    평균계산 (total);
}
function 평균계산 (total) {  // 평균 계산만 하는 함수
    var avg=total/4;
    출력 (total, avg);
}
function 출력 (total, avg) {  // 총점과 평균을 화면에 출력하는 함수
    document.getElementById("total").innerHTML=`총점 : ${total}`;
    document.getElementById("avg").innerHTML=`평균 : ${avg}`;
}
