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





