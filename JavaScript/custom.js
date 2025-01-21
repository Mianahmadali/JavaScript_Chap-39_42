const clearInput = () => {
    document.getElementById("input").value = ""; // Clear the input field
}

const getInputValue = () => {
    return document.getElementById("input").value; // Return the current value of the input field
}
function clearOutput(){
    document.getElementById("output").innerHTML = "";
}
const showToastify = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(99, 4, 4),rgb(231, 77, 6))",
        },
        onClick: function(){} // Callback after click
      }).showToast();

}
function sowOutput(msg){
    document.getElementById("output").innerHTML= msg
}
function isElse(){
    var now = new Date()
    var today = now.getDay()
    if (today === 0) {
        alert("it's Sunday")
        
    }
    else if (today ===1 ) {
        alert("it's Monday")
        
    }
    else if (today ===2 ) {
        alert("it's Tuesday")
        
    }
    else if (today ===3 ) {
        alert("it's Wednesday")
        
    }
    else if (today ===4 ) {
        alert("it's Thursday")
        
    }
    else{
        alert("it's some other day")
    }


    
}
function switchStatement() {
    var now = new Date()
    var today = now.getDay()
    switch (today) {
        case 0:
            sowOutput("it's Sunday")
            break;
            case 1:
                sowOutput("it's Monday")
            break;
            case 2:
                sowOutput("it's Tuesday")
            break;
            case 3:
                sowOutput("it's Wednesday")
            break;
            case 4:
                sowOutput("it's Thursday")
            break;
    
        default:
            sowOutput("it's Some other day")
            break;
    }
    
}
function keepAskingTheName () {
    do {
        var name = prompt("Enter your Name?")
        console.log(name)
        
    } while (name === null || name === "" || name.length < 3) ;
    sowOutput(name)
}

