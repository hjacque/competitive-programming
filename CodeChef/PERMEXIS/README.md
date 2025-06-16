# Watson asks Does Permutation Exist

https://www.codechef.com/practice/course/greedy-algorithms/INTGRA01/problems/PERMEXIS

Difficulty: `1207`
Topics: `Greedy`

---

Watson gives an array A of N integers A1, A2, ..., AN to Sherlock. He wants Sherlock to reorganize the array in a way such that no two adjacent numbers differ by more than 1.

Formally, if reorganized array is B1, B2, ..., BN, then the condition that | Bi - Bi + 1 | ≤ 1, for all 1 ≤ i < N(where |x| denotes the absolute value of x) should be met.

Sherlock is not sure that a solution exists, so he asks you.

#### Input
First line contains T, number of test cases. Each test case consists of N in one line followed by N integers in next line denoting A1, A2, ..., AN.

#### Output
For each test case, output in one line YES or NO denoting if array A can be reorganized in required way or not.

---

#### Constraints
- 1 ≤ T ≤ 100
- 1 ≤ N ≤ 10^5
- 1 ≤ A_i ≤ 10^9
- Sum of N over all test cases ≤ 2*10^5

---

### Sample 1:
Input
```
2
4
3 2 2 3 
2
1 5
```
Output
```
YES
NO
```
Explanation:
Test case 1:
No need to reorganise.

Test case 2:
No possible way.