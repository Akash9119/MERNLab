# Sum of numbers till n

print("Enter the number upto which you want to see the sum.")

n = int(input("Enter the number: "))

sum = 0

for i in range(1, n+1, 1):
    sum = sum + i

print(f"The sum till {n} is {sum}.")