# Permuted Greater than 2

https://www.codechef.com/problems/PERMGE2

Difficulty: `Simple`

---

You have an array A consisting of X 0's, Y 1's and Z 2's.

Check if it is possible to rearrange array A such that A_i + A_i+1 ≥ 2 for each 1 ≤ i < ∣A∣. Print Yes or No accordingly.

#### Input Format
- The first line of input will contain a single integer T, denoting the number of test cases.
- The first and only line of input contains 3 integers X, Y and Z.

#### Output Format
For each test case, output Yes if there is a valid rearrangement or No otherwise.

It is allowed to print each character in either case, i.e. YES, yes and yES will all be accepted.

---

#### Constraints
- 1 ≤ T ≤ 10^4
- 0 ≤ X, Y, Z ≤100
- 2 ≤ X + Y + Z

---

#### Sample 1:
Input
```
4
1 1 0
1 1 1
2 0 1
5 1 1
```
Output
```
No
Yes
Yes
No
```
Explanation:
Test case 1: You have 1 occurrence of 0 and 1 occurrence of 1. The 2 possible arrays are [0,1] and [1,0], but neither satisfies the condition of A_1 + A_2 ≥ 2.

Test case 2: The array [1,2,0] satisfies the necessary conditions.