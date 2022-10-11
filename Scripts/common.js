function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i< (args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'block':(v=='hide')?'none':v; }
    obj.display=v; }
}

var persistmenu = "n�o";
var persisttype = "site";

function abrir_menu(obj) {
	if(document.getElementById) {
		var el = document.getElementById(obj);
		var ar = document.getElementById("sanfona").getElementsByTagName("li");
		if(el.style.display != "block") {
			for(var i=0; i<ar.length; i++) {
				if(ar[ i ].className=="subsanfona") {
					ar[ i ].style.display = "none";
				}
			}
			el.style.display = "block";
		}
		else {
			el.style.display = "none";
		}
	}
}

function get_cookie(Name) {
	var search = Name + "="
	var returnvalue = "";
	if(document.cookie.length > 0) {
		offset = document.cookie.indexOf(search)
		if(offset != -1) {
			offset += search.length
			end = document.cookie.indexOf(";", offset);
			if(end == -1) end = document.cookie.length;
			returnvalue = unescape(document.cookie.substring(offset, end))
		}
	}
	return returnvalue;
}

function onloadfunction() {
	if(persistmenu=="sim") {
		var cookiename = (persisttype=="site")? "abrir_menu" : window.location.pathname
		var cookievalue = get_cookie(cookiename)

		if(cookievalue!="") {
			document.getElementById(cookievalue).style.display="block"
		}
	}
}

function savemenustate() {
	var inc=1, blockid=""
	while(document.getElementById("subsanfona"+inc)) {
		if(document.getElementById("subsanfona"+inc).style.display=="block") {
			blockid="subsanfona"+inc
			break
		}
	inc++
	}
	var cookiename = (persisttype=="site")? "abrir_menu" : window.location.pathname
	var cookievalue = (persisttype=="site")? blockid+";path=/" : blockid
	document.cookie = cookiename+"="+cookievalue
}

if(window.addEventListener) {
	window.addEventListener("load", onloadfunction, false)
}
else if(window.attachEvent) {
	window.attachEvent("onload", onloadfunction)
}
else if(document.getElementById) {
	window.onload = onloadfunction
}

if(persistmenu=="sim" && document.getElementById) {
	window.onunload = savemenustate
}