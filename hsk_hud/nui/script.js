$(()=>{
    window.addEventListener("message", (event)=>{
        let e = event.data

        if (e.action === "u-hud") {
            $("#health").css({"width": Math.round(e.vida) + "%"});
            $("#hunger").css({"width": Math.round(e.hunger) + "%"});
            $("#thirst").css({"width": Math.round(e.thirst) + "%"});
            $("#shield").css({"width": Math.round(e.escudo) + "%"});
            $("#stamina").css({"width": Math.round(e.stamina) + "%"});
            $("#oxygen").css({"width": Math.round(e.oxigeno) + "%"});
        }

        if (e.enVeh) {
            $(".all-hud").css({"bottom": "11vw" , "left": "1.5vw"})
        }
        else {
            $(".all-hud").css({"bottom": "1.3vw" , "left": "1vw"})
        }

        if(e.vida > 80){
            $('.health').hide(200)
        }else{
            $('.health').show(200)
        };
    
        if(e.escudo <= 50){
            $('.shield').hide(200)
        }else{
            $('.shield').show(200)
        };
    
        if(e.hunger >= 80){
            $('.hunger').hide(200)
        }else{
            $('.hunger').show(200)
        };
    
        if(e.thirst >= 80){
            $('.thirst').hide(200)
        }else{
            $('.thirst').show(200)
        };

        if(e.stamina >= 90){
            $('.stamina').hide(200)
        }else{
            $('.stamina').show(200)
        };

        if(e.oxigeno >= 90){
            $('.oxygen').hide(200)
        }else{
            $('.oxygen').show(200)
        };
    })
})