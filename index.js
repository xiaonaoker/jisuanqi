window.onload=function() {

    var board=document.getElementById("board"),
        buttons_num=document.getElementsByClassName("buttons_num"),
        buttons_deal=document.getElementsByClassName("buttons_deal"),
        up=document.getElementById("up"),
        down=document.getElementById("down"),
        a="",bb,bbb,
        b=[];
    board.onmouseover=function(event){
        if(event.target.className=="buttons_num"||event.target.className=="buttons_deal"){
            event.target.style.backgroundColor="#d8ff96";
        }
    };
    board.onmouseout=function(event){
         if(event.target.className=="buttons_num"||event.target.className=="buttons_deal"){
             event.target.style.backgroundColor="#bfff6b";
         }
    };
    board.onclick=function(event){
        if(event.target.id=="button="){
            if(up.innerHTML==""){
                alert("您还未输入！")
            }else{
                // alert(eval(b.join("")));//数组转变为字符串再变为数学表达式
                down.innerHTML=down.innerHTML.substring(0,4)+eval(b.join(""));
                // alert(down.innerHTML.length-4);
                b=[];
                up.innerHTML="";
            }
        }else if(event.target.id=="buttonC"){
            up.innerHTML="";
            down.innerHTML="END=0";
            b=[];
        }else if(event.target.id=="buttonAC"){
            up.innerHTML=up.innerHTML.substring(0,up.innerHTML.length-1);
            b.pop();
        }else if(event.target.id=="buttonM"){
            // alert(aaa);
            if(a==""){
                a=down.innerHTML.substring(4,down.innerHTML.length);
            }else{
                if((up.innerHTML+a).length>27) {
                    alert("位数超出")
                }else{
                    up.innerHTML=up.innerHTML+a;
                    b.push(a);
                }
            }
        }else if(event.target.id=="buttonMC"){
            a="";
        }else if(event.target.id=="button1"){//开始写计算
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("1");
            }
        } else if(event.target.id=="button2"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("2");
            }
        }else if(event.target.id=="button3"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("3");
            }
        }else if(event.target.id=="button4"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("4");
            }
        }else if(event.target.id=="button5"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("5");
            }
        }else if(event.target.id=="button6"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("6");
            }
        }else if(event.target.id=="button7"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("7");
            }
        }else if(event.target.id=="button8"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("8");
            }
        }else if(event.target.id=="button9"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("9");
            }
        }else if(event.target.id=="button0"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("0");
            }
        }else if(event.target.id=="button."){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push(".");
            }
        }else if(event.target.id=="button+"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("+");
            }
        }else if(event.target.id=="button-"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("-");
            }
        }else if(event.target.id=="button*"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("*");
            }
        }else if(event.target.id=="button/"){
            if(up.innerHTML.length>27){
                alert("位数超出！");
            }else{
                up.innerHTML=up.innerHTML+event.target.innerHTML;
                b.push("/");
            }
        }







    }


}