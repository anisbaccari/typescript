declare const BABYLON: any;

export class Paddle {
  private  colors: any;
  private  width: number = 1;
  private  height: number = 1;
  private  depth: number = 10;
  
  private  leftPaddle: any | null = null;
  private  rightPaddle: any | null = null;

  private  moveUpL: boolean = false;
  private  moveDownL: boolean = false;
  private  moveUpR: boolean = false;
  private  moveDownR: boolean = false;

  private  paddleSpeed: number = 1.5;

  constructor(scene:any){
    this.init(scene,50);
}

      // Initialize paddles with given scene and ground width
        init(scene:any, g_width: number): void {
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
        
        private  getPositions(g_width: number): { left: number; right: number; } {
            return {
                left: -g_width / 2 + this.width / 2,
                right: g_width / 2 - this.width / 2,
            };
        }
        
        private  createPaddle(name: string, positionX: number, scene:any): any {
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
        
        private  updatePaddlesMovement(): void {
            if (this.moveUpL && this.leftPaddle!.position.y < 15) {
                this.leftPaddle!.position.z += this.paddleSpeed;
            }
            if (this.moveDownL && this.leftPaddle!.position.y > -15) {
                this.leftPaddle!.position.z -= this.paddleSpeed;
            }
            if (this.moveUpR && this.rightPaddle!.position.y < 15) {
                this.rightPaddle!.position.z += this.paddleSpeed;
            }
            if (this.moveDownR && this.rightPaddle!.position.y > -15) {
                this.rightPaddle!.position.z -= this.paddleSpeed;
            }
        }
        
        private  setupInputControls(): void {
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
  public  update(): void {
      this.updatePaddlesMovement();
    }

}
