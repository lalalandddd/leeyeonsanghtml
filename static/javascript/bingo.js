// bingo.js
// 전역변수 : bingo 게임 내내 사용할 함수
let endCount=0;  // 완성 빙고 갯수
let playMin=0;  // 게임 진행 시간(분)
let playSec=0;  // 게임 진행 시간(초)
let time=0;  // setInterval 코드를 사용하기 위한 값
let bingo=[];  // bingo 를 빈 배열로 선언

$(function(){  // 빙고 시작 버튼 클릭 이벤트 (브라우저에 모두 표시되면 실행되는 함수)
    $("#start").click(start);
    var tdClick=document.getElementsByClassName("num");
    for(var i=0; i<tdClick.length; i++){
    // for(var i in tdClick){  // 배열일 때만 사용할 수 있는 for 반복문. Element면 되지만 querySelectorAll면 안된다.
    //     tdClick[i].addEventListener('click',function(){  // 아래 td와는 또 다르다...
    //         alert("클릭");
    //     });
    }  // 여기까지가 자바스크립트로 만들 때이고... 아래 답안은 jquery를 사용할 때
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
    }, 1000 );  // 밀리세컨드 단위이므로 1000을 잡아야 1초마다 작동한다.
}
function bingoCheck(){  // 빙고칸을 클릭하면 실행할 내용
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
    var row=0;
    var col=0;
    var dia1=0;
    var dia2=0;
    var end=0;
    for(var i=0; i<5; i++){
        for(var k=0; k<5; k++){
            if(bingo[i*5+k]==0) row++;
            if(bingo[k*5+i]==0) col++;
        }
        if(bingo[i*6]==0) dia1++;  // 0,6,12,18,24
        if(bingo[i*4+4]==0) dia2++;  // 4,8,12,16,20
        if(row==5) end++;
        if(col==5) end++;
        row=0;
        col=0;
    }
    if(dia1==5) end++;
    if(dia2==5) end++;
    dia1=0;
    dia2=0;
    endCount=end;
    $("#ok").text(endCount);
    if(endCount==5){
        alert("빙고 완성!!");
        endGame();
    }else if(endCount>5){
        alert("게임 오버!!");
        endGame();
    }
}
function endGame(){
    $(".num").off();  // class num의 모든 이벤트를 off. off('click')이면 모든 클릭 이벤트만 제거
    clearInterval(time);  // 플레이 타임 멈추기(특정 setInterval 종료)
}
function init(){  // 25개 숫자 배열에 저장
    while(bingo.length!=25){
        var b=Math.floor(Math.random()*100+1);
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
