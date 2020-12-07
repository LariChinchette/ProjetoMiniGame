//Variáveis únicas ao personagem
let dialog_c = 0, lovemeter_c = 0, background_c;

class CrusherScene extends Phaser.Scene {
    constructor() {
        super('CrusherScene');
    }

    preload() {
        this.load.image('sprite_c', '../Midia/CrusherSprite.png'); 
        this.load.image('fundo_c', '../Midia/Taverna.png');
        this.load.image('grid_c', '../Midia/GridFalasSprite.png');
    }

    create() {
        //construindo cena
        background_c = this.add.image(400, 165, 'fundo_c');
        this.add.image(750, 300, 'sprite_c');
        this.add.image(440, 425, 'grid_c');


        //criando textos
        this.add.text(35, 363, 'Crusher', {}); //nome do personagem
        characterSays = this.add.text(155, 365, '(Crusher te encara em silêncio)',
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

        if(dialog_c == 12){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+lovemeter_c+'/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }
    }

    update() {

    }

    dialogTree(clicked){
        console.log('diálogo atual = ' + dialog_c);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_c) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('Saudações líderzinho! O que faz aqui fora do turno de batalha?')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('Pela hora, deveria estar descansando.');
                answerA.setText('E você? Não deveria estar descansando em vez de vir a também?');
                answerB.setText('HEY! Eu sou O líder. Me trate com respeito por favor!');
                answerC.setText('Toda hora é uma boa hora pra beber!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Hm. (Crusher franze a testa). Não tenho compromissos na manhã seguinte...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('WAHAHAHA! Você me diverte com sua mania líderzinho.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Whahaha... Você diz a verdade! Líderes precisam se divertir um pouco também.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('Venha, sente-se e coma comigo! Vamos conversar sobre a vila.');
                answerA.setText('Sim senhor! O que meu tutor disser.');
                answerB.setText('Não... Hoje eu não vim pra falar sobre trabalho.');
                answerC.setText('Vou poder beber também, né?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('Wahaha! Gostei do que disse! (ele sorri de orelha a orelha, exibindo suas presas)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(Ele parece sério) A vila é mais que seu trabalho. Deveria levar mais a sério seus compromissos.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked== 3) {

                    characterSays.setText('Claro! Trabalher muito e festeje. Não esquecendo de sua posição...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:
                characterSays.setText('A Vila anda bem diferente ultimamente. Sinto como se algo estranho estivesse pra acontecer, os DEVS estão tramando algo.');
                answerA.setText('Ahn... Mas eles estão. E meio que já ta acontecendo...');
                answerB.setText('Deveriamos fazer uma pratulha a sós hein!');
                answerC.setText('Meu deus cara como você é devagar...');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('COMO ASSIM ESTÃO?! E eu não fui avisado?! O que raios está acontecendo?! (Ele bate com força na mesa)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Boa sugestão!! Uma boa patrulha pode nos trazer respostas...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('O quê? O que quis dizer com isso?!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('(Repentinamente, Crusher olha pra cima, e vocês escutam sussurros dissonantes) ... (Ele olha pra você, atônito)  ... Encontro?');
                answerA.setText('(Olhar pro outro lado enquanto bebe, fingindo que você não sabe de nada)');
                answerB.setText('(Piscadinha sexy)');
                answerC.setText('Então... Eu tentei te avisar...');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('E VOCÊ NÃO ME DISSE NADA?!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('... (Crusher começa a suar frio)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Ahn... Bem. Hmn... (ele tenta se recompor, em vão)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('Então você... Gos... Gosta... De mim?');
                answerA.setText('Não.');
                answerB.setText('Gostar é uma boa palavra!');
                answerC.setText('(Sorrir maliciosamente)');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setTex('... Compreendo.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c - 30;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ah... B-bem. (Tosse). Eu também tenho uma consideração por você...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('... (Crusher parece estar em pânico interno)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_c = lovemeter_c - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_c);
                console.log('botão clicado ' + clicked);

                if (lovemeter_c <= 33) {
                    characterSays.setText('Mmm-Hmm. Líder. Eu sinto em te dizer que prefiro que mantenhamos um relacionamento apenas profissional... (ele se levanta) Uma boa noite!');
                }
                else if (lovemeter_c > 33 && lovemeter_c < 66) {
                    characterSays.setText('B-bem... Fico contente que seja transparente comigo Líder... Porém... Eu não estou pronto para outros compromissos no momento...');
                }
                else if (lovemeter_c >= 66) {
                    characterSays.setText('A-ah... Hm... Você... Você quer... Dar uma volta a sós comigo?... (Ele te olha nervoso)');
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

        if (dialog_c < 12) {
            dialog_c++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }
    }

}