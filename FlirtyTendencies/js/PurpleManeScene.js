//Variáveis únicas ao personagem
let dialog_pm = 0, lovemeter_pm = 0, background_pm;

class PurpleManeScene extends Phaser.Scene {
    constructor() {
        super('PurpleManeScene');
    }

    preload() {
        //carregamento das sprites
        this.load.image('sprite_pm', '../Midia/PurpleManeSprite.png');
        this.load.image('fundo_pm', '../Midia/Village.png');
        this.load.image('fundo2_pm', '../Midia/Taverna.png');
        this.load.image('grid_pm', '../Midia/GridFalasSprite.png')
    }

    create() {
        //construindo cena
        background_pm =this.add.image(400, 165, 'fundo_pm');
        this.add.image(750, 300, 'sprite_pm');
        this.add.image(440, 425, 'grid_pm');

        //criando textos
        this.add.text(12, 363, 'Purple Mane', {}); //nome do personagem
        characterSays = this.add.text(155, 365, '(No momento em que você aparece, ele parece se incomodar, ele olha para cima, desapontado) O que caralhos isso significa, devs? ... ',
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

        if (dialog_pm == 12) { //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE ' + lovemeter_pm + '/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }


    }


    update() {

    }

    dialogTree(clicked) {

        console.log('diálogo atual = ' + dialog_pm);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_pm) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('(pensa) ... Mas que merda... Não..! Espere! ISSO SIGNIFICA QUE EU GANHEI UM NAMORADO? OHHHHHHHH! Alguém para sair comigo e... me beijar!(Purple Mane está MUITO feliz)')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('Isso foi a melhor coisa que esses Devs fizeram comigo!');
                answerA.setText('Cara... Você tá bem?');
                answerB.setText('Como assim "a melhor coisa?", o que raios fizeram contigo?');
                answerC.setText('CALMA AÍ! Namoro?! Ninguém me avisou sobre isso!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Sim! E não! Finalmente alguém para me ouvir surtando... E andar comigo de mãos dadas... E comer sopa!!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Você não vai querer saber.  (Purple Mane parece sério)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Sim! O que mais você esperava de um simulador de namoro? Matar goblins?');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('(Ele se recompõe) De qualquer forma... Não posso namorar alguém que mal conheço. Que tal bebermos algo?! Conheço uma ótima taverna!');
                answerA.setText('Você fala como se eu tivesse alguma opção...');
                answerB.setText('Se você pagar eu to dentro!');
                answerC.setText('T-tá?! V-vamos né...');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('Ugh, para de reclamar (Purple Mane revira os olhos)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Hehe! Assim que eu gosto (Purple Mane esboça um sorriso)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 30;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Purple mane apenas te puxa pela mão)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:
                this.changeBackground();

                characterSays.setText('(Vocês chegam até uma taverna local, ele te leva até o segundo andar e vocês se sentam) Vai pedir o quê?');
                answerA.setText('Uma casquinha de demias na brasa');
                answerB.setText('Hmmmmmmmmmmmmmmm... sopa.');
                answerC.setText('Não estou com fome.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('(ele encara o menu) Acho que vou querer apenas um hidromel então.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ohhh! vou pedir o mesmo. (Purple Mane esboça um sorriso)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 30;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Purple mane parece incomodado)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('(Vocês fazem seus pedidos, o servente diz que não deve demorar) Bem, que tal começarmos de um jeito diferente, faça VOCÊ uma pergunta para mim!');
                answerA.setText('Normalmente ferais são mais... Ahn, "rústicos". Daonde vem esse requinte, estilo?...');
                answerB.setText('Sem querer incomodar, mas... Pode me falar sobre seu passado?');
                answerC.setText('Você é maluco mesmo ou fez curso?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('(ele esboça um sorriso) Você acha?! B-bem. Eu sou um feral culto, creio que o conhecimento eriquece a mente. Infelizmente... Conhecimento demais destroi o coração. Ambos atingem o corpo e personalidade... Não sou diferente.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(O olhar dele parece se perder por um momento) ... Névoa.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Heh, só se considerar que eu nunca pedi pelo curso.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('(a comida é servida) Ah, sabe, estava mesmo precisando sair com alguém. Normalmente não saio com ninguém..');
                answerA.setText('Que lamentável');
                answerB.setText('Sério? Você é um furry, digo, cara maneiro');
                answerC.setText('Nem imagino por que não saem com você... (tom sarcástico)');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA SEXTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('É... Triste. Mas devo confessar estar um tanto alegre sobre sua presença aqui! Heh. Não sou de gritar... Muito');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ohhh! Quanta bajulação vinda de você. Jogue isso várias vezes por favor, quero ouvir isso várias vezes!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Ele olha você profundamente... Uma névoa arroxeada parece surgir por um segundo)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_pm = lovemeter_pm - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_pm);

                if (lovemeter_pm <= 33) {
                    characterSays.setText('Bem... Eu estava errado. Os devs me trollaram de novo. Você é insuportável. Por favor termina o jogo ai...');
                }
                else if (lovemeter_pm > 33 && lovemeter_pm < 66) {
                    characterSays.setText('(... A noite continua, foi bem divertida, porém nada aconteceu. Seria isso uma friend zone?)');
                }
                else if (lovemeter_pm >= 66) {
                    characterSays.setText('(Depois da janta, você vira a sobremesa!)');
                }

                answerA.setText('Voltar ao menu principal');
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

            //-------------------------------------- MENU FINAL!! --------------------------------------//
            case 12:

                if (clicked == 1) {
                    console.log('voltando ao menu...');
                    this.scene.start('MenuScene'); //voltando ao menu
                }
                break
        }

    }

    changeDialog() { //método para mudar o diálogo
        clicked == 0;

        if (dialog_pm < 12) {
            dialog_pm++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }

    }

    changeBackground(){
        background_pm.setTexture('fundo2_pm');
    }

}