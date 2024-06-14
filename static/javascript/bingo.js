// bingo.js
// 전역변수 : bingo 게임 내내 사용할 함수
let endCount=0;  // 완성 빙고 갯수
let playMin=0;  // 게임 진행 시간(분)
let playSec=0;  // 게임 진행 시간(초)
let time=0;  // setInterval 코드를 사용하기 위한 값
let bingo=[];  // bingo 를 빈 배열로 선언
let timeInt=1000;  // 밀리세컨드 단위이므로 1000을 잡아야 1초마다 작동한다.
let bCount=[b01,b02,b03,b04,b05,b06,b07,b08,b09,b10,b11,b12];
let b01=[0,1,2,3,4];
let b02=[5,6,7,8,9];
let b03=[10,11,12,13,14];
let b04=[15,16,17,18,19];
let b05=[20,21,22,23,24];
let b06=[0,5,10,15,20];
let b07=[1,6,11,16,21];
let b08=[2,7,12,17,22];
let b09=[3,8,13,18,23];
let b10=[4,9,14,19,24];
let b11=[0,6,12,18,24];
let b12=[4,8,12,16,20];

$(function(){  // 빙고 시작 버튼 클릭 이벤트 (브라우저에 모두 표시되면 실행되는 함수)
    $("#start").click(start);
    var tdClick=document.getElementsByClassName("num");
    // for(var i=0; i<tdClick.length; i++){
    // for(var i in tdClick){  // 배열일 때만 사용할 수 있는 for 반복문. Element면 되지만 querySelectorAll면 안된다.
    //     tdClick[i].addEventListener('click',function(){  // 아래 td와는 또 다르다...
    //         alert("클릭");
    //     });
    // }  // 여기까지가 자바스크립트로 만들 때이고... 아래 답안은 jquery를 사용할 때
});
function start(){  // 빙고 게임을 위한 숫자 배치, 빙고 시작 버튼 감추기, 빙고 진행 상황 보이기
    // $("#start").hide();
    init();  // 25개 숫자 배열에 저장하기
    draw();  // 화면에 출력하기
    $(".num").click(bingoCheck);  // 숫자가 표시된 td를 클릭하면 빙고체크를 실행
    $(this).hide();  // this는 현재 함수를 실행한 객체 = 펑션 start 이므로 this = start
    $("#screen").show();
    $("#ok").text(endCount);
    $("#playTime").text('00:00');  // 이걸 안해놓으면 시작을 누르고 1초 후에 시작된다.
    time=setInterval(function(){
        playSec++;
        if(playSec==60){
            playMin++;
            playSec=0;
        }
        var secText=playSec<=9?'0'+playSec:playSec;
        var minText=playMin<=9?'0'+playMin:playMin;
        var timeText=`${minText}:${secText}`;
        $("#playTime").text(timeText);
    }, timeInt );  // 밀리세컨드 단위이므로 1000을 잡아야 1초마다 작동한다.
}
function bingoCheck(){  // 클릭한 빙고칸 안에서 실행할 내용
    // jquery에서 css 넣는 방법: .css('속성','값');
    var idx=$(".num").index(this);  // 클릭한 이거(td)가 몇번째 인덱스인가?
    bingo[idx]=0;  // 해당 td 위치와 같은 bingo 배열을 0으로 변경
    $(this).text("○");  // 클릭한 이거(td)의 숫자를 ○로 변경
    $(this).css('background','black');  // 클릭한 이거(td)의 배경색 변경
    $(this).css('color','white');  // 클릭한 이거(td)의 글자색 변경
    // 클릭한 td에 표시된 숫자를 배열에서 0으로 변경
    // 즉 0이 저장된 곳은 클릭한 숫자이다.
    // (과제) 가로 세로 대각선 빙고 몇줄인지 확인하기
    // (과제) 빙고가 5가 완성되면 게임 끝나게 하기
    for(var c1=0; c1<bCount.length; c1++){
        for(var c2=0; c2<5; c2++){
            if(c1[bCount[c1]]){}
        }
    }
}
function endCount(){  // 빙고가 맞으면 수행
    endCount++;  // 빙고 갯수 +1
    if(endCount===5){  // 빙고가 5개가 됐다면?
        timeInt=0;  // 시간 흐름 멈추기
        $("#ok").text("빙고!");
    }
}
function init(){  // 25개 숫자 배열에 저장
    while(bingo.length!=25){
        var b=Math.floor(Math.random()*50+1);
        if(bingo.indexOf(b)==-1){
            bingo.push(b);
        }
    }
}
function draw(){  // 배열의 값 25개 테이블(td)에 출력
    var td=$(".num");
    for(i=0;i<td.length;i++){
        td.eq(i).text(bingo[i]);  // 배열의 차이로 td[]가 아니라 td.eq() 로 넣어야만 숫자가 나온다. ??
    }
}