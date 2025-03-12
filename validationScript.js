    // JavaScript code for form validation
	// Prevent form from submitting
let subButton = document.getElementById("subButton");
subButton.addEventListener("click", inputCheck);


      // Retrieve the input field value
function inputCheck () {
let inputField = document.getElementById("inputField");
// Regular expression pattern for alphanumeric input
let isValid =  /^[a-z0-9]+$/.test(inputField.value)
// Check if the input value matches the pattern
// Valid input: display confirmation and submit the form
if (isValid) {
    inputField.setCustomValidity('Success')
    // Invalid input: display error message
  } else if (!isValid)  
    inputField.setCustomValidity('Failed to complete. Input at least one alphanumeric character.')
}
  
  
    



      

      

        

        