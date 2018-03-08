'''

	Welcome. In this kata, you are asked to square every digit of a number.

	For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

	Note: The function accepts an integer and returns an integer


'''

import math
def square_digits(num):
    res = []
    while num>0:
        res.append(str((num%10)**2))
        num = math.floor(num/10)
    
    return int("".join(res[::-1]))
