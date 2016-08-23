var activos = []; // lenguajes activos
var uso = [];	//lengaujes en uso
var repetidos = []; //lenagujes repetidos (los lenguajes que se tendran que remover)
//se llena los lenguajes activos que el web service nos regrese
//======================ejemplo estatico======================
activos.push({id:127,LanguageName:"Portuguese"});
activos.push({id:145,LanguageName:"Slovene"});
activos.push({id:40,LanguageName:"English"});
activos.push({id:2,LanguageName:"Afrikaans"});
activos.push({id:133,LanguageName:"Russian"});
activos.push({id:29,LanguageName:"Chinese"});
activos.push({id:21,LanguageName:"Bosnian"});
activos.push({id:148,LanguageName:"Spanish"});
//============================================================

//se agregan los lenguajes que ya estan en uso 
//======================ejemplo estatico======================
uso.push({value:148,label:"Spanish"});
uso.push({value:29,LanguageName:"Chinese"});
uso.push({value:40,LanguageName:"English"});
//============================================================

//el array puede estar undefined o uso.length==0 (que no hay ningun lenguaje en uso)
//uso = undefined;
//==================llenado del array repetidos===============
if(uso!=undefined)
		for (var i = 0; i<uso.length ; i ++)
			if(search(activos.length,uso[i].value,activos) != -1)	
				repetidos.push(search(activos.length,uso[i].value,activos));//se agrega al array repetidos

console.log("=====================Antes===========================");
console.log("Array que contiene los lenguajes repetidos");
console.log(repetidos);
console.log("Array que contiene los todos los lenguajes incluyendo los repetidos");
console.log(activos);
//recorrido de repetidos y remueve el elemento de activos
for(var i = 0; i<repetidos.length; i++)
  removeItem(repetidos[i].value,activos);
  //or activos.removeItem(repetidos[i])
//============================================================

//================algotirmo de busqueda secuencial============
function search (_pos, _val,_arreglo){
	if(_pos== 0)
		return -1;
  else{
    if (_arreglo[_pos-1].id===_val)
      return {value:_arreglo[_pos-1].id,label:_arreglo[_pos-1].LanguageName};
    else
      return search(_pos-1,_val,_arreglo);
  }
}

//===funcion que remueve el elemento repetido en activos=====
function removeItem(_val,_arreglo) {
  for (var i = 0; i < _arreglo.length; i++) 
    if (_arreglo[i].id == _val)
      _arreglo.splice(i, 1);
};
//============remueve el elementousando prototype=============
Array.prototype.removeItem = function (a) {
  for (var i = 0; i < this.length; i++) {
    if (this[i].id == a) {
      this.splice(i, 1);
     break;
    }
  }
};
console.log("====================Despues==========================");
console.log("Array que contiene los lenguajes repetidos");
console.log(repetidos);
console.log("Array que contiene todos excepto los repedidos");
console.log(activos);