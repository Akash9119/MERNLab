# Check if the number is prefect number or not
# Pefect number is a number which is equal to the sum of its factors excluding itself.


print("Enter the number to check if it's perfect number or not.")
n = int(input("Enter the number: "))

sum = 0;

for i in range (1, n, 1):
    if(n % i == 0):
        sum = sum + i

if sum == n:
    print(f"{n} is a perfect number.")
else:
    print(f"{n} is not a perfect number.")