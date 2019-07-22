function record(){
	var fdata = document.getElementById('form');
	var data = {};
	data['name'] = fdata.elements['name'].value;
	data['email'] = fdata.elements['email'].value;
	data['subject'] = fdata.elements['subject'].value;
	data['message'] = fdata.elements['message'].value;
	
	console.log(data);
}