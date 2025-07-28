---
title: Sorting Algorithms Overview
description: Core logic and complexity analysis of selection, bubble, counting, radix, merge, and quick sort algorithms
comments: true
---

# 🔢 Sorting Algorithms Explained

Sorting algorithms are essential for arranging data in a specific order (usually ascending or descending) to enable efficient search, merging, and organization. This document covers six important sorting algorithms: **Selection Sort**, **Bubble Sort**, **Counting Sort**, **Radix Sort**, **Merge Sort**, and **Quick Sort**.

---

## 1. Selection Sort

**Logic:**

- Repeatedly find the minimum element from the unsorted part and move it to the sorted part.
- Operates in-place with a simple two-loop structure.

**Time Complexity:**

- Best: O(n²)
- Average: O(n²)
- Worst: O(n²)

**Space Complexity:** O(1)  
**Stable:** ❌

---

## 2. Bubble Sort

**Logic:**

- Repeatedly compare adjacent pairs and swap them if they’re in the wrong order.
- Each iteration "bubbles" the largest unsorted element to the end.

**Time Complexity:**

- Best: O(n) _(when already sorted)_
- Average: O(n²)
- Worst: O(n²)

**Space Complexity:** O(1)  
**Stable:** ✅

---

## 3. Counting Sort

**Logic:**

- Count the frequency of each unique element.
- Use counts to determine correct positions in the sorted array.
- Only works for non-negative integers or discrete items with a limited range.

**Time Complexity:**

- Best: O(n + k)
- Average: O(n + k)
- Worst: O(n + k)  
  _(k = range of input values)_

**Space Complexity:** O(k)  
**Stable:** ✅

---

## 4. Radix Sort

**Logic:**

- Processes digits from least to most significant.
- Uses a stable sort (like counting sort) on each digit position.
- Efficient for sorting numbers or fixed-length strings.

**Time Complexity:**

- Best: O(nk)
- Average: O(nk)
- Worst: O(nk)  
  _(k = number of digits)_

**Space Complexity:** O(n + k)  
**Stable:** ✅

---

## 5. Merge Sort

**Logic:**

- Divide the array into halves.
- Recursively sort both halves.
- Merge the sorted halves into a single sorted array.

**Time Complexity:**

- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

**Space Complexity:** O(n)  
**Stable:** ✅

---

## 6. Quick Sort

**Logic:**

- Select a pivot element.
- Partition the array so elements < pivot go left, > pivot go right.
- Recursively apply the same logic to subarrays.

**Time Complexity:**

- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n²) _(when pivot is poorly chosen)_

**Space Complexity:** O(log n) _(due to recursion)_  
**Stable:** ❌

---

## Summary Table

| Algorithm      | Best       | Average    | Worst      | Space    | Stable |
| -------------- | ---------- | ---------- | ---------- | -------- | ------ |
| Selection Sort | O(n²)      | O(n²)      | O(n²)      | O(1)     | ❌     |
| Bubble Sort    | O(n)       | O(n²)      | O(n²)      | O(1)     | ✅     |
| Counting Sort  | O(n + k)   | O(n + k)   | O(n + k)   | O(k)     | ✅     |
| Radix Sort     | O(nk)      | O(nk)      | O(nk)      | O(n + k) | ✅     |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n)     | ✅     |
| Quick Sort     | O(n log n) | O(n log n) | O(n²)      | O(log n) | ❌     |

---

## Video:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">

  <a href="https://www.youtube.com/watch?v=HGk_ypEuS24&list=PLyPvmU8zOvFl-XPak-nKr2HYMEo_fSEK_" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/HGk_ypEuS24/0.jpg" alt="JavaScript Event Loop Video" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">Sorting - algorithm </strong>
  </a>

</div>
