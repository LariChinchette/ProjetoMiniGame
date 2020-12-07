//Setando variáveis globais
let characterSays;
let answerA, answerB, answerC;
let buttonA, buttonB, buttonC;
let clicked = 0;

class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene')
    }
    preload() {
        //preload das imagens
        this.load.image('logo', '../Midia/FlirtyTendencies.png');
    }

    create() {
        //Carregamento do logo
        this.add.image(400, 8, 'logo');
        this.cameras.main.setBackgroundColor('#312e45');

        //Instruções
        this.add.text(220, 150, 'Escolha um personagem para paquerar!', { fill: 'pink' });

        //BOTÕES PARA CADA CHAR ABAIXO

        //---------------------------bloco dos coletivistas---------------------------//

        //Helenna
        const helennaButton = this.add.text(10, 200, 'Helenna', { fontSize: '20px', color: 'lightgreen' });
        helennaButton.setInteractive();
        helennaButton.on('pointerdown', () => { this.goToCharacter('Helenna'); });
        this.add.text(10, 220, 'Tímida, séria e dedicada, essa guerreira élfica pode e vai ser sua paixão dos sonhos!', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //Pogglier
        const pogglierButton = this.add.text(300, 200, 'Pogglier', { fontSize: '20px', color: 'lightgreen' });
        pogglierButton.setInteractive();
        pogglierButton.on('pointerdown', () => { this.goToCharacter('Pogglier'); });
        this.add.text(300, 220, 'Divertido, gentil e um mediador nato, o pacote completo para qualquer um que ame elementais!', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //Arosh
        const aroshButton = this.add.text(600, 200, 'Arosh', { fontSize: '20px', color: 'lightgreen' });
        aroshButton.setInteractive();
        aroshButton.on('pointerdown', () => { this.goToCharacter('Arosh'); });
        this.add.text(600, 220, 'Risonha, rebelde e ousada, como não se apaixonar por essa eternamente jovem e vívida alma romântica?', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //---------------------------bloco dos neutros---------------------------//

        //Ryukto
        const ryuktoButton = this.add.text(10, 300, 'Ryukto', { fontSize: '20px', color: 'lightgrey' });
        ryuktoButton.setInteractive();
        ryuktoButton.on('pointerdown', () => { this.goToCharacter('Ryukto'); });
        this.add.text(10, 320, 'Justo, fiel e engraçado, tudo o que você poderia desejar pra você em uma cobertura escamosa!', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //Nittin
        const nittinButton = this.add.text(300, 300, 'Nittin', { fontSize: '20px', color: 'lightgrey' });
        nittinButton.setInteractive();
        nittinButton.on('pointerdown', () => { this.goToCharacter('Nittin'); });
        this.add.text(300, 320, 'Calme, colete e harmoniose, nada melhor do que um romance baunilha bem forte, não é mesmo?', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //Purple Mane
        const purpleManeButton = this.add.text(600, 300, 'Purple Mane', { fontSize: '20px', color: 'lightgrey' });
        purpleManeButton.setInteractive();
        purpleManeButton.on('pointerdown', () => { this.goToCharacter('PurpleMane'); });
        this.add.text(600, 320, 'Inquisitivo, ácido e fora dos trilhos, caso você esteja afim de cometer uma loucura de amor!', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //---------------------------bloco dos individualistas---------------------------//

        //Crusher
        const crusherButton = this.add.text(10, 400, 'Crusher', { fontSize: '20px', color: 'orange' });
        crusherButton.setInteractive();
        crusherButton.on('pointerdown', () => { this.goToCharacter('Crusher'); });
        this.add.text(10, 420, 'Forte, resiliente e dominador, não julgue pela armadura, esse general também pode amar!', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //Tennuka
        const tennukaButton = this.add.text(300, 400, 'Tennuka', { fontSize: '20px', color: 'orange' });
        tennukaButton.setInteractive();
        tennukaButton.on('pointerdown', () => { this.goToCharacter('Tennuka'); });
        this.add.text(300, 420, 'Ambicioso, persuasivo e narcisista, uma experiência única por um preço duvidoso... ', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })

        //Elnarhis
        const elnarhisButton = this.add.text(600, 400, 'Elnarhis', { fontSize: '20px', color: 'orange' });
        elnarhisButton.setInteractive();
        elnarhisButton.on('pointerdown', () => { this.goToCharacter('Elnarhis'); });
        this.add.text(600, 420, 'Intensa, determinada e teimosa, ainda há luz dentro dela, e a chama da paixão lhe aguarda!', { fontSize: '12px', wordWrap: { width: 280 }, aling: 'center' })



        //textinho engraçacinho
        this.add.text(5, 480, 'ATENÇÃO: Nenhum personagem virtual foi machucado durante esse processo; Esse jogo contém altos níveis de cringe, proceda ao seu próprio risco', { fontSize: "10px", fill: 'lightgrey' });
    }

    update() {

    }

    goToCharacter(currentChar) { //Controlador de cena

        console.log(currentChar);

        switch (currentChar) { //indo para cena de acordo com o personagem escolhido
            case 'Arosh':
                this.scene.start('AroshScene');
                console.log("Indo para " + currentChar);
                break;
            case 'Crusher':
                this.scene.start('CrusherScene');
                break;
            case 'Elnarhis':
                this.scene.start('ElnarhisScene');
                break;
            case 'Helenna':
                this.scene.start('HelennaScene');
                break;
            case 'Nittin':
                this.scene.start('NittinScene');
                break;
            case 'Pogglier':
                this.scene.start('PogglierScene');
                break;
            case 'PurpleMane':
                this.scene.start('PurpleManeScene');
                break;
            case 'Ryukto':
                this.scene.start('RyuktoScene');
                break;
            case 'Tennuka':
                this.scene.start('TennukaScene');
                break;
        }
    }
}