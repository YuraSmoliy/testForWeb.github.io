var body = document.getElementsByTagName("body")[0];
var divExpenses = document.getElementsByClassName("expenses")[0];

body.style.cssText = " width: 100%;\
    height: 100%;\
    position: fixed;\
    top: 0;\
    left: 0;\
    display: flex;\
    align-items: center;\
    justify-content: center; \
    overflow: auto;   \
    font-family: 'Helvetica';\
   ";

divExpenses.style.cssText = "margin: auto; \
    background-color: yellow; \
    width: 280px; \
    height:120px; \
    text-align: center; \
    padding: 20px; \
    border: 2px solid; \
  ";

var table = document.createElement('div');
table.style.cssText = "display: flex;\
	text-align: center; \
    flex-direction: row; \
    flex-wrap: wrap; \
    margin: auto;\
    width:264px;\
    margin-top:10px;\
    justify-content: center; \
";
window.onload = function () { createTable(); }

function getHeagerCellStyle(last) {
	var style = "width: 23%; border: 1px solid; border-collapse: collapse; font-weight: bold;";

	if (!last) {
		style = style + " border-right: 0px solid;";
	}

	return style;
}

function getRowCellStyle(last) {
	var style = "width: 23%; border: 1px solid; border-collapse: collapse; border-right: 1px solid;border-top: 0px solid;";

	if (!last) {
		style = style + " border-top: 0px solid; border-right: 0px solid;";
	}

	return style;
}

function getCell(text, style) {
	var cell = document.createElement('div');
	cell.innerHTML = text;
	cell.style.cssText = style;

	return cell;
}

function getHeaderCell(text, last) {
	return getCell(text, getHeagerCellStyle(last));
}

function getRowCell(text, last) {
	return getCell(text, getRowCellStyle(last));
}

function createTable(){
	table.appendChild(getHeaderCell("Month"));
	table.appendChild(getHeaderCell("Food"));
	table.appendChild(getHeaderCell("Utilities"));
	table.appendChild(getHeaderCell("Sum",true));
	divExpenses.appendChild(table);


	expenses.forEach(function(item, i, expenses) {

		var food = item.food.fruit + item.food.beverages + item.food. meat;
		var utilities = item.utilities.water + item.utilities.cleaning;
		var sum = food+utilities;

		table.appendChild(getRowCell(item.month));
		table.appendChild(getRowCell(food));
		table.appendChild(getRowCell(utilities));
		table.appendChild(getRowCell(sum,true));
	 });
}

document.getElementsByClassName("sort-by-food")[0].addEventListener("click", sortByFood);

document.getElementsByClassName("sort-by-sum")[0].addEventListener("click", sortBySum);

function sortBySum(){	
	expenses.sort(function(a,b){
		var foodA = a.food.fruit + a.food.beverages + a.food. meat;
		var utilitiesA = a.utilities.water + a.utilities.cleaning;
		var sumA = foodA + utilitiesA;

		var foodB = b.food.fruit + b.food.beverages + b.food. meat;
		var utilitiesB = b.utilities.water + b.utilities.cleaning;
		var sumB = foodB + utilitiesB;

		return sumA - sumB;

	});

	table.innerHTML = "";
	createTable();
}

function sortByFood(){
	expenses.sort(function(a,b){
		return a.food.meat - b.food.meat;
	});

	table.innerHTML = "";
	createTable();
}