
//   <!-- ./wrapper -->
//   <script src="%PUBLIC_URL%/bower_components/axios-master/dist/axios.js"></script>


//   <script src="%PUBLIC_URL%/js/vue.min.js"></script>



//   <!-- jQuery 3 -->
//   <script src="%PUBLIC_URL%/bower_components/jquery/dist/jquery.min.js"></script>
//   <!-- Bootstrap 3.3.7 -->
//   <script src="%PUBLIC_URL%/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
//   <!-- Select2 -->
//   <script src="%PUBLIC_URL%/bower_components/select2/dist/js/select2.full.min.js"></script>
//   <!-- SlimScroll -->
//   <script src="%PUBLIC_URL%/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
//   <!-- FastClick -->
//   <script src="%PUBLIC_URL%/bower_components/fastclick/lib/fastclick.js"></script>
//   <!-- AdminLTE for demo purposes -->
//   <script src="%PUBLIC_URL%/dist/js/demo.js"></script>
//   <!-- jQuery Knob -->
//   <script src="%PUBLIC_URL%/bower_components/jquery-knob/js/jquery.knob.js"></script>
//   <!-- AdminLTE App -->
//   <script src="%PUBLIC_URL%/dist/js/adminlte.min.js"></script>
//   <!-- AdminLTE for demo purposes -->
//   <script src="%PUBLIC_URL%/dist/js/demo.js"></script>
//   <!-- FLOT CHARTS -->
//   <script src="%PUBLIC_URL%/bower_components/Flot/jquery.flot.js"></script>
//   <!-- FLOT RESIZE PLUGIN - allows the chart to redraw when the window is resized -->
//   <script src="%PUBLIC_URL%/bower_components/Flot/jquery.flot.resize.js"></script>
//   <!-- FLOT PIE PLUGIN - also used to draw donut charts -->
//   <script src="%PUBLIC_URL%/bower_components/Flot/jquery.flot.pie.js"></script>
//   <!-- FLOT CATEGORIES PLUGIN - Used to draw bar charts -->
//   <script src="%PUBLIC_URL%/bower_components/Flot/jquery.flot.categories.js"></script>
//   <!-- Bootstrap slider -->
//   <script src="%PUBLIC_URL%/plugins/bootstrap-slider/bootstrap-slider.js"></script>

//   <script src="%PUBLIC_URL%/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js"></script>

//   <!-- Morris.js charts -->
//   <script src="%PUBLIC_URL%/bower_components/raphael/raphael.min.js"></script>
//   <script src="%PUBLIC_URL%/bower_components/morris.js/morris.min.js"></script>

//   <script>
//     new Vue({
//       el: "#app",
//       data: {
//         user: {},
//         users: []
//       },
//       methods: {
//         load() {
//           url=sessionStorage.url

//           axios.get(`${url}consultar_carros`).then(res => {
//             this.users = res.data
//           })

//         }
//       },

//       mounted() {
//         this.load()

//       }
//     })
//     function selecionar() {

//       carro = document.getElementById('consult').value
//       url=sessionStorage.url
//       axios.get(`${url}consultar_carro/${carro}`).then(res => {
//         this.user = res.data
//         document.getElementById('bx').value = user.bx

//         document.getElementById('vx').value = user.vx
//         document.getElementById('vangular').value = user.vangular

//         document.getElementById('px').value = user.px
//         document.getElementById('pz').value = user.pz
//       })


//     }
//   </script>


//   <script>
//     $(function () {
//       //Initialize Select2 Elements
//       $('.select2').select2()
//     })
//   </script>

//   <script>
//     $(function () {


//       var names = $('#names').get(0).getContext('2d')

//     })
//   </script>

//   <script>

//     function graf() {
//       var area = [
//         [0, 0],
//         [30, 0],
//         [30, 30],
//         [0, 30],
//         [0, 0]
//       ]
//       var banco = [document.getElementById('bx').value,25]
//       var volante = [[document.getElementById('vx').value,
//       document.getElementById('vangular').value]]
//       var pedaleira = [[document.getElementById('px').value
//         , document.getElementById('pz').value]]

//       var line_data1 = {
//         label: 'Área',
//         data: area,
//         color: '#00c0ef'
//       }
//       var line_data2 = {
//         label: 'Banco',
//         data: banco,
//         color: '#3c8dbc'
//       }
//       var line_data3 = {
//         label: 'Volante',
//         data: volante,
//         color: '#d2d6de'
//       }
//       var line_data4 = {
//         label: 'Pedaleira',
//         data: pedaleira,
//         color: '#f39c12'
//       }

//       $.plot('#line-chart', [line_data1, line_data2, line_data3, line_data4], {
//         grid: {
//           hoverable: true,
//           borderColor: '#f3f3f3',
//           borderWidth: 1,
//           tickColor: '#f3f3f3'
//         },
//         series: {
//           shadowSize: 0,
//           lines: {
//             show: true
//           },
//           points: {
//             show: true
//           }
//         },
//         lines: {
//           fill: true,
//           color: ['#3c8dbc', '#f56954']
//         },
//         yaxis: {
//           show: true
//         },
//         xaxis: {
//           show: true
//         }
//       })
//       //Initialize tooltip on hover
//       $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
//         position: 'absolute',
//         display: 'none',
//         opacity: 0.8
//       }).appendTo('body')
//       $('#line-chart').bind('plothover', function (event, pos, item) {

//         if (item) {
//           var x = item.datapoint[0].toFixed(2),
//             y = item.datapoint[1].toFixed(2)

//           $('#line-chart-tooltip').html(item.series.label + ' = ' + '(X=' + x + ' ,Z=' + y + ')')
//             .css({ top: item.pageY + 5, left: item.pageX + 5 })
//             .fadeIn(200)
//         } else {
//           $('#line-chart-tooltip').hide()
//         }

//       })





//     }

//   </script>

// <script>
//     function salvar() {
//       const user = {
//           conforto: '',
//           sexo: '',
//           idade: '',
//           peso: '',
//           altura: '',
//           comp_p: '',
//           comp_b: '',
//           ref_car:'',
//         }
//       if (document.getElementById('op1').checked == true) {
//         user.conforto = 'confortável'

//       }
//       else if (document.getElementById('op2').checked == true) {
//         user.conforto = 'aceitável'

//       }
//       else { 
//         user.conforto = 'incômodo'

//       }
 

//       if (document.getElementById('op4').checked == true) {
//         user.sexo = 'masculino'

//       }
//       else {
//         user.sexo = 'feminino'

//       }

//       user.idade = document.getElementById('idade').value
//       user.peso = document.getElementById('peso').value
//       user.altura = document.getElementById('altura').value
//       user.comp_p = document.getElementById('comp_p').value
//       user.comp_b = document.getElementById('comp_b').value
//       user.ref_car=document.getElementById('consult').value
//       url=sessionStorage.url
//       axios.post(`${url}cad_av`, user); 
 
//       document.getElementById('op1').checked=false
//       document.getElementById('op2').checked=false
//       document.getElementById('op3').checked=false
//       // document.getElementById('op4').checked=false
//       // document.getElementById('op5').checked=false

//       // document.getElementById('idade').value=''
//       // document.getElementById('peso').value=''
//       // document.getElementById('altura').value=''
//       // document.getElementById('comp_p').value=''
//       // document.getElementById('comp_b').value=''


//     }
//   </script>
//   <script>
//   function limpar(){
//     document.getElementById('op1').checked=false
//       document.getElementById('op2').checked=false
//       document.getElementById('op3').checked=false
//       document.getElementById('op4').checked=false
//       document.getElementById('op5').checked=false

//       document.getElementById('idade').value=''
//       document.getElementById('peso').value=''
//       document.getElementById('altura').value=''
//       document.getElementById('comp_p').value=''
//       document.getElementById('comp_b').value=''
//   }
//   </script>

