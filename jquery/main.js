$("button").click(function(){
  $(".box").toggleClass("dark");
  $("body").toggleClass("dark");
});

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".johnpork").css("display", "block");
        $(".reveal-btn").css("display", "none");
    }
);