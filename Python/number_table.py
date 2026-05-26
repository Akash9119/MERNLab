# Take number as input and print it's table

print("Enter the number to see it's table.")

n = int(input("Enter the number: "))

for i in range(n, (n*10) +1, n):
    print(i)