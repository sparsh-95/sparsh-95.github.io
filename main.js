var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/cover.jpg'){
		myImage.setAttribute ('src','images/cover2.jpg');
	}
	else{
		myImage.setAttribute ('src','images/cover.jpg');
	}
}