import { Paddle } from "./Paddle.js"; // Import Paddle class
import { Ball } from "./Ball.js"; // Import Ball class
import { Ground } from "./Ground.js"; // Import Ground class
//import { Loop } from "./Loop.js";      // Import Loop class
class Pong {
    constructor(scene) {
        this.scene = scene;
        this.paddle = null;
        this.ball = null;
        this.ground = null;
        this.init();
    }
    init() {
        // Initialize Ground
        this.ground = new Ground(this.scene);
        // Initialize Paddle with ground width
        // const groundWidth = Ground.getWidth();
        this.paddle = new Paddle(this.scene); // Pass scene & width
        // Initialize Ball
        this.ball = new Ball(this.scene, { x: 0, y: 1, z: 0 });
        // Initialize any loops or additional game mechanics
        // Loop.start(this.scene); // Assuming Loop is a class managing the game loop
    }
    // Optionally, add an update method if you need to update game objects on each frame
    update() {
        if (this.paddle)
            this.paddle.update();
        // this.display();
        if (this.ball)
            this.ball.update();
    }
    display() {
        var _a;
        console.log("ball: ", (_a = this.ball) === null || _a === void 0 ? void 0 : _a.mesh.position);
    }
}
export { Pong };
