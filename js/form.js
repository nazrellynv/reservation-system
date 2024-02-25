let noteArea=document.querySelector("#message");
let selectedStaffName = localStorage.getItem('selectedStaffName');
let selectedServiceName = localStorage.getItem('selectedServiceName')
let selectedServicePrice = localStorage.getItem('selectedServicePrice')
let selectedDate = localStorage.getItem('selectedDate')

noteArea.value = `Staff: ${selectedStaffName};\nService: ${selectedServiceName};\nTotal: ${selectedServicePrice.trim()};\nDate: ${selectedDate}`

   console.log(noteArea.value);
 
