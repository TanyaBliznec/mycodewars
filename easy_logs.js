//Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: 
//Solution:

function logs(x , a, b){
    let log1 = Math.log(a)/Math.log(x);
    let log2 = Math.log(b)/Math.log(x);
    return log1+log2;
    }
