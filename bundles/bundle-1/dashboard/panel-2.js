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
        if (i == null) continue
        const red = document.getElementById("teams")
        const roption = document.createElement("option")
        roption.text = teams[i].name;
        roption.value = teams[i].name;
        red.add(roption);
    }
}