$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $("#phone-number").keypress(function () {
        var valuePhone = $("#phone-number").val().length;
        console.log(valuePhone);
        if (valuePhone >= 10) {
            $("#next-button").removeAttr("disabled");
            $("#phone-number").attr("disabled", "disabled");
        }
 
    });
    var $randomNumber = 0;
    $randomNumber = parseInt(Math.random()*1000) ;
   
   $("#next-button").click(function(){
    swal("Tu codigo de verificación es : LAB- " +  $randomNumber);
   });
   
   $(document).ready(function() {
    setTimeout(function() {
        $(".container1").fadeOut(1500);
    },1000);
});
 

 
