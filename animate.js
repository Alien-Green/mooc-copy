		function getStyle(obj,st){
			if(window.getComputedStyle){
				return getComputedStyle(obj,null)[st]
			}else{
				return obj.currentStyle[st];
			}
		}
		function ani(obj,st,val){
			var W=getStyle(obj,st);
			var targetwidth=val;
			var x=0;
			if(targetwidth>parseInt(W)){
				var move=setInterval(function(){
					x+=30;
					if(x>=targetwidth-parseInt(W)){
						clearInterval(move);
						obj.style[st]=targetwidth+"px"
					}
					obj.style[st]=parseInt(W)+x+"px";
				},30)
			}else{
				var move=setInterval(function(){
					x+=30;
					if(parseInt(W)-x<=targetwidth){
						clearInterval(move);
						obj.style[st]=targetwidth+"px"
					}
					obj.style[st]=parseInt(W)-x+"px";
				},30)
			}
		}
		