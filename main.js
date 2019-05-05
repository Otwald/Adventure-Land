// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
const name = window.character.name;
window.game_log('Alrinea loop');
const party = ['Rukja', 'Alrinea', 'Umeko'];
var alrinea = test('alrinea');
var otwald = test('otwald');
var umeko = test('umeko');
var rukja = test('rukja');
// import otwald from './otwald';
// import umeko from './umeko';
// import rukja from './rukja';
// load_code("party_build");
// load_code("wrapper_action");
// load_code("chat_command");
// load_code(2);
// load_code(3);
// load_code(4);
// load_code(5);

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

test = (name) =>{
	return $.ajax('https://raw.githubusercontent.com/Otwald/Adventure-Land/master/' + name, {
		type: 'Get',
		dataType: "script",
		async: false,
		cache: true
	});
}
