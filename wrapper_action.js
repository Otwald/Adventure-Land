group_heal = (party) => {

    var patient = []
    party.forEach(function (member) {
        var health = member.hp / member.max_hp;
        if (health < 0.75) {
            game_log(member.name + ' HP : ' + health)
            patient.push(member);
        }
    })

    if (patient.length == 1) {
        if (!in_attack_range(patient[0])) {
            move(
                character.x + (target.x - character.x) / 2,
                character.y + (target.y - character.y) / 2
            );
            // Walk half the distance
        }
        else {
            heal(patient[0])
        }
    }
    else if (patient.length > 1) {
        use_skill('partyheal');
    }
    return patient

}

base_attack = (attack_mode) => {
    loot();

    if (!attack_mode || character.rip || is_moving(character)) return;

    var target = group_target()
    if (target) {
        if (!in_attack_range(target)) {
            move(
                character.x + (target.x - character.x) / 2,
                character.y + (target.y - character.y) / 2
            );
            // Walk half the distance
        }
        else if (can_attack(target)) {
            set_message("Attacking");
            attack(target);
        }
    }
}

group_target = () => {
    if (character.name === "Alrinea") {
        var target = get_targeted_monster();
        if (!target) {
            target = get_nearest_monster({ min_xp: 100, max_att: 30 });
            if (target) change_target(target, true);
            else {
                set_message("No Monsters");
                return;
            }
        }

        return target
    }
    else {
        var leader = get_player("Alrinea")
        for (var id in parent.entities) {
            var e = parent.entities[id];
            if (e['id'] === leader.target) {
                target = e;
            }
        }
        if (!target) {

            move(
                character.x + (leader.x - character.x) / 2,
                character.y + (leader.y - character.y) / 2
            )
            return null

        } else { return target }
    }
}

command_trade = () => {
    var i = 0;
    var items = character.items
    for (x in items) {
        if (items[x] != null) {
            if (items[x]['q']) {
                send_item('Otwald', x, items[x]['q'])
            } else {
                send_item('Otwald', x, null)
            }

        }
    }
}

emergency_check = () => {
    if (safeties && mssince(last_potion) < 600) return
    if (character.hp / character.max_hp < 0.25) {
        use("use_hp");
    }
    if (character.mp / character.max_mp < 0.50) {

        use("use_mp")
    }
}


follow = () => {

    var leader = get_player("Otwald");
    move(leader.real_x, leader.real_y);

}

recall = () => {
    use_skill("use_town");
}
