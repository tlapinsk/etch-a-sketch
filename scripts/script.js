// function that creates grid when page loads and allows mouseover function
$(document).ready(function() {
    createGrid(50);

    $(".box").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".refreshGrid").click(function() {
        refresh();

        $(".box").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});

// builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='box'></div>");
        };
    };
    $(".box").width(960/x);
    $(".box").height(960/x);
};

// function that clears the grid
function clearGrid() {
	$(".box").remove();
};

// funciton to refresh the grid and ask user how many boxes in the new grid
function refresh() {
	var x = prompt("How many squares per side? Default is 50.")
	clearGrid();
	createGrid(x);
}