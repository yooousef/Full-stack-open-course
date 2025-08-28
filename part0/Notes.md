# 📒 My Notes – Part 0

This part focused on the **fundamentals of web applications** — how browsers, servers, and SPAs interact.  
The exercises were mainly sequence diagrams showing the flow of requests and responses.

---

## 🌍 Basics of the Web
- A **browser** communicates with a **server** using HTTP requests.
- The server responds with resources:
  - HTML → structure of the page
  - CSS → styles
  - JavaScript → dynamic behavior
  - JSON → data used by the frontend
- The browser then renders everything together for the user.

---

## 📬 How data is fetched
- Browser loads HTML first.  
- HTML includes links to CSS & JS files → browser requests them separately.  
- JavaScript can then make **additional requests** (e.g., to get JSON data).  
- The browser executes JS callbacks to update the DOM.

---

## 📝 Creating a new note (classic version)
1. User writes a note and clicks **Save**.  
2. Browser sends `POST /new_note` with the note data.  
3. Server saves the note, responds with **302 Redirect** to `/notes`.  
4. Browser reloads `/notes`, fetches CSS, JS, and updated JSON.  
5. Browser re-renders page with the new note.  

👉 Downside: The **entire page reloads** every time a note is added.

---

## ⚡ SPA (Single Page Application)
- Initial load is similar: Browser fetches HTML, CSS, and `spa.js`.  
- After that, **JavaScript takes over**:  
  - Fetches `data.json` via AJAX/Fetch.  
  - Renders notes dynamically.  

### Adding a note in SPA
1. User writes a note and clicks **Save**.  
2. Browser JS sends `POST /new_note_spa` with note data (JSON).  
3. Server responds `201 Created`.  
4. Browser updates the DOM immediately → **no full reload** needed.  

👉 Benefit: Faster, smoother user experience.

---

## 🔑 Key Takeaways
- **HTTP GET** → fetch resources (HTML, CSS, JS, JSON).  
- **HTTP POST** → send data to the server.  
- **Redirect (302)** → tells browser to reload a new URL.  
- **SPA vs MPA**:  
  - MPA (multi-page app): reloads full page after changes.  
  - SPA: updates only the needed parts with JS.  

---

✅ That’s Part 0 wrapped up — understanding these flows is crucial before diving into React & Node.
