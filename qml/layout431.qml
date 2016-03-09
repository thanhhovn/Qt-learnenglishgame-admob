import QtMultimedia 5.0
import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Window 2.1
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import "genrand31.js" as GEN
import "lifeshow.js" as LIFE
Item{
    id:learne03;
    property string qrcsource:'assets:/qml/media01/31/' + wordactionarr31[parseInt(countscreen.text)] + '.jpg';
    property string soundsource:'31/' + wordactionarr31[parseInt(countscreen.text)] + '.mp3';Image{anchors.fill: parent;source:"back.png";}
    MediaPlayer {
        id: playMusic;
        source:soundsource;
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
    width: widthimg4;
    height:heightimg4;
    x:xpos41;
    y:ypos41;

    MouseArea {
        x:xpos41;
        y:ypos41;
        width: widthimg4;
        height:heightimg4;

        anchors.fill: parent
        id : truearea
        Rectangle {
            id:rectaction0101
            //opacity: 0.8
            //color: "blue"
            width: widthimg4 + 3;
            height:heightimg4 + 3;
            Rectangle {
                id: resultitem010101
                visible:false;
                width: widthimg4; height:heightimg4;
                Image {
                    id: action010101
                    anchors.fill: parent;
                    source: ""
                }


            }
            Image {
                id: action010101img
                width: widthimg4;
                height:heightimg4;
                anchors.fill: parent;
                source: '31/'+actionarr31[0]+'.jpg'
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

            if(qrcsource.indexOf(actionarr31[0]) > 0){
                playtrueright.play();
                action010101.source = "icons/true.png";
                resultitem010101.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    //actionarr31 = GEN.genrand(parseInt(countscreen.text),3);
                    actionarr31 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items31[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items31[0], destroyOnPop:false })
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
    width: widthimg4;
    height:heightimg4;
    x:xpos42;
    y:ypos42;

    MouseArea {
        x:xpos42;
        y:ypos42;
        width: widthimg4;
        height:heightimg4;

        anchors.fill: parent
        id : falsearea
        Rectangle {
            id:rectaction0102
            //opacity: 0.8
            //color: "red"
            width: widthimg4 + 3;
            height:heightimg4 + 3;
            Rectangle {
                id: resultitem010102
                visible:false;
                width: widthimg4; height:heightimg4;
                Image {
                    id: action010102
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010102img
                width: widthimg4;
                height:heightimg4;

                anchors.fill: parent;
                source: '31/'+actionarr31[1]+'.jpg'
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
            //console.log(action010104img.source == qrcsource);

            action010102img.opacity = 0.7
            //action010102.source = "icons/false.jpg";
            if(qrcsource.indexOf(actionarr31[1]) > 0){
                playtrueright.play();
                action010102.source = "icons/true.png";
                resultitem010102.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    //actionarr31 = GEN.genrand(parseInt(countscreen.text),3);
                    actionarr31 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items31[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items31[0], destroyOnPop:false })
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
    width: widthimg4;
    height:heightimg4;
    x:xpos43;
    y:ypos43;

    MouseArea {
        x:xpos43;
        y:ypos43;
        width: widthimg4;
        height:heightimg4;

        anchors.fill: parent
id : falsearea01
        Rectangle {
            id:rectaction0103
            //opacity: 0.8
            //color: "red"
            width: widthimg4 +3;
            height:heightimg4 +3;
            Rectangle {
                id: resultitem010103
                visible:false;
                width: widthimg4; height:heightimg4;
                Image {
                    id: action010103
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010103img
                width: widthimg4;
                height:heightimg4;

                anchors.fill: parent;
                source: '31/'+actionarr31[2]+'.jpg'
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
            //console.log(action010104img.source == qrcsource);
            action010103img.opacity = 0.7
            //action010103.source = "icons/false.jpg";
            if(qrcsource.indexOf(actionarr31[2]) > 0){
                playtrueright.play();
                action010103.source = "icons/true.png";
                resultitem010103.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    //actionarr31 = GEN.genrand(parseInt(countscreen.text),3);
                    actionarr31 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items31[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items31[0], destroyOnPop:false })
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
    width: widthimg4;
    height:heightimg4;
    x:xpos44;
    y:ypos44;

    MouseArea {
        x:xpos44;
        y:ypos44;
        width: widthimg4;
        height:heightimg4;

        anchors.fill: parent
id : falsearea04
        Rectangle {
            id: rectaction0104
            //opacity: 0.8
            //color: "red"
            width: widthimg4 + 3;
            height:heightimg4 + 3;
            Rectangle {
                id: resultitem010104
                visible:false;
                width: widthimg4; height:heightimg4;
                Image {
                    id: action010104
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010104img
                width: widthimg4;
                height:heightimg4;

                anchors.fill: parent;
                source: '31/'+actionarr31[3]+'.jpg'
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
            //console.log(action010104img.source == qrcsource);
            action010104img.opacity = 0.7
            if(qrcsource.indexOf(actionarr31[3]) > 0){
                playtrueright.play();
                action010104.source = "icons/true.png";
                resultitem010104.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    //actionarr31 = GEN.genrand(parseInt(countscreen.text),3);
                    actionarr31 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items31[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items31[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010104.source = "icons/false.jpg";
                resultitem010104.visible = true;
            }
        }
    }
}

Text{
    x:textpos;y:textposy;color:"white";
    text:wordactionarr31[parseInt(countscreen.text)];
}

Component.onCompleted: {

    //JS.getData("http://ftwgroup.space/wpapi/api/core/get_category_posts/?slug=newspaper")
    //JS.getData("http://myjobupwork.com/test.php")

    playMusic.play();LIFE.lifeshow(myscore);
}

}
