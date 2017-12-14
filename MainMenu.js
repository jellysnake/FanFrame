FanFrame.MainMenu = class {
	constructor(game) {
		
	}
	create() {
		this.background = this.add.sprite(0, 0, "mainMenuBackground");
		
		this.playButton = this.add.button(this.world.width/2, this.world.height/2, 'button', this.startGame, this, 0, 0, 1, 0)
		this.playButton.anchor = new Phaser.Point(0.5, 0.5);
		this.playText = this.add.text(this.world.width/2, this.world.height/2, "Start Game", {"font": "KennyVector", "fontSize": 20});
		this.playText.anchor = new Phaser.Point(0.5, 0.5);
	}

	update() {
		
	}

	startGame(pointer) {
		/* Start game */
		this.state.start('Game');
	}
}
