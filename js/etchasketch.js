$(document).ready(function(){
	$('#header').append('<button id = "resize">Resize</button>');
	$('#header').append('<button id = "restart">Restart</button>');
	
	{ createGrid('16');}

	$('#resize').on('click', function() {
		numSquares = prompt("How many squares per side?");
		createGrid(numSquares); 
	});

	$('#restart').on('click', function() {
		$('.square').css("background-color", "#e8e8e8");
	});
});

function createGrid(numSquares) {
	squareSize = parseInt(960/numSquares - 2);		

	$('.square').remove();

	for (i = 0; i < numSquares*numSquares; i++) {
		$('#grid').append('<div class =  "square"></div>');
	};

 	$('.square').css('height', squareSize);
  $('.square').css('width', squareSize);

  $('.square').mouseenter(function(){
    $(this).css("background-color","#000000");
  });
};