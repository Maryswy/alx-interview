0x09. Island Perimeter
Algorithm
Python

Island perimeter refers to the total length of the outer edges of a connected group of cells, called an "island," within a grid. It's commonly used in programming and mathematics to calculate the boundary length of land cells in a grid, disregarding shared internal edges. This concept is relevant for tasks involving computational geometry, image processing, and game development, where islands represent distinct regions or obstacles.


For example:- cat 0-main.py

#!/usr/bin/python3
"""
0-main
"""
island_perimeter = __import__('0-island_perimeter').island_perimeter

if __name__ == "__main__":
    grid = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
    print(island_perimeter(grid))


This is a Python script that calculates and prints the perimeter of an island represented by a grid of cells. The island consists of connected land cells (cells with a value of 1) in a 2D grid. The code appears to be using an external function called `island_perimeter` from a module named "0-island_perimeter."


1. The script imports the `island_perimeter` function from the "0-island_perimeter" module.

2. It then defines a 2D list called `grid` which represents the layout of land (1) and water (0) cells. This grid defines the shape of the island.

3. The script checks if it's being run as the main program using the `__name__` variable.

4. Inside the main block, the `grid` is defined as a 2D array where each row represents a row of the island and each element within a row represents a cell's value (either 0 or 1).

5. The `island_perimeter` function is called with the `grid` as an argument, and its result is printed using the `print` function.

In summary, this script calculates and prints the perimeter of the island described by the `grid` using the `island_perimeter` function. The `island_perimeter` function is presumably defined in the "0-island_perimeter" module and is expected to calculate the perimeter based on the arrangement of land cells in the grid.


For Example:- 0-island_perimeter.py

#!/usr/bin/python3
"""
Finds the perimeter of an island
"""


def island_perimeter(grid):
    """Find the perimeter of an island"""
    if not grid:
        return 0
    if not all(type(arr) == list for arr in grid):
        return 0
    width = len(grid[0]) - 1
    if not all(len(arr) == width + 1 for arr in grid):
        return 0
    islands = connections = 0
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if grid[i][j]:
                islands += 1
                if j < len(grid[0]) - 1 and grid[i][j + 1] == 1:
                    connections += 1
                if i < len(grid) - 1 and grid[i + 1][j] == 1:
                    connections += 1

    return 4 * islands - 2 * connections


This code defines a Python function named `island_perimeter` that calculates the perimeter of an island represented by a 2D grid of cells. The island consists of connected land cells (cells with a value of 1) within the grid.


1. The code begins with a docstring that briefly describes the purpose of the script: "Finds the perimeter of an island."

2. The `island_perimeter` function is defined, taking the `grid` as its parameter.

3. The function starts by performing some validation checks on the `grid`:
   - If the `grid` is empty, it immediately returns a perimeter of 0.
   - It checks if all elements in the `grid` are lists, and if not, it also returns 0.
   - It determines the width of the grid based on the length of the first row (`width = len(grid[0]) - 1`), then checks if all rows have the same length as the determined width. If not, it returns 0.

4. It initializes two variables: `islands` to count the number of land cells (islands), and `connections` to count the neighboring connections between land cells.

5. The code uses nested loops to iterate through each cell in the `grid`.
   - If the current cell is a land cell (with a value of 1):
     - It increments the `islands` count by 1.
     - It checks the cell to the right (if within bounds) and counts a connection if it's also a land cell.
     - It checks the cell below (if within bounds) and counts a connection if it's also a land cell.

6. Finally, the function calculates the perimeter using the formula: `4 * islands - 2 * connections`. The formula works based on the observation that each land cell contributes 4 units to the perimeter, and each connection between neighboring cells subtracts 2 units from the perimeter.

The function then returns the calculated perimeter.

In summary, the `island_perimeter` function calculates the perimeter of an island in a grid by counting the land cells and their connections with neighboring land cells, and then applying a formula to calculate the final perimeter value.