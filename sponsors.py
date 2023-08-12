from os import listdir, rename
from PIL import Image
from os.path import isfile, join, isdir
import os

sponsor_dir = "./new_sponsors/"
Image.MAX_IMAGE_PIXELS = 933120000


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


def get_sponsor_paths_in_formule(formule_dir, ext):
    only_files = []
    for file in listdir(formule_dir):
        if isfile(join(formule_dir, file)):
            if file.endswith(ext):
                file_path = join(formule_dir, file)
                only_files.append(file_path)
    # only_files = [f for f in listdir(formule_dir) if isfile(join(formule_dir, f))]
    only_files.sort()
    return only_files


def rename_files_containing_spaces(formule_dir):
    for sponsor in listdir(formule_dir):
        print(sponsor)
        rename(join(formule_dir, sponsor), join(formule_dir, sponsor.replace(" ", "-")))


def get_sponsors(formule_dirs, ext=".*"):
    sponsor_paths = []
    for formule in formule_dirs:
        rename_files_containing_spaces(formule)
        sponsor_paths.append(get_sponsor_paths_in_formule(formule, ext))
    return sponsor_paths


def get_size_format(b, factor=1024, suffix="B"):
    """
    Scale bytes to its proper byte format
    e.g:
        1253656 => '1.20MB'
        1253656678 => '1.17GB'
    """
    for unit in ["", "K", "M", "G", "T", "P", "E", "Z"]:
        if b < factor:
            return f"{b:.2f}{unit}{suffix}"
        b /= factor
    return f"{b:.2f}Y{suffix}"


def compress_img(
    image_name, new_size_ratio=0.6, quality=90, width=None, height=None, to_webp=True
):
    # load the image to memory
    img = Image.open(image_name)
    # print the original image shape
    print("[*] Image shape:", img.size)
    # get the original image size in bytes
    image_size = os.path.getsize(image_name)
    # print the size before compression/resizing
    print("[*] Size before compression:", get_size_format(image_size))
    if new_size_ratio < 1.0:
        # if resizing ratio is below 1.0, then multiply width & height with this ratio to reduce image size
        img = img.resize(
            (int(img.size[0] * new_size_ratio), int(img.size[1] * new_size_ratio)),
            Image.LANCZOS,
        )
        # print new image shape
        print("[+] New Image shape:", img.size)
    elif width and height:
        # if width and height are set, resize with them instead
        img = img.resize((width, height), Image.ANTIALIAS)
        # print new image shape
        print("[+] New Image shape:", img.size)
    # split the filename and extension
    filename, ext = os.path.splitext(image_name)
    # make new filename appending _compressed to the original file name
    if to_webp:
        # change the extension to JPEG
        old_uncompressed_file = f"{filename}{ext}"
        new_filename = f"{filename}.webp"

    else:
        # retain the same extension of the original image
        new_filename = f"{filename}{ext}"
    try:
        # save the image with the corresponding quality and optimize set to True
        img.save(new_filename, quality=quality, optimize=True, format="webp")
        img.save(old_uncompressed_file, quality=quality, optimize=True)
    except OSError:
        # convert the image to RGB mode first
        img = img.convert("RGB")
        # save the image with the corresponding quality and optimize set to True
        img.save(new_filename, quality=quality, optimize=True)
    print("[+] New file saved:", new_filename)
    # get the new image size in bytes
    new_image_size = os.path.getsize(new_filename)
    # print the new size in a good format
    print("[+] Size after compression:", get_size_format(new_image_size))
    # calculate the saving bytes
    saving_diff = new_image_size - image_size
    # print the saving percentage
    print(
        f"[+] Image size change: {saving_diff/image_size*100:.2f}% of the original image size."
    )


if __name__ == "__main__":
    formule_dirs = get_formules(sponsor_dir)
    sponsors = flatten(
        get_sponsors(formule_dirs, tuple([".png", ".PNG", ".JPG", ".jpg"]))
    )
    for sponsor in sponsors:
        compress_img(sponsor)
    webpSponsors = flatten(get_sponsors(formule_dirs, ".webp"))
    sponsors = flatten(
        get_sponsors(formule_dirs, tuple([".png", ".PNG", ".JPG", ".jpg"]))
    )
    print(f"Aantal sponsors: {len(sponsors)}\n")
    print(f"\n\n webpSponsors: {webpSponsors}")
    print(f"\n\n sponsors: {sponsors}")
