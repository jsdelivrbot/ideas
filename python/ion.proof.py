# id: python.proof@ideas.ionify.net
# by: mike.lee@iskitz
# at: 2018.01.13-08...2016.12.15-08
# is: A proof that ion: implicit object notation can be implemented in Python. For the set of methods needed to fully implement ion in python see: https://docs.python.org/3.6/reference/datamodel.html#emulating-numeric-types

class Ion:
    def getName(self):
        return "python.hipion!"

    def __repr__(self):
        print ('hipion!')
        return 'hipion!'

    def __add__(self, other):
        print ('hipion + something!')
        return 'hipion + something!'

    def __neg__(self):
        print ('-hipion!')
        return '-hipion!'

    def __pos__(self):
        print ('+' + self.getName())
        return '+hipion!'

    def __invert__(self):
        print ('~hipion!')
        return '~hipion!'

ion = Ion()
~ ion
+ ion
- ion
ion + 777
repr (ion)
print (ion)
