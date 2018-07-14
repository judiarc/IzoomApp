$(document).ready(function(){
	var screen_height=window.screen.availHeight;
	var screen_width=window.screen.availWidth;
	//alert("screen_height" + screen_height);
	//alert("screen_width" + screen_width);
	var width = 0;
	var height = 0;
	if(screen_width > screen_height){
		width = screen_width/1;
		height = screen_height/1.18;
	}else {
			width = screen_width/1.20;
			height = screen_height/1.95;
	}
	document.getElementById("image_link1").style.width = width+'px';
	document.getElementById("image_link1").style.height = height+'px';
	document.getElementById("image_link2").style.width = width+'px';
	document.getElementById("image_link2").style.height = height+'px';
	document.getElementById("image_link3").style.width = width+'px';
	document.getElementById("image_link3").style.height = height+'px';
	document.getElementById("image_link4").style.width = width+'px';
	document.getElementById("image_link4").style.height = height+'px';
	document.getElementById("image_link5").style.width = width+'px';
	document.getElementById("image_link5").style.height = height+'px';
	 $("#photos").click(function(){
		var photo = (-0.011) * screen_height;
		var video = (1)*screen_height;
		var album = (2)*screen_height;
		var kids = (3)*screen_height;
		var tours = (4)*screen_height;
		
		 $("#image_link2.Videography").animate({top: video ,opacity: '0.2'},1000); 
		 $("#image_link3.Albums").animate({top: album,opacity: '0.2'},1000); 
		 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
		 $("#image_link1.Photography").animate({top: photo,opacity: '1.0'},1000); 
		 $("#image_link5.Tours").animate({top: kids,opacity: '0.2'},1000);
		 
		 	$("#image_link1.Photography").addClass("show");
	 		$("#image_link2.Videography").removeClass("show");
	 		$("#image_link3.Albums").removeClass("show");
	 		$("#image_link4.Kids").removeClass("show");
	 		$("#image_link5.Tours").removeClass("show");

	 		$(".redirect_link").attr("data-color","#ec8010");
	 	//	$(".default").css("background": "yellow");
	 		$(".default").addClass("is--animated");
	 		$(".default").css({"background": "#32584e"});
	 		
	 		/*Changing anchor button size when its active*/
	 		$("#photos").css("transform","scale(2)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(1)");
	 		$("#tours").css("transform","scale(1)");

	 		$("#photos").prop('disabled', true);
	 		$("#videos").prop('disabled', false);
	 		$("#kids").prop('disabled', false);
	 		$("#albums").prop('disabled', false);
	 		$("#tours").prop('disabled', false);
	 		
	 		
	    });
	 	$("#videos").click(function(){
	 		
	 		var photo = (-1)*screen_height;
			var video = (-0.86)*screen_height;
			var album = (1)*screen_height;
			var kids = (2)*screen_height;
			var tours = (3)*screen_height;
	 		
	 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
			$("#image_link2.Videography").animate({top: video,opacity: '1.0'},1000); 
			$("#image_link3.Albums").animate({top: album ,opacity: '0.2'},1000); 
			 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
			 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);

			
		 		$("#image_link1.Photography").removeClass("show");
		 		$("#image_link2.Videography").addClass("show");
		 		$("#image_link3.Albums").removeClass("show");
		 		$("#image_link4.Kids").removeClass("show");
		 		$("#image_link5.Tours").removeClass("show");

	 		
	 		
	 		$(".redirect_link").attr("data-color","#32584e");
	 		$(".default").css({"background": "#62a7b7"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(2)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(1)");
	 		$("#tours").css("transform","scale(1)");
	 		
	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', true);
	 		$("#kids").prop('disabled', false);
	 		$("#albums").prop('disabled', false);
	 		$("#tours").prop('disabled', false);
	 		

	 	});
	 	$("#albums").click(function(){
	
	 		var photo = (-1.85)*screen_height;
			var video = (-1.81)*screen_height;
			var album = (-1.71)*screen_height;
			var kids = (-0.05)*screen_height;
			var tours = (2)*screen_height;
	 		
	 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
	 		$("#image_link2.Videography").animate({top: video,opacity: '0.2'},1000); 
			$("#image_link3.Albums").animate({top: album,opacity: '1.0'},1000);  
			 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
			 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);

			
		 		$("#image_link1.Photography").removeClass("show");
		 		$("#image_link2.Videography").removeClass("show");
		 		$("#image_link3.Albums").addClass("show");
		 		$("#image_link4.Kids").removeClass("show");
		 		$("#image_link5.Tours").removeClass("show");


		 		
		 		$(".redirect_link").attr("data-color","#62a7b7");
		 		$(".default").css({"background": "#89d5e5"});
		 		$("#photos").css("transform","scale(1)");
		 		$("#videos").css("transform","scale(1)");
		 		$("#albums").css("transform","scale(2)");
		 		$("#kids").css("transform","scale(1)");
		 		$("#tours").css("transform","scale(1)");
		 		$("#photos").prop('disabled', false);
		 		$("#videos").prop('disabled', false);
		 		$("#albums").prop('disabled', true);
		 		$("#kids").prop('disabled', false);
		 		$("#tours").prop('disabled', false);

		 	});
		 
	 	$("#kids").click(function(){
	 		var photo = (-3.29)*screen_height;
			var video = (-3.4)*screen_height;
			var album = (-2.79)*screen_height;
			var kids = (-2.56)*screen_height;
			var tours = (0.05)*screen_height;
	 			 		
	 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
	 		$("#image_link2.Videography").animate({top: video,opacity: '0.2'},1000); 
	 		$("#image_link3.Albums").animate({top: album,opacity: '0.2'},1000);   
	 		$("#image_link4.Kids").animate({top: kids,opacity: '1.0'},1000);
			 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);

			
		 		$("#image_link1.Photography").removeClass("show");
		 		$("#image_link2.Videography").removeClass("show");
		 		$("#image_link3.Albums").removeClass("show");
		 		$("#image_link4.Kids").addClass("show");
		 		$("#image_link5.Tours").removeClass("show");

	 		

	 		
	 		$(".redirect_link").attr("data-color","#a3d9cb");
	 		$(".default").css({"background": "#bdb1ef"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(2)");	 
	 		$("#tours").css("transform","scale(1)");

	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', false);
	 		$("#albums").prop('disabled', false);
	 		$("#kids").prop('disabled', true);
	 		$("#tours").prop('disabled', false);
	 		
	 		});
	 	
	 	$("#tours").click(function(){
	 		
	 		var photo = (-5.3)*screen_height;
			var video = (-4.8)*screen_height;
			var album = (-4.7)*screen_height;
			var kids = (-3.8)*screen_height;
			var tours = (-3.42)*screen_height;
	 		
	 		
	 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
	 		$("#image_link2.Videography").animate({top: video ,opacity: '0.2'},1000); 
	 		$("#image_link3.Albums").animate({top: album,opacity: '0.2'},1000);   
	 		$("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000);
			 $("#image_link5.Tours").animate({top: tours,opacity: '1.0'},1000);

			
		 		$("#image_link1.Photography").removeClass("show");
		 		$("#image_link2.Videography").removeClass("show");
		 		$("#image_link3.Albums").removeClass("show");
		 		$("#image_link4.Kids").removeClass("show");
		 		$("#image_link5.Tours").addClass("show");

	 		

	 		
	 		$(".redirect_link").attr("data-color","#a3d9cb");
	 		$(".default").css({"background": "#bdb1ef"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(1)");	 
	 		$("#tours").css("transform","scale(2)");

	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', false);
	 		$("#kids").prop('disabled', false);
	 		$("#albums").prop('disabled', false);
	 		$("#tours").prop('disabled', true);
	 		
	 		});

	 	

	 	
		$("#previous").click(function(){
			if(($("#image_link5").hasClass("Tours"))&&(($("#image_link5").hasClass("show"))))
			{
				if(screen_width > screen_height){
					var photo = (-4)*screen_height;
					var video = (-3)*screen_height;
					var album = (-2.7)*screen_height;
					var kids = (-2.569)*screen_height;
					var tours = (-2.53)*screen_height;
				}else {
					var photo = (-4)*screen_height;
					var video = (-3)*screen_height;
					var album = (-2)*screen_height;
					var kids = (-1.55)*screen_height;
					var tours = (0.05)*screen_height;
				}
				
		 			 		
		 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
		 		$("#image_link2.Videography").animate({top: video,opacity: '0.2'},1000); 
		 		$("#image_link3.Albums").animate({top: album,opacity: '0.2'},1000);   
		 		$("#image_link4.Kids").animate({top: kids,opacity: '1.0'},1000);
				 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);
	 		
	 		$("#image_link5.Tours").removeClass("show");
	 		$("#image_link4.Kids").addClass("show");
	 		
	 		
	 		
	 		$(".default").css({"background": "#bdb1ef"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(2)");
	 		$("#tours").css("transform","scale(1)");

	 		
	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', false);
	 		$("#albums").prop('disabled', false);
	 		$("#kids").prop('disabled', true);
	 		$("#tours").prop('disabled', false);
	 		
	 		
	 		return;
			}
			if(($("#image_link4").hasClass("Kids"))&&(($("#image_link4").hasClass("show"))))
			{
				if(screen_width > screen_height){
					var photo = (-2.5)*screen_height;
					var video = (-1.79)*screen_height;
					var album = (-1.71)*screen_height;
					var kids = (-0.05)*screen_height;
					var tours = (2)*screen_height;
				}else {
					var photo = (-2.5)*screen_height;
					var video = (-1.5)*screen_height;
					var album = (-1.05)*screen_height;
					var kids = (-0.05)*screen_height;
					var tours = (2)*screen_height;
				}
				
		 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
		 		$("#image_link2.Videography").animate({top: video,opacity: '0.2'},1000); 
				$("#image_link3.Albums").animate({top: album,opacity: '1.0'},1000);  
				 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
				 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);
	 		
	 		$("#image_link4.Kids").removeClass("show");
	 		$("#image_link3.Albums").addClass("show");
	 		
	 		
	 		
	 		$(".default").css({"background": "#bdb1ef"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(2)");
	 		$("#kids").css("transform","scale(1)");
	 		$("#tours").css("transform","scale(1)");

	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', false);
	 		$("#albums").prop('disabled', true);
	 		$("#kids").prop('disabled', false);
	 		$("#tours").prop('disabled', false);
	 		return;
			}
 		if(($("#image_link3").hasClass("Albums"))&&(($("#image_link3").hasClass("show"))))
 		{
 			if(screen_width > screen_height){
	 			var photo = (-1.2)*screen_height;
				var video = (-0.86)*screen_height;
				var album = (1)*screen_height;
				var kids = (2)*screen_height;
				var tours = (3)*screen_height;
 			} else {
 				var photo = (-1)*screen_height;
				var video = (-0.55)*screen_height;
				var album = (1)*screen_height;
				var kids = (2)*screen_height;
				var tours = (3)*screen_height;
 			}
	 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
			$("#image_link2.Videography").animate({top: video,opacity: '1.0'},1000); 
			$("#image_link3.Albums").animate({top: album ,opacity: '0.2'},1000); 
			 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
			 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);
	 		
	 		$("#image_link3.Albums").removeClass("show");
	 		$("#image_link2.Videography").addClass("show");
 			
 			
	 		$(".default").css({"background": "#62a7b7"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(2)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(1)");
	 		$("#tours").css("transform","scale(1)");
	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', true);
	 		$("#albums").prop('disabled', false);
	 		$("#kids").prop('disabled', false);
	 		$("#tours").prop('disabled', false);
	 		return;
 		}
 		if(($("#image_link2").hasClass("Videography"))&&(($("#image_link2").hasClass("show"))))
			{
 			if(screen_width > screen_height){
	 			var photo = (-0.011) * screen_height;
	 			var video = (1)*screen_height;
	 			var album = (2)*screen_height;
	 			var kids = (3)*screen_height;
	 			var tours = (4)*screen_height;
 			}else {
 				var photo = (-0.05) * screen_height;
	 			var video = (1)*screen_height;
	 			var album = (2)*screen_height;
	 			var kids = (3)*screen_height;
	 			var tours = (4)*screen_height;
 			}
 			
 			 $("#image_link2.Videography").animate({top: video ,opacity: '0.2'},1000); 
 			 $("#image_link3.Albums").animate({top: album,opacity: '0.2'},1000); 
 			 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
 			 $("#image_link1.Photography").animate({top: photo,opacity: '1.0'},1000); 
 			 $("#image_link5.Tours").animate({top: kids,opacity: '0.2'},1000);
	 		
	 		$("#image_link2.Videography").removeClass("show");
	 		$("#image_link1.Photography").addClass("show");
 			
	 		$(".default").css({"background": "#32584e"});
	 		$("#photos").css("transform","scale(2)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(1)");
	 		$("#tours").css("transform","scale(1)");
	 		$("#photos").prop('disabled', true);
	 		$("#videos").prop('disabled', false);
	 		$("#albums").prop('disabled', false);
	 		$("#kids").prop('disabled', false);
	 		$("#tours").prop('disabled', false);
	 		return;
			}
			


	 	});
		$("#next").click(function(){
			if(($("#image_link1").hasClass("Photography"))&&(($("#image_link1").hasClass("show"))))
			{
				if(screen_width > screen_height){
					var photo = (-1)*screen_height;
					var video = (-0.86)*screen_height;
					var album = (1)*screen_height;
					var kids = (2)*screen_height;
					var tours = (3)*screen_height;
				}else {
					var photo = (-1)*screen_height;
					var video = (-0.55)*screen_height;
					var album = (1)*screen_height;
					var kids = (2)*screen_height;
					var tours = (3)*screen_height;
				}
		 		
		 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
				$("#image_link2.Videography").animate({top: video,opacity: '1.0'},1000); 
				$("#image_link3.Albums").animate({top: album ,opacity: '0.2'},1000); 
				 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
				 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);
					
					
			 		
	 		
	 		$("#image_link1.Photography").removeClass("show");
	 		$("#image_link2.Videography").addClass("show");
	 		$(".default").css({"background": "#62a7b7"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(2)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(1)");
	 		$("#tours").css("transform","scale(1)");
	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', true);
	 		$("#albums").prop('disabled', false);
	 		$("#kids").prop('disabled', false);
	 		$("#tours").prop('disabled', false);
	 		return;
			}
 		if(($("#image_link2").hasClass("Videography"))&&(($("#image_link2").hasClass("show"))))
 		{
 			if(screen_width > screen_height){
	 			var photo = (-1.85)*screen_height;
				var video = (-1.81)*screen_height;
				var album = (-1.71)*screen_height;
				var kids = (-0.05)*screen_height;
				var tours = (2)*screen_height;
 			}else {
 				var photo = (-2.5)*screen_height;
				var video = (-1.5)*screen_height;
				var album = (-1.10)*screen_height;
				var kids = (-0.05)*screen_height;
				var tours = (2)*screen_height;
 			}
	 		
	 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
	 		$("#image_link2.Videography").animate({top: video,opacity: '0.2'},1000); 
			$("#image_link3.Albums").animate({top: album,opacity: '1.0'},1000);  
			 $("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000); 
			 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);
	 		
	 		$("#image_link2.Videography").removeClass("show");
	 		$("#image_link3.Albums").addClass("show");
	 		
	 		$(".default").css({"background": "#bdb1ef"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(2)");
	 		$("#kids").css("transform","scale(1)");
	 		$("#tours").css("transform","scale(1)");

	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', false);
	 		$("#albums").prop('disabled', true);
	 		$("#kids").prop('disabled', false);
	 		$("#tours").prop('disabled', false);
	 		return;
 		}
 		if(($("#image_link3").hasClass("Albums"))&&(($("#image_link3").hasClass("show"))))
			{
 			if(screen_width > screen_height){
	 			var photo = (-3.29)*screen_height;
				var video = (-3.04)*screen_height;
				var album = (-2.79)*screen_height;
				var kids = (-2.56)*screen_height;
				var tours = (-2)*screen_height;
 			}else {
 				var photo = (-4)*screen_height;
				var video = (-3)*screen_height;
				var album = (-2)*screen_height;
				var kids = (-1.58)*screen_height;
				var tours = (0.05)*screen_height;
 			}
	 			 		
	 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
	 		$("#image_link2.Videography").animate({top: video,opacity: '0.2'},1000); 
	 		$("#image_link3.Albums").animate({top: album,opacity: '0.2'},1000);   
	 		$("#image_link4.Kids").animate({top: kids,opacity: '1.0'},1000);
			 $("#image_link5.Tours").animate({top: tours,opacity: '0.2'},1000);
	 		
	 		$("#image_link3.Albums").removeClass("show");
	 		$("#image_link4.Kids").addClass("show");
	 		
	 		$(".default").css({"background": "#89d5e5"});
	 		$("#photos").css("transform","scale(1)");
	 		$("#videos").css("transform","scale(1)");
	 		$("#albums").css("transform","scale(1)");
	 		$("#kids").css("transform","scale(2)");
	 		$("#tours").css("transform","scale(1)");
	 		$("#photos").prop('disabled', false);
	 		$("#videos").prop('disabled', false);
	 		$("#albums").prop('disabled', false);
	 		$("#kids").prop('disabled', true);
	 		$("#tours").prop('disabled', false);
	 		return;
			}
		if(($("#image_link4").hasClass("Kids"))&&(($("#image_link4").hasClass("show"))))
		{
			if(screen_width > screen_height){	
			 	var photo = (-5.3)*screen_height;
				var video = (-4.8)*screen_height;
				var album = (-4.3)*screen_height;
				var kids = (-3.8)*screen_height;
				var tours = (-3.42)*screen_height;
			}else {
				var photo = (-6)*screen_height;
				var video = (-5)*screen_height;
				var album = (-4)*screen_height;
				var kids = (-3)*screen_height;
				var tours = (-2.10)*screen_height;
			}
		 		
		 		
		 		$("#image_link1.Photography").animate({top: photo,opacity: '0.2'},1000); 
		 		$("#image_link2.Videography").animate({top: video ,opacity: '0.2'},1000); 
		 		$("#image_link3.Albums").animate({top: album,opacity: '0.2'},1000);   
		 		$("#image_link4.Kids").animate({top: kids,opacity: '0.2'},1000);
				 $("#image_link5.Tours").animate({top: tours,opacity: '1.0'},1000);
 		
 		$("#image_link4.Kids").removeClass("show");
 		$("#image_link5.Tours").addClass("show");
 		
 		$(".default").css({"background": "#89d5e5"});
 		$("#photos").css("transform","scale(1)");
 		$("#videos").css("transform","scale(1)");
 		$("#albums").css("transform","scale(1)");
 		$("#kids").css("transform","scale(1)");
 		$("#tours").css("transform","scale(2)");

 		$("#photos").prop('disabled', false);
 		$("#videos").prop('disabled', false);
 		$("#albums").prop('disabled', false);
 		$("#kids").prop('disabled', false);
 		$("#tours").prop('disabled', true);
 		return;
		}

	 	});
		
	  
	 	
});