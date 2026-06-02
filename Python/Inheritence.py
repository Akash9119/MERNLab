# Create a parent class and child class the child class will inharit the parent class

class ParentClass:
    a = "This is from the parent class."

    def obj(self):
        print("This is from a method inside parent class.")
        
class ChildClass(ParentClass):
    pass

first = ParentClass()

print(first.a)

second = ChildClass()

print(second.obj())