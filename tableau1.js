class tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('Balle', 'assets/cercle.png');
        this.load.image('Murs', 'assets/carre.png');


    }

    create(){
        this.hauteur = 800
        this.largeur = 800



        this.Balle=this.physics.add.image( this.largeur/2-10,this.hauteur/2-10,  'Balle').setOrigin(0,0);
        this.Balle.setDisplaySize(20,20);
        this.Balle.body.setBounce(3,3);
        this.Balle.setVelocityX(Phaser.Math.Between( 100,200));
        this.Balle.setVelocityY(Phaser.Math.Between( 800,1000));
        this.Balle.setMaxVelocity(400,400);



        this.Haut=this.physics.add.image(0,0, 'Murs').setOrigin(0,0);
        this.Haut.setDisplaySize(this.largeur,20);
        this.Haut.body.setAllowGravity(false);
        this.Haut.setImmovable(true);


        this.Bas=this.physics.add.image(0,20, 'Murs').setOrigin(0,0);
        this.Bas.setDisplaySize(20,800);


        this.Bas.body.setAllowGravity(false);
        this.Bas.setImmovable(true);


        this.droite=this.physics.add.image(780,20, 'Murs').setOrigin(0,0);
        this.droite.setDisplaySize(20,800);
        this.droite.body.setAllowGravity(false);
        this.droite.setImmovable(true);

        /// Blocs 1


        this.gris=this.physics.add.image(162,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(224,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(286,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(348,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(410,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(472,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(534,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(596,100, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);



        /// Bloc 2

        this.gris=this.physics.add.image(162,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(224,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(286,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(348,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(410,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(472,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30)
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(534,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(596,132, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        /// Bloc 3
        this.gris=this.physics.add.image(162,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(224,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(286,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(348,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(410,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(472,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30)
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(534,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(596,164, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);



        /// Bloc 4
        this.gris=this.physics.add.image(162,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(224,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(286,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(348,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(410,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(472,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30)
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(534,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(596,196, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);




        ///Bloc 5
        this.gris=this.physics.add.image(162,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(224,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(286,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(348,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(410,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(472,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30)
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(534,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);

        this.gris=this.physics.add.image(596,228, 'Murs').setOrigin(0,0);
        this.gris.setDisplaySize(60,30);
        this.gris.body.setAllowGravity(false);
        this.gris.setImmovable(true);




        ///Player

        this.gauche=this.physics.add.image(400,700, 'Murs').setOrigin(0,0);
        this.gauche.setDisplaySize(200,20);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);





        this.data.set('vies', 3);
        this.data.set('points', 0);

        this.vies = this.add.text(50, 30, '', { font: '40px Courier', fill: '#808080' });
        this.vies.setText([
            'Vies: ' + this.data.get('vies')
        ]);


        this.points = this.add.text(500, 30, '', { font: '40px Courier', fill: '#808080' });
        this.points.setText([
            'points: ' + this.data.get('points')
        ]);

        let me = this;



        this.physics.add.collider(this.Balle,this.Bas);
        this.physics.add.collider(this.Balle,this.Haut);
        this.physics.add.collider(this.Balle,this.droite);
        this.physics.add.collider(this.Balle,this.gris);

        this.physics.add.collider(this.Balle,this.gauche, function() {
            console.log('touche gauche');
            me.rebond(me.gauche)
        });


        this.initKeyboard();

    };

    rebond(raquette){
        let me = this;

        console.log(raquette.x);
        console.log(me.Balle.x);
        console.log(me.Balle.x-raquette.x)

    }

    initKeyboard(){
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.gauche.setVelocityX(0);
                    break;


                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.gauche.setVelocityX(0);
                    me.gauche.setVelocityX(0);
                    break;

            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.gauche.setVelocityX(-500);
                    break;


                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.gauche.setVelocityX(500);
                    break;

            }

        })
    }



    update(){

        if (this.Balle.x>this.largeur){
            this.Balle.x = 0
        }

        if (this.Balle.x<0){
            this.Balle.x = this.largeur
        }

        if (this.Balle.y<0){
            this.Balle.y = 0
        }
        if (this.Balle.y>this.hauteur){
            this.Balle.y = this.hauteur
        }

        if (this.gauche.x<0){
            this.gauche.x = 0
        }
        if (this.gauche.x>this.hauteur-200){
            this.gauche.x =this.hauteur-200
        }


    }

}