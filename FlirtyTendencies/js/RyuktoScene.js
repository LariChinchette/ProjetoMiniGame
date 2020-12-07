//Variáveis únicas ao personagem
let dialog_r = 0, lovemeter_r = 0, background_r;

class RyuktoScene extends Phaser.Scene {
    constructor() {
        super('RyuktoScene');
    }

    preload() {
        this.load.image('sprite_r', '../Midia/RyuktoSprite.png');
        this.load.image('fundo_r', '../Midia/Village.png');
        this.load.image('fundo2_r', '../Midia/Village2.png');
        this.load.image('grid_r', '../Midia/GridFalasSprite.png');
    }

    create() {
        //construindo cena
        background_r = this.add.image(400, 165, 'fundo_r');
        this.add.image(750, 300, 'sprite_r');
        this.add.image(440, 425, 'grid_r');

        //criando textos
        this.add.text(35, 363, "Ryuk'to", {}); //nome do personagem
        characterSays = this.add.text(155, 365, 'Oiii!(Ryuk acena em sua direção) Tudo bem? Você chegou mais rápido do que eu esperava! Sorte que decidi sair mais cedo.',
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

        if(dialog_r == 12){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+ lovemeter_r +'/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }
    }


    dialogTree(clicked){
        console.log('diálogo atual = ' + dialog_r);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_r) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('Você deve ser o Líder de quem os Desenvolvedores me falaram!')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText("Estou um tanto nervoso! Mas é um prazer, Eu sou Ryuk'to! Mas pode me chamar de Ryuk, sem problema algum!");
                answerA.setText('Um prazer conhecer você! Meu nome é (seu nome)');
                answerB.setText('Nervoso? Eu não mordo não!');
                answerC.setText('... Isso aí são chifres e um rabo?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Ahhh!Por formalidade eu acabei te chamando de Líder. Mas já que me deu seu nome, vou te chamar assim!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ahahah! Que bom né?!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Errr... Sim eu sou um draconato.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('Enfim, pra hoje eu planejei um encontrinho no centro mesmo... Só o básico!');
                answerA.setText('O importante nem é o lugar mesmo!');
                answerB.setText('Legal! Eu gosto de rolê assim mesmo.');
                answerC.setText('Podia me levar pra comer né, rs.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('Ahaha, para, vai me deixar com vergonha!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Eba! Estava com medo de você não gostar...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked== 3) {

                    characterSays.setText('A-ah... Desculpa... Se quiser a gente pode pegar algo da barraquinha mesmo.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:
                this.changeBackground();

                characterSays.setText('(Vocês chegam ao centro, e Ryuk está visívelmente sem ar, mas não fala sobre)');
                answerA.setText('Tá precisando andar um pouco mais, ahaha, perdeu o ar fácil pra um monge!');
                answerB.setText('(Ignorar)');
                answerC.setText('Você quer sentar? Precisa de algo?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('Desculpa... Ahaha, é que o binder está me apertando um pouco.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('V-vamos... Vamos sentar aqui mesmo... Huff...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Desculpa... Huff, eu preciso afrouxar um pouco meu binder.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('(Ele respira fundo)Ahh, bem melhor agora... Se eu travar me desculpa, eu sou meio ruim com romance!');
                answerA.setText('Só não morre por favor.');
                answerB.setText('Engraçado ver alguém tão peitudo sem ar!');
                answerC.setText('Tudo bem eu também sou meio sem jeito!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('Vou tentar, ihihihi!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(Ele desvia o olhar, com vergonha)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r - 30;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Sério?! Ai que bom... D-digo, bom que temos algo em comum e não que você é ruim com romance!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('Faz tanto tempo que não tenho alguém pelo qual sou apaixonado sabe... As vezes esqueço da sensação');
                answerA.setText('Você já perdeu alguém especial?');
                answerB.setText('Você quis dizer que está apaixonado por mim?!');
                answerC.setText('Você... e eu também... Haha');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('... Sim... A muito tempo, a guerra me tirou meu primeiro amor... M-mas não vamos falar disso!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ahhh, é tão cedo pra dizer...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(ele ri)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_r = lovemeter_r - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_r);
                console.log('botão clicado ' + clicked);

                if (lovemeter_r <= 33) {
                    characterSays.setText('Bem. Acho que por hoje tá bom né?... Quero ir pra casa... Sem você.');
                }
                else if (lovemeter_r > 33 && lovemeter_r < 66) {
                    characterSays.setText('(Vocês conversam por um tempo) Eu tenho que te agradecer por hoje... Porém eu acho que... por enquanto, eu não estou pronto pra... Algo mais sério. Quem sabe numa próxima?');
                }
                else if (lovemeter_r >= 66) {
                    characterSays.setText('(Depois de um bom tempo) Ahh... Eu gostei muito de hoje... Obrigado... (Ryuk se aproxima e lhe dá um beijo suave)... Me procure quando quiser!');
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

        if (dialog_r < 12) {
            dialog_r++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }
    }

    changeBackground(){
        background_r.setTexture('fundo2_r');
    }

}