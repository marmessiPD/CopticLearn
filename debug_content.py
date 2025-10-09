#!/usr/bin/env python3
"""Debug script to show the exact content around line 400."""

with open(r'C:\Users\mario\OneDrive - PolyDecypher\Desktop\Cloned_Repos\CopticLearn\constants\modules\module1.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Show lines 399-412 with repr to see exact characters
for i in range(399, 412):
    print(f"{i+1}: {repr(lines[i])}")
