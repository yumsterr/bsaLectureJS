//todo use  block scoping (let)
//todo use spread / rest operator    rest done
//todo use default settings
//todo use string interpolation
//todo use arrow functions
//todo use classes + inheritance + super    done


class Fighter {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
        return enemy.health;
    }
};

class ImprovedFighter extends Fighter {
    hit(enemy, point) {
        let newPoint = point * 2;
        super.hit(enemy, newPoint);
    }
}

function fight(fighter, improvedFighter, ...point) {
    console.log(fighter);
    console.log(improvedFighter);
    console.log(point);
    let round = 0;
    let fighting = true;
    let pointsCount = point.length;
    let enemyHealth, currentFighter;
    while (fighting === true) {
        let currentPoint = point[round % pointsCount];
        if (round % 2 === 0) {
            currentFighter = fighter;
            console.log(fighter);
            enemyHealth = fighter.hit(improvedFighter, currentPoint);
            console.log(improvedFighter);
        } else {
            console.log(improvedFighter.name);
            currentFighter = improvedFighter;
            enemyHealth = improvedFighter.hit(fighter, currentPoint);
        }
        if (enemyHealth <= 0) {
            console.log(currentFighter.name + " wins at " + round + " round");
            fighting = false;
        }

        round++;
    }
    return true;
}

let fighter1 = new Fighter('Captain America', 1, 90);
let fighter2 = new ImprovedFighter('Iron Man', 2, 70);
fight(fighter1, fighter2, 25, 13, 45, 23);