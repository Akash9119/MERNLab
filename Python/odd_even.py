# Accept the integer and check even or odd

print("Enter the number to see the even or odd result")

num = int(input("Enter the number: "))
if num % 2 == 0:
    print(f"{num} is an even number.")
else:
    print(f"{num} is an odd number.")