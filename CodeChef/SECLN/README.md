# Security Lines

https://www.codechef.com/problems/NODDSM

Difficulty: `Cakewalk`

---

The airport in Chefland is a busy place! Today, we'll take a look at its security queues.

There are N security queues, numbered 1 to N. Initially, there are A_i people standing in the i-th queue.
You are the last person in the the first queue, i.e. the A_1-th person in queue 1.

Every second, the following will happen:

1. First, you will either stay in the same queue, or move to an adjacent queue.
That is, if you are in queue i at the start of the second, you can either stay in queue i, or move to one of queue i−1 or queue i+1 (only if the corresponding queue exists, i.e. you cannot move to queue i+1 when i=N or move to queue i−1 when i=1).
If you move to a new queue, you will be the last person in it.
2. Then, the first person in every queue will complete their security check and leave.

Naturally, you'd like to finish your security check as soon as possible.
What's the minimum number of seconds you'll need if you act optimally?

#### Input Format
- The first line of input will contain a single integer T, denoting the number of test cases.
- Each test case consists of two lines of input.
    - The first line of each test case contains a single integer N — the number of queues.
    - The second line contains N space-separated integers A_1, A_2,…, A_N – the number of people in each queue initially.

#### Output Format
For each test case, output on a new line the minimum number of seconds you'll need to complete your security check.

---

#### Constraints
- 1 ≤ T ≤ 500
- 1 ≤ N ≤ 500
- 1 ≤ A_i ≤ 500

---

#### Sample 1:
Input
```
3
4
5 2 1 3
2
4 5
5
7 3 5 6 2
```
Output
```
2
4
4
```
Explanation:
Test case 1: One optimal sequence of moves is as follows:

- Second 1: Move to the second queue. The counts of people are now [4,3,1,3].
The first person in each queue leaves, so the counts are [3,2,0,2].
- Second 2: Move to the third queue. The counts of people are now [3,1,1,2].
The first person in each queue leaves, so the counts are [2,0,0,1].
We were the first person in the third queue, meaning we've completed our security check and are done.

So, we were able to leave in two seconds.

Test case 2: The queue counts are [4,5], with us being in the first queue.
The optimal path is to just wait in the first queue without moving.
Since one person leaves the queue every second, we'll leave by the 4-th second.

Test case 3: One optimal solution is as follows:

- Wait in queue 1 for 3 seconds.
- In the fourth second, move to queue 2.
    We'll be the first person in queue 2 now and so leave (the three people initially in it would have left after the first three seconds).
