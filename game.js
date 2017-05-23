//todo use  block scoping (let)
//todo use spread / rest operator
//todo use default settings
//todo use string interpolation
//todo use arrow functions
//todo use classes + inheritance + super


class Fighter{
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage){
        this.health -= damage;
    }

    hit(enemy, point){
        enemy.setDamage(damage);
    }
};


function fight(fighter, improvedFighter, point){

}
