//Variáveis únicas ao personagem
let dialog_e = 0, lovemeter_e = 0, background_e;

class ElnarhisScene extends Phaser.Scene {
    constructor() {
        super('ElnarhisScene');
    }

    preload(){
        this.load.image('sprite_e', '../Midia/ElnarhisSprite.png');
        this.load.image('fundo_e', '../Midia/Village2.png');
        this.load.image('grid_e', '../Midia/GridFalasSprite.png');
    }

    create(){
        //construindo cena
        background_a = this.add.image(400, 165, 'fundo_e');
        this.add.image(750, 300, 'sprite_e');
        this.add.image(440, 425, 'grid_e');

        //criando textos
        this.add.text(30, 363, 'Elnarhis', {}); //nome do personagem
        characterSays = this.add.text(155, 365, 'Ahhhh! Raiva! Não consigo acreditar que os desenvolvedores fizeram isso comigo!',
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

        if(dialog_e == 12){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+lovemeter_e+'/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }
    }

    update(){

    }

    dialogTree(clicked){
        console.log('diálogo atual = ' + dialog_e);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_e) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('(Elnarhis começa a emitir chamas púrpura de suas mãos) EU PEDI PARA ME DEIXAREM FORA DISSO!')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('EU NÃO VOU SAIR NUM ENCONTRO COM NINGUÉM!');
                answerA.setText('Começamos bem hein!');
                answerB.setText('Desculpa ;-;');
                answerC.setText('Calma calma foguentinha (8');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('COMEÇAMOS MAL! MUITO MAL');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('.... O QUE RAIOS ISSO SIGNIFICA!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('(ela respira fundo enquanto range os dentes) Como você pode pedir por uma coisa dessas!');
                answerA.setText('E-eu? Eu não pedi nada não moça!');
                answerB.setText('Olha, não foi só eu, ok!');
                answerC.setText('Por quê eu não pediria?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('Não?!... Como assim não?!!...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('E COMO ISSO SUPOSTAMENTE MELHORA ALGO? IMBECIL!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked== 3) {

                    characterSays.setText('... (ela para e te encara em silêncio por uns segundos)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:

                characterSays.setText('Tanto faz! Tanto faz! Só não pense que vamos nos envolver de qualquer forma!');
                answerA.setText('Deixa eu adivinhar, você ainda tem ex pra superar?!');
                answerB.setText('There is f#ck (Ai é fod@)');
                answerC.setText('Que bom, acho que você deveria se envolver com um psiquiátra.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('... Isso não é da sua conta ok.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('FALA DIREITO! EU NÃO ESTOU ENTENDENDO NADA!!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('CLARO! Quem sabe ele não me recomenda uma boa forma de QUEIMAR OS DEVS ATÉ A MORTE.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('Até por que... Que drogas de atrativos eu tenho... Se não minha aparência e meu talento com fogo.');
                answerA.setText('S-sei lá?! Conforme a gente se conhece... Eu vou saber dizer né?');
                answerB.setText('Também não sei.');
                answerC.setText('Eu curto as surtadas.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('... Ahh... Eu... Eu não consigo ficar brava com você desse jeito.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('COMO NÃO SABE? Eu tive diversos pretendentes! Diversas pessoas pra escolher, e todos tinham algo a dizer!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('... (Elnarhis começa a rir histericamente). Justo!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('Hmmf, aposto que no fundo, só quer sair comigo para me colocar de lado logo em seguida. Não me assumiria pra ninguém!');
                answerA.setText('Não moça... Calma. Eu só queria te conhecer mesmo.');
                answerB.setText('Soa como insegurança e problema seu, vamos fazer terapia?');
                answerC.setText('É isso mesmo!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA SEXTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('.... Arrghhh, pare de ser adorável!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('NÃO SOU INSEGURA! E-eu só tenho traumas mal resolvidos.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('AHÁ! SABIA!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_e = lovemeter_e - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_e);
                console.log('botão clicado ' + clicked);

                if (lovemeter_e <= 33) {
                    characterSays.setText('SUMA DA MINHA FRENTE INSETO! ANTES QUE EU TRANSFORME SEUS OSSOS EM CARVÃO!');
                }
                else if (lovemeter_e > 33 && lovemeter_e < 66) {
                    characterSays.setText('Não ligo para o que os DEVS te falaram! Não vamos sair. Somos no máximo amigos. No máximo!');
                }
                else if (lovemeter_e >= 66) {
                    characterSays.setText('... Eu me ODEIO por isso. MAS... Aceito ir a um encontro com você. UM ENCONTRO OK?! Não é como se eu te achasse legal ou algo do tipo.');
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

        if (dialog_e < 12) {
            dialog_e++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }
    }

}