class plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true

        }
        
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
       
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle
        Push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(x, y, this.r);
        Pop();
    }
};
