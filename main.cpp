#include <QtGui/QGuiApplication>
#include <QApplication>
#include <QObject>
#include <QQmlComponent>
#include <QQmlEngine>
#include <QQuickWindow>
#include <QSurfaceFormat>
#include "KeyGenerator.h"
#include <QGuiApplication>
#include <QQmlApplicationEngine>


int main(int argc, char *argv[])
{
    qmlRegisterType<KeyGenerator>("com.ics.demo", 1, 0, "KeyGenerator");
    QGuiApplication app(argc, argv);
    QQmlApplicationEngine engine;

        //engine.load(QLatin1String("qml/main.qml"));
        engine.load(QUrl(QLatin1String("assets:/qml/main.qml")));


    return app.exec();
}
