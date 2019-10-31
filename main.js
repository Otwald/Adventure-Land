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
	let res = await require(name.toLowerCase());
	console.log(res);
	let person = new name();
	person.handle();
	

}
main(resp);