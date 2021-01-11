class Mango {
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.1,
            friction:2
        }

        this.body = Bodies.circle(x,y,40,options)
        World.add(world,this.body)
        this.image = loadImage("images/mango.png")
        this.gameState = "attached"
        this.r = 40;
    }

    display(){
        var pos = this.body.position
        image(this.image,pos.x,pos.y,80,80)
        imageMode(CENTER)
    }
}