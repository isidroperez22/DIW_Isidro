google.charts.load("current", { packages : [ 'corechart' ]});

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    //Aquí se representa el nombre de columna, el dato y el color
    var data = google.visualization.arrayToDataTable([ 
                [ "", "USDT", { role : "style"} ], 
                [ "Lunes", 350, "#3d9c04" ], 
                [ "Martes", -310, "#d51609" ],
                [ "Miercoles", 50, "#3d9c04" ],
                [ "Jueves", -70, "#d51609" ],
                [ "Viernes", 120, "#3d9c04" ],]);

    var view = new google.visualization.DataView(data);
    view.setColumns(
        [ 0, 1, {
            calc : "stringify",
            sourceColumn : 1,
            type : "string",
            role : "annotation"
        }, 2 ]);

    //Aquí se añade el título y tamaño del gráfico
    var options = {
        width : 200,
        height : 200,
        bar : { groupWidth : "50%" },
        legend : { position : "none" },
    };
    function resizeHandler () {
        chart.draw(data, options);
    }
    if (window.addEventListener) {
        window.addEventListener('resize', resizeHandler, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onresize', resizeHandler);
    }
    var chart = new google.visualization.ColumnChart(document.getElementById("grafica2"));
    chart.draw(view, options);
}

function getValueAt(column, dataTable, row) {
    return dataTable.getFormattedValue(row, column);
}