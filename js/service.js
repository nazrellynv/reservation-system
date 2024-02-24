const backBtn =document.querySelector(".back-button");
const back=document.querySelector('.back');
let service=document.querySelectorAll('.containerService');
let inputs=document.querySelectorAll(".service-input");
let nextBtn=document.querySelector(".nextSrc-button");
let next=document.querySelector(".next");
let popup=document.querySelector(".popup")
let staffId = localStorage.getItem("staffId");

backBtn.addEventListener('click', function() {
    back.click();
} );

function Salam(){
    if(localStorage.length !== 0){
        console.log("ok")
        inputs.forEach(i => {
           if(staffId === i.value){
            i.checked = "true"
            console.log(i.checked)
           }
        })
    
        service.forEach(s => {
            if(staffId === s.id){
                s.style.border = "solid 1px green"
            }
        })
    }
}
Salam();

service.forEach(d => {
    d.addEventListener('click', () => {
        service.forEach(i => {
            i.style.border = "none";
        });

        inputs.forEach(i => {
            if(d.id === i.value) {
                i.checked="true";
                localStorage.setItem("staffId", d.id);
                d.style.border = "solid 1px green"
            }
        })
    })
})

nextBtn.addEventListener("click", function ()  {
    if (Array.from(inputs).some(i => i.checked)) {
        next.click();
    } 
    else {
        popup.style.opacity= "1";
    }
})
