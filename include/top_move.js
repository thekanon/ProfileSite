	function goTop(orix,oriy,desx,desy) {
		var Timer;
		var winHeight = document.body.scrollTop;
		if(Timer) clearTimeout(Timer);
		startx = 0;
		starty = winHeight;
		if(!orix || orix < 0) orix = 0;
		if(!oriy || oriy < 0) oriy = 0;
		var speed = 7;
		if(!desx) desx = 0 + startx;
		if(!desy) desy = 0 + starty;
		desx += (orix - startx) / speed;
		if (desx < 0) desx = 0;
		desy += (oriy - starty) / speed;
		if (desy < 0) desy = 0;
		var posX = Math.ceil(desx);
		var posY = Math.ceil(desy);
		window.scrollTo(posX, posY);
		if((Math.floor(Math.abs(startx - orix)) < 1) && (Math.floor(Math.abs(starty - oriy)) < 1)){
			clearTimeout(Timer);
			window.scroll(orix,oriy);
		}else if(posX != orix || posY != oriy){
			Timer = setTimeout("goTop("+orix+","+oriy+","+desx+","+desy+")",15);
		}else{
			clearTimeout(Timer);
		}
	}

	//vFile : 다운로드할 파일명
	function fDownFile(vFile){
		document.frmRegist.txtSubject.value = vFile;
		document.frmRegist.target = "ifr";
		document.frmRegist.action = "Boarddopost_dc.asp";
		//alert(document.frmRegist.txtSubject.value) ;
		document.frmRegist.submit();	

	}
	

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}




	function fView_IntroLayer(pGb){
		if (pGb == "0"){
			IntroLayer.style.display = "none"; 
		}else{
			IntroLayer.style.display = ""; 
			ExLayer.style.display = "none"; 
			ComLayer.style.display = "none"; 
		}
	}


	function fView_ExLayer(pGb){
		if (pGb == "0"){
			ExLayer.style.display = "none"; 
		}else{
			IntroLayer.style.display = "none"; 
			ExLayer.style.display = ""; 
			ComLayer.style.display = "none"; 
		}
	}
	
		function fView_ComLayer(pGb){
		if (pGb == "0"){
			ComLayer.style.display = "none"; 
		}else{
			IntroLayer.style.display = "none"; 
			ExLayer.style.display = "none"; 
			ComLayer.style.display = ""; 
		}
	}

		function fHide_NoLayer(pGb){
		if (pGb == "0"){
			IntroLayer.style.display = ""; 
			ExLayer.style.display = ""; 
			ComLayer.style.display = ""; 
		}else{
			IntroLayer.style.display = "none"; 
			ExLayer.style.display = "none"; 
			ComLayer.style.display = "none"; 
		}
	}

		function fView_Pro1Layer(pGb){
		if (pGb == "0"){
			Pro1Layer.style.display = "none"; 
		}else{
			Pro1Layer.style.display = ""; 
			Pro2Layer.style.display = "none"; 
			Pro3Layer.style.display = "none"; 
			Pro4Layer.style.display = "none"; 
			Pro5Layer.style.display = "none"; 
			Pro6Layer.style.display = "none"; 
			Pro7Layer.style.display = "none"; 				
		}
	}

		function fView_Pro2Layer(pGb){
		if (pGb == "0"){
			Pro2Layer.style.display = "none"; 
		}else{
			Pro1Layer.style.display = "none"; 
			Pro2Layer.style.display = ""; 
			Pro3Layer.style.display = "none"; 
			Pro4Layer.style.display = "none"; 
			Pro5Layer.style.display = "none"; 
			Pro6Layer.style.display = "none"; 
			Pro7Layer.style.display = "none"; 				
		}
	}


		function fView_Pro3Layer(pGb){
		if (pGb == "0"){
			Pro3Layer.style.display = "none"; 
		}else{
			Pro1Layer.style.display = "none"; 
			Pro2Layer.style.display = "none"; 
			Pro3Layer.style.display = ""; 
			Pro4Layer.style.display = "none"; 
			Pro5Layer.style.display = "none"; 
			Pro6Layer.style.display = "none"; 
			Pro7Layer.style.display = "none"; 				
		}
	}


		function fView_Pro4Layer(pGb){
		if (pGb == "0"){
			Pro4Layer.style.display = "none"; 
		}else{
			Pro1Layer.style.display = "none"; 
			Pro2Layer.style.display = "none"; 
			Pro3Layer.style.display = "none"; 
			Pro4Layer.style.display = ""; 
			Pro5Layer.style.display = "none"; 
			Pro6Layer.style.display = "none"; 
			Pro7Layer.style.display = "none"; 				
		}
	}


		function fView_Pro5Layer(pGb){
		if (pGb == "0"){
			Pro5Layer.style.display = "none"; 
		}else{
			Pro1Layer.style.display = "none"; 
			Pro2Layer.style.display = "none"; 
			Pro3Layer.style.display = "none"; 
			Pro4Layer.style.display = "none"; 
			Pro5Layer.style.display = ""; 
			Pro6Layer.style.display = "none"; 
			Pro7Layer.style.display = "none"; 				
		}
	}


		function fView_Pro6Layer(pGb){
		if (pGb == "0"){
			Pro6Layer.style.display = "none"; 
		}else{
			Pro1Layer.style.display = "none"; 
			Pro2Layer.style.display = "none"; 
			Pro3Layer.style.display = "none"; 
			Pro4Layer.style.display = "none"; 
			Pro5Layer.style.display = "none"; 
			Pro6Layer.style.display = ""; 
			Pro7Layer.style.display = "none"; 	
		}
	}

		function fView_Pro7Layer(pGb){
		if (pGb == "0"){
			Pro7Layer.style.display = "none"; 
		}else{
			Pro1Layer.style.display = "none"; 
			Pro2Layer.style.display = "none"; 
			Pro3Layer.style.display = "none"; 
			Pro4Layer.style.display = "none"; 
			Pro5Layer.style.display = "none"; 
			Pro6Layer.style.display = "none"; 
			Pro7Layer.style.display = ""; 			
		}
	}


		function fHide_Pro0Layer(pGb){
		if (pGb == "0"){
			Pro1Layer.style.display = ""; 
			Pro2Layer.style.display = ""; 
			Pro3Layer.style.display = ""; 
			Pro4Layer.style.display = ""; 
			Pro5Layer.style.display = ""; 
			Pro6Layer.style.display = ""; 
			Pro7Layer.style.display = ""; 			
		}else{
			Pro1Layer.style.display = "none"; 
			Pro2Layer.style.display = "none"; 
			Pro3Layer.style.display = "none"; 
			Pro4Layer.style.display = "none"; 
			Pro5Layer.style.display = "none"; 
			Pro6Layer.style.display = "none"; 
			Pro7Layer.style.display = "none"; 			
		}
	}



function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

	