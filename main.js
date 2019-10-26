// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
// required = (name) => {
// 	return $.ajax('https://cdn.jsdelivr.net/gh/Otwald/Adventure-Land/' + name + '.js', {
// 		type: 'Get',
// 		dataType: "script",
// 		async: false,
// 		cache: true
// 	});
// }

function loadScriptSync (src) {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/gh/Otwald/Adventure-Land/' + src + '.js';
    s.type = "text/javascript";
    s.async = false;                                 // <-- this is important
    document.getElementsByTagName('head')[0].appendChild(s);
}

loadScriptSync('otwald')
// const party = ['Rukja', 'Alrinea', 'Umeko'];
// const alrinea = required('alrinea');
// // console.log(alrinea)
// // console.log(typeof (alrinea))
// // let otwald = required('otwald');
// // otwald = new otwald();
// let umeko = required('umeko');
// let rukja = required('rukja');
console.log(otwald);
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

