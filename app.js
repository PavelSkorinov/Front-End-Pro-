var arr = [1, 2, 3, 4];
function map(array, mapFn) {
    var resultArray = [];
    for(var i = 0; i < array.length; i++) {
    var callback = mapFn(array[i], i, array)  
        resultArray.push(callback)
    };
    return resultArray;
}
  
//   var res = map(arr, function(el) {
//     return el * 2
//   })
//   console.log(res);


var arr2 = [1, 2, 3, 4];
function filter(array, filterFn) {
    var resultArray = [];
    for(var i = 0; i < array.length; i++) {
        var callback = filterFn(array[i], i, array)
        if(callback) {
            resultArray.push(array[i])
        }  
    }
    return resultArray;
}

//   var res = filter(arr, function(el) {
//     return el % 2 === 0; 
//   })
//   console.log(res)



const notification = [
    {
        date: '31/07/2019',
        msg: 'Some message here'
    },
    {
        date: '15/11/2017',
        msg: 'And some message here'
    },
    {
        date: '15/11/2017',
        msg: 'And also some message here'
    },
    {
        date: '31/07/2019',
        msg: 'Last message here'
    }
]

function groupByMsg(arr) {
    return arr.reduce(function(result, el) {
  var date = el.date;
  if (!(date in result)) {
    result[date] = [];
  }
  result[date].push(el);
  return result;
}, {});
} 
  
// var res = groupByMsg(notification);
// console.log(res);


  

  