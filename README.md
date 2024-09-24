# Diego - Shopping Cart Application

Diego is a simple shopping cart application built using React and Redux. This app allows users to browse products, add items to their cart, manage their wishlist, and proceed to checkout. It integrates basic state management principles using Redux for seamless user interaction and persistence of cart data. The app utilizes a fake API JSON data to simulate product browsing and purchasing behavior.

### Features:

1. **Navigation Bar**:
   - Contains the app logo and links to:
     - Home
     - Product List
     - Cart
     - Wishlist (optional)

2. **Home Page**:
   - Includes the navigation bar.
   - A short description of the app with a "Shop Now" button.
   - Several relevant images to enhance the user experience.

3. **Product Listing Page**:
   - Displays product cards in a grid layout.
   - Each product card includes:
     - Product Image
     - Product Name
     - Product Price
     - "Add to Cart" button
     - "Add to Wishlist" button

4. **Product Details Page**:
   - Shows a detailed view of the selected product:
     - Product Image (on the left)
     - Add to Cart and Back buttons
     - Product Information (Product Name, Description, and Price) on the right

5. **Shopping Cart Page**:
   - Lists all items added to the cart, showing:
     - Product Image
     - Product Name
     - Quantity Selector
     - Price
     - "Remove" Button
   - Cart Summary at the bottom:
     - Displays Total Price
     - "Proceed to Checkout" button
   - The cart state is persisted to ensure data retention.

6. **Checkout Page**:
   - Displays the Cart Summary (Total Price).
   - Contains a Checkout Form with fields for:
     - User details (Name, Address, Payment Method)
     - "Place Order" button for final order submission.

7. **Wishlist Page**:
   - Allows users to view and manage items added to their wishlist.

---

Diego provides a simple and intuitive experience for users to browse products, manage their cart, and complete the checkout process, all while utilizing React and Redux for smooth state management.
