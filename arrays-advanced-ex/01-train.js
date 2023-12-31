function train (array){
    let wagons = array[0].split(' ').map(Number);
    let maxCapacity = Number(array[1]);

    for (i = 2; i < array.length; i++) {
        let command = array[i];
        let tokens = command.split(' ');
        
        if (tokens[0] == 'Add') {
            let passengers = Number(tokens[1]);
            wagons.push(passengers);
        } else {
            let passengers = Number(tokens[0]);

            for (let index = 0; index < wagons.length; index++) {

                if (wagons[index] + passengers <= maxCapacity) {
                    wagons[index] += passengers;
                    break;
                }
            }                }
        } console.log(wagons.join(' '));
        }
    

train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
//train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);