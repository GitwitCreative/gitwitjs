// Communicate with the parent site hiltibutton.us.hilti.com to
// register a form submission
try {
 	   parent.postMessage('formSubmit', 'https://hiltibutton.us.hilti.com/');
} catch(e) {
  	// Something went wrong...
  	window.console && window.console.log(e);
}
