$(document).ready(function(){


var buttonClicks = 0
var $div = $('<div>');
var $li = $('<li>');
var $newDiv = $('<div>');
var $button1 = $('<button>');
var $button2 = $('<button>');



$('.gen').on('click', function(e){
	e.preventDefault();
	// alert('works!');
	buttonClicks++;
	console.log(buttonClicks);
	appendContent();
	
});		
	
	function appendContent(){	
		var $div = $('<div>');
		$div.attr('class', buttonClicks);
	    $div.text('line #' + buttonClicks);
	    var $button1 = $('<button>');
		
		$button1.text('Remove');
    	$button1.attr('class', 'js-delete');
    	$div.append($button1);
		var $button2 = $('<button>');
		
		$button2.text('Change color');
    	$button2.attr('class', 'js-color');
    	$div.append($button2);

    	$('body').append($div);
    };

   



$("body").on('click', '.js-delete', function(e){
	e.preventDefault();
	alert('works!');
	$(this).parent().remove();
});

$('body').on('click', '.js-color', function(e){
	e.preventDefault();
	alert('works!');
	$(this).parent().attr('class', 'otherDiv');

});	


});



    

    
    

    


	// In your HTML, include a ‘generate’ button, that when clicked, will generate a new div container in the index.html. 
	// The new div should include some text that reads “Line #” and then a number specific to the number of times the 
	// generate button has been clicked. In addition to the text, you will need to include two buttons within the new div. 
	// One button will be entitled “Change Color” and the other button will entitled “Remove”.
