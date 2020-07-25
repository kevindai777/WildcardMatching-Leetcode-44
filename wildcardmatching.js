//Objective is to find out whether a string and pattern match. The pattern can have
//'?', which represents any character, and '*', which represents any sequence of characters,
//even an empty sequence

let s = "adceb", p = "*a*b"


//O(s + p) solution where s and p are the lengths of the string and pattern respectively.
//We use a two pointer approach where we move each pointer based on the character that is passed

let sPoint = 0
let pPoint = 0
let match = 0
let starPoint = -1

while (sPoint < string.length) {
    //Move both pointers if a '?' is passed or if their characters match
    if (pPoint < pattern.length && (pattern[pPoint] == '?' || pattern[pPoint] == string[sPoint])) {
        pPoint++
        sPoint++
    //Start moving the asterick pointer
    //The 'match' pointer keeps track of where we are in the string
    } else if (pPoint < pattern.length && pattern[pPoint] == '*') {
        starPoint = pPoint
        match = sPoint
        pPoint++
    //We move the pattern pointer up to where the star pointer is
    //We move the match pointer 
    //We move the string pointer up to where the match pointer is
    } else if (starPoint != -1) {
        pPoint = starPoint + 1
        match++
        sPoint = match
    } else {
        return false
    }
}

//The string pointer is exhausted, and we have a '*' that can match an empty sequence
while (pPoint < pattern.length && pattern[pPoint] == '*') {
    pPoint++
}

return pPoint == pattern.length