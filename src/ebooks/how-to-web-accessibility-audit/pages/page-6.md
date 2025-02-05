---
title: "Elements that require extra attention"
image: Accessibility_Landscape.png
image-alt: A finger pushing a button on a website, surrounded by icons of an ear and an eye.
layout: page
tags:
  - chapter
---
### Sliders (or carousels)
To make sliders accessible, follow these key guidelines:
- **No auto-rotation:** Carousels should only move when the user triggers the movement. Auto-rotation can be disruptive for users with ADHD, motion sensitivity, or visual impairments. 
- **Screen reader notifications:** When the slide changes, the screen reader should notify the user and read out the content. 
- **Hidden content:** The content on hidden slides should not be accessible to screen readers or keyboard users.
- **Navigation:** Whether the slider uses arrow, dot, or thumbnail navigation, they need to be marked up as buttons, reach the minimum target size of 24px by 24px (preferably 40px by 40px), have appropriate text-alternative labels, and focus should move to the newly visible slider when the navigation is triggered.

Learn more about the [Carousel (Slide Show or Image Rotator) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).

### Modals
Make modals accessible with these best practices: 
- **Focus handling:** When the modal is opened, the focus should automatically move to the first focusable element in the modal. Focus should then only loop among focusable elements in the modal, never moving “behind” the modal. When the modal is closed, focus should return to the element that triggered the modal to open.
- **Close modal:** Include a visible “close” button with an appropriate text alternative if an icon is used. The Escape key should also close the modal.
- **Screen reader compatibility:** The screen reader should not be able to read the contents of the modal unless it’s open. Use aria-modal=”true” and role=”dialog”  so screen readers recognize the content they’re interacting with is a modal.

Learn more about the [Dialog (modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### Accordions
Enhance accordion accessibility by considering the following:
- **Semantic elements:** Use an HTML button element for the accordion trigger to ensure keyboard users can navigate it with standard keyboard commands.
- **Attributes:** Apply `aria-expanded` and `aria-controls` to triggers, and `aria-labelledby` with `role="region"` for panels, helping screen reader users understand the structure.
- **Hidden content:** Ensure the hidden content cannot be tabbed to or read by screen reader users until the accordion is open.

Learn more about the [Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

### Videos
Below are some common issues to spot with video and audio players:
- **Transcripts:** Provide transcripts for audio-only media to support hearing-impaired users and benefit anyone who prefers reading, forgot their headphones, or is in a noisy space.
- **Captions:** Add captions to pre-recorded videos with sound to benefit all users. If a video is silent, let screen reader users know to avoid confusion.
- **Audio descriptions:** Offer audio descriptions of video, whether it has audio or not so blind users understand the context of the video as it plays.
- **Screen reader and keyboard support:** The audio and video players themselves must be accessible for screen readers, assistive technology, and keyboard users. 
- **Pause button for autoplay videos:** No pause button is a common issue, as many websites have an auto-playing video on their homepage hero. This is crucial for users who are motion-sensitive or prone to seizures. Again, this could be considered an enhancement for all users, as many people get distracted by movement on a page.

Learn more about a [media accessibility checklist](https://www.w3.org/WAI/media/av/planning/).

### Main menus
Main menus are arguably the most important part of a website, so pay careful attention. Here are some ways to make navigation intuitive and accessible:
- **Keyboard support:** Ensure all dropdown menus and links can be accessed via keyboard navigation.
- **Target sizes:** Ensure the target sizes for dropdown and hamburger buttons are at least 24 by 24 pixels. 
- **Screen reader support:** Use semantic markup and aria attributes to provide necessary context to screen reader users. Relevant semantic elements can include `<nav>`, `<h2>`, `<ul>`, `<li>`, `<button>`, `<a>`. If using a `<nav>` element, ensure it is labeled with an `aria-label` or `aria-labelledby` attribute. `aria-expanded` and `aria-control` attributes should be used for dropdowns.
