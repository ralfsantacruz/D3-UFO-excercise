// from data.js
var tableData = data;


textBox = d3.select("input")
button = d3.select("#filter-btn")


function appendTable(table) {
    tableBody = d3.select("tbody")
    table.forEach(function(item) {
        tableBody.append("tr")
        Object.entries(item).forEach(function([key, value]) {
            console.log(key, value)
            tableBody.append("td").text(value) 
        })
    })
}





// append default information to the table
// tableData.forEach(function(data) {
//     tableBody.append("tr")
//     Object.entries(data).forEach(function([key, value]) {
//         console.log(key, value)
//         tableBody.append("td").text(value)
//     })
// })

appendTable(tableData)




// create an action that occurs when the filter button is clicked
button.on("click", function() {
    d3.event.preventDefault();
    inputText = d3.event.target.value

    returnValue = textBox.property("value")
   
    if (tableBody) {
        d3.select("tbody").remove("td")
    }

    tbody = d3.select("table").append("tbody")

    selection = d3.select("#d3-dropdown").node().value;

    
    filteredTable = tableData.filter(stuff => stuff[selection] == returnValue)

    // console.log(selection)
    // console.log(returnValue)
    // console.log(filteredTable)
    appendTable(filteredTable)
    
    // filteredTable.forEach(function(item) {
    //     tbody.append("tr")
    //     Object.entries(item).forEach(function([key, value]) {
    //         console.log(key, value)
    //         tbody.append("td").text(value) 
    //     })
    // })
})


