# Check if the number is pallindrome is or not

n = int(input("Enter your number to check if pallindrome: "))
real_n = n
new_n = 0

while n > 0:
    new_n = new_n * 10 + n % 10
    n = int(n /10)

if (real_n == new_n):
    print("The number is pallindromic")
else:
    print("The number is not pallindromic")