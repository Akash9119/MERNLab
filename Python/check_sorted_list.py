# check if the list elements are soreted or not

list_elem = [1,3,5,7,9,12]

for i in range(len(list_elem)-1):
    if list_elem[i] < list_elem[i + 1]:
        continue
    else:
        print("List is not sorted")
        break
else:
    print("Your list is sorted")