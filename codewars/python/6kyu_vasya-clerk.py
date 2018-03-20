'''

	The new "Avengers" movie has just been released! There are a lot of people 
	at the cinema box office standing in a huge line. Each of them has a single 100, 
	50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

	Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

	Can Vasya sell a ticket to each person and give the change if he initially 
	has no money and sells the tickets strictly in the order people follow in the line?

	Return YES, if Vasya can sell a ticket to each person and give the change 
	with the bills he has at hand at that moment. Otherwise return NO.

	###Examples:

	### Python ###

	tickets([25, 25, 50]) # => YES 
	tickets([25, 100]) 
		 # => NO. Vasya will not have enough money to give change to 100 dollars

'''


def tickets(people):

    countBill25dollars = 0;
    countBill50dollars = 0;
    
    print(people)
    while len(people) > 0:
        newBill = people.pop(0);
        if newBill == 25:
            countBill25dollars += 1
        elif newBill == 50:
            countBill25dollars -= 1;
            countBill50dollars += 1;
        elif newBill == 100:
            countBill25dollars -= 1;
            if countBill50dollars > 0:
                countBill50dollars -= 1;
            else:
                countBill25dollars -= 2;
            
        if countBill25dollars < 0 or countBill50dollars < 0:
            return "NO"
        
    
    
    return "YES"

