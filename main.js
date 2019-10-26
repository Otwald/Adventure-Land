// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
async function loadScript(baseUrl) {
	const result = await $.ajax(baseUrl, {
		type: 'Get',
		dataType: "script",
		cache: true
	});
	return result
}

let name = 'otwald';
// loadScript(name)

function getHash() {
	const result = $.ajax('https://api.github.com/repos/Otwald/Adventure-Land/commits/master', {
		type: 'Get',
		dataType: "json",
		cache: true,
		async: false
	});
	return result
}

var resp = getHash()
// .then((data) => {
// 	return data
// })

const baseUrl = 'https://raw.githack.com/Otwald/Adventure-Land/'
	+ resp + '/' + name + '.js'
console.log(resp)



const otwald = loadScript(baseUrl).then((data) => {
	console.log(data)
	return data
});
main = (name, party = []) => {

	//base_attack(true);
	switch (name) {
		case 'Alrinea':
			game_log('Alrinea loop');
			alrinea.handle();
			break;
		case 'Otwald':
			game_log('Otwald loop');
			otwald.handle(party);
			break;
		case 'Umeko':
			game_log('Umeko loop');
			umeko.handle(party);
			break;
		case 'Rukja':
			game_log('Rukja loop');
			rukja.handle();
			break;
	}
	performance_trick();

} // Loops every 1/4 seconds.

main(name);