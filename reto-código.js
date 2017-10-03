function computeAverageLengthOfWords(word1, word2) {
     var average =(word1.length +word2.lenght)/2
    
 return average
  // your code here
}

module.exports = computeAverageLengthOfWords;

***************************
**************************
//convert double space
*************************
****************************
var str
function convertDoubleSpaceToSingle(str){
	var strSeparado= str.split("  ");
	return strSeparado.join(" ");
}

******************************
*****************************
//are valid credentials
**************************
*******************************

function areValidCredentials (name, password){
	if (name.length>3 && password.length>=8){
		return true
	} else{
		return false
	}
}
*****************************
*****************************
//get element of array property
******************************
********************************
var obj = {
 key: ['Jamil', 'Albrey'],
 asd: ["holi","chau"]
};

function getElementOfArrayProperty(object, key, index){
	var n=index
	console.log(object["key"][index]);
}




function getElementOfArrayProperty(obj, key, index) {
    var n=index;
    if()
       return(obj.key[n]);
  // your code here
}




************************
***********************
//find pair for sum
***********************
***********************

function findPairForSum(arr, num)
{
    var result =[]; 
  for(var i= 0; i <arr.length;i++){ //recorrer cadena en busca del primer dígito
	for(var j=i+1; j<arr.length;j++){ //recorrer cadena en busca del 2do dígito a sumar
	    if( arr[i]+ arr[j]===num){ //comparar ambos números con el numero designado como total
	         result.push(arr[i], arr[j]); //ingresar resultados en array
	    }
	

	}
  } 
  return result;
}


*******************************
*******************************

//remove string longer than
******************************
*******************************

var obj={
	name:"Montana",
	age: 20,
	location: "Texas",
	SchoolGrade: "College"
}; 

function removeStringValuesLongerThan(object, number){
	 var arr= Object.values(obj.key);
	var arrlength= arr.length;
	for(var i=0;i<arrlength;i++){
        if(object[arr[i]].length>number)
        {delete object[arr[i]]}
	}
    return object;


}



**************************************
//encontrar el menor numero de un array
*************************************
************************************

var arr=[10,116,4,6,87,168]; 
function findSmallesNumberAmongMixedElements(array){

  function compare(a,b){
	return a-b;
}
function sort(array){
	return arr.sort(compare)
}

********************
//greetcustomer
**********************
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(name){

var names= Object.keys(customerData);
var index= names.indexOf(firstName);
//creé variables de saludos, para acceder a ellas en cada caso
    var greeting1= "Welcome! Is this your first time?";
    var greeting2=("Welcome back, "+ firstName + "! We're glad you liked us the first time!");
    var greeting3=("Welcome back, "+ firstName + "! So glad to see you again!");

    if(index<0){
    customerData[firstName]= {};//crear objeto anidado
    customerData[firstName]["visits"]=1 ;//crear key visits dentro de nombre de cliente
    //que no se encuentra dentro del object customer Data
	return greeting1; //si se cumple la condicion de que el index de sea 0, retorna el saludo numero 1 ingresado en variable más arriba
} if(customerData[firstName]["visits"]==1){ //si el número de visitas es igual a 1, retorna el saludo 2 y le suma 1 visita al nombre del clte
    customerData[firstName]["visits"]+=1;
    return greeting2;
} else{
    customerData[firstName]["visits"]+=1;//si el numero de visitas no cumple con ninguno de las condiciones anteriores (es mayor a 1 y distinto de 0), retorna el saludo 3
    return greeting3;
    


}
}


******************************
********************************
//tip y tax 
function calculateBillTotal(precioBruto) {
  // your code here
  var tip= precioBruto*0.15;
  var tax= precioBruto*0.095;
  var total= precioBruto+tip+tax;
  
  return total;

}

****************************
****************************

function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  var result=0;
  var arr= Object.values(obj.key);
  if(arr=""||){
  	return 0
  }else{
  for(var i=0;i<arr.length;i++){
      result+=parseInt([arr[i]]);
  }
    return result;
   }
}








//FUNCIONANDO!!!!!!!!! NO TOCARS


function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  var result=0;
  var arr= Object.values(obj.key);
  for(var i=0;i<arr.length;i++){
      result+=parseInt([arr[i]]);
  }
    return result;
   
}


**********************
FILTERODDELEMENTS!!***+
**********************
function filterOddElements (arr){
	var result=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2!==0){
			result.push(arr[i]);
		}
	}
	return result;
}

**********************
**********************
function findShortestWordAmongMixedElements(arr) {
  var result;
  var valuesLength=0
  for(var i=0; i<arr.length;i++){
  	valuesLength+= arr[i].length;
  }
  return valuesLength;
}



***********************
***********************
computeSumOfAllElements
**********************
************************

function computeSumOfAllElements(arr){
	result=0;
	for(i=0; i<arr.length;i++){
		result+=parseInt([arr[i]]);
	}
	return result;
}

********************
**********************
computeSumBetween
*********************
******************
function computeSumBetween(num1, num2){

}






*******************
**************
addFullNameProperty
*********************
**********************
function addFullNameProperty (obj){
		var names= Object.values(obj);
		obj.fullName= names.join(" ");

	return obj.fullName;

}
*********************
**************************
getProductOfAllElementsAtProperty
*****************************
***************************


function getProductOfAllElementsAtProperty(obj, key){
  var result=1;
  var errorResult=0;
  var arr= Object.values(obj.key);
  for(var i=0;i<arr.length;i++){
      result*=parseInt([arr[i]]);
      if(arr==""){
      	return errorResult;
      }
  	}
  
    return result;
   
}




//funcionando la multiplicación
function getProductOfAllElementsAtProperty(obj, key){
  var result=1;
  var errorResult
  var arr= Object.values(obj.key);
  for(var i=0;i<arr.length;i++){
      result*=parseInt([arr[i]]);
      if(key==""){
      	return errorResult;
      }
  	}
  
    return result;
   
}

********************
*******************
convertScoreToGrade
*******************
******************
function convertScoreToGrade(score){
	if (score>=0 && score<=59){
		return 'F';
	}if (score >=60 && score <=69){
		return 'D';
	}if (score >=70 && score <=79){
		return 'C';
	}if (score >=80 && score <=89){
		return 'B';
	}if (score >=90 && score <=100){
		return 'A';
	}else{
		return 'PUNTUACION INVALIDA';
	}
}

*********************
*******************
addObjectProperty
*********************
********************
function addObjectProperty(obj1, key, obj2) {
  obj1[key]= (obj2);
return obj1;



}



*********************
*********************
findTheShortestOfThreeWords
*******************
*********************
function findTheShortestOfThreeWords (word1,word2,word3){
	var lengthString1= word1.length;
	var lengthString2= word2.length;
	var lengthString3= word3.length;

	if(lengthString1<lengthString2&&lengthString3){
	return word1; 
}	
	if (lengthString2<lengthString1&&lengthString3){
	return word2; 
}
	if (lengthString3<lengthString2&&lengthString1){
		return word3;
	}else {
		return word1;
	}
	


********************
******************
find the largest of three words *
***************************
***************************
 
function getLongestOfThreeWords (word1,word2,word3){
	var lengthString1= word1.length;
	var lengthString2= word2.length;
	var lengthString3= word3.length;

	if(lengthString1>lengthString2&& lenghtString2>lengthString3){
	return word1; 
}	
	if (lengthString2>lengthString1&&lengthString1>lengthString3){
	return word2; 
}
	if (lengthString3>lengthString2&&lengthString2>lengthString1){
		return word3;
	}if (lengthString1==lengthString2){
		return word1;
	}if (lengthString1==lengthString3){
		return word1;
	}if (lengthString2==lengthString3){
		return word3
	}

		
			}
**************************
***************************
function transformFirstAndLast(array) {
  // your code here
 var objFinal={};
  var firstElement= array.shift();
  var secondElement= array.pop();
  objFinal[firstElement]= secondElement;
  return objFinal;
  
  
}

***************************
****************************
function computeSumBetween(num1,num2){
var result=0;
for(i=num1;i<num2;i++){
	result+= num1[i];
}
return result;

}
