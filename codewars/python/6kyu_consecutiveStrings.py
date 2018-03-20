'''


	You are given an array strarr of strings and an integer k. Your task 
	is to return the first longest string consisting of k consecutive strings taken in the array.

	#Example: 
	longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

	n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


'''


from functools import reduce


def longest_consec(strarr, k):
    
    leftPointer = 0
    rightPointer = k-1;
    if strarr == [] or k <= 0 or rightPointer >= len(strarr):
        return ""
    maxLen = 0;
    result = []
    while rightPointer < len(strarr):
        if getSumOfLenghts(strarr,leftPointer,rightPointer+1) > maxLen:
            result = strarr[leftPointer:rightPointer+1]
            maxLen = getSumOfLenghts(strarr,leftPointer,rightPointer+1)
        leftPointer += 1;
        rightPointer += 1;
            
    return reduce(lambda x,y : x+y, result);


def getSumOfLenghts(myList,start,end):
    return reduce(lambda x,y : x + y,map(lambda x : len(x), myList[start:end]))
