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


For example 0-making_change.py:-

#!/usr/bin/python3
''' Coin change problem '''


def makeChangeGreedy(coins, total):
    '''
    Classic Greedy algorithm problem
    This works only when coin denominations are
    optimal
    Time: O(nlogn)
    Space: O(1)
    '''
    if total < 1:
        return 0
    coins.sort(reverse=True)
    num_coins = 0
    for coin in coins:
        if total < 1:
            break
        res, remainder = divmod(total, coin)
        total = remainder
        num_coins += res
    return total == 0 and num_coins or -1


def makeChange(coins, total):
    '''
    Dynamic programming approach
    Time: O(total * len(coins))
    Space: O(total)
    '''
    if total <= 0:
        return 0
    dp = [0] + [total + 1] * total
    for coin in coins:
        for i in range(coin, total + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[total] if dp[total] != total + 1 else -1



This code defines two functions, makeChangeGreedy and makeChange, which both solve the coin change problem using different approaches. Let's go through each of the functions:

makeChangeGreedy(coins, total): This function uses a greedy algorithm to solve the coin change problem. The goal is to find the minimum number of coins needed to make change for a given total amount using the available coins denominations. Here's how the function works:

It first checks if total is less than 1. If it is, it returns 0, indicating that no coins are needed.
The coins list is sorted in descending order. This is done to prioritize using larger coin denominations first, which can lead to an optimal solution for certain cases.
It iterates through the sorted coins list. For each coin denomination, it calculates how many times that coin can be used to make change for the remaining total. The divmod function is used to calculate the quotient and remainder of the division of total by the coin denomination.
The res variable holds the number of times the current coin can be used, and remainder holds the remaining amount after using the coin.
The function updates the total with the remainder and increments num_coins by the value of res.
The function returns num_coins if total becomes 0 (indicating that the entire amount has been covered by coins), otherwise, it returns -1, indicating that a valid combination of coins could not be found.
makeChange(coins, total): This function uses a dynamic programming approach to solve the coin change problem. The goal is the same: find the minimum number of coins needed to make change for the given total using the available coins denominations. Here's how the function works:

If total is less than or equal to 0, the function returns 0, indicating that no coins are needed.
A dynamic programming array dp is initialized with total + 1 values. The element at index i of dp will store the minimum number of coins needed to make change for the amount i.
The first element of dp is set to 0, as it takes 0 coins to make change for an amount of 0.
The function iterates through each coin denomination in the coins list and updates the dp array accordingly.
For each coin denomination, the function iterates through the dp array starting from the coin value up to the total. For each index i, it calculates the minimum of the current value at dp[i] and the value at dp[i - coin] + 1, where coin is the current coin denomination. This update represents the optimal way to make change for the amount i using the current coin denomination.
The function finally returns dp[total] if it's less than total + 1, which means a valid combination of coins was found. Otherwise, it returns -1.


Both functions aim to solve the same problem but use different algorithms. The makeChange function uses dynamic programming, which generally guarantees the optimal solution, while the makeChangeGreedy function uses a greedy approach, which can be efficient but may not always yield the optimal result. The choice between the two methods depends on the specific problem constraints and requirements.