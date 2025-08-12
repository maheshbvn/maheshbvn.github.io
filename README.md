# Mahesh's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. The website showcases professional experience, projects, and skills in a clean, interactive design.

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and custom classes
├── script.js           # JavaScript functionality and interactions
└── README.md           # Project documentation
```

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with glass morphism effects
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Professional Sections**: About, Projects, Experience, and Contact sections

## 🚀 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styles with modern features like backdrop-filter
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Google Fonts**: Inter font family for typography

## 📱 Sections

1. **Hero Section**: Introduction and call-to-action buttons
2. **About**: Personal information and skills
3. **Projects**: Showcase of technical projects with tags
4. **Experience**: Work history and achievements
5. **Contact**: Contact information and social links

## 🛠️ Customization

### Colors
The website uses a consistent color scheme defined in `styles.css`:
- Primary accent: `#38bdf8` (Sky blue)
- Background: `#111827` (Dark blue-gray)
- Text: `#E5E7EB` (Light gray)

### Adding New Projects
To add a new project, copy the project card structure in the HTML:

```html
<div class="glass-effect rounded-lg p-6 flex flex-col justify-between hover:border-accent transition-all duration-300 transform hover:-translate-y-2 scroll-animation">
    <div>
        <h4 class="text-xl font-bold text-white mb-2">Project Title</h4>
        <p class="text-gray-400 text-sm mb-4">Project description...</p>
    </div>
    <div class="flex flex-wrap gap-2 mt-4">
        <span class="tag">Technology 1</span>
        <span class="tag">Technology 2</span>
    </div>
</div>
```

### Modifying Styles
All custom styles are in `styles.css`. Key classes include:
- `.glass-effect`: Semi-transparent background with blur
- `.accent-color`: Sky blue accent color
- `.scroll-animation`: Fade-in animation on scroll
- `.tag`: Project technology tags

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

To modify the website:

1. **HTML Structure**: Edit `index.html` for content changes
2. **Styling**: Modify `styles.css` for visual changes
3. **Functionality**: Update `script.js` for interactive features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**B Venkata Naga Mahesh**
- GitHub: [@maheshbvn](https://github.com/maheshbvn)
- LinkedIn: [mahesh-bvn](https://www.linkedin.com/in/mahesh-bvn/)
- LeetCode: [mahesh_2004](https://leetcode.com/u/mahesh_2004/)

---

*Built with ❤️ using modern web technologies*
