# Arketa Website - Image Management Guide

## 📁 Folder Structure

```
arketa-website/
├── public/
│   └── images/
│       └── portfolio/          ← Put your portfolio images here
│           ├── project1.jpg
│           ├── project2.jpg
│           └── ...
├── src/
│   ├── App.jsx
│   ├── portfolioData.js        ← Edit this to manage portfolio
│   └── ...
```

## 🖼️ How to Add Your Own Images

### Step 1: Create the Images Folder
1. Go to the `public` folder in your project
2. Create a new folder called `images`
3. Inside `images`, create a folder called `portfolio`

Your path should be: `public/images/portfolio/`

### Step 2: Add Your Photos
- Copy your project photos into `public/images/portfolio/`
- Recommended image specs:
  - **Format**: JPG or PNG
  - **Size**: 1200px width minimum (for quality)
  - **Aspect ratio**: 4:3 works best (e.g., 1600x1200)
  - **File names**: Use descriptive names without spaces
    - ✅ Good: `black-galaxy-kitchen.jpg`
    - ❌ Bad: `IMG_1234.jpg` or `my photo.jpg`

### Step 3: Update portfolioData.js
Open `src/portfolioData.js` and edit the portfolio items:

```javascript
export const portfolioItems = [
  {
    id: 1,
    material: 'granite',  // granite, quartz, quartzite, or marble
    title: 'Black Galaxy Kitchen',
    image: '/images/portfolio/black-galaxy-kitchen.jpg',  // ← Your image path
    description: 'Elegant black granite with gold flecks'
  },
  // Add more projects...
];
```

### Step 4: That's It!
Save the file and your images will appear on the website automatically!

## ✏️ How to Add/Remove Projects

### To Add a New Project:
```javascript
{
  id: 10,  // Use next available number
  material: 'quartz',
  title: 'Modern White Kitchen',
  image: '/images/portfolio/modern-white-kitchen.jpg',
  description: 'Clean and contemporary quartz installation'
}
```

### To Remove a Project:
Simply delete the entire object block from the array.

## 📝 Editing Company Information

All company info is in `portfolioData.js`:

```javascript
// Update contact information
export const contactInfo = {
  phone: '(555) 123-4567',      // ← Change this
  email: 'info@arketa.com',      // ← Change this
  address: {
    street: '123 Stone Avenue',  // ← Change this
    city: 'Cityville',
    state: 'ST',
    zip: '12345'
  },
  hours: 'Mon-Fri: 8am - 6pm'
};

// Update statistics
export const companyStats = {
  yearsExperience: '20+',        // ← Change this
  projectsCompleted: '500+',     // ← Change this
  satisfactionRate: '100%'       // ← Change this
};
```

## 🎨 Image Tips for Best Results

1. **Consistent lighting**: Try to have similar lighting across photos
2. **Clean shots**: Remove clutter from backgrounds
3. **Multiple angles**: Show different perspectives of your work
4. **Before & After**: Consider creating comparison images
5. **Optimize file size**: Use tools like TinyPNG to compress without quality loss

## 🔄 Quick Update Workflow

1. Add new images to `public/images/portfolio/`
2. Open `src/portfolioData.js`
3. Add new entry with image path
4. Save - changes appear immediately in development
5. Refresh browser to see updates

## 📱 About Image Paths

Images in the `public` folder are referenced starting with `/`:
- ✅ Correct: `/images/portfolio/my-image.jpg`
- ❌ Wrong: `images/portfolio/my-image.jpg`
- ❌ Wrong: `./images/portfolio/my-image.jpg`

## 🚀 Need Help?

If images aren't showing:
1. Check the file path spelling matches exactly
2. Make sure images are in `public/images/portfolio/`
3. Check browser console for errors (F12 → Console tab)
4. Try refreshing the page (Ctrl+R or Cmd+R)

The website includes fallback images from Unsplash, so if your local image fails to load, a placeholder will show instead.