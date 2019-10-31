async function main(baseUrl) {
	async function require(name) {
		console.log(baseUrl + name + '.js')
		const result = await $.ajax(baseUrl + name + '.js', {
			type: 'Get',
			dataType: "script",
			cache: true,
		});
		return result;
	}

	let name = window.character.id;
	await require('basecharacter');
	let res = await require(name.toLowerCase());
	console.log(res);
	let person = new window[name];
	person.handle();
	

}
main(baseUrl);