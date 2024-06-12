// homework.js
function print(){
    let div=document.getElementById("result");
    div.innerHTML=makeRandom();
}
function makeRandom(){
    var line2='';
    for(let i=1; i<=5; i++){  // 5줄 표현 위한 반복문
        var line1='';
        for(let j=1; j<=4; j++){  // 한 줄에 숫자 4개씩 표현 위한 반복문
            let ranNums=Math.floor(Math.random()*50+1);
            line1=line1+' '+ranNums;
            // div.innerHTML=div.innerHTML+' '+ranNums;
        }
        line2=line2+line1+'<br>';
        // div.innerHTML=div.innerHTML+line+'<br>';
    }
    return line2;
}
// window.onload=function(){  // 240612 hwanswer.html에서 <div src> 다음에 <script>를
// // 열었다면 이 항목이 없어도 되지만, 스크립트를 먼저 열었으므로 이 항목이 있어야만 한다.
//     let div=document.getElementById("result");
//     var line2='';
//     for(let i=1; i<=5; i++){  // 5줄 표현 위한 반복문
//         var line1='';
//         for(let j=1; j<=4; j++){  // 한 줄에 숫자 4개씩 표현 위한 반복문
//             let ranNums=Math.floor(Math.random()*50+1);
//             line1=line1+' '+ranNums;
//             // div.innerHTML=div.innerHTML+' '+ranNums;
//         }
//         line2=line2+line1+'<br>'
//         // div.innerHTML=div.innerHTML+line+'<br>';
//     }
//     div.innerHTML=line2;
// }
