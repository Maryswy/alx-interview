0x08. Making Change
Algorithm
Python

For example cat 0-main.py:

#!/usr/bin/python3
"""
Main file for testing
"""

makeChange = __import__('0-making_change').makeChange

print(makeChange([1, 2, 25], 37))

print(makeChange([1256, 54, 48, 16, 102], 1453))

#!/usr/bin/python3: This is called a shebang line. It indicates that the script should be run using the Python interpreter located at /usr/bin/python3.

"""Main file for testing""": This is a docstring, which provides a brief description of the script's purpose.

makeChange = __import__('0-making_change').makeChange: This line imports the makeChange function from the module named 0-making_change. The __import__ function is used here, which allows importing modules dynamically by providing their names as strings. The imported makeChange function is then assigned to the makeChange variable.

print(makeChange([1, 2, 25], 37)): This line calls the makeChange function with an input list [1, 2, 25] representing different coin denominations and an integer 37 representing the target amount to make change for. The result of the function call is printed to the console.

print(makeChange([1256, 54, 48, 16, 102], 1453)): This line is similar to the previous one but tests the makeChange function with a different set of coin denominations [1256, 54, 48, 16, 102] and a target amount of 1453.


Requirements
Allowed editors: vi, vim, emacs
All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)
All your files should end with a new line
The first line of all your files should be exactly #!/usr/bin/python3
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the PEP 8 style (version 1.7.x)
All your files must be executable

