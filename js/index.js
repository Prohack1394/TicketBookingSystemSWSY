

// Activate and DeactivateReturn Date as per the value selected in Radio Buttons
function activateReturnDate(){
  const input = document.getElementById('return-date');
  if(document.getElementById('roundtrip').checked){
    document.getElementById('return-date').disabled = false; 
    input.setAttribute('required', '');
    
  }
  if(document.getElementById('one-way').checked){
    document.getElementById('return-date').disabled = true;
    input.setAttribute('required');
  }
}

// Prints the Error message on the Form.
function printError(message){
  document.getElementById('error-message').innerHTML = `Error: ${message} <br>`;
}


// Validate that the Source and Destination cities is among the list of cities of Array and they are not the same
function validateCityList(){
  let originIndex = false;
  let destinationIndex = false;
  let cityList = ["sydney", "melbourne", "brisbane","perth","cairns","adelaide","darwin","townsville","hobart","canberra"];
  let originCity = document.getElementById('origin').value;
  originCity = originCity.toLowerCase();
  let destinationCity = document.getElementById('destination').value;
  destinationCity = destinationCity.toLowerCase();
  //check if the source city is same as destination city
  if(originCity == destinationCity){
    printError("Origin and Destination city cannot be same");
    return false;  
  }
  // Matching the source and destination input with the array of cities
  cityList.forEach((city)=>{
    if(city == originCity){
      originIndex = true;
    }
    if(city == destinationCity){
      destinationIndex = true;
    }
  });
  if(!(originIndex)){
    printError("No available flights from the chosen Origin location");
    return false;   
  }
  if(!(destinationIndex)){
    printError("No available flights to the chosen Destination location");
    return false;   
  }
  return true;
}


// Validate that the Trip Type is selected
function validateTripType(){
  if(!(document.getElementById('one-way').checked || document.getElementById('roundtrip').checked)){
    printError("Please select your flight type ( Round Trip/One Way)");
    return false;
  }
  return true ;
} 



 function validateDate(){
  let rdate = document.getElementById('roundtrip').value;
if(document.getElementById('roundtrip').checked && rdate == null){
printError("Please select the return date");
  return false;
 }
 return true;
}

function correctDate(){
  let date = document.getElementById('depart-date').value;
  let inpDate = new Date(date);
  let currDate = new Date();
    
  if(inpDate.toDateString() < currDate.toDateString() )
              
  {
    printError("Please enter a date that is equal or after today's date");
          
          return false
  }
  else {
      return true
  }

}

function afterDate()
let returnDate = document.getElementById('return-date').value;
let departDate = docoment.getElementById('depart-date').value;
if (returnDate <= departDate) {
  printError("return date must be after today's date");
  return false
}
else 
{
  return true
}

  function changeDate() {
  let todayDate = new Date();
  let month = todayDate.getMonth(); 
  let year = todayDate.getUTCFullYear() - 0; 
  lettdate = todayDate.getDate(); 
  if(month < 10){
    month = "0" + month 
  }
  if(tdate < 10){
    tdate = "0" + tdate;
  }
  let maxDate = year + "-" + month + "-" + tdate;
  document.getElementById("depart-date").setAttribute("min", maxDate); }

  function changeDate2() {
    let todayDate = new Date();
    let month = todayDate.getMonth() + 1; 
    let year = todayDate.getUTCFullYear(); 
    lettdate = todayDate.getDate(); 
    if(month < 10){
      month = "0" + month 
    }
    if(tdate < 10){
      tdate = "0" + tdate;
    }
    let maxDate = year + "-" + month + "-" + tdate;
    document.getElementById("return-date").setAttribute("min", maxDate); }

    function changeDate3() {
      let todayDate = document.getElementById("depart-date").value;
      let month = todayDate.getMonth() + 1; 
      let year = todayDate.getUTCFullYear(); 
      let tdate = todayDate.getDate(); 
      if(month < 10){
        month = "0" + month 
      }
      if(tdate < 10){
        tdate = "0" + tdate;
      }
      let maxDate = year + "-" + month + "-" + tdate;
      document.getElementById("return-date").setAttribute("min", maxDate); }

    
  



form.addEventListener("submit", (e) => {
  if(!(validateCityList() && validateTripType())){
    e.preventDefault();
  }
});

