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
   