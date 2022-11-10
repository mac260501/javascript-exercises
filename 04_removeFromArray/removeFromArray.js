const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    let found = false;
    if (theArgs.length == 0)
    {
        return array;
    }
    else
    {
        array.forEach((item) => {
            if (!theArgs.includes(item))
            {
                newArray.push(item);
            }
        })
        // for (const value of array)
        // {
        //     for (const arg of theArgs)
        //     {
        //         if (value === arg)
        //         {
        //             found = true;
        //             break;
        //         }
        //     }
        //     if(!found)
        //     {
        //         newArray.push(value);
        //     }
        //     found = false;
        //}
        return newArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
