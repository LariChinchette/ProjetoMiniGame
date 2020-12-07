var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 880,
        height: 500,
        parent: 'phaser-game',
        scene: [MenuScene, AroshScene, CrusherScene, ElnarhisScene, HelennaScene, NittinScene, PogglierScene, PurpleManeScene, RyuktoScene, TennukaScene]
    };
    game = new Phaser.Game(config);
}