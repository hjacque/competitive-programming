# No Odd Sum

https://www.codechef.com/problems/NODDSM

Difficulty: `Cakewalk`

---

There are N numbers written on a blackboard. The i-th number is denoted as A_i.
The blackboard is said to be good if, for each pair of indices (i,j) with 1 ≤ i < j ≤ N, the sum (A_i + A_j) is an even number.

The blackboard might not be good initially, so you want to make it good.
To do this, you can perform the following two types of operations:

1. Erase a 2 from the blackboard, and in its place write two occurrences of 1.
Of course, this can only be done when there's at least one occurrence of 2 on the blackboard.

2. Erase two occurrences of 1 from the blackboard, and in their place write a single occurrence of 2.
Of course, this can only be done when there are at least two occurrences of 1 on the blackboard.

The above operations can be performed in any order, and each operation can be used however many times you like.
Find the minimum number of operations needed to make the blackboard good.
It can be proved that it's always possible to make the blackboard good.

#### Input Format
- The first line of input will contain a single integer T, denoting the number of test cases.
- Each test case consists of two lines of input.
    - The first line of each test case contains a single integer N — the number of values written on the blackboard initially.
    - The second line contains N space-separated integers A_1, A_2,…, A_N.

#### Output Format
For each test case, output on a new line the minimum number of operations needed to make the blackboard good.

---

#### Constraints
- 1 ≤ T ≤ 100
- 1 ≤ N ≤ 100
- 1 ≤ A_i ≤ 2

---

#### Sample 1:
Input
```
3
4
1 1 2 2
4
1 1 1 1
5
1 2 1 2 1
```
Output
```
1
0
2
```
Explanation:
Test case 1: The blackboard is initially not good: it has both a 1 and a 2, and we have 1+2=3 being odd.
Perform a single operation: remove the two occurrences of 1 from the blackboard, and write a 2. Now, there are three 2's on the blackboard.
Each pair of them has a sum of 4, which is even. So, one operation is enough.

Test case 2: The blackboard is already good.

Test case 3: Perform two operations: in each operation, replace a 2 with two 1's.
In the end, there will be 7 ones on the blackboard, but it'll be good.
It can be proved that this is optimal.