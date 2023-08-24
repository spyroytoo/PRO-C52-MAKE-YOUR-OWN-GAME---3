class Aim {
    constructor(x, y, w, h) {
      let options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.Image =loadImage("Black_colour.jpg");
  
      World.add(world, this.body);
    }

    remove(){
      Matter.World.remove(world,aim.body);
    }
  
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      ellipse(this.Image,0, 0, this.w, this.h);
      pop();
    }
    color(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      ellipse(this.Image,0, 0, this.w, this.h);
      pop();
    }
  }