'''


	Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

	domain_name("http://github.com/carbonfive/raygun") == "github" 
	domain_name("http://www.zombie-bites.com") == "zombie-bites"
	domain_name("https://www.cnet.com") == "cnet"



'''

import re 
def domain_name(url):
    if re.search( r'//', url):
        url = "".join(url.split("//")[1::])
    url = url.split(".")
    for index in range(1,len(url)):
        if url[index - 1] == "www":
            return url[index]
    return url[0]
