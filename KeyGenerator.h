#ifndef KEYGENERATOR_H
#define KEYGENERATOR_H

#include <QObject>
#include <QString>
#include <QStringList>

// Simple QML object to generate SSH key pairs by calling ssh-keygen.
class IQtAdMobBanner;
class IQtAdMobInterstitial;

class KeyGenerator : public QObject
{
    Q_OBJECT
    Q_PROPERTY(QString type READ type WRITE setType NOTIFY typeChanged)

public:
    KeyGenerator();
    ~KeyGenerator();

    QString type();
    void setType(const QString &t);

signals:
    void typeChanged();

private:
    QString _type;
    IQtAdMobBanner* m_Banner;
    IQtAdMobInterstitial* m_Interstitial;

};

#endif
