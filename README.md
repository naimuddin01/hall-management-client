# Hostel Meal Management

An Hostel Meal Management platform developed with React and React Rest Framework, providing a smooth meal management experience for users. Features include user registration and login, meal information browsing, and meal history tracking in student profiles. Even student users can meal update hassle-free. Also, meal lists and details can be fetched with REST APIs.

## Table of Contents

- [Overview](#overview)
- [Project Installation](#project-installation)
  - [Environment Variable_fontend](#configure-the-env-file-fontend)
  - [Backend and Database](#Set-Up-the-Backend-and-Database)
  - [Environment Variable_backend](#configure-the-env-file-backend)

- [Expectation](#expectation)
- [Future Work](#future-works)

## Overview

I'm delighted to introduce my project, a Hostel Meal Management website designed to simplify the meal experience for students in university halls. Developed from the ground up using React.js and Node.js, this platform offers detailed meal history, department-specific features, and a seamless overview of meal consumption.

**Key Features :**


1. **User Authentication:** User registration and login for personalized shopping experiences. Guest users can explore and shop without signing in.

2. **🍛 Meal History:** Students can access their complete meal history, tracking how many meals they've used, the cost per meal, and any remaining or due amounts.

3. **🏢 Departmental Integration:** The website is structured to cater to different university departments, ensuring each one has a customized experience in managing meals and payments.

4. **📊 Usage Analytics:** IThe platform offers insightful analytics to help users make informed decisions about their meal plans.
   
5. **🔒 Secure Data Handling:** Implemented robust security measures to protect user data and ensure data privacy.

6. **User Reviews:** Allow customers to leave reviews and ratings for products, enhancing trust and providing valuable feedback.

7. **APIs:** Utilize RESTful APIs to retrieve product lists and details programmatically.

## Project Installation

Follow these steps to set up and run this e-commerce platform on your local machine.

**Clone the Repository**

```bash
https://github.com/naimuddin01/bistro-boss-client.git
```

**Install project dependencies:**

```bash
cd your-project
npm install
```

**Set up Firebase:**
- Make sure you have a Firebase project created on the Firebase Console.
- Authenticate with Firebase and select your project:
```bash
firebase login
firebase use --add
```

**Usage:**
Explain how to use your project. Include any specific commands or scripts that users need to run. For example:
```bash
npm start
```

### Configure the .env.local file fontend

Create a `.env.local` file in the project root directory. Add the following environment variables to your `.env` file with your actual values:

```
SECRET_KEY = your-project-apiKey
VITE_apiKey= your-project-apiKey
VITE_authDomain= your-project-authDomain
VITE_projectId= your-project-projectId
VITE_storageBucket= your-project-storageBucket
VITE_messagingSenderId= your-project-messagingSenderId
VITE_appId= your-project-appId
```

# **Set Up the Backend and Database**
**Here is the Backend Code :** [Backend](https://github.com/naimuddin01/bistro-boss-server) 

Provide step-by-step instructions on how to install and set up your project. Include any necessary commands or configuration steps. For example:

**Clone the Repository**
```bash
https://github.com/naimuddin01/bistro-boss-server.git
```

**Install project dependencies:**
```bash
cd your-project
npm install
```

### Configure the .env file backend

Explain how to set up the necessary configuration, especially the .env file.
1. Create a .env file in the project root directory:
   ```bash
    touch .env
   ```
2. Add the following environment variables to your .env file:
    ```bash
    DB_User=your-mongoBD-project-userName
    DB_PASS=your-mongoBD-project-PASS
    MONGODB_URI=your_mongodb_connection_string
    Access_TOKEN_SECRET=your_secret_key
   ```
    
## Expectation

The expectations for my e-commerce platform project built using Django and Django Rest Framework can be outlined as follows:

1. **User-Friendly Shopping Experience**

2. **Authentication and User Profiles**

3. **Food Catalog**

4. **Meal History and Tracking**

5. **API Integration**

6. **Performance and Scalability**

7. **Maintenance and Updates**

## Future Works

Here are some potential future work areas to consider:

1. **Food Recommendations:** Implement recommendation algorithms to suggest products to users based on their browsing and purchase history.
