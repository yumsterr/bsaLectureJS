function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Fighter {
    constructor(name, power = 20, health = 200) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage, enemy) {
        this.health -= damage;
        console.log(`${enemy.name} hits ${this.name} with ${damage} points of damage. His health after hit = ${this.health}`);

    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage, this);
        return enemy.health;
    }
}
;

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        let newPoint = point * 2;
        super.hit(enemy, newPoint);
        return enemy.health;
    }
}

let fight = (improvedFighter,fighter, ...point) => {
    let round = 0;
    let fighting = true;
    let enemyHealth, currentFighter;
    while (fighting === true) {
        let pointID = getRandomInt(0, point.length);
        let currentPoint = point[pointID];
        if (round % 2 === 0) {
            currentFighter = fighter;
            enemyHealth = fighter.hit(improvedFighter, currentPoint);
        } else {
            currentFighter = improvedFighter;
            enemyHealth = improvedFighter.doubleHit(fighter, currentPoint);
        }
        if (enemyHealth <= 0) {
            let winner = currentFighter;
            console.log(`${currentFighter.name} won at ${round} round`);
            fighting = false;
            return true;
        }
        round++;
    }
    return currentFighter;
};

let marvelTeam = ['Captain America', 'Irpn Man', 'Thor', 'Hulk', 'Spider-Man'];
let dcTeam = ['Superman', 'Batman', 'Wonder Woman', 'Green Lantern', 'Nightwing', 'Flash'];

let heroID = getRandomInt(0, marvelTeam.length);
let marvelHero = marvelTeam[heroID];

heroID = getRandomInt(0, dcTeam.length);
let dcHero = dcTeam[heroID];

let marvelFighter = new ImprovedFighter(marvelHero, 15, 750);
let dcFighter = new Fighter(dcHero, 20, 500);

let winner = fight(marvelFighter, dcFighter, 2, 1, 4, 2, 2, 1);