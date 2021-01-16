class Dustbin{
constructor(x,y){
    var options={isStatic:true};
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    pop();
}
}