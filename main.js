async function main(baseUrl) {
	// async function require(name) {
	// 	const result = await $.ajax(baseUrl + name + '.js', {
	// 		type: 'Get',
	// 		dataType: "text",
	// 		cache: true,
	// 	});
	// 	console.log(result);
	// 	return result;
	// }
	// import Otwald from baseUrl + name + '.js';
	function require(name) {
		var imported = document.createElement('script');
		imported.src = baseUrl + name + '.js';
		document.head.appendChild(imported);
	}



	let name = window.character.id;

	require('basecharacter');
	require(name.toLowerCase());

	
	console.log(document.head);
	const person = new Otwald();
	console.log(person);


}
export default main;

// loadLink = (url) => {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.open("GET",baseUrl + url + '.js' , true);
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			var script = this.response
// 			eval.apply(window, [script])
// 		}
// 	};
// 	xhttp.send();
// }