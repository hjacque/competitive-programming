# C - Rotatable Array

https://atcoder.jp/contests/abc410/tasks/abc410_c

Time Limit: 2 sec / Memory Limit: 1024 MiB

Score : 300 points

---

#### Problem Statement

There is an integer sequence A of length N, initially A_i = i. Process a total of Q queries of the following types:
- Type 1: Change A_p to x.
- Type 2: Output A_p.
- Type 3: Repeat the operation "move the first element of A to the end" k times.
    - Formally, replace A with (A_2 , A_3,…, A_N, A_1) k times.

---

#### Constraints
- All input values are integers.
- 1 ≤ N ≤ 10^6
- 1 ≤ Q ≤ 3×10^5
- All queries satisfy the following constraints:
    - 1 ≤ p ≤ N
    - 1 ≤ x ≤ 10^6
    - 1 ≤ k ≤ 10^9

---

#### Input
The input is given from Standard Input in the following format:
```
N Q
Query_1
Query_2​
⋮
Query_Q
```
 
Here, Query_i represents the i-th query.

Type 1 queries are given in the following format:
```
1 p x
```

Type 2 queries are given in the following format:
```
2 p
```

Type 3 queries are given in the following format:
```
3 k
```

#### Output
For each Type 2 query, output the answer on a line.

---

#### Sample Input 1
```
5 5
2 3
1 2 1000000
3 4
2 2
2 3
```
#### Sample Output 1
```
3
1
1000000
```
This input contains 5 queries.
- Initially, A=(1,2,3,4,5).
- The 1st query is Type 2: output A_3 = 3.
- The 2nd query is Type 1: replace A_2 with 1000000.
    - After the query, A=(1,1000000,3,4,5).
- The 3rd query is Type 3: repeat the operation "move the first element of A to the end" 4 times.
    - After the query, A=(5,1,1000000,3,4).
- The 4th query is Type 2: output A_2 = 1.
- The 5th query is Type 2: output A_3 = 1000000.

#### Sample Input 2
```
1000000 2
1 1000000 999999
3 1000000000
```
#### Sample Output 2
```
```
The output may be empty.