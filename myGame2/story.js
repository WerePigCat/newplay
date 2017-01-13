/*global Phaser game game_state*/

var selectedCharacter = 'default';

game_state.story = function() {};
game_state.story.prototype = {

    preload: function() {
        game.load.image('character', 'assets/character.png');
        game.load.image('charactertwo', 'assets/charactertwo.png');
        game.load.image('characterthree', 'assets/characterthree.png');
        game.load.image('object', 'assets/object.png');
        
    },

    create: function() {
       this.endText = game.add.text(270, 16, 'Select Your Character', { fontSize: '32px', fill: '#ffffff' });
        this.choice1 = game.add.button(050, 400, 'character', this.selectedCharOne, this);
        this.choice2 = game.add.button(350, 400, 'charactertwo', this.selectedCharTwo, this);
        this.choice3 = game.add.button(650, 400, 'characterthree', this.selectedCharThree, this);
        // this.choice2 = game.add.sprite(350, 400, 'charactertwo');
        // this.choice3 = game.add.sprite(675, 400, 'characterthree');
    },

    update: function() {
     
    },
    
    selectedCharOne: function(){
        selectedCharacter = "torg";
        game.state.start("main")
        
    },
    selectedCharTwo: function(){
        selectedCharacter = "wytr";
        game.state.start("main")
    },
    selectedCharThree: function(){
        selectedCharacter = "golntgolnt";
        game.state.start("main")
    }

}
game.state.add('story', game_state.story);
game.state.start('story');
