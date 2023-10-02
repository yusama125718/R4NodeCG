const teams = nodecg.bundleConfig.teams
addteams()

function addteams(){
    for(const i in teams) {
        const red = document.getElementById("red");
        const blue = document.getElementById("blue");
        const roption = document.createElement("option");
        roption.text = teams[i].name;
        roption.value = teams[i].name;
        red.add(roption);
        const boption = document.createElement("option");
        boption.text = teams[i].name;
        boption.value = teams[i].name;
        blue.add(boption);
    }
}