0x01. Lockboxes
Algorithm
Python



Lockboxes, also known as the "Lockbox problem" or "Treasure hunt problem," is a common coding challenge or algorithmic problem. The problem involves finding the keys to unlock a set of lockboxes that are interlinked in some way.

Here's a description of the problem:

Problem Statement:
You are given a list of lockboxes, each containing a number of keys and a set of indices for other lockboxes that can be opened with those keys. Your task is to determine if all the lockboxes can be opened.

Input:
The input is a list of lockboxes represented as a Python list of dictionaries. Each dictionary has two keys:

"keys": A list of integers representing the keys inside the lockbox.
"opens": A list of integers representing the indices of the other lockboxes that can be opened with the keys inside the current lockbox.
Output:
The output is a boolean value. Return True if all the lockboxes can be opened, or False if at least one lockbox cannot be opened.

Algorithm in Python:
To solve the lockboxes problem, you can use a depth-first search (DFS) or breadth-first search (BFS) algorithm to traverse through the lockboxes and their corresponding keys. Here's an example implementation using a DFS approach:

python code 
def can_open_all_lockboxes(lockboxes):
    def dfs(lockbox, visited):
        if lockbox in visited:
            return
        visited.add(lockbox)
        for key in lockboxes[lockbox]['keys']:
            for box in lockboxes[lockbox]['opens']:
                dfs(box, visited)

    num_lockboxes = len(lockboxes)
    visited = set()
    dfs(0, visited)  # Start DFS from the first lockbox

    return len(visited) == num_lockboxes



Example Usage:

python code 
lockboxes = [
    {'keys': [1], 'opens': [1]},
    {'keys': [0], 'opens': [2]},
    {'keys': [2], 'opens': [0]}
]
print(can_open_all_lockboxes(lockboxes))  # Output: True

lockboxes = [
    {'keys': [1], 'opens': [1]},
    {'keys': [], 'opens': []},
    {'keys': [2], 'opens': [0]}
]
print(can_open_all_lockboxes(lockboxes))  # Output: False


In the first example, all lockboxes can be opened by following the given indices, so the output is True. In the second example, the second lockbox cannot be opened since it has no keys and no other lockboxes can open it, so the output is False.




Requirements
General
Allowed editors: vi, vim, emacs
All your files will be interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)
All your files should end with a new line
The first line of all your files should be exactly #!/usr/bin/python3
A README.md file, at the root of the folder of the project, is mandatory
Your code should be documented
Your code should use the PEP 8 style (version 1.7.x)
All your files must be executable




Explanation of 0-main.py:-
#!/usr/bin/python3

canUnlockAll = __import__('0-lockboxes').canUnlockAll

boxes = [[1], [2], [3], [4], []]
print(canUnlockAll(boxes))

boxes = [[1, 4, 6], [2], [0, 4, 1], [5, 6, 2], [3], [4, 1], [6]]
print(canUnlockAll(boxes))

boxes = [[1, 4], [2], [0, 4, 1], [3], [], [4, 1], [5, 6]]
print(canUnlockAll(boxes))



This is called a shebang line. It is commonly used in Unix-like operating systems to specify the interpreter for executing the script. In this case, it specifies that the script should be run using the python3 interpreter.


canUnlockAll = __import__('0-lockboxes').canUnlockAll
This line imports the canUnlockAll function from the module '0-lockboxes'. The __import__ function is used to dynamically import a module. In this case, it imports the module '0-lockboxes' and retrieves the canUnlockAll function from it.


boxes = [[1], [2], [3], [4], []]
print(canUnlockAll(boxes))
This code defines a list of lists called boxes. Each inner list represents a box, and the numbers inside the inner lists represent keys. The canUnlockAll function is called with boxes as the argument, and the result is printed. This code checks if it is possible to unlock all the boxes given the initial set of keys.



boxes = [[1, 4, 6], [2], [0, 4, 1], [5, 6, 2], [3], [4, 1], [6]]
print(canUnlockAll(boxes))
This code defines a different set of boxes and again calls the canUnlockAll function with boxes as the argument. It checks if it is possible to unlock all the boxes given the initial set of keys.


boxes = [[1, 4], [2], [0, 4, 1], [3], [], [4, 1], [5, 6]]
print(canUnlockAll(boxes))
Similar to the previous example, this code defines a different set of boxes and calls the canUnlockAll function to check if it is possible to unlock all the boxes.

The actual implementation of the canUnlockAll function is not provided in the code snippet you provided. It is assumed that the module '0-lockboxes' contains the implementation of that function.




Explanation:-
#!/usr/bin/python3
This is a shebang line, indicating that the script should be run using the python3 interpreter.



"""
Problem: You have n number of locked boxes in front of you.
         Each box is numbered sequentially from 0 to n - 1 and each box may contain keys to the other boxes.
Task: Write a method that determines if all the boxes can be opened.
"""

This is a multi-line comment that describes the problem statement and task for which the function is implemented.



def canUnlockAll(boxes):
    """
    Function that checks with boolean value (True/False)
    """
    if type(boxes) is not list:
        return False
    elif len(boxes) == 0:
        return False



The code defines a function canUnlockAll that takes one parameter, boxes. The function checks whether the boxes parameter is a list and if it is not, it returns False. Additionally, if the length of boxes is zero, it also returns False. These checks ensure that the input is valid.



    for k in range(1, len(boxes) - 1):
        boxes_checked = False
        for idx in range(len(boxes)):
            boxes_checked = k in boxes[idx] and k != idx
            if boxes_checked:
                break
        if boxes_checked is False:
            return boxes_checked



The code uses nested loops to iterate over each box (idx) and each key (k) from 1 to the second-to-last index of boxes. It checks if the key k is present in the box at index idx (k in boxes[idx]) and if the box is not the same as the key (k != idx). If the condition is satisfied, it sets boxes_checked to True and breaks out of the inner loop.

If, after iterating over all the boxes and keys, there is a key (k) that is not found in any box, the variable boxes_checked will remain False, indicating that all the boxes cannot be opened. In this case, the function returns False.



    return True
If the loop completes without finding any missing keys, it means that all the boxes can be opened, so the function returns True.

Overall, this function checks whether all the boxes can be opened by examining the keys present in each box and verifying that each key corresponds to a different box. If any key is missing, it returns False; otherwise, it returns True.
