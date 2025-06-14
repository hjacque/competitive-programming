# A - G1

https://atcoder.jp/contests/abc410/tasks/abc410_a

Time Limit: 2 sec / Memory Limit: 1024 MiB

Score : 100 points

---
#### Problem Statement

In AtCoder Kingdom, there are N horse races being held.
Horses aged A_i or younger can participate in the i-th race.
Among the N races, how many races can a K-year-old horse participate in?

---

#### Constraints
- All input values are integers.
- 1 ≤ N ≤ 100
- 1 ≤ A_i ≤ 100
- 1 ≤ K ≤ 100

---

#### Input
The input is given from Standard Input in the following format:

```
N
A_1 A_2 … A_N​
K
```

#### Output
Output the answer as an integer.
 
---

#### Sample Input 1
```
5
3 1 4 1 5
4
```
#### Sample Output 1
```
2
```
- Horses aged 3 or younger can participate in the 1st race.
- Horses aged 1 or younger can participate in the 2nd race.
- Horses aged 4 or younger can participate in the 3rd race.
- Horses aged 1 or younger can participate in the 4th race.
- Horses aged 5 or younger can participate in the 5th race.

Among the 5 races, a 4-year-old horse can participate in the 3rd and 5th races, which is 2 races.

#### Sample Input 2
```
1
1
100
```
#### Sample Output 2
```
0
```
There may be no races that a K-year-old horse can participate in.

#### Sample Input 3
```
15
18 89 31 2 15 93 64 78 58 19 79 59 24 50 30
38
```
#### Sample Output 3
```
8
```