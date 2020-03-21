# GameState
- [x] ist der State vollständig?
- [x] State soll nur Infos enthalten die für die Simulation essenziell sind. (nicht z.B. Ländernamen/Hauptstadt)
- [x] Länder/Events/Actions werden über "entities" referenziert (momentan einfach ein string) (nicht Zeiger, da flexibler)
- [x] momentan keine Getter und Setter für Länder-Werte, d.h. dürfen direkt manipuliert werden

# Systeme
## Anmerkungen
- [x] Systeme dürfen gerne eigenen State haben
- [x] falls mehrere Systeme selben State benötigen/ oder State wichtig ist in den GameState packen (nach Absprache)
## generelles TODO
- [ ] Reihenfolge der Systeme?
- [ ] wie Logging von Ereignissen (für Debug und später für User info was passiert ist)? -> Logging Bibliothek
## noch benötigte Systeme (Liste unvollständig)
- [ ] "Evolution System": alle Werte anhand ihrer Änderungsrate updaten
- [ ] "Sterbe System": Infizierte sterben lassen
- [ ] "Wirtschafts System"
- [ ] "Event System": Events auf Eintrittswahrscheinlichkeit prüfen und evtl. eintreten lassen
- [ ] "Score System": Punktestand updaten
- [ ] internationale Ansteckung System
- [ ] KI System
- [ ] Game Over System

# Content
# Initial State
- [ ] Länder Startwerte
## Events
- [ ] Sind events redundant? (kann man nicht ein Wahrscheinlichkeits-zuteilung an eine Action koppeln)
- [ ] Unterklassen für häufige Event-typen? 
- [ ] dürfen Policies manipulieren
- [ ] wie Aufteilung in Dateien? (Gruppen?)
## Actions
- [ ] direkte Folgen z.B. Fernsehansprache halten, Finanzspritze versprechen
- [ ] Unterklasse für häufige Aktions-typen?
- [ ] dürfen Policies manipulieren
- [ ] wie Aufteilung in Dateien? (Gruppen?)
## Policy
- [ ] "Politiken" z.B. Ausgangssperre,Reisewarnung
- [ ] langanhaltende Folgen, evtl. wieder abschaltbar
- [ ] Spieler sieht was er bisher entschieden hat
- [ ] Unterklasse für häufige Policy Typen? (Basis-Klasse sehr allgemein)
- [ ] sollten von Aktionen/Events verändert werden
- [ ] wie Aufteilung in Dateien? (Gruppen?)

# Testing
- [ ] Logging?
- [ ] TestUI (so gebastelt wie möglich?)



