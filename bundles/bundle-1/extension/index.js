module.exports = function (nodecg) {
	const banpick = {
		state: false,
		first: {
			name: "none",
			index: 0
		} ,
		second: {
			name: "none",
			index: 0
		} ,
		third: {
			name: "none",
			index: 0
		} ,
		fourth: {
			name: "none",
			index: 0
		} ,
		fifth: {
			name: "none",
			index: 0
		}
	}

	const BanPickRep = nodecg.Replicant('banpick')
	BanPickRep.value = banpick

	const banpicktype = {
		state: false,
		first: {
			type: "RedBAN",
			index: 0
		} ,
		second: {
			type: "BlueBAN",
			index: 2
		} ,
		third: {
			type: "RedPICK",
			index: 1
		} ,
		fourth: {
			type: "BluePICK",
			index: 3
		} ,
		fifth: {
			type: "Final",
			index: 4
		}
	}

	const TypeRep = nodecg.Replicant('banpicktype')
	TypeRep.value = banpicktype

	const score = {
		red : 0,
		blue : 0
	}

	const ScoreRep = nodecg.Replicant('score')
	ScoreRep.value = score
}


