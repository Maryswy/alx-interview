def pascal_triangle(n):
    """
    Creates a list of lists of integers representing Pascal's triangle

    parameters:
        n [int]:
            the number of rows of Pascal's triangle to recreate

    return:
        [list of lists of ints]:
            representation of Pascal's triangle
    """
    if not isinstance(n, int):
        raise TypeError("n must be an integer")

    triangle = []
    previous = [1]

    for row_index in range(n):
        rowlist = [1]

        if row_index > 0:
            for i in range(row_index):
                rowlist.append(previous[i - 1] + previous[i])

        previous = rowlist
        triangle.append(rowlist)

    return triangle
