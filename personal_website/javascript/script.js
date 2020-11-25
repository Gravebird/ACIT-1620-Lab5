
var courseList = new Array();
courseList[0] = {code: "ACIT 1620", name: "Web Fundamental Technologies"};
courseList[1] = {code: "ACIT 1515", name: "Scripting for IT"};
courseList[2] = {code: "ACIT 1630", name: "Database Systems"};

function getInput() {
  var code = "invalid";
  while (!isInt(code)) {
    code = window.prompt("Enter a 4 digit course code");
    if (!isInt(code)) {
       console.log(code + " is not a valid input.");
    }
  }
  return code;
}

function isInt(value) {
    return !isNaN(value) &&
          parseInt(Number(value)) == value &&
          !isNaN(parseInt(value, 10)) &&
          value.toString().length == 4;
 }
