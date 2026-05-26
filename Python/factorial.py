# Factorial of number

print("Enter the nuber to find it's factorial.")

n = int(input("Enter the number: "))

factorial = 1

for i in range(1, n+1, 1):
    factorial = factorial * i
print(f"The factorial of {n} is {factorial}")