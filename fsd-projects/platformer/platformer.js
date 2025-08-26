$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
    createPlatform(50, 600, 300, 3);
    createPlatform(500, 650, 200, 3);
    createPlatform(850, 550, 200, 3);
    createPlatform(500, 450, 200, 3);
    createPlatform(200, 350, 200, 3);
    createPlatform(1100, 450, 200, 3);
    createPlatform(850, 350, 200, 3);
    createPlatform(200, 350, 200, 3);
    createPlatform(550, 250, 200, 3);
    // TODO 3 - Create Collectables
     createCollectable("diamond", 650, 600, 20, 0.5);
     createCollectable("diamond", 650, 200, 20, 0.5);
     createCollectable("diamond", 1250, 120, 20, 0.5);
     createCollectable("diamond", 200, 200, 20, 0.5);
     createCollectable("diamond", 550, 400, 20, 0.5);
    // TODO 4 - Create Cannons
    createCannon("top", 700, 850);
    createCannon("left", 650,  200);
     createCannon("top", 1250, 850);
     createCannon("top", 400, 850);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
