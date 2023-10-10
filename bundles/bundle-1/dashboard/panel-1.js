var api_url = nodecg.bundleConfig.api; //生成したAPIのURLを指定

const teams = []
fetch(api_url)
.then(function (fetch_data) {
    return fetch_data.json()
})
.then(function (json) {
    for (const i in json) {
        if (json[i] == null) continue;
        teams.push(json[i])
    }
})
.then(function(){addteams()})

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