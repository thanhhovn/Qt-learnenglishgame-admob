import QtMultimedia 5.0
import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Window 2.1
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import "genrand33.js" as GEN
import "lifeshow.js" as LIFE
Item{
    id:learne03;
    property string qrcsource:'assets:/qml/33/' + wordactionarr33[parseInt(countscreen.text)] + '.jpg';
    property string soundsource:'33/' + wordactionarr33[parseInt(countscreen.text)] + '.mp3';Image{anchors.fill: parent;source:"back.png";}

    MediaPlayer {
        id: playMusic
        source: soundsource
    }
    MessageDialog {
        id: msgstartagain
        title: "Game Over"
        text: "You are out of live"
        visible: false;
        onAccepted: {
            //ST.startagain();
        }
    }
Timer {
    id: timer
}
function delay(delayTime, cb) {
    timer.interval = delayTime;
    timer.repeat = false;
    timer.triggered.connect(cb);
    timer.start();
}
function clicknext(){

    delay(1, function() {
        //console.log("Count screen:" + countscreen.text);
        if(parseInt(countscreen.text == 21)){
            counterText.visible = false;
            counterTextbg.visible = false;
            //stackView.push({ item: Qt.resolvedUrl("maine.qml"), destroyOnPop:false })
            stackView.push({ item: stackView.items33[parseInt(countscreen.text)], destroyOnPop:false })
        }else{
            actionarr33 = GEN.genrandstackview(parseInt(countscreen.text));
            stackView.push({ item: stackView.items33[parseInt(countscreen.text)], destroyOnPop:false })
        }
    });
}

//rec1
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos121;
    y:ypos121;

    MouseArea {
anchors.fill: parent
id : truearea
        Rectangle {
            id:rectaction0101
            //opacity: 0.8
            //color: "blue"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010101
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010101
                    anchors.fill: parent;
                    source: ""
                }


            }
            Image {
                id: action010101img
                width: widthimg12;
                height:heightimg12;
                anchors.fill: parent;
                source: "33/"+actionarr33[0]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0101
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }

        }
        onClicked: {
            //console.log(action010104img.source == qrcsource);
            action010101img.opacity = 0.7
            //myscore += 1;

            if(qrcsource.indexOf(actionarr33[0]) > 0){
                playtrueright.play();
                action010101.source = "icons/true.png";
                resultitem010101.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();

                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010101.source = "icons/false.jpg";
                resultitem010101.visible = true;
            }
        }
    }



}
//rec2
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos122;
    y:ypos122;

    MouseArea {
anchors.fill: parent
id : falsearea
        Rectangle {
            id:rectaction0102
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010102
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010102
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010102img
                width: widthimg12;
                height:heightimg12;
                anchors.fill: parent;
                source: "33/"+actionarr33[1]+".jpg";
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0102
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }
        }

        onClicked: {
            action010102img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[1]) > 0){
                playtrueright.play();
                action010102.source = "icons/true.png";
                resultitem010102.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010102.source = "icons/false.jpg";
                resultitem010102.visible = true;
            }
        }
    }



}
//rect3
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos123;
    y:ypos123;

    MouseArea {
anchors.fill: parent
id : falsearea01
        Rectangle {
            id:rectaction0103
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010103
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010103
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010103img
                width: widthimg12;
                height:heightimg12;
                anchors.fill: parent;
                source: "33/"+actionarr33[2]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0103
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }
        }

        onClicked: {
            action010103img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[2]) > 0){
                playtrueright.play();
                action010103.source = "icons/true.png";
                resultitem010103.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010103.source = "icons/false.jpg";
                resultitem010103.visible = true;
            }
        }
    }
}
//rect 4
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos124;
    y:ypos124;

    MouseArea {
anchors.fill: parent
id : falsearea04
        Rectangle {
            id:rectaction0104
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010104
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010104
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010104img
                width: widthimg12;
                height:heightimg12;

                anchors.fill: parent;
                source: "33/"+actionarr33[3]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0104
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }
        }

        onClicked: {
            action010104img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[3]) > 0){
                playtrueright.play();
                action010104.source = "icons/true.png";
                resultitem010104.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010104.source = "icons/false.jpg";
                resultitem010104.visible = true;
            }
        }
    }
}
//rect 5
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos125;
    y:ypos125;

    MouseArea {
anchors.fill: parent
id : falsearea05
        Rectangle {
            id:rectaction0105
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010105
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010105
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010105img
                width: widthimg12;
                height:heightimg12;

                anchors.fill: parent;
                source: "33/"+actionarr33[4]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0105
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }
        }

        onClicked: {
            action010105img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[4]) > 0){
                playtrueright.play();
                action010105.source = "icons/true.png";
                resultitem010105.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010105.source = "icons/false.jpg";
                resultitem010105.visible = true;
            }
        }
    }
}
//rect 6
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos126;
    y:ypos126;

    MouseArea {
anchors.fill: parent
id : falsearea06
        Rectangle {
            id:rectaction0106
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010106
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010106
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010106img
                width: widthimg12;
                height:heightimg12;

                anchors.fill: parent;
                source: "33/"+actionarr33[5]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0106
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }
        }

        onClicked: {
            action010106img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[5]) > 0){
                playtrueright.play();
                action010106.source = "icons/true.png";
                resultitem010106.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010106.source = "icons/false.jpg";
                resultitem010106.visible = true;
            }
        }
    }
}
//rect 7
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos127;
    y:ypos127;

    MouseArea {
anchors.fill: parent
id : falsearea07
        Rectangle {
            id:rectaction0107
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010107
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010107
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010107img
                anchors.fill: parent;
                width: widthimg12;
                height:heightimg12;

                source: "33/"+actionarr33[6]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0107
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }
        }

        onClicked: {
            action010107img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[6]) > 0){
                playtrueright.play();
                action010107.source = "icons/true.png";
                resultitem010107.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010107.source = "icons/false.jpg";
                resultitem010107.visible = true;

            }
        }
    }
}
//rect 8
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos128;
    y:ypos128;

    MouseArea {
anchors.fill: parent
id : falsearea08
        Rectangle {
            id:rectaction0108
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010108
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010108
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010108img
                width: widthimg12;
                height:heightimg12;

                anchors.fill: parent;
                source: "33/"+actionarr33[7]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0108
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }

        }

        onClicked: {
            action010108img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[7]) > 0){
                playtrueright.play();
                action010108.source = "icons/true.png";
                resultitem010108.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010108.source = "icons/false.jpg";
                resultitem010108.visible = true;
            }
        }
    }
}
//rect 9
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos129;
    y:ypos129;

    MouseArea {
anchors.fill: parent
id : falsearea09
        Rectangle {
            id:rectaction0109
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010109
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010109
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010109img
                anchors.fill: parent;
                width: widthimg12;
                height:heightimg12;

                source: "33/"+actionarr33[8]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0109
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }

        }

        onClicked: {
            action010109img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[8]) > 0){
                playtrueright.play();
                action010109.source = "icons/true.png";
                resultitem010109.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010109.source = "icons/false.jpg";
                resultitem010109.visible = true;

            }
        }
    }
}

//rect 10
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos1210;
    y:ypos1210;

    MouseArea {
anchors.fill: parent
id : falsearea10
        Rectangle {
            id:rectaction0110
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010110
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010110
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010110img
                anchors.fill: parent;
                width: widthimg12;
                height:heightimg12;

                source: "33/"+actionarr33[9]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0110
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }

        }

        onClicked: {
            action010110img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[9]) > 0){
                playtrueright.play();
                action010110.source = "icons/true.png";
                resultitem010110.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010110.source = "icons/false.jpg";
                resultitem010110.visible = true;

            }
        }
    }
}

//rect 11
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos1211;
    y:ypos1211;

    MouseArea {
anchors.fill: parent
id : falsearea11
        Rectangle {
            id:rectaction0111
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010111
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010111
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010111img
                width: widthimg12;
                height:heightimg12;

                anchors.fill: parent;
                source: "33/"+actionarr33[10]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0111
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }

        }

        onClicked: {
            action010111img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[10]) > 0){
                playtrueright.play();
                action010111.source = "icons/true.png";
                resultitem010111.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010111.source = "icons/false.jpg";
                resultitem010111.visible = true;
            }
        }
    }
}

//rect 12
Rectangle{
    width: widthimg12;
    height:heightimg12;
    x:xpos1212;
    y:ypos1212;

    MouseArea {
anchors.fill: parent
id : falsearea12
        Rectangle {
            id:rectaction0112
            //opacity: 0.8
            //color: "red"
            width: widthimg12+3;
            height:heightimg12+3;
            Rectangle {
                id: resultitem010112
                visible:false;
                width: widthimg12; height:heightimg12;
                Image {
                    id: action010112
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010112img
                anchors.fill: parent;
                width: widthimg12;
                height:heightimg12;

                source: "33/"+actionarr33[11]+".jpg"
            }
            Rectangle { // rounded corners for img
                anchors.fill: rectaction0112
                color: "transparent"
                border.color: "red" // color of background
                border.width: 3
                radius: 3
            }


        }

        onClicked: {
            action010112img.opacity = 0.7
            if(qrcsource.indexOf(actionarr33[11]) > 0){
                playtrueright.play();
                action010112.source = "icons/true.png";
                resultitem010112.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                clicknext();
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items33[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010112.source = "icons/false.jpg";
                resultitem010112.visible = true;
            }
        }
    }
}
Text{
    x:textpos;y:textposy;color:"white";
    text:wordactionarr33[parseInt(countscreen.text)];
}

Component.onCompleted: {

    //JS.getData("http://ftwgroup.space/wpapi/api/core/get_category_posts/?slug=newspaper")
    //JS.getData("http://myjobupwork.com/test.php")
    playMusic.play();LIFE.lifeshow(myscore);
    currentlevelcp.text = "2";
}

}
