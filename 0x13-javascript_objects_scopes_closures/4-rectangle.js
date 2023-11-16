class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      // Create an empty object if w or h is equal to 0 or not a positive integer
      return {};
    }

    // Initialize instance attributes
    this.width = w;
    this.height = h;
  }

  print() {
    if (this.width === undefined || this.height === undefined) {
      console.log("Invalid rectangle: Either width or height is not a positive integer.");
      return;
    }

    // Print the rectangle using the character 'X'
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate() {
    // Exchange the width and height of the rectangle
    [this.width, this.height] = [this.height, this.width];
  }

  double() {
    // Multiply the width and height of the rectangle by 2
    this.width *= 2;
    this.height *= 2;
  }
}

// Example usage:
const validRectangle = new Rectangle(5, 3);
validRectangle.print();
validRectangle.rotate();
validRectangle.print();
validRectangle.double();
validRectangle.print();

