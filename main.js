canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,greencar_x,greencar_y,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=='37'){
        left();
        console.log("Left Key Pressed");
    }
    if (keyPressed=='38'){
        up();
        console.log("Up Key Pressed");
    }
    if (keyPressed=='39'){
        right();
        console.log("Right Key Pressed");
    }
    if (keyPressed=='40'){
        down();
        console.log("Down Key Pressed");
    }
}

function up()
{
	if (greencar_y >= 10) {

        greencar_y -= 10;
        console.log ("When Up arrow is pressed , x = " + greencar_x + " y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if (greencar_y <= 290) {

        greencar_y += 10;
        console.log ("When Down arrow is pressed , x = " + greencar_x + " y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if (greencar_x >= 10) {

        greencar_x -= 10;
        console.log ("When Left arrow is pressed , x = " + greencar_x + " y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if (greencar_x <= 700) {

        greencar_x += 10;
        console.log ("When Right arrow is pressed , x = " + greencar_x + " y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
