function lifeshow(myscore) {
    console.log("Score is:"+ myscore.toString());
    if(myscore == 3){
        live3all.visible = true;
        live01.visible = true;
        live02.visible = true;
        live03.visible = true;
    }
    if(myscore == 2){
        live3all.visible = true;
        live01.visible = true;
        live02.visible = true;
        live03.visible = false;
    }
    if(myscore == 1){
        live3all.visible = true;
        live01.visible = true;
        live02.visible = false;
        live03.visible = false;
    }
    if(myscore == 0){
        live3all.visible = true;
        live01.visible = false;
        live02.visible = false;
        live03.visible = false;
    }

}

