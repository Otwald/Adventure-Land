// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!
export default class party_managment {

    

    rejoin_party = () => {
        if (character.party != 'Otwald') {
            parent.socket.emit("party", { event: "leave" });
            accept_party_invite('Otwald');
        }
    }

    party_check = (party) => {
        party.forEach(function (key) {
            if (key.party == undefined) {
                accept_party_request(key.name);
            }
        })
    }

    get_party = (party) => {
        var out = []

        party.forEach(function (key) {
            out.push(get_player(key));
        })
        return out
    }
}