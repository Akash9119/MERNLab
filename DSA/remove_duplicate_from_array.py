class Solution(object):
    def removeDuplicates(self, nums):
        k = 0
        for num in nums:
            for i in range(nums.count(num)-1):
                nums.remove(num)
            k += 1

        return k