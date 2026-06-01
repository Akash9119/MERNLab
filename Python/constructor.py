# Create a factory constructor for bags and pass 3 perameters like material, zips, pockets


class Factory:
    def __init__(self, material, zips, pockets):
        self.material = material
        self.zips = zips
        self.pockets = pockets
    
    def show(self):
        print(f"The materials is {self.material} with total {self.zips} zips and {self.pockets} pockets.")
        
nike = Factory('nylon', 3, 2)

ly = Factory('cotton', 5, 8)

ly.show()