// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
function loadScript(baseUrl) {
	return $.ajax(baseUrl, {
		type: 'Get',
		dataType: "json",
		cache: true,
		async: false
	});
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

const baseUrl = 'https://raw.githack.com/Otwald/Adventure-Land/'
	+ resp.responseJSON.sha + '/' + name + '.js'

const otwald = loadScript(baseUrl);
console.log(otwald);
otwald.handle()
var person = new otwald();

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

// main(name);