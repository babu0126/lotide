const middle = function(array){
  let length = array.length;
  let result = [];
  if(length % 2 !== 0) {
    result.push(array[(length-1)/2]);
    return result;
  }
    else if (length <= 2) return [];
    else return array.slice((length/2)-1,(length/2)+1);
};



module.exports = middle;
