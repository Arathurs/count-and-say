/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
    if(n < 2) return "1";
    return say(countAndSay(n-1));
};

// Helper Function which "says" the count string value
// which is returned by countAndSay()
function say (cb) {
    let string =  "",
          curr = cb[0],
         count = 1;
    for (let i = 1; i < cb.length; i++) {
        if(cb[i] === curr) {
            ++count;
            continue;
        }
        string = string + '' + count + curr;
        curr = cb[i];
        count = 1;
    }
    return string =  string + '' + count + curr;
}