import { Paddle } from "./Paddle.js";  // Import Paddle class
import { Ball } from "./Ball.js";      // Import Ball class
import { Ground } from "./Ground.js";  // Import Ground class
//import { Loop } from "./Loop.js";      // Import Loop class

class Pong {
  private scene: any;
  private paddle: Paddle | null;
  private ball: Ball | null;
  private ground: Ground | null ;
  private x_boundaries:number[] | null;
  private z_boundaries:number[] | null;
  public collisionState:boolean = false;
 
 
  constructor(scene: any) {
    this.scene = scene;
    this.paddle = null;
    this.ball = null;
    this.ground = null;
    this.x_boundaries = null;
    this.z_boundaries = null;
    this.init();
  }

  public init(): void {
    // Initialize Ground
    this.ground = new Ground(this.scene);
    this.x_boundaries=this.ground?.getXBoundaries(); 
    this.z_boundaries=this.ground?.getZBoundaries();
    // Initialize Paddle with ground width
   // const groundWidth = Ground.getWidth();
    this.paddle = new Paddle(this.scene); // Pass scene & width

    // set boundarie : 
    this.paddle.setBoundaries(this.x_boundaries,this.z_boundaries);
    // Initialize Ball
    this.ball = new Ball(this.scene, { x: 0, y: 1, z: 0 });

    // Initialize any loops or additional game mechanics
   // Loop.start(this.scene); // Assuming Loop is a class managing the game loop
  }

  // Optionally, add an update method if you need to update game objects on each frame
   public update(): void {
    if (this.paddle) this.paddle.update();
   // this.display();
    if (this.ball) this.ball.update();
} 
   public collision():void{
    
      const isColliding =
          this.ball?.mesh?.intersectsMesh!(this.paddle?.leftPaddle, false) ||
          this.ball?.mesh?.intersectsMesh!(this.paddle?.rightPaddle, false) 
    
          const ballGroundCollision_x =  
          this.ball?.mesh?.position.x <= this.x_boundaries![0] ||
          this.ball?.mesh?.position.x >= this.x_boundaries![1]
    
        const ballGroundCollision_z =  
        this.ball?.mesh?.position.z <=this.z_boundaries![0] ||
        this.ball?.mesh?.position.z >= this.x_boundaries![1];

          
      if (isColliding && !this.collisionState) {
        // Collision just started
       // console.log(" Paddle Colliding");
        this.collisionState = true;
        ballDirection.x *=-1;
     
    }
    if (ballGroundCollision_x && !this.collisionState) {
            // Collision just started
    //        console.log("ballGroundCollision_x");
            this.collisionState = true;
            ballDirection.x *=-1;
         

    } if (ballGroundCollision_z && !this.collisionState) {
        // Collision just started
        console.log("ballGroundCollision_z");
        this.collisionState = true;
        ballDirection.z *=-1;
   
    } else if (!isColliding) {
        // No collision, reset state
        this.collisionState = false;
    } 
      

   }

public display():void {

    this.ground?.display();
    this.ball?.display();
    this.paddle?.display();
  }
}

export { Pong };


/* 



      
      if (isColliding && !this.collisionState) {
          // Collision just started
         // console.log(" Paddle Colliding");
          this.collisionState = true;
          ballDirection.x *=-1;
       
      }
      if (ballGroundCollision_x && !this.collisionState) {
              // Collision just started
      //        console.log("ballGroundCollision_x");
              this.collisionState = true;
              ballDirection.x *=-1;
           

      } if (ballGroundCollision_z && !this.collisionState) {
          // Collision just started
          console.log("ballGroundCollision_z");
          this.collisionState = true;
          ballDirection.z *=-1;
     
      } else if (!isColliding) {
          // No collision, reset state
          this.collisionState = false;
      } */