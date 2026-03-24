# create from animated gif the new gif with looped hue offset and looped lightness offset
from PIL import Image
import colorsys
import math

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

def rotate_lightness(image, lightness_shift):
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
        
        # Apply sinusoidal adjustment to lightness
        # l = l + math.sin(lightness_shift * math.pi) + 1  # Normalize to [0, 1]
        # l = 0.5 + math.sin((lightness_shift) * 6.2831853 + math.asin((0.5 - l) * 2.0)) * 0.49
        l = 0.39 + math.sin((lightness_shift) * 6.2831853 + math.asin((0.5 - l) * 2.0)) * 0.4
        
        # Convert back to RGB
        r, g, b = colorsys.hls_to_rgb(h, l, s)
        # Append the new pixel
        new_pixels.append((int(r * 255), int(g * 255), int(b * 255)))
    
    # Create a new image with the modified pixels
    new_image = Image.new(image.mode, image.size)
    new_image.putdata(new_pixels)
    return new_image

def create_hue_frames(input_file, output_gif, hue_loops = 1, lightness_loops = 8, reverse_gif = False, reverse_hue = True, reverse_lightness = False, repeat_gif = 8):
    # Open the original image
    original_image = Image.open(input_file)
    
    steps = original_image.n_frames * repeat_gif

    # prepare shifts of hue
    dhue = 1*hue_loops/steps
    hue_shifts = [dhue * x if (dhue * x) < 1 else (dhue * x)-1  for x in range(steps)]
    print("hue_shifts", hue_shifts)
    if reverse_hue: hue_shifts.reverse()
    
    dlis = 1*lightness_loops/steps
    ligs_shifts = [dlis * x for x in range(steps)]
    print("ligs_shifts", ligs_shifts)
    if reverse_lightness: ligs_shifts.reverse()

    # prepare frames, using copy original sequence
    frames = []
    
    for frame_number in range(original_image.n_frames):
      if reverse_gif: frame_number = steps - frame_number - 1
      original_image.seek(frame_number)
      frame = original_image.copy()
      frames.append(frame)
    frames *= repeat_gif
    print("gif frames", original_image.n_frames)
    print("frames ", len(frames))

    # Generate frames
    for frame_number in range(steps):
        frame = frames[frame_number]
        hue_shift = hue_shifts[frame_number]
        frame = rotate_hue(frame, hue_shift)
        ligs_shift = ligs_shifts[frame_number]
        frame = rotate_lightness(frame, ligs_shift)
        frames[frame_number] = frame
        # print("frame number", frame_number, "l_shift", ligs_shift, "hue_shift", hue_shift)
    
    frames[0].save(output_gif, save_all=True, append_images=frames[1:], optimize=True, duration=60, loop=0)


# Usage
create_hue_frames("trip.gif", "dope.gif")