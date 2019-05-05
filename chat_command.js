
voice_finder=()=>{
	
	
	var chat = parent.game_chats;
	var chat = chat[chat.length -1];
	if(chat){
		if(chat[0] === "Otwald"){
			return message = chat[1]
		}
	}
	
}

voice_command=()=>{		
	var voice = voice_finder();
	const command = ['fight','follow','return','trade','stop','gold']
	var out = null
	if (voice){
		command.forEach(function(key){
			if(key == voice){
				out = key;
				
			}
		})
	}
	return out;
			
}