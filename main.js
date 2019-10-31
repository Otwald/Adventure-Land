async function main(resp) {
	async function require(baseUrl) {
		const result = await $.ajax(baseUrl + name + '.js', {
			type: 'Get',
			dataType: "script",
			cache: true,
		});
		return result;
	}

	async function test() {
		const result = await $.ajax('https://adventure.land/api/servers_and_characters', {
			type: 'Get',
			dataType: "json",
			cache: true,
		});
		return result;
	}
	let name = character.name;

	const res = await require(name.toLowerCase());
	console.log(res);
	console.log(typeof (res));
	let person = new $name();
	person.handle();
	let test = await test();
	console.log(test);
	

}
main(resp);