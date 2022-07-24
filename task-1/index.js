
Array.prototype.customMap = function (callback) {

    let result = [];
    for (let i = 0; i < this.length; i++) {
        
        result[i] = callback(this[i], i, this)
    }
    return result;

}

Array.prototype.customReduce = function (callback, initialValue)  {
    
    let i = 0;
    if (arguments.length>= 2) {
        result = initialValue;
    } else {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        
        result = callback(result, this[i], i, this)
    }
    return result;
};

Array.prototype.customFilter = function (callback)  {

    let result = [];
    for (let i = 0; i < this.length; i++) {
        
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}

Array.prototype.customForEach = function (callback)  {

for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
}
}

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

///1

const sumString = Object.keys(subjects).customReduce(function (accum, value) {
    return accum + `, ` + value;
});
console.log(sumString);

//2

let sumStudents = Object.values(subjects).customReduce((accum, value) => {
    return accum + value.students;
},0);

let sumTeachers = Object.values(subjects).customReduce((accum, value) => {
    return accum + value.teachers;
},0);
console.log(sumStudents)
console.log(sumTeachers)

// 3

let allStudents = sumStudents / Object.keys(subjects).length;
console.log(allStudents);

// 4

let obj = Object.values(subjects)
console.log(obj);

// 5

let customObj = obj.customMap((el, i) => {
    return {index: i, value: el.teachers}
})

customObj.sort((a,b) =>  b.value - a.value) 

let sortObj = customObj.customMap((el) => Object.keys(subjects)[el.index])
console.log(sortObj);