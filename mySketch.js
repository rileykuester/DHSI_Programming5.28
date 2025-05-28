let backgroundImg;
let clickMessage = "";
let messageTimer = 0;
let messageDuration = 180; // 3 seconds at 60fps

function preload() {
  // Load the background image before setup runs
  backgroundImg = loadImage('green_office_90s_style.jpg');
}

function setup() {
  // Create a 1000x1000 canvas and center it on the page
  let canvas = createCanvas(1000, 1000);
  
  // Center the canvas horizontally and vertically
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
  
  // Set text properties for coordinate display
  textSize(16);
  textAlign(LEFT);
  fill(255); // White text
  stroke(0); // Black outline for better visibility
  strokeWeight(1);
}

function draw() {
  // Display the background image, scaled to fit the canvas
  if (backgroundImg) {
    image(backgroundImg, 0, 0, width, height);
  } else {
    // Fallback background color if image doesn't load
    background(200);
  }
  
  // Check for interactive areas and display coordinates
  displayCoordinates();
  
  // Display click messages if active
  displayClickMessage();
  
  // Display mouse coordinates at the cursor position
  // Offset slightly so text doesn't hide under cursor
  fill(255); // White text
  stroke(0); // Black outline
  strokeWeight(1);
  text(`X: ${mouseX}, Y: ${mouseY}`, mouseX + 15, mouseY - 10);
}

function displayCoordinates() {
  // Reset cursor to default
  cursor(ARROW);
  
  // Define interactive zones for each major object
  // Format: x1, y1, x2, y2 (top-left to bottom-right corners)
  
  // Desktop Computer (monitor + keyboard area) - moved left
  // Adjust these numbers: [left, right, top, bottom]
  if (mouseX >= 360 && mouseX <= 500 && mouseY >= 400 && mouseY <= 580) {
    cursor('pointer');
    fill(255, 255, 0); // Yellow highlight
    text("Desktop Computer", mouseX + 15, mouseY - 25);
  }
  
  // Office Desk - moved down
  else if (mouseX >= 320 && mouseX <= 600 && mouseY >= 520 && mouseY <= 670) {
    cursor('pointer');
    fill(139, 69, 19); // Brown highlight
    text("Office Desk", mouseX + 15, mouseY - 25);
  }
  
  // Office Chair
  else if (mouseX >= 520 && mouseX <= 620 && mouseY >= 580 && mouseY <= 720) {
    cursor('pointer');
    fill(160, 82, 45); // Saddle brown
    text("Office Chair", mouseX + 15, mouseY - 25);
  }
  
  // Large Window
  else if (mouseX >= 650 && mouseX <= 900 && mouseY >= 100 && mouseY <= 450) {
    cursor('pointer');
    fill(255, 215, 0); // Golden
    text("Window View", mouseX + 15, mouseY - 25);
  }
  
  // Large Plant (left side, tall one)
  else if (mouseX >= 80 && mouseX <= 180 && mouseY >= 150 && mouseY <= 400) {
    cursor('pointer');
    fill(34, 139, 34); // Forest green
    text("Tall Plant (Left)", mouseX + 15, mouseY - 25);
  }
  
  // Plant near desk (middle-left)
  else if (mouseX >= 250 && mouseX <= 320 && mouseY >= 300 && mouseY <= 500) {
    cursor('pointer');
    fill(50, 205, 50); // Lime green
    text("Desk Plant", mouseX + 15, mouseY - 25);
  }
  
  // Large plant (right side)
  else if (mouseX >= 900 && mouseX <= 980 && mouseY >= 200 && mouseY <= 500) {
    cursor('pointer');
    fill(46, 125, 50); // Dark green
    text("Plant (Right)", mouseX + 15, mouseY - 25);
  }
  
  // Hanging/Wall plants (upper area)
  else if (mouseX >= 200 && mouseX <= 350 && mouseY >= 100 && mouseY <= 250) {
    cursor('pointer');
    fill(60, 179, 113); // Medium sea green
    text("Wall Plants", mouseX + 15, mouseY - 25);
  }
  
  // Shelving unit (background left)
  else if (mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <= 400) {
    cursor('pointer');
    fill(139, 90, 43); // Saddle brown
    text("Shelf Unit", mouseX + 15, mouseY - 25);
  }
  
  // Plant containers/pots (floor level)
  else if (mouseX >= 100 && mouseX <= 200 && mouseY >= 650 && mouseY <= 750) {
    cursor('pointer');
    fill(160, 82, 45); // Saddle brown
    text("Plant Pots", mouseX + 15, mouseY - 25);
  }
  
  // Additional small plants (various locations)
  else if ((mouseX >= 600 && mouseX <= 680 && mouseY >= 300 && mouseY <= 400) ||
           (mouseX >= 50 && mouseX <= 120 && mouseY >= 500 && mouseY <= 600)) {
    cursor('pointer');
    fill(34, 139, 34); // Forest green
    text("Small Plant", mouseX + 15, mouseY - 25);
  }
  
  // Reset text fill for coordinate display
  fill(255); // White text
  stroke(0); // Black outline
  strokeWeight(1);
}

function mousePressed() {
  // Check which interactive zone was clicked and set appropriate message
  
  // Desktop Computer
  if (mouseX >= 360 && mouseX <= 500 && mouseY >= 400 && mouseY <= 580) {
    clickMessage = "The computer boots up slowly... *Windows 95 startup sound*";
    messageTimer = messageDuration;
  }
  
  // Office Desk
  else if (mouseX >= 320 && mouseX <= 600 && mouseY >= 520 && mouseY <= 670) {
    clickMessage = "You organize the papers on the desk. Much better!";
    messageTimer = messageDuration;
  }
  
  // Office Chair
  else if (mouseX >= 520 && mouseX <= 620 && mouseY >= 580 && mouseY <= 720) {
    clickMessage = "The chair spins! Wheeeee! *productivity drops by 50%*";
    messageTimer = messageDuration;
  }
  
  // Large Window
  else if (mouseX >= 650 && mouseX <= 900 && mouseY >= 100 && mouseY <= 450) {
    clickMessage = "What a beautiful sunset! Time flies when you're coding...";
    messageTimer = messageDuration;
  }
  
  // Large Plant (left side)
  else if (mouseX >= 80 && mouseX <= 180 && mouseY >= 150 && mouseY <= 400) {
    clickMessage = "This plant needs water... and maybe some debugging too!";
    messageTimer = messageDuration;
  }
  
  // Plant near desk
  else if (mouseX >= 250 && mouseX <= 320 && mouseY >= 300 && mouseY <= 500) {
    clickMessage = "Your desk plant whispers: 'Have you committed your code yet?'";
    messageTimer = messageDuration;
  }
  
  // Large plant (right side)
  else if (mouseX >= 900 && mouseX <= 980 && mouseY >= 200 && mouseY <= 500) {
    clickMessage = "This plant is thriving! Unlike your sleep schedule...";
    messageTimer = messageDuration;
  }
  
  // Wall plants
  else if (mouseX >= 200 && mouseX <= 350 && mouseY >= 100 && mouseY <= 250) {
    clickMessage = "The hanging plants sway gently. Very zen for debugging!";
    messageTimer = messageDuration;
  }
  
  // Shelving unit
  else if (mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <= 400) {
    clickMessage = "Dusty programming books and a rubber duck. The essentials!";
    messageTimer = messageDuration;
  }
  
  // Plant pots
  else if (mouseX >= 100 && mouseX <= 200 && mouseY >= 650 && mouseY <= 750) {
    clickMessage = "Empty pots waiting for new plants... or new projects!";
    messageTimer = messageDuration;
  }
  
  // Small plants
  else if ((mouseX >= 600 && mouseX <= 680 && mouseY >= 300 && mouseY <= 400) ||
           (mouseX >= 50 && mouseX <= 120 && mouseY >= 500 && mouseY <= 600)) {
    clickMessage = "Even the smallest plants need love and version control!";
    messageTimer = messageDuration;
  }
}

function displayClickMessage() {
  if (messageTimer > 0) {
    // Message box styling
    fill(0, 0, 0, 180); // Semi-transparent black background
    noStroke();
    rectMode(CENTER);
    rect(width/2, 100, 600, 60, 10); // Rounded rectangle
    
    // Message text styling
    fill(255, 255, 255); // White text
    textAlign(CENTER);
    textSize(18);
    text(clickMessage, width/2, 105);
    
    // Countdown the timer
    messageTimer--;
    
    // Reset text alignment for other text elements
    textAlign(LEFT);
    textSize(16);
  }
}