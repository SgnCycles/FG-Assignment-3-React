# FG - Frameworks - Assignment 3 - React SPA Website #

## Introduction ##
For this school assignment I have built an SPA website using React to test my knowledge and understanding of the core React concepts: functional components, props, state and project organization. 
The topic of the website is to showcase and give tips on sustainable living options divided in three main categories (food, clothes, electronics) each containing multiple apps and platforms with their descriptions and links in each category.

## Live Demo ##
You can checkout our website here: https://fg-assignment-3-react.vercel.app/

## Tech Stack ##
- HTML5
- CSS
- Vanilla Javascript
- React
- npm

## Project Structure ##
- **Project root**:
  - main.jsx (main application entry point)
  - App.jsx (the root component of the application)
  - package.json (project metadata and dependencies)
  - .gitignore (files excluded from the git)
  - index.css (global css file)

- **data**:
  - app.js (data file containing all the listed apps and websites)
  - footerContent.js (data file containing data for footer)
  - heroContent.js (data file containing data for hero section for each page type)
  - homepageContent.js (data file containing data for hero section for the homepage type)
  - navigation.js (data file containing the data for the navigation menu items and the hero images for each page)
  - navigationCards.js (data file containing the data for the navigation card items of the homepage)
  - pageContent.js (data file containing content for each page type)
    
- **utils**:
  - getimage.js (javascript file with the functions on getting images, icons, thumbnails)
    
- **public**:
    - favicon image
      
- **assets**
  - icons (icon files)
  - images (image files)
  - thumbnails (thumbnail files)
    
- **components**:
  - AppCard (component for each app card (including css file))
  - AppContainer (component for container holding application cards (including css file))
  - Facts (component for fact’s section for each page type (including css file))
  - Footer (component for the footer section (including css file))
  - FooterContent (component for the footer content (including css file))
  - Hamburger (component for the mobile hamburger menu (including css file))
  - Header (component for header’s section (including css file))
  - Hero (component for hero section (including css file))
  - HeroContent (component for content of the Hero section (including css file))
  - Home (component for website’s homepage (including css file))
  - Logo (component for website’s log section (including css file))
  - Main (component for main section for each page type (including css file))
  - Navigation (component for navigation menu (including css file))
  - NavigationCard (component for navigation card (including css file))
  - PageDescription (component for page description section (including css file))
  - Tips (component for Tips section (including css file))
