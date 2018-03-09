'''


	In this Kata, you will be given a number and your task will be to return the nearest prime number.

	solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
	solve(125) = 127
	We'll be testing for numbers up to 10^10. 500 tests.

	More examples in test cases.

	Good luck!



'''


import math

def solve(n):
    lowerNum = n-1
    higherNum = n+1
    if isPrime(n):
        return n
    
    while True:
      if isPrime(lowerNum):
          return lowerNum
      elif isPrime(higherNum):
          return higherNum;
      lowerNum-=1;
      higherNum+=1;
    


def isPrime(num):
  for i in range(2,math.floor(math.sqrt(num))+1):
    if num%i == 0:
        return False
  return True

