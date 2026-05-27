# Accept the number and print the number in reverse

n = int(input("Enter the number to see reverse: "))

rev_n = 0

while n > 0:
    rev_n = rev_n * 10 + n % 10
    n = int(n/10)
print(rev_n)