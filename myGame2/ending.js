/*global Phaser*/


var score = 0;
var time = 1600;
game_state.ending = function() {};
game_state.ending.prototype = {

    preload: function() {
        game.load.image('player', 'assets/player.png');
        game.load.image('object', 'assets/object.png');
    },

    create: function() {
       this.endText = game.add.text(270, 16, 'Your Score Was: ' + score, { fontSize: '32px', fill: '#000' });
        
    },

    update: function() {
     
    },

}
game.state.add('ending', game_state.ending);
// game.state.start('ending');
