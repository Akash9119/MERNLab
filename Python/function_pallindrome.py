# Check if the string is pallindrome or not using functions


def pallindrome(string):
    rev = ""
    for i in range(len(string)-1, -1,-1):
        rev = rev + string[i]

    if rev == string:
        print(f"{string} is a pallindrome")
    else:
        print(f"{string} is not a pallindrome")

pallindrome("Akash")
pallindrome("NAMAN")