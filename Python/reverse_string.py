# Reverse a string without using built in function


message = "This is the message to be reversed."

for i in range(len(message), -1, -1):
    print(message[i-1], end="")