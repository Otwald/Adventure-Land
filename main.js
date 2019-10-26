async function main(resp) {


	async function loadScript(baseUrl) {
		const result = await $.ajax(baseUrl, {
			type: 'Get',
			dataType: "script",
			cache: true,
		});
		return result;
	}

	let name = 'otwald';


	const baseUrl = 'https://raw.githack.com/Otwald/Adventure-Land/'
		+ resp + '/' + name + '.js'

	const res = await loadScript(baseUrl);
	console.log(res);
	// const person = new Otwald();
	// console.log(person);
	// const response = loadScript(baseUrl);
	// console.log(response);
	// var person = '"(' + response.responseText + ')"'
	// console.log(person);
	// console.log(eval(person))
	// console.log(person);
	// otwald.handle()
	// var person = JSON.parse(otwald.responseText);
	// person.handle();

	// var person = new otwald();
	// person.handle();
	// main = (name, party = []) => {

	// 	//base_attack(true);
	// 	switch (name) {
	// 		case 'Alrinea':
	// 			game_log('Alrinea loop');
	// 			alrinea.handle();
	// 			break;
	// 		case 'Otwald':
	// 			game_log('Otwald loop');
	// 			otwald.handle(party);
	// 			break;
	// 		case 'Umeko':
	// 			game_log('Umeko loop');
	// 			umeko.handle(party);
	// 			break;
	// 		case 'Rukja':
	// 			game_log('Rukja loop');
	// 			rukja.handle();
	// 			break;
	// 	}
	// 	performance_trick();

	// } // Loops every 1/4 seconds.
}
main(resp);