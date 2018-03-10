'''


	Welcome.

	In this kata you are required to, given a string, replace every letter with its position in the alphabet.

	If anything in the text isn't a letter, ignore it and don't return it.

	a being 1, b being 2, etc.

	As an example:

	alphabet_position("The sunset sets at twelve o' clock.")
	Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.



'''



def alphabet_position(text):
    return " ".join(filter(lambda x : int(x) > 0,map(lambda letter : str(ord(letter) - 96),text.replace(" ","").lower())))


# and then i met isalpha method, so better solution:

def alphabet_position(text):
    return ' '.join(str(ord(c) - 96) for c in text.lower() if c.isalpha())
