
<?php
    class Produit{
        public $nom;
        public $prix;
        const TAUX_TPS=0.05;
        const TAUX_TVQ=0.09975;
       
        public function __construct($nom,$prix)
        {
            $this->nom=$nom;
            $this->prix=$prix;
        }
        public function getNom(){
            return $this->nom;
        }
        public function setNom($nom){
            $this->nom=$nom;
        }
        public function getPix(){
            return $this->prix;
        }
        public function setPrix($prix){
            $this->prix=$prix;
        }
        public function Affichage(){
            return "Nom: ". $this->nom .", Prix: ". $this->prix;
        }
    }
    $Produit =new Produit("Ananas ", 0.89);

    echo $Produit->getNom();
    echo $Produit->getPix()."<br>";

    echo $Produit->setNom("Banane ");
    echo $Produit->setPrix(1.15);

    echo $Produit->getNom();
    echo $Produit->getPix()."<br>";

    class Livre extends Produit{
        public $auteur;
        
        public function __construct($nom,$prix,$auteur)
        {
            parent::__construct($nom,$prix);
            $this->auteur=$auteur;
        }
        public function calculPrixTTC(){
          /*$prixTAUX_TPS=$this->prix*self::TAUX_TPS;
            $prixTAUX_TVQ=$this->prix*self::TAUX_TVQ;
            $prixTTC=$this->prix+$prixTAUX_TPS+$prixTAUX_TVQ;*/
            $prixTTC=$this->prix*(1+self::TAUX_TPS+self::TAUX_TVQ);
            return $prixTTC;
        }
        public function Affichage(){
            return parent::Affichage().", Auteur: ". $this->auteur;
        }
    }

    class Vetement extends Produit{
        public $taille;

        public function __construct($nom,$prix,$taille)
        {
            parent::__construct($nom,$prix);
            $this->taille=$taille;
        }
        public function calculPrixTTC(){
            $prixTTC=$this->prix*(1+self::TAUX_TPS+self::TAUX_TVQ);
            return $prixTTC;
        }
        public function Affichage(){
            return parent::Affichage().", Taille: ". $this->taille;
        }
    }

    class Electronique extends Produit{
        public $marque;

        public function __construct($nom,$prix,$marque)
        {
            parent::__construct($nom,$prix);
            $this->marque=$marque;
        }
        public function calculPrixTTC(){
            $prixTTC=$this->prix*(1+self::TAUX_TPS+self::TAUX_TVQ);
            return $prixTTC;
        }
        public function Affichage(){
            return parent::Affichage().", Marque: ". $this->marque;
        }
    }
    $prixBase=20.90;
    $Livre4= new Livre("L'enfant blanc ",$prixBase," Darius la Touche ");
    echo "Le prix total est ". $Livre4->calculPrixTTC() ."<br>";

    $Livre=new Livre("L'enfant noir ", 4.90 ," Camara Laye");
    $Livre1=new Livre("NO HOME ", 6.65 ," Yaa Gyasi");
    $Livre2=new Livre("Tout s'éffondre ",3.99," Chinua Achebe");

    $Vetement=new Vetement("Veste ",199.00, 44);
    $Vetement2=new Vetement("Pantalon ",79.90, 34);
    $Vetement3=new Vetement("T-shirt ",29.99," S");

    $Electronique=new Electronique("Télévison intelligente ", 4085.99," LG");
    $Electronique2=new Electronique("Tablette ", 695," SAMSUNG ");
    $Electronique3=new Electronique("Chargeur", 12.95," IPHONE ");

    echo $Livre->Affichage()."<br>";
    echo $Livre1->Affichage()."<br>";
    echo $Livre2->Affichage()."<br>";
    echo $Vetement->Affichage()."<br>";
    echo $Vetement2->Affichage()."<br>";
    echo $Vetement3->Affichage()."<br>";
    echo $Electronique->Affichage()."<br>";
    echo $Electronique2->Affichage()."<br>";
    echo $Electronique3->Affichage()."<br>";





?>
