/**
 * 
 */
if(navigator.platform.toLowerCase().indexOf("win") !== -1 ) {
	var windows_script = document.createElement('script');
	windows_script.setAttribute('src','js/lib/winstore-jscompat-master/winstore-jscompat.js');
	document.head.appendChild(windows_script);
}