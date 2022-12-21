// callback function

function sayMyName(name, name2) {
    console.log('Antes de executar a função callback')

    name()
    name2()

    console.log('Depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('Meu primeiro argumento')
    }, 
    () => {
        console.log('Meu segundo argumento')
    }
)





//TRADUÇÃO:
//callback = chamar de volta



// OBJECT tem que está entre chaves: sayMyName({name: 'Eriton'})