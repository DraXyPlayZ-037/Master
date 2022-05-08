canvas = new fabric.canvas("myCanvas");

oymecs = "10";

function mass(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        mobj = Img;
        mobj.scaleToWidth(300);
        mobj.scaleToHeight(700);
        mobj.set({
            top: oxmecs,
            left: oymecs
        });
        canvas.add("mobj");
    });
}
window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
    kp = e.keyCode;
    console.log(kp)
    Agni = "Agni"
    Juvenile = "Juvenile"
    Happy = "Happy"
    Amity = "Amity"
    Arman = "Arman"

    //Red
    if (kp == "82") {
        document.getElementById("who").innerHTML = Agni;
        console.log("Red")
        console.log(Agni)
        oxmecs = 50;
        new_image("red.jpg");


    }
    //Green
    if (kp == "71") {
        document.getElementById("who").innerHTML = Juvenile;
        console.log("Green")
        console.log(Juvenile)
    }
    //Yellow
    if (kp == "89") {
        document.getElementById("who").innerHTML = Happy;
        console.log("Yellow")
        console.log(Happy)
    }
    //Pink
    if (kp == "80") {
        document.getElementById("who").innerHTML = Amity;
        console.log("Pink")
        console.log(Amity)
    }
    //Blue
    if (kp == "66") {
        document.getElementById("who").innerHTML = Arman;
        console.log("Blue")
        console.log(Arman)
    }
}