
function iterativeLog(array){
  array.forEach(function list(element, index, array){
  console.log(`${index}: ${element}`);
});
  }

  function iterate(callback){
       array = [1,2,3,4,5];
      array.forEach(callback);
      return array;
     }

function doToArray(array, Callback){
  array.forEach(Callback);
  }

function andCallThrough(element, index, array){
  console.log(`${index}: ${element}`);
}
