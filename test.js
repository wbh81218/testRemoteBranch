var obj = {
    mystr: "hello",
    myFunc: function(){
        console.log("hello");
        $('.smeDiv').animate({hegiht:500},function(){
            //trigger the callback
            console.log("Done");
        });
    },
    myFunc2: function(){
        return "Just another level 2 function";
    },
    myNum: function(){
        return "Level 2 function";
    }
}

var somefn = function(){
     var test = 1;
}