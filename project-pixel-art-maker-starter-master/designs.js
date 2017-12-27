
function makeGrid() {
	var pixR= $('#input_height').val();
	var pixC= $('#input_width').val();
	var pix= $('#pixel_canvas');
	pix.children().remove();
	
	for (var row=0 ; row < pixR ; row++){
		pix.append("<tr></tr>");
		for (var col=0 ; col < pixC ; col++) {
			pix.children().last().append("<td></td>");
		}
	}
	pix.on('click', 'td', function () {
	var boja = $("#colorPicker").val();
	$(this).css("background", boja);
	});
}

$('#send').click(function (e) {
	e.preventDefault();	
	makeGrid();
});
		
