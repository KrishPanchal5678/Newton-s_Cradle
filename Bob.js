class paper
{

constructor(x,y,radius){

   var options = {
       'restitution' : 1,
       'friction': 0,
       'density' : 0.8
   }
  
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.body = Bodies.circle(this.x, this.y, (this.radius)/2, options)

  World.add(world, this.body);
}

display()
{
    push();
    translate(this.body.position.x, this.body.position.y);

    ellipseMode(RADIUS);
    fill("white");
    ellipse(0, 0, this.radius, this.radius);
  
    pop();
}


}