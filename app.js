

function eleMaker1 (damage, catchphrase ) {
    var ele = document.createElement("div");
    ele.innerHTML=(damage, catchphrase);
    document.body.querySelector(".main").appendChild(ele);

}

document.body.querySelector(".clicker").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML = "";
    eleMaker1("100 " , "I'm the best there is bub! ");
    eleMaker1("+ 100 damage", "+ 100 damage")
});





document.body.querySelector(".clicker2").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    eleMaker1("+200", "Get ready for a patriotic beatdown from America's ass");

});
document.body.querySelector(".clicker3").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML = "";
    eleMaker1("100 " , "A mystical hit from the Sorcerer Supreme! ");
    eleMaker1("+500 damage", "+ 500 damage")
});


document.body.querySelector(".clicker4").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML = "";
    eleMaker1("100 " , "Maximum Spider! ");
    eleMaker1("+ 100 damage", "+ 100 damage")
});