'''

	If You Complete Minimize _sum_Of_array !!! You Know By 
	Now How To Manipulate Array Effectively ,

	If Not You Can Take a Look To Get How Things Work :

	Minimize_Sum_Of_array

	Well , It's Time To Expand Our Series For More :

	We are Given an array [] of n integers,

	The Task Is To Find a Subsequence Of Size k Whose `Product Of Maxima` 
	Among All Possible k Sized Subsequences Of Given Array.
	Notes :
	1- Array Size is at least 3 .

	2- The Vector's Numbers could be a mixture of Positives and Negatives also Zeros .

	3- Repeatition of Numbers in the Array Could Occur .

	If Any Of The Previous Points (Notes) Is Not Clear, 
	Pay Attention To The Examples Clarify Everything .
	Input >> Output Examples ::
	1- maxProduct ({4,3,5}, 2)  return 20

	Explanation :: 

	since the size (k) equal 2 , then it's 5*4 = 20 .

	2- maxProduct ({8,10,9,7}, 3)  return 720

	Explanation :: 

	since the size (k) equal 3 , then it's 8*9*10 = 720 .

	3- maxProduct ({10,8,3,2,1,4,10}, 5)  return 9600

	Explanation :: 

	since the size (k) equal 5 , then it's 10*10*8*4*3 = 9600 .

	4- maxProduct ({-4,-27,-15,-6,-1}, 2)  return 4

	Explanation :: 

	since the size (k) equal 2 , then it's -4*-1 = 4 .

	5- maxProduct ({10,3,-1,-27} , 3)  return -30

	Explanation :: 

	since the size (k) equal 3 , then it's 10*3*-1 = -30 .


'''


def max_product(lst, n_largest_elements):
    lst.sort(reverse = True);
    res = 1;
    for i in range(0,n_largest_elements):
        res *= lst[i];
    return res
