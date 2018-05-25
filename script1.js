function resetCalculator(curValue) { 
    $("#result").val(curValue); 
    $(".function-button").removeClass("pendingFunction"); 
    $("#result").data("isPendingFunction", false); 
    $("#result").data("thePendingFunction", ""); 
    $("#result").data("valueOneLocked", false); 
    $("#result").data("valueTwoLocked", false); 
    $("#result").data("valueOne", curValue); 
    $("#result").data("valueTwo", 0); 
    $("#result").data("fromPrevious", false); 
}
/**/
///CALCULATOR
$(function(){
	
	resetCalculator('0');
/**/
///NUMBERS-CLICK
$('.num-button').click(function() {
	    if ($("#result").data("fromPrevious") == true) { 
  
        resetCalculator($(this).text()); 
      
    } else if (($("#result").data("isPendingFunction") == true) && ($("#result").data("valueOneLocked") == false)) { 
      
        $("#result").data("valueOne", $("#result").val()); 
        $("#result").data("valueOneLocked", true); 
      
        $("#result").val($(this).text()); 
        $("#result").data("valueTwo", $("#result").val()); 
        $("#result").data("valueTwoLocked", true); 
  
    // Clicking a number AGAIN, after first number locked and already value for second number    
    } 	else if (($("#result").data("isPendingFunction") == true) && ($("#result").data("valueOneLocked") == true)) { 
  
        var curValue = $("#result").val(); 
        var toAdd = $(this).text(); 
  
        var newValue = curValue + toAdd; 
  
        $("#result").val(newValue); 
      
        $("#result").data("valueTwo", $("#result").val()); 
        $("#result").data("valueTwoLocked", true); 
  
    // Clicking on a number fresh    
    } else { 
  
        var curValue = $("#result").val(); 
        if (curValue == "0") { 
            curValue = ""; 
        } 
  
        var toAdd = $(this).text(); 
  
        var newValue = curValue + toAdd; 
  
        $("#result").val(newValue); 
  
    } 
      
});
/**/
///FUNCTION-CLICK
$('.function-button').click(function() {
	 if ($("#result").data("fromPrevious") == true) { 
        resetCalculator($("#result").val()); 
        $("#result").data("valueOneLocked", false); 
        $("#result").data("fromPrevious", false) 
    } 
      
    // Let it be known that a function has been selected 
    var pendingFunction = $(this).text(); 
    $("#result").data("isPendingFunction", true); 
    $("#result").data("thePendingFunction", pendingFunction); 
      
    // Visually represent the current function 
    $(".function-button").removeClass("pendingFunction"); 
    $(this).addClass("pendingFunction"); 
});
/**/
///CLEAR-CLICK
$('.clear-button').click(function() {
	  resetCalculator("0"); 
});
/**/
///EQUAL-CLICK
$('.equals-button').click(function() {
	 if (($("#result").data("valueOneLocked") == true) && ($("#result").data("valueTwoLocked") == true)) { 
          
        if ($("#result").data("thePendingFunction") == "+") { 
            var finalValue = parseFloat($("#result").data("valueOne")) + parseFloat($("#result").data("valueTwo")); 
        } else if ($("#result").data("thePendingFunction") == "-") { 
            var finalValue = parseFloat($("#result").data("valueOne")) - parseFloat($("#result").data("valueTwo")); 
        } else if ($("#result").data("thePendingFunction") == "*") { 
            var finalValue = parseFloat($("#result").data("valueOne")) * parseFloat($("#result").data("valueTwo")); 
        } else if ($("#result").data("thePendingFunction") == "/") { 
            var finalValue = parseFloat($("#result").data("valueOne")) / parseFloat($("#result").data("valueTwo")); 
        } 
          
        $("#result").val(finalValue); 
                      
        resetCalculator(finalValue); 
        $("#result").data("fromPrevious", true); 
                      
    } else { 
        // both numbers are not locked, do nothing. 
    } 
});
});