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


	
	let name = window.character.id;
	var imported = document.createElement('script');
	imported.src = baseUrl + name.toLowerCase() + '.js';
	document.head.appendChild(imported);
	// await require('basecharacter');
	// let res = await require(name.toLowerCase());
	// console.log(res);
	let person = new window[name];
	person.handle();
	

}
main(baseUrl);