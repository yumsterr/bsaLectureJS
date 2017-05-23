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
