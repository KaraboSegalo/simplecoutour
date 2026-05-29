TABLE OF CONTENTS
1. Organisation Overview
2. Website Vision, Goals and Objectives
3. Problem Statement
4. Target Audience
5. Proposed Website Features and Functionality
6. Design and User Experience (UI/UX)
7. Technical Requirements
8. Development Approach
9. Timeline and Milestones
10. Risks and Limitations
11. References

1. Organisation Overview
Simple Couture is a fashion-focused creative initiative established in 2020. The business specialises in designing, customising, and upcycling clothing items such as T-shirts and thrift garments into modern, stylish pieces. The brand promotes sustainability by reducing textile waste and transforming existing materials into wearable fashion.

Mission: To create durable, affordable, and environmentally responsible clothing.

Vision: To become a recognised sustainable fashion brand that values creativity, quality, and ethical production.

2. Website Vision, Goals and Objectives
Vision: To create a digital platform that showcases Simple Couture’s fashion identity and products.
Goal: To establish an online presence and improve brand visibility.
Objectives:
- Build a visually appealing website
- Showcase products and brand identity
- Enable customer communication
- Improve accessibility and engagement

3. Problem Statement
Simple Couture currently has no online presence, limiting visibility and customer engagement.
4. Target Audience
- Men and women interested in fashion
- Youth interested in streetwear
- Environmentally conscious consumers
- Budget-conscious fashion buyers

5. Proposed Website Features and Functionality
Pages:
- Home
- About Us
- Shop / Products
- Gallery
- Contact

Functionality:
- Navigation menu
- Product display system
- Contact form
- Responsive design

6. Design and User Experience
Colour Scheme:
Black, white, beige, grey

Typography:
Modern sans-serif fonts

UX Principles:
- Simple navigation
- Mobile-first design
- Clear call-to-action buttons
- Fast loading experience

7. Technical Requirements
- HTML
- CSS
- JavaScript

Hosting:
- simplecouture.co.za
- 1-grid hosting

Tools:
- Visual Studio Code
- Figma
- GitHub

8. Development Approach
Phase 1: Planning
Phase 2: Design
Phase 3: Development
Phase 4: Testing
Phase 5: Deployment

9. Timeline and Milestones
- 28 April 2026: Submission
- April–May 2026: Development
- 29 May 2026: Final submission

10. Risks and Limitations
- Limited backend functionality
- Time constraints
- No full e-commerce system in Part 1

 References
1. Microsoft Visual Studio Code. IDE download. Available at: Download Visual Studio Code - Mac, Linux, Windows (Accessed: 12 March 2026) 
2. Wisepops. 35 Ecommerce Website Examples [2026]. Available at: 35 Ecommerce Website Design Examples [2026] (Accessed: 12 March 2026] 
3. Figma. Wireframes. Available at: Figma Downloads | Web Design App for Desktops & Mobile (Accessed: 12 March 2026)
4. CSS Tutorial. W3schools at: https://www.w3schools.com/Css/ (Accessed: 18 May April 2026)
5. CSS Complete Guide. GeeksforGeeks at: https://www.geeksforgeeks.org/css/css-complete-guide/ (Accesssed: 12 May 2026)
---

## PART 2: DESIGNING THE VISUALS - CSS STYLING AND RESPONSIVE DESIGN

### 2.1 External Stylesheet Implementation
✅ **Completed** - A single, centralized `css/styles.css` file has been created and linked to all HTML pages.

**File Structure:**
- Location: `css/styles.css`
- Size: Comprehensive stylesheet with CSS custom properties, typography, layout, components, and media queries
- Linked in all HTML files: `<link rel="stylesheet" href="css/styles.css" />`

### 2.2 CSS Architecture and Organization

**1. Root Variables & Color Scheme**
The stylesheet uses CSS custom properties (variables) for consistent theming:

| Variable | Value | Purpose |
|----------|-------|---------|
| `--bg` | #f7f5f0 | Light neutral background |
| `--surface` | #ffffff | White surfaces (cards, sections) |
| `--primary` | #8f5e3d | Warm brown primary color |
| `--accent` | #5a4b40 | Dark accent for emphasis |
| `--text` | #1e1b18 | Primary text color |
| `--text-light` | #5f5a55 | Secondary text color |
| `--success`, `--warning`, `--error` | Various | Status colors for feedback |

**2. Typography System**
Modern sans-serif typography with a complete scale:

| Size | Variable | Use Case |
|------|----------|----------|
| 0.75rem | `--fs-xs` | Small labels, captions |
| 0.875rem | `--fs-sm` | Subtext, meta information |
| 1rem | `--fs-base` | Body text, paragraphs |
| 1.125rem | `--fs-lg` | Larger body text |
| 1.5rem | `--fs-xl` | Section headings |
| 2rem | `--fs-2xl` | Page section titles |
| 2.5rem | `--fs-3xl` | Main page headings |

Font Weights:
- Regular (400) - Body text
- Medium (500) - Emphasis
- Semibold (600) - Subheadings
- Bold (700) - Headings

Line Heights:
- 1.2 (tight) - Headings
- 1.5 (normal) - Body text
- 1.75 (relaxed) - Large blocks

### 2.3 Base Styles and CSS Reset

**Box Model:**
- Universal `box-sizing: border-box` applied for consistent sizing
- Normalized margins and padding across all elements
- Consistent line-height and text color

**Typography Base:**
- Font family: Modern sans-serif stack with system font fallbacks
- Color contrast maintained for accessibility
- Letter-spacing adjusted on headings (-0.05em) for elegant appearance

**Layout Base:**
- Body uses flexbox with a gradient background
- Main content uses `flex: 1` for full-height layouts
- Footer positioned at bottom with semantic structure

### 2.4 Component Styling

**Navigation Bar:**
- Flexbox layout for horizontal alignment
- Responsive spacing between links
- Smooth transitions on hover
- Active state styling for current page

**Product Cards (`product-item`):**
- Rounded corners with consistent border radius
- Box shadow for depth and elevation
- Hover effects: Scale transformation and shadow enhancement
- Smooth transitions for interactive feedback

**Forms and Inputs:**
- Consistent styling across all form elements
- Focus states for accessibility
- Touch-friendly input sizes (minimum 16px for mobile)
- Clear visual hierarchy with labels

**Buttons:**
- Primary and secondary button styles
- Hover, focus, and active states
- Transform effects (translateY) for interactive feedback
- Full-width on mobile for easy tapping

### 2.5 Layout Patterns

**Flexbox Layouts:**
- Navigation: Horizontal flex with proper alignment
- Sections: Flex containers for flexible content distribution
- Forms: Flex-based field organization

**CSS Grid:**
- Product grid: `grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))`
- Auto-fits products to available space
- Maintains minimum column width for readability

**Container System:**
- Max-width: `min(95vw, 1200px)`
- Responsive padding that scales with viewport
- Centered content with `margin: 0 auto`

### 2.6 Responsive Design - Breakpoints

**Breakpoint Strategy (Mobile-First):**

| Breakpoint | Device | Layout Changes |
|-----------|--------|-----------------|
| **Base (Mobile)** | < 520px | Single-column, stacked nav, reduced spacing |
| **520px - 700px** | Small phones | Increased padding, larger text |
| **700px - 900px** | Tablets | 2-column product grid, adjusted spacing |
| **900px - 1160px** | Larger tablets | 3-column grid, more padding |
| **1160px+** | Desktop | 4-column grid, full features |
| **1400px+** | Large screens | Enhanced padding, wider container |

**Media Query Implementation:**
```css
@media (max-width: 700px) {
  /* Mobile-specific styles */
}

@media (min-width: 900px) {
  /* Tablet and above */
}

@media (min-width: 1160px) {
  /* Desktop and above */
}
```

### 2.7 Interactive States

**Hover Effects:**
- Links: Underline text decoration
- Navigation: Background color change
- Buttons: Shadow and color enhancement
- Product cards: Scale transformation (1.02x) with shadow increase

**Focus States:**
- All interactive elements have visible focus outlines
- Color: Primary brand color for consistency
- Improves keyboard navigation accessibility

**Active States:**
- Buttons: Darker color shade
- Forms: Border color change
- Clear visual feedback for user interactions

### 2.8 Spacing System

**Consistent Spacing Variables:**
- `--spacing-xs` (0.25rem) - Minimal gaps
- `--spacing-sm` (0.5rem) - Small spacing
- `--spacing-md` (1rem) - Standard spacing
- `--spacing-lg` (1.5rem) - Large gaps
- `--spacing-xl` (2rem) - Extra large spacing
- `--spacing-2xl` (3rem) - Maximum spacing

Applied consistently across:
- Padding (elements)
- Margins (spacing between elements)
- Gaps (flex and grid spacing)

### 2.9 Shadow System

**Elevation Levels:**
- `--shadow-sm` - Subtle depth (buttons, inputs)
- `--shadow-md` - Medium elevation (cards, sections)
- `--shadow-lg` - Strong elevation (modals, prominent elements)

### 2.10 Responsive Typography

**Dynamic Font Sizing with `clamp()`:**
```css
html {
  font-size: clamp(14px, 1vw, 16px);
}
```

- Minimum: 14px (smallest screens)
- Preferred: 1vw (scales with viewport)
- Maximum: 16px (large screens)
- All other sizes scale proportionally with `rem` units

### 2.11 Testing & Validation

**Desktop View (1280px):**
- ✅ 4-column product grid
- ✅ Horizontal navigation with full spacing
- ✅ Maximum content width for readability
- ✅ Full feature showcase with all details

**Tablet View (768px):**
- ✅ 2-column product grid
- ✅ Responsive spacing adjustments
- ✅ Touch-friendly navigation
- ✅ Optimized for iPad and tablet devices

**Mobile View (375px):**
- ✅ Single-column layout for easy scrolling
- ✅ Stacked navigation menu
- ✅ Full-width form fields
- ✅ Touch-optimized buttons (44px+ minimum target size)
- ✅ Readable font sizes maintained
- ✅ Optimized spacing for compact screens

### 2.12 Accessibility Features

**Color Contrast:**
- All text meets WCAG AA standards (4.5:1 ratio)
- Primary text: Dark on light backgrounds
- Links: Underlined for visibility

**Focus Management:**
- Visible focus outlines on all interactive elements
- Keyboard navigation fully supported
- Tab order logical and predictable

**Form Accessibility:**
- All inputs have associated labels
- Clear error messages and validation feedback
- Touch-friendly input sizes (16px minimum)

### 2.13 Performance Optimization

**CSS Optimization:**
- CSS custom properties for efficient theming
- Minimal CSS reflows and repaints
- Smooth transitions (0.2s) for responsive animations
- Optimized media query structure

**Image Loading:**
- `sizes` attribute for responsive images
- Browser-optimized image selection based on device
- Reduced bandwidth on mobile devices

**Summary of Part 2 Implementation:**
- ✅ Centralized external stylesheet created
- ✅ Complete CSS variable system implemented
- ✅ Typography scale with fluid sizing
- ✅ Responsive layout with multiple breakpoints
- ✅ Interactive states and visual feedback
- ✅ Accessibility standards maintained
- ✅ Performance optimizations applied
- ✅ Tested across desktop, tablet, and mobile viewports
- Focus states visible at all screen sizes with 2px outline + offset
- Form labels properly associated with inputs on all devices
- Semantic HTML structure preserved throughout responsive transformations

**CSS Enhancements:**
- Updated html font-size for viewport-aware scaling
- Optimized media query breakpoints based on real device usage patterns
- Added proper font-size clamping for smooth typography
- Enhanced transition performance for mobile devices
- Verified responsive image loading behavior

---

### Part 2: CSS Styling & Responsive Design

#### Version 2.0.0 - CSS Complete Overhaul (2026-05-28)

**Major Changes:**
- **Comprehensive CSS Reset**: Added universal reset for consistent styling across browsers. Removed duplicate rule sets and consolidated CSS variables to single :root block.
- **CSS Variable System**: Implemented extensive variable library including:
  - Color palette (primary, accent, surface, text colors)
  - Typography scale (font sizes xs to 3xl)
  - Font weights (400-700)
  - Line heights (tight, normal, relaxed)
  - Spacing scale (xs to 2xl)
  - Border radius variants
  - Shadow levels (sm, md, lg)
  - Transition timing

**Typography Enhancements:**
- Added complete heading hierarchy styling (h1-h6)
- Implemented typography scale using CSS variables
- Applied line-height optimization for readability
- Enhanced contrast ratios for accessibility
- Added font-weight hierarchy for visual emphasis

**Layout Improvements:**
- Enhanced header with background and subtle shadow
- Improved navigation with Flexbox and better hover states
- Refined section styling with enhanced shadows and hover effects
- Footer now features consistent styling with header
- Main content area uses flex-grow for proper page height

**Interactive Elements:**
- Added comprehensive hover states:
  - Navigation links: Background highlight on hover
  - Links: Text underline with focus outline
  - Buttons: Transform with enhanced shadow on hover
  - Product cards: Scale and shadow effects
  - Section cards: Lift effect on hover
- Focus states: 2px outline with offset for keyboard navigation
- Active states: Darker color feedback on click
- Smooth transitions on all interactive elements

**Form Styling:**
- Enhanced input/textarea styling with hover and focus states
- Border color change on interaction
- Box-shadow feedback for focus state
- Proper padding and border-radius for mobile usability
- Placeholder text styling for better UX

**Product Display:**
- Improved product image hover with scale transformation
- Product cards with enhanced border and shadow on hover
- Better spacing and visual hierarchy in product lists
- Consistent styling across table and grid layouts

**Responsive Design:**
- **Desktop (1160px)**: Full-width with 1160px max container
- **Tablet (900px)**: Adjusted grid to single column, tables to 50% width
- **Mobile (700px)**: Stacked navigation, full-width content
- **Small Mobile (520px)**: Optimized font sizes and spacing
- **Large Screens (1400px)**: Wider container with enhanced padding
- Fluid typography using CSS clamp() for smooth scaling
- Mobile-first media query approach

**Bug Fixes & Cleanup:**
- Removed duplicate CSS rules that were causing style conflicts
- Fixed duplicate :root variable declarations
- Consolidated all color and sizing variables into single source of truth
- Ensured consistent spacing and padding throughout
- Fixed form input width on mobile devices
- Improved button sizing consistency across breakpoints

**Accessibility Improvements:**
- Added proper focus states for keyboard navigation
- Improved color contrast ratios (WCAG AA compliant)
- Added outline-offset for better focus visibility
- Enhanced form input accessibility with hover/focus states
- Proper line-height for better text readability

---

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive design
  - CSS Variables (Custom Properties)
  - Flexbox
  - CSS Grid
  - Media Queries
  - Transitions & Transforms
  - Box-shadow & Border-radius

---

## Color Palette

| Variable | Color | Usage |
|----------|-------|-------|
| --primary | #8f5e3d | Links, buttons, brand accent |
| --accent | #5a4b40 | Headings, text emphasis |
| --surface | #ffffff | Card backgrounds |
| --bg | #f7f5f0 | Body background |
| --text | #1e1b18 | Primary text |
| --text-light | #5f5a55 | Secondary text |
| --muted | #8a8580 | Tertiary text |
| --border | rgba(31, 24, 19, 0.12) | Subtle borders |

---

## How to Run

### Local Server (HTTP)
```bash
python -m http.server 8000
```
Then open `http://127.0.0.1:8000/` in your browser.

### File System
Open any `.html` file directly in your browser using File → Open or by dragging the file to the browser.

---

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

---

## Contact Information

**Simple Couture**
- Email: [hello@simplecouture.co.za](mailto:hello@simplecouture.co.za)
- Phone/WhatsApp: [+27 067 204 7183](tel:+27067204718)
- Studio Hours: Mon - Sat, 09:00 - 18:00
- Location: Johannesburg, Gauteng, South Africa

---

## License & Copyright

© 2026 Simple Couture. All rights reserved.
Design & Development for Educational Purposes.


