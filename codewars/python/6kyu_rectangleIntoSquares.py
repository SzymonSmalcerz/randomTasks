'''


	The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

	https://www.codewars.com/kata/55466989aeecab5aac00003e/train/python for image

	Can you translate this drawing into an algorithm?

	You will be given two dimensions

	a positive integer length (parameter named lng)
	a positive integer width (parameter named wdth)
	You will return an array with the size of each of the squares.

	Shell bash returns a string.

	  sqInRect(5, 3) should return [3, 2, 1, 1]
	  sqInRect(3, 5) should return [3, 2, 1, 1]
	#Note: lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. See kata, Square into Squares. Protect trees!.

	When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing. Return {} with C++. Return the string "nil" with Bash.

	In that case the returned structure of C will have its sz component equal to 0. (See the "Solution" and "Examples" tabs)

	  sqInRect(5, 5) should return None


'''

def sqInRect(lng, wdth):
    if lng == wdth:
        return None
    diffrence = 0
    arr = [lng,wdth]
    arr.sort()
    res = []
    print(arr)
    while(arr[0] != arr[1]):
        arr.sort()
        res.append(arr[0])
        diffrence = arr[1] - arr[0]
        print(diffrence)
        arr[1] = (diffrence)
    
    res.append(arr[0])
    return res
