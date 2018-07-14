$(document).ready(function(){
	
	//alert("Js Page");
	/*function myFunction()
	{
		alert("button clicked");
	}*/
	/*for EventType 1*/
    $("#count1").change(function(){
    	var eventtype1 = $('#event_type1').find(":selected").text();
    	console.log("selected value "+eventtype1);
    	if((eventtype1!="Select")||(eventtype1!=null))
    		{
    		
    	$("#event_type2").removeClass("hidden");
		$("#count2").removeClass("hidden");
    	$("#event_date2").removeClass("hidden");
    	$("#start_time2").removeClass("hidden");
    	$("#end_time2").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	else 
    		{
    		$("#event_type2").addClass("hidden");
    		console.log("hidden");
    		}
    });
	/*for EventType 1*/

    $("#count2").change(function(){
    	var eventtype2 = $('#event_type2').find(":selected").text();
    	//console.log("selected value "+eventtype2);
    	if((eventtype2!="Select")||(eventtype2!=null))
    		{
    		
    		$("#event_type3").removeClass("hidden");
    		$("#count3").removeClass("hidden");
        	$("#event_date3").removeClass("hidden");
        	$("#start_time3").removeClass("hidden");
        	$("#end_time3").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	else
    		{
    		$("#event_type3").addClass("hidden");
    		console.log("hidden");
    		}
    });
    $("#count3").change(function(){
    	var eventtype3 = $('#event_type3').find(":selected").text();
    	console.log("selected value "+eventtype3);
    	if((eventtype3!="Select")||(eventtype3!=null))
    		{
    		
    		$("#event_type4").removeClass("hidden");
    		$("#count4").removeClass("hidden");
        	$("#event_date4").removeClass("hidden");
        	$("#start_time4").removeClass("hidden");
        	$("#end_time4").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	else
    		{
    		$("#event_type4").addClass("hidden");
    		console.log("hidden");
    		}
    });
    $("#count4").change(function(){
    	var eventtype4 = $('#event_type4').find(":selected").text();
    	console.log("selected value "+eventtype4);
    	if((eventtype4!="Select")||(eventtype4!=null))
    		{
    		
    		$("#event_type5").removeClass("hidden");
    		$("#count5").removeClass("hidden");
        	$("#event_date5").removeClass("hidden");
        	$("#start_time5").removeClass("hidden");
        	$("#end_time5").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	else
    		{
    		$("#event_type5").addClass("hidden");
    		console.log("hidden");
    		}
    });
    $("#count5").change(function(){
    	var eventtype5 = $('#event_type5').find(":selected").text();
    	console.log("selected value "+eventtype5);
    	if((eventtype5!="Select")||(eventtype5!=null))
    		{
    		
    		$("#event_type6").removeClass("hidden");
    		$("#count6").removeClass("hidden");
        	$("#event_date6").removeClass("hidden");
        	$("#start_time6").removeClass("hidden");
        	$("#end_time6").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	else
    		{
    		$("#event_type6").addClass("hidden");
    		console.log("hidden");
    		}
    });
    $("#count6").change(function(){
    	var eventtype6 = $('#event_type6').find(":selected").text();
    	console.log("selected value "+eventtype6);
    	if((eventtype6!="Select")||(eventtype6!=null))
    		{
    		
    		$("#event_type7").removeClass("hidden");
    		$("#count7").removeClass("hidden");
        	$("#event_date7").removeClass("hidden");
        	$("#start_time7").removeClass("hidden");
        	$("#end_time7").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	else
    		{
    		$("#event_type7").addClass("hidden");
    		console.log("hidden");
    		}
    });
    $("#count7").change(function(){
    	var eventtype7 = $('#event_type7').find(":selected").text();
    	console.log("selected value "+eventtype7);
    	if((eventtype7!="Select")||(eventtype7!=null))
    		{
    		
    		$("#event_type8").removeClass("hidden");
    		$("#count8").removeClass("hidden");
        	$("#event_date8").removeClass("hidden");
        	$("#start_time8").removeClass("hidden");
        	$("#end_time8").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	
    });
    
  /*  $("#count8").change(function(){
    	var eventtype8 = $('#event_type8').find(":selected").text();
    	console.log("selected value "+eventtype8);
    	if((eventtype8!="Select")||(eventtype8!=null))
    		{
    		
        	$("#event_date8").removeClass("hidden");
        	$("#start_time8").removeClass("hidden");
        	$("#end_time8").removeClass("hidden");

    	//alert("The text has been changed.");
    		}
    	
    })*/;
});