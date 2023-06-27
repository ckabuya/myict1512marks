  
function calculatePercentage() {
// Get marks for each assessment
  const mark1 = parseInt(document.getElementById("mark1").value);
  const mark2 = parseInt(document.getElementById("mark2").value);
  const mark3 = parseInt(document.getElementById("mark3").value);
  const mark4 = parseInt(document.getElementById("mark4").value);
  const mark5 = parseInt(document.getElementById("mark5").value);
  const mark6 = parseInt(document.getElementById("mark6").value);
  const mark7 = parseInt(document.getElementById("mark7").value);
  const mark8 = parseInt(document.getElementById("mark8").value);
  const mark9 = parseInt(document.getElementById("mark9").value);
  const mark10 = parseInt(document.getElementById("mark10").value);
  const mark11 = parseInt(document.getElementById("mark11").value);
  const mark12 = parseInt(document.getElementById("mark12").value);
  const mark13 = parseInt(document.getElementById("mark13").value);
  const mark14 = parseInt(document.getElementById("mark14").value);
  const mark15 = parseInt(document.getElementById("mark15").value);
  const mark16 = parseInt(document.getElementById("mark16").value);
  // Calculate total weightage
  const totalWeight = 100;/* add weights of other assessments */;

  // Calculate current percentage
  const currentPercentage = ((mark1 * 3) + (mark2 * 3) + (mark3 * 10) + (mark4 * 2) + (mark5 * 3) + (mark6 * 3) + (mark7 * 10)+ (mark8 * 2) + (mark9 * 3) + (mark10 * 3)+ (mark11 * 10) + (mark12 * 2) + (mark13 * 3)+ (mark14 * 3) + (mark15 * 10) + (mark16* 30))/ totalWeight;

  // Display current percentage
  const result = document.getElementById("result");
  const resultTop = document.getElementById("resultTop");
  let msg = "Current Percentage: " + currentPercentage.toFixed(2) + "%";
  result.innerHTML = msg;
  resultTop.innerHTML = msg;
  // Check if the student passed
  if (currentPercentage >= 50) {
	result.style.color = "darkgreen";
	resultTop.style.color = "darkgreen";
    result.innerHTML += " - Passed!";
	resultTop.innerHTML += " - Passed!";
  } else {
	 msg =" - Not Passed." +(50 - currentPercentage).toFixed(2)+ "% Remaining to pass!!";
    result.innerHTML += msg;
	resultTop.innerHTML += msg;;
	result.style.color = "#ff0000";
	resultTop.style.color = "#ff0000";
  }
}
const inputs = document.querySelectorAll("input");
let count = inputs.length;
for(let i = 0; i < count; i++){
	
	inputs[i].addEventListener("change",calculatePercentage);
}