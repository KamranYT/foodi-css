import React from 'react';
import Image from 'next/image';

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      category: "Appetizers",
      items: [
        { name: "Bruschetta", description: "Toasted bread with tomato, basil, and garlic.", price: "$6.99", image: "/assets/menu/appetizers1.png" },
        { name: "Mozzarella Sticks", description: "Fried mozzarella served with marinara sauce.", price: "$7.99", image: "/assets/menu/appetizers2.png" },
        { name: "Garlic Bread", description: "Crispy bread topped with garlic butter.", price: "$5.49", image: "/assets/menu/appetizers3.png" },
        { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cream cheese and herbs.", price: "$8.49", image: "/assets/menu/appetizers4.png" },
        { name: "Fried Calamari", description: "Crispy squid served with marinara sauce.", price: "$9.99", image: "/assets/menu/appetizers5.png" },
        { name: "Chicken Wings", description: "Buffalo wings with a spicy sauce.", price: "$7.49", image: "/assets/menu/appetizers6.png" },
      ]
    },
    {
      id: 2,
      category: "Main Dishes",
      items: [
        { name: "Spaghetti Bolognese", description: "Classic Italian pasta with a rich meat sauce.", price: "$12.99", image: "/assets/menu/main1.png" },
        { name: "Chicken Alfredo", description: "Creamy Alfredo sauce with grilled chicken and pasta.", price: "$13.99", image: "/assets/menu/main2.png" },
        { name: "Lasagna", description: "Layers of pasta, meat, and cheese baked to perfection.", price: "$14.99", image: "/assets/menu/main3.png" },
        { name: "Grilled Salmon", description: "Fresh salmon grilled with lemon and herbs.", price: "$16.99", image: "/assets/menu/main4.png" },
        { name: "Beef Steak", description: "Juicy grilled steak with mashed potatoes.", price: "$19.99", image: "/assets/menu/main5.png" },
        { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with soy sauce.", price: "$10.99", image: "/assets/menu/main6.png" },
      ]
    },
    {
      id: 3,
      category: "Desserts",
      items: [
        { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone.", price: "$5.99", image: "/assets/menu/desserts1.png" },
        { name: "Chocolate Cake", description: "Rich and moist chocolate cake with ganache.", price: "$4.99", image: "/assets/menu/desserts2.png" },
        { name: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust.", price: "$6.49", image: "/assets/menu/desserts3.png" },
        { name: "Apple Pie", description: "Warm apple pie with a buttery crust.", price: "$3.99", image: "/assets/menu/desserts4.png" },
        { name: "Ice Cream Sundae", description: "Vanilla ice cream topped with chocolate syrup and whipped cream.", price: "$4.49", image: "/assets/menu/desserts5.png" },
        { name: "Panna Cotta", description: "Italian dessert with cream and vanilla, topped with fruit.", price: "$5.49", image: "/assets/menu/desserts6.png" },
      ]
    },
    {
      id: 4,
      category: "Drinks",
      items: [
        { name: "Lemonade", description: "Freshly squeezed lemonade with a hint of mint.", price: "$2.99", image: "/assets/menu/drink1.png" },
        { name: "Iced Tea", description: "Sweetened iced tea served with lemon.", price: "$2.49", image: "/assets/menu/drink2.png" },
        { name: "Cappuccino", description: "Espresso with steamed milk and foam.", price: "$3.99", image: "/assets/menu/drink3.png" },
        { name: "Espresso", description: "Strong black coffee brewed by forcing steam through ground coffee.", price: "$2.49", image: "/assets/menu/drink4.png" },
        { name: "Orange Juice", description: "Freshly squeezed orange juice.", price: "$3.49", image: "/assets/menu/drink5.png" },
        { name: "Milkshake", description: "Creamy milkshake in chocolate, vanilla, or strawberry.", price: "$4.99", image: "/assets/menu/drink6.png" },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <section className="space-y-8">
        {menuItems.map((category) => (
          <div key={category.id}>
            <h2 className="text-3xl font-semibold text-[#FF6868] my-4">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {category.items.map((item) => (
                <div key={item.name} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                 <div className='relative w-full h-48'>
                 <Image 
                 src={item.image} 
                 alt={item.name}
                 fill 
                 className="object-cover" />
                 </div>
                  
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#5FE26C]">{item.name}</h3>
                    <p className="text-[#90BD95] mt-2">{item.description}</p>
                    <p className="text-lg font-bold text-[#FF6868] mt-3">{item.price}</p>
                    <button className="mt-4 w-full py-2 bg-[#39DB4A] text-white rounded-md hover:bg-[#5FE26C] focus:outline-none">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenuPage;
