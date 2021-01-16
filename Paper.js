class Paper{
constructor(x,y,radius){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world, this.body);
}
display(){
    image(this.paper,200,20);
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipse(50,50,10);
    pop();
}
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    };
}