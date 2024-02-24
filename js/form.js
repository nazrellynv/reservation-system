let services = document.querySelectorAll(".containerService")
let serviceValue;

services.forEach(s => {
    if(s.id === localStorage.getItem("staffId")){
        serviceValue = s.firstElementChild.lastElementChild.firstElementChild.innerHTML
    }
})

let input = document.getElementById("ok")

input.value = serviceValue;
