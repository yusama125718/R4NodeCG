nodecg.Replicant('redteam').on('change', (newVal) => {

    document.getElementById("redteam").innerText = newVal.name

    const red = document.getElementById("red_players")
    while(red.lastChild){
        red.removeChild(red.lastChild);
    }

    for (const i in newVal.players){
        const p = document.createElement("h3")
        p.appendChild(document.createTextNode(newVal.players[i].name))
        red.appendChild(p)
    }
})

nodecg.Replicant('blueteam').on('change', (newVal) => {
    document.getElementById("blueteam").innerText = newVal.name

    const blue = document.getElementById("blue_players")
    while(blue.lastChild){
        blue.removeChild(blue.lastChild);
    }

    for (const i in newVal.players){
        const p = document.createElement("h3")
        p.appendChild(document.createTextNode(newVal.players[i].name))
        blue.appendChild(p)
    }
})