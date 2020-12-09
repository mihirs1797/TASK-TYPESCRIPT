//chunk
function chunkOperation(array, size) {
    if (size === void 0) { size = 1; }
    var arrayChunks = [];
    for (var i = 0; i < array.length; i += size) {
        var arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
    }
    console.log("chunks output is " + arrayChunks);
}
chunkOperation(['a', 'b', 'c', 'd'], 2);
// sum
function sumOperation(arr) {
    var sum = 0;
    arr.forEach(function (element) {
        sum += element;
    });
    console.log("Sum is " + sum);
}
sumOperation([2, 4, 6, 8]);
//reduce 
function reduceOperation(arrayInput, func, initial) {
    var result = initial;
    if (Array.isArray(arrayInput)) {
        arrayInput.forEach(function (element) {
            result = func(result, element);
        });
    }
    else {
        for (var key in arrayInput) {
            result = func(result, arrayInput[key], key);
        }
    }
    return result;
}
var res = reduceOperation([1, 2], function (sum, n) {
    return sum + n;
}, 0);
console.log("Reduce result is " + res);
//find
var obj = [
    { 'user': 'ravikiran', 'age': 36, 'active': true },
    { 'user': 'Henry', 'age': 30, 'active': false },
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 30, 'active': false },
];
function customFind(inputArray, obj) {
    var result;
    inputArray.forEach(function (user, index, arr) {
        if (typeof obj === 'function') {
            if (obj(user)) {
                result = user;
                arr.length = index + 1;
            }
        }
        else if (Array.isArray(obj)) {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj[0]) !== -1) {
                if (user[obj[0]] === obj[1]) {
                    result = user;
                    arr.length = index + 1;
                }
            }
        }
        else if (typeof obj === 'object') {
            var userKeys_1 = Object.keys(user);
            var objKeys = Object.keys(obj);
            var bool_1 = true;
            objKeys.forEach(function (objKey) {
                if (userKeys_1.indexOf(objKey) !== -1) {
                    bool_1 = bool_1 && (user[objKey] === obj[objKey]);
                }
            });
            if (bool_1) {
                result = user;
                arr.length = index + 1;
            }
        }
        else {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj) !== -1) {
                result = user;
                arr.length = index + 1;
            }
        }
    });
    return result;
}
console.log(customFind(obj, function (o) { return !o.active; }));
//filter
var users_3 = [
    { 'user': 'Mihir', 'age': 23, 'active': true },
    { 'user': 'Rahul', 'age': 30, 'active': false },
    { 'user': 'Ramesh', 'age': 36, 'active': false },
    { 'user': 'Alfred', 'age': 30, 'active': false },
];
function customFilter(inputArray, obj) {
    var result = [];
    inputArray.forEach(function (user, index, arr) {
        if (typeof obj === 'function') {
            if (obj(user)) {
                result.push(user);
            }
        }
        else if (Array.isArray(obj)) {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj[0]) !== -1) {
                if (user[obj[0]] === obj[1]) {
                    result.push(user);
                }
            }
        }
        else if (typeof obj === 'object') {
            var userKeys_2 = Object.keys(user);
            var objKeys = Object.keys(obj);
            var bool_2 = true;
            objKeys.forEach(function (objKey) {
                if (userKeys_2.indexOf(objKey) !== -1) {
                    bool_2 = bool_2 && (user[objKey] === obj[objKey]);
                }
            });
            if (bool_2) {
                result.push(user);
            }
        }
        else {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj) !== -1) {
                result.push(user);
            }
        }
    });
    return result;
}
console.log(customFilter(users_3, function (o) { return o.active; }));
