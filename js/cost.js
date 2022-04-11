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

