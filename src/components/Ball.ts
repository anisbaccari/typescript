declare const BABYLON: any; // Ensure Babylon.js is recognized

export class Ball {
  public mesh: any;
  private ballSpeed:any;


  constructor(scene: any, position: { x: number; y: number; z: number } = { x: 0, y: 1, z: 0 }) {
    this.mesh = BABYLON.MeshBuilder.CreateSphere("ball", { diameter: 2 }, scene);
    this.mesh.position.set(position.x, position.y, position.z);

    // Optional: Add material
    const material = new BABYLON.StandardMaterial("ballMaterial", scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Red color
    this.mesh.material = material;
    this.ballSpeed = new BABYLON.Vector3(0.3, 0, 0.1);

  }


  public display(): void
  {
    console.log("Ball :",this.mesh!.position );
  }
  public update(): void
  {
      //  this.mesh.position.addInPlace(this.ballSpeed)
  }
}


