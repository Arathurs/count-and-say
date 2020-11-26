### Count and Say

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":

#### Solutions

This solution uses a top-down iterative approach, beating almost 100% of all previous Leetcode submissions.


##### Example 1:
```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

##### Example 2:
```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

##### Example 3:
```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

##### Example 4:
```
Input: nums = [1,3,5,6], target = 0
Output: 0
```

##### Example 5:
```
Input: nums = [1], target = 0
Output: 0
```

Constraints:
- `1 <= nums.length <= 10<sup>4</sup>`
- `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`
- `nums` contains **distinct** values sorted in **ascending** order
- `-10<sup>4</sup> <= target <= 10<sup>4</sup>`