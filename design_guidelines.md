# SDG 7 Educational Website - Design Guidelines

## Design Approach: Reference-Based with Custom Educational UI

**Primary Inspiration**: The provided dark theme reference with vibrant green accents, combined with modern educational platform patterns (Khan Academy, Coursera) for clarity and engagement.

**Justification**: Educational STEM content requires both visual appeal to engage students and clear information hierarchy for comprehension. The dark theme creates focus while green accents symbolize sustainability and energy.

---

## Core Design Elements

### A. Color Palette

**Dark Mode Foundation** (Primary):
- Background Primary: 220 20% 10% (Deep navy-black)
- Background Secondary: 220 18% 14% (Elevated surfaces/cards)
- Background Tertiary: 220 16% 18% (Hover states, subtle elevation)

**Energy Green System** (Brand):
- Primary Green: 142 76% 45% (Vibrant SDG 7 green - CTAs, headers)
- Green Accent: 142 71% 38% (Hover states, secondary actions)
- Green Glow: 142 76% 45% (Soft glow effects at 20% opacity)

**Supporting Colors**:
- Text Primary: 0 0% 95% (Main content)
- Text Secondary: 0 0% 70% (Descriptions, metadata)
- Chart Blue: 210 100% 60% (Data visualization)
- Chart Orange: 30 100% 65% (Comparison data)
- Warning/Alert: 45 93% 58% (Energy consumption alerts)

### B. Typography

**Font Families** (Google Fonts CDN):
- Headlines: 'Space Grotesk' - Modern, tech-forward (SDG title, page headers)
- Body: 'Inter' - Excellent readability (Paragraphs, descriptions, data)
- Data/Stats: 'JetBrains Mono' - Monospace for numbers and technical content

**Type Scale**:
- Hero Title: text-6xl md:text-7xl font-bold (Space Grotesk)
- Section Headers: text-4xl md:text-5xl font-bold
- Subsections: text-2xl md:text-3xl font-semibold
- Body: text-base md:text-lg leading-relaxed
- Captions: text-sm text-secondary

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, gap-6, my-8, py-12, space-y-16, py-20)

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl for optimal readability

**Grid Systems**:
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Data displays: grid-cols-2 md:grid-cols-4 gap-4 (stats)
- Team profiles: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8

### D. Component Library

**Navigation**:
- Sticky header with dark blur background (bg-background/80 backdrop-blur-lg)
- SDG 7 logo/icon on left, horizontal nav links center, "Take Action" CTA right
- Mobile: Hamburger menu transforming to full-screen overlay
- Active page indicator: Green underline (border-b-2 border-primary)

**Cards & Surfaces**:
- Base card: bg-secondary rounded-xl border border-white/10 p-6
- Hover effect: Transform scale-105 + green glow shadow
- Glass effect for stats: backdrop-blur-md bg-white/5

**Data Visualization**:
- Chart.js integration for interactive graphs
- Green + Blue color scheme for consistency
- Glassmorphic chart containers with subtle borders
- Tooltips: Dark bg with green accent borders

**Interactive Elements**:
- Primary CTA: bg-primary text-black rounded-lg px-8 py-4 hover:bg-accent
- Secondary: variant="outline" with green border on dark bg, blurred background when over images
- Icon buttons: Heroicons with green hover states
- Survey forms: Dark inputs with green focus rings (ring-2 ring-primary)

**Content Sections**:
- Timeline for STEM solutions (vertical green line connector)
- Accordion FAQs with green expand indicators
- Icon + Text feature blocks (grid layout)
- Infographic sections with illustrated data points

### E. Page-Specific Elements

**Home Page**:
- Hero: Large SDG 7 icon illustration, bold title "Affordable & Clean Energy", compelling slogan beneath
- Overview cards: 3-column grid explaining energy access, renewable targets, efficiency goals
- Scroll indicator: Animated green chevron

**The Challenge**:
- Split sections alternating image/data left-right
- Embedded Chart.js graphs (energy gap statistics, carbon emissions)
- Interactive world map with energy access data hotspots
- Stat counters with animated number increments

**STEM Solutions**:
- Solution cards: Icon, title, description, "Learn More" expansion
- Technology comparison table with checkmarks/features
- Case study highlights with before/after metrics
- Innovation timeline with milestone markers

**Take Action**:
- Action cards: "At Home", "At School", "In Community" categories
- Interactive survey form with progress indicator
- Downloadable resources section (PDF guides)
- Social share buttons for impact multiplication

**About the Group**:
- Team member cards: Circular photo placeholder, name, role, brief bio
- Contribution metrics per member
- Contact/social links with green hover states

### F. Images Strategy

**Hero Section**: Large energy-themed illustration (solar panels, wind turbines, sustainable city) - abstract, vibrant style matching dark theme

**Section Backgrounds**: Subtle geometric patterns, gradient overlays (dark to darker with green tint)

**Content Images**: 
- Challenge page: Real-world photos of energy poverty, renewable installations
- STEM Solutions: Technology diagrams, clean energy infrastructure
- About page: Team photo placeholders (silhouettes with green accent borders)

All images should have green-tinted overlays or borders for brand consistency.

---

## Key Interaction Patterns

- Smooth scroll behavior between sections
- Page transitions: 300ms fade
- Card hover: Lift + glow effect
- Data reveals: Intersection Observer triggering count-up animations
- Survey submission: Success state with confetti effect (green particles)
- Chart interactions: Hover tooltips, clickable legend filters

**Accessibility**: WCAG AA compliant contrast ratios, keyboard navigation support, ARIA labels on interactive elements, dark mode optimized for reduced eye strain during extended reading.