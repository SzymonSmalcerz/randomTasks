'''
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
More examples in test cases.

Good luck!
'''


import re
from functools import reduce

def solve(eq):
    
    delimeters= list(filter(lambda x : x != "",re.split('[0-9a-zA-Z]',eq)))
    variables = re.split('[*+-/]',eq)
    res = reduce(lambda a,b : a+b,[a + b for a,b in list(zip(variables[::-1],delimeters[::-1]))])
    return res + variables[0]
