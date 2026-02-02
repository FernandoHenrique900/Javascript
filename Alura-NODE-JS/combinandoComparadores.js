    //MODELOS DE OPERADORES AND, OR E NOT
    
    const idade = 15
    const maiorIdade = idade >= 18
    const possuiCNH = false

    const podeDirigir = maiorIdade && possuiCNH //operador AND &&

    console.log('Pode dirigir?', podeDirigir)

    const podeViajarSozinha = maiorIdade || possuiCNH //operador OR ||
    console.log('Pode viajar sozinho?', podeViajarSozinha)

    const PrecisaDeAcompanhante =!maiorIdade

    console.log('Precisa de acompanhante?', PrecisaDeAcompanhante)

    //AND - &&
    //OR - ||
    //NOT - !