//Input Example 
datos = "2\n3 9\n17 24"; 
//Expected Output 
/* 
2 
0 
*/ 
 
 
//Second Input Example (Remember to comment the first example in order 
//and uncomment the next line in order test this case) 
 
 
//datos = "4\n1 8\n2 4\n10 13\n11 20"; 
//Expected Output 
/* 
2 
1 
0 
1 
*/ 
 
 //----- Start your code here ------- 
funcion_parse = function (s) { 
	return parseInt(s, 10); 
}

linea = datos.split('\n');
T = funcion_parse(linea.shift());
aux=0;
aux2=0;

for (i = 0; i < T; i++) {
	try{
	        parametros = linea[i].split(' ').map(funcion_parse);
	        A = parametros[0];
	        B = parametros[1];
	        if ( A > B) {
	        	aux2 = A;
	        	A = B;
	        	B = aux2;
	        }
	        for (j = A; j <= B; j++) {
	        	if (Math.sqrt(j) % 1 == 0) {
	        		aux++;
	        	}
	        }
	        console.log(aux);
	        aux=0;
	    }
	catch(err){
		console.log("Hace falta el conjunto " + (i+1));
	}
}
