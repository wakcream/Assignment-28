class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 4
        }
        this.pointB = pointB;
        this.slingShot = Constraint.create(options);
        World.add(world,this.slingShot);
    }
    fly(){
        this.slingShot.bodyA = null;
    }
    display(){
        if(this.slingShot.bodyA){
            line(this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
   
}