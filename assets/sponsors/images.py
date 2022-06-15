from os import listdir
from os.path import isfile, join

mypath = "./assets/sponsors/"

onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
print(onlyfiles)