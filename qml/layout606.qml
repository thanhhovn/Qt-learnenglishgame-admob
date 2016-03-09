import QtMultimedia 5.0
import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Window 2.1
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import "genrand06.js" as GEN
import "lifeshow.js" as LIFE
Item{
    id:learne03;
    property string qrcsource:'assets:/qml/06/' + wordactionarr06[parseInt(countscreen.text)] + '.jpg';
    property string soundsource:'06/' + wordactionarr06[parseInt(countscreen.text)] + '.mp3';Image{anchors.fill: parent;source:"back.png";}

    MediaPlayer {
        id: playMusic
        source: soundsource;
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
//rec1
Rectangle{
    width: widthimg6;
    height:heightimg6;
    x:xpos61;
    y:ypos61;

    MouseArea {
anchors.fill: parent
id : truearea
        Rectangle {
            id:rectaction0101
            //opacity: 0.8
            //color: "blue"
            width: widthimg6 +3;
            height:heightimg6 +3;
            Rectangle {
                id: resultitem010101
                visible:false;
                width: widthimg6; height:heightimg6;
                Image {
                    id: action010101
                    anchors.fill: parent;
                    source: ""
                }


            }
            Image {
                id: action010101img
                width: widthimg6;
                height:heightimg6;
                anchors.fill: parent;
                source: '06/'+actionarr06[0]+'.jpg'
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

            if(qrcsource.indexOf(actionarr06[0]) > 0){
                playtrueright.play();
                action010101.source = "icons/true.png";
                resultitem010101.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    actionarr06 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items06[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items06[0], destroyOnPop:false })
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
    width: widthimg6;
    height:heightimg6;
    x:xpos62;
    y:ypos62;

    MouseArea {
anchors.fill: parent
id : falsearea
        Rectangle {

            //opacity: 0.8
            //color: "red"
            id:rectaction0102
            width: widthimg6 + 3;
            height:heightimg6 + 3;
            Rectangle {
                id: resultitem010102
                visible:false;
                width: widthimg6; height:heightimg6;
                Image {
                    id: action010102
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010102img
                width: widthimg6;
                height:heightimg6;

                anchors.fill: parent;
                source: "06/"+actionarr06[1]+".jpg";
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
            if(qrcsource.indexOf(actionarr06[1]) > 0){
                playtrueright.play();
                action010102.source = "icons/true.png";
                resultitem010102.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    actionarr06 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items06[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items06[0], destroyOnPop:false })
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
    width: widthimg6;
    height:heightimg6;
    x:xpos63;
    y:ypos63;

    MouseArea {
anchors.fill: parent
id : falsearea01
        Rectangle {
            id:rectaction0103
            //opacity: 0.8
            //color: "red"
            width: widthimg6 + 3;
            height:heightimg6 + 3;
            Rectangle {
                id: resultitem010103
                visible:false;
                width: widthimg6; height:heightimg6;
                Image {
                    id: action010103
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010103img
                width: widthimg6;
                height:heightimg6;

                anchors.fill: parent;
                source: "06/"+actionarr06[2]+".jpg"
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
            if(qrcsource.indexOf(actionarr06[2]) > 0){
                playtrueright.play();
                action010103.source = "icons/true.png";
                resultitem010103.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    actionarr06 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items06[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items06[0], destroyOnPop:false })
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
    width: widthimg6;
    height:heightimg6;
    x:xpos64;
    y:ypos64;

    MouseArea {
anchors.fill: parent
id : falsearea04
        Rectangle {
            id:rectaction0104
            //opacity: 0.8
            //color: "red"
            width: widthimg6+3;
            height:heightimg6+3;
            Rectangle {
                id: resultitem010104
                visible:false;
                width: widthimg6; height:heightimg6;
                Image {
                    id: action010104
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010104img
                width: widthimg6;
                height:heightimg6;

                anchors.fill: parent;
                source: "06/"+actionarr06[3]+".jpg"
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
            if(qrcsource.indexOf(actionarr06[3]) > 0){
                playtrueright.play();
                action010104.source = "icons/true.png";
                resultitem010104.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    actionarr06 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items06[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items06[0], destroyOnPop:false })
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
    width: widthimg6;
    height:heightimg6;
    x:xpos65;
    y:ypos65;

    MouseArea {
anchors.fill: parent
id : falsearea05
        Rectangle {
            id:rectaction0105
            //opacity: 0.8
            //color: "red"
            width: widthimg6+3;
            height:heightimg6+3;
            Rectangle {
                id: resultitem010105
                visible:false;
                width: widthimg6; height:heightimg6;
                Image {
                    id: action010105
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010105img
                width: widthimg6;
                height:heightimg6;

                anchors.fill: parent;
                source: "06/"+actionarr06[4]+".jpg"
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
            if(qrcsource.indexOf(actionarr06[4]) > 0){
                playtrueright.play();
                action010105.source = "icons/true.png";
                resultitem010105.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    actionarr06 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items06[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items06[0], destroyOnPop:false })
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
    width: widthimg6;
    height:heightimg6;
    x:xpos66;
    y:ypos66;

    MouseArea {
anchors.fill: parent
id : falsearea06
        Rectangle {
            id:rectaction0106
            //opacity: 0.8
            //color: "red"
            width: widthimg6+3;
            height:heightimg6+3;
            Rectangle {
                id: resultitem010106
                visible:false;
                width: widthimg6; height:heightimg6;
                Image {
                    id: action010106
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010106img
                width: widthimg6;
                height:heightimg6;
                anchors.fill: parent;
                source: "06/"+actionarr06[5]+".jpg"
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
            if(qrcsource.indexOf(actionarr06[5]) > 0){
                playtrueright.play();
                action010106.source = "icons/true.png";
                resultitem010106.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    actionarr06 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items06[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items06[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010106.source = "icons/false.jpg";
                resultitem010106.visible = true;

            }
        }
    }
}
Text{
    x:textpos;y:textposy;color:"white";
    text:wordactionarr06[parseInt(countscreen.text)];
}

Component.onCompleted: {

    //JS.getData("http://ftwgroup.space/wpapi/api/core/get_category_posts/?slug=newspaper")
    //JS.getData("http://myjobupwork.com/test.php")
    playMusic.play();LIFE.lifeshow(myscore);
}

}
