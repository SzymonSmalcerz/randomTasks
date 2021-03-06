'''
	Create a function that returns the name of the winner in a fight between two fighters.

	Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

	Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

	Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

	##Example:

	  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"

	  // Python
	  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

	  Lew attacks Harry; Harry now has 3 health.
	  Harry attacks Lew; Lew now has 6 health.
	  Lew attacks Harry; Harry now has 1 health.
	  Harry attacks Lew; Lew now has 2 health.
	  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
	####Technical note for Clojure programmers: The second fighter argument (f2) always attacks first.

	Javascript
	function Fighter(name, health, damagePerAttack) {
		this.name = name;
		this.health = health;
		this.damagePerAttack = damagePerAttack;
		this.toString = function() { return this.name; }
	}
	Python
	class Fighter(object):
	    def __init__(self, name, health, damage_per_attack):
		self.name = name
		self.health = health
		self.damage_per_attack = damage_per_attack
'''


def declare_winner(fighter1, fighter2, first_attacker):
    if first_attacker == fighter1.name:
        myList = [fighter1,fighter2]
    else :
        myList = [fighter2,fighter1]
    while True :
        if myList[0].health <=0:
            return myList[1].name
        myList[1].health -= myList[0].damage_per_attack
        myList = myList[::-1]
    
