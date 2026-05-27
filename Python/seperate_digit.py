# Seperate each digit of a number and print it in a new line using while loop

n = int(input("Enter a number: "))

while n > 0:
    digit = n % 10
    print(f"The digit is {digit}")
    n = int(n / 10)