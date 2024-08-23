#  Shopping Server

This is the backend server for the Shopping Shop web application, built with Node.js and Express. It provides RESTful API endpoints for managing the menu, orders, users, and more.

## 🛠️ Features

- RESTful API for pizza menu management (CRUD operations).
- Order processing and management.
- User authentication and authorization (JWT-based).
- Role-based access control for admins and users.
- Integration with a database (e.g., MySQL) using Sequelize ORM.

## 🚀 Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**: JavaScript runtime environment.
- ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) **Express**: Web framework for Node.js.
- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) **JWT**: For authentication and authorization.
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongodb&logoColor=white) **Mongoose**: MongoDB object modeling for Node.js.


## ⚙️ Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aoffyclub/Shopping_server.git
   cd Shopping_server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and configure the following variables:

   ```plaintext
   MONGO_URI=<Your database host>
   PORT=<Your database host port>
   UPLOAD_URL=<Your image>
 

   ```

   Replace the placeholders with your actual database credentials and JWT secret.


4. **Start the server:**

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:3000`.

## 📝 API Endpoints

# API Endpoints


## Cart Management
- **POST** `/addtocart`: Add a product to the cart of the authenticated user.
- **GET** `/getcart`: Fetch all cart items for the authenticated user.
- **DELETE** `/removefromcart`: Remove a product from the cart of the authenticated user.

## Image Upload
- **POST** `/upload`: Upload an image for a product.

## Product Management
- **POST** `/addproduct`: Create a new product (Authenticated users only).
- **DELETE** `/deleteproduct`: Delete a product (Authenticated users only).
- **GET** `/api/allproducts`: Fetch all products.
- **GET** `/api/newcollection`: Fetch new products.
- **GET** `/api/popularproducts`: Fetch popular products.

## User Management
- **POST** `/signup`: Create a new user account.
- **POST** `/login`: Log in a user and return a JWT.



## 📂 Project Structure

The project structure is organized as follows:

```
Shopping_server/
├── config/               # Database and other configurations
├── controllers/          # Route handlers
├── models/               # Sequelize models
├── routes/               # API routes
├── middlewares/          # Custom middleware
├── migrations/           # Database migrations
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
└── server.js             # Entry point for the application
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## 📧 Contact

For any inquiries, feel free to reach out to the project maintainer at [offfyclub@gmail.com](mailto:aoffyclub@gmail.com).
