'''

	!!!!!! QUOTE : MUCH MUCH EASIER THAN 5kyu, SHOULD BE 6-7 kyu !!!!!!
	

	Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

	Examples
	pig_it('Pig latin is cool') # igPay atinlay siay oolcay
	pig_it('Hello world !')     # elloHay orldWay !


'''


import string

def pig_it(text):
    return " ".join(map(lambda x : x[1:] + x[0] + "ay" if x not in string.punctuation else x,text.split(" ")))
