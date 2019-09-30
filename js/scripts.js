$(document).ready(function(){
    $("h1#wel").click(function(){
        $("h1").addClass("wel")
    });


    $("h5#well").click(function(){
        $("h5").addClass("well")
    });


    $(".click1").click(function(){
        $("#repos1").toggle();
        $("#repo1").toggle();
    });



    $(".click2").click(function(){
        $("#repo2").toggle();
        $("#repos2").toggle();
    });



    $(".click3").click(function(){
        $("#repo3").toggle();
        $("#repos3").toggle();
    });
    $(".namee").hide()
        $(".hover1").hover(function(){
        $(this).find(".namee").toggle();
        });
        



$("form").submit(function(event) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message =$("#message").val();
    event.preventDefault();
    alert(name + " we have received your message . Thank you for reaching out to us.");
  });

});
