# Tests und Reproduzierbarkeit — Hi Sharks

## Voraussetzungen
Node 22+; moderner Browser.

## Befehle
```text
npm test
```

Start/Build: npm start; lokale URL öffnen; private Entwurfswerkstatt bleibt separat.

## Tatsächlicher Befund vom 02.11.2026
4 Modelltests bestanden; vorliegende Browserbelege decken responsive/offline Kampagne und sicheren Entwurfsexport ab. Kein echter Zahlungs- oder Store-Test.

Bei fehlenden Paketen/Hardware/Betriebssystemen ist das Ergebnis „nicht ausgeführt“, kein Pass. Plattformnachweise aus älteren Detailberichten gelten nur für die dort genannten Versionen. Android-Automatisierung ausschließlich mit expliziter emulator-Seriennummer und bestätigtem ro.kernel.qemu=1. Physische Geräte, persönliche Medien und Produktionskonten sind keine Testfixtures.

## Vor Merge
`git diff --check` ausführen; relevante Funktionstests wiederholen, wenn Codeänderungen ihren Befund entwerten. Speicherdaten/alte Versionen erhalten. Fehlende externe Abnahmen in HANDOFF.md benennen.
