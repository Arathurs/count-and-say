/**
* Incomplete solution with error message for future note

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n < 2) {
        return "1";
    } else {
        let previousStr = countAndSay(n-1);
                   let string = "",
                      curr = previousStr[0],
                      count = 1;
        for (let i = 1; i < previousStr.length; i++) {
            if(previousStr[i] === curr) {
                ++count;
            } else {
                string += count + curr;
                curr = previousStr[i];
                count = 1;
                
            }
        }
        
    }
};
/**
* Runtime Error Message:
  Line 11 in solution.js
                      curr = previousStr[0],
                                        ^
  TypeError: Cannot read property '0' of undefined
    Line 11: Char 41 in solution.js (countAndSay)
    Line 9: Char 27 in solution.js (countAndSay)
    Line 35: Char 19 in solution.js (Object.<anonymous>)
    Line 16: Char 8 in runner.js (Object.runner)
    Line 26: Char 26 in solution.js (Object.<anonymous>)
    Line 1200: Char 30 in loader.js (Module._compile)
    Line 1220: Char 10 in loader.js (Object.Module._extensions..js)
    Line 1049: Char 32 in loader.js (Module.load)
    Line 937: Char 14 in loader.js (Function.Module._load)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
  Last executed input:    4
**/