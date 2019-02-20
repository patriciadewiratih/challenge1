var fuel = document.getElementById('fuel').getContext('2d');
var spFuel = 0;
var pointToFill = 4.75;
var cw = fuel.canvas.width;
var ch = fuel.canvas.height;
var diff;

function fillFuel(){
    diff = ((spFuel/100) * 3.14 * 2 * 10);
    fuel.clearRect(0,0,cw,ch);
    fuel.lineWidth = 20;
    fuel.fillStyle = '#fff';
    fuel.textAlign = 'center';
    fuel.font = "2rem 'exo 2'";
    fuel.fillText(spFuel,100,110);
    fuel.beginPath();
    fuel.arc(100,100,90,pointToFill,diff/10+pointToFill);
    // changing the color
    if (spFuel <=25){
        fuel.strokeStyle = '#A43134';
    } else if (spFuel <= 50){
        fuel.strokeStyle = '#E2C044';
    } else {
        fuel.strokeStyle = '#8ACB88';
    }
    //change to change amount
    if (spFuel >= 5){
        clearTimeout(fillTheFuel);
    }
    fuel.stroke();
    spFuel++;
};

var throttle = document.getElementById('throttle').getContext('2d');
var spThrottle = 0;

function fillThrottle(){
    diff = ((spThrottle/100) * 3.14 * 2 * 10);
    throttle.clearRect(0,0,cw,ch);
    throttle.lineWidth = 20;
    throttle.fillStyle = '#fff';
    throttle.textAlign = 'center';
    throttle.font = "2rem 'exo 2'";
    throttle.fillText(spThrottle,100,110);
    throttle.beginPath();
    throttle.arc(100,100,90,pointToFill,diff/10+pointToFill);

    // changing the color
    if (spThrottle > 100){
        throttle.strokeStyle = '#A43134';
    } else if (spThrottle < 50){
        throttle.strokeStyle = "#E2C044";
    }else {
        throttle.strokeStyle = '#8ACB88';
    }

    // //change to change amount
    if (spThrottle >= 20){
        clearTimeout(fillTheThrottle);
    }
    throttle.stroke();
    spThrottle++;
};

var speed = document.getElementById('speed').getContext('2d');
var spSpeed = 0;

function fillSpeed(){
    diff = ((spSpeed/100) * 3.14 * 2 * 10);
    speed.clearRect(0,0,cw,ch);
    speed.lineWidth = 20;
    speed.fillStyle = '#fff';
    speed.textAlign = 'center';
    speed.font = "2rem 'exo 2'";
    speed.fillText(spSpeed,100,110);
    speed.beginPath();
    speed.arc(100,100,90,pointToFill,diff/10+pointToFill);

    // changing the color
    if (spSpeed > 100){
        speed.strokeStyle = '#A43134';
    }else if (spSpeed < 50){
        speed.strokeStyle = "#E2C044";
    }else {
        speed.strokeStyle = '#8ACB88';
    }
    
    // //change to change amount
    if (spSpeed >= 100){
        clearTimeout(fillTheSpeed);
    }
    speed.stroke();
    spSpeed++;
};

var accel = document.getElementById('accel').getContext('2d');
var spAccel = 0;

function fillAccel(){
    diff = ((spAccel/100) * 3.14 * 2 * 10);
    accel.clearRect(0,0,cw,ch);
    accel.lineWidth = 20;
    accel.fillStyle = '#fff';
    accel.textAlign = 'center';
    accel.font = "2rem 'exo 2'";
    accel.fillText(spAccel,100,110);
    accel.beginPath();
    accel.arc(100,100,90,pointToFill,diff/10+pointToFill);

// changing the color
if (spAccel > 100){
    accel.strokeStyle = '#A43134';
}else if (spAccel < 50){
    accel.strokeStyle = "#E2C044";
}else {
    accel.strokeStyle = '#8ACB88';
}

//change to change amount
    if (spAccel >= 65){
        clearTimeout(fillTheAccel);
    }
    accel.stroke();
    spAccel++;
};

var fillTheFuel = setInterval(fillFuel,25);
var fillTheThrottle = setInterval(fillThrottle,25);
var fillTheSpeed = setInterval(fillSpeed,25);
var fillTheAccel = setInterval(fillAccel,25);

// buttons
function refill(){
    fillFuel();
}

function increaseThrottle(){
    fillTheThrottle = setTimeout(fillThrottle,25);
}

function increaseSpeed(){
    fillTheSpeed = setTimeout(fillSpeed,25);
}

function increaseAccel(){
    fillTheAccel = setTimeout(fillAccel,25);
}