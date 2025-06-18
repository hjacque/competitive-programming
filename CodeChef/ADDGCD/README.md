# Add to get GCD

https://www.codechef.com/problems/ADDGCD

Difficulty: `Cakewalk`

---

You have 2 integers X and Y.

You goal is to make them have a common divisor which is not 1, i.e. there should exist Z > 1 such that Z divides X and Z divides Y.

In one operation, you can do either of the following:

- Set X to X+1.
- Set Y to Y+1.

Find the minimum number of operations needed to achieve your goal.

#### Input Format
The first line of input will contain a single integer T, denoting the number of test cases.
The first and only line of each test case contains 2 integers - X and Y.

#### Output Format
For each test case, output on a new line the minimum number of operations.

---

#### Constraints

- 1 ≤ T ≤ 10^3
- 1 ≤ X, Y ≤ 10^9

---

#### Sample 1:
Input
```
3
2 4
1 1
2 3
```
Output
```
0
2
1
```
Explanation:
Test case 1: The goal is already achieved since Z=2 divides both.

Test case 2: We first increment X and then Y to get X=Y=2 which has a common divisor Z=2.