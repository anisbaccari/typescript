export class Paddle {
    constructor(scene) {
        this.width = 1;
        this.height = 1;
        this.depth = 10;
        this.leftPaddle = null;
        this.rightPaddle = null;
        this.moveUpL = false;
        this.moveDownL = false;
        this.moveUpR = false;
        this.moveDownR = false;
        this.paddleSpeed = 1.5;
        this.init(scene, 50);
    }
    // Initialize paddles with given scene and ground width
    init(scene, g_width) {
        this.colors = [
            new BABYLON.Color3.Red(),
            new BABYLON.Color3.Red(),
            new BABYLON.Color3.Red(),
            new BABYLON.Color3.Red(),
            new BABYLON.Color3.Red(),
            new BABYLON.Color3.Red(),
        ];
        const positions = this.getPositions(g_width);
        this.leftPaddle = this.createPaddle("Left Paddle", positions.left, scene);
        this.rightPaddle = this.createPaddle("Right Paddle", positions.right, scene);
        this.setupInputControls();
    }
    getPositions(g_width) {
        return {
            left: -g_width / 2 + this.width / 2,
            right: g_width / 2 - this.width / 2,
        };
    }
    createPaddle(name, positionX, scene) {
        const paddleOpt = {
            width: this.width,
            height: this.height,
            depth: this.depth,
            faceColors: this.colors,
        };
        const paddle = BABYLON.MeshBuilder.CreateBox(name, paddleOpt, scene);
        paddle.position = new BABYLON.Vector3(positionX, 0, 0);
        return paddle;
    }
    updatePaddlesMovement() {
        if (this.moveUpL && this.leftPaddle.position.y < 15) {
            this.leftPaddle.position.z += this.paddleSpeed;
        }
        if (this.moveDownL && this.leftPaddle.position.y > -15) {
            this.leftPaddle.position.z -= this.paddleSpeed;
        }
        if (this.moveUpR && this.rightPaddle.position.y < 15) {
            this.rightPaddle.position.z += this.paddleSpeed;
        }
        if (this.moveDownR && this.rightPaddle.position.y > -15) {
            this.rightPaddle.position.z -= this.paddleSpeed;
        }
    }
    setupInputControls() {
        // Key Press (Start Movement)
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "w":
                case "W":
                    this.moveUpR = true;
                    break;
                case "s":
                case "S":
                    this.moveDownR = true;
                    break;
                case "ArrowUp":
                    this.moveUpL = true;
                    break;
                case "ArrowDown":
                    this.moveDownL = true;
                    break;
            }
        });
        // Key Release (Stop Movement)
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case "w":
                case "W":
                    this.moveUpR = false;
                    break;
                case "s":
                case "S":
                    this.moveDownR = false;
                    break;
                case "ArrowUp":
                    this.moveUpL = false;
                    break;
                case "ArrowDown":
                    this.moveDownL = false;
                    break;
            }
        });
    }
    // Optionally add an update method if the paddle needs to move during each frame
    update() {
        this.updatePaddlesMovement();
    }
}
