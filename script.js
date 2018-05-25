var resultField = document.querySelector('#result');
console.log(resultField);

var $buttons = $('button');

var $resultField = $('#result');
var a, b, operand;

var operands={
	clear: function() {
		console.log('clear');
		$resultField.val('');
		},
	plus:function(){
	
	},
	equal: function() {

		operands[operand]();
	}
}


function addToField(value){
	$resultField.val($resultField.val() + value.toString());
	}

function setOperand(value){
	operand = value;
	a = $resultField.val();
	$resultField.val('');
	}




$buttons.on('click', buttonClick);

function buttonClick(event){
	//console.dir(event);
	console.log($(this).data('value'));
	var value= $(this).data('value'),
		operand = $(this).data('operand'),
		func = $(this).data('function')

	if (value){
	addToField(value);
	} else if (operand){
		setOperand(operand)
	} else {
		operands[func]();
	}
}

