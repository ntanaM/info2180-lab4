document.addEventListener("DOMContentLoaded", function(){
    // Code for exercise 2
    // Get button
    const button = document.getElementById("button");

    // Set up query
    const userRequest = new XMLHttpRequest();
    let url = "http://localhost/info2180-lab4/superheroes.php"
    userRequest.open('GET', url);
    userRequest.send();


    // function
    function displayList(){
        if(userRequest.readyState === XMLHttpRequest.DONE){
            if(userRequest.status === 200){
                let response = userRequest.responseText; // Displays superhero list
                alert(response);
            }

            else{
                alert("There was a problem processing your request");
            }
        }
    }
    // Add Event Listener to button
    button.addEventListener('click', displayList);

});