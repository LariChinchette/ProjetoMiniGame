let dialog_p = 0, lovemeter_p = 0, background_p;
class PogglierScene extends Phaser.Scene {
    constructor() {
        super('PogglierScene');
    }

    preload(){
        this.load.image('sprite_p', '../Midia/PogglierSprite.png');
        this.load.image('fundo_p', '../Midia/Village.png');
        this.load.image('fundo2_p', '../Midia/Village2.png');
        this.load.image('grid_p', '../Midia/GridFalasSprite.png');
    }

    create(){
        //construindo cena
        background_p = this.add.image(400, 165, 'fundo_p');
        this.add.image(750, 300, 'sprite_p');
        this.add.image(440, 425, 'grid_p');

        //criando textos
        this.add.text(40, 363, 'Arosh', {}); //nome do personagem
        characterSays = this.add.text(155, 365, 'Opa! Bão?!',
            { wordWrap: { width: 700 } }); //onde fica o que o personagem está falando

        answerA = this.add.text(35, 430, 'Clique em qualquer opção pra avançar', {}); //possibilidade de resposta A
        answerB = this.add.text(35, 455, '', {}); //possibilidade de resposta B
        answerC = this.add.text(35, 480, '', {}); //possibilidade de resposta C

        //Criando botões
        //Quando clicados esses botões iniciam o método de diálogo...
        const buttonA = this.add.text(10, 430, 'A', {}); //botão para escolher A
        buttonA.setInteractive();
        buttonA.on('pointerdown', () => { this.dialogTree(1); });

        const buttonB = this.add.text(10, 455, 'B', {}); //botão para escolher B
        buttonB.setInteractive();
        buttonB.on('pointerdown', () => { this.dialogTree(2); });

        const buttonC = this.add.text(10, 480, 'C', {}); //botão para escolher C
        buttonC.setInteractive();
        buttonC.on('pointerdown', () => { this.dialogTree(3); });

        if(dialog_p == 12){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+lovemeter_p+'/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }
    }

    update(){

    }

    dialogTree(clicked){
        console.log('diálogo atual = ' + dialog_p);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_p) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('Espero que teja tudo bão aí contigo.')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('Mas enfim... Quem é você? Nunca te vi por aqui...');
                answerA.setText('Espera, os DEVS não avisaram que eu vinha?');
                answerB.setText('... Eu sou o líder da cidade ué.');
                answerC.setText('(rir de nervoso)');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Ah sim, ah sim! Podes crer, eu isqueci.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Pog champ! Interessante, sempre achei que o líder era aquela mão gigante que flutuava pela tela.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('P000ts, vacilei! Cê é o cara que os DEVS avisaram né? Desculpe.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('Legal, legal... Então, quer dar uma vorta pela vila?');
                answerA.setText('Seria maneiro!');
                answerB.setText('A vila não é tipo, minúscula?');
                answerC.setText('Preferia beber, mas acho que conta.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('Nice, nice! Simbora, vamo passa pelas casinha, lá é moh maneiro.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(ele ri) Pois é, Pois é, mas dá pra dar umas voltinhas');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked== 3) {

                    characterSays.setText('Entendi... É que sas hora a taverninha fica cheiassa.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:
                this.changeBackground();

                characterSays.setText('Então, tem algo que você queira falar aí ou nem?');
                answerA.setText('Não me entenda mal, mas daonde veio esse seu nome aí?');
                answerB.setText('Nem...');
                answerC.setText('Hey, você fala de um jeito... Diferente!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('Ahhh, meu nome? Então na língua elemental "Pog" significa uma energia boa sabe? Então é tipo "Cheio de boas energias".');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Tendi... Tendi...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Valeu! Eu acho... É coisa de elemental da terra.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('... E você, tipo, o que você veio fazer aqui dentro do jogo?');
                answerA.setText('Ah eu vim pra passear né...(risinho)');
                answerB.setText('Te paquerar ué!');
                answerC.setText('Também to me perguntando isso');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('Legal, Legal! Também curtiria passar pra fora daqui, invertendo as coisas.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(Ele leva um sustinho) Sério? Orra... E-eu nem sei o que dizer');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('... (ele encara o chão um pouco)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p - 30;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('Ok agora eu acho que tenho coragem pra perguntar. Hm-hmm, você quer tipo... ahn... Se beijar não sei?! Ou andar de mão dada...');
                answerA.setText('Aleluia, achei que não ia dar em nada!');
                answerB.setText('Não quero nada não...');
                answerC.setText('... P-podemos andar de mão dada?!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('(Pogglier se aproxima e beija sua bochecha)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('... Tá...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(timidamente, ele pega na sua mão) Desculpa, faz um tempo que não faço isso.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_p = lovemeter_p + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_p);
                console.log('botão clicado ' + clicked);

                if (lovemeter_p <= 33) {
                    characterSays.setText('Ééééé... Acho que eu vou indo então. Valeu aí pelo encontro... Eu acho.');
                }
                else if (lovemeter_p > 33 && lovemeter_p < 66) {
                    characterSays.setText('Sabe, isso foi legal até... Podemos fazer isso outras vezes creio eu...');
                }
                else if (lovemeter_p >= 66) {
                    characterSays.setText('B-bem, se você quiser, a gente pode... Beijar de verdade ou andar um pouco mais... Mas só se você quiser!!');
                }

                answerA.setText('Voltar ao menu principal');
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
            break;

            //-------------------------------------- MENU FINAL!! --------------------------------------//
            case 12:
                
                if (clicked == 1) {
                    console.log('voltando ao menu...');
                    this.scene.start('MenuScene'); //voltando ao menu
                }
                break;
        }

    }

    
    changeDialog() { //método para mudar o diálogo
        clicked == 0;

        if (dialog_p < 12) {
            dialog_p++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }
    }

    changeBackground(){
        background_p.setTexture('fundo2_p');
    }

}