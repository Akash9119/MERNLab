# Find the greatest element in the list and print it with it's index

elem_list = [12,45,76,86,546,5678]

greatest_num = 0

for i in range(len(elem_list)):
    if elem_list[i] > greatest_num:
        greatest_num = elem_list[i]
        idx_of_num = i

print(f"{greatest_num} is the largets number in list and it's index is {idx_of_num}")