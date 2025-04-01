export function CompraLibro(n,g,p){
    return {nome:n,genere:g,prezzo:p};
}
export function CreaCliente(nome,p)
{
    return {nome:nome,username:getusername(nome),puntiFedelta:p,LibriAquistati:[]};
}
export function getusername(name){
    return name.replace(/ /g,"_").toLowerCase();
}