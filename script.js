/*
1. Start with the number 42 and set that equal to `majorKey`
*/
var majorKey = 42;
/*
2. Create condition logic to check if the `majorKey` is great or equal to 53
2-1. If true, add 42 to `majorKey`
2-2. If false, subtract 13 from `majorKey`
*/
if (majorKey >= 53){
  majorKey += 42;
}else{
  majorKey -= 13;
}
/* majorKey = 29
3. Add a the string witha  value of 11 to `majorKey`
*/
majorKey += "11";
/*  majorKey = "2911"
4. Create an array, loop through `majorKey` using `charAt`, set array[i] to each value
*/
var array= [];
for(i=0;i<majorKey.length;i++){
  array.push(majorKey.charAt(i));
}
/*
var array = ["2","9","1","1"]
majorKey = "2911"
5. Remove the first and last values from the array
*/
array.pop();
array.shift();
/*
array = ["9","1"]
majorKey = "2911"

6. Create a new variable. Loop **backwards** through the array and store each value into the new variable, combining each of the values of that array
*/
var newVar = 0;

for(i = array.length-1; i >= 0; i--){
  newVar += array[i];
}
/*
newVar = "19";
array = ["9","1"]
majorKey = "2911"

7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.
*/
majorKey = parseInt(majorKey);
newVar = parseInt(newVar);
/*
majorKey = 2911
newVar = 19
array = ["9","1"]

******* SWITCH PROGRAMMERS *******

8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`
*/
majorKey += newVar;
/*
majorKey = 2930
newVar = 19
array = ["9","1"]

9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
If neither of these are true, set `majorKey` to 2.
*/
if(majorKey < 60) {
  majorKey = 14;
} else if(majorKey == 2930) {
  majorKey = 27;
} else {
  majorKey = 2;
}

/*
majorKey = 27
newVar = 19
array = ["9","1"]

10. Create a while loop that counts down from 10 and increments `majorKey` by 1.
*/
var i=10;
while(i>0) {
  majorKey ++;
  i--;
}
/*

majorKey = 37
newVar = 19
array = ["9","1"]
s
11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
is more than one character in the string. Return `val` and set the `majorKey` to the returned value.
*/

var convertVal = function (val) {
  val = val.toString();
  if (val.length > 1) {
    val = val.substr(1);
    majorKey = val;
  }
}

/*

majorKey = 7
newVar = 19
array = ["9","1"]

12. Call the function.

13. Console log `majorKey`. Create an index.html file, link in this Javascript file. Load in the browser, check the value.
*/

convertVal(majorKey);
console.log(typeof(majorKey));
console.log(majorKey);
/*

14. Your answer should be a string value that equals 7. Is that what you got?
*/
