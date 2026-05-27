# To give random number using while loop
import random


random_num = random.randint(1,100)
tries = 0
while True:
    n = int(input("Enter a numer between 1 and 100: "))
    if n == random_num:
        tries+=1
        print(f"You guessed the right number in {tries}")
        break
    elif n > random_num:
        print("Go a little lower")
        tries+=1
    elif n < random_num:
        print("Goa little higher")
        tries+=1
    else:
        print("wrong number")
        tries+=1
