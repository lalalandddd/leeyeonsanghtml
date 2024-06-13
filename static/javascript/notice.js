// notice.js
// 키보드는 누르면 눌렀다 신호만 전달...
// 키보드를 떼야 키 값을 전달
// 계속 누르고 있으면 키가 입력되는 것은 눌렀다 신호가 여러 번 전달되면 입력 처리로 변경되기 떄문

$(function(){
    $("#detail").keyup(function(){  // 5글자 이상 입력해야 버튼 활성화
        if($("#detail").val().length>=5){
            $("#save").removeAttr('disabled');
        } else {$("#save").attr('disabled','disabled');
        }
    });
    $(document).keypress(function(e){
        if(e.keyCode===13){save();}
    });
    // $("#save").on('click',function(){});
    $("#save").click(function(){
        let text=$("#detail").val();
        addList(text);  // input 태그에 입력값 ul에 넣기
        // input 태그에 아무것도 입력하지 않았다면?
        // if(text===''){  // input 태그가 비어있다.
        //     alert("내용을 입력하세요");
        //     $("#detail").focus();
        //     return;  // 함수 강제 종료
        // }
    });  // $("#save").click  END
});  // $(function)  END
function addList(text){  // list 추가할 때 자바는 복잡하지만 jquery는 간편하다.
    $("#list").append('<li>'+text+'</li>')  // 기존 list 유지하면서 list 추가
}