import QtMultimedia 5.0
import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Window 2.1
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import "startagain.js" as ST
Item{
    id:learne;
    property int xpos: 0;
    property int ypos: 0;
    MessageDialog {
        id: msgstartagain
        title: "Game Over"
        text: "You are out of live"
        visible: false;
        onAccepted: {
            //ST.startagain();
        }
    }

    MediaPlayer {
        id: playMusic
        source: "01/looking.mp3"
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
Rectangle{
    width: widthimg;
    height:heightimg;
    x:xpos2
    y:160

    MouseArea {
anchors.fill: parent
id : truearea
        Rectangle {
            id:rectaction0101
            //opacity: 0.8
            //color: "blue"
            width: widthimg;
            height:heightimg;
            //width:Math.round(Screen.desktopAvailableWidth/5); height:Math.round(Screen.desktopAvailableHeight/5)
            Rectangle {
                id: trueitem
                visible:false;
                x: 70; y: 0; width: 30; height: 40
                Image {
                    width: 30;
                    height:30;
                    id: action010101
                    //anchors.fill: parent;
                    source: ""
                }


            }
            Image {
                id: action010101img
                anchors.fill: parent;
                source: "01/looking.jpg"
            }
        }
        onClicked: {
            action010101img.opacity = 0.7
            action010101.source = "icons/true.png";
            trueitem.visible = true;
            //myscore += 1;
            console.log(myscore);
            delay(1, function() {
                stackView.push({ item: stackView.items[2], destroyOnPop:false })
            });

        }
    }



}
Rectangle{
    width: widthimg;
    height:heightimg;
    x:xpos2
    y:ypos2

    MouseArea {
anchors.fill: parent
id : falsearea
        Rectangle {

            //opacity: 0.8
            //color: "red"
            width: widthimg;
            height:heightimg;

            Rectangle {
                id: falseitem
                visible:false;
                x: 70; y: 0; width: 30; height: 40
                Image {
                    id: action010102
                    anchors.fill: parent;
                    source: ""
                }

            }
            Image {
                id: action010102img
                anchors.fill: parent;
                source: "01/pulling.jpg"
            }

        }

        onClicked: {
            action010102img.opacity = 0.7
            action010102.source = "icons/false.jpg";
            falseitem.visible = true;
            myscore -= 1;
            if(myscore <=0){

                msgstartagain.visible = true;

                learne.visible = false;
                myscore = 3;
                delay(10, function() {
                    stackView.push({ item: stackView.items[0]})
                });

            }
        }
    }



}
Text{
    x:textpos;y:textposy;color:"white";
    text:"looking"
}
Rectangle{
    width: 200
    height:160
    x:livepos
    y:40
    Text{
        text:"Live:"+myscore.toString();
    }
}
Component.onCompleted: {

    //JS.getData("http://ftwgroup.space/wpapi/api/core/get_category_posts/?slug=newspaper")
    //JS.getData("http://myjobupwork.com/test.php")
    playMusic.play()
    //console.log(Math.round(Screen.desktopAvailableHeight/2));

}

}
