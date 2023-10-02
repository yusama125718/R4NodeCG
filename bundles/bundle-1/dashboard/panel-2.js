const teams = nodecg.bundleConfig.teams
addteams()

function addteams(){
    for(const i in teams) {
        const red = document.getElementById("teams")
        const roption = document.createElement("option")
        roption.text = teams[i].name;
        roption.value = teams[i].name;
        red.add(roption);
    }
}