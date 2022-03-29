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
	
	function ValidateEmail(input) {
  		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 		 if (input.value.match(validRegex)) {
  			alert("Valid email address!");
   			document.form1.text1.focus();
  		  return true;
		  } else {
   			 alert("Invalid email address!");
   			 document.form1.text1.focus();
   			 return false;
  			}
	}


	function addToBook(){
		var isNull = First_name.value!='' && Last_name.value!='' && phone.value!='';
		
		if(isNull && ValidateEmail(email.value) ){
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

	
	function clearForm(){
		var formFields = document.querySelectorAll('.formFields');
		for(var i in formFields){
			formFields[i].value = '';
		}
	}
	function jsonStructure(First_name,Last_name,phone,email){
		this.First_name = First_name;
		this.Last_name = Last_name;
		this.phone = phone;
		this.email = email;
	}
	
	
	function showAddressBook(){
	// check if the key 'addbook' exists in localStorage or else it
	// if it exist, load contents from the localStorage and loop > display it on the page
		if(localStorage['addbook'] === undefined){
			localStorage['addbook'] = '';
		} else {
			addressBook = JSON.parse(localStorage['addbook']);
			// Loop over the array addressBook and insert into the page
			addBookDiv.innerHTML = '';
			for(var n in addressBook){
				var str = '<div class="entry">';
					str += '<div class="First_name"><p>' + addressBook[n].First_name + '</p></div>';
					str += '<div class="Last_name"><p>' + addressBook[n].Last_name + '</p></div>';
					str += '<div class="email"><p>' + addressBook[n].email + '</p></div>';
					str += '<div class="phone"><p>' + addressBook[n].phone + '</p></div>';
					str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
					str += '</div>';
				addBookDiv.innerHTML += str;
			}
		}
	}
   
	
	addBookDiv.addEventListener("click", removeEntry);
	function removeEntry(e){
		// Remove an entry(JSON) from the addressbook array with the index num = remID
		if(e.target.classList.contains('delbutton')){
			var remID = e.target.getAttribute('data-id');
			addressBook.splice(remID,1);
			localStorage['addbook'] = JSON.stringify(addressBook);
			showAddressBook();
		}
	}

	
	
	showAddressBook();

	
}
