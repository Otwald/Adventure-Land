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
	require(name.toLowerCase());
	console.log(document.head);
	const person = Otwald;
	console.log(person);


}
main(baseUrl);