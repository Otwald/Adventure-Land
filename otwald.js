import party_managment from './party_managment';
const pm = party_managment;
export default class otwald {
	constructor(){
		
	}

	find_item = (name) => {
		var inventar = character.items
		for (var item in inventar) {
			if (inventar[item]) {
				if (name == inventar[item].name) {
					return item
				}
			}
		}
	}

	prepare_scroll = (name) => {
		var scroll = find_item(name)
		if (!scroll) {
			smart_move({ to: "scrolls", return: true }, function () {
				buy(name, 10)
			})
			scroll = find_item(name)
		}
		return scroll
	}

	prepare_equip = (name) => {
		var equip = find_item(name)
		if (!equip) {
			smart_move({ x: -89, y: 16, return: true }, function () {
				buy(name, 1)
			})
			equip = find_item(name)
		}
		return equip
	}
	do_upgrade = (equip, sname) => {
		scroll = prepare_scroll(sname)
		if (!scroll) return
		smart_move({ to: "upgrade", return: true }, function () {
			upgrade(equip, scroll)
		})
	}

	go_upgrade = (item) => {
		if (character.gold > 200000) {
			equip = prepare_equip(item)
			if (!equip) return
			if (character.items[equip]['level'] < 7) {
				do_upgrade(equip, "scroll0")
			}
			else if (character.items[equip]['level'] < 8) {
				do_upgrade(equip, "scroll1")
			}
			else {
				game_log(item_value(character.items[equip]))
				return true
			}
		}
	}


	handle = (party) => {
		var party_obj = pm.get_party(party);
		//var sell = ["helmet","shoes","gloves","pants", "coat", "blade", "claw", "staff",
		//"bow","wshield"]
		var sell = ["helmet", "shoes", "gloves", "pants", "coat", "blade", "claw", "staff"]
		var upgrade = true
		var item = null
		setInterval(function () {
			pm.party_build()
			if (upgrade) {
				if (!is_moving(character)) {
					if (!item) { item = sell.pop() }
					(go_upgrade(item) ? item = null : "");
					if (sell.length == 0) { upgrade = false }
				}
			}


			var chat = parent.game_chats;
			var chat = chat[chat.length - 1];
			if (chat) {
				if (chat[0] !== "Otwald") {
					return parent.party_say("fight")
				}
			}
			pm.party_build()

		}, 1000 / 2);
	};
}