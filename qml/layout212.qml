import QtMultimedia 5.0
import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Window 2.1
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import "genrand12.js" as GEN
import "lifeshow.js" as LIFE
Item{
    id:learne03;
    property string qrcsource:'assets:/qml/12/' + wordactionarr12[parseInt(countscreen.text)] + '.jpg';
    property string soundsource:'12/' + wordactionarr12[parseInt(countscreen.text)] + '.mp3';Image{anchors.fill: parent;source:"back.png";}
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
    width: widthimg2;
    height:heightimg2;radius: 20.0;
    x:xpos21;
    y:ypos21;

    MouseArea {
        x:xpos21;
        y:ypos21;
        width: widthimg2;
        height:heightimg2;

        anchors.fill: parent
        id : truearea
        Rectangle {
            id:rectaction0101
            //opacity: 0.8
            //color: "blue"
            width: widthimg2 + 3;
            height:heightimg2 + 3;
            Rectangle {
                id: resultitem010101
                visible:false;
                width: widthimg2; height:heightimg2;
                Image {
                    width: widthimg2;
                    height:heightimg2;
                    id: action010101
                    //anchors.fill: parent;
                    source: ""
                }


            }
            Image {
                id: action010101img
                width: widthimg2;
                height:heightimg2;

                anchors.fill: parent;

                source: '12/'+actionarr12[0]+'.jpg'
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

            if(qrcsource.indexOf(actionarr12[0]) > 0){
                playtrueright.play();
                action010101.source = "icons/true.png";
                resultitem010101.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    //actionarr12 = GEN.genrand(parseInt(countscreen.text),3);
                    actionarr12 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items12[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items12[0], destroyOnPop:false })
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
    width: widthimg2;
    height:heightimg2;radius: 20.0;
    x:xpos22;
    y:ypos22;

    MouseArea {
        x:xpos22;
        y:ypos22;
        width: widthimg2;
        height:heightimg2;

        anchors.fill: parent
        id : falsearea
        Rectangle {
            id:rectaction0102
            //opacity: 0.8
            //color: "blue"
            width: widthimg2 + 3;
            height:heightimg2 + 3;
            Rectangle {
                id: resultitem010102
                visible:false;
                width: widthimg2; height:heightimg2;
                Image {
                    width: widthimg2; height:heightimg2;
                    id: action010102
                    //anchors.fill: parent;
                    source: ""
                }


            }
            Image {
                id: action010102img
                width: widthimg2;
                height:heightimg2;

                anchors.fill: parent;

                source: '12/'+actionarr12[1]+'.jpg'
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
            if(qrcsource.indexOf(actionarr12[1]) > 0){
                playtrueright.play();
                action010102.source = "icons/true.png";
                resultitem010102.visible = true;
                countscreen.text = (parseInt(countscreen.text) + 1).toString();
                delay(1, function() {
                    //actionarr12 = GEN.genrand(parseInt(countscreen.text),3);
                    actionarr12 = GEN.genrandstackview(parseInt(countscreen.text));
                    stackView.push({ item: stackView.items12[parseInt(countscreen.text)], destroyOnPop:false })
                });
            }
            else{
                myscore -= 1;
                LIFE.lifeshow(myscore);
                if(myscore <= 0){
                    playbgMusic.stop();
                    playstartagainmp3.play();
                    msgstartagain.visible = true;
                    stackView.push({ item: stackView.items12[0], destroyOnPop:false })
                }else{
                    playfalsewrong.play();
                }
                action010102.source = "icons/false.jpg";
                resultitem010102.visible = true;
            }
        }
    }



}

Text{
    x:textpos;y:textposy;color:"white";
    text:wordactionarr12[parseInt(countscreen.text)];
}
/*
Rectangle{
    width: 200
    height:160
    x:livepos
    y:40
    Text{
        text:"Live:"+myscore.toString();
    }
}
*/
Component.onCompleted: {
    //console.log(action010102img.source);
    playbgMusic.play();
    elapsedTimer.running = true;
    counterText.visible = true;
    counterTextbg.visible = true;

    live3all.visible = true;
    //JS.getData("http://ftwgroup.space/wpapi/api/core/get_category_posts/?slug=newspaper")
    //JS.getData("http://myjobupwork.com/test.php")
    live01.visible = true;
    live02.visible = true;
    live03.visible = true;
    playMusic.play();LIFE.lifeshow(myscore);

}

}
