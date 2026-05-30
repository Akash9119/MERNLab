# Find the second largest number in list

elem_list = [12,45,789,565,3,78,63,45]

largets_num = 0
for i in elem_list:
    if largets_num < i:
        largets_num = i

elem_list.remove(largets_num)

second_larget = 0
for i in elem_list:
    if second_larget < i:
        second_larget = i
print(f"The second larget nubmer is {second_larget}")