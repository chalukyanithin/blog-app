# 📝 Blog Application

A full-stack **Blog Application** built using **Node.js, Express, EJS, and MongoDB**, deployed on **AWS Elastic Beanstalk**.  
Users can create, edit, and delete blog posts with a simple and clean UI.

---

## 🚀 Features
- ✍️ Create, edit, and delete blogs  
- 📄 View all blogs on the homepage  
- 📌 Individual blog detail pages  
- 🗄️ MongoDB for data persistence  
- 🎨 EJS templating engine for server-side rendering  
- ☁️ Deployment on AWS Elastic Beanstalk  

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Frontend**: EJS, HTML, CSS  
- **Database**: MongoDB (Mongoose)  
- **Deployment**: AWS Elastic Beanstalk  

---

## 📂 Project Structure
```
blog-app/
│── public/           # Static files (CSS, images, JS)
│── views/            # EJS templates
│── routes/           # Express routes
│── models/           # Mongoose models
│── app.js            # Main server file
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup environment variables  
Create a `.env` file in the root directory and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4️⃣ Run locally
```bash
npm start
```
App runs on: `http://localhost:3000`

---

## ☁️ Deployment on AWS Elastic Beanstalk
1. Install EB CLI  
   ```bash
   pip install awsebcli
   ```
2. Initialize Elastic Beanstalk  
   ```bash
   eb init
   ```
3. Create environment and deploy  
   ```bash
   eb create blog-env
   eb deploy
   ```
4. Open app in browser  
   ```bash
   eb open
   ```

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit a PR.

---

## 📜 License
This project is licensed under the MIT License.  
