0x07. Rotate 2D Matrix
Algorithm
Python

Rotating a 2D matrix involves changing the orientation of its elements. For example, rotating a matrix by 90 degrees clockwise would mean that the elements of the last row become the elements of the first column, the elements of the second-to-last row become the elements of the second column, and so on. This process effectively rotates the matrix by 90 degrees in a clockwise direction.

Here's a visual representation of rotating a 3x3 matrix clockwise:

Original:
1 2 3
4 5 6
7 8 9

Rotated by 90 degrees clockwise:
7 4 1
8 5 2
9 6 3

You can rotate a 2D matrix in Python using various approaches. One common approach involves creating a new matrix to hold the rotated values. Here's a sample code snippet to rotate a matrix by 90 degrees clockwise:

def rotate_2d_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    rotated = [[0] * rows for _ in range(cols)]  # Create a new matrix to hold rotated values

    for i in range(rows):
        for j in range(cols):
            rotated[j][rows - i - 1] = matrix[i][j]  # Rotate the values

    return rotated

# Example usage
original_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

rotated_matrix = rotate_2d_matrix(original_matrix)
for row in rotated_matrix:
    print(row)


In this code, the function rotate_2d_matrix takes an input matrix and returns a new rotated matrix. The loops iterate through the original matrix, and for each element (i, j) in the original matrix, the corresponding element in the rotated matrix is (j, rows - i - 1).

this example rotates the matrix by 90 degrees clockwise. 



Example:-  cat main_0.py
#!/usr/bin/python3
"""
Test 0x07 - Rotate 2D Matrix
"""
rotate_2d_matrix = __import__('0-rotate_2d_matrix').rotate_2d_matrix

if __name__ == "__main__":
    matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]

    rotate_2d_matrix(matrix)
    print(matrix)


The above code is a script for testing a function called rotate_2d_matrix from a module named 0-rotate_2d_matrix. Let's break down the code step by step:

Shebang line (#!/usr/bin/python3): This line is used to indicate the interpreter that should be used to execute the script. In this case, it specifies that the script should be run using Python 3.

Docstring: The multi-line comment enclosed in triple quotes (""") is a docstring. It provides a description or documentation for the script/module. In this case, it states that this script is for testing the "Rotate 2D Matrix" functionality.

Importing the rotate_2d_matrix function: The line rotate_2d_matrix = __import__('0-rotate_2d_matrix').rotate_2d_matrix imports the rotate_2d_matrix function from a module named 0-rotate_2d_matrix. The __import__ function is used here to dynamically import the module by its name.

Main condition: if __name__ == "__main__": is a common Python idiom that checks if the script is being run as the main program (not imported as a module). The code block following this condition will only be executed if the script is run directly.

Matrix definition: The variable matrix is defined as a 3x3 list containing integer values.

Calling rotate_2d_matrix: The line rotate_2d_matrix(matrix) is meant to call the rotate_2d_matrix function with the matrix as an argument. This is presumably expected to modify the matrix in-place to its rotated form.

Printing the matrix: The line print(matrix) prints the matrix after the supposed rotation. However, there seems to be a misunderstanding here. The rotate_2d_matrix function you provided earlier actually returns the rotated matrix, but the code doesn't capture the returned value or update the original matrix.

It seems that the code snippet is attempting to test the rotate_2d_matrix function by applying it to the matrix and then printing the modified matrix. However, due to the lack of capturing the returned value from the function and updating the original matrix, the printed matrix will still be the original matrix and not the rotated one.

To properly test the functionality and see the rotated matrix, the code should be updated to capture the returned value from the rotate_2d_matrix function and then print that rotated matrix.



Example:- 0-rotate_2d_matrix.py
#!/usr/bin/python3
"""
Rotate 2d matrix
"""


def rotate_2d_matrix(matrix):
    """
    Given an n x n 2D matrix,
    rotate it 90 degrees clockwise.
    """
    if not matrix or len(matrix) == 0:
        return
    n = len(matrix)
    for i in range(n // 2):
        for j in range(i, n - i - 1):
            tmp = matrix[i][j]
            matrix[i][j] = matrix[n - j - 1][i]
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
            matrix[j][n - i - 1] = tmp   


This code defines a function called rotate_2d_matrix that takes a 2D matrix as input and rotates it 90 degrees clockwise in-place. Let's break down the code step by step:

Shebang line (#!/usr/bin/python3): This line is used to indicate the interpreter that should be used to execute the script. In this case, it specifies that the script should be run using Python 3.

Docstring: The multi-line comment enclosed in triple quotes (""") is a docstring. It provides a brief description of the purpose of the script/module, which is to rotate a 2D matrix 90 degrees clockwise.

Function definition: The rotate_2d_matrix function is defined. It takes a single argument, matrix, which is assumed to be a 2D square matrix (n x n matrix).

Function description: A docstring inside the function provides a description of its purpose. It states that the function is meant to rotate the input matrix by 90 degrees clockwise.

Input validation: The code first checks if the input matrix is empty or contains no rows (an edge case check).

Variable n: The variable n is assigned the value of the length of the matrix (the number of rows or columns in the square matrix). This value is used for iterating over the matrix and for indexing.

Nested loops for rotation: The code uses two nested loops to iterate through the elements of the matrix. The outer loop (for i in range(n // 2):) iterates from the first row to the middle row (inclusive), and the inner loop (for j in range(i, n - i - 1):) iterates from the current row element to the last element of the current row (excluding).

Rotation logic: Inside the nested loops, the code performs an in-place rotation using a temporary variable tmp. The logic involves swapping elements in a specific pattern:

Swap matrix[i][j] with matrix[n - j - 1][i]
Swap matrix[n - j - 1][i] with matrix[n - i - 1][n - j - 1]
Swap matrix[n - i - 1][n - j - 1] with matrix[j][n - i - 1]
Swap matrix[j][n - i - 1] with tmp
This swapping process effectively rotates the elements in the specified pattern, which results in rotating the entire matrix by 90 degrees clockwise.

In summary, this code defines a function that takes a square matrix as input and rotates it 90 degrees clockwise in-place using element swapping.


Requirements
General
Allowed editors: vi, vim, emacs
All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.10)
All your files should end with a new line
The first line of all your files should be exactly #!/usr/bin/python3
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the pycodestyle style (version 2.8.0)
You are not allowed to import any module
All modules and functions must be documented
All your files must be executable

