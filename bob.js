class Bob {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':1,
          'friction':0,
          'density':0.8
          
      }
      this.body = Bodies.circle(x, y, 35, options);
      this.radius = 70;
      
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      
      fill("pink");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };