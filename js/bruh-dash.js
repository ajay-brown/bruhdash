var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array

 
  first: function (arr) {
     return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
   return arr.slice(-1)[0];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr,value) {
 return arr.indexOf(value);
    if (arr.indexOf(value) === -1) {
      return null;
    }
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, value) {
  var revArr = arr.reverse();
  return revArr.indexOf(value);
  if (revArr.indexOf(value) === -1) {
    return null;
  }
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
   arr.pop();
   return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
     return arr.filter(Boolean); //removes all false values via bool
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, num1, num2) {
return arr.slice(num1, num2);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, val){
    if (val === 0) {
      return arr;
    } else if (val === undefined) {
      arr.shift();
      return arr;
    } else {
  arr.splice(0, val);
  return arr;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    if (num === 0) {
      return arr;
    } else if (num === undefined) {
      arr.pop();
      return arr;
    } else {
  arr.splice(-2, num);
  return arr;
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    if (num === 0) {
     arr = [];
     return arr;
    } else if (num === undefined) {
      return arr.splice(0,1);
    } else {
  return arr.splice(0, num);
 
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, num) {
    if (num === 0) {
      arr = [];
      return arr;
     } else if (num === undefined) {
       return arr.splice(-1,1);
     } else {
   return arr.splice(-3, num);
  
     }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {
if (start === undefined && end === undefined) {
  return arr.fill(val);
}  else { 
  return arr.fill(val,start,end);

}
},

  // removes all given values from an array
  pull: function (arr, val) {
 var findIndex = arr.indexOf(val);
 for (var i=0 ; i<arr.length; i++) { 
 arr.splice(findIndex,1);
    }
  return arr;
  },

  // removes elements of an array corresponding to the given indices
 pullAt: function (arr, ind) {
  
  
    for (var i=0 ; i<ind.length; i++) { //looping over all elements of index
      var indexNum =arr.indexOf(ind[i]) //FINDING in arr the index of indices, looping...
      var find = (indexNum + 1); // in place
  arr.splice(find, 1); //removing one arr in indices

       }
      return arr;
      
  },

  // creates an array excluding all the specified values
  without: function(arr, val) {
    
    for (var i=0 ; i<val.length; i++) { 
      var findIndex = arr.indexOf(val[i]);
    arr.splice(findIndex,1);
       }
     return arr;
  },

  // returns an array with specified values excluded
  // .difference (array to inspect, values to exclude)
  difference: function(arr, val) {
    for (var i=0 ; i<arr.length; i++) { 
      var findIndex = arr.indexOf(val[i]);
      console.log(i);
    arr.splice(findIndex,1);
    console.log(arr);
       }
     return arr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
