# TypeScript Calculator

A clean, responsive calculator built from scratch using vanilla TypeScript, HTML, and CSS.

While the world doesn't need another calculator app, I wanted to practically use TypeScript ever since reading about the benefits of type safety. I was strict about making a logical file structure to practice industry standard work flows so I can be more prepared for future projects that address real-world issues.
While I am aware of some "quirks" and have a few ideas for features I could include, it's time to move on to another project as this exercise has run its course.

You can check out a preview with the link below:
[Vercel](calculator-nine-delta-17.vercel.app)

---

# Project Structure & Organization

The codebase is such that each file has one designated purpose. I kept the code as modular as possible for ease of readability, editing, and future scalability. Operations defines the possible inputs, CalculatorController keeps state of the current equation and checks edge cases (/0, 1.2.3, etc.), and CalculatorView brings it to life in the browser.

---

# Features

If you are auditing this code for an interview, here are a few specific design decisions I made:

**Event Delegation**: One single event listener on the interface container lets the project scale easily should I add more operators in the future as opposed to having twenty some eventlisteners, one for each button.
**Separation of Concerns**: The math engine is entirely seperate from the browser HTML, and the browser HTML doesn't know about the math formulas. The logic is completely separated from the UI, meaning each part could easily be repurposed. Perhaps not useful for a simple calculator, but for something like a login system this would be a huge potential time save on a similar future project.
**Data Protection**: Again while TS wasn't strictly necessary for this simple project, I wanted to experience how the extra work up front could benefit a project in the long term. To me TS is like taking apart a car, you can rip everything off and be left with a confusing pile of bolts 2 weeks later, or, you can label the pieces as you dissassemble, and you're left with the simplest way to put it back together. It just makes sense to me.
