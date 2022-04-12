let ranNum = Math.floor(Math.random() * (100)) + 50;

function SumCost (adultNum, childNum) {
    const childNum = document.getElementById("children").value;
    const adultNum = document.getElementById("adults").value;
    const traveltype = document.getElementById ("travel-class").value;
    let costAdult = ranNum
    let costChild = ranNum*0.8
    let total = 0
    let a = document.getElementById('roundtrip').value;
   
    if (a === true ) {costChild = costChild*2*0.75;
                     costAdult = costAdult*2*0.75;
        }
    if (traveltype === "Business class") {
        costAdult = 2*costAdult
        costChild = 2*costChild
    }
    if (traveltype === "First class") {
        costAdult = 3*costAdult
        costChild = 3*costChild
    }

    total = costAdult*adultNum + costChild*childNum;
    document.getElementById("total").innerHTML = total 


    }



// Top Form / radio round trip
function validateTripType( ) {
    let oneway  =  document.getElementById("oneway").value;
    let roundtrip =  document.getElementById ("roundtrip").value;
        if (oneway == false && roundtrip == false){
          alert ("Please select your flight type");
                return false;
       } 
                return true ;
    } 
      // Top Form/ From To
      
    function toAndFrom ( ) {
        let   From = document.getElementById ("origin").value;
        let   To = document.getElementById ("destination").value;
            if ( From == null || From == " " ) {
                alert ( "Please enter your departure");
                return false ;
        }
            if ( To == null || From == " " ) {
                alert ( "Please enter your destination");
                return false ;
        }
    }
     // Top Form/  Number of adult & children / System validation
     // Top Form / Travel class
    
    function travelClass ( ) {
        let class1 =document.getElementById ("travel-class").value;
        if (class1 =="select class") {
                alert ( "Please select class") ;
                return false ;	
        }
                return true;
    }
    // Passenger / radio gender
    function genderValidate ( ) {
        let male = document.getElementById("genderp-male").value;
        let female = document.getElementById ("genderp-female").value;
            if (male == false && female == false){
                alert (" Please select your gender");
                return false;
           } 
            else {return true; 
        }
    } 
    
    // Passenger / Phone number / 10 digit /
    function phoneValidate (){
        let num = document.getElementById("p-number").value;
        if (num  === " "){
                alert ( "Please enter phone number" );
                return false;
        }
        if (isNan(num )){
                alert ( "Invalid number");
                return false;
        }
        if (num.length>10 || num.length<6 ){
                alert ( "Number should be between 6 to 10 digits");
                return false;
        }
        if (num.indexOf ('0')!== 0 ){
            alert ( "First number must be 0");
                return false;
        }
                return true;
        }
        
    
    // Passenger / Payment option 
    function  paymentValidate ( ) {
        let payment =document.getElementById ("payment-method").value;
        if (payment == "select payment") {
                alert ( "Please select payment option") ;
                return false ;	
        }
        else {return true;}
    }
