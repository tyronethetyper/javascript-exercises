const removeFromArray = function(array, remove, ...args) {
    let final_args = [remove];
    if (args.length > 0) {
        final_args.push(...args);
    }

    console.log(`Args are: ${final_args}`);

    for (let arg of final_args) {
        index = array.indexOf(arg);
        console.log(`Index of ${arg}: ${index}`)
        while (index != -1) {
            array.splice(index, 1);
            index = array.indexOf(arg);
        }
    }


    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
