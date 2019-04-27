function yesfunction() {
    let Obj = document.getElementById("iloveyou");
    Obj.style.display = "block";
}
function nofunction() {
    let Obj = document.getElementById("no");
    Obj.style.position = "absolute";
    Obj.style.margin = "0px";
    let x = (window.innerWidth - 10);
    let y = (window.innerHeight - 10);
    let xrandom = Math.random();
    let yrandom = Math.random();
    Obj.style.left = eval(xrandom * x) + "px";
    Obj.style.top = eval(yrandom * y) + "px";
    console.log(xrandom);
    console.log(yrandom);
}