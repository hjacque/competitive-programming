# B - Reverse Proxy

https://atcoder.jp/contests/abc410/tasks/abc410_b

Time Limit: 2 sec / Memory Limit: 1024 MiB

Score : 200 points

---

#### Problem Statement
There are N boxes numbered 1,2,…,N. Initially, all boxes are empty.

Q balls will come in order.
Takahashi will put the balls into the boxes according to the sequence X=(X_1, X_2,…,X_Q).
Specifically, he performs the following process for the i-th ball:
- If X_i ≥ 1: Put this ball into box X_i​.
- If X_i = 0: Put this ball into the box with the smallest number among those containing the fewest balls.

Find which box each ball was put into.

---

#### Constraints
- All input values are integers.
- 1 ≤ N ≤ 100
- 1 ≤ Q ≤ 100
- 0 ≤ X_i​ ≤ N

---

#### Input
The input is given from Standard Input in the following format:
```
N Q
X_1​ X_2 … X_Q
```

#### Output
If the i-th ball was put into box B_i, output in the following format:
```
B_1 B_2 … B_Q
```

---

#### Sample Input 1
```
4 5
2 0 3 0 0
```
#### Sample Output 1
```
2 1 3 4 1
```
There are 4 boxes, and 5 balls come.
- Initially, all boxes are empty.
    - The numbers of balls in box 1,2,3,4 are 0,0,0,0, respectively.
- Since X_1 = 2, put the 1st ball into box 2.
    - The numbers of balls in box 1,2,3,4 are 0,1,0,0, respectively.
- Since X_2 = 0, put the 2nd ball into box 1, which has the smallest number among those containing the fewest balls.
    - The numbers of balls in box 1,2,3,4 are 1,1,0,0, respectively.
- Since X_3 = 3, put the 3rd ball into box 3.
    - The numbers of balls in box 1,2,3,4 are 1,1,1,0, respectively.
- Since X_4 = 0, put the 4th ball into box 4, which has the smallest number among those containing the fewest balls.
    - The numbers of balls in box 1,2,3,4 are 1,1,1,1, respectively.
- Since X_5 = 0, put the 5th ball into box 1, which has the smallest number among those containing the fewest balls.
    - The numbers of balls in box 1,2,3,4 are 2,1,1,1, respectively.

The balls were put into boxes 2,1,3,4,1 in order. Thus, output `2 1 3 4 1`.

#### Sample Input 2
```
3 7
1 1 0 0 0 0 0
```
#### Sample Output 2
```
1 1 2 3 2 3 1
```

#### Sample Input 3
```
6 20
4 6 0 3 4 2 6 5 2 3 0 3 2 5 0 3 5 0 2 0
```
#### Sample Output 3
```
4 6 1 3 4 2 6 5 2 3 1 3 2 5 1 3 5 4 2 6
```