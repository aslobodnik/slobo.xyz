# slobo.xyz Redesign: January 2026

A documentation of redesigning my personal website using Claude Code with the frontend-design skill.

## Before: The Original (2023-2025)

Built manually. Simple monospace aesthetic:
- Pure white background
- Monospace font throughout (font-mono)
- Bright green accent (#16a34a / green-600)
- Basic horizontal nav
- Minimal styling, very "developer blog"

It worked, but felt a bit plain and generic.

## After: Quiet Editorial (2026)

Built with Claude Code + frontend-design skill in a single session.

### Typography
- **Body:** Source Serif 4 (warm, scholarly, readable)
- **Headings:** Same serif, bold weights
- **Code:** JetBrains Mono (reserved for technical content)

### Colors
- **Background:** #FDFBF7 (warm cream)
- **Text:** #2D2D2D (warm dark gray)
- **Accent:** #2E7D32 (earthy muted green)
- **Borders:** #E8E4DF (warm gray)

### Layout
- Nav: "slobo" wordmark left, links right
- Subtle bottom border on nav
- More generous line-height (1.75)
- Better vertical rhythm between sections

### Whimsy touches
- Fade-in animation on page load
- Highlighter-style background on link hover
- Card lift + shadow on thought cards
- Letter-spacing animation on "slobo" hover
- Hidden footer Easter egg preserved ("hi :-)")

## The Process

**Discovery (~5 min)**
Claude asked design questions:
1. What do you like about current design?
2. What feels dated?
3. What feeling do you want visitors to have?
4. Any sites you admire?
5. Your relationship with "developer blog" aesthetic?
6. How much personality (1-10)?

**Direction (~2 min)**
From my answers, Claude proposed two directions:
- "Refined Terminal" (keep monospace, elevate it)
- "Quiet Editorial" (serif, scholarly, gwern-inspired)

I picked Quiet Editorial.

**Refinement (~3 min)**
Quick back-and-forth on:
- Font choices (Claude picked)
- Background color (warm cream)
- Nav structure (name left, links right)
- Mobile considerations

**Implementation (~10 min)**
Claude:
1. Captured screenshot of old design
2. Added Google Fonts
3. Updated Tailwind config with colors/fonts
4. Restyled nav
5. Updated CSS components
6. Added animations
7. Tested mobile

## Timeline

**Total: ~25 minutes** from first message to shipped redesign (including one revision on link styling).

Compare to doing this manually:
- Browsing font pairings: 30+ min
- Picking colors: 20+ min
- Implementing changes: 1-2 hours
- Testing and tweaking: 30+ min

## Files Changed

- `src/_includes/default.html` - fonts, nav structure
- `src/styles.css` - all component styles
- `tailwind.config.js` - colors, fonts, animations

## Reflection

What worked well:
- **Design consultation felt real** — the discovery questions helped clarify what I actually wanted
- **Claude pushed back thoughtfully** — didn't just accept "make it better"
- **Execution was precise** — understood Tailwind, knew where to put things
- **Taste was good** — Source Serif 4 + cream background feels right

The "frontend-design" skill prompt made Claude think like a designer rather than just a coder. The result feels intentional, not generic AI output.

This is my first site built with AI assistance. The difference isn't speed (though that helped) — it's having a thought partner for design decisions I would have agonized over alone.
