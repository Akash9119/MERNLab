# Do sum of all even and odd numbers till n

print("Enter the number to find it's sum of even and odd numbers.")

n = int(input("Enter the number: "))

sum_even = 0
sum_odd = 0

for i in range(1, n+1, 1):
    if(i % 2 == 0):
        sum_even = sum_even + i
    else:
        sum_odd = sum_odd + i

print(f"The sum of even numbers till {n} is {sum_even}.")
print(f"The sum of odd numbers till {n} is {sum_odd}.")