#include "Mainwindow.h"
#include "KeyGenerator.h"
#include <QtDeclarative/QDeclarativeView>
#include <QtDeclarative/QDeclarativeItem>
#include <QMultimedia>

QString adjustPath(const QString &path)
{
#if defined(Q_OS_IOS)
    if (!QDir::isAbsolutePath(path))
        return QString::fromLatin1("%1/%2")
                .arg(QCoreApplication::applicationDirPath(), path);
#elif defined(Q_OS_MAC)
    if (!QDir::isAbsolutePath(path))
        return QString::fromLatin1("%1/../Resources/%2")
                .arg(QCoreApplication::applicationDirPath(), path);
#elif defined(Q_OS_BLACKBERRY)
    if (!QDir::isAbsolutePath(path))
        return QString::fromLatin1("app/native/%1").arg(path);
#elif !defined(Q_OS_ANDROID)
    QString pathInInstallDir =
            QString::fromLatin1("%1/../%2").arg(QCoreApplication::applicationDirPath(), path);
    if (QFileInfo(pathInInstallDir).exists())
        return pathInInstallDir;
    pathInInstallDir =
            QString::fromLatin1("%1/%2").arg(QCoreApplication::applicationDirPath(), path);
    if (QFileInfo(pathInInstallDir).exists())
        return pathInInstallDir;
#elif defined(Q_OS_ANDROID_NO_SDK)
    return QLatin1String("/data/user/qt/") + path;
#endif
    return path;
}

MainWindow::MainWindow(QWidget *parent)
    : QDeclarativeView(parent)
{
    qmlRegisterType<KeyGenerator>("com.ics.demo", 1, 0, "KeyGenerator");
    // transparent background
    setAttribute(Qt::WA_TranslucentBackground);
    setStyleSheet("background:transparent;");

    // no window decorations
    setWindowFlags(Qt::FramelessWindowHint);

    // set QML file
    //setSource(QUrl("main.qml"));
    setSource(QUrl(QLatin1String("assets:/")+adjustPath(QStringLiteral("qml/main.qml"))));
}

MainWindow::~MainWindow()
{
}
