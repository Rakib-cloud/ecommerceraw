//newslatter work
window.addEventListener("load",function (){
    setTimeout(
        function open(event){
            document.querySelector(".newsbox").style.display="block";
        },
        1000
    )



});
document.querySelector("#popupclose").addEventListener("click",function (){

    document.querySelector(".newsbox").style.display="none";



});