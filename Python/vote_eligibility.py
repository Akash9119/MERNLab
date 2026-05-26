# Take name and age and show if the user is valid to vote or not

print("Enter your name and age to see eligibility for voting")
name = str(input("Enter your name: "))
age = int(input("Enter your age: "))

if age >= 18:
    print(f"{name}, you are eligible to vote.")
else:
    print(f"{name}, you are not eligible to vote.")