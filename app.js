document.addEventListener("DOMContentLoaded", function(){
    // Code for exercise 3
    // Get button
    const button = document.getElementById("button");
    const userInput = document.getElementById("search");
    const result = document.getElementById("result");


    // function
    function displayList(){    
        const userQuery = userInput.value.trim().toLowerCase();
        const userRequest = new XMLHttpRequest();
        userRequest.open('GET', `superheroes.php?query=${encodeURIComponent(userQuery)}`, true);
        userRequest.send();
        userRequest.onreadystatechange = function(){
            if(userRequest.readyState === XMLHttpRequest.DONE){
                if(userRequest.status === 200){
                    let response = userRequest.responseText; 
                    result.innerHTML = response;                   
                }
    
                else{
                    alert("There was a problem processing your request");
                }
            }

        }   
        
    }
    // Add Event Listener to button
    button.addEventListener('click', displayList);

});