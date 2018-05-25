var $buttons = $('button');
var $resultField = $('#result');

var operand1, operand2, operand3, sign;

function addToField(value){
	$resultField.val($resultField.val() + value.toString());
	if (value == '0.0'){
		$resultField.val($resultField.val() - '.0');
	}
	}
	
function buttonClick(event){
/* 	if ($(this).data('value') !== undefined){
		console.log($(this).data('value'));
	} else if ($(this).data('function') !== undefined){
		console.log($(this).data('function'));
	}   
	 */
	var number=$(this).data('value'),
		operator=$(this).data('function');
		
	if (number){
	addToField(number);
	} else if (operator){
		operators[operator]();
	}
}

$buttons.on('click', buttonClick);

var operators={
	clear: function() {
		console.log('clear');
		$resultField.val('');
		},
	plus:function(){
		sign = 'plus';
		operand1 = $resultField.val();
		$resultField.val('');
	},
	minus:function(){
		sign = 'minus';
		operand1 = $resultField.val();
		$resultField.val('');
	},
	multiply:function(){
		sign = 'multiply';
		operand1 = $resultField.val();
		$resultField.val('');
	},
	divide:function(){
		sign = 'divide';
		operand1 = $resultField.val();
		$resultField.val('');
	},
	equal: function() {
		operand2 = $resultField.val();
		if (sign == 'plus'){
			operand3 = +(operand1) + +(operand2);
		}
		if (sign == 'minus'){
			operand3 = +(operand1) - +(operand2);
		}
		if (sign == 'multiply'){
			operand3 = +(operand1) * +(operand2);
		}
		if (sign == 'divide'){
			operand3 = +(operand1) / +(operand2);
		}
		
		$resultField.val(operand3);
	}
}



