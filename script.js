var istatus = document.querySelector("h5")

var btn=document.querySelector("#add")
var check =0
btn.addEventListener("click", function(){
    if(check == 0){
istatus.innerHTML = "Friends"
istatus.style.color = "green"
btn.innerHTML = "removeFriend"
check = 1
    }else{
        istatus.innerHTML = "Strenger"
istatus.style.color = "red"
btn.innerHTML = "addFriend"
check = 0
    }
    });


