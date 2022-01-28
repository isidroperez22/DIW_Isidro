google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Ethereum', 26280],
        ['Polkadot', 11600],
        ['Bitcoin', 114000],
        ['Luna', 34010 ],
        ]);
        var options ={
            width: 254,
            height: 200
        }
        function resizeHandler () {
            chart.draw(data, options);
        }
        if (window.addEventListener) {
            window.addEventListener('resize', resizeHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent('onresize', resizeHandler);
        }
        var chart = new google.visualization.PieChart(document.getElementById('grafica1'));
        chart.draw(data, options);
    }
