import QtMultimedia 5.0
import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Window 2.1
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1

Item{


    property int heightimge:Math.round((Screen.desktopAvailableHeight - 100)/10) ;
    property int widthimge:Math.round(heightimge*3/4);
    property int xpose1:Math.round(Screen.desktopAvailableWidth/8) - Math.round(widthimge/2);
    property int ypose1:Math.round((Screen.desktopAvailableHeight - 5)/20) - Math.round(heightimge/2);
    property int xpose2:Math.round(Screen.desktopAvailableWidth/4) + xpose1 + 5;
    property int ypose2:ypose1;
    property int xpose3:Math.round(Screen.desktopAvailableWidth/2) + xpose1 + 5;
    property int ypose3:ypose1;
    property int xpose4:Math.round(Screen.desktopAvailableWidth*3/4) + xpose1 + 5;
    property int ypose4:ypose1;
    property int xpose5:xpose1;
    property int ypose5:Math.round((Screen.desktopAvailableHeight - 5)/10) + ypose1;
    MessageDialog {
        id: msgblocked
        title: "Level Block"
        text: "You must complete previous level"
        visible: false;
        onAccepted: {
            //ST.startagain();
        }
    }
    MessageDialog {
        id: msgfinish
        title: "Level Complete"
        text: "You have complete this level"
        visible: false;
        onAccepted: {
            //ST.startagain();
        }
    }
    function blockclicked(currentleveltxt,itemlevel){

        if( parseInt(currentleveltxt) >= itemlevel){
            if(itemlevel == 1){
                stackView.push({ item: stackView.items[1], destroyOnPop:false })
            }
            if(itemlevel == 2){
                stackView.push({ item: stackView.items02[1], destroyOnPop:false })
            }
            if(itemlevel == 3){
                stackView.push({ item: stackView.items03[1], destroyOnPop:false })
            }
            if(itemlevel == 4){
                stackView.push({ item: stackView.items04[1], destroyOnPop:false })
            }
            if(itemlevel == 5){
                stackView.push({ item: stackView.items05[1], destroyOnPop:false })
            }
            if(itemlevel == 6){
                stackView.push({ item: stackView.items06[1], destroyOnPop:false })
            }
            if(itemlevel == 7){
                stackView.push({ item: stackView.items07[1], destroyOnPop:false })
            }
            if(itemlevel == 8){
                stackView.push({ item: stackView.items08[1], destroyOnPop:false })
            }
            if(itemlevel == 9){
                stackView.push({ item: stackView.items09[1], destroyOnPop:false })
            }
            if(itemlevel == 10){
                stackView.push({ item: stackView.items10[1], destroyOnPop:false })
            }
            if(itemlevel == 11){
                stackView.push({ item: stackView.items11[1], destroyOnPop:false })
            }
            if(itemlevel == 12){
                stackView.push({ item: stackView.items12[1], destroyOnPop:false })
            }
            if(itemlevel == 13){
                stackView.push({ item: stackView.items13[1], destroyOnPop:false })
            }
            if(itemlevel == 14){
                stackView.push({ item: stackView.items14[1], destroyOnPop:false })
            }
            if(itemlevel == 15){
                stackView.push({ item: stackView.items15[1], destroyOnPop:false })
            }
            if(itemlevel == 16){
                stackView.push({ item: stackView.items16[1], destroyOnPop:false })
            }
            if(itemlevel == 17){
                stackView.push({ item: stackView.items17[1], destroyOnPop:false })
            }
            if(itemlevel == 18){
                stackView.push({ item: stackView.items18[1], destroyOnPop:false })
            }
            if(itemlevel == 19){
                stackView.push({ item: stackView.items19[1], destroyOnPop:false })
            }
            if(itemlevel == 20){
                stackView.push({ item: stackView.items20[1], destroyOnPop:false })
            }
            if(itemlevel == 21){
                stackView.push({ item: stackView.items21[1], destroyOnPop:false })
            }
            if(itemlevel == 22){
                stackView.push({ item: stackView.items22[1], destroyOnPop:false })
            }
            if(itemlevel == 23){
                stackView.push({ item: stackView.items23[1], destroyOnPop:false })
            }
            if(itemlevel == 24){
                stackView.push({ item: stackView.items24[1], destroyOnPop:false })
            }
            if(itemlevel == 25){
                stackView.push({ item: stackView.items25[1], destroyOnPop:false })
            }
            if(itemlevel == 26){
                stackView.push({ item: stackView.items26[1], destroyOnPop:false })
            }
            if(itemlevel == 27){
                stackView.push({ item: stackView.items27[1], destroyOnPop:false })
            }
            if(itemlevel == 28){
                stackView.push({ item: stackView.items28[1], destroyOnPop:false })
            }
            if(itemlevel == 29){
                stackView.push({ item: stackView.items29[1], destroyOnPop:false })
            }
            if(itemlevel == 30){
                stackView.push({ item: stackView.items30[1], destroyOnPop:false })
            }
            if(itemlevel == 31){
                stackView.push({ item: stackView.items31[1], destroyOnPop:false })
            }
            if(itemlevel == 32){
                stackView.push({ item: stackView.items32[1], destroyOnPop:false })
            }
            if(itemlevel == 33){
                stackView.push({ item: stackView.items33[1], destroyOnPop:false })
            }
            if(itemlevel == 34){
                stackView.push({ item: stackView.items34[1], destroyOnPop:false })
            }
            if(itemlevel == 35){
                stackView.push({ item: stackView.items35[1], destroyOnPop:false })
            }
            if(itemlevel == 36){
                stackView.push({ item: stackView.items36[1], destroyOnPop:false })
            }
            if(itemlevel == 37){
                stackView.push({ item: stackView.items37[1], destroyOnPop:false })
            }
            startTime = 0;
            counterTextbg.visible = true;
            elapsedTimer.running = true;
        }else{
            msgblocked.visible = true;
        }
    }
    Flickable {
        y:125;
        anchors.fill: parent
        contentHeight: sidebarGrid.height
        contentWidth: sidebarGrid.width
    Grid {
        //anchors.horizontalCenter: parent.horizontalCenter
        //anchors.verticalCenter: parent.verticalCenter
        columns: 3
        id: sidebarGrid
        flow: Grid.LeftToRight
        x:(Screen.desktopAvailableWidth - ((Screen.desktopAvailableWidth/4 + 20)*3))/2;
        y:125;
        //spacing: 6

        //rec01
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
        id : level1
        width: Screen.desktopAvailableWidth/4;
        height: Screen.desktopAvailableWidth/4;
            //visible: GEN.truefalsert(level1)
        Rectangle {
            //opacity: 0.8
            opacity: 0.5;radius: 20;
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
            id:rectaction0101
            Image{
                anchors.fill: parent;
                source:"back.png";

            }

            Text {
                text: "Action 1"
                font.family: "Helvetica"
                font.pointSize: 14
                color: "blue"
                anchors.horizontalCenter: rectaction0101.horizontalCenter;
                anchors.verticalCenter: rectaction0101.verticalCenter;
            }
        }

                onClicked: {
                    blockclicked(currentlevel.text,1);
                }
            }
        }
        //rec02
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level2
            //visible: GEN.truefalsert(level1)
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0102
                Image{
                    anchors.fill: parent;
                    source:"back.png";
                }

                Text {
                    text: "Adjectives 1"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0102.horizontalCenter;
                    anchors.verticalCenter: rectaction0102.verticalCenter;
                }
            }
                onClicked: {
                    blockclicked(currentlevel.text,2);
                }
            }
        }
        //rec03
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level3
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0103
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Animal 1"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0103.horizontalCenter;
                    anchors.verticalCenter: rectaction0103.verticalCenter;
                }
            }
                onClicked: {
                    blockclicked(currentlevel.text,3);
                }
            }
        }
        //rec04
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
        id : level4
        width: Screen.desktopAvailableWidth/4;
        height: Screen.desktopAvailableWidth/4;
            //visible: GEN.truefalsert(level1)
        Rectangle {
            //opacity: 0.8
            opacity: 0.5;radius: 20;
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
            id:rectaction0104
            Image{
                anchors.fill: parent;
                source:"back.png";

            }

            Text {
                text: "Fruits 1"
                font.family: "Helvetica"
                font.pointSize: 14
                color: "blue"
                anchors.horizontalCenter: rectaction0104.horizontalCenter;
                anchors.verticalCenter: rectaction0104.verticalCenter;
            }
        }
                onClicked: {
                    blockclicked(currentlevel.text,4);
                }
            }
        }
        //rec05
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level5
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0105
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Objects 1"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0105.horizontalCenter;
                    anchors.verticalCenter: rectaction0105.verticalCenter;
                }
            }
                onClicked: {
                    blockclicked(currentlevel.text,5);
                }
            }
        }

        //rec06
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level6
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0106
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Action 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0106.horizontalCenter;
                    anchors.verticalCenter: rectaction0106.verticalCenter;
                }
            }
            onClicked: {
                    blockclicked(currentlevel.text,6);
                }
            }
        }
        //rec07
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level7
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0107
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Adjectives 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0107.horizontalCenter;
                    anchors.verticalCenter: rectaction0107.verticalCenter;
                }
            }
            onClicked: {
                    blockclicked(currentlevel.text,7);
                }
            }
        }

        //rec08
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level8
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0108
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Animal 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0108.horizontalCenter;
                    anchors.verticalCenter: rectaction0108.verticalCenter;
                }
            }
                onClicked: {
                    blockclicked(currentlevel.text,8);
                }
            }
        }
        //rec09
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level9
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0109
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Animal 3"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0109.horizontalCenter;
                    anchors.verticalCenter: rectaction0109.verticalCenter;
                }
            }
            onClicked: {
                    blockclicked(currentlevel.text,9);
                }
            }
        }
        //rec10
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level10
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0110
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Baby Room 1"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0110.horizontalCenter;
                    anchors.verticalCenter: rectaction0110.verticalCenter;
                }
            }

            onClicked: {
                    blockclicked(currentlevel.text,10);
                }
            }
        }
        //rec11
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level11
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0111
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Clothing"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0111.horizontalCenter;
                    anchors.verticalCenter: rectaction0111.verticalCenter;
                }
            }
                onClicked: {
                    blockclicked(currentlevel.text,11);
                }
            }
        }
        //rec12
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level12
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0112
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Food 1"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0112.horizontalCenter;
                    anchors.verticalCenter: rectaction0112.verticalCenter;
                }
            }

            onClicked: {
                    blockclicked(currentlevel.text,12);
                }
            }
        }
        //rec13
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level13
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0113
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Occupations"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0113.horizontalCenter;
                    anchors.verticalCenter: rectaction0113.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,13);
                }
            }
        }
        //rec14
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level14
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0114
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Vegetables 1"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0114.horizontalCenter;
                    anchors.verticalCenter: rectaction0114.verticalCenter;
                }
            }

            onClicked: {
                    blockclicked(currentlevel.text,14);
                }
            }
        }
        //rec15
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level15
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0115
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Action 3"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0115.horizontalCenter;
                    anchors.verticalCenter: rectaction0115.verticalCenter;
                }
            }

            onClicked: {
                    blockclicked(currentlevel.text,15);
                }
            }
        }
        //rec16
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level16
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0116
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Adjectives 3"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0116.horizontalCenter;
                    anchors.verticalCenter: rectaction0116.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,16);
                }
            }
        }
        //rec17
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level17
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0117
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Animal 4"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0117.horizontalCenter;
                    anchors.verticalCenter: rectaction0117.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,17);
                }
            }
        }
        //rec18
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level18
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0118
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Bath Room"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0118.horizontalCenter;
                    anchors.verticalCenter: rectaction0118.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,18);
                }
            }
        }
        //rec19
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level19
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0119
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Bed Room"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0119.horizontalCenter;
                    anchors.verticalCenter: rectaction0119.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,19);
                }
            }
        }
        //rec20
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level20
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0120
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Animal 5"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0120.horizontalCenter;
                    anchors.verticalCenter: rectaction0120.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,20);
                }
            }
        }
        //rec21
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level21
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0121
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Classroom"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0121.horizontalCenter;
                    anchors.verticalCenter: rectaction0121.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,21);
                }
            }
        }
        //rec22
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level22
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0122
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Clothing 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0122.horizontalCenter;
                    anchors.verticalCenter: rectaction0122.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,22);
                }
            }
        }
        //rec23
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level23
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0123
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Dinning Room"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0123.horizontalCenter;
                    anchors.verticalCenter: rectaction0123.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,23);
                }
            }
        }
        //rec24
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level24
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0124
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Electric"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0124.horizontalCenter;
                    anchors.verticalCenter: rectaction0124.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,24);
                }
            }
        }
        //rec25
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level25
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0125
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Farming"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0125.horizontalCenter;
                    anchors.verticalCenter: rectaction0125.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,25);
                }
            }
        }
        //rec26
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level26
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0126
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Food 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0126.horizontalCenter;
                    anchors.verticalCenter: rectaction0126.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,26);
                }
            }
        }
        //rec27
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level27
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0127
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Fruits 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0127.horizontalCenter;
                    anchors.verticalCenter: rectaction0127.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,27);
                }
            }
        }
        //rec28
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level28
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0128
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Objects 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0128.horizontalCenter;
                    anchors.verticalCenter: rectaction0128.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,28);
                }
            }
        }
        //rec29
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level29
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0129
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Occupations 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0129.horizontalCenter;
                    anchors.verticalCenter: rectaction0129.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,29);
                }
            }
        }
        //rec30
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level30
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0130
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Farming 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0130.horizontalCenter;
                    anchors.verticalCenter: rectaction0130.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,30);
                }
            }
        }
        //rec31
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level31
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0131
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Park"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0131.horizontalCenter;
                    anchors.verticalCenter: rectaction0131.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,31);
                }
            }
        }
        //rec32
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level32
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0132
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Sports"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0132.horizontalCenter;
                    anchors.verticalCenter: rectaction0132.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,32);
                }
            }
        }
        //rec33
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level33
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0133
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Transport"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0133.horizontalCenter;
                    anchors.verticalCenter: rectaction0133.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,33);
                }
            }
        }
        //rec34
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level34
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0134
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Occupations 3"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0134.horizontalCenter;
                    anchors.verticalCenter: rectaction0134.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,34);
                }
            }
        }
        //rec35
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level35
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0135
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Vegetables 2"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0135.horizontalCenter;
                    anchors.verticalCenter: rectaction0135.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,35);
                }
            }
        }
        //rec36
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level36
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0136
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Stuff"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0136.horizontalCenter;
                    anchors.verticalCenter: rectaction0136.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,36);
                }
            }
        }
        //rec37
        Rectangle{
                width: Screen.desktopAvailableWidth/4 + 10; height: Screen.desktopAvailableWidth/4 + 10;
        MouseArea {
        anchors.centerIn: parent;
            id : level37
            width: Screen.desktopAvailableWidth/4;
            height: Screen.desktopAvailableWidth/4;
                //visible: GEN.truefalsert(level1)
            Rectangle {
                //opacity: 0.8
                opacity: 0.5;radius: 20;
                width: Screen.desktopAvailableWidth/4;
                height: Screen.desktopAvailableWidth/4;
                id:rectaction0137
                Image{
                    anchors.fill: parent;
                    source:"back.png";

                }

                Text {
                    text: "Science lab"
                    font.family: "Helvetica"
                    font.pointSize: 14
                    color: "blue"
                    anchors.horizontalCenter: rectaction0137.horizontalCenter;
                    anchors.verticalCenter: rectaction0137.verticalCenter;
                }
            }

                onClicked: {
                    blockclicked(currentlevel.text,37);
                }
            }
        }

    }
    }
function restartCounter()  {

        startTime = 0;

    }

function timeChanged()  {
    if(startTime==0)
    {
        startTime = new Date().getTime(); //returns the number of milliseconds since the epoch (1970-01-01T00:00:00Z);
    }
    var currentTime = new Date().getTime();
    secondsElapsed = (currentTime-startTime)/1000;
    //console.log(secondsElapsed);
    if(secondsElapsed >= 90){
        msgstartagain.visible = true;
        startTime = 0;
        elapsedTimer.running = false;
        countscreen.text = "1";
        myscore = 3;
        progresswidth.text = "0";
        stackView.push({ item: Qt.resolvedUrl("maine.qml"), destroyOnPop:false })
    }
}


Component.onCompleted: {
    if(parseInt(currentlevel.text) <= parseInt(currentlevelcp.text)){
        currentlevel.text = (parseInt(currentlevelcp.text) + 1).toString();
    }

    finishsuccess.play();
    playbgMusic.stop();
    msgfinish.visible = true;
    //currentlevel.text = (parseInt(currentlevel.text) + 1).toString();
    live3all.visible = false;
    myscore = 3;

    countscreen.text = "1";

    actionarr = actionarrdef;
    startTime = 0;
    elapsedTimer.running = false;

    counterTextbg.visible = false;
    progresswidth.text = "0";
    if(parseInt(currentlevel.text) >= 1){
        msgfinish.visible = true;

        action010101img.source = "media01/01/looking.jpg";
    }

}

}
