0x04. UTF-8 Validation
Algorithm
Python


Resources
Read or watch:

UTF-8
Characters, Symbols, and the Unicode Miracle


Requirements
General
Allowed editors: vi, vim, emacs
All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)
All your files should end with a new line
The first line of all your files should be exactly #!/usr/bin/python3
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the PEP 8 style (version 1.7.x)
All your files must be executable



Example 0-main.py:
#!/usr/bin/python3
"""
Main file for testing
"""

validUTF8 = __import__('0-validate_utf8').validUTF8

data = [65]
print(validUTF8(data))

data = [80, 121, 116, 104, 111, 110, 32, 105, 115, 32, 99, 111, 111, 108, 33]
print(validUTF8(data))

data = [229, 65, 127, 256]
print(validUTF8(data))


This code appears to be a Python script that tests a function called validUTF8 from a module named 0-validate_utf8. The purpose of this function seems to be to validate whether a given list of integers represents valid UTF-8 characters or not. UTF-8 is a character encoding standard commonly used to represent text in computers and communication systems.


The shebang #!/usr/bin/python3 indicates that the script should be run using Python 3.

The docstring """Main file for testing""" provides a brief description of the script's purpose.

The line validUTF8 = __import__('0-validate_utf8').validUTF8 imports the validUTF8 function from the module 0-validate_utf8 (presumably located in the same directory as this script).

Three different test cases are created using the variable data, each containing a list of integers:

a. data = [65] contains a single integer representing the UTF-8 code for the letter 'A'.
b. data = [80, 121, 116, 104, 111, 110, 32, 105, 115, 32, 99, 111, 111, 108, 33] contains a sequence of UTF-8 codes representing the string "Python is cool!".
c. data = [229, 65, 127, 256] contains a mix of valid and invalid UTF-8 codes.

The validUTF8 function is then called with each data test case and the results are printed to the console.

Without the implementation of the validUTF8 function from the 0-validate_utf8 module, we cannot determine the exact behavior of the function. However, based on the context, it likely validates the given input to check if it represents a valid UTF-8 character or sequence of characters. The expected output of the script will depend on the implementation of the validUTF8 function and the contents of the data test cases.



For example 0-validate_utf8.py
#!/usr/bin/python3
"""
0x09 UTF-8 Validation
"""


def validUTF8(data):
    """
    check valid UTF-8
    """

    c = 0
    for n in data:
        m = 1 << 7
        if not c:
            while n & m:
                c = c + 1
                m >>= 1
            if c > 4:
                return False
        elif n >> 6 != 2:
            return False
        if c:
            c = c - 1
    return c == 0


This Python code defines a function called validUTF8, which is used to check if a given list of integers represents a valid UTF-8 encoding. UTF-8 is a variable-length character encoding capable of representing all possible Unicode characters.


The function validUTF8(data) takes a list data as input, where each element of the list is an integer representing a byte in UTF-8 encoding.

The variable c is used to keep track of the number of continuation bytes expected for a given UTF-8 character. In UTF-8, multi-byte characters have a specific format where the first byte indicates the number of continuation bytes following it.

The function iterates through each integer n in the input data.

The variable m is initialized to 128 (1 << 7), representing the leftmost bit (most significant bit) in a byte.

If c is 0, it means we are at the beginning of a new character. The loop is used to count the number of leading ones in the byte n. The number of leading ones indicates the number of bytes used to represent the character. The loop shifts the bit m to the right while checking if the leftmost bit in n is 1. If it is 1, it means there is a continuation byte, and c is incremented accordingly. If there are more than 4 leading ones (more than 4 continuation bytes), the function returns False since UTF-8 supports characters with at most 4 bytes.

If c is non-zero (indicating that the current byte is a continuation byte), it checks if the 2 most significant bits of n are "10". This check ensures that the byte is a valid continuation byte. If the check fails, the function returns False.

After processing the current byte, the function decrements c by 1, as the continuation bytes are consumed.

The function returns True if all the bytes are successfully processed and c becomes 0 at the end, indicating that all characters have valid continuation bytes. Otherwise, it returns False.

This code checks whether the given list of integers represents a valid UTF-8 encoding by verifying the format of the bytes according to the UTF-8 encoding rules.



