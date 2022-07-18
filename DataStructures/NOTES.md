# Arrays

Approach to choose points, to solve any type of problem.

1. Brute Force
2. Using Hash Map
3. Using 2 pointers
4. Using some algorithm
5. Using optimized solution

# Algorithms

1. Boyer-Moore Majority Voting Algorithm
2. Kadanes Alogrithm

# Subarray like problems

1. Simple approach is O(n^2) for all the problems. Take 2 loops and iterate through them
2. Another apporach will be solved either using Hash Map or specific algorithm

- Elements appearing more the - times problems

1.  The Boyer-Moore voting algorithm is one of the popular optimal algorithms which is used to find the majority element among the given elements that have more than N/ 2 occurrences
2.  Given an array of size n and a number k, find all elements that appear more than n/k times

- Using 2 loops
- Using Hash table
- Using Sorting

# Get the right pointer length, spliting arrau into groups and the last group would be either n-1 or will exceed arr length. use below formula to calculate the remaining length of array

- let right = Math.min(i + k - 1, n - 1); //for more see the reerse array in groups problem
