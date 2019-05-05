find_item=(name)=>{
    var inventar = character.items
    for ( var item in inventar){
        if(inventar[item]){
            if( name == inventar[item].name){
                return item
            }
        }
    }
}
​
prepare_scroll=(name)=>{
    var scroll = find_item(name)
    if(!scroll) {trade_move ({ to: "scrolls", return : true } , function(){
        buy(name, 5)
        })
        scroll = find_item(name)
    }
    return scroll 
}
​
prepare_equip = (name)=>{
    var equip = find_item(name)
    game_log(name)
    if(!equip) {trade_move ({ to: "basics", return : true } , function(){
        buy(name, 1)
        })
        equip = find_item(name)
    }
    return equip
}
​
go_upgrade=()=>{
    if(character.gold > 200000){
        equip = prepare_equip("helmet")
        if (character.items[equip]['level'] < 5){
            scroll = prepare_scroll("scroll0")
            smart_move ({ to: "upgrade", return : true } , function(){
                upgrade(equip, scroll)
            })
        }
    }
​
}