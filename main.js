// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
loadScript = (name) => {
	return $.ajax('https://cdn.jsdelivr.net/gh/Otwald/Adventure-Land/' + name + '.js', {
		type: 'Get',
		dataType: "script",
		async: false,
		cache: true
	});
}

let name = 'otwald';
loadScript(name)

const otwald = require('https://cdn.jsdelivr.net/gh/Otwald/Adventure-Land/' + name + '.js');

main = (name, party) => {

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

main(name, party);

