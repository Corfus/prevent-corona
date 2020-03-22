import {Pipe, PipeTransform} from '@angular/core';
import {GameActionEntity, generateEnactPolicyName, generateRevokePolicyName} from '../../gamelogic/GameAction';


const ACTION_ID_TO_TEXT: { [key: string]: string } = {
  FakeNewsMessage: 'Fake-News werden verbreitet – Warnung! Im Netz gehen Fake News umher!',
  HygieneHandWashAdvice: 'Hände waschen – Appell an alle Bürger: Bitte Hände oft und gründlich waschen.',
  MouthguardAdvide: 'Mundschutz tragen – Wer sich draußen aufhält, sollte bitte einen Mundschutz tragen, um sich und andere zu schützen!',
  KeepDistanceAdvice: 'Abstand halten – Wichtig! Haltet mindestens 1,5m Abstand zu anderen Personen! Noch besser: Nicht rausgehen :)',
  LowDeathMessage: 'Geringe Todeszahlen – Deutschland hat immer noch niedrige Todeszahlen! Danke an alle, die sich an die Regelungen halten!',
  InformAboutPoliticanDeath: 'Politiker gestorben – Immer mehr Menschen sterben aufgrund des Viruses… So heute auch leider unser Bürgermeister aus Ferlensgart.',
  WirVsVirusHackathon: 'WirVsCorona Hackathon findet statt – Der WirvsVirus-Hackathon findet statt. 43000 nehmen teil und bleiben zuhause.',
  CoronaParty: 'Corona Party – Eilmeldung! Eine Corona-Party hat stattgefunden und nun gibt es viele Neuinfizierte! ',
  IllegalBorderCrossingEvent: 'Illegale Grenzüberschreitungen – Achtung! Illegale Grenzübergänge sind passiert! Bitte alle zuhause bleiben!',
  ScientistsDie: 'Wissenschaftler sterben – Danke für euren Einsatz! Leider sind schon mehrere Forscher am Virus gestorben… ',
  StockMarketCrash: 'Aktienmarkt bricht ein – Neuigkeiten aus dem Aktienmarkt: Dieser ist heute eingebrochen.',
  StockMarketCrashHard: 'Aktienmarkt bricht STARK ein – Börse aktuell: Der DAX bricht stark ein!',
  StockMarketRecovery: 'Aktienmarkt erholt sich – Erfreuliche News: Der Aktienmarkt erholt sich wieder!',
  ChinaSackOfRise: 'China: Neuartiger Virus entdeckt.',
};

@Pipe({
  name: 'actionDetails'
})
export class ActionDetailsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return ACTION_ID_TO_TEXT[value];
  }

}


