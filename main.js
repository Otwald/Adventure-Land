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

	function require(name) {
		var imported = document.createElement('script');
		imported.src = baseUrl + name + '.js';
		document.head.appendChild(imported);
	}



	let name = window.character.id;

	require('basecharacter');
	let res = require(name.toLowerCase());
	console.log(window[name]);
	// let person = new window[name];
	// person.handle();


}
main(baseUrl);