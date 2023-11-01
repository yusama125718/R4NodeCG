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
    if (!newVal) return
    document.getElementById("map").innerText = "NowMap : " + newVal.name
})

nodecg.Replicant('score').on('change', (newVal) => {
    document.getElementById("redscore").innerText = newVal.red
    document.getElementById("bluescore").innerText = newVal.blue
})

nodecg.Replicant('blueAbility').on('change', (newVal) => {
    if (!newVal) return
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
    if (!newVal) return
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
    if (newVal.first.name !== "none"){
        document.getElementById("map1name").innerText = newVal.first.name
    }
    if (newVal.second.name !== "none"){
        document.getElementById("map2name").innerText = newVal.second.name
    }
    if (newVal.third.name !== "none"){
        document.getElementById("map3name").innerText = newVal.third.name
    }
    if (newVal.fourth.name !== "none"){
        document.getElementById("map4name").innerText = newVal.fourth.name
    }
    if (newVal.fifth.name !== "none"){
        document.getElementById("map5name").innerText = newVal.fifth.name
    }
    if (newVal.state){
        $("#banpick").show(2000)
        $("#match").hide(500)
    }else {
        $("#banpick").hide(2000)
        $("#match").show(500)
    }
})

nodecg.Replicant('banpicktype').on('change', (newVal) => {
    document.getElementById("map1type").innerText = newVal.first.type
    document.getElementById("map2type").innerText = newVal.second.type
    document.getElementById("map3type").innerText = newVal.third.type
    document.getElementById("map4type").innerText = newVal.fourth.type
    document.getElementById("map5type").innerText = newVal.fifth.type
})