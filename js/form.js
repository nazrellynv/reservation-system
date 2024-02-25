let noteArea=document.querySelector("#message");
let staff=document.querySelectorAll('.container');
let staffValue;

staff.forEach(s => {
    if(s.id === localStorage.getItem("staffId")){
        staffValue = s.lastElementChild.innerHTML;
    }
})


noteArea.value = staffValue;
