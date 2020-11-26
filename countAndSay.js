/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n < 2) {
        return "1";
    } else {
        let previousStr = countAndSay(n-1);
                   let string =  "",
                      curr = "",
                      count = 0;
      
        
    }
};

var say = function(cb) {
     let string =  "",
           curr = "",
          count = 1;
    for (let i = 0; i < cb.length; i++) {
        if (!curr) {
            curr = cb[i];
        }
        if(cb[i] === curr) {
            ++count;       
        } else {
            string += count + curr;
            curr = cb[i];
            count = 1;
            
        }
    }
}