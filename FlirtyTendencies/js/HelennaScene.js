//Variáveis únicas ao personagem
let dialog_h = 0, lovemeter_h = 0, background_h;
class HelennaScene extends Phaser.Scene {
    constructor() {
        super('HelennaScene');
    }

    preload() {
        this.load.image('sprite_h', '../Midia/HelennaSprite.png');
        this.load.image('fundo_h', '../Midia/Village.png');
        this.load.image('fundo2_h', '../Midia/Village2.png');
        this.load.image('grid_h', '../Midia/GridFalasSprite.png');
    }

    create() {
        //construindo cena
        background_h = this.add.image(400, 165, 'fundo_h');
        this.add.image(750, 300, 'sprite_h');
        this.add.image(440, 425, 'grid_h');


        //criando textos
        this.add.text(30, 363, 'Helenna', {}); //nome do personagem
        characterSays = this.add.text(155, 365, '(Helenna parece não ter te notado)',
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

        if (dialog_h == 12) { //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE ' + lovemeter_h + '/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }
    }

    update() {

    }
    dialogTree(clicked) {
        console.log('diálogo atual = ' + dialog_h);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_h) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('(Assusta) Ah!! Olá! Desculpe não vi que tinha alguém aqui! Estou meio perdida aqui...')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('Tudo bem com você? Precisa de algo?');
                answerA.setText('Relaxa, eu também estou tentando me achar aqui! É que eu vim de fora do jogo...');
                answerB.setText('Eu fui teletransportado pra cá. Eu sou o líder!');
                answerC.setText('Estou bem sim, fora da minha realidade mas... Sei que preciso de você!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Ahh! Veio de fora? Meu senhor Darma!! Vamos atrás dos DEVS, eles devem saber o que está acontecendo!!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('L-líder! Tem algo de muito errado então, acho que você não deveria estar aqui!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Helenna parece pensar) Você quer dizer que está perdido? Ah! Tudo bem eu posso te ajudar a encontrar seu caminho!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('Venha por aqui! Vou te levar até o centro da cidade!...');
                answerA.setText('Entendido! Vamos.');
                answerB.setText('A-ah? Ok!');
                answerC.setText('Me leve ao centro do seu coração moça!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('Ah, esses desenvolvedores me metem em cada bucha! Espero que esteja tudo bem...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Não precisa ficar com medo. Está seguro em minha companhia! Não vou deixar nada ruim acontecer ok!?');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(A elfa parece te ignorar)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:
                this.changeBackground();

                characterSays.setText('(Vocês chegam ao centro) Certo, agora espere um momento, eu vou falar com os desenvolvedores por um momento, tudo bem?');
                answerA.setText('Não vai embora não!');
                answerB.setText('Eles... Não te avisaram de nada?');
                answerC.setText('(risinho) Sabe que você não precisa né?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('Fique em calma. (Ela olha para cima) LARI! JOÃO, o que acontece aqui?!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Me avisar? Avisar do que? (Ela olha pra cima)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Claro que precisa! Você precisa voltar pra casa!!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('(Repentinamente, Helenna fica completamente vermelha) O QUÊ? Vocês prometeram que eu O QUÊ?!');
                answerA.setText('Hey! Fica de boa! Não vou fazer nada que você não queira.');
                answerB.setText('Taquio pariu, significa que não vai rolar nada?');
                answerC.setText('A gente pode ir devagar!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('Não acredito nisso... Me desculpa! Não sabia no que esses LAZARENTOS me meteram!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Me desculpe. Mas não! Nem ferrando!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('...T-talvez, eu consiga segurar suas mãos?...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('Não!!! Desculpa, eu não consigo!! (ela cobre o rosto com as mãos) Desculpa mesmo!');
                answerA.setText('Fui tapeado...');
                answerB.setText('Tudo bem... Tudo bem... Calma!');
                answerC.setText('Shhh, relaxa! (risinho) Foi um prazer te conhecer!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('Meus sinceros perdões. Realmente não sei daonde tiraram que eu poderia sair com alguém... Principalmente na posição em que estou!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Sinto muito se você teve alguma expectativa... (cora) Eu n-não fazia ideia...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Não!! Me desculpa... Eu não quis magoar ninguém!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_h = lovemeter_h + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_h);
                console.log('botão clicado ' + clicked);

                if (lovemeter_h <= 33) {
                    characterSays.setText('Vamos fazer o seguinte... Eu levo você de volta e a gente finge que nada aconteceu, por favor?');
                }
                else if (lovemeter_h > 33 && lovemeter_h < 66) {
                    characterSays.setText('Mil perdões. Por favor me deixa pelo menos te levar de volta... Ai você joga com alguém que é melhor nessas coisas...');
                }
                else if (lovemeter_h >= 66) {
                    characterSays.setText('Me sinto mal por isso... Deixa eu pensar... A gente p-pode ir pra algum lugar pra te compensar pelo o que aconteceu... M-mas não cria expectativa tá?');
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

        if (dialog_h < 12) {
            dialog_h++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }
    }

    changeBackground() {
        background_h.setTexture('fundo2_h');
    }

}