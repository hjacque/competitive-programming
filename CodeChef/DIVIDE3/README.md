# Divide into 3

https://www.codechef.com/START191D/problems/DIVIDE3

Difficulty: `Cakewalk`

---

You have N toffees and 3 friends. You will divide the toffees among your friends (You are too generous to take one yourself).

You want to make sure that your division is fair. Hence, you want to minimize the imbalance of your division.
Here, the imbalance is defined as (mx−mn), where mx is the maximum toffees any friend received, and mn is the minimum toffees any friend received.

For example, if the you give 3,1,4 toffees to your friends, then mx=4 and mn=1, so the imbalance is 4−1=3.

Find the minimum possible imbalance.

#### Input Format
- The first and only line of input contains a single integer N - the number of toffees you had.

#### Output Format
For each test case, output on a new line the minimum possible imbalance.

---

#### Constraints
- 3 ≤ N ≤ 10

---

##### Sample 1:
Input
```
3
```
Output
```
0
```
Explanation:
You can give each of your friends 1 toffee, and this has an imbalance of 0 since all get equal toffees.

#### Sample 2:
Input
```
8
```
Output
```
1
```
Explanation:
You can give friend 1 2 toffees and friends 2 and 3, 3 toffees each. This makes mx=3 and mn=2, hence the imbalance is 1.