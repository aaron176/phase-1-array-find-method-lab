// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
function superbowlWin(year, result){
for(const user of year){
    if(user.result === result){
     console.log(user.year);
    }
}
}
superbowlWin(record, "W");
