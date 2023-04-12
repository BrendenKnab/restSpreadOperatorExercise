//function filterOutOdds() {
//    var nums = Array.prototype.slice.call(arguments);
//    return nums.filter(function(num) {
//      return num % 2 === 0
//    });
//  }

const filterOutOdds = (...nums) => nums.filter((val) => val % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (array, ...nums) => [...array, ...nums.map((val) => val*2)];

const removeRandom = (...items) => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
};

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

function removeKey(obj, key){
    delete obj[key];
    return obj;
};

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key]: val});