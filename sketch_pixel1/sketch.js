var myImage;
// create a place to draw
function setup() {
	createCanvas(640, 640);
	myImage = createImage(640, 640);
	noLoop();
}


function draw() {
	// clear the background
	background(255, 255, 255);
	myImage.loadPixels();

	for (y = 0; y < 640; y += 2) {
		for (x = 0; x < 640; x += 2) {
			var pixelIndex = (y * 640 + x) * 4;

			myImage.pixels[pixelIndex] = min(random(200, 255), random(200, 255));
			myImage.pixels[pixelIndex + 1] = random(255);
			myImage.pixels[pixelIndex + 2] = random(255);
			myImage.pixels[pixelIndex + 3] = 255;

		}
	}
	var ImageSize = 24800;
	myImage.updatePixels();
	for (y = 0; y < 640; y += ImageSize) {
		for (x = 0; x < 640; x += ImageSize) {
			image(myImage, x, y, ImageSize, ImageSize);
		}
	}
}
