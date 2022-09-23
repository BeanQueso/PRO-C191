AFRAME.registerComponent("jump",{
    init:function(){
        this.jump()
    },
    jump:function(){
        character = document.querySelector("#camera")
        isJumping = false
        charPos = character.getAttribute("position")
        //0 1.6 0
        window.addEventListener("keydown", (e)=>{
            if (e.key == " " ||e.code == "Space"){
                if (isJumping === false && charPos.y===1.6){
                    while(charPos.y<3){
                        charPos.y+=0.00001
                    }
                }
            }
        })
    }
})