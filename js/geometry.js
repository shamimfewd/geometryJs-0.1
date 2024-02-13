function calculateTriangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  // console.log(base);

  //get triangle height value

  const triangleHeightInput = document.getElementById("triangle-height");

  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  // console.log(height);

  //calculate triangle area
  const area = 0.5 * base * height;
  console.log("area of the triangle", area);

  //display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}

// rectangle==========================
function calculateRectangleArea() {
  //get length of the rectangle
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const lengthText = rectangleLengthInput.value;
  const length = parseFloat(lengthText);
  console.log(length);

  //get width of the rectangle
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const widthText = rectangleWidthInput.value
  const width = parseFloat(widthText)
  console.log(width);

  //calculate rectangle area
  const area = length * width
  console.log('area of the rectangle: ', area);

  //display rectangle area

  const rectangleAreaSpan = document.getElementById('rectangle-area')
  rectangleAreaSpan.innerText = area
}
