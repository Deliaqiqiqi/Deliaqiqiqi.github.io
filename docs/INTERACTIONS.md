# Interaction requirements

- Cover: one staggered YAQI type entrance, anchor navigation to all main sections.
- About: handwritten introduction, gently swaying portrait, native range slider. Releasing the slider at 92% or higher opens the Identity Story. A visible text button is an alternative for keyboard/touch users.
- Identity: a separate hash view (#identity), outside the normal homepage flow. Typewriter headings precede two crossing circles and the remaining copy. Back restores the previous scroll position and trigger focus; browser back is supported. Reduced motion shows the complete story immediately.
- Experience: the supplied PDF opens from View CV in a new tab. Company detail disclosures remain keyboard accessible.
- Design: three items in a perspective carousel, with previous/next, keyboard arrows and horizontal pointer swipe. Active project description updates together with its image. Equivalent behavior is implemented with Motion rather than introducing a second animation library.
- Content creation: green phone links to https://mp.weixin.qq.com/s/C1ubfgpUxp5H3y9mwjOTYw and pink phone to https://mp.weixin.qq.com/s/XPVP9yBy1zXWkIPdd16m1g as specified in slide notes. Descriptions follow the phones. External availability is controlled by WeChat.
- Social: five supplied screenshots flip by click, Enter or Space; hover is not required.
- Photography: Concerts and Paris Fashion Week collections. Desktop accordion selection supports hover and click. Mobile uses a horizontal swipe gallery. View photograph opens native dialog with previous/next and Escape to close.
- Contact: scroll separates JIANG and YAQI and reveals the portrait. Email and telephone links remain usable regardless of animation progress.
- Every control has a focus state and touch-sized hit area. prefers-reduced-motion removes displacement and looping motion. No scroll hijacking.
