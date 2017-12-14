var FanFrame = {};

FanFrame.Boot = class {

    init() {

		/* Set pointers to 1 */
        this.input.maxPointers = 1;
		/* Get phaser to scale automatically */
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        if (this.game.device.desktop)
        {
			/* Desktop specific settings */
        }
        else
        {
			/* Mobile specific settings */
            this.scale.forceOrientation(true);
        }
		this.scale.pageAlignHorizontally = true;
		this.scale.setMinMax(400, 300, 800, 600);

    }

    preload() {

        /* Load assets for the loader */
        this.load.image('preloaderBackground', 'assets/loading/loadingBackground.png');
        this.load.image('preloaderBar', 'assets/loading/loadingBar.png');

    }

    create() {

        /* Start loading actual game assets */
        this.state.start('Preloader');
    }
}