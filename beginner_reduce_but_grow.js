//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


//Solution:

function grow(x){

    let array = x;
    const res = array.reduce((acc, rec) => acc * rec);

return res;

}











