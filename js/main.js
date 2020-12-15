$(document).ready(function () {
    PopUpHide("#popup1");
    PopUpHide('#popup2')
});

function PopUpShow(p){
    $(p).show();
}

function PopUpHide(p){
    $(p).hide();
}