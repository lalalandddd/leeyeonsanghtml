/* index_signup.js */
$(function(){
    $("#signup").on('click',requiredCheck);  // 회원가입버튼 클릭 이벤트
    $("#signup").on('click',function(){
    // jquery에서 checkbox 중 체크한 것만 가져오려면?
    // $("input[name=interest]:checked")  :checked 붙여야 체크한 것만 가져온다.
        alert($("input[name=interest]:checked").length);  // 체크 숫자 확인
        let itr=$("input[name=interest]:checked");
        let value=[];
        for(var i=0;i<itr.length;i++){
            value.push($(itr[i]).val());
        }  // 이렇게 적어야 체크한 모든 값을 보여준다......
        alert("체크한 관심분야 : "+value);
        // let interest=$("input[name=interest]:checked").val();
        // alert(interest);  // 이렇게 두 줄만 하면 체크한 것 중 제일 처음만 보여준다.
        // $("#signupForm").submit();
    });
});
function requiredCheck(){  // 필수 입력을 모두 입력했는가?
    var id=$("#uesrId");  // 아이디
    var pw=$("#userPw");  // 비밀번호
    var re=$("#pwRe");  // 비밀번호 확인
    var email=$("#email");  // 이메일
    var tel=$("#tal");  // 연락처
    var addr=$("#addr");  // 주소
    if(id.val()==''){
        alert("아이디를 입력하세요");
        id.focus();  // 아이디 input 태그에 포커스 (커서 넣기)
    }else if(pw.val()==''){
        alert("비밀번호를 입력하세요");
        pw.focus();
    }else if(re.val()==''){
        alert("비밀번호를 다시 입력하세요");
        re.focus();
    }else if(pw.val()!=re.val()){
        alert("비밀번호가 잘못되었습니다!");
        pw.val('');  // 비밀번호 input 태그 지우기
        re.val('');  // 비밀번호 확인 태그 지우기
        pw.focus();  // 비밀번호 input 태그에 포커스
    }else if(email.val()==''){
        alert("이메일을 입력하세요");
        email.focus();
    }else if(tel.val()==''){
        alert("전화번호를 입력하세요");
        tel.focus();
    }else if(addr.val()==''){
        alert("주소를 입력하세요");
        addr.focus();
    }else{  // 위의 6개 항목이 모두 거짓(=제대로 입력)이라면 동작
        $("#signupForm").submit();
    }
}