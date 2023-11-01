nodecg.Replicant('redteam').on('change', (newVal) => {

    document.getElementById("redteam").innerText = newVal.name

    const red = document.getElementById("red_players")
    while(red.lastChild){
        red.removeChild(red.lastChild);
    }

    for (const i in newVal.players){
        const p = document.createElement("h3")
        p.appendChild(document.createTextNode(newVal.players[i]))
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
        p.appendChild(document.createTextNode(newVal.players[i]))
        blue.appendChild(p)
    }
})

nodecg.Replicant('map').on('change', (newVal) => {
    document.getElementById("map").innerText = "NowMap : " + newVal.name
})

nodecg.Replicant('score').on('change', (newVal) => {
    document.getElementById("redscore").innerText = newVal.red
    document.getElementById("bluescore").innerText = newVal.blue
})

nodecg.Replicant('blueAbility').on('change', (newVal) => {
    document.getElementById("blue_cost").innerText = "Cost : " + newVal.cost
    const blue = document.getElementById("blue_abilitys")

    while(blue.lastChild){
        blue.removeChild(blue.lastChild);
    }

    for (const i in newVal.abilitys){
        const img = document.createElement("img")
        img.src = newVal.abilitys[i]
        img.width = 35
        img.height = 56
        img.className = "blueimg"
        blue.appendChild(img)
    }
})

nodecg.Replicant('redAbility').on('change', (newVal) => {
    document.getElementById("red_cost").innerText = "Cost : " + newVal.cost
    const red = document.getElementById("red_abilitys")

    while(red.lastChild){
        red.removeChild(red.lastChild);
    }

    for (const i in newVal.abilitys){
        const img = document.createElement("img")
        img.src = newVal.abilitys[i]
        img.width = 35
        img.height = 56
        img.className = "redimg"
        red.appendChild(img)
    }
})

nodecg.Replicant('banpick').on('change', (newVal) => {
    if (newVal.state){
        $("#banpick").show(2000)
    }else {
        $("#banpick").hide(2000)
    }
})