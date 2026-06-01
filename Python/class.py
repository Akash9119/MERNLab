# attributes and methods inside a class in python


class Factory:
    a = 12 #attribute
    
    def hello(self): #method
        print("Hello from class")
    
    print("Print on the initialization of class i.e. on the first run of the program")

# To create a object from a class call the class
Factory()

# To print attribute inside a class
print(Factory.a)
Factory().hello()