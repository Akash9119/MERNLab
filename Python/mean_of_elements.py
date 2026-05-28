# Mean of list elements in list


list_item = [1,2,3,4,5,6,4]

sum = 0
item_count = 0
for i in range(len(list_item)):
    sum = sum + list_item[i]
    item_count+=1

mean = int(sum /item_count)
print(mean)