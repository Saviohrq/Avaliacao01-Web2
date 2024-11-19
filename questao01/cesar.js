let alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function criptografia(mensagem, chave, converter){
    let m = mensagem
    let mConvertida = []

    if(converter == c){

        for(let i = 0; i <= m.length; i++){
            if(m[i] != " "){
                mConvertida[i] = cifraLetra(m[i], chave) 
            }
            else{
                mConvertida[i] = " "
            }
        }
    
    }
    else if(converter == d){

        for(let i = 0; i <= m.length; i++){
            if(m[i] != " "){
                mConvertida[i] = decifraLetra(m[i], chave) 
            }
            else{
                mConvertida[i] = " "
            }
        }
    
    }
    
}

function cifraLetra(letra, chave){
    for(let i; i <= alfa.length; i++){
        if(letra == alfa[i] && (i + chave) <= 25){
            return alfa[i + chave]
        }
        else if(letra == alfa[i] && (i + chave) > 25)
            return alfa[(i + chave) - 26]
    }
}

function decifraLetra(letra, chave){
    for(let i; i <= alfa.length; i++){
        if(letra == alfa[i] && (i - chave) >= 0){
            return alfa[i - chave]
        }
        else if(letra == alfa[i] && (i - chave) < 0){
            return alfa[26 - (i - chave)]
        }
    }
}

export default {criptografia, cifraLetra, decifraLetra}