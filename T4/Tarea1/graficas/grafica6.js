google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', ''],
          ['',  20,],
          ['',  10,],
          ['',  30,],
          ['',  56,]
        ]);

        var options = {
          colors: ['#F8A404', ''],
          width: 250,
          heigth: 50,
        };

        var chart = new google.visualization.AreaChart(document.getElementById('grafica6'));
        chart.draw(data, options);
      }
