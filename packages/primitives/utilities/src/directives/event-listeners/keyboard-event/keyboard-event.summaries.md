Here is a comprehensive list of keyboard events in the **DOM** that you can handle using Angular's `@HostListener` or JavaScript. These events are divided into categories based on their purpose:

---

### **1. General Keyboard Events**

These events are triggered during keyboard interaction.

| **Event Name** | **Description**                                                                             |
| -------------- | ------------------------------------------------------------------------------------------- |
| `keydown`      | Fired when a key is pressed down. This event fires continuously as long as the key is held. |
| `keypress`     | (Deprecated) Similar to `keydown`, but only for printable characters.                       |
| `keyup`        | Fired when a key is released.                                                               |

---

### **2. Key Properties (KeyboardEvent API)**

You can access specific properties in the event object:

| **Property**  | **Description**                                                               |
| ------------- | ----------------------------------------------------------------------------- |
| `key`         | The value of the key pressed (e.g., `"Enter"`, `"A"`, `"1"`).                 |
| `code`        | The physical key on the keyboard (e.g., `"KeyA"`, `"Digit1"`, `"ArrowUp"`).   |
| `altKey`      | `true` if the `Alt` key is pressed.                                           |
| `ctrlKey`     | `true` if the `Control` key is pressed.                                       |
| `metaKey`     | `true` if the `Meta` key is pressed (Windows Key / Command Key on macOS).     |
| `shiftKey`    | `true` if the `Shift` key is pressed.                                         |
| `repeat`      | `true` if the event is fired repeatedly when a key is held down.              |
| `isComposing` | `true` if the input method is composing (used for IME - Input Method Editor). |

---

### **3. Commonly Used Keys**

These are frequently used keys in web applications:

#### **Functional Keys**

| **Key**      | **Description**                              |
| ------------ | -------------------------------------------- |
| `Enter`      | Activates a button, form submission, etc.    |
| `Escape`     | Cancels an action or closes a modal.         |
| `Tab`        | Moves focus to the next focusable element.   |
| `Backspace`  | Deletes a character to the left.             |
| `Delete`     | Deletes a character to the right.            |
| `ArrowUp`    | Moves up (e.g., in dropdowns, lists, etc.).  |
| `ArrowDown`  | Moves down.                                  |
| `ArrowLeft`  | Moves left.                                  |
| `ArrowRight` | Moves right.                                 |
| `Space`      | Activates a button or checkbox when focused. |

#### **Modifier Keys**

| **Key**            | **Description**                               |
| ------------------ | --------------------------------------------- |
| `Shift`            | Used to modify other keys (e.g., uppercase).  |
| `Control` / `Ctrl` | Modifier for shortcuts (e.g., `Ctrl+C`).      |
| `Alt`              | Modifier for alternate functions.             |
| `Meta`             | Windows Key (Windows) or Command Key (macOS). |

#### **Navigation Keys**

| **Key**    | **Description**                               |
| ---------- | --------------------------------------------- |
| `Home`     | Moves to the beginning of a document or line. |
| `End`      | Moves to the end of a document or line.       |
| `PageUp`   | Scrolls up one page.                          |
| `PageDown` | Scrolls down one page.                        |

#### **Media Keys (if supported by the device)**

| **Key**              | **Description**              |
| -------------------- | ---------------------------- |
| `MediaPlayPause`     | Plays/pauses media.          |
| `MediaNextTrack`     | Skips to the next track.     |
| `MediaPreviousTrack` | Skips to the previous track. |
| `VolumeUp`           | Increases the volume.        |
| `VolumeDown`         | Decreases the volume.        |
| `Mute`               | Mutes the audio.             |

---

### **4. Handling Accessibility**

These keys are commonly used for accessibility purposes:

| **Key**                 | **Description**                             |
| ----------------------- | ------------------------------------------- |
| `ArrowUp` / `ArrowDown` | Navigate within menus, dropdowns, or lists. |
| `Tab`                   | Navigate between focusable elements.        |
| `Enter`                 | Activates a selected item.                  |
| `Escape`                | Closes dialogs, modals, or dropdowns.       |
| `Space`                 | Activates focused controls like checkboxes. |

---

### **5. Deprecated Keyboard Events**

- **`keypress`**: Deprecated because it doesn't handle non-printable keys (e.g., `Arrow`, `Escape`).

---

### **6. Key Combinations**

You can handle key combinations by checking `event.altKey`, `event.ctrlKey`, `event.shiftKey`, or `event.metaKey`.

#### Examples:

```typescript
@HostListener('keydown', ['$event'])
handleKeyDown(event: KeyboardEvent): void {
  if (event.ctrlKey && event.key === 's') {
    console.log('Ctrl+S pressed!');
    event.preventDefault(); // Prevent the default browser save behavior.
  }
}
```

---

Would you like more details on specific scenarios, such as keyboard navigation or shortcut handling?
