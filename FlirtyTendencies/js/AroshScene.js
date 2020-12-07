//Variáveis únicas ao personagem
let dialog_a = 0, lovemeter_a = 0, background_a;

class AroshScene extends Phaser.Scene {
    constructor() {
        super('AroshScene');
    }

    preload(){
        this.load.image('sprite_a', '../Midia/AroshSprite.png');
        this.load.image('fundo_a', '../Midia/Taverna.png');
        this.load.image('grid_a', '../Midia/GridFalasSprite.png');
    }

    create(){
        //construindo cena
        background_a = this.add.image(400, 165, 'fundo_a');
        this.add.image(750, 300, 'sprite_a');
        this.add.image(440, 425, 'grid_a');

        //criando textos
        this.add.text(40, 363, 'Arosh', {}); //nome do personagem
        characterSays = this.add.text(155, 365, 'Ai ai! Eu ainda não to pronta calma! (Arosh sai começa a pentear o cabelo desesperadamente)',
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

        if(dialog_a == 12){ //CASO o jogador tenha escolhido sair para o menu sem apagar o progresso ele pode ver como foi seu desempenho ao clicar para jogar novamente!
            characterSays.setText('SUA PONTUAÇÃO DE RELACIONAMENTO FOI DE '+lovemeter_a+'/100 !!');
            answerA.setText('Voltar ao menu');
            answerB.setText('Se desejar resetar seu progresso em TODOS os personagens clique f5');
        }
    }

    update(){

    }

    dialogTree(clicked){
        console.log('diálogo atual = ' + dialog_a);

        //Diálogos mudam progressivamente, e de acordo com a escolha do usuário o nível de relacionamento sobe ou desce.
        //Os números ímpares simbolizam perguntas e os pares respostas.
        //Ex: o case 1 prepara uma pergunta para que o case 2 aplique os efeitos de resposta! e assim por diante.
        //Esse método é chamado toda vez que um botão é clicado!

        switch (dialog_a) {

            //-------------------------------------- PRIMEIRA FALA --------------------------------------//
            case 0:
                //arrumando textos...
                characterSays.setText('Pronto! Tô pronta! Tô tão ansiosa, pelo amor de Kavyla!')

                //próxima diálogo trigando metódo para mudar o diálogo
                clicked = 0;
                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- SEGUNDA FALA --------------------------------------//
            case 1:

                characterSays.setText('Tudo bem com você líder?! Desculpa pelo afobo, é que eu fui avisada em cima da hora sobre esse encontro, hihi!');
                answerA.setText('Tudo bem! Você está linda!');
                answerB.setText('Esses DEVS é fod@ viu');
                answerC.setText('Não me chama de líder, o jogo é outro... E é meio desconfortável');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });

                break;

            //-------------------------------------- RESPOSTA DA SEGUNDA FALA --------------------------------------//
            case 2:
                if (clicked == 1) {

                    characterSays.setText('Owwwwwwwwwwww! Muito obrigada, você também tá um ahaso!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Hihihi, o que esperar de universitários, não é mesmo?');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Ahh, certo. Me desculpe por isso!...');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;

            //-------------------------------------- TERCEIRA FALA --------------------------------------//
            case 3:
                characterSays.setText('Continuando, bora ir pra pedir algo? To afim daquela porçãozinha de casquinha de demias com hidromel!');
                answerA.setText('Comer é comigo mesmo!');
                answerB.setText('Se é o que você quer...');
                answerC.setText('To afim mesmo é daquela sopa!');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA TERCEIRA FALA --------------------------------------//
            case 4:
                if (clicked == 1) {

                    characterSays.setText('Oba! Você vai amar o lugar!! (ela sorri de orelha a orelha, exibindo suas presas)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('... Se não quiser tudo bem... Mas meio que é o que tá no roteiro.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a - 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked== 3) {

                    characterSays.setText('Hmmmmmmmmmmmmmmmmmmm, sopa.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUARTA FALA --------------------------------------//
            case 5:

                characterSays.setText('Bem, deixa só eu pedir um treco que a gente já conversa... OOOO MOÇO, ME TRÁS UMA PORÇÃO TOP DE DEMIAS AÍ!');
                answerA.setText('Shhh, não grita... É deselegante!');
                answerB.setText('É DUAS, E DESCE AS GELADAAAAA!');
                answerC.setText('Eu vou querer (seu pedido), por favor.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUARTA FALA --------------------------------------//
            case 6:
                if (clicked == 1) {

                    characterSays.setText('Aí, que careta você bebê... Parece meu irmão.');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Ihhh hihih! (Arosh sorri pra você, enquanto bate palminhas)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('(Arosh sorri pra você.)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- QUINTA FALA --------------------------------------//
            case 7:
                characterSays.setText('Ai, me diz aí nada melhor do que um romance pra animar o dia não? Sinto que morreria sem um contatinho, tenho tantos amores por aí que perco a conta...');
                answerA.setText('... Acho que romance é algo mais especial sabe? Não me sinto confortável com alguém tão... ahn... rodada?');
                answerB.setText('Eu não sou de sair, haha... Mas se você diz.');
                answerC.setText('Demais! Paixão é o tempero da vida.');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;

            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 8:
                if (clicked == 1) {

                    characterSays.setText('E por ser especial, não pode sentir várias vezes? Qual o problema das minhas experiências? Por um acaso elas atrapalham o que sinto agora nesse momento?!!(ela soa incomodada)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('Tudo bem! Cada um tem um ritmo pras coisas. O importate é se ajeitar um ao outro né! Desde que um não interfira na liberdade do outro, tudo pode!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Pois é! Adoro me apaixonar... Não tem coisa melhor do que pessoas pra mim!... É como... Experimentar vários sabores: cada um tem um gosto, um atrativo, algo de legal! E eu sinceramente não tenho sabores favoritos!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- SEXTA FALA --------------------------------------//
            case 9:
                characterSays.setText('(O servente trás seus pedidos, Arosh quase vira um gole inteiro da bebida de uma vez) Saúde!');
                answerA.setText('Saúde!! (vira o copo junto)');
                answerB.setText('Eita! Saúde... (você ri)');
                answerC.setText('... Desculpa. Pode ser mais educada?');

                this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                break;
            //-------------------------------------- RESPOSTA DA QUINTA FALA --------------------------------------//
            case 10:
                if (clicked == 1) {

                    characterSays.setText('(Arosh se aproxima de você) CARAAAA, gostei da sua empolgação agora! Sinto falta de ver gente assim... (ela parece um pouco distante)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                else if (clicked == 2) {

                    characterSays.setText('(ela ri também) Desculpa se te assustei! É uma tradição Orc, significa satisfação!');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a + 10;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }

                else if (clicked == 3) {

                    characterSays.setText('Mas eu estou sendo educada... E eu mesma também... (o tom de voz dela muda)');
                    answerA.setText('Clique em qualquer opção para avançar');
                    answerB.setText('');
                    answerC.setText('');

                    lovemeter_a = lovemeter_a - 20;
                    this.time.addEvent({ delay: 5000, callback: this.changeDialog(), callbackScope: this });
                }
                break;
            //-------------------------------------- FALA FINAL --------------------------------------//
            case 11:
                //finais de acordo com o relacionamento
                console.log('final rolando...' + lovemeter_a);
                console.log('botão clicado ' + clicked);

                if (lovemeter_a <= 33) {
                    characterSays.setText('Olha... Assim, vou ser direta, tá. Cara tu é chato pra cacete, eu não saio com gente assim não. Você parece estar desconfortável e eu também tô... Então tchau.');
                }
                else if (lovemeter_a > 33 && lovemeter_a < 66) {
                    characterSays.setText('Ahh! Mal posso esperar pra te apresentar aos meus amigos e afetos! Já quero combinar uma próxima vez!');
                }
                else if (lovemeter_a >= 66) {
                    characterSays.setText('Será que é muito cedo pra dizer que tô apaixonada por você?! Se não... Acho que já sei pra onde vamos depois daqui! (ela sorri sugestivamente)');
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

        if (dialog_a < 12) {
            dialog_a++
            console.log('CHAMANDO PRÓXIMO DIÁLOGO');

        }
    }

}