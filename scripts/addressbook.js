// WeUsThem
window.onload = function(){
	// Buttons
	var quickAddBtn = document.getElementById('QuickAdd');
	var AddBtn = document.getElementById('Add');
	var cancelBtn = document.getElementById('Cancel');
	var quickAddFormDiv = document.querySelector('.quickaddForm')
 	   // document.getElementsByClassName('quickaddForm')[0]
  
	// Form Fields
	var First_name = document.getElementById('First_name');
	var Last_name = document.getElementById('Last_name');
	var phone = document.getElementById('phone');
	var email = document.getElementById('email');
  
	// Address Book Diplay
	var addBookDiv = document.querySelector('.addbook');

  
	// Storage Array
	var addressBook = [];
  
  	// Event Listeners
	quickAddBtn.addEventListener("click", function(){
		// display the form div
		quickAddFormDiv.style.display = "block";
	});
	
	cancelBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "none";
	});
	
	

   
}
