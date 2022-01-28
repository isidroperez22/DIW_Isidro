google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawTrendlines);

function drawTrendlines() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', '');

      data.addRows([
        [0, 1],    [1, 2.5],   [2, 1.5],  [3, 2], [4, 3], [5, 3.5]   
      ]);

      var options = {
        colors: ['#F8A404', ''],
        width: 250,
        heigth: 50,
        trendlines: {
          1: {type: 'linear', color: 'fff', opacity: 1}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('grafica3'));
      chart.draw(data, options);
    }