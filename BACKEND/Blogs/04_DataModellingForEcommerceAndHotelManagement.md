# Ecommerce and Hospital Management Data Modelling

## Ecommerce Data Modelling

In an Ecommerce system, the relationships between users, products, categories, and orders are central to the application's architecture.

### Key Models & Entities

* **User Model:** Contains basic details like `username`, `email`, and `password`.

* **Category Model:** Defines types of products (e.g., Electronics, Clothing). Keeping this separate allows for easier filtering, scaling, and management.

* **Product Model:**
    * Linked to a specific **Category**.
    * Contains details like `description`, `price`, `stock`, and `product images`.

* **Order Model:**
    * **Order Items:** A sub-document or array containing the products and their respective quantities.
    * **Address:** Shipping details for the order.
    * **Status:** Tracks the order state (e.g., *Pending, Delivered, Cancelled*).

## Hospital Management System

This introduces more complex relationships involving staff, patients, and medical records across a hospital setting.

### Key Models & Entities

* **Patient Model:** Stores demographic and basic health info (`name`, `age`, `gender`, `blood group`, and `medical history`).

* **Medical Record Model:** Serves as the junction linking a patient to their specific treatments, diagnostics, and attending doctors.

* **Doctor Model:** Contains professional details like `specialization`, `experience`, and the specific hospital(s) they are associated with.

* **Hospital Model:** Stores organizational data such as `address`, `contact details`, and `specialized departments`.

## 🗝️ Advanced Mongoose Concepts

* **Sub-Documents:** Using schemas within schemas. For example, an `Order` schema might contain an array of `OrderItem` schemas to cleanly group related data.

* **Validation:** Implementing custom Mongoose validations to ensure data integrity (e.g., ensuring a product price isn't negative or an email string follows a valid format).

## 💡 Key Takeaways

1.  **Modeling Before Coding:** If you can accurately structure the data, you can build the app. The business logic (controllers) naturally follows the data structure.

2.  **Relationship Management:** Learning the critical difference between when to use an array of Object IDs (referencing) versus embedding data directly (sub-documents).

## 📂 Updated Folder Structure
Below is the recommended directory structure for organizing these models:
```plaintext
src/
└── models/
    ├── ecommerce/
    │   ├── user.models.js
    │   ├── category.models.js
    │   ├── product.models.js
    │   └── order.models.js
    └── hospital/
        ├── patient.models.js
        ├── medical_record.models.js
        ├── doctor.models.js
        └── hospital.models.js
```