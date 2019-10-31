class BaseCharakter {

    registerAtMerchant() {
        let member = parent.X.characters.forEach((char) => {
            if (char.type == 'merchant' && char.online != 0) {
                return char.name
            }
        });
        if (member && (window.character.id == member)) {
            private_say(member, 'Online');
        }
    }

    listenForCharacter() {
        if (window.partybuild === undefined) {
            window.partybuild = []
        }
        window.game_chats.forEach((msg) => {
            if (parent.X.characters.forEach((char) => {
                if (char.name == msg[0]) {
                    return true;
                }
            })) {
                if (window.partybuild.include(msg[0]) === false) {
                    window.partybuild.push(msg[0]);
                }
            }
        })
    }
}

export default BaseCharakter;