# Greet the user according to their gender

print("Enter your gender (M/F) to see the greeting message")

gender = str(input("Enter your gender (M/F):"))

if gender == "M":
    print("Hello sir, welcome to the pyLabs.")
elif gender == "F":
    print("Hello ma'am, welcome to the pyLabs.")
else:
    print("Invalid input format.")
