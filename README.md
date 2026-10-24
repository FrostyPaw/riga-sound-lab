# Riga Sound Lab

Web Programming Laboratory Work 1: a single-page music website served by Node.js and Express.js. The page is adapted from the W3.CSS band template supplied with the assignment.

## Run locally

Open a terminal in the project folder and run:

```sh
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Keep the server terminal open while using the website. Stop the server with Ctrl+C.

The project was run with Node.js 24.21.0, npm 11.19.0 and Express 5.2.1. The dependency versions are recorded in `package-lock.json`.

## Project files

```text
riga-sound-lab/
  express/
    index.html    Page content and original template scripts
    style.css     Custom paragraph, section and image styles
    effects.css   Theme styles, new buttons and reveal animation
    script.js     Custom interactions and contact form handling
  .gitignore
  package.json
  package-lock.json
  README.md
  server.js       Express server on the local computer
```

`node_modules` is created by npm and excluded from Git. Run `npm ci` after cloning the repository to install dependencies.

## Custom features

- Styled band description, section background, image borders and rounded corners.
- Dark/light theme toggle, triggered by a button click.
- Additional band information shown and hidden by a button click.
- A CSS `revealInfo` animation when the additional information appears.
- Live ticket total: quantity multiplied by $15, recalculated on the `input` event.
- An `if` condition that accepts only whole quantities from 1 to 20.
- Contact form validation and a local demo confirmation, replacing the missing `/action_page.php` target.

The slideshow, mobile navigation and ticket dialog come from the supplied template.

## Manual checks

1. Click **BAND**, then **Dark theme** and **Light theme**. The colors should change in both directions.
2. Click **Read more**. The extra paragraph should appear with an animation; **Show less** should hide it.
3. Click **TOUR**, then **Buy Tickets**. Enter `3`; the total should be `$45`.
4. Try `0`, `21`, an empty quantity or a fractional quantity. The quantity hint should replace the total.
5. Open **CONTACT**. Empty required fields and an invalid email should be rejected by the browser. Valid input should display an explicit demo confirmation on the same page.
6. On a narrow screen, open the mobile menu and use its section links.

## Versions and development

| Version | Changes |
| --- | --- |
| 1.0.0 | Express server, supplied band template and custom CSS, saved in separate commits. |
| 1.1.0 | Three custom JavaScript effects and a reveal animation. |
| 1.1.1 | Contact form navigation fix and email validation. |

The version format is `MAJOR.MINOR.PATCH`: major for changes that break compatibility, minor for compatible new features, and patch for compatible bug fixes. This lab uses these numbers to describe its development stages.

The changes were applied, run and checked locally in stages recorded by the commit history.

## Demo behavior and resources

The contact form does not send messages. The ticket dialog calculates a total; the template's PAY button does not process payments or create reservations.

The page loads W3.CSS, Font Awesome, a Google font and template images from external websites, so those resources require an internet connection. The original W3.CSS attribution is retained in the footer.
