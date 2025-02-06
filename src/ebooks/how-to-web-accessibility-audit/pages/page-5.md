---
title: "Accessibility checklist: what to look for on each page"
image: QA_Portrait.png
image-alt: A women with a thumbs up in front of several web page elements like forms and and charts
layout: page
---
[Keep track of your progress with this manual audit spreadsheet](https://docs.google.com/spreadsheets/d/1EDh0nzHF-LroFjLmSGLib4ylLaNe8_Tm-J1KcSSIf4I/edit?gid=0#gid=0).

Make sure your website works for everyone by checking these key areas:

1. **Screen reader:** Test with popular screen readers like JAWS, NVDA, or VoiceOver. Ensure all elements provide context, can be* accessed easily, and don't "trap" users.

2. **Keyboard:** Ditch the mouse and navigate only with your keyboard. Note the elements you cannot access or interact with, and watch for lost focus—it may signal a missing focus state or movement to a hidden element.
    - [WCAG 2.2 Level A: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
    - [WCAG 2.2 Level A: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)

3. **Usability & flow:** Is everything intuitive and predictable? Buttons should look and function like buttons, links should look and function like links, and so on. Check the tab order to ensure a smooth, logical experience.
    - [WCAG 2.2 Level A: Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

4. **Forms:** Ensure all forms have the appropriate semantic elements and attributes and have a label to provide context. If a captcha is used, be sure there are alternatives to accommodate different disabilities.
    - [WCAG 2.2 Level A: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
    - [WCAG 2.2 Level AA: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
    - [WCAG 2.2 Level A: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

5. **Dialog boxes and popups:** Make sure dialogs are accessible by using proper semantic elements and managing focus—moving it in when opened, looping within, and returning it when closed.
    - [WCAG 2.2 Level A: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
    - [WCAG 2.2 Level A: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
    - [WCAG 2.2 Level A: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)

6. **Multimedia:** Make media accessible—audio should have transcripts, videos should have captions and descriptions along with pause options for autoplay, and all text-based graphics should have alt text.
    - [WCAG 2.2 Level A: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html) 
    - [WCAG 2.2 Level A: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)
    - [WCAG 2.2 Level A: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)
    - [WCAG 2.2 Level A: Captions (Live)](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html)
    - [WCAG 2.2 Level A: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)

7. **Links and buttons:** Make sure links and buttons use the correct semantic elements and have text that provides enough context to describe the link or action.
    - [WCAG 2.2 Level A: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
    - [WCAG 2.2 Level A: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) 
    - [WCAG 2.2 Level AAA: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)

8. **Logical headings:** Use headings correctly—there should only be one H1 per page, and they should follow a logical order. This helps screen reader users navigate efficiently.
    - [WCAG 2.2 Level A: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
    - [WCAG 2.2 Level A: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) 

9. **Skip navigation links:** The "skip to main content" link should be the first focusable element on the page, helping users skip past the main menu.
    - [WCAG 2.2 Level A: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)

10. **Images:** Add alt text to all images—use empty alt for decorative ones. You should avoid text in images, but if needed, include it in the alt text.
    - [WCAG 2.2 Level A: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
    - [WCAG 2.2 Level AA: Images of text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html)

11. **Data tables:** Ensure tables have necessary column and row headings, groups, captions, and summaries to aid navigation for all users.
    - [WCAG 2.2 Level A: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
    - [WCAG 2.2 Level A: Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)

12. **iFrame titles:** Include descriptive title attributes for iFrames on the page.
    - [WCAG 2.2 Level AA: Heading and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)

13. **Colors and contrast:** Ensure text has at least 4.5:1 contrast with the background, and UI elements meet a 3:1 ratio. Don't rely on color alone to show actions—use additional cues.
    - [WCAG 2.2 Level AA: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) 
    - [WCAG 2.2 Level A: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
    - [WCAG 2.2 Level A: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

14. **Font size/zoom:** Users should be able to scale text without breaking the design when adjusting their browser's font-size settings. 
    - [WCAG 2.2 Level AA: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

15. **Touch-friendly elements:** Ensure buttons and inputs are a minimum of 24 by 24 pixels for mobile users.
    - [WCAG 2.2 Level AA: Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

16. **Animations:** Give users control over the animation and respect their system preferences for reduced motion. (Level AAA). 
    - [WCAG 2.2 Level A: Pase, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
    - [WCAG 2.2 Level AAA: Animation from Interaction](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)

17. **Focus states:** Every focusable element must have a focus state. Focus should never be "lost" while tabbing through the page.
    - [WCAG 2.2 Level AA Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

As you did with the automated audit, list the issues you find in a document or as tickets in your project management system of choice.
