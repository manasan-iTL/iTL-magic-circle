`use strict`
var pics_src = new Array("./images/Top_Gallery1.jpg", "./images/Top_Gallery2.jpg", "./images/Top_Gallery3.jpg");
var num = 0;

function go_forward(){
    if (num == 2) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
}

function go_back(){
    if (num == 0) {
        num = 2;
    }
    else {
        num --;
    }
    document.getElementById("mypic").src=pics_src[num];
}