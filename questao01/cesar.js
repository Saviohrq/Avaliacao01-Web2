function criptografia(mensagem, chave, converter){
    let m = mensagem
    let mConvertida = []
    for(let i = 0; i <= m.length; i++){
        if(m[i] != " "){
            mConvertida[i] = converter(m[i], chave) 
        }
        else{
            mConvertida[i] = " "
        }
    }

    for(let i = 0; i <= mConvertida.length; i ++){
        
    }
}

function cifraLetra(letra, chave){

}

function decifraLetra(letra, chave){

}

export default {criptografia, cifraLetra, decifraLetra}