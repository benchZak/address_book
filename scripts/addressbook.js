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
	
	AddBtn.addEventListener("click", addToBook);
	
	
	function jsonStructure(First_name,Last_name,phone,email){
		this.First_name = First_name;
		this.Last_name = Last_name;
		this.phone = phone;
		this.email = email;
	}

	
	function addToBook(){
		var isNull = First_name.value!='' && Last_name.value!='' && phone.value!=''  && email.value!='';
		if(isNull){
			//Add the contents of the form to the array & localstorage
			// format the input into a valid JSON structure

			var obj = new jsonStructure(First_name.value,Last_name.value,phone.value,email.value);
			addressBook.push(obj);
			localStorage['addbook'] = JSON.stringify(addressBook);
			// Hide the form panel
			quickAddFormDiv.style.display = "none";
			//clear the form
			clearForm();
			// Updating & Displaying all records in the addressbook
			showAddressBook();
		}
	}

	


   
}
