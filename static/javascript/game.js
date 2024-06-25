// game.js
let clickStop=true;
function imgClick(){
    if(!clickStop)return;
    var clickImg=$(".item").index($(this));
    // 클릭한 이미지 화면에 표시
    // $(".item").eq(clickImg).find("img").removeClass("hide");  // 너무 기니까 아래 두줄로
    var idx=$(".item").index($(this));  // 몇번째 div 클릭했나? 인덱스
    var $clickImg=$(".item").eq(idx).find("img");  // 클릭한 div의 img 태그
    $clickImg.removeClass("hide");
    $clickImg.addClass("select");
    // 현재 화면에 클릭해서 보이는 이미지는 imgPlace 배열의 값이 인덱스이고
    // imgName 배열의 인덱스 위치 이미지가 보이는 것이다.
    // imgPlace[1]에 3이 있다 > imgName[3]의 이미지가 보인다.
    // selectImg에 클릭한 이미지의 인덱스와 div 태그의 인덱스 저장
    if(selectImg.length==1){
        if(selectImg[0].div==idx) return;  //같은 이미지를 또 클릭하면 그것만 진행 안되게 함
    }
    selectImg.push({이미지:imgPlace[idx],div:idx});
    if(selectImg.length==2){  // 클릭한 이미지가 두 개가 되면 비교하기
        if(matching()){  // 두 개의 이미지가 같다면 실행
            // 빨강 테두리 제거-select 클래스 제거
            $(".item").eq(selectImg[0].div).find("img").removeClass("select");
            $(".item").eq(selectImg[1].div).find("img").removeClass("select");
            // click 이벤트 해제
            $(".item").eq(selectImg[0].div).off("click");
            $(".item").eq(selectImg[1].div).off("click");
            selectImg=[];  // 두 개 이미지 비교가 끝났으니 다음 비교를 위해 초기화
        }else{  // 두 개의 이미지가 다르면 실행
            clickStop=false;
            setTimeout(function(div1,div2){
                // 빨강 테두리 제거-select 클래스 제거
                $(".item").eq(selectImg[0].div).find("img").removeClass("select");
                $(".item").eq(selectImg[1].div).find("img").removeClass("select");
                // 숨기기 이벤트 추가
                $(".item").eq(selectImg[0].div).find("img").addClass("hide");
                $(".item").eq(selectImg[1].div).find("img").addClass("hide");
                selectImg=[];  // 두 개 이미지 비교가 끝났으니 다음 비교를 위해 초기화
                clickStop=true;
            },1000);
        }
    }
    updataState();
}
function updataState(){
    clickCount++;
    $("#score").text(`점수 : ${score}점`);
    $("#click").text(`클릭횟수 : ${clickCount}/30`);
    if(clickCount==31){
        $(".item").off("click");
        alert("횟수 초과로 게임 오버");
    }
}
function matching(){
    if(selectImg[0].이미지===selectImg[1].이미지)
        return true;
    else
        return false;
}
function timeStart(){
    setInterval(function(){
        time++;
        $("#step").text(`${time}초`);
    },1000);
}