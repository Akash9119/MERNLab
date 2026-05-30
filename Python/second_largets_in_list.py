# Find the second largest number in list

elem_list = [12,45,789,565,3,78,63,45]

largets_num = 0
for i in elem_list:
    if largets_num < i:
        largets_num = i

elem_list.remove(largets_num)
# print(elem_list)

second_larget = 0
for i in elem_list:
    if second_larget < i:
        second_larget = i
print(f"The second larget nubmer is {second_larget}")



# For the sorted list
# elem_list = [12,45,55,63,75]

# larget_num = elem_list[0]
# second_larget_num = elem_list[0]

# for i in elem_list:
#     if larget_num < i:
#         second_larget_num = larget_num
#         larget_num = i
##  To solve the issue for the unsorted list
#     elif second_larget_num < i:
#       second_larget_num = i

# print(f"Second larget num is {second_larget_num}")