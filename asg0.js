// DrawRectangle.js
function main() {
    // Retrieve <canvas> element                                  <- (1)
    var canvas = document.getElementById('canvas');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    // Get the rendering context for 2DCG                          <- (2)
    var ctx = canvas.getContext('2d');

    // Draw a blue rectangle                                       <- (3)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    /*
    let v1 = new Vector3();
    v1.elements[0] = 2.25;
    v1.elements[1] = 2.25;
    console.log(v1.elements);
    drawVector(v1, "red");
    */
}

function drawVector(v, color) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);  // Set origin at the center of the canvas
    ctx.lineTo(canvas.width / 2 + v.elements[0]*20, canvas.height / 2 - v.elements[1]*20);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function handleDrawEvent() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;
    
    x1 = document.getElementById('inputx1').value;
    y1 = document.getElementById('inputy1').value;
    //console.log(x1);
    //console.log(y1);
    
    let v1 = new Vector3();
    v1.elements[0] = x1;
    v1.elements[1] = y1;
    //console.log(v1.elements);
    drawVector(v1, "red")


    x2 = document.getElementById('inputx2').value;
    y2 = document.getElementById('inputy2').value;
    //console.log(x2);
    //console.log(y2);
    
    let v2 = new Vector3();
    v2.elements[0] = x2;
    v2.elements[1] = y2;
    //console.log(v2.elements);
    drawVector(v2, "blue")
}

function handleDrawOperationEvent() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let operation = document.getElementById('operations').value;
    let scalar = document.getElementById('scalar').value;
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;
    
    x1 = document.getElementById('inputx1').value;
    y1 = document.getElementById('inputy1').value;
    //console.log(x1);
    //console.log(y1);
    
    let v1 = new Vector3();
    v1.elements[0] = x1;
    v1.elements[1] = y1;
    //console.log(v1.elements);
    drawVector(v1, "red");


    x2 = document.getElementById('inputx2').value;
    y2 = document.getElementById('inputy2').value;
    //console.log(x2);
    //console.log(y2);
    
    let v2 = new Vector3();
    v2.elements[0] = x2;
    v2.elements[1] = y2;
    //console.log(v2.elements);
    drawVector(v2, "blue");

    if (operation === "add") {
        let v3 = v1.add(v2);
        //console.log(v3.elements);
        drawVector(v3, "green");
    }

    if (operation === "sub") {
        let v3 = v1.sub(v2);
        //console.log(v3.elements);
        drawVector(v3, "green");
    }

    if (operation === "div") {
        let v3 = v1.div(scalar);
        let v4 = v2.div(scalar);
        //console.log(v3.elements);
        //console.log(v4.elements);
        drawVector(v3, "green");
        drawVector(v4, "green");
    }

    if (operation === "mul") {
        let v3 = v1.mul(scalar);
        let v4 = v2.mul(scalar);
        //console.log(v3.elements);
        //console.log(v4.elements);
        drawVector(v3, "green");
        drawVector(v4, "green");
    }

    if (operation === "mag") {
        console.log("Magnitude of v1:", v1.magnitude());
        console.log("Magnitude of v2:", v2.magnitude());
    }

    if (operation === "nor") {
        let v3 = v1.normalize();
        let v4 = v2.normalize();

        drawVector(v3, "green");
        drawVector(v4, "green");
    }

    if (operation === "angle") {

        angleBetween(v1, v2);
    }

    if (operation === "area") {

        areaTriangle(v1, v2);
    }
}

function angleBetween(v1, v2) {
    let dot = Vector3.dot(v1,v2);
    let mag1 = v1.magnitude();
    let mag2 = v2.magnitude();
    let cosTheta = dot / (mag1 * mag2);
    cosTheta = Math.max(-1, Math.min(1, cosTheta));
    let angle = Math.acos(cosTheta);
    let angleDeg = angle * (180 / Math.PI);
    console.log("Angle: " + angleDeg);
}

function areaTriangle(v1, v2) {
    let cross = Vector3.cross(v1, v2);
    let areaParallelogram = cross.magnitude();
    let areaTriangle = areaParallelogram / 2;
    console.log("Area of the triangle: " + areaTriangle);
}