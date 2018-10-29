// from data.js
var tableData = data;

var textBox = d3.select("input")
var button = d3.select("#filter-btn")

// appends info to table on webpage
function appendTable(table) {
    tableBody = d3.select("tbody")
    table.forEach(function(item) {
        tableBody.append("tr")
        Object.entries(item).forEach(function([key, value]) {
            tableBody.append("td").text(value) 
        })
    })
}

// Load up all the data in data.js as default
appendTable(tableData)

// Create an action that occurs when the filter button is clicked
button.on("click", function() {
    d3.event.preventDefault();
    inputText = d3.event.target.value

    // Get value from input box and convert to lowercase
    returnValue = textBox.property("value").toLowerCase()

    // Clear table if there is data
    if (tableBody) {
        d3.select("tbody").remove("td")
    }
    // Re-append a new, blank table
    tbody = d3.select("table").append("tbody")

    // Get filter criteria from dropdown menu
    selection = d3.select("#d3-dropdown").node().value;
    // console.log(selection)
    if (selection === "showAll") {
        appendTable(tableData)
    }
    else {
        filteredTable = tableData.filter(object => object[selection] == returnValue)
        appendTable(filteredTable)
    }
})


