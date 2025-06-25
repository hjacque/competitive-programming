# Missing Shoes

https://www.codechef.com/problems/SHOM

Difficulty: `Cakewalk`

---

Chef owns several pairs of shoes, unfortunately he has so many that he lost track of them!

Each pair of shoes consists of one left shoe and one right shoe.
Looking at his collection, Chef counts L left shoes and R right shoes.

What's the minimum number of shoes Chef is missing?

#### Input Format
- The only line of input will contain two space-separated integers L and R – the number of left shoes and right shoes, respectively.

#### Output Format
Output a single integer: the minimum number of shoes Chef is missing.

---

#### Constraints
- 1 ≤ L, R ≤ 10

---

#### Sample 1:
Input
```
1 3
```
Output
```
2
```
Explanation:
There's one left shoe and three right shoes.
The single left shoe can be paired with one right shoe, leaving two unpaired right shoes. So, the answer is 2.

#### Sample 2:
Input
```
5 5
```
Output
```
0
```
Explanation:
There are an equal number of left and right shoes, so it's possible to pair them all up.

#### Sample 3:
Input
```
8 3
```
Output
```
5
```
Explanation:
There are 8 left shoes and 3 right shoes.
Each right shoe can be paired up with one left shoe, which leaves 5 left shoes unpaired.