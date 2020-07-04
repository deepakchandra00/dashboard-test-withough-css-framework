// $(document).ready(function(){
//     $('#menu').slicknav();
// });

$('.tab_bar').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        },
        1200:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

$(document).ready(function() {
    // $('.fa-reorder').click(function(){
    //     $('sidebar').toggle({
    //         function(){$("body").addClass('active');}
    //     });
    // })
        $('.fa-reorder').click(function(){
            $( "body" ).toggleClass('active');
    })
   
    var table = $('#example').DataTable({
       'ajax': 'https://gyrocode.github.io/files/jquery-datatables/arrays_id.json',
       'columnDefs': [
          {
             'targets': 0,
             'checkboxes': {
                'selectRow': true
             }
          },
          {
            'targets': 1,
            "data":null,
            "render": function (data, type, full, meta) {
                return meta.row + 1;
            }
         },
        {
        "targets": -1,
        "data": null,
        "defaultContent": "<button>View</button>"
    } ],
       'select': {
          'style': 'multi',
          'selector': 'td:first-child'
       },     
       'order': [[1, 'asc']],
       "mRender": function(data, type, full) {
        return '<a class="btn btn-info btn-sm" href=#/' + full[0] + '>' + 'Edit' + '</a>';
      },
      "pageLength": 7
    });
 });



