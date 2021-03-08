canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
racingcar_width = 100;
racingcar_height = 90;
background_image = "road.jpg";
racingcar_image = "racing car.jpg"
racingcar_x = 10;
racingcar_y = 10;
racingcar2_width = 100;
racingcar2_height = 90;
racingcar2_x = 10;
racingcar2_y = 100;
racingcar2_image = "racing car2.jpg"



function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    racingcar_imgTag = new Image();
    racingcar_imgTag.onload = uploadRacingcar;
    racingcar_imgTag.src = racingcar_image;
    racingcar2_imgTag = new Image();
    racingcar2_imgTag.onload = uploadRacingcar2;
    racingcar2_imgTag.src = racingcar2_image;



}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRacingcar() {
    ctx.drawImage(racingcar_imgTag, racingcar_x, racingcar_y, racingcar_width, racingcar_height);

}
function uploadRacingcar2() {
    ctx.drawImage(racingcar2_imgTag, racingcar2_x, racingcar2_y, racingcar2_width, racingcar2_height);

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up");


    }
    if (keyPressed == "40") {
        down();
        console.log("down");


    }
    if (keyPressed == "37") {
        left();
        console.log("left");


    }
    if (keyPressed == "39") {
        right();
        console.log("right");


    }
    if (keyPressed == "87") {
        up2();
        console.log("w");


    }
    if (keyPressed == "83") {
        down2();
        console.log("s");


    }
    if (keyPressed == "65") {
        left2();
        console.log("a");


    }
    if (keyPressed == "68") {
        right2();
        console.log("d");


    }


}


function up(){
    if(rover_y>=0){
    rover_y=rover_y-10;
    uploadBackground();
    uploadRacingcar();
    
    }
    
    
    }
    function down(){
        if(rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadRacingcar();
        
        }
        
        
        }
        function left(){
            if(rover_x>=0){
            rover_x=rover_x-10;
            uploadBackground();
            uploadRacingcar();
            
            }
            
            
            }
            function right(){
                if(rover_x<=700){
                rover_x=rover_x+10;
                uploadBackground();
                uploadRacingcar();
                
                }
                
                
                }
                function up(){
                    if(rover_y>=0){
                    rover_y=rover_y-10;
                    uploadBackground();
                    uploadRacingcar2();
                    
                    }
                    
                    
                    }
                    function down(){
                        if(rover_y<=500){
                        rover_y=rover_y+10;
                        uploadBackground();
                        uploadRacingcar2();
                        
                        }
                        
                        
                        }
                        function left(){
                            if(rover_x>=0){
                            rover_x=rover_x-10;
                            uploadBackground();
                            uploadRacingcar2();
                            
                            }
                            
                            
                            }
                            function right(){
                                if(rover_x<=700){
                                rover_x=rover_x+10;
                                uploadBackground();
                                uploadRacingcar2();
                                
                                }
                                
                                
                                }