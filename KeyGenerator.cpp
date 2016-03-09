#include <QFile>
#include <QProcess>
#include "KeyGenerator.h"
#include "QtAdMob/QtAdMobBanner.h"
#include "QtAdMob/QtAdMobInterstitial.h"
class IQtAdMobBanner;
class IQtAdMobInterstitial;

KeyGenerator::KeyGenerator()
    : _type("rsa")
{
}

KeyGenerator::~KeyGenerator()
{
}

QString KeyGenerator::type()
{

    return _type;
}

void KeyGenerator::setType(const QString &t)
{
    m_Banner = CreateQtAdMobBanner();
    m_Banner->Initialize();
    m_Banner->SetUnitId("ca-app-pub-3757088094987207/6833153358");
    m_Banner->SetSize(IQtAdMobBanner::Banner);
    //m_Banner->AddTestDevice("514ED2E95AD8EECE454CC5565326160A");
    m_Banner->Show();

    m_Interstitial = CreateQtAdMobInterstitial();
    m_Interstitial->LoadWithUnitId("ca-app-pub-3757088094987207/5356420150");
    //m_Interstitial->AddTestDevice("514ED2E95AD8EECE454CC5565326160A");
    m_Interstitial->Show();


}

