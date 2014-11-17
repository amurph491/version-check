$(function() {
    
    var mstr = [
    "9.3.0",
    "9.3.1",
    "9.3.1 HF1",
    "9.3.1 HF2",
    "9.3.1 HF3",
    "9.3.1 HF4",
    "9.4.0",
    "9.4.1",
    "9.4.1 HF1",
    "9.4.1 HF2",
    "9.4.1 HF3",
    "9.4.1 HF4",
    "9.4.1 HF5",
    "9.4.1 HF6"
    ];

    $('form').submit(function(event){
        event.preventDefault();
        $.ajax({
            type:'post',
            url:'/search',
            data:{
                product: $("input#product").val(),
                mstrversion: $("input#mstrversion").val()
            },
            error: function(){alert("Please enter a valid MicroStrategy Version number")},
            success: function(res){$("span").text(res).show(); return;}
        })
    })

    $.getJSON("data/versions/941.json", function(data){
        var v = "941GA"
        var products = [];
        for(var k in data) {
            products = (products.concat(data[k]["Supported"]).concat(data[k]["Certified"]));
        }
        $( "#product" ).autocomplete({
            minLength: 1,
            source: products.sort()
        });
        $( "#mstrversion" ).autocomplete({
            source: mstr
        });
    });
});