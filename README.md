# kagancansit.github.io

Personal portfolio and technical blog built with Jekyll, hosted on GitHub Pages.

**Live Site:** [https://kagancansit.github.io](https://kagancansit.github.io)

## Overview

This repository contains the source code for my personal portfolio website. The site showcases my professional experience, technical projects, open source contributions, and blog posts focused on software engineering topics including C++, Linux, cryptography, and security.

> I'm not a web developer by trade - my focus is on C++ and security-related development. This site is a learning project, and I'm always open to feedback and contributions!

> [!WARNING]
> ## Important Notice
> Before using this repository as a template, please review the following:
> 1. **Remove Personal Content**
>   This repository contains my personal information, blog posts, and images. If you fork or clone this project, ensure you replace all personal content with your own before publishing.
> 2. **Update Configuration**
>   Modify the following files with your own information:
>   - `_config.yml` - Site title, description, social links
>   - `_includes/head.html` - Google Analytics ID or remove the tracking code
>   - `assets/images/` - Replace personal images
> 3. **Publish Only After Customization**
>   Do not publish the cloned repository until you have completed the above steps to avoid displaying someone else's personal information.

### Features

- Responsive design with dark/light theme support
- Blog system with Markdown-based posts
- Project showcase and open source contribution tracking
- SEO optimized with sitemap generation
- Fast loading with optimized assets

## Technology Stack

| Category | Technology |
|----------|------------|
| Static Site Generator | Jekyll 4.4.x |
| Hosting | GitHub Pages |
| Styling | Custom CSS (Bootstrap 4 based) |
| Icons | Font Awesome 6 |
| Analytics | Google Analytics |
| SEO | jekyll-seo-tag, jekyll-sitemap |

## Project Structure

```
kagancansit.github.io/
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components
│   ├── head.html            # Meta tags, stylesheets
│   ├── nav.html             # Navigation bar
│   ├── footer.html          # Footer section
│   └── ...
├── _layouts/                # Page templates
│   ├── default.html         # Base layout
│   ├── post.html            # Blog post layout
│   ├── page.html            # Static page layout
├── _posts/                  # Blog posts (Markdown)
├── assets/
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript
│   └── images/              # Media files
├── index.html               # Homepage
├── 404.html                 # Error page
├── robots.txt               # Search engine directives
├── Gemfile                  # Ruby dependencies
└── README.md
```

## Local Development

### Prerequisites
- Ruby 3.x
- Bundler

### Setup
```bash
# Clone repository
git clone https://github.com/KaganCanSit/kagancansit.github.io.git
cd kagancansit.github.io

# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve

# Access at http://localhost:4000
```

### Build for Production
```bash
bundle exec jekyll build
# Output generated in _site/ directory
```

## Content Management

### Adding a Blog Post

Create a new Markdown file in `_posts/` with the following format:

```markdown
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
lang: en
header_image: "/assets/images/blogs/folder/header.webp"
description: "Brief description for SEO"
---

Post content here...
```

### File Naming Convention
```
_posts/YYYY-MM-DD-post-slug.md
```

## Acknowledgments

- Base template derived from [Marvel Template](https://www.free-css.com/free-css-templates/page270/marvel)
- Icons by [Font Awesome](https://fontawesome.com/)
- Illustrations by [Freepik](https://www.freepik.com/)

## Contributing

Contributions are welcome. For bug reports or feature suggestions, please open an [issue](https://github.com/KaganCanSit/kagancansit.github.io/issues). Pull requests should target the `main` branch.s

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
