new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100, // a vida do jogador
        monsterLife: 100, // a vida do monster
        logs: []
    },
    computed: {
        //se a vida do jogador é 0 ou a vida do monstro é 0 o resultado estará disponivel
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0 // a função só irá funcionar se o retorno for true
        }
    },
    methods: {
        startGame() { // INICIANDO O GAME
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) { // INCIANDO OS ATAQUES
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player') // 5 o min, 10 o max
            if(this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster') // 7 o min, 12 o max
            }
        },
        hurt(prop, min, max, especial, source, target, cls) { // HURT = MACHUCAR
            const plus = especial ? 5 : 0 // o ataque especial está entre o 5 e 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) { // INICIANDO A SAUDE
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100) // sempre optando pelo menor numero 
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
        },
        getRandom(min, max) { // responsavel por calcular um valor randomico, o valor minimo e valor maximo
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls }) //adiciona um ou mais elementos no início 
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})