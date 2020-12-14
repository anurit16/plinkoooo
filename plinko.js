class Plinko{
    constructor(x,y,r){
        var option ={
            isStatic:true

        }
        this.body = Bodies.circle(x,y,r,option);
    this.radius = r;
    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    var angle = this.body.angle;
     //   particals.scale=1;
       
       // translate(paperpos.x,paperpos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        //ellipse(0,0,20,20);
        ellipse( 0, 0, this.radius*2, this.radius*2);
        pop();

    }
}