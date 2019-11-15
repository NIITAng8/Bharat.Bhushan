console.log("======================= Program -1 : Print text Hello World =======================");
let message: string="Hello World";
console.log(message);

console.log("");
console.log("======================= Program -2 : To check given year is a Leap Year =======================");
var Year=2020;
function LeapYear(Year)
{
return ((Year % 4 == 0) && (Year % 100 != 100) || (Year % 400 == 0));
}
if(LeapYear(Year)==true)
{
console.log(Year + " is a Leap Year.");
}
else
{
console.log(Year + " is not a Leap Year.");
}

console.log("");
console.log("======================= Program -5 : To Reverse a String =======================");
let sample:string="Angular training session";
let reversestring=function(username){return username.split("").reverse().join("");};
console.log(reversestring(sample));

console.log("");
console.log("======================= Program -4 : Count occurrence of each word in a phrase =======================");
let Count_Occurence = (phrase_text:string) => {
    let words_list = phrase_text.split(' ');
    let i:number = 0;
    let word_occrnc_map = new Map<string,number>();
    for(; i < words_list.length; i++)
    {
            word_occrnc_map.has(words_list[i]) == true ? word_occrnc_map.set(words_list[i],word_occrnc_map.get(words_list[i]) + 1)
        :word_occrnc_map.set(words_list[i],1);
    }
    console.log(word_occrnc_map);
}
Count_Occurence("Delhi city is the most polluted city in India."); 