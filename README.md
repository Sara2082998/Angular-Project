My Store is Ecommerce Application Created with AngularJs and Json as database
/******************************/
Content
1-general Information 
2-Technologies 
3-Setup
4-functionalites and Features
/******************************/
general Information 
 this project is e-commerce app to sell clothes online its contains alot of products sections 
 1-Men Clothes 2-ladies clothes 3-kids clothes
 This allows the user to choose the product and quantity He puts it in his cart
 and after he finishes the purchase he will go to his cart and let him make some adjustments to his products
 before sending the data to the serve
/******************************/
2-Technologies and libraries
 Let's write down the languages I used, the libraries and its versions.  For example: Bootstrap v-5 AngularJs 13
 Setup To run this project, install it locally using npm:

 1-npm install 
 2-MyStore>json-server --w Database/db.json (to watch Database) 
 3-MyStore>ng serve -o (to run the App)
 I used bootstrap library 
/******************************/
3-Components
1-(all-products) this component contains functios  to View all products and allow the user to add product to his card and specify product's quantity
and Allows the user to see the products of each category 
2-(product-details) allow to the user to see all product's details and add the product to his card 

3-(shopping-card) this component It contains all the products chosen by the user and allows the user to enter his data
/******************************/
4-Services and functionalities
1-(ProducServices) Services contain all product fanctionalites and like Getallproducts() this function return all products, 
  GetAllCategories() this function return all categories ,  GetProductByproductId() this function return product by it's id ,
 GetAllProductsByCategoryId() this function return products by their category id

2-(Shoppingservices) contain functionalities like getAllCardProducts() this function return the products added by the user,
deleteProductFromCart() this function allow the user to delete any product from his card
/*******************************/

