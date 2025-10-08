# JavaScript Function Mastery - Design Guidelines

## Design Approach: Educational Design System

**Selected Framework:** Material Design 3 principles adapted for educational content
**Rationale:** Educational platforms require clarity, excellent readability, and intuitive navigation. Material Design's emphasis on hierarchy, readable typography, and clear interaction patterns perfectly suits a learning environment while maintaining modern aesthetics.

**Key Design Principles:**
1. **Clarity First:** Every element serves the learning journey
2. **Progressive Disclosure:** Information revealed logically as users advance
3. **Visual Consistency:** Predictable patterns reduce cognitive load
4. **Interactive Confidence:** Live code execution feels safe and encouraging

---

## Color Palette

### Light Mode
- **Primary:** 236 100% 47% (Deep Blue - trust, learning, technology)
- **Primary Variant:** 236 95% 35% (Darker blue for depth)
- **Secondary:** 142 76% 36% (Forest Green - success, growth, experimentation)
- **Background:** 0 0% 98% (Soft white)
- **Surface:** 0 0% 100% (Pure white for cards/panels)
- **Surface Variant:** 220 20% 96% (Subtle gray for code blocks)
- **Text Primary:** 220 15% 20% (Near black with slight warmth)
- **Text Secondary:** 220 10% 45% (Medium gray)
- **Border:** 220 15% 88% (Soft dividers)
- **Code Background:** 220 20% 18% (Dark for contrast with light theme)
- **Success (Output):** 142 76% 36% (Green for successful execution)
- **Error:** 0 85% 58% (Red for error messages)

### Dark Mode
- **Primary:** 236 90% 65% (Lighter blue for dark backgrounds)
- **Primary Variant:** 236 85% 55%
- **Secondary:** 142 65% 55% (Softer green)
- **Background:** 220 18% 12% (Deep navy-gray)
- **Surface:** 220 16% 16% (Slightly lighter panels)
- **Surface Variant:** 220 14% 20% (Code block backgrounds)
- **Text Primary:** 220 15% 92% (Off-white)
- **Text Secondary:** 220 10% 70% (Light gray)
- **Border:** 220 12% 25% (Subtle dividers)
- **Code Background:** 220 20% 18% (Consistent with light mode)
- **Success:** 142 65% 55%
- **Error:** 0 75% 65%

---

## Typography

**Font Stack:**
- **Primary (Body/UI):** 'Inter' (Google Fonts) - exceptional readability at all sizes
- **Code/Monospace:** 'JetBrains Mono' (Google Fonts) - designed for code with ligatures
- **Headings:** 'Inter' with tighter letter-spacing for impact

**Type Scale:**
- **Hero/H1:** text-5xl (3rem) font-bold tracking-tight
- **Section/H2:** text-3xl (1.875rem) font-semibold
- **Subsection/H3:** text-xl (1.25rem) font-semibold
- **Body:** text-base (1rem) leading-relaxed
- **Small/Caption:** text-sm (0.875rem)
- **Code Inline:** text-sm font-mono bg-surface-variant px-1.5 py-0.5 rounded
- **Code Block:** text-sm font-mono leading-relaxed

---

## Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24** for consistency
- Tight spacing: 2, 4 (within components)
- Medium spacing: 6, 8 (between related elements)
- Large spacing: 12, 16, 20 (section padding)
- Hero spacing: 24 (major section separation)

**Container Strategy:**
- **Max Width:** max-w-7xl for main content areas
- **Code Editor:** max-w-5xl for optimal line length
- **Reading Content:** max-w-4xl for lesson text (60-75 characters per line)
- **Page Padding:** px-4 sm:px-6 lg:px-8

**Grid Patterns:**
- Navigation: Full-width sticky header
- Content: Single column on mobile, sidebar + content on desktop (when applicable)
- Practice exercises: 1 column mobile, 2 columns tablet/desktop for side-by-side code/output

---

## Component Library

### Navigation Components
**Top Navigation Bar:**
- Fixed position, backdrop-blur with semi-transparent background
- Logo left, nav links center, theme toggle right
- Active state: Primary color underline (border-b-2) with subtle background
- Height: h-16, shadow-sm

**Breadcrumb:**
- Below nav, using text-sm with separator chevrons
- Colors: text-secondary with primary on current page

### Content Components
**Lesson Cards:**
- Rounded-xl (12px radius) with soft shadow
- Hover: Lift effect (translate-y-1 + shadow increase)
- Border: 1px solid border color
- Padding: p-6

**Code Editor Block:**
- Dark background (code-background) regardless of theme
- Border-radius: rounded-lg
- Header bar with "JavaScript" label and "Run Code" + "Reset" buttons
- Editor area: min-height 200px, max-height 500px with scroll
- Output section below: bg-surface-variant, border-t
- Line numbers in gutter with text-secondary

**"Try It Yourself" Boxes:**
- Distinctive bg-secondary/10 background with border-l-4 border-secondary
- Icon indicator (lightbulb or code symbol)
- Clear "Try It" heading
- Integrated code editor below

**Info/Tip Boxes:**
- Light background with colored left border (blue for info, green for tips, amber for warnings)
- Icon aligned top-left
- Padding: p-4

### Interactive Elements
**Buttons:**
- Primary: bg-primary text-white, rounded-lg, px-6 py-2.5
- Secondary: border border-primary text-primary, rounded-lg
- Text/Ghost: text-primary hover:bg-primary/10
- On Images: backdrop-blur-md bg-white/10 border border-white/20 (no custom hover)

**Code Execution States:**
- Running: Spinner icon + "Executing..." text
- Success: Green checkmark + output display
- Error: Red X + error message with helpful hint

### Data Display
**Example Code Blocks (Non-editable):**
- Same dark background as editor
- Copy button top-right corner
- Syntax highlighting with consistent color scheme

**Output Display:**
- Monospace font
- Success: Green text or green left-border
- Results: White/light text on dark background
- Errors: Red text with expanded explanation option

---

## Visual Effects & Animations

**Transitions:** Use sparingly - focus on meaningful feedback
- Page transitions: Fade + slight slide (150ms)
- Hover states: 100ms ease-in-out
- Code execution: Progress indicator during run
- Section reveals: Subtle fade-in on scroll (optional enhancement)

**Shadows:**
- Cards: shadow-sm default, shadow-md on hover
- Modals/overlays: shadow-2xl
- Code editor: shadow-lg (elevated importance)

---

## Images

**Hero Section (Home Page):**
- Large hero image showing abstract code visualization or javascript code patterns
- Overlay: Linear gradient from dark (bottom) to transparent for text legibility
- Placement: Full-width, h-96 on desktop, h-64 on mobile
- Content overlay: Centered, max-w-4xl with white text and primary CTA button

**Section Illustrations:**
- Conceptual diagrams for scope, closures, call stack (use placeholder illustrations)
- Visual analogies for complex concepts (e.g., closure as nested boxes)
- Placement: Alongside explanatory text, max-w-md to max-w-2xl

**No stock photos of people** - focus on code visualizations and abstract tech imagery

---

## Responsive Breakpoints

**Mobile (< 640px):**
- Single column layouts
- Stacked navigation (hamburger menu)
- Full-width code editor
- Reduced padding (p-4)

**Tablet (640px - 1024px):**
- Two-column grids where applicable
- Horizontal navigation visible
- Code editor with comfortable margins

**Desktop (> 1024px):**
- Max-width containers centered
- Sidebar navigation for lessons (if implemented)
- Side-by-side code/output in practice areas
- Optimal line length for reading (max-w-4xl)

---

## Accessibility & Usability

- High contrast ratios (WCAG AAA for body text)
- Focus indicators: 2px primary color ring with offset
- Keyboard navigation: Tab through all interactive elements
- Code editor: Support keyboard shortcuts (Ctrl+Enter to run)
- Dark mode toggle: Smooth transition, persisted preference
- Error messages: Clear, actionable, beginner-friendly language
- Form inputs: Consistent dark backgrounds in both modes with proper contrast