NationFactory = {};

NationFactory.createNation = function (playerId, name) {

	var attributes = createAttributes();
   	
    return {
    	name: name,
    	owner: playerId,
    	questionProgress: 3,
    	questionsAnswered: [],
    	attributes: attributes,
	    created: new Date()
	};
};

function  createAttributes() {
	
	return {
		goldBonus: 			0,
		coalBonus: 			0,
		ironBonus: 			0,
		foodBonus: 			0,
		woodBonus: 			0,
		populationBonus: 	0,
		defenseBonus:       0,
		offenseBonus: 		0,
		technologyBonus: 	0,
		spyBonus: 			0,
		counterIntelBonus:  0 
	}
}