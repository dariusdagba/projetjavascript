let objet1=
{
    prenom : "lucas",
    nom : "Gustave",
    age : 20,
    info : function()
    {
        return this.prenom+" "+this.nom+" "+this.age

    }

}
objet1.age=40;
document.write(objet1.info()+"<br>");

let objet2 =
{
    prenom : "Dario",
    nom :"Silver",
    age : 21,
    tab :[20,"Don","Toliver"],
    info : function()
    {
        return this.prenom+ " "+this.nom+" "+this.age
    }
}
document.write(objet2.tab+"<br>");
document.write(objet2.info()+"<br>");
objet2.tab.push("Rimouski");
document.write(objet2.tab+"<br>");


function personne(prenom,nom,age)
{
    this.prenom=prenom;
    this.nom=nom;
    this.age=age;
    this.info = function()
    {
        return this.prenom+ " "+this.nom+" "+this.age
    }
}

p1 = new personne("Dario","Silver",21);
p2 = new personne("Don","Tolver",23);
p3 = new personne("Travis","Scott",29);

document.write(p1.info()+"<br>");
document.write(p2.info()+"<br>");
document.write(p2.prenom+"<br>");
document.write(p3.info()+"<br>");

document.write("<br>");
document.write("<br>");

t1=[10,30,15,11,11];
t2=[6,7,4,9,12];
t3=[14,20,11,13,19];

function estPair(tab=[])
{
    for(i=0; i<=tab.length-1;i++)
    {
        if(tab[i]%2==0)
        {
            document.write(tab[i]+" ")
        }
    }
}
estPair(t1);
document.write("<br>")
estPair(t2);
document.write("<br>")
estPair(t3);

class etudiant
{
    constructor(prenom,nom,age)
    {
        this.age=age;
        this.prenom=prenom;
        this.nom=nom;
    }
    info(){
        document.write("Bonjour à tous <br>");
    }

    aa= function(){
        return this.prenom+" "+this.nom+" "+this.age
    }
}

e1=new etudiant("Dario","gbadoo",21)

e1.info()
document.write(e1.aa())

eleve = new Object();
eleve.prenom="Dario"
eleve.nom="gbadoo"
eleve.age=23
eleve.info=function(){
    return this.prenom+" "+this.age+" "+this.age
}

alert(eleve.info())
alert(eleve.nom)

let objet3 =
{
    prenom : "Dario",
    nom :"Silver",
    age : 21,
    tab :[20,"Don","Toliver"],
    adresse :{
        tel:"438-454-9775"
    },
    info : function()
    {
        return this.prenom+ " "+this.nom+" "+this.age
    }
}