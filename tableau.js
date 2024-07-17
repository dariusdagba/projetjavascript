// let tab =[" Messi"," Rooney "," Salah "," Coné "];

// document.write(taracine+"<br>");
// document.write(tab.length+"<br>");
// document.write(tab[1]+"<br>");

// tab[3]=" Drogba";
// document.write(taracine+"<br>");
// document.write(tab.push(" Etoo")+"<br>");  // ajout un élément  à la fin du  du tableau
// document.write(taracine+"<br>");
// document.write(tab.unshift("Ronaldo")+"<br>"); // ajout un élément  à la première place du tableau
// document.write(taracine+"<br>");
// tab.shift(); //enlever le premier élément du tableau
// document.write(taracine+"<br>");
// tab.pop();//enlever le dernier élément du tableau
// document.write(taracine+"<br>");

// let monTableau=[12,3,45,0,13]
// document.write("12 <br>");
// document.write(monTableau[2]+"<br>");
// monTableau[3]=100;
// monTableau.push(7);
// document.write(monTableau);

var verbe=prompt("entrer un verbe");
var chaine=verbe.toLowerCase();

while(chaine=="aller" || chaine[chaine.length-2]!="e")
{
    verbe=prompt("Saisir svp un verbe du premier groupe");
    chaine=verbe.toLowerCase();
}

var racine="";
for(i=0;i<chaine.length-2;i++)
{
    racine+=chaine[i];
}

document.write("le verbe "+chaine+" au présent de l'indicatif <br>")
document.write("Je "+racine+"e <br>");
document.write("Tu "+racine+"es <br>");
document.write("Il ou elle "+racine+"e <br>");
if(racine[racine.length-1]=="g")
{
    document.write("Nous "+racine+"eons <br>");
}
else if(racine[racine.length-1]=="c")
{
    var racin="";
    for(i=0;i<racine.length-1;i++)
    {
        racin+=racine[i];
    }
    document.write("Nous "+racin+"çons <br>");
}
else
{
    document.write("Nous "+racine+"ons <br>");
}

document.write("Vous "+racine+"ez <br>");
document.write("Ils ou elles  "+racine+"ent");

// var b="";
// for(i=0;i<racine.length-2;i++)
// {
//     racine+=racine[i];
// }
// document.write(racine+"<br>");
// var trace="";
// trace=racine+"ç";
// document.write(trace);

