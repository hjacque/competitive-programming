# Nearest Square

https://www.codechef.com/problems/NEARSQ

Difficulty: `Cakewalk`

---

You have a positive integer N. Find the largest positive integer A such that:

- 1 ≤ A ≤ N
- A is a square number, i.e. A=B⋅B for some integer B.

#### Input Format
The first line of input will contain a single integer T, denoting the number of test cases.
The first and only line of each test case contains a single integer N.

#### Output Format
For each test case, output on a new line the largest square integer A smaller than N.

---

#### Constraints
- 1 ≤ T ≤ 100
- 1 ≤ N ≤ 100

---

#### Sample 1:
Input
```
3
1
10
48
```
Output
```
1
9
36
```
Explanation:
Test case 1: A=1 satisfies all the conditions. We cannot choose A=9 because it does not satisfy A ≤ N condition.

Test case 2: A=1,4,9 satisfies all the conditions. We print 9 because we want the maximum.