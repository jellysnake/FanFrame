FanFrame.Preloader = class {
	constructor(game) {
		this.preloadBar = null;
	}
	
	preload() {

		/* Add a loading background and bar */
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.background.width = this.world.width;
		this.background.height = this.world.height;
		
		this.preloadBar = this.add.sprite(400, 300, 'preloaderBar');
		this.preloadBar.anchor = new Phaser.Point(0.5, 0.5);

		/* Set loading bar */
		this.load.setPreloadSprite(this.preloadBar);

		/* Load Main Menu assets */
		this.load.image("mainMenuBackground", "assets/mainMenu/background.png");
		
		/* Load UI assets */
		this.load.spritesheet("button", "assets/Ui/button.png", 190, 49, );
	}

	create() {

		this.preloadBar.cropEnabled = false;
		this.state.start('MainMenu');
	}
}
