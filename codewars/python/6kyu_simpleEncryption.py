'''

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

def encrypt(text, n)
def decrypt(encrypted_text, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

'''

import math

def decrypt(encrypted_text, n):
    
    if encrypted_text == "" or encrypted_text == None or n <= 0:
        return encrypted_text
    half = math.ceil(len(encrypted_text)/2)
    stripped = False
    if half != len(encrypted_text)/2:
        encrypted_text =encrypted_text[:half-1] + " " + encrypted_text[half-1:]
        stripped = True
    newArr = list(zip(encrypted_text[half:],encrypted_text[:half]))
    
    return decrypt("".join([a+b for a,b in newArr]).rstrip(),n-1) if stripped else decrypt("".join([a+b for a,b in newArr]),n-1)

def encrypt(text, n):
    if text == "" or text == None or n <= 0:
        return text
    return encrypt(text[1::2] + text[::2], n-1)

