const backBtn =document.querySelector(".back-button");
const back=document.querySelector('.back');
let inputs=document.querySelectorAll(".form-input");
let popup=document.querySelector(".alert-popup");
let forms=document.querySelectorAll('.inputs');
let confirmBtn= document.querySelector('.confirm-btn');
const body=document.body;
const closePopup=document.querySelector('.close-popup')


forms.forEach(d => {
  d.addEventListener("input", function () {
      inputs.forEach(i => {
        if(d.id===i.value) {
        i.checked= "true";
        }
      })
  })
})



backBtn.addEventListener("click" , function() {
  back.click()
})

confirmBtn.addEventListener("click", function() {
  if (Array.from(inputs).every(i=> i.checked)) {
    popup.style.opacity= "1";
    body.classList.add('transparent');
    popup.innerTEXT="Confirmation successfully completed!";
    popup.style.color="rgba(54, 255, 74, 0.836)";

  }
  else {
    popup.style.opacity= "1"
    body.classList.add('transparent')
  }

})

closePopup.addEventListener("click", function() {
  popup.style.opacity= "0";
  body.classList.remove('transparent')

})