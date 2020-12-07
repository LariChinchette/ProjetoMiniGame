//Variáveis únicas ao personagem
let dialog_t = 0, lovemeter_t = 0, background_t;

class TennukaScene extends Phaser.Scene {
    constructor() {
        super('TennukaScene');
    }

    preload(){
        
        this.load.image('sprite_t', '../Midia/TennukaSprite.png');
        this.load.image('fundo_t', '../Midia/Village.png')
        this.load.image('fundo2_t', '../Midia/Taverna.png');
        this.load.image('grid_t', '../Midia/GridFalasSprite.png');
    }

    create(){
       //construindo cena
        background_t = this.add.image(400, 165, 'fundo_t');
       this.add.image(750, 300, 'sprite_t');
       this.add.image(440, 425, 'grid_t');

       //criando textos
       this.add.text(35, 363, 'Tennuka', {}); //nome do personagem
       characterSays = this.add.text(155, 365, 'Ahh! Olá! (ele sorri gentilmente)',
           { wordWrap: { width: 700 } }); //onde fica o que o personagem está falando

       answerA = this.add.text(35, 430, '(Você tem: 100 moedas)', {}); //possibilidade de resposta A
       answerB = this.add.text(35, 455, 'Clique em qualquer opção pra avançar', {}); //possibilidade de resposta B
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

       if(dialog_t == 12){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
           characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+lovemeter_t+'/100 !!');
           answerA.setText('Voltar ao menu');
           answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
       }
    }

    update(){

    }

    dialogTree(clicked){
        
        console.log('diálogo atual = ' + dialog_t);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_t) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('Fique a vontade, criatura. Os DEVS já me avisaram sobre sua chegada!')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('Estou ansioso para negociar com você!');
                answerA.setText('Negociar? Eu vim pra namorar poxa.');
                answerB.setText('N-negociar?! C-calma o meu agiota disse que tava tudo pago!');
                answerC.setText('Ótimo, eu vim pra barganhar');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Ohohoho, e você acha que meu amor vem de graça?!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Agh, ótimo... Um devedor. Saiba que não saio pra quem tem nome sujo');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t - 30;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Tennuka sorri) Boa sorte.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('Agora, vamos ao orçamento. Quanto você tem disponível?');
                answerA.setText('Puts...Ahn... (revira os bolsos)... Dois centavos, e uma balinha de menta.');
                answerB.setText('100 moedas douradas!(pisca)');
                answerC.setText('Ahn... o suficiente?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('... Hmn. (ele resmunga) Os DEVS devem estar brincando comigo... Me enviaram gente POBRE.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ohh! Então posso te garantir uma noite romântica de alta classe. (pisca enquanto pega suas moedas)');
                    answerA.setText('Você não tem mais moedas.');
                    answerB.setText('Clique em qualquer opção para avançar');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t + 30;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked== 3) {

                    characterSays.setText('... É Acho que dá pra trabalhar com isso.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:

                this.changeBackground();
                characterSays.setText('(Tennuka te acompanha até uma taverna) Bem... Porquê você não faz nossos pedidos? Quero o mesmo que você for pedir.');
                answerA.setText('Podeixá! OOO MEU CONSAGRADO, esse salgado é do que?');
                answerB.setText('Hmmm... Servente, o que você me recomenda?');
                answerC.setText('Com licença, servente! Eu quero uma garrafa do seu melhor vinho e seu prato élfico mais refinado.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('... Deselegante');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(O servente explica o menu pra você, enquanto Tennuka te olha em silêncio)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Tennuka sorri feliz)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('Bom. Os DEVS pediram pra que eu fosse legal com você. Então... puxemos assunto, huh?');
                answerA.setText('Claro! Uma bela noite hoje, não é mesmo?');
                answerB.setText('O fato de você ser forçado a ser legal me faz perguntar sobre que educação seus pais te deram...');
                answerC.setText('... Caraca que desconfortável essa situação. Eu sou horrível com assuntos');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('De fato! Quase tão bela quanto eu mesmo (ele suspira)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ohohoh, não se preocupe com meus pais. Eu eles tiveram o que merecem!(Tennuka sorri de uma maneira perturbadora)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Ahw! Que graça. Vamos falar sobre mim! É sempre um bom assunto.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('Argh, o único problema de sair dos prédios administrativos é ter que conviver com outras pessoas, sabe?');
                answerA.setText('Rapaz se eu soubesse que eu ia sair com um esnobe que nem você eu num teria clicado pra jogar não.');
                answerB.setText('Nem me fala, pessoas são um saco!');
                answerC.setText('Olha se você não fosse bonito...');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('Esnobe é uma palavra que os incapazes usam pra descrever o que invejam. Considero um elogio vindo de você!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Finalmente alguém que entende o que digo. Lidar com os outros é muito exaustivo. Fico feliz por concordar comigo!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Sei... Eu seria insuportável. Mas se você está aqui, é que, de alguma maneira, você gosta de mim, não? (sorri)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_t = lovemeter_t + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_t);
                console.log('botão clicado ' + clicked);

                if (lovemeter_t <= 33) {
                    characterSays.setText('Enfim, não me leve a mal. É que você é... Entediante, escadaloso, pobre/mão de vaca, e ainda por cima... Te falta beleza. (Tennuka se levanta e vai embora. Te deixando com a conta)');
                }
                else if (lovemeter_t > 33 && lovemeter_t < 66) {
                    characterSays.setText('Ahh! Olhe a hora. Seu pacote acabou! Quem sabe numa próxima?! Até que não foi tão horrível como eu esperava! Agora é só você pagar a conta e irmos cada um pro seu lado!');
                }
                else if (lovemeter_t >= 66) {
                    characterSays.setText('Olha... Serei sincero. Não esperava que você fosse tão agradável... Vou te fazer uma promoção... Por mais 20 moedas, você vem comigo até o meu quarto. (pisca)');
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
                break
        }

    }

    changeDialog() { //método para mudar o diálogo
        clicked == 0;

        if (dialog_t < 12) {
            dialog_t++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }

    }

    changeBackground(){
        background_t.setTexture('fundo2_t');
    }

}