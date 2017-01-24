// function that creates grid when page loads and allows mouseover function
// function also clears the grid when user clicks "Clear" button
$(document).ready(function() {
    createGrid(16);

    $(".box").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".resizeGrid").click(function() {
        refresh();

        $(".box").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });

	$(".reset").click(function() {
		$(".box").css('background-color', 'white');
	});

	$(".toggleOutline").click(function() {
		$(".box").toggleClass("outline");
	})

});

// builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='box'></div>");
        };
    };
    $(".box").width(500/x);
    $(".box").height(500/x);
};

// function that clears the grid
function clearGrid() {
	$(".box").remove();
};

// function to refresh the grid and ask user how many boxes in the new grid
function refresh() {
	var x = prompt("How many squares per side? Default is 16")
	if (x == null || x == '') {
		return;
	} else {
		clearGrid();
		createGrid(x);
	}
}