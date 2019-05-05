import party_managment from './party_managment';
const pm = party_managment;

export default class umeko {
	handle = (party) => {
		var party_obj = get_party(party);
		var command = null
		var old_com = null
		setInterval(function () {
			if (character.party == 'Otwald') {
				var open = group_heal(party_obj)
				if (old_com != voice_command()) {
					command = voice_command();
					old_com = command;
				}
				emergency_check()
				switch (command) {
					case 'fight':
						open = (open.length == 0 ? true : false);
						if (open) {
							base_attack(open);
						}
						break;
					case 'follow':
						follow();
						break;
					case 'stop':
						command = null;
						break;
					case 'gold':
						send_gold('Otwald', character.gold);
						command = null;
						break;
					case 'trade':
						command_trade()
						command = null;
						break;
					case 'return':
						recall()
						command = null;
						break;
				}
			} else { pm.rejoin_party() }
		}, 1000 / 4);
	};
}