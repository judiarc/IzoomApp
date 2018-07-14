


function myFunction()
{
		var from =document.getElementById("email").value;
		var event_type=document.getElementById("event").value;
		var mobile=document.getElementById("contact").value;
		var event=null;
		var location=document.getElementById("location").value;
		var text="testing email";
		var name="sathish";
		if(event_type==1)
			{
			event="Engagement"
			}
		else if(event_type==2)
			{
			event="Wedding"
			}
		else if(event_type==3)
		{
		event="Reception"
		}
		else if(event_type==4)
		{
		event="Outdoor"
		}
		else if(event_type==5)
		{
		event="Event Photoshoot"
		}
		else if(event_type==6)
		{
		event="Kids Photoshoot"
		}
		else if(event_type==7)
		{
		event="others"
		}
		//alert("email "+email+" event_type "+event+" mobile "+mobile+" location "+location);	
		
		//console.log("email "+email+" event_type "+event_type+" mobile "+mobile+" location "+location);
		
		 /*Event Row 1*/ 
		var event_type1=document.getElementById("event_type1").value;
		var category=null;
		
		
		if(event_type1==1)
			{
			category="Traditional Photography";
			}
		else if(event_type==2)
			{
			category="Traditional Videography";
			}
		else if(event_type==3)
		{
		category="Candid Photo";
		}
		else if(event_type==4)
		{
		category="Candid Video";
		}
		else if(event_type==5)
		{
		category="Helicam";
		}
		
		
		
		var qty1=document.getElementById("count1").value;
		//alert("count "+qty1);
		var event_date1=document.getElementById("event_date1").value;
		//alert("date "+event_date1);
		var start_time1=document.getElementById("start_time1").value;
		//alert("data "+start_time1);
		var end_time1=document.getElementById("end_time1").value;
		
		//alert("event type "+category+" qty "+qty1+" date "+event_date1+" start "+start_time1+" end "+end_time1);	
		 /*Event Row 2*/ 

		var event_type2=document.getElementById("event_type2").value;
		var quantity2=document.getElementById("count2").value;
		var event_date2=document.getElementById("event_date2").value;
		var start_time2=document.getElementById("start_time2").value;
		var end_time2=document.getElementById("end_time2").value;
		 /*Event Row 3*/ 

		var event_type3=document.getElementById("event_type3").value;
		var quantity3=document.getElementById("count3").value;
		var event_date3=document.getElementById("event_date3").value;
		var start_time3=document.getElementById("start_time3").value;
		var end_time3=document.getElementById("end_time3").value;
		 /*Event Row 4*/ 

		var event_type4=document.getElementById("event_type4").value;
		var quantity4=document.getElementById("count4").value;
		var event_date4=document.getElementById("event_date4").value;
		var start_time4=document.getElementById("start_time4").value;
		var end_time4=document.getElementById("end_time4").value;
		 /*Event Row 5*/ 

		var event_type5=document.getElementById("event_type5").value;
		var quantity5=document.getElementById("count5").value;
		var event_date5=document.getElementById("event_date5").value;
		var start_time5=document.getElementById("start_time5").value;
		var end_time5=document.getElementById("end_time5").value;
		
		 /*Event Row 6*/ 

		var event_type6=document.getElementById("event_type6").value;
		var quantity6=document.getElementById("count6").value;
		var event_date6=document.getElementById("event_date6").value;
		var start_time6=document.getElementById("start_time6").value;
		var end_time6=document.getElementById("end_time6").value;
		 /*Event Row 7*/ 

		var event_type7=document.getElementById("event_type7").value;
		var quantity7=document.getElementById("count7").value;
		var event_date7=document.getElementById("event_date7").value;
		var start_time7=document.getElementById("start_time7").value;
		var end_time7=document.getElementById("end_time7").value;
		 /*Event Row 8*/ 

		var event_type8=document.getElementById("event_type8").value;
		var quantity8=document.getElementById("count8").value;
		var event_date8=document.getElementById("event_date8").value;
		var start_time8=document.getElementById("start_time8").value;
		var end_time8=document.getElementById("end_time8").value;
		
	/*	 Event Row 4 

		var event_type4=document.getElementById("event_type1").value;
		var quantity4=document.getElementById("count1").value;
		var event_date4=document.getElementById("event_date1").value;
		var start_time4=document.getElementById("start_time1").value;
		var end_time4=document.getElementById("end_time1").value;
		
		*/
		
		
		/* $("#submit").click(function(){
		        $.post("email.php",
		        {
		          name: "Donald Duck",
		          city: "Duckburg"
		        },
		        function(data,status){
		            alert("Data: " + data + "\nStatus: " + status);
		        });
		    });;*/
		
		
		/*$.ajax({
			url:"email.php",
			method:"post",
			data:email,
			success:function(res){
				console.log(res);
			}
			
		})
		*/
		var dataString = 'name='+ name + '&email=' + from + '&text=' + text;

	    $.ajax({
            type: "POST",
            url: "email.php",
            data: dataString,
            success: function(){
            $('.success').fadeIn(1000);
            }
        });

        return false;
		
		
};
