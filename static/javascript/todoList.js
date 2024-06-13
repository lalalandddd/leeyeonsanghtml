// todoList.js
$(function(){
    $("#enroll").attr("disabled","disabled");
    $("#work").keyup(check);
    $("#time").change(check);
    $("#state").keyup(check);
    $("#enroll").click(add);
    $(document).keyup(function(e){
        if(e.keyCode===13){join();}
    });
});
function check(){
    var workc=$("#work").val();
    var timec=$("#time").val();
    var statec=$("#state").val();
    if(workc!=''&&timec!=''&&statec!=''){
        $("#enroll").removeAttr("disabled");
    }else{
        $("enroll").attr("disabled","disabled");
    }
}
function add(){
    var work=$("#work").val();
    var time=$("#time").val();
    var state=$("#state").val();
    var isCheck=check(work,time,state);
    if(state==='완료'||state==='진행중'){
        $("#todoList").append(`<li class="todo">${work}</li>
            <li class="todoTime">${time}</li>
            <li class="todoState">${state}</li>`);
        $("#work").val('');
        $("#time").val('');
        $("#state").val('');
        $("#work").focus();
    }else{
        alert("상태는 완료 또는 진행중 만 입력하세요");
    }
    $("#work").val('');
    $("#time").val('');
    $("#state").val('');
    $("#work").focus();
}
// function check(workc,timec,statec){
//     if(workc===''){
//         alert("할일을 입력하세요");
//         $("#work").focus();
//         return false;
//     }else if(timec===''){
//         alert("시간을 입력하세요");
//         $("#time").focus();
//         return false;
//     }else if(!(statec==='완료'||statec==='진행중')){
//         alert("완료 또는 진행중을 입력하세요");
//         $("#state").val('');
//         $("#state").focus();
//         return false;
//     }
//     return true;
// }
// function addList(text1){
//     $("#workView").append('<li>'+text1+'</li>')
// }
// function addList(text2){
//     $("#timeView").append('<li>'+text2+'</li>')
// }
// function addList(text3){
//     $("#stateView").append('<li>'+text3+'</li>')
// }