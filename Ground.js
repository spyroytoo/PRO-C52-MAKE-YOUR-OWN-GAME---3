class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    remove(){
      Matter.World.remove(world,ground.body);
      Matter.World.remove(world,ground2.body);
      Matter.World.remove(world,ground3.body);
      Matter.World.remove(world,ground4.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };