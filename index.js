// # 3️⃣ Escrevendo as classes de um Jogo

class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
    atacar() {
        let ataque

        if (this.tipoHeroi === "Mago") {
            ataque = "magia"
        } else if (this.tipoHeroi === "Guerreiro") {
            ataque = "espada"
        } else if (this.tipoHeroi === "Monge") {
            ataque = "artes marciais"
        } else {
            ataque = "shuriken"
        }


        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
    }
}

const herois = [
    new Heroi("Lucas", 20, "Guerreiro"),
    new Heroi("Marcos", 30, "Mago"),
    new Heroi("Luana", 22, "Monge"),
    new Heroi("Beatriz", 28, "Ninja")
]

herois.forEach(heroi => heroi.atacar())