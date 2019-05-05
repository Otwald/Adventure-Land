// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
const name = character.name;
const party = ['Rukja', 'Alrinea', 'Umeko'];
var name = require('./'+name);
load_code("party_build");
load_code("wrapper_action");
load_code("chat_command");
load_code(2);
load_code(3);
load_code(4);
load_code(5);

loadLink(base_url);

main = (name, party) => {

	//base_attack(true);
	switch (name) {
		case 'Alrinea':
			game_log('Alrinea loop2');
			name.alrinea();
			break;
		case 'Otwald':
			game_log('Otwald loop');
			name.otwald(party);
			break;
		case 'Umeko':
			game_log('Umeko loop');
			name.umeko(party);
			break;
		case 'Rukja':
			game_log('Rukja loop');
			name.rukja();
			break;
	}
	performance_trick()

} // Loops every 1/4 seconds.

main(name, party);