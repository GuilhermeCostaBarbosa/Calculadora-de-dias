const btn = document.getElementById('btn')
let startDate = document.getElementById('startDate')
let finalDate = document.getElementById('finalDate')

function calcularDias(start, final){
    let diferenca = new Date(final) - new Date(start)
    let showResul = document.getElementById('result')
    if (startDate.value && finalDate.value){
        const milis = 1000 * 60 * 60 * 24
        let days = diferenca / milis

        if (days > 0){
            showResul.textContent = days === 1 ? `${days} dia` : `${days} dias`
        }else{
            showResul.innerHTML = `
                <p>
                    Data final deve vir depois da data inicial.
                </p>
            `
        }
    }else{
        showResul.innerHTML = `
            <p>
               Favor, informe as duas datas.
            </p>
        `
    }
}

btn.addEventListener('click', () => {calcularDias(startDate.value, finalDate.value)})