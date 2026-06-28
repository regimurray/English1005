# ENG 1005 · Interactive Grammar & Mechanics Exam
### Writing About Mystery and Thriller — Workshop Project

An interactive, self-grading web exam built for **ENG 1005: Writing About Mystery
and Thriller**. It turns a traditional paper grammar-and-mechanics test into a
browser-based exam that students can take online, grades itself instantly, and
reports a score with a section-by-section breakdown.

This project was built with **Claude Code Web** as a multi-file application
developed over several commits — not a single all-at-once generation.

---

## Why this project (discipline relevance)

The exam content is original course material for ENG 1005. Every question is
grounded in the **mystery and thriller genre** we study — detectives, locked
rooms, alibis, missing clues, and unreliable witnesses — so students practice
sentence structure, punctuation, and mechanics using the kind of prose they
read and write in this course, rather than generic textbook examples.

The exam covers ten areas of sentence-level writing:

| Section | Focus |
|---|---|
| A | Independent vs. subordinate clauses |
| B | Sentence fragments |
| C | Comma splices & fused (run-on) sentences |
| D | Commas |
| E | Semicolons & colons |
| F | Coordination & subordination |
| G | Parallelism |
| H | Misplaced & dangling modifiers |
| I | Subject-verb agreement & pronoun case |
| J | Editing a full passage |

## Features

- **49 multiple-choice questions** across 10 sections.
- **Auto-grading** with an animated score ring and letter grade.
- **Section-by-section breakdown** so students see their strengths and weaknesses.
- **Review mode** that re-shows every question marked correct/incorrect.
- **One attempt per browser**, enforced with `localStorage`.
- **Responsive blue design** that works on phones, tablets, and laptops.

## Project structure

```
.
├── index.html        # Page structure (start screen, exam, results)
├── css/
│   └── styles.css    # Blue visual theme and layout
├── js/
│   ├── questions.js  # The exam question bank (original course material)
│   └── app.js        # Builds the exam, grades it, handles the one-attempt lock
├── README.md         # This file
│
└── (study guides)
    ├── grammar-exam-multiple-choice.md          # Full exam + instructor answer key
    └── grammar-exam-multiple-choice-student.md  # Student practice version (no key)
```

Separating the **questions** from the **logic** means the exam can be updated by
editing `js/questions.js` alone — no need to touch the application code.

## How to run it

**Locally:** download the project and open `index.html` in any web browser.

**Online (for students):** the project is published with **GitHub Pages**.
With Pages enabled for this repository, the exam is available at:

```
https://regimurray.github.io/English1005/
```

## How it was built

Developed iteratively with Claude Code Web:

1. Converted an existing paper exam into an all-multiple-choice format.
2. Built an interactive, self-grading single-page version.
3. Redesigned the interface (start screen, progress bar, score ring, review mode).
4. Refactored into a clean multi-file structure (HTML / CSS / JS) and documented it.

## Note on the one-attempt limit

The single-attempt lock is stored in the student's own browser, so it prevents a
retake **in that browser** but is not tamper-proof across devices. For a graded,
secure exam with automatic score collection, a learning-management system
(Canvas, Blackboard) or Google Forms would be the next step.
