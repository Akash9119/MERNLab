# Print positive and negative elements of list


parent_list = [-1,-2,-5,1,1,4,5,7,9,0]

negative_list = []
possitive_list = []
for i in parent_list:
    if i >= 0:
        negative_list.append(i)
    else:
        possitive_list.append(i)

print(possitive_list)
print(negative_list)
