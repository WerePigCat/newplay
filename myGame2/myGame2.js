/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}
var score = 0;
var time = 1600;
game_state.main = function() {};
game_state.main.prototype = {
    
    preload: function() {
        game.load.image('torg', 'assets/character.png');
        game.load.image('wytr', 'assets/charactertwo.png');
        game.load.image('golntgolnt', 'assets/characterthree.png');
        game.load.image('object', 'assets/object.png');
    },
    create: function() {
        // Set the backround color to blue
        game.stage.backgroundColor = '#3598db';
        // Start the Arcade physics system (for movement and collitions)
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // Add the player at the bottom of the screen
        this.player = game.add.sprite(350, 400, selectedCharacter);
        // We need to enable physics on this.player
        game.physics.arcade.enable(this.player);
        // Enable body on player
        this.player.enableBody = true;
        // Make sure the player does not move when it hits the ball
        this.player.body.immovable = true;
        // Create the left/right arrow keys
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        // Create object group
        this.objects = game.add.group();
        // Enable body for all objects in the group
        this.objects.enableBody = true;
        // Anchor this ob ject to _this variable
        var _this = this;
        this.scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        this.score = 0;
        this.timeText = game.add.text(650, 16, 'time: 0', { fontSize: '32px', fill: '#000' });
        this.time = 1600;
        // Create objects overtime
        setInterval(function() {
                // Create an object at the top of the screen at a random x
            var object = _this.objects.create(Math.random() * 800, -64, 'object');
                // Let gravity do its thing
                object.body.gravity.y = 300;
            }, 1000) // 1000 = 1000ms = one second

    },

    update: function() {
        // Move the player left/right when an arrow key is pressed
        if (this.left.isDown) this.player.body.velocity.x = -300;
        else if (this.right.isDown) this.player.body.velocity.x = 300;
        // Stop the player when no key is pressed
        else this.player.body.velocity.x = 0;
        // // Collition betuwen player and objects
        game.physics.arcade.overlap(this.player, this.objects, this.hitObject, null, this);
        this.time--;
        this.timeText.text = "Time: " + Math.floor(this.time / 100);
        if(this.time <= 0){
            score = this.score;
            game.state.start('ending');
        }
    },
     hitObject: function(player, object) {
        object.kill();
        this.score += 1
        this.scoreText.text = "Score: " + this.score;
        this.timeText.text = "Time: " + Math.floor(time / 100);
 
            
     }
}
game.state.add('main', game_state.main);
// game.state.start('main');
