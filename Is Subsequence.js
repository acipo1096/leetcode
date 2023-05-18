/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   
   // if the length of s is greater than the length of t, this cannot be a subsequence
   if (s.length > t.length) {
       return false;
   }

   let subsequence = 0;
   for (let i = 0; i < t.length; i++){
       if(s[subsequence] === t[i]){
           // if s[subsequence] matches an instance of t[i], increment subsequence
           subsequence++;
       }
   }
   return subsequence === s.length
};

// My attempt, does not pass all cases

// if (s != "" && t == ""){
//         return false;
//     }

//     for (let i = 0; i < t.length; i++){
//         let problemChar = ""
//         let count = 0

//         // If a character in the new string is not found in the main string
//         if(t.charAt(i) != s.charAt(i)){
//             problemChar = s.charAt(i)

//             // We compare the "problemChar" with each character in the main string
//             // Each time there isn't a match, we increment a count by 1
//             // If the count reaches the length of the main string, it means the subsequence was formed by disturbing the relative positions of the remaining characters

//             for (let j = 0; j < t.length; j++){
//                 if(problemChar != t.charAt(j)){
//                     count++;
//                 }
//             }
//             if (count == t.length && problemChar != ''){
//                 return false;
//             }
//             else {
//                 count = 0;
//             }
//         }

        
//     }

//     return true;