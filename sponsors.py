from os import listdir, rename
from os.path import isfile, join, isdir

sponsor_dir = "./sponsors/"

def flatten(list):
    return [x for xs in list for x in xs]

def get_formules(root_dir=sponsor_dir):
    sub_dirs = []
    for file in listdir(root_dir):
        dir = join(root_dir, file)
        if isdir(dir):
            sub_dirs.append(dir)
    sub_dirs.sort(reverse=True)
    return sub_dirs

def get_sponsor_paths_in_formule(formule_dir):
    only_files = []
    for file in listdir(formule_dir):
        if isfile(join(formule_dir,file)):
            file_path = join(formule_dir,file)
            only_files.append(file_path)
    # only_files = [f for f in listdir(formule_dir) if isfile(join(formule_dir, f))]
    only_files.sort()
    return only_files

def rename_files_containing_spaces(formule_dir):
    for sponsor in listdir(formule_dir):
        print(sponsor)
        rename(join(formule_dir, sponsor), join(formule_dir, sponsor.replace(' ', '-')))

def get_sponsors(formule_dirs):
    sponsor_paths = []
    for formule in formule_dirs:
        rename_files_containing_spaces(formule)
        sponsor_paths.append(get_sponsor_paths_in_formule(formule))
    return sponsor_paths





formule_dirs = get_formules(sponsor_dir)
sponsors = flatten(get_sponsors(formule_dirs))
print(f"Aantal sponsors: {len(sponsors)}\n")
print(sponsors)