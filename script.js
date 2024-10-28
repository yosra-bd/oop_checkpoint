class product {
    constructor(id,name,price){
    this.id = id
    this.name = name
    this.price = price
    }
}

class shopping_cart_item extends product {
    constructor(id,name,price,quantity){
    super(id,name,price)
    this.quantity = quantity
}
getTotalPrice(){
    return this.price * this.quantity
}
}

class shopping_cart {
    constructor (items){
        this.items = items
    }
    getTotalPrice(){
        return this.items.reduce((acc,i)=> acc + i.getTotalPrice(),0)
    }
    addItems(item){
        this.item = push(item)
    }
    removeItem(id){
        this.items = this.items.filter(i => i.id !==id)
    }
    displayItems(){
        for (let i of this.items){
            console.log(`${i.name} - ${i.quantity} X ${i.price} = ${i.getTotalPrice()}`);

        }
    }
}
//create instances of the Product class
let shoes = new Product(1, 'shoes', 100)
let pants = new Product(2, 'pants', 150)

//create shopping cart
let cart1 = new ShoppingCart([
    new ShoppingCartItem(1, 'Product 1', 10, 2),
    new ShoppingCartItem(2, 'Product 2', 20, 1),
    new ShoppingCartItem(3, 'Product 3', 15, 3)
])

cartItem = new ShoppingCartItem(4, 'Product 4', 100, 2)

cart1.addItem(cartItem)

cart1.displayItems()

cart1.removeItem(2)

cart1.displayItems()
