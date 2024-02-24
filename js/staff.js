
let staff=document.querySelectorAll('.container');
let inputs=document.querySelectorAll(".staff-input");
let nextBtn=document.querySelector(".next-button");
let next=document.querySelector(".next");
let popup=document.querySelector("#popupstf");


staff.forEach(d => {
    d.addEventListener("click",() => {
        inputs.forEach(i => {
            if(d.id === i.value) {
              i.checked="true";
            }
        })
    })
})


nextBtn.addEventListener("click", function() {

    if (Array.from(inputs).some(i => i.checked)) {
        next.click();
    }
    else {
        popup.style.opacity="1";
    }
})





