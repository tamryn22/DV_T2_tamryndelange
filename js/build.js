addOrder= () => {
    let first = document.getElementById("first").value
    let location = document.getElementById("location").value 
    
    let payment =document.getElementById("payment").value
    console.log(first, location, payment)
    
}
//number add a + before the doc.get
let subForm = [];

makeSub = () => {

    let subTotal = 0;

    let subName = document.getElementById("name").value
    let size = document.getElementById("size").value
    
    if(size === "Small"){
        subTotal = subTotal + 15;
    } else if(size === "Medium"){
        subTotal = subTotal + 30;
    } else if(size === "Large"){
        subTotal = subTotal + 50;
    }
    
    let fillingsOptions = document.getElementsByName("fillings");
    let topArray = [];
    for(let i = 0; i < fillingsOptions.length; i++){
        if(fillingsOptions[i].checked){
            topArray.push(fillingsOptions[i].value);
            subTotal = subTotal + +fillingsOptions[i].dataset.cost
        }
    }

    pizzaOrder.push({
        subName: subName,
        Size: size,
        subFillings: topArray,
        subPrice: subTotal
    });

    console.log(subOrder)
    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subForm").reset();

}

realTimeCost = () => {

    realTimeValue = 0;
    let size = document.getElementById("size").value;

    if(size === "Small"){
        realTimeValue = realTimeValue + 15;
    } else if(size === "Medium"){
        realTimeValue = realTimeValue + 30;
    } else if(size === "Large"){
        realTimeValue = realTimeValue + 50;
    }

    let fillingsOptions = document.getElementsByName("fillings");
    for(let i = 0; i < fillingsOptions.length; i++){
        if(fillingsOptions[i].checked){
            realTimeValue = realTimeValue+ +fillingsOptions[i].dataset.cost
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
       for(let i = 0; i < subOrder.length; i ++){
   
           let name = subOrder [i] .subName;
           let size = subOrder [i] .size;
           let fillings = subOrder [i] .fillingsOptions;
           let cost = subOrder [i] .subPrice;
   
           overallTotal += cost;
   // + for insert
           area.innerHTML += `
           
           <div class="card" style="width: 18rem;">
               <img src="/images/side-view-sandwich-white-bread-with-grilled-meat-cutlet-cheese-lettuce-french-fries-mayo-ketchup-boardjpg.jpg" class="card-img-top" alt="YOUR PIZZA">
               <div class="card-header">
                   <h3 class="card-title">${name}</h3> 
               </div>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><strong>Size:</strong> ${size}</p></li>
                   <li  class="list-group-item"><strong>Toppings:</strong>${fillings.join(", ")}</p></li>
                   <li class="list-group-item"><strong>R${cost}.00</strong></p></li>
               </ul>
           </div>`
   
           total.innerHTML =" R " + overallTotal + ".00 ";
       }
   
   
   }