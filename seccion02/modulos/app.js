"use strict";
/*
import { Xmen } from "./clases/xmen.class";
import { Villano } from "./clases/villano.class";
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./clases/index");
let wolverine = new index_1.Xmen("Logan", "Wolverine");
wolverine.imprimir();
let lex = new index_1.Villano("Lex Luthor", "Conquistar el mundo");
lex.imprimirPlan();
