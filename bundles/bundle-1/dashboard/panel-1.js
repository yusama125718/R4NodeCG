const teams = nodecg.bundleConfig.teams
addteams()

function addteams(){
    for(var i in teams) {
        var red = document.getElementById("red");
        var blue = document.getElementById("blue");
        var option = document.createElement("option");
        option.text = teams[i].name;
        option.value = teams[i].name;
        red.add(option);
        var option = document.createElement("option");
        option.text = teams[i].name;
        option.value = teams[i].name;
        blue.add(option);
    }
}
