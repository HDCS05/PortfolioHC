$(function () {

   // $('.carousel').carousel()
   $('#accordion').on('show.bs.collapse', function () {
       $('#accordion .in').collapse('hide');
   });

});
