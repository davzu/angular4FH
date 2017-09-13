/*
import { Xmen } from "./clases/xmen.class";
import { Villano } from "./clases/villano.class";
*/

import { Xmen, Villano } from "./clases/index";



let wolverine = new Xmen("Logan", "Wolverine");
wolverine.imprimir();

let lex = new Villano("Lex Luthor", "Conquistar el mundo");
lex.imprimirPlan();
