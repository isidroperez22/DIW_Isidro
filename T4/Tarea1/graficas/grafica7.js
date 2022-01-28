google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['', 12, 28, 38, 38],
            ['', 38, 38, 55, 55],
            ['', 55, 55, 77, 77],
            ['', 77, 77, 66, 66],
            ['', 28, 28, 66, 19]
            // Treat the first row as data.
            ], true);

            var options = {
                width: 250,
                heigth: 50,
            legend: 'none',
            bar: { groupWidth: '75%' }, // Remove space between bars.
            candlestick: {
                fallingColor: { strokeWidth: 0, fill: '#F8A404' }, // red
                risingColor: { strokeWidth: 0, fill: '#F8A404' }   // green
            }
            };

            var chart = new google.visualization.CandlestickChart(document.getElementById('grafica7'));
            chart.draw(data, options);
        }
