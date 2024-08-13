class Cronometro{
    constructor(){
        this.hora = 0
        this.minuto = 0
        this.segundo = 0
        this.intervalo = null
    }

    iniciar(){
        setTimeout(()=> {
            this.intervalo = setInterval(()=>{
                this.segundo++
                if(this.segundo == 60){
                    this.segundo = 0
                    this.minuto++
                }
                if(this.minuto == 60){
                    this.minuto = 0
                    this.hora++
                }
                document.getElementById('cronometro').innerText = `${this.hora}:${this.minuto}:${this.segundo}`
            }, 100)
        })
    }

    pausar(){
        clearInterval(this.intervalo)
        this.intervalo = null
    }

    reiniciar(){
        this.hora = 0
        this.minuto = 0
        this.segundo = 0
        document.getElementById('cronometro').innerText = `${this.hora}:${this.minuto}:${this.segundo}`
    }
}

const cronometro = new Cronometro()

document.getElementById('iniciar').addEventListener('click', ()=>{
    cronometro.iniciar()
})

document.getElementById('pausar').addEventListener('click', ()=>{
    cronometro.pausar()
})

document.getElementById('reiniciar').addEventListener('click', ()=>{
    cronometro.reiniciar()
})