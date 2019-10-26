// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
async function loadScript (name){
	const result = await $.ajax('https://cdn.jsdelivr.net/gh/Otwald/Adventure-Land/' + name + '.js', {
		type: 'Get',
		dataType: "script",
		cache: true
	});
	return result
}

let name = 'otwald';
// loadScript(name)

const otwald = loadScript(name).then((data) => {return data});
console.log(otwald);
console.log(typeof(otwald));

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

