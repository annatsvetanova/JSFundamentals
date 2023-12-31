function pirates (input){
    let targets = {};

    let command = input.shift();


    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);
    
        if (city in targets) {
            
            targets[city].population += population;
            targets[city].gold += gold;

        } else {
            
            targets[city] = {
                population,
                gold,
            };
        }

        command = input.shift();
    }

    let line = input.shift();

    while(line != 'End') {
        let tokens = line.split('=>')
        let action = tokens[0];
        let city = tokens[1];
        let target = targets[city];
        


        switch (action) {
            case 'Plunder':
                let pplKilled = Number(tokens[2]);
                let goldStolen = Number(tokens[3]);

                target.population -= pplKilled;
                target.gold -= goldStolen;
                console.log(`${city} plundered! ${goldStolen} gold stolen, ${pplKilled} citizens killed.`);  

                if(target.population <= 0 || target.gold <= 0) {
                    delete targets[city];
                    console.log(`${city} has been wiped off the map!`);
                }
                                        
            break;
            case 'Prosper':
                let goldIncrease = Number(tokens[2]);
                if(goldIncrease < 0) {
                    console.log('Gold added cannot be a negative number!');
                    break;
                }else {
                    target.gold += goldIncrease;
                    console.log(`${goldIncrease} gold added to the city treasury. ${city} now has ${target.gold} gold.`);
                }
               
            break;
              
        }


        line = input.shift();
    }
    let citiesAfterMath = Object.entries(targets);

    if(citiesAfterMath.length > 0) {
        console.log(`Ahoy, Captain! There are ${citiesAfterMath.length} wealthy settlements to go to:`);
        

        for (let [city, target] of citiesAfterMath) {
            console.log(`${city} -> Population: ${target.population} citizens, Gold: ${target.gold} kg`);
        }

        }else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);

}
}
// pirates((["Tortuga||345000||1250",
// "Santo Domingo||240000||630",
// "Havana||410000||1100",
// "Sail",
// "Plunder=>Tortuga=>75000=>380",
// "Prosper=>Santo Domingo=>180",
// "End"]));
pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]));