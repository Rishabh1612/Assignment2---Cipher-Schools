var data = {
    "all" : [
        {
            "name" : "Choco Gem Cake",
                "price" : "$10",
                "image" : "images/Cakes1.jpg"
            },
            {
                "name" : "Chocolate Cake",
                "price" : "$20",
                "image" : "images/Cakes2.jpg"
            },
            {
                "name" : "Pineapple Cake",
                "price" : "$15",
                "image" : "images/cakes3.jpg"
        },
        {
            "name" : "Cupcake Combo",
                "price" : "$8",
                "image" : "images/cupcakes1.jpg"
            },
            {
                "name" : "Single Cupcake",
                "price" : "$5",
                "image" : "images/cupcakes2.jpg"
        },
        {
            "name" : "Sweets Box",
                "price" : "$30",
                "image" : "images/sweets1.jpg"
            },
            {
                "name" : "Festive Sweets",
                "price" : "$15",
                "image" : "images/sweets2.jpg"
        },
        {
           "name" : "Choco Doughnut",
                "price" : "$5",
                "image" : "images/doughnuts1.jpg"
            },
            {
                "name" : "Doughnuts Box",
                "price" : "$11",
                "image" : "images/doughnuts2.jpg"
        }
    ],
    "cakes" : [
            {
                "name" : "Choco Gem Cake",
                "price" : "$10",
                "image" : "images/Cakes1.jpg"
            },
            {
                "name" : "Chocolate Cake",
                "price" : "$20",
                "image" : "images/Cakes2.jpg"
            },
            {
                "name" : "Pineapple Cake",
                "price" : "$15",
                "image" : "images/cakes3.jpg"
            }],
    "cupcakes" : [  {
                "name" : "Cupcake Combo",
                "price" : "$8",
                "image" : "images/cupcakes1.jpg"
            },
            {
                "name" : "Single Cupcake",
                "price" : "$5",
                "image" : "images/cupcakes2.jpg"
            }],
    "sweets" : [{
                "name" : "Sweets Box",
                "price" : "$30",
                "image" : "images/sweets1.jpg"
            },
            {
                "name" : "Festive Sweets",
                "price" : "$15",
                "image" : "images/sweets2.jpg"
            }],
            
    "doughnuts" : [ {
                "name" : "Choco Doughnut",
                "price" : "$5",
                "image" : "images/doughnuts1.jpg"
            },
            {
                "name" : "Doughnuts Box",
                "price" : "$11",
                "image" : "images/doughnuts2.jpg"
            }]
        }
    $(document).ready(function(){
        var source = $("#items-template").html();
        var template = Handlebars.compile(source);
        $("#cards").html(template(data.all));

        $("#all").click(function(){
            $("#cards").html(template(data.all));
        });

        $("#cakes").click(function(){
            $("#cards").html(template(data.cakes));
        });

        $("#cupcakes").click(function(){
            $("#cards").html(template(data.cupcakes));
        });

        $("#sweets").click(function(){
            $("#cards").html(template(data.sweets));
        });

        $("#doughnuts").click(function(){
            $("#cards").html(template(data.doughnuts));
        });
    });


    //for searching the items via search bar
    const searchItems = () => {
        var filter = document.getElementById("itemSearch").value.toUpperCase();
        var cards = document.getElementById("cards");
        var list = cards.getElementsByClassName("extra");
        for(var i=0; i< list.length; i++)
        {
            let a = list[i].getElementsByClassName("card")[0];
            let textvalue = a.textContent || a.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1)
            {
                list[i].style.display = " ";
            }
            else
            {
                list[i].style.display = "none";
            }
        }
    }