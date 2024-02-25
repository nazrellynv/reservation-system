const backBtn =document.querySelector(".back-button");
const back=document.querySelector('.back');
let service=document.querySelectorAll('.containerService');
let inputs=document.querySelectorAll(".service-input");
let nextBtn=document.querySelector(".next-button");
let next=document.querySelector(".next");
let popup=document.querySelector(".popup")
let serviceId = localStorage.getItem("serviceId");

backBtn.addEventListener('click', function() {
    back.click();
} );

function highlightElement(){
    if(localStorage.length !== 0){
        inputs.forEach(i => {
           if(serviceId === i.value){
            i.checked = "true"
            console.log(i.checked)
           }
        })
    
        service.forEach(s => {
            if(serviceId === s.id){
                s.style.border = "solid 2px rgba(54, 255, 74, 0.836) "
            }
        })
    }
}
highlightElement();

service.forEach(d => {
    d.addEventListener('click', () => {
        service.forEach(i => {
            i.style.border = "none";
        });

        inputs.forEach(i => {
            if(d.id === i.value) {
                i.checked="true";
                localStorage.setItem("serviceId", d.id);
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
