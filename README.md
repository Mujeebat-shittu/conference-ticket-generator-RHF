# 🎟️ Coding Conference Ticket Generator

A responsive React + TypeScript application that allows users to register for a fictional coding conference and receive a personalized digital ticket. Built with structured state management, file handling, and dynamic routing.

---

## 🚀 Live Demo  
👉 **[View Live Project](https://conference-ticket-generator-rhf.netlify.app/)**  
👉 **[GitHub Repository](https://github.com/Mujeebat-shittu/conference-ticket-generator-RHF)**  

---

## 📌 Features

### 🎨 Modern UI & UX  
- Fully responsive and accessible design  
- Styled with Tailwind CSS  
- Clean, reusable component structure  

### 🧠 Structured State Management  
- Managed form state using `React Hook Form`  
- Centralized error handling reducer  
- Predictable and maintainable architecture  

### 🖼️ Avatar Upload & Validation  
- Upload a profile image (JPG, PNG, WEBP)  
- Validates file type and file size  
- Real-time avatar preview  
- Stored as a `File` object for safer handling  

### 🧾 Dynamic Ticket Generation  
- User data passed securely via React Router `navigate` state  
- Personalized ticket layout including avatar, name, GitHub username, and email  
- Clean, centered typography and visual hierarchy  

### 📥 Downloadable Ticket  
- Integrated `html2canvas` to export the ticket  
- Ticket is downloadable as a PNG file  
- Adjustable resolution and scaling  

---

## 🛠️ Tech Stack

- **React (Vite)**
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **React Hook Form**
- **html2canvas**

---

## 📁 Folder Structure
src/
 ├── components/
 ├── assets/
 ├── App.tsx
 ├── main.tsx
 └── index.css


---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Mujeebat-shittu/coding-ticket-generator.git
cd coding-ticket-generator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the project
```bash
npm install
```

## 🧩 How It Works
1. User fills the form
Uploads avatar

Inputs name, email, and GitHub username

2. React Hook Form updates form state
Validates input

Stores the avatar as a File

3. On submit
Creates a blob URL for the avatar

Navigates to /ticket with state

Renders a personalized ticket layout

4. User downloads ticket
Ticket DOM is converted to canvas using html2canvas

Canvas is exported as a PNG


## 📌 Lessons Learned

- Implementing *React Hook Form* for complex form flows

- Validating and safely handling file uploads

- Passing data securely between pages using React Router

- Working with DOM-to-image rendering tools

- Designing scalable layouts with Tailwind CSS

## 📜 License

This project is open-source under the MIT License.