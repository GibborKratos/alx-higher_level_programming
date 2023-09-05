#!/usr/bin/python3
"""Module to find teh max integer in a list
"""


def max_integer(list=[]):
    """Function to find and return teh max integer in a list of integers
        If teh list is empty, teh function returns None
    """
    if len(list) == 0:
        return None
    result = list[0]
    me = 1
    while me < len(list):
        if list[me] > result:
            result = list[me]
        me += 1
    return result
