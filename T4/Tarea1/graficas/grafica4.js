google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['', ''],
    [0, 1], [1, 2], [2, 2.5], [3, 3]
    ]);

    var options = {
    colors: ['#F8A404', ''],
    title: '',
    width: 250,
    heigth: 50,
    hAxis: {title: '', minValue: 0, maxValue: 3},
    vAxis: {title: '', minValue: 0, maxValue: 4},
    trendlines: {
    0: {
        type: 'exponential',
        visibleInLegend: true,
    }
    }
};

    var chart = new google.visualization.ScatterChart(document.getElementById('grafica4'));
    chart.draw(data, options);
}