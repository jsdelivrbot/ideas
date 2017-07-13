# id: python.proof@ideas.ionify.net
# by: mike.lee@iskitz
# at: 2017.07.13-07...2016.12.15-08
# is: A proof that ion: implicit object notation can be implemented in Python

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
        print ('+' + self.getName())#self.name)
        return '+hipion!'

    def __invert__(self):
        print ('~hipion!')
        return '~hipion!'

ion = Ion()
+ion
repr (ion)
print (ion)
ion + 777