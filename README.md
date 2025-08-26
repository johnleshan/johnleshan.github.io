# johnleshan.github.io

## Automated Testing

This project includes a basic DOM test suite in `script.test.js` to verify core functionality of the portfolio website.

### What is tested

- Navigation links point to valid sections.
- Theme toggle (light/dark mode) works correctly.
- Responsive design (mobile toggle visibility).
- Layout sections are present.
- Forms (if any) are valid.
- Social profile links are present.
- Project buttons have click handlers.
- Footer links point to valid sections.
- All images have `alt` attributes for accessibility.

### How to run the tests

1. Ensure `script.test.js` is present in the project folder.
2. Add the following line to your `index.html` (for testing only):
   ```html
   <script src="script.test.js"></script>
   ```
3. Open the website in your browser.
4. Open the browser console (F12 or Ctrl+Shift+I) to view test results.

**Note:** Remove the test script from production before deploying.

### Example Output

```
Testing navigation links: PASS
Testing theme toggle: PASS
Testing responsive toggle: PASS
Testing layout sections: PASS
Testing forms: PASS
Testing social links: PASS
Testing project buttons: PASS
Testing footer links: PASS
Testing images alt attributes: PASS
```