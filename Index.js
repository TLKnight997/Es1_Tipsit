import * as U from "./Utils.js";
let Clientelibreria = [];
Clientelibreria.push(U.CreaCliente("Mario Rossi",10));
Clientelibreria.push(U.CreaCliente("Pier Francesco Bianchi",20));
Clientelibreria.push(U.CreaCliente("Antonio Verdi",50));
Clientelibreria[0].LibriAquistati.push(U.CompraLibro("Harry Potter","Fantasy",19));
U.stampaFormattata(Clientelibreria);