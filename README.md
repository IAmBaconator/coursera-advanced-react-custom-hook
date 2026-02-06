# Custom React Hook: usePrevious

## Overview

This project demonstrates the creation and use of a **custom React hook** to track state changes across renders. The application displays the current day of the week and allows users to advance through the days sequentially via a button click.

By implementing a custom `usePrevious` hook, the app enhances its UI to show both the **current day** and the **previously rendered day**, illustrating how React hooks can preserve historical state without cluttering component logic.

This lab focuses on reinforcing hook composition, render cycles, and state persistence in a clean, reusable way.

---

## Key Concepts Demonstrated

- **Custom React Hooks**  
  Encapsulating reusable logic into a dedicated `usePrevious` hook to improve clarity and maintainability.

- **Tracking Previous State Across Renders**  
  Leveraging `useRef` and `useEffect` to persist values between renders without triggering re-renders.

- **React Render Lifecycle Awareness**  
  Understanding when values update and how to capture state *before* a change occurs.

- **Separation of Concerns**  
  Keeping state history logic out of UI components to promote cleaner, more readable code.

---

## Lab Notes

- The `usePrevious` hook captures the value of the current day *prior* to the latest update.
- `useRef` is used to store the previous value without causing unnecessary re-renders.
- `useEffect` synchronizes the stored value after each render cycle.
- The UI updates dynamically to reflect both:
  - The current day
  - The previous day before the last button click
- This pattern mirrors real-world use cases such as:
  - Undo functionality
  - Change tracking
  - UI transition comparisons

---

## Possible Enhancements

- Display a **history list** of previously selected days.
- Animate transitions between day changes for improved user experience.
- Generalize `usePrevious` to support multiple tracked values.
- Add unit tests to validate hook behavior across render cycles.
- Expand the hook for broader use cases such as form value comparisons or state diffs.
