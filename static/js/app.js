// from data.js
var tableData = data;

// YOUR CODE HERE!
function updateTable(inputData) {


   
    var tbody = d3.select("tbody");

   
    inputData.forEach(function (UFOSightingReport) {
        console.log(UFOSightingReport);
        var row = tbody.append("tr")
        Object.entries(UFOSightingReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
        cell.text(value);
        
        });
    });
    
};



updateTable(tableData);

// Filter

var filter = d3.select("#filter-btn");

filter.on("click", function () {

   
    d3.event.preventDefault();

   
    var inputElement = d3.select("#datetime");

    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    
    d3.select("tbody").html("")

    console.log(filteredData);

    
    updateTable(filteredData);
});



//Remove Filter


var removeFilter = d3.select("#remove-filter");

removeFilter.on("click", function () {

    
    d3.event.preventDefault();


    
    d3.select("tbody").html("")

    console.log(tableData);

    
    updateTable(tableData);

   
    
    d3.select("#datetime").property("value", "");
});
