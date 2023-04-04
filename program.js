// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("choinka","choinka.png")
loadSprite("chmura","chmura.png")

loadSound("muzyka","muzyka.mp3")

add([
    sprite("choinka"),
    pos(0,0)
])

const chmura = add([
    sprite("chmura"),
    pos(0,21)
])

let wprawo = true
chmura.onUpdate(() => {
    if(wprawo && chmura.pos.x < 500)
    chmura.pos.x += 1
    else if(!wprawo && chmura.pos.x > 50)
    chmura.pos.x -= 1 
    else wprawo ^=true
})

onMouseRelease(()=> play("muzyka"))