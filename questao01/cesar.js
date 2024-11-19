const alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function criptografia(mensagem, chave, converter){
    let mConvertida = []

    for(let i = 0; i < mensagem.length; i++){
        if(mensagem[i] !== " "){
            if(converter == "c"){
                mConvertida[i] = cifraLetra(mensagem[i], chave)
            }
            else if(converter == "d"){
                mConvertida[i] = decifraLetra(mensagem[i], chave)
            }
        }   
        else{
            mConvertida[i] = " "
        }
    }
    return mConvertida.join("")

}

function cifraLetra(letra, chave){
    for(let i = 0; i < alfa.length; i++){
        if(letra === alfa[i]){
            let novoI = (i + chave) % 26
            return alfa[novoI]
        }
    }
}

function decifraLetra(letra, chave){
    for(let i = 0; i < alfa.length; i++){
        if(letra === alfa[i]){
            let novoI = (i - chave + 26) % 26
            return alfa[novoI]
        }
    }
}

export default {criptografia, cifraLetra, decifraLetra}