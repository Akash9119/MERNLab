#  Merget two python disctionaries

a = {1:10, 2:20, 3:30}
b = {11:100, 22:200, 32:300}

for i in b:
    a[i] = b[i]
print(a)