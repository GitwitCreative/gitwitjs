// Communicate with the parent site hiltibutton.us.hilti.com to
// register a form submission
try {
// 	   parent.postMessage('formSubmit', 'https://hiltibutton.us.hilti.com/');
	   console.log('Pre-message');
 	   parent.postMessage('formSubmit', 'http://hil-button.herokuapp.com'); 	   
// 	   parent.postMessage('formSubmit', 'https://form.hilti.com'); 	   
	   console.log('Post-message');
} catch(e) {
  	// Something went wrong...
  	window.console && window.console.log(e);
}
