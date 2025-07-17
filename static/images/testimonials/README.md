# Testimonial Profile Images

This directory contains profile images for testimonials displayed on the website.

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: 200x200px minimum (square aspect ratio recommended)
- **File naming**: Use kebab-case naming convention (e.g., `sarah-chen.jpg`)
- **Optimization**: Images should be optimized for web to ensure fast loading

## Current Images

The following profile images are referenced in the testimonials:

1. `sarah-chen.jpg` - Sarah Chen, Senior Frontend Engineer
2. `marcus-rodriguez.jpg` - Marcus Rodriguez, Lead Backend Developer  
3. `emily-watson.jpg` - Emily Watson, DevOps Engineer
4. `david-kim.jpg` - David Kim, Full Stack Developer
5. `priya-patel.jpg` - Priya Patel, Technical Lead

## Fallback Behavior

If an image fails to load, the system will automatically generate a fallback avatar using the person's name with the UI Avatars service. The fallback uses a dark theme to match the card design.

## Adding New Images

1. Add the image file to this directory
2. Update the `src/data/testimonials.json` file with the correct path
3. Ensure the image is optimized and follows the naming convention

## Data Structure

Each testimonial in the JSON file should include:
- `id`: Unique identifier
- `name`: Person's full name
- `designation`: Job title/role
- `profilePicture`: Path to image file
- `text`: Testimonial content