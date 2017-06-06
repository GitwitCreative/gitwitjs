// Communicate with the parent site hiltibutton.us.hilti.com to
// register a form submission
try {
// 	   parent.postMessage('formSubmit', 'https://hiltibutton.us.hilti.com/');
// 	   parent.postMessage('formSubmit', 'http://hil-button.herokuapp.com/index.html'); 	   
 	   parent.postMessage('formSubmit', 'https://form.hilti.com'); 	   
} catch(e) {
  	// Something went wrong...
  	window.console && window.console.log(e);
}
