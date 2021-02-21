class Drop{
  constructor(x,y){
    var options ={
        restitution: 1,
        friction: 0.001,
        
    }
    this.r = 10;
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body)
    
  }

  showDrop(){
    var pos=this.body.position;
    fill("blue")
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
    
  }
  update() {
   if(this.body.position.y>height){
     Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
   }
  }
}