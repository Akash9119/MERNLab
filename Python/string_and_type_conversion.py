name = "Akash"
print(name)


# Type conversion
# From unicode to char
age = 65
print(chr(age))

# From char to unicode
age = 'Z'
print(ord(age))

# From int to char
user_age = 25
print(str(user_age))
print(type(str(user_age)))

# From int to float
print(float(user_age))
print(type(float(user_age)))

# From int to bool
print(bool(user_age))
print(type(bool(user_age)))
# Falsy values in python which will give flase all the time 
#  False, None, 0, 0.0, 0j, Decimal(0), Fraction(0, 1), [], (), {}, set(), range(0)

# String slicing in python
message = "This is the message"

# To get any character from the string
print(message[3]) # Output: s

# To get a substring
print(message[0:4:1])