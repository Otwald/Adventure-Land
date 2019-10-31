async function main(baseUrl) {
	async function require(name) {
		const result = await $.ajax(baseUrl + name + '.js', {
			type: 'Get',
			dataType: "script",
			cache: true,
		});
		return result;
	}

	let name = window.character.id;
	console.log(baseUrl);
	await require('basecharacter');
	let res = await require(name.toLowerCase());
	console.log(res);
	let person = new $name();
	person.handle();
	

}
main(baseUrl);