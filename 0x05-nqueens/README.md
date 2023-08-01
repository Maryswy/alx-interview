0x05. N Queens
Algorithm
Python


Requirements
General
Allowed editors: vi, vim, emacs
All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)
All your files should end with a new line
The first line of all your files should be exactly #!/usr/bin/python3
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the PEP 8 style (version 1.7.*)
All your files must be executable



The N queens puzzle is the challenge of placing N non-attacking queens on an N×N chessboard. Write a program that solves the N queens problem.

Usage: nqueens N
If the user called the program with the wrong number of arguments, print Usage: nqueens N, followed by a new line, and exit with the status 1
where N must be an integer greater or equal to 4
If N is not an integer, print N must be a number, followed by a new line, and exit with the status 1
If N is smaller than 4, print N must be at least 4, followed by a new line, and exit with the status 1
The program should print every possible solution to the problem
One solution per line
Format: see example
You don’t have to print the solutions in a specific order
You are only allowed to import the sys module
Read: Queen, Backtracking



For example:-

#!/usr/bin/python3
"""
    N queens problem
"""
import sys


def check_pos(s, pos):
    for q in s:
        if q[1] == pos[1]:
            return False
        if (q[0] + q[1]) == (pos[0] + pos[1]):
            return False
        if (q[0] - q[1]) == (pos[0] - pos[1]):
            return False
    return True


def mv_q(r, n, s):
    if (r == n):
        print(s)
    else:
        for col in range(n):
            pos = [r, col]
            if check_pos(s, pos):
                s.append(pos)
                mv_q(r + 1, n, s)
                s.remove(pos)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print('Usage: nqueens N')
        exit(1)
    try:
        n = int(sys.argv[1])
    except BaseException:
        print('N must be a number')
        exit(1)
    if n < 4:
        print('N must be at least 4')
        exit(1)

    s = []

    mv_q(0, n, s)



This code solves the N queens problem using recursion and backtracking. The N queens problem is a classic puzzle where you have to place N chess queens on an N×N chessboard in such a way that no two queens threaten each other. In this context, "threaten" means that no two queens share the same row, column, or diagonal.

Let's break down the code step by step:

The script starts with a shebang #!/usr/bin/python3, which specifies the Python interpreter to be used.

The script includes a docstring that describes the purpose of the code ("N queens problem").

The code imports the sys module to handle command-line arguments.

There are two main functions defined in the code:

a. check_pos(s, pos): This function takes two arguments, s and pos, where s is a list of queen positions (represented as [row, column]), and pos is a new position to be checked. The function verifies whether the new position pos is safe to place a queen by checking if it conflicts with any existing queens in s. It checks for conflicts in the same column, same diagonal, and reverse diagonal.

b. mv_q(r, n, s): This function uses backtracking to recursively find all solutions to the N queens problem. It takes three arguments: r is the current row being processed, n is the size of the chessboard (number of rows/columns), and s is the list of queen positions found so far. The function tries to place a queen in each column of the current row and recursively moves on to the next row. It uses the check_pos function to determine if the current position is safe to place a queen. If it reaches a solution (i.e., all N queens are placed on the board), it prints the board configuration.

The if __name__ == "__main__": block checks if the script is being run as the main program.

It checks if the user provided the correct number of command-line arguments (should be nqueens N, where N is the size of the chessboard).

It attempts to convert the command-line argument N into an integer.

If the input N is less than 4, the code prints a message and exits, as the N queens problem is not defined for chessboards smaller than 4x4.

It initializes an empty list s, which will be used to store the queen positions.

Finally, it calls the mv_q function with initial arguments 0 (starting from the first row), n (size of the chessboard), and the empty list s.

When you run this script with a valid value of N, it will print all possible configurations of placing N queens on an N×N chessboard such that no two queens threaten each other. Each solution will be represented as a list of queen positions, where each position is a tuple containing the row and column indices of the queen on the chessboard.