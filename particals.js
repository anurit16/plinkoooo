class Particals{
    constructor(x,y,r){
        var option ={
            isStatic:false

        }
        this.body = Bodies.circle(x,y,r,option);
        this.color = color(random,(0,255),random(0,255),random(0,255));
        
    this.radius = r;
    World.add(world,this.body);
    }
    display(){
       // var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    var angle = this.body.angle;
     //   particals.scale=1;
        push();
        translate(paperpos.x,paperpos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,10,10);
        pop();
    }
}