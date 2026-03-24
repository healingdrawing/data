# create the sequence of frames from one png, with looped hue offset
from PIL import Image
import colorsys

def rotate_hue(image, hue_shift):
    # Convert image to RGB
    image = image.convert('RGB')
    # Get pixel data
    pixels = list(image.getdata())
    
    # Create a new list for the modified pixels
    new_pixels = []
    
    for pixel in pixels:
        # Normalize RGB values to [0, 1]
        r, g, b = [x / 255.0 for x in pixel]
        # Convert RGB to HLS
        h, l, s = colorsys.rgb_to_hls(r, g, b)
        # Rotate hue
        h = (h + hue_shift) % 1.0
        # Convert back to RGB
        r, g, b = colorsys.hls_to_rgb(h, l, s)
        # Append the new pixel
        new_pixels.append((int(r * 255), int(g * 255), int(b * 255)))
    
    # Create a new image with the modified pixels
    new_image = Image.new(image.mode, image.size)
    new_image.putdata(new_pixels)
    return new_image

def create_hue_frames(input_file, output_prefix, hue_steps=10):
    # Open the original image
    original_image = Image.open(input_file)
    
    # prepare shifts of hue
    dhue = 1/hue_steps
    hue_shifts = [dhue * x for x in range(hue_steps)]

    # Generate frames
    for hue_shift in hue_shifts:  # 360 degrees / 10 degrees per step = 36 frames
        new_image = rotate_hue(original_image, hue_shift)
        new_image.save(f"{output_prefix}-{int(hue_shift/dhue):02d}.png")

# Usage
create_hue_frames("day7.png", "day7")