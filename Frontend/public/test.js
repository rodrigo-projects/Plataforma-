
  

  $(function () {
    //Initialize Select2 Elements
    $('.select2').select2()
  })

  $(function () {


    var names = $('#names').get(0).getContext('2d')

  })


  function graf() {
    var area = [
      [0, 0],
      [30, 0],
      [30, 30],
      [0, 30],
      [0, 0]
    ]
    var banco = [document.getElementById('bx').value,25]
    var volante = [[document.getElementById('vx').value,
    document.getElementById('vangular').value]]
    var pedaleira = [[document.getElementById('px').value
      , document.getElementById('pz').value]]

    var line_data1 = {
      label: 'Área',
      data: area,
      color: '#00c0ef'
    }
    var line_data2 = {
      label: 'Banco',
      data: banco,
      color: '#3c8dbc'
    }
    var line_data3 = {
      label: 'Volante',
      data: volante,
      color: '#d2d6de'
    }
    var line_data4 = {
      label: 'Pedaleira',
      data: pedaleira,
      color: '#f39c12'
    }

    $.plot('#line-chart', [line_data1, line_data2, line_data3, line_data4], {
      grid: {
        hoverable: true,
        borderColor: '#f3f3f3',
        borderWidth: 1,
        tickColor: '#f3f3f3'
      },
      series: {
        shadowSize: 0,
        lines: {
          show: true
        },
        points: {
          show: true
        }
      },
      lines: {
        fill: true,
        color: ['#3c8dbc', '#f56954']
      },
      yaxis: {
        show: true
      },
      xaxis: {
        show: true
      }
    })
    //Initialize tooltip on hover
    $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
      position: 'absolute',
      display: 'none',
      opacity: 0.8
    }).appendTo('body')
    $('#line-chart').bind('plothover', function (event, pos, item) {

      if (item) {
        var x = item.datapoint[0].toFixed(2),
          y = item.datapoint[1].toFixed(2)

        $('#line-chart-tooltip').html(item.series.label + ' = ' + '(X=' + x + ' ,Z=' + y + ')')
          .css({ top: item.pageY + 5, left: item.pageX + 5 })
          .fadeIn(200)
      } else {
        $('#line-chart-tooltip').hide()
      }

    })





  }


