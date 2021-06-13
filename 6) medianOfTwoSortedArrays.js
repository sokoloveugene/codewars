// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Input: nums1 = [1,3], nums2 = [2,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const isEven = length % 2 === 0;
  const resultArr = Array(length);

  let pointer1 = 0;
  let pointer2 = 0;
  let resultPointer = 0;

  for (let i = 0; i < length; i++) {
    const first = nums1[pointer1];
    const second = nums2[pointer2];

    if (first >= second || first === undefined) {
      resultArr[resultPointer] = second;
      pointer2 += 1;
    } else {
      resultArr[resultPointer] = first;
      pointer1 += 1;
    }

    resultPointer += 1;
  }

  if (isEven) {
    const center = length / 2;
    return (resultArr[center - 1] + resultArr[center]) / 2;
  } else {
    return resultArr[Math.floor(length / 2)];
  }
};

const nums1 = [1, 3];
const nums2 = [2, 4];
findMedianSortedArrays(nums1, nums2);