const MAX_PROBABILITY = 100;

class Fighter {

  constructor({
    name,
    damage,
    hp,
    strength,
    agility
  }) {
    let _name = name;
    this.setName = function(name) {
      _name = name;
    };

    this.getName = function() {
      return _name;
    };

    let _damage = damage;

    this.setDamage = function(damage) {
      _damage = damage;
    };

    this.getDamage = function() {
      return _damage;
    };

    let _hp = hp;

    this.setHealth = function(hp) {
      _hp = hp;
    };

    this.getHealth = function() {
      return _hp;
    };

    let _strength = strength;

    this.setStrength = function(strength) {
      _strength = strength;
    };

    this.getStrength = function() {
      return _strength;
    };

    let _agility = agility;

    this.setAgility = function(agility) {
      _agility = agility;
    };

    this.getAgility = function() {
      return _agility;
    };

    let _wins = 0;

    this.setWins = function(wins) {
      _wins += wins;
    };

    this.getWins = function() {
      return _wins;
    };

    let _losses = 0;

    this.setLosses = function(losses) {
      _losses += losses;
    };

    this.getLosses = function() {
      return _losses;
    };
  }

  attack(classInstance) {
    const PROBABILITY = (MAX_PROBABILITY - classInstance.getStrength() + classInstance.getAgility()) / MAX_PROBABILITY;

    if (Math.random() > PROBABILITY) {
      console.log(`${this.getName()} makes ${this.getDamage()} to ${classInstance.getName()}`);
      return classInstance.dealDamage(this.getDamage());
    } else {
      return console.log(`${this.getName()} attack missed`);
    }
  }

  logCombatHistory() {
    return `Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()}`;
  }

  heal(healthPoints) {
    const total = this.getHealth() + healthPoints;

    return total > MAX_PROBABILITY ? this.setHealth(MAX_PROBABILITY) : this.setHealth(total);
  }

  dealDamage(damagePoints) {
    const total = this.getHealth() - damagePoints;

    return total < 0 ? this.setHealth(0) : this.setHealth(total);
  }

  addWin() {
    return this.setWins(1);
  }

  addLoss() {
    return this.setLosses(1);
  }
}

function battle(instance1, instance2) {
  if (instance1.getHealth() === 0) {
    console.log(`${instance1.getName()} is dead and can't fight.`);
  } else if (instance2.getHealth() === 0) {
    console.log(`${instance2.getName()} is dead and can't fight.`);
  } else {
    for (let i = 0; instance1.getHealth() > 0 && instance2.getHealth() > 0; i++) {
      if (instance1.getHealth() <= 0) {
        break;
      }

      if (instance2.getHealth() <= 0) {
        break;
      }
      instance1.attack(instance2);

      if(instance2.getHealth() > 0) {
        instance2.attack(instance1);
      }
    }
    if (instance1.getHealth() === 0) {
      instance1.addLoss();
      instance2.addWin();
      console.log(`${instance2.getName()} has won!`);
    } else {
      instance2.addLoss();
      instance1.addWin();
      console.log(`${instance1.getName()} has won!`);
    }
  }
}

const fighter1 = new Fighter({
  name: 'Maximus',
  damage: 20,
  hp: 100,
  strength: 20,
  agility: 15
});
const fighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  hp: 90,
  strength: 25,
  agility: 20
});
