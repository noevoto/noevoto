function cambiarseccion(url1)
{
	if (url1 != "") {
		window.location= url1;
	}
}

function cambiarpestania()
	{
		this.tabArray = new Array();
		this.tabClassOn = "tab_ON";
		this.tabClassOff = "tab_OFF";
		this.contentClassOn = "contenido_ON";
		this.contentClassOff = "contenido_OFF";
	}

	cambiarpestania.prototype.setTab = _cambiarpestaniaSetTab;
	cambiarpestania.prototype.showTab = _cambiarpestaniaShowTab;

function _cambiarpestaniaSetTab( tabId, contentId, tabState )
	{
		var tab = new Tab(tabId,contentId,tabState);
		this.tabArray.push(tab);
		switch(tabState)
		{
			case "on":
						document.getElementById(tabId).className = this.tabClassOn;
						document.getElementById(contentId).className = this.contentClassOn;
					break;
			case "off":
						document.getElementById(tabId).className = this.tabClassOff;
						document.getElementById(contentId).className = this.contentClassOff;
					break;
		}
	}

function _cambiarpestaniaShowTab( tabId )
	{
		for(  i = 0 ; i < this.tabArray.length ; i ++)
		{
			if ( this.tabArray[i].tabId == tabId)
			{
				document.getElementById(this.tabArray[i].tabId).className = this.tabClassOn;
				document.getElementById(this.tabArray[i].contentId).className = this.contentClassOn;
			}
			else
			{
				document.getElementById(this.tabArray[i].tabId).className = this.tabClassOff;
				document.getElementById(this.tabArray[i].contentId).className = this.contentClassOff;
			}
		}
	}


function Tab( tabId, contentId, tabState)
	{
		this.tabId = tabId;
		this.contentId = contentId;
		this.tabState = tabState;
	}
	
	
	
/* Tamaño de texto */
var t = 13;

function afuente(texto){
	if (t < 18 ){
		t++; 
		setFuentes(t,texto);
	}
}

function rfuente(texto){
	if (t > 11){
		t--;
		setFuentes(t,texto);
	}
}

function setFuentes(fontactual,idtexto){
	var lay = document.getElementById(idtexto);
	try{
		lay.style.fontSize = fontactual;
		lay.style.lineHeight = (fontactual + 4) + "px";
	}catch(e){
	}
}

function Popup(url,name,width,height,resize,scroll) {
	var dialogWin = new Object();
	dialogWin.width = width;
	dialogWin.height = height;
	now = new Date();
	var millis=now.getTime();
	var mstr=""+millis;
	if (navigator.appName == "Netscape") {
		dialogWin.left = window.screenX + ((window.outerWidth - dialogWin.width) / 2);
		dialogWin.top = window.screenY + ((window.outerHeight - dialogWin.height) / 2);
		var attr = 'screenX=' + dialogWin.left + ',screenY=' + dialogWin.top + ',resizable=' + resize + ',width=' + dialogWin.width + ',height=' + dialogWin.height + ',scrollbars=' + scroll + ',menubar=no,location=no,toolbar=no,status=no,directories=no';
	} else if (document.all) {
		dialogWin.left = (screen.width - dialogWin.width) / 2;
		dialogWin.top = (screen.height - dialogWin.height) / 2;
		var attr = 'left=' + dialogWin.left + ',top=' + dialogWin.top + ',resizable=' + resize + ',width=' + dialogWin.width + ',height=' + dialogWin.height + ',scrollbars=' + scroll + ',menubar=no,location=no,toolbar=no,status=no,directories=no';
	}
window.open(url,name,attr);
}	


function validarvoto(cant, estado,encuesta)
            {
                seleccion=false;
                
                if (estado){
                    for (i=0;i<cant;i=i+1)
                    {
                        if (document.form1.OPCION[i].checked) 
                        {
                            seleccion = true;
							pregunta_id = document.form1.OPCION[i].value 
							respuestas = '&respuestas='+pregunta_id;
                        }
                    }				
                    if (!seleccion) {
                        alert("Por favor, seleccione una respuesta");
                        return false;
                    }
                }
                
				Popup('/includes/modulos/votar.asp?id='+encuesta+respuestas,'envio',520,455,'no','no')
				
}
		
		
function verresultados(cant, estado,encuesta)
{
				Popup('/includes/modulos/encuesta.asp?id='+encuesta+'&resultados=si','envio',520,455,'no','no')
				
}		

function comentarios_ingresa()
{
	
	id_noticia = document.form1.id_noticia.value  
	usuario = document.form1.usuario.value  
	clave = document.form1.clave.value  
	comentario = escape(document.form1.comentario.value)  
	
				Popup('/includes/modulos/comentarios.asp?login=no&id_noticia='+id_noticia+'&usuario='+usuario+'&clave='+clave+'&comentario='+comentario+'','envio',350,430,'no','no')
				
}	


function comentarios()
{
	
	id_noticia = document.form1.id_noticia.value  
	comentario = document.form1.comentario.value  
	
				Popup('/includes/modulos/comentarios.asp?login=si&id_noticia='+id_noticia+'&comentario='+comentario+'','envio',350,430,'no','no')
				
}		



/* SCROLL DE NOTICIAS */

function scrollItems(){
	this.content	= null;
	this.posMin		= 0;
	this.posMax		= 5;
	this.arr 			= new Array();

	this.init = function(idElement){		
		this.content	= $(idElement);
		if(this.content){
			for(a=0; a < this.content.childNodes.length; a++){
				if(this.content.childNodes[a].tagName == 'DIV'){
					this.add(this.content.childNodes[a].id);
				}
			}
		}
	}

	this.add = function( idElement ){
		this.arr[this.arr.length] = idElement;
	}

	this.show = function(){
		/* Oculto todos los nodos DIVS */
		for (var j = 0 ; j < this.arr.length; j++){
			$(this.arr[j]).style.display = 'none';
		}
		
		/* Muestro solo los del rango */
		for(var i = this.posMin ; i < this.posMax ; i++){
			if(this.arr && typeof(this.arr[i]) != "undefined" ){
				$(this.arr[i]).style.display = 'inline';
			}
		}
	}

	this.next  = function(){
		if( this.posMax < this.arr.length ){
				this.posMax++;
				this.posMin++;
				this.show();
		}
	}

	this.back  = function(){
		if( this.posMin ){
			this.posMax--;
			this.posMin--;
			this.show();
		}
	}
}


function votar(id,voto,destino){


	$.ajax({
	url : "/includes/modulos/votacomentario.asp",
	data: "id="+id+"&voto="+voto+"",
	success : function (data) {
	$("#"+destino+"").html(data);
	}
	});

}


function verdadmentira(id,voto,destino){


	$.ajax({
	url : "/includes/modulos/verdadmentira.asp",
	data: "id="+id+"&voto="+voto+"",
	success : function (data) {
	$("#"+destino+"").html(data);
	}
	});

}


function verdadmentira2(id,voto,destino){


	$.ajax({
	url : "/includes/modulos/verdadmentira2.asp",
	data: "id="+id+"&voto="+voto+"",
	success : function (data) {
	$("#"+destino+"").html(data);
	}
	});

}



function respuesta(id_comentario,docid,destino){
	

	$.ajax({
	url : "/includes/modulos/respuestacoments.asp",
	data: "id_comentario="+id_comentario+"&docid="+docid+"",
	success : function (data) {
	$("#"+destino+"").html(data);
	}
	});

}


function abuso(id_comentario,docid,destino){
	

	$.ajax({
	url : "/includes/modulos/abuso.asp",
	data: "id_comentario="+id_comentario+"&docid="+docid+"",
	success : function (data) {
	$("#"+destino+"").html(data);
	}
	});

}


tamanio0=12;

function setTamFuente(nodo,tamanio)
{
	// nodo actual
	if(nodo && nodo.style)
	nodo.style.fontSize = tamanio;

	// tiene hijos?
	if(nodo.childNodes.length)
	{
		nodo = nodo.firstChild;

		// primer hijo
		if(nodo.style) nodo.style.fontSize = tamanio;
		setTamFuente(nodo,tamanio);

		// resto de los hijos
		while(nodo = nodo.nextSibling)
		{
			if(nodo.style) nodo.style.fontSize = tamanio;
			setTamFuente(nodo,tamanio);
		}
	}
}

function tamFuente(operacion)
{
    if (operacion == 0)
    {
      if (tamanio0 > 9) tamanio0=tamanio0 - 2;

    }
    else
    {
      if (tamanio0 < 24) tamanio0=tamanio0 + 2;
    }

  setTamFuente(document.getElementById('noticiaint'),tamanio0+'px');

}

function eliminadiv(){
	$("#eliminardiv").remove();
}

$(document).ready(function(){ 
  $('#cuerponoticia a').attr('target', '_blank'); 
}); 
