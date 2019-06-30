import { Title } from '@angular/platform-browser';
import {Game} from './Game';


export interface Item {
  gameid?: number,
  id?: number,
  quantity?: number,
  gametitle?: string,
  price?: number;
};
