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
export function stampaFormattata(a){
    a.forEach(element => {
        console.log("Nome:"+element.nome);
        console.log("Username:"+element.username);
        console.log("Punti Fedeltà rimaenti:"+element.puntiFedelta);
        element.LibriAquistati.forEach(x => {
            console.log("Titolo:"+x.nome);
            console.log("Genere:"+x.genere);
            console.log("Prezzo:"+x.prezzo);
            
        }) 
        console.log("");     
    });
}