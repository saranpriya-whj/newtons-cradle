class Launcher{
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetx=offsetx
       this.offsety=offsety
       
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetx,y:this.offsety} ,
            stiffness: 0.04,
            length: 200
        }
       
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    

    }

    display(){
        
            var pointA = this.launcher.bodyA.position;
            var pointB = this.launcher.bodyB.position;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x+this.offsetx, pointB.y+this.offsety);
        }
    
}

