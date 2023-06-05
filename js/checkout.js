calculate = () => {
    let valueOne= +document.getElementById("valueOne").value
    let valueTwo = +document.getElementById("valueTwo").value 
    let operator =document.getElementById("operator").value
    console.log(valueOne, valueTwo, operator)
    
}

realTimeCost = () => {

    realTimeValue = 0;
    let size = document.getElementById("size").value;

    if(size === "Small"){
        realTimeValue = realTimeValue + 20;
    } else if(size === "Medium"){
        realTimeValue = realTimeValue + 40;
    } else if(size === "Large"){
        realTimeValue = realTimeValue + 60;
    }

    

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimeValue = realTimeValue+ +toppingOptions[i].dataset.cost
        }
    }
    // console.log (realTimeValue)

    document.getElementById("realTimeCost").innerHTML = "R" + realTimeValue + ". 00"
    
}


displayOrder = () => {
 //decoupling- request and response 
    let area = document.getElementById ("orders");
    let total = document.getElementById("orderTotal");

   area.innerHTML ="";

    let overallTotal = 0;
    for(let i = 0; i < pizzaOrder.length; i ++){

        let name = pizzaOrder [i] .pizzaName;
        let size = pizzaOrder [i] .pizzaSize;
        let base = pizzaOrder [i] .pizzaBase;
        let toppings = pizzaOrder [i] .pizzaToppings;
        let cost = pizzaOrder [i] .pizzaPrice;

        overallTotal += cost;
// + for insert
        area.innerHTML += `
        
        <div class="card" style="width: 18rem;">
            <img src="/images/side-view-sandwich-white-bread-with-grilled-meat-cutlet-cheese-lettuce-french-fries-mayo-ketchup-boardjpg.jpg" class="card-img-top" alt="YOUR PIZZA">
            <div class="card-header">
                <h3 class="card-title">${name}</h3> 
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Base:</strong> ${base}</p></li>
                <li class="list-group-item"><strong>Size:</strong> ${size}</p></li>
                <li  class="list-group-item"><strong>Toppings:</strong>${toppings.join(", ")}</p></li>
                <li class="list-group-item"><strong>R${cost}.00</strong></p></li>
            </ul>
        </div>`

        total.innerHTML =" R" + overallTotal + ".00";
    }


}