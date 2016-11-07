$(document).ready(function() {
  $(document).on('click', '.fab', function() {
    $('.fab, .fab-wrap').toggleClass('scale');
    $('.dim').toggleClass('shown');
    $('.share').toggleClass('fadeout');
    $('.social').toggleClass('slide');
  });
});
