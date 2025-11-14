## 🎟 Ticket Generator Webpage

A React + TypeScript web application that allows users to upload an avatar, enter their personal details, and generate a personalized event ticket. Users can download their ticket as a PNG image with custom styling, including background color, text color, and rounded corners, without exposing sensitive data in the URL.

## 📝 Short Description

This project demonstrates:

- React Hook Form for form handling and validation

- File uploads (avatar) with validation for type and size

- React Router for navigation between form and ticket display


- html2canvas to capture and download the ticket as an image

## ⚡ Features

- Upload an avatar image (JPG, PNG, WEBP, max 2MB)

- Fill in personal information (Full name, Email, GitHub username)

- Form validation with error messages using React Hook Form

- Generate a custom event ticket with avatar, name, username, and event details

- Download the ticket as a PNG image with correct styling

- Data security: form data does not appear in the URL

- Responsive design with Tailwind CSS

## 🛠 Technology Stack

- React

- TypeScript

- React Hook Form

- React Router v6

- Tailwind CSS

- html2canvas



## 🖼 Usage

- Fill in the form fields (Full Name, Email, GitHub username)

- Upload an avatar image

- Click Generate My Ticket

- Review the ticket on the next page

- Click Download Ticket to save it as PNG

## ⚠️ Notes

- Ticket image is generated using html2canvas — ensure images are fully loaded before downloading

- Avatar is stored temporarily as an object URL; memory is released when the ticket is downloaded


## 📜 License

This project is open source and free to use.
