const datePicker= document.querySelector('.date-picker');
const selectedDateElement=document.querySelector('.selected-date');
const datesElement=document.querySelector('.dates');
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const days=document.querySelector(".days");
const dateElement=document.querySelector('.date');
const months=["January", "February", "March","April",  "May", "June", "July", "August" , "September", "October", 
"November", "December"];
const backBtn =document.querySelector(".back-button");
const back=document.querySelector('.back');
const times=document.querySelector('.times');
const appTimes= ["09.00-09.30","09.30-10.00","10.00-10.30" ];
const appTimes2=["13.00-13.30", "13.30-14.00", "14.30-15.00"];
let nextBtn=document.querySelector(".next-button");
let nextLink=document.querySelector(".nextLink");
let inputs=document.querySelectorAll(".time-input");
let popup=document.querySelector(".popup");
let date= new Date ();
let day = date.getDate();
let month= date.getMonth ();
let year=date.getFullYear();

let selectedDate=date;
let selectedDay=day;
let selectedMonth=month;
let selectedYear=year;
selectedDateElement.textContent=months[month] + ' ' + year;


next.addEventListener("click", nextMonth);
prev.addEventListener("click", prevMonth);
populateDates()
function nextMonth () {
    month++;
    if (month>11) {
        month=0;
        year++
    }
    selectedDateElement.textContent=months[month] + ' ' + year;
}

function prevMonth() {
    month--;
    if (month<0) {
        month=11;
        year--
    }
    selectedDateElement.textContent=months[month] + ' ' + year;

}

dateElement.textContent=formatDate(date);

function formatDate(d) {
    let day= d.getDate();
    if (day< 10) {
        day='0' + day;
    }
    let month= d.getMonth() + 1;
    if (month< 10) {
        month='0' + month;
    }
    let year=d.getFullYear();
    return day + '/' + month + '/' + year;
}

function populateDates (e) {
    days.innerHTML='';
    for (let i=1; i<=31; i++) {
        const day_element= document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent=i;

        if(selectedDay==(i) && selectedYear===year && selectedMonth===month) {
            day_element.classList.add('selected')
        }
        day_element.addEventListener('click', function() {
            selectedDate=new Date(year+ '-' + (month+1) + "-" + (i));
            selectedDay=(i);
            selectedMonth=month;
            selectedYear=year;
            dateElement.textContent=formatDate(selectedDate);
            dateElement.dataset.value= selectedDate;
            populateDates()
  
        })
        days.appendChild(day_element);
    
    }
}
populateTimes()
 
nextBtn.addEventListener("click", function() {
    if(Array.from(inputs).some(i =>i.checked)) {
        nextLink.click();

    }
    else {
        popup.style.opacity= "1";
        setTimeout(() => {
            popup.style.opacity="0";
        },2000)
    }
})


function populateTimes() {
    times.innerHTML='';
    for (let i=0; i<appTimes.length; i++) {
        const time_element= document.createElement('div');
        time_element.classList.add("time");
        
        if (selectedDay%2===0) {   
        time_element.textContent += appTimes[i];
        }
        else {  
        time_element.textContent += appTimes2[i];
        }
        times.appendChild(time_element);
    } 
    let container=document.querySelectorAll('.time');
    container.forEach (d => {
        d.id=d.textContent;
        d.addEventListener("click", () => {

            let date = d.parentElement.previousElementSibling.innerHTML
            console.log(date)

            container.forEach(c => {
                c.style.backgroundColor="rgb(228, 227, 227)"
            })
            inputs.forEach(i => {
                if(d.id === i.value) {
                    i.checked=true;
                    d.style.backgroundColor ='rgb(120, 222, 74)';
                    localStorage.setItem('selectedDate', date.concat('-', i.value))
                    localStorage.setItem('dateId', d.id) 
                }
            })
        })
    })
    dateId=localStorage.getItem('dateId');
    function highlightElement(){
        if(localStorage.length !== 0){
            inputs.forEach(i => {
               if(dateId === i.value){
                i.checked = "true";
                console.log("true")
               }
            })
            container.forEach(s => {
                if(dateId === s.id){
                    s.style.backgroundColor="rgb(120, 222, 74)";
                }
            })
        }
    }
    highlightElement();
}







backBtn.addEventListener('click', function() {
    back.click();
});

