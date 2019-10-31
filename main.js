async function main(resp) {
	async function require(baseUrl) {
		const result = await $.ajax(baseUrl + name + '.js', {
			type: 'Get',
			dataType: "script",
			cache: true,
		});
		return result;
	}

	let name = window.character.id;
	console.log(name)
	await require('basecharacter');
	await require(name.toLowerCase());
	let person = new $name();
	console.log(name)
	person.handle();
	

}
main(resp);