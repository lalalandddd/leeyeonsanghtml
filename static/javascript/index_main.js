/* index_main.js */
$(function(){
    // 로그인 화면에서 로그인 모달 닫기
    $("#back").click(function(){
        $("#modal").hide();
    });
    // 로그인 화면에서 로그인 버튼 클릭 시
    $("#login").click(function(){
        var id=$("#id");
        var pw=$("#pw");
        if(id.val()==''||pw.val()==''){  // 아이디 비번 입력 안하면 로그인 안함
            alert("아이디와 비밀번호를 입력하세요");
            return;  // 해당 함수 종료
        }
        // 아이디 비번 입력했다면...
        let user=JSON.parse(localStorage.getItem("user"));  // user에 저장한 정보 가져오기
        if(id.val()==user.id){  // 아이디 일치?
            if(pw.val()==user.pw){  // 비밀번호 일치?
                $(".member").html(`<b>${user.id}</b>
                    <a href="javascript:window.location.reload()">로그아웃</a>
                `);
                $("#modal").hide();
                return;
            }  
        }
        alert("아이디 또는 비밀번호가 옳바르지 않습니다");
    });
});
function login(){
    $("#modal").show();  // 모달창을 보여라
}