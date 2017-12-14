FanFrame.Game = class {
	constructor(game) {
	
	}
    create() {

    }

    update() {

    }

    quitGame(pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        /* Return to main menu */
        this.state.start('MainMenu');

    }

}
