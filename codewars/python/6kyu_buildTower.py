'''


	Build Tower
	Build Tower by the following given argument:
	number of floors (integer and always greater than 0).

	Tower block is represented as *

	Python: return a list;
	JavaScript: returns an Array;
	C#: returns a string[];
	PHP: returns an array;
	C++: returns a vector<string>;
	Haskell: returns a [String];
	Ruby: returns an Array;
	Have fun!



'''


def tower_builder(n_floors):
    res = []
    for floor in range(0,n_floors):
        temp = ""
        for space in range(0,n_floors - floor - 1):
            temp += " "
        temp += "*"
        for space in range(0,floor):
            temp += "**"
        for space in range(0,n_floors - floor - 1):
            temp += " "
        res.append(temp)
    return res
