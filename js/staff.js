
let staff=document.querySelectorAll('.container');
let inputs=document.querySelectorAll(".staff-input");
let nextBtn=document.querySelector(".next-button");
let next=document.querySelector(".next");
let popup=document.querySelector(".popup");
let staffId= localStorage.getItem('staffId');


function highlightElement() {
    if (localStorage.length !== 0) {
        inputs.forEach( i => {
            if(staffId === i.value) {
                i.checked='true';
            }
        })
        staff.forEach(s => {
            if(staffId === s.id) {
                s.style.border=" solid 2px rgba(54, 255, 74, 0.836)"
            }
        })
    }
}


highlightElement()


staff.forEach(d => {
    d.addEventListener("click",() => {
        staff.forEach(d => {
            d.style.border="none";
        })
        inputs.forEach(i => {
            if(d.id === i.value) {
              i.checked="true";

              let selectedStaff = document.getElementById(d.id).lastElementChild.firstElementChild.innerHTML
              
              localStorage.setItem('staffId', selectedStaff);
              d.style.border=" solid 2px rgba(54, 255, 74, 0.836)"
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





