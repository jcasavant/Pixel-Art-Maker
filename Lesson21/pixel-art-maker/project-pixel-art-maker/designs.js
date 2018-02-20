/**************************************************************
* Program: Pixel Art Marker
* Author: John Casavant
* Date: 17-Feb-2018
* Requirements:
* 1. The student implements while and for loops to clear and create the grid dynamically.
* 2. Student successfully implements makeGrid() and call it upon the user submitting the grid size.
* 3. The student uses selectors to access user input values and select elements in the DOM.
* 4. The student uses event listeners to trigger grid creation, and modify the grid colors.
***************************************************************/
//declare global variables
let gDrawn;

//add event listener for Canvas
$("#pixelCanvas").click(function(e){
    // get selected color
    let pColor = $("#colorPicker").val();
    //color the td element that was clicked
    $(e.target.closest("td")).css("background-color", pColor);
  });

//draw grid on submit
$("#submit").on("click", function(){
    makeGrid();
    return false; //to stop the UI from redraw
});

//need to remove children so it won't add more items to grid
function resetGrid(){
  //empty grid
  $("#pixelCanvas").empty();
  //reset colorPicker to black
  $("#colorPicker").val("#000000");
}

// When Submit button is clicked by the user, call makeGrid()
function makeGrid() {
  // Your code goes here!
  let iRow = $("#inputHeight").val();
  let iColumn = $("#inputWeight").val();

  if( iRow <=0 || iColumn <=0){
    alert("Please input a value greater than zero!");
    resetGrid();
    return;
  }

//clear grid if already drawn
  if (gDrawn == true){
    resetGrid();
    gDrawn = false;
  }

  while (!gDrawn)
  {
    //create table grid
    for(let r=0; r < iRow; r++) {
      $("#pixelCanvas").append("<tr></tr>");
        for(let c=0; c < iColumn; c++) {
          $("#pixelCanvas").children().last().append("<td></td>");
        }
    }
    gDrawn = true;
  }
}
