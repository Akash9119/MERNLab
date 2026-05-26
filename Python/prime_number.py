# Check whether the number is prime number or not
# A prime number is a number which is only divisible by 1 and itself.

print("Enter the nubmer to check if it's prime number or not.")

n = int(input("Enter the number: "))

for i in range(2, n, 1):
    if(n % i ==0):
        print(f"{n} is not a prime number.")
        break
else:
    print(f"{n} is a prime number.")