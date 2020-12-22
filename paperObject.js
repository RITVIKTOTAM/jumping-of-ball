class Paper{
    constructor(x, y, width, height,angle) {
     
        var options = {
          'isStatic':false,
          'restitution':1.3,
          'friction':1.5,
          'density':1.5
      }
      
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
    Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      this.body.velocityX = 2;
      rotate(angle);
      fill(255);
      circle(0, 0, this.width);
      pop();
    }
  };
  

