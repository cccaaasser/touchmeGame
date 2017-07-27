window.onload = function () {

    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    //create a new array to hold the circle
    placeHolder = new Array();

//variable to keep track of score and fails
    var score = 0;
    var fails = 0;

    //onmousedown function
    //user click even will happen
    canvas.onmousedown = function (e) {
        //get position of canvas and mousepointer
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        //Check only hit the last element(rect) in the array
        var i = placeHolder.length - 1;

        //If collision function is true
        if (collision(placeHolder[i].x, placeHolder[i].y,40,40,x,y)) {
            //Increase the score by one
            score = score + 1;
            var points = document.getElementById("score").innerHTML = score;
        }
        else {
            //Otherwise increase the fails by one
            fails = fails + 1;
            var misses = document.getElementById("fails").innerHTML = fails;
        }
    };

    function drawsquare() {
        placeHolder = [];

        //create new objects
        var square = new Object();

        //Attach X and Y as properties to the sqaure object above
        square.x = Math.floor(Math.random() * 500-22.5);
        square.y = Math.floor(Math.random() * 500-22.5);
        //Design
        context.clearRect(0,0,500,500);
        context.fillStyle = "black";
        //Draw with the random X and Y
        context.fillRect(square.x, square.y, 40, 40);
        //Add it to the array created above
        placeHolder.push(square);
    };

    function collision(rectX, rectY, rectWidth, rectHeight, mouseX, mouseY) {
        if (((rectX <= mouseX) &&
            (rectX+rectWidth >= mouseX)) &&
            ((rectY <= mouseY) &&
            (rectY+rectHeight >= mouseY))) {
            return true;
        }
        else {
            return false;
        }
    }


    //Use SetInterval to call function drawsquare every 2 seconds
    setInterval(drawsquare, 2000);
};



