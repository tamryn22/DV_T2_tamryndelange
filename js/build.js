addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value 
    
    let subject =document.getElementById("subject").value
    //console.log(first, last, age, subject)
    // if(age >= 18){
    //     alert("The Student , "+ first + " " + last + " has been added to " + subject)
    // }else{
    //     alert("The student is not old enough to enroll")
    // }
}
//number add a + before the doc.get

makePizza = () => {
    let pizzaName = document.getElementById("pizzaName").value
    let size = document.getElementById("size").value
    
    //for checking what is checked 
    let baseOptions = document.getElementsByName("baseRadio")
    //console.log(baseOptions)
    let badeOptions = document.getElementsByName("baseRadio")
    let baseValue ;
    for(let i = 0; i < baseOptions.length; i++){
        if(baseOptions [i].checked){
            baseValue = baseOptions [i].value
        }
    }
     //console.log(baseValue)
    let salami = document.getElementById("salami").checked
    if(salami){
        alert("Pizza Order: The " + pizzaName + " - Size" + size + " - Base" + baseValue + ", with Salami")
    } else{
        alert("Pizza Order: The " + pizzaName + " - Size" + size + " - Base" + baseValue + ", without Salami")
    
    }



}
