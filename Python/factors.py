# Print all factors of a number

print("Enter the number to find it's factors.")
n = int(input("Enter the number: "))

for i in range(1, n+1, 1):
    if(n % i == 0):
        print(f"{i} is a factor of {n}.")