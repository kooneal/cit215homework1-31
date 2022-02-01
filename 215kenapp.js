

function eleMaker1 (damage, catchphrase ) {
    var ele = document.createElement("div");
    ele.innerHTML=(damage, catchphrase);
    document.body.querySelector(".main").appendChild(ele);

}

document.body.querySelector(".clicker").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML = "";
    eleMaker1("100 " , "I'm the best there is bub! ");
    eleMaker1("+ 100 damage done to Thanos", "+ 4500 damage done to Thanos")
});





document.body.querySelector(".clicker2").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    eleMaker1("+ 1000 damage done to Thanos", "Get ready for a patriotic beatdown from America's ass");
    eleMaker1("+ 1000 damage done to Thanos", "+ 1000 damage done to Thanos")
});
document.body.querySelector(".clicker3").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML = "";
    eleMaker1("+ 500 damage done to Thanos" , "A mystical hit from the Sorcerer Supreme! ");
    eleMaker1("+500 damage done to Thanos", "+ 500 damage done to Thanos")
});


document.body.querySelector(".clicker4").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML = "";
    eleMaker1("+ 700 damage done to Thanos" , "Maximum Spider! ");
    eleMaker1("+ 700 damage done to Thanos", "+ 700 damage done to Thanos")
});