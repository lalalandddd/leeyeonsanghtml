// rps.js
const com=["scissors.png","rock.png","paper.png"];
let record=[];  // 전적 저장용 배열 선언
let comHd=0;  // 컴퓨터 이미지 보이기 위한 setInterval값 (가위바위보가 계속 회전)
let comSelect=0;  // 컴퓨터 가위바위보 값
$(function(){  // window.onload 브라우저 화면 표시 완료 후
    // 전적 배열 초기화 세팅
    let storageData=JSON.parse(localStorage.getItem("record"));  // 문자를 다시 원래 데이터로 바꿔줘야 함
    if(storageData){  // 저장값이 있냐?
        record=storageData;
    }else{
        record=[new Array(), new Array(), new Array()];  // 컴, 유저, 결과
    }
    console.log(record);
    $("#comImg").attr('src', '/static/image/'+com[0]);
    $("#game").click(startAndStop);
    $("#record").click(gameRecord);
});
function startAndStop(){
    // $(this)===$("#game");
    if($(this).text()==='종료'){  // 가위바위보 진행 중
        $(this).text("시작");
        clearInterval(comHd);  // 컴퓨터 이미지 변경되는 인터벌 종료
        $(".userImg").off('click');  // 인터벌 종료 시 유저 클릭 이벤트 해제
    }else{  // 가위바위보 시작 전
        $(this).text("종료");
        comStart();
        $(".userImg").click(userSelect);  // 유저가 가위바위보 클릭!
    }
}
function comStart(){
    comHd=setInterval(function(){
        if(comSelect==2)comSelect=-1;
        $("#comImg").attr('src','../static/image/'+com[++comSelect]);
        // $("#comImg").attr('src','../static/image/'+com[(++comSelect)%3]);
    }, 100);
}
function userSelect(){
    var idx=$(".userImg").index($(this));  // 내가 클릭한 가위바위보 찾기
    // userImg 클래스를 배열로 가져오고 그 중에서 몇번째 인덱스 클릭? 확인
    $(this).css('border','5px solid blue');  // 내가 클릭한 가위바위보 이미지 표시
    clearInterval(comHd);  // 컴퓨터의 이미지 변경 멈추기(clearInterval)
    // alert("com : "+comSelect%3+" user : "+idx);
    outcome(comSelect,idx);  // 결과 띄우기 (승/무/패) 및 전적 저장
    //
    setTimeout(function(){
        comStart();  // 다시 컴퓨터 가위바위보 이미지 변경되도록 실행
        $(".userImg").eq(idx).css('border','');  // 클릭한 가위바위보 이미지 표시 해제
    // $(userImg).removeAttr('style'); 이렇게 하면 모든 스타일이 날아가버린다.
    $(".result").remove();
    }, 2000);
}
function outcome(c,u){  // u는 유저, c는 컴퓨터 가위바위보 결과 확인
    // 0=가위 1=바위 2=보
    var result="승";
    var minus=u-c;  // -2,1 유저승 0 비김 -1,2 유저패
    switch(minus){
        case 0: result="무"; break;
        case -1:
        case 2: result="패"; break;
    }
    // 유저와 컴퓨터 가위바위보 비교해서 승무패 출력되게 하세요
    record[0].push(com[c]);  // 컴퓨터 가위바위보 저장
    record[1].push(com[u]);  // 유저 가위바위보 저장
    record[2].push(result);  // 가위바위보 결과 저장
    localSave();  // 컴퓨터 브라우저에 저장하기 - 브라우저 검색기록을 날려야 지워짐
    $("body").append(`<div class="result">${result}</div>`);
}
function localSave(){
    // JSON.stringify()  // JSON이라는 문자열로 변환시켜준다.
    // 숫자 → 문자열
    let recordJSON=JSON.stringify(record);
    localStorage.setItem("record",recordJSON);
    // localStorage.setItem("like","banana");
}
function gameRecord(){
    $("#modal").show();  // 결과 창 보이기 > 근데 그냥 하면 중복으로 늘어나네?
    $("#data").empty();  // 데이터 칸을 비워주겠다... > 중복으로 나오지 않는다.
    for(var i=0;i<record[0].length;i++){
        $("#data").append(`<tr>
                <td class="com"><img src="../static/image/${record[0][i]}"></td>
                <td class="user"><img src="../static/image/${record[1][i]}"></td>
                <td>${record[2][i]}</td>
            </tr>`);  // html이나 text면 덮어써버림, 추가해야 함
        // for(var j=0;j)
    }
    $("#modalBackground").click(function(){
        $("#modal").hide();  // 결과 창 숨기기
    });
    // clearInterval(comHd);  // 컴퓨터의 이미지 변경 멈추기(clearInterval)
    // $("body").append(`<div class="record">${record[0]}승, ${record[1]}무, ${record[2]}패</div>`);
    // setTimeout(function(){
    //     // comStart();  // 다시 컴퓨터 가위바위보 이미지 변경되도록 실행
    // $(".record").remove();
    // }, 3000);
}