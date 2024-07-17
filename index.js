//alert("Ohio");
//alert("Indiana");
//alert("Nouveau Mexique");
// var pays ="Canada";
// var continent ="Amerique";
// alert(pays);
// document.write(continent);
//login et password
// var a =100, b= 50,modulo;
//  modulo=a%b;
//  alert("Le modulo de "+a+" sur "+b+" est "+modulo);
// var n1= parseInt( prompt("Veuillez saisir un nombre n1"));
//document.write(n1+"<br>");
//document.write(typeof(n1)+"<br>");
// var n2= parseInt( prompt("Veuillez saisir un nombre n2"));
//document.write(n2+"<br>");
//document.write(typeof(n1)+"<br>");
// var  s=n1+n2;
// document.write(s);
// var c = parseInt( prompt("Veuillez saisir un nombre c"));
// var carre=c*c;
// document.write("Le carré de ce nombre est "+carre);
// var a = parseInt( prompt("Veuillez saisir un nombre a"));
// var b = parseInt( prompt("Veuillez saisir un nombre b"));
// var som=a+b;
// var div=a/b;
// var sout=a-b;
// var mult=a*b;
// var mod=a%b;
// document.write("La somme de ses nombres est "+som+"<br>");
// document.write("La soutration de ses nombres est "+sout+"<br>");
// document.write("La multiplication de ses nombres est "+mult+"<br>");
// document.write("La divison de ses nombres est "+div+"<br>");
// document.write("Le modulo de ses nombres est "+mod);

// var nbr = parseInt( prompt("Veuillez saisir un nombre "));
// if(nbr==1){
//     document.write("Aujourd'hui est Lundi");
// }
// else if(nbr==2){
//     document.write("Aujourd'hui est Mardi");
// }
// else if(nbr==3){
//     document.write("Aujourd'hui est Mercredi");
// }
// else if(nbr==4){
//     document.write("Aujourd'hui est Jeudi");
// }
// else if(nbr==5){
//     document.write("Aujourd'hui est Vendredi");
// }
// else if(nbr==6){
//     document.write("Aujourd'hui est Samedi");
// }
// else{
//     document.write("Aujourd'hui est Dimanche");
// }
// var nbr = parseInt( prompt("Veuillez saisir un nombre "));
// if(nbr==1){
//     document.write("Janvier");
// }
// else if(nbr==2){
//     document.write("Février");
// }
// else if(nbr==3){
//     document.write("Mars");
// }
// else if(nbr==4){
//     document.write("Avril");
// }
// else if(nbr==5){
//     document.write("Mais");
// }
// else if(nbr==6){
//     document.write("Juin");
// }
// else if(nbr==7){
//     document.write("Juillet");
// }
// else if(nbr==8){
//     document.write("Aôut");
// }
// else if(nbr==9){
//     document.write("Septembre");
// }
// else if(nbr==10){
//     document.write("Octobre");
// }
// else if(nbr==11){
//     document.write("Novembre");
// }
// else if(nbr==12){
//     document.write("Décembre");
// }
// else{
//     document.write("Veuillez saisir un nombre compris entre 1 - 12");
//      nbr = parseInt( prompt("Veuillez saisir un nombre "));
// }

// var a = parseInt( prompt("Veuillez saisir un nombre a"));
// (a%2==0)?  document.write("nombre pair") : document.write("nombre impair");

// var nbr=parseInt( prompt("Veuillez saisir un nombre a"));
// switch(nbr){
//     case 1 :
//         document.write("Lundi");
//         break;
//     case 2 :
//         document.write("Mardi");
//         break;
//     case 3 :
//         document.write("Mercredi");
//         break;
//     case 4 :
//         document.write("Jeudi");
//         break;
//     case 5 :
//         document.write("Vendredi");
//         break;
//     case 6 :
//         document.write("Samedi");
//         break;
//     case 7 :
//         document.write("Dimanche");
//         break;
//     default :
//         document.write("Veuillez saisir une valeur entre 1 - 7 ");
     
// }

// var nbr=parseInt( prompt("Veuillez saisir un nombre a"));
// switch(nbr){
//     case 1 :
//         document.write("Janvier");
//         break;
//     case 2 :
//         document.write("Février");
//         break;
//     case 3 :
//         document.write("Mars");
//         break;
//     case 4 :
//         document.write("Avril");
//         break;
//     case 5 :
//         document.write("Mai");
//         break;
//     case 6 :
//         document.write("Juin");
//         break;
//     case 7 :
//         document.write("Juillet");
//         break;
//     case 8 :
//         document.write("Aôut");
//         break;
//     case 9 :
//         document.write("Septembre");
//         break;
//     case 10 :
//         document.write("Octobre");
//         break;
//     case 11 :
//         document.write("Novembre");
//         break;
//     case 12 :
//         document.write("Décembre");
//         break;
//     default :
//     document.write("Veuillez saisir une valeur entre 1 - 12 ");
     
// }
// var c=parseInt(prompt("Entrer une valeur c"));
// for(var i=1; i<=10;i++){
//     document.write(c+" x "+i+" = "+c*i+"<br>");
// }
// var c=parseInt(prompt("Entrer une valeur c"));
// for(var i=1; i<=10;i++){
//     if(i%2==1){
//         document.write(c+" x 3 = "+c*3+"<br>");
//     }
//     else{
//         document.write(c+" x 2 = "+c*2+"<br>");
//     }
// }
//  for(var i=1; i<=10;i++){
//     for(var j=1; j<=10;j++){
//         document.write(i+" x "+j+" = "+i*j+"<br>");
       
//     }
//     document.write("<br>");
//  }

// var i=1;
// while(i<=100){
//     if(i%2==0){
//         document.write(i+" est un pair <br>");
//     }
//     else{
//         document.write(i+" est un impair <br>");
//     }
//     i++;
// }

// var c=parseInt(prompt("Entrer une valeur c"));
// var i=0;
// var b=1;
// while(i<c){
//  b *=(c-i);
//  i++;
// }
// document.write("Le factoriel de "+c+" est "+b);

// var i=1;
// do{
//     document.write("Bonjour tout le monde <br>");
//     i++;
// }while(i<=10)

// var i=0;
// var b=0;
// do{
//     b +=i;
//     i++;
// }while(i<10)
// document.write("La somme est "+b);

// var c=parseInt(prompt("Entrer une valeur c"));
// var i=0;
// var b=0;
// do{
//     b +=i;
//     i++;
// }while(i<c)
// document.write("La somme est "+b);
// var a=parseInt(prompt("Entrer une valeur a"));
// var b=parseInt(prompt("Entrer une valeur b"));

// if(a<b){
//     document.write("Le minimum est "+a);
// }else{
//     document.write("Le minimum est "+b);
// }

// var a=parseInt(prompt("Entrer la valeur 1"));
// var b=parseInt(prompt("Entrer la valeur 2"));
// var c=parseInt(prompt("Entrer la valeur 3"));

// if(a<b && a<c)
// {
//     document.write("Le minimum est  "+a);
// }
// else if(b<a && b<c)
// {
//     document.write("Le minimum est  "+b);
// }
// else
// {
//     document.write("Le minimum est  "+c);
//}

// var som=0; var moy;
// for(var i=1;i<=5;i++)
// {
//         var b=parseInt(prompt("Entrer la valeur "+i));
//         som =som+b;
// }
// moy=som/5;
// document.write("Le moyenne de ces valeurs est "+moy);

// function etats(){
// document.write("Ohio");
// document.write("Indiana");
// document.write("Nouveau Mexique");
// }
// etats();
// etats();
// etats();

// function somme( a,b)
// {
//     document.write("la somme de "+a+" et "+b+" est "+(a+b)+"<br>");
// }
// somme(10,54);
// somme(108,514);
// somme(910,154);

// var a=parseInt(prompt("Entrer la valeur 1"));
// var b=parseInt(prompt("Entrer la valeur 2"));
// var c=parseInt(prompt("Entrer la valeur 3"));

// function multiplication(d,e,f){
//     document.write("la multiplication de "+d+", "+e+" et "+f+" est "+(d*e*f)+"<br>");
// }
// multiplication(a,b,c);

// function multi(a,b){
//     return a*b;
// }
// document.write("le resultat est "+multi(10,30)); 

// var z=parseInt(prompt("Entrer une valeur "));
// function CalculCarre(x){
//     return x*x;
// }
// document.write("le resultat est "+CalculCarre(z)); 

// var z=parseInt(prompt("Entrer une valeur "));
// function estPair(a){
//     if(a%2==0){

//         return true;
        
//     }
//     else{
//         return false;
//     }
// }
// document.write(estPair(z)); 


// var texte ="Bienvenue à tous messi tous maroc";
// document.write(texte.length);
// document.write(texte[15]);
// document.write(texte.toUpperCase());
// document.write(texte.toLowerCase()+"<br>");
// document.write(texte.toUpperCase()+"<br>");
// document.write(texte.trim());
// document.write(texte.indexOf("tous")+"<br>");
// var tab=[10,7,9,10];
// document.write(tab[0]+"<br>");
// document.write(tab.length);

// var etats = ["Ohio","Missouri","Arizona","Virginie"];
// document.write(etats.push("caroline du nord"));
//etats.shift();//retirer le premier élément du tableau
// etats.pop();//retirer le dernier élément du tableau
// document.write(etats+"<br>");
// document.write(etats[1][2]);

// var monTableau=[12,3,45,0,13];
// document.write(monTableau[0]+"<br>");
// document.write(monTableau[2]+"<br>");
// monTableau[3]=100;
// monTableau.push(7);
// document.write(monTableau);

// var texte="Bonjour tout le monde";
// document.write(texte[6]+"<br>");
// document.write(texte.toUpperCase()+"<br>");
// document.write(21+"<br>");
// document.write(texte.length);

// function multiplication(a,b){
//     return a*b;
// }
// document.write(multiplication(2,9));

// function calculSomme(a,b){
//     return a+b;
// }
// calculSomme(12,77);


//  for(var i=1; i<=10;i++){
//     for(var j=1; j<=10;j++){
//         document.write(i+" x "+j+" = "+i*j+"<br>");
       
//     }
//     document.write("<br>");
//  }

//  a =10; 
//  let a;
//  alert(a);

const a=1000;

let prenom="Dario"
document.write(`votre prenom : ${prenom}`) //interpolation


