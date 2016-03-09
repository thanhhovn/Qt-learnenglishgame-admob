#-------------------------------------------------
#
# Project created by QtCreator 2015-06-10T23:28:49
#
#-------------------------------------------------

QT       += core gui qml quick widgets multimedia
TARGET = QtAdMob
VERSION = 0.0.1
TEMPLATE = app
SOURCES += \
    main.cpp \
    KeyGenerator.cpp


HEADERS  += KeyGenerator.h

QML_FILES.source = qml \

QML_FILES.target = .
DEPLOYMENTFOLDERS += QML_FILES

include(QtAdMob/QtAdMob.pri)
include(qtquick2applicationviewer/qtquick2applicationviewer.pri)
qtcAddDeployment()

QTADMOB_LIB_DIR = $$PWD/QtAdMob

android:
{
    ANDROID_PACKAGE_SOURCE_DIR = $$QTADMOB_LIB_DIR/platform/android
    android:QT += androidextras gui-private
    android:DISTFILES += \
            $$ANDROID_PACKAGE_SOURCE_DIR/AndroidManifest.xml \
            $$ANDROID_PACKAGE_SOURCE_DIR/project.properties \
            $$ANDROID_PACKAGE_SOURCE_DIR/src/org/dreamdev/QtAdMob/QtAdMobActivity.java
}

DISTFILES += \
    qml\main.qml \
    qml\maine.qml \
    qml\finish.qml \
    qml\layout2.qml \
    qml\layout4.qml \
    qml\layout6.qml \
    qml\layout9.qml \
    qml\layout12.qml \
    qml\back.png \
    qml\live.jpg \
    qml\false.jpg \
    qml\true.png \
    qml\layout204.qml \
    qml\layout404.qml \
    qml\layout604.qml \
    qml\layout904.qml \
    qml\layout1204.qml \
    qml\genrand.js \
    qml\genrand02.js \
    qml\genrand03.js \
    qml\genrand04.js \
    qml\genrand05.js \
    qml\layout205.qml \
    qml\layout405.qml \
    qml\layout605.qml \
    qml\layout905.qml \
    qml\layout1205.qml \
    qml\genrand06.js \
    qml\layout206.qml \
    qml\layout406.qml \
    qml\layout606.qml \
    qml\layout906.qml \
    qml\layout1206.qml \
    qml\genrand07.js \
    qml\genrand08.js \
    qml\genrand09.js \
    qml\genrand10.js \
    qml\layout207.qml \
    qml\layout208.qml \
    qml\layout209.qml \
    qml\layout210.qml \
    qml\layout407.qml \
    qml\layout408.qml \
    qml\layout409.qml \
    qml\layout410.qml \
    qml\layout607.qml \
    qml\layout608.qml \
    qml\layout609.qml \
    qml\layout610.qml \
    qml\layout907.qml \
    qml\layout908.qml \
    qml\layout909.qml \
    qml\layout910.qml \
    qml\layout1207.qml \
    qml\layout1208.qml \
    qml\layout1209.qml \
    qml\layout1210.qml \
    qml\genrand11.js \
    qml\genrand12.js \
    qml\genrand13.js \
    qml\genrand14.js \
    qml\genrand15.js \
    qml\genrand16.js \
    qml\genrand17.js \
    qml\genrand18.js \
    qml\genrand19.js \
    qml\genrand20.js \
    qml\genrand21.js \
    qml\genrand22.js \
    qml\genrand23.js \
    qml\genrand24.js \
    qml\genrand25.js \
    qml\genrand26.js \
    qml\genrand27.js \
    qml\genrand28.js \
    qml\genrand29.js \
    qml\genrand30.js \
    qml\genrand31.js \
    qml\genrand32.js \
    qml\genrand33.js \
    qml\genrand34.js \
    qml\genrand35.js \
    qml\genrand36.js \
    qml\genrand37.js \
    qml\layout211.qml \
    qml\layout411.qml \
    qml\layout611.qml \
    qml\layout911.qml \
    qml\layout1211.qml \
    qml\layout212.qml \
    qml\layout213.qml \
    qml\layout214.qml \
    qml\layout215.qml \
    qml\layout412.qml \
    qml\layout413.qml \
    qml\layout414.qml \
    qml\layout415.qml \
    qml\layout612.qml \
    qml\layout613.qml \
    qml\layout614.qml \
    qml\layout615.qml \
    qml\layout912.qml \
    qml\layout913.qml \
    qml\layout914.qml \
    qml\layout915.qml \
    qml\layout1212.qml \
    qml\layout1213.qml \
    qml\layout1214.qml \
    qml\layout1215.qml \
    qml\layout216.qml \
    qml\layout217.qml \
    qml\layout218.qml \
    qml\layout219.qml \
    qml\layout220.qml \
    qml\layout221.qml \
    qml\layout222.qml \
    qml\layout223.qml \
    qml\layout224.qml \
    qml\layout225.qml \
    qml\layout226.qml \
    qml\layout227.qml \
    qml\layout228.qml \
    qml\layout229.qml \
    qml\layout230.qml \
    qml\layout231.qml \
    qml\layout232.qml \
    qml\layout233.qml \
    qml\layout234.qml \
    qml\layout235.qml \
    qml\layout236.qml \
    qml\layout237.qml \
    qml\layout416.qml \
    qml\layout417.qml \
    qml\layout418.qml \
    qml\layout419.qml \
    qml\layout420.qml \
    qml\layout421.qml \
    qml\layout422.qml \
    qml\layout423.qml \
    qml\layout424.qml \
    qml\layout425.qml \
    qml\layout426.qml \
    qml\layout427.qml \
    qml\layout428.qml \
    qml\layout429.qml \
    qml\layout430.qml \
    qml\layout431.qml \
    qml\layout432.qml \
    qml\layout433.qml \
    qml\layout434.qml \
    qml\layout435.qml \
    qml\layout436.qml \
    qml\layout437.qml \
    qml\layout616.qml \
    qml\layout617.qml \
    qml\layout618.qml \
    qml\layout619.qml \
    qml\layout620.qml \
    qml\layout621.qml \
    qml\layout622.qml \
    qml\layout623.qml \
    qml\layout624.qml \
    qml\layout625.qml \
    qml\layout626.qml \
    qml\layout627.qml \
    qml\layout628.qml \
    qml\layout629.qml \
    qml\layout630.qml \
    qml\layout631.qml \
    qml\layout632.qml \
    qml\layout633.qml \
    qml\layout634.qml \
    qml\layout635.qml \
    qml\layout636.qml \
    qml\layout637.qml \
    qml\layout916.qml \
    qml\layout917.qml \
    qml\layout918.qml \
    qml\layout919.qml \
    qml\layout920.qml \
    qml\layout921.qml \
    qml\layout922.qml \
    qml\layout923.qml \
    qml\layout924.qml \
    qml\layout925.qml \
    qml\layout926.qml \
    qml\layout927.qml \
    qml\layout928.qml \
    qml\layout929.qml \
    qml\layout930.qml \
    qml\layout931.qml \
    qml\layout932.qml \
    qml\layout933.qml \
    qml\layout934.qml \
    qml\layout935.qml \
    qml\layout936.qml \
    qml\layout937.qml \
    qml\layout1216.qml \
    qml\layout1217.qml \
    qml\layout1218.qml \
    qml\layout1219.qml \
    qml\layout1220.qml \
    qml\layout1221.qml \
    qml\layout1222.qml \
    qml\layout1223.qml \
    qml\layout1224.qml \
    qml\layout1225.qml \
    qml\layout1226.qml \
    qml\layout1227.qml \
    qml\layout1228.qml \
    qml\layout1229.qml \
    qml\layout1230.qml \
    qml\layout1231.qml \
    qml\layout1232.qml \
    qml\layout1233.qml \
    qml\layout1234.qml \
    qml\layout1235.qml \
    qml\layout1236.qml \
    qml\layout1237.qml \
    qml\qmlmedia01.qrc
