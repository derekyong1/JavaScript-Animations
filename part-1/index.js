// Redraw the sun when the x slider value changes
let xScaleElem = document.getElementById("xScale");
let xSlider = document.getElementById("xSlider");

xSlider.addEventListener("input", function() {
    xScaleElem.innerHTML = xSlider.value;
    drawSun();
    });

    // Redraw the sun when the y slider value changes
    let yScaleElem = document.getElementById("yScale");
    let ySlider = document.getElementById("ySlider");
    ySlider.addEventListener("input", function() {
        yScaleElem.innerHTML = ySlider.value;
        drawSun();
    });
        
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    
    drawSun();
    
    function drawSun() {
        // Clear context of previous image
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Save current context settings
        context.save();
        context.beginPath();

        context.translate(130,30);
        context.translate(70,70);
        // Scale sun based on slider values
        context.scale(xSlider.value, ySlider.value);
        context.translate(-70,-70);
        // Draw sunbeams (4 rotated squares)
        for (let i = 0; i < 4; i++) {
            context.translate(70, 70);
            context.rotate(Math.PI / 8);
            context.translate(-70, -70);

            context.fillStyle = "orange";
            context.fillRect(20, 20, 100, 100);
        }
        // Draw interior circle
        context.arc(70, 70, 50, 0, 2 * Math.PI);
        context.fillStyle = "yellow";
        context.fill();
        
        // Restore previously saved settings
        context.restore();
    }