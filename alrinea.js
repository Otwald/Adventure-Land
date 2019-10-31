class Alrinea extends BaseCharakter {
	handle() {
		console.log('before register');
		super.registerAtMerchant();
		// var command = null
		// var old_com = null
		// setInterval(function () {
		// 	if (character.party == 'Otwald') {
		// 		if (old_com != voice_command()) {
		// 			command = voice_command();
		// 			old_com = command;
		// 		}
		// 		emergency_check()
		// 		switch (command) {
		// 			case 'fight':
		// 				base_attack(true);
		// 				break;
		// 			case 'follow':
		// 				follow();
		// 				break;
		// 			case 'stop':
		// 				command = null;
		// 				break;
		// 			case 'gold':
		// 				send_gold('Otwald', character.gold);
		// 				command = null;
		// 				break;
		// 			case 'trade':
		// 				command_trade()
		// 				command = null;
		// 				break;
		// 			case 'return':
		// 				recall()
		// 				command = null;
		// 				break;
		// 		}
		// 	} else { pm.rejoin_party() }
		// }, 1000 / 4);
	};
}