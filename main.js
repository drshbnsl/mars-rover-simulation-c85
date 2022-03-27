canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=10;
rover_y=10;
rover_widht=100;
rover_hight=70;
rover_img="rover.png";
mars_images=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars.jpg"];

random_number=Math.floor(Math.random()*4);

mars_img=mars_images[random_number];
function add_imges(){
    back_img=new Image();
    back_img.onload=uploadBackground;
    back_img.src=mars_img;
    rover_img_tag=new Image();
    rover_img_tag.onload=uploadrover;
    rover_img_tag.src=rover_img;

}
function uploadBackground(){
    ctx.drawImage(back_img,0,0,800,600);

}
function uploadrover(){
ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_widht,rover_hight);
}

window.addEventListener("keydown",my_keydown)
    
function my_keydown(e){
    keypressed=e.keyCode ;
    console.log(keypressed);

    if(keypressed=='40')
    {console.log("down key is pressed");
    down();
    }
    if(keypressed=='39')
    {console.log("right key is pressed");
    right();
    }
    if(keypressed=='38')
    {console.log("up key is pressed");
    up();
    }
    if(keypressed=='37')
    {console.log("left key is pressed");
    left();
    }
}
function right(){
    if(rover_x<=700){
    rover_x=rover_x+5;
    uploadBackground();
    uploadrover();
    console.log("when right arrow pressed,x="+rover_x+",y="+rover_y);
    }
}
function left(){
    if(rover_x>=0){
    rover_x=rover_x-5;
    uploadBackground();
    uploadrover();
    console.log("when left arrow pressed,x="+rover_x+",y="+rover_y);
    }
}
function up(){
    if(rover_y>=0){
    rover_y=rover_y-5;
    uploadBackground();
    uploadrover();
    console.log("when up arrow pressed,x="+rover_x+",y="+rover_y);
    }
}
function down(){
    if(rover_y<=400){
    rover_y=rover_y+5;
    uploadBackground();
    uploadrover();
    console.log("when down arrow pressed,x="+rover_x+",y="+rover_y);
    }
}



