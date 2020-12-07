//Variáveis únicas ao personagem
let dialog_n = 0, lovemeter_n = 0, background_n;

class NittinScene extends Phaser.Scene {
    constructor() {
        super('NittinScene');
    }

    preload() {
        this.load.image('sprite_n', '../Midia/NittinSprite.png');
        this.load.image('fundo_n', '../Midia/Village.png');
        this.load.image('fundo2_n', '../Midia/Taverna.png');
        this.load.image('grid_n', '../Midia/GridFalasSprite.png');
    }

    create() {
        //construindo cena
        background_n = this.add.image(400, 165, 'fundo_n');
        this.add.image(750, 300, 'sprite_n');
        this.add.image(440, 425, 'grid_n');

        //criando textos
        this.add.text(38, 363, 'Nittin', {}); //nome do personagem
        characterSays = this.add.text(155, 365, '(Nittin encara você em silêncio por alguns segundos)',
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

        if(dialog_n == 12){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+lovemeter_n+'/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }
    }

    update(){

    }

    dialogTree(clicked){

        console.log('diálogo atual = ' + dialog_n);
        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_n) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('(Nittin curva-se, lhe cumprimentando)')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('Olá Líder. Contente em te ver. Estou pronte para nosso encontro. (Nittin não esboça reação)');
                answerA.setText('... Não parece muito contente não');
                answerB.setText('É um prazer te conhecer, Nittin!');
                answerC.setText('Pronte? Ah não, pronome neutro???');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Desculpe... É natural da minha parte.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Igualmente, líder!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('... O termo correto é Neo-Linguagem. E peço que use-a para se referir a minha pessoa. Se respeitar-me for muito para você, por favor escolha outro NPC.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n - 50;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('Dando continuidade... Os desenvolveres pediram para que eu levasse você até a taverna local. Por favor me siga.');
                answerA.setText('Certo, vou te seguindo então!');
                answerB.setText('Se é o que você quer...');
                answerC.setText('Ahh! Que legal, eu estou com fome já! Haha!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('(Nittin acente)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Não citei minha vontade. Citei sobre o pedido dos desenvolvedores, e eu respeito eles. (Elu te entrega um olhar frio)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked== 3) {

                    characterSays.setText('(Elu sorri timidamente) Creio que iremos nos divertir.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:
                this.changeBackground();

                characterSays.setText('Por favor, peça o que desejar, eu mesme pagarei.');
                answerA.setText('P-pagar pra mim? Não precisa! Cada um paga o seu.');
                answerB.setText('Não! Deixa que eu pago.');
                answerC.setText('OPA, ME VÊ O PRATO MAIS CARO AÍ');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('Oh!... Certo, creio que dessa forma seja mais justa de fato. Obrigade pela sugestão.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Não é necessário, Líder. Mas se desejar, pode pagar por o que pedir para si.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Nittin permanece quiete)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('(Nittin permanece em silêncio)');
                answerA.setText('Você é bem quietinhe... Tem algum motivo especial ou é só você?');
                answerB.setText('(encarar em silêncio também)');
                answerC.setText('... Tá tudo bem?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('(elu sorri) Sim, eu normalmente sou quiete. Porém, admito que desta vez estava te admirando.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Perdoe-me... Estava admirando sua beleza.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('Eu realmente sinto muito por não saber me expressar fisicamente... É algo no qual estou me esforçando');
                answerA.setText('Não peça desculpas, se você é assim não precisa se forçar a mudar... Com o tempo a gente se entende, certo?');
                answerB.setText('Tudo bem! Todo mundo tem dificuldades!');
                answerC.setText('Então se esforça mais, que não tá muito expressivo não! Haha!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('(As bochechas de Nittin coram, e elu parece te olhar de maneira intensa)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(Nittin acente, com um sorriso tímido) Sim. Agradeço por sua educação!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('... (Nittin olha para a mesa, em silêncio)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_n = lovemeter_n - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_n);
                console.log('botão clicado ' + clicked);

                if (lovemeter_n <= 33) {
                    characterSays.setText('Com sua licensa, Líder, e o perdão dos desenvolvedores... Eu não quero mais ficar aqui. Essa situação está desconfortável... (Nittin se levanta e vai embora)');
                }
                else if (lovemeter_n > 33 && lovemeter_n < 66) {
                    characterSays.setText('Entendo por que você virou um Líder! É uma pessoa muito educada. Fico contente por esse econtro. (Nittin te cumprimenta mais uma vez, e ao final da noite vocês se despedem)');
                }
                else if (lovemeter_n >= 66) {
                    characterSays.setText('... Muito obrigade por hoje, Líder!... Se for do seu desejo, por favor, vamos dar uma volta no jardim?... Creio que... Gosto de você.');
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

        if (dialog_n < 12) {
            dialog_n++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }
    }

    changeBackground(){
        background_n.setTexture('fundo2_n');
    }

}