
const catalog = [
  // ELECTRONICS
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    originalPrice: 3499,
    rating: 4.5,
    image: "photo-1505740420928-5e560c06d30e",
    description: "Wireless headphones with rich sound and comfortable ear cushions."
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 1999,
    originalPrice: 2999,
    rating: 4.3,
    image: "photo-1523275335684-37898b6baf30",
    description: "A stylish smartwatch for everyday activity and time tracking."
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1599,
    originalPrice: 2299,
    rating: 4.4,
    image: "photo-1608043152269-423dbba4e7e1",
    description: "Portable speaker for music at home or on the go."
  },
  {
    name: "Digital Camera",
    category: "Electronics",
    price: 24999,
    originalPrice: 29999,
    rating: 4.6,
    image: "photo-1516035069371-29a1b244cc32",
    description: "Capture everyday moments with a versatile digital camera."
  },
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    originalPrice: 1199,
    rating: 4.2,
    image: "photo-1527814050087-3793815479db",
    description: "An ergonomic wireless mouse for work and everyday computing."
  },
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 2499,
    originalPrice: 3299,
    rating: 4.5,
    image: "photo-1587829741301-dc798b83add3",
    description: "A responsive keyboard for typing, productivity, and gaming."
  },
  {
    name: "Laptop Backpack",
    category: "Electronics",
    price: 1499,
    originalPrice: 2199,
    rating: 4.4,
    image: "photo-1553062407-98eeb64c6a62",
    description: "A practical backpack for carrying a laptop and accessories."
  },
  {
    name: "Tablet Stand",
    category: "Electronics",
    price: 499,
    originalPrice: 799,
    rating: 4.1,
    image: "photo-1585790050230-5dd28404ccb9",
    description: "A compact stand for comfortable tablet viewing."
  },
  {
    name: "USB-C Hub",
    category: "Electronics",
    price: 1199,
    originalPrice: 1699,
    rating: 4.3,
    image: "photo-1625842268584-8f3296236761",
    description: "Expand your laptop connectivity with a handy USB-C hub."
  },
  {
    name: "Power Bank",
    category: "Electronics",
    price: 1299,
    originalPrice: 1799,
    rating: 4.4,
    image: "photo-1609592806596-b43badae5a6e",
    description: "A portable power bank for charging devices while travelling."
  },
  {
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 1799,
    originalPrice: 2499,
    rating: 4.3,
    image: "photo-1606220945770-b5b6c2c55bf1",
    description: "Compact wireless earbuds for music and calls."
  },
  {
    name: "Gaming Controller",
    category: "Electronics",
    price: 2299,
    originalPrice: 2999,
    rating: 4.5,
    image: "photo-1592840496694-26d035b52b48",
    description: "A comfortable controller for compatible gaming devices."
  },
  {
    name: "LED Monitor",
    category: "Electronics",
    price: 8999,
    originalPrice: 11999,
    rating: 4.6,
    image: "photo-1527443224154-c4a3942d3acf",
    description: "A modern monitor for office work and entertainment."
  },
  {
    name: "Webcam",
    category: "Electronics",
    price: 1499,
    originalPrice: 2199,
    rating: 4.2,
    image: "photo-1587826080692-f439cd0b70da",
    description: "A webcam for online meetings and video calls."
  },
  {
    name: "Portable Projector",
    category: "Electronics",
    price: 6999,
    originalPrice: 8999,
    rating: 4.1,
    image: "photo-1535016120720-40c646be5580",
    description: "A compact projector for presentations and home entertainment."
  },
  
  {
    name: "Fitness Tracker",
    category: "Electronics",
    price: 1499,
    originalPrice: 2199,
    rating: 4.0,
    image: "photo-1576243345690-4e4b79b63288",
    description: "Track daily activity with a lightweight fitness band."
  },
  {
    name: "Laptop Stand",
    category: "Electronics",
    price: 999,
    originalPrice: 1499,
    rating: 4.4,
    image: "photo-1527864550417-7fd91fc51a46",
    description: "Raise your laptop for a more comfortable desk setup."
  },
  {
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 4999,
    originalPrice: 6499,
    rating: 4.7,
    image: "photo-1546435770-a3e426bf472b",
    description: "Over-ear headphones designed for immersive listening."
  },
  {
    name: "Charging Cable Set",
    category: "Electronics",
    price: 399,
    originalPrice: 599,
    rating: 4.1,
    image: "photo-1558618666-fcd25c85cd64",
    description: "A practical set of everyday charging cables."
  },
  {
    name: "Wi-Fi Router",
    category: "Electronics",
    price: 2199,
    originalPrice: 2999,
    rating: 4.3,
    image: "photo-1647427060118-4911c9821b82",
    description: "A home router for connecting compatible devices."
  },
  {
    name: "External SSD",
    category: "Electronics",
    price: 4999,
    originalPrice: 6499,
    rating: 4.6,
    image: "photo-1597872200969-2b65d56bd16b",
    description: "Portable solid-state storage for files and backups."
  },
  {
    name: "E-Reader",
    category: "Electronics",
    price: 8999,
    originalPrice: 10999,
    rating: 4.5,
    image: "photo-1544716278-ca5e3f4abd8c",
    description: "A convenient digital reading companion for book lovers."
  },
  {
    name: "Desk Microphone",
    category: "Electronics",
    price: 1999,
    originalPrice: 2799,
    rating: 4.3,
    image: "photo-1590602847861-f357a9332bbc",
    description: "A desktop microphone for calls, streaming, and recording."
  },
  {
    name: "Smart Home Plug",
    category: "Electronics",
    price: 899,
    originalPrice: 1299,
    rating: 4.0,
    image: "photo-1558002038-1055907df827",
    description: "A smart plug for compatible home automation setups."
  },
  {
    name: "Phone Holder",
    category: "Electronics",
    price: 299,
    originalPrice: 499,
    rating: 4.1,
    image: "photo-1512499617640-c74ae3a79d37",
    description: "A compact holder for hands-free phone viewing."
  },
  {
    name: "Action Camera",
    category: "Electronics",
    price: 7999,
    originalPrice: 9999,
    rating: 4.4,
    image: "photo-1526170375885-4d8ecf77b99f",
    description: "A compact camera for capturing outdoor adventures."
  },
  
  {
    name: "Hair Dryer",
    category: "Electronics",
    price: 1499,
    originalPrice: 1999,
    rating: 4.2,
    image: "photo-1522338140262-f46f5913618a",
    description: "A handy hair dryer for everyday styling."
  },
  
  {
    name: "Rice Cooker",
    category: "Electronics",
    price: 2499,
    originalPrice: 3299,
    rating: 4.4,
    image: "photo-1585515320310-259814833e62",
    description: "A convenient countertop appliance for preparing rice."
  },
  {
    name: "Air Fryer",
    category: "Electronics",
    price: 4999,
    originalPrice: 6499,
    rating: 4.5,
    image: "photo-1626082927389-6cd097cdc6ec",
    description: "A countertop air fryer for versatile home cooking."
  },
  {
    name: "Handheld Vacuum",
    category: "Electronics",
    price: 2199,
    originalPrice: 2999,
    rating: 4.2,
    image: "photo-1558317374-067fb5f30001",
    description: "A compact vacuum for quick everyday cleaning."
  },
  {
    name: "Electric Fan",
    category: "Electronics",
    price: 1799,
    originalPrice: 2499,
    rating: 4.1,
    image: "photo-1581276879432-15e50529f34b",
    description: "A practical fan for home or office use."
  },
  {
    name: "LED Desk Light",
    category: "Electronics",
    price: 799,
    originalPrice: 1199,
    rating: 4.3,
    image: "photo-1507473885765-e6ed057f782c",
    description: "A focused desk light for studying and working."
  },
  {
    name: "Digital Alarm Clock",
    category: "Electronics",
    price: 699,
    originalPrice: 999,
    rating: 4.0,
    image: "photo-1508057198894-247b23fe5ade",
    description: "A simple digital clock for your bedside table."
  },
  {
    name: "Smart Scale",
    category: "Electronics",
    price: 1299,
    originalPrice: 1799,
    rating: 4.1,
    image: "photo-1576610616656-d3aa5d1f4534",
    description: "A digital scale for everyday weight tracking."
  },
  
  {
    name: "Gaming Headset",
    category: "Electronics",
    price: 1999,
    originalPrice: 2799,
    rating: 4.4,
    image: "photo-1599669454699-248893623440",
    description: "A gaming headset for immersive audio and communication."
  },
  {
    name: "Graphics Tablet",
    category: "Electronics",
    price: 3999,
    originalPrice: 4999,
    rating: 4.5,
    image: "photo-1545235617-9465d2a55698",
    description: "A digital drawing tablet for creative work."
  },
  {
    name: "Bluetooth Adapter",
    category: "Electronics",
    price: 499,
    originalPrice: 799,
    rating: 4.0,
    image: "photo-1615526675159-e248c3021d3f",
    description: "A compact adapter for compatible Bluetooth connections."
  },
  {
    name: "USB Flash Drive",
    category: "Electronics",
    price: 399,
    originalPrice: 599,
    rating: 4.2,
    image: "photo-1618410320928-25228d811631",
    description: "Portable storage for transferring documents and photos."
  },
  {
    name: "Laptop Cooling Pad",
    category: "Electronics",
    price: 999,
    originalPrice: 1499,
    rating: 4.2,
    image: "photo-1593642632823-8f785ba67e45",
    description: "A laptop stand with cooling support for desk use."
  },
  {
    name: "Smart Display",
    category: "Electronics",
    price: 5999,
    originalPrice: 7999,
    rating: 4.3,
    image: "photo-1550745165-9bc0b252726f",
    description: "A compact display for compatible smart home features."
  },
  {
    name: "Portable DVD Drive",
    category: "Electronics",
    price: 1599,
    originalPrice: 2199,
    rating: 4.0,
    image: "photo-1496181133206-80ce9b88a853",
    description: "An external optical drive for compatible computers."
  },
  {
    name: "Phone Power Adapter",
    category: "Electronics",
    price: 599,
    originalPrice: 899,
    rating: 4.2,
    image: "photo-1583863788434-e58a36330cf0",
    description: "A compact power adapter for compatible devices."
  },
  {
    name: "Car Phone Mount",
    category: "Electronics",
    price: 499,
    originalPrice: 799,
    rating: 4.1,
    image: "photo-1503376780353-7e6692767b70",
    description: "A phone mount for convenient viewing while parked."
  },
  {
    name: "Mini Projector Screen",
    category: "Electronics",
    price: 1999,
    originalPrice: 2799,
    rating: 4.2,
    image: "photo-1524985069026-dd778a71c7b4",
    description: "A portable screen for compatible projection setups."
  },
  {
    name: "Digital Voice Recorder",
    category: "Electronics",
    price: 1799,
    originalPrice: 2499,
    rating: 4.1,
    image: "photo-1590602847861-f357a9332bbc",
    description: "A compact recorder for notes and interviews."
  },
  {
    name: "Smart LED Bulb",
    category: "Electronics",
    price: 399,
    originalPrice: 699,
    rating: 4.3,
    image: "photo-1507473885765-e6ed057f782c",
    description: "An LED bulb for energy-conscious home lighting."
  },
  {
    name: "Portable Monitor",
    category: "Electronics",
    price: 10999,
    originalPrice: 13999,
    rating: 4.5,
    image: "photo-1527443224154-c4a3942d3acf",
    description: "A portable screen for compatible laptops and devices."
  },

  // FASHION
  {
    name: "Casual Sneakers",
    category: "Fashion",
    price: 1799,
    originalPrice: 2499,
    rating: 4.4,
    image: "photo-1542291026-7eec264c27ff",
    description: "Comfortable casual sneakers for everyday wear."
  },
  {
    name: "Classic Sunglasses",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.1,
    image: "photo-1511499767150-a48a237f0083",
    description: "Classic sunglasses to complement your everyday style."
  },
  {
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1521572163474-6864f9cf17ab",
    description: "A versatile cotton T-shirt for casual outfits."
  },
  {
    name: "Denim Jacket",
    category: "Fashion",
    price: 1999,
    originalPrice: 2799,
    rating: 4.5,
    image: "photo-1551028719-00167b16eac5",
    description: "A timeless denim jacket for layering."
  },
  {
    name: "Running Shoes",
    category: "Fashion",
    price: 2299,
    originalPrice: 3299,
    rating: 4.4,
    image: "photo-1542291026-7eec264c27ff",
    description: "Lightweight running shoes for everyday activity."
  },
  {
    name: "Formal Shirt",
    category: "Fashion",
    price: 999,
    originalPrice: 1499,
    rating: 4.3,
    image: "photo-1598033129183-c4f50c736f10",
    description: "A smart shirt suitable for office and formal occasions."
  },
  {
    name: "Summer Dress",
    category: "Fashion",
    price: 1299,
    originalPrice: 1899,
    rating: 4.4,
    image: "photo-1515372039744-b8f02a3ae446",
    description: "A lightweight dress for casual outings and summer days."
  },
  {
    name: "Hooded Sweatshirt",
    category: "Fashion",
    price: 1199,
    originalPrice: 1699,
    rating: 4.3,
    image: "photo-1556821840-3a63f95609a7",
    description: "A comfortable sweatshirt for relaxed everyday outfits."
  },
  {
    name: "Classic Wristwatch",
    category: "Fashion",
    price: 1599,
    originalPrice: 2299,
    rating: 4.4,
    image: "photo-1524592094714-0f0654e20314",
    description: "A classic wristwatch for a polished everyday look."
  },
  
  {
    name: "Polo T-Shirt",
    category: "Fashion",
    price: 699,
    originalPrice: 999,
    rating: 4.2,
    image: "photo-1586790170083-2f9ceadc732d",
    description: "A classic polo shirt for smart casual styling."
  },
  {
    name: "Straight Fit Jeans",
    category: "Fashion",
    price: 1399,
    originalPrice: 1999,
    rating: 4.4,
    image: "photo-1542272604-787c3835535d",
    description: "Everyday denim jeans with a versatile fit."
  },
  {
    name: "Canvas Shoes",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.1,
    image: "photo-1525966222134-fcfa99b8ae77",
    description: "Simple canvas shoes for casual daily wear."
  },
  {
    name: "Winter Coat",
    category: "Fashion",
    price: 2999,
    originalPrice: 3999,
    rating: 4.5,
    image: "photo-1539533018447-63fcce2678e3",
    description: "A stylish coat for cooler weather."
  },
  {
    name: "Sports Shorts",
    category: "Fashion",
    price: 599,
    originalPrice: 899,
    rating: 4.1,
    image: "photo-1591195853828-11db59a44f6b",
    description: "Comfortable shorts for sports and casual use."
  },
  
  {
    name: "Knitted Sweater",
    category: "Fashion",
    price: 1499,
    originalPrice: 2199,
    rating: 4.4,
    image: "photo-1576566588028-4147f3842f27",
    description: "A soft sweater for comfortable layering."
  },
  {
    name: "Baseball Cap",
    category: "Fashion",
    price: 399,
    originalPrice: 599,
    rating: 4.1,
    image: "photo-1588850561407-ed78c282e89b",
    description: "A casual cap for everyday outfits."
  },
  {
    name: "Leather Loafers",
    category: "Fashion",
    price: 1899,
    originalPrice: 2699,
    rating: 4.4,
    image: "photo-1531310197839-ccf54634509e",
    description: "Classic loafers for smart casual occasions."
  },
  {
    name: "Ankle Boots",
    category: "Fashion",
    price: 2499,
    originalPrice: 3299,
    rating: 4.3,
    image: "photo-1543163521-1bf539c55dd2",
    description: "Versatile ankle boots for everyday styling."
  },
  {
    name: "Pleated Skirt",
    category: "Fashion",
    price: 999,
    originalPrice: 1499,
    rating: 4.2,
    image: "photo-1583496661160-fb5886a13d27",
    description: "A versatile skirt for casual and smart outfits."
  },
  {
    name: "Linen Shirt",
    category: "Fashion",
    price: 1199,
    originalPrice: 1699,
    rating: 4.4,
    image: "photo-1603252109303-2751441dd157",
    description: "A lightweight linen shirt for warm weather."
  },
  {
    name: "Graphic T-Shirt",
    category: "Fashion",
    price: 599,
    originalPrice: 899,
    rating: 4.1,
    image: "photo-1503341504253-dff4815485f1",
    description: "A casual graphic T-shirt for everyday outfits."
  },
  {
    name: "Track Pants",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.2,
    image: "photo-1552902865-b72c031ac5ea",
    description: "Comfortable track pants for relaxing and training."
  },
  {
    name: "Formal Trousers",
    category: "Fashion",
    price: 1299,
    originalPrice: 1899,
    rating: 4.3,
    image: "photo-1473966968600-fa801b869a1a",
    description: "Smart trousers for office and formal occasions."
  },
  {
    name: "Running Jacket",
    category: "Fashion",
    price: 1799,
    originalPrice: 2499,
    rating: 4.3,
    image: "photo-1551028719-00167b16eac5",
    description: "A lightweight jacket for outdoor exercise."
  },
  {
    name: "Swimwear",
    category: "Fashion",
    price: 999,
    originalPrice: 1499,
    rating: 4.1,
    image: "photo-1503342217505-b0a15ec3261c",
    description: "A swimwear option for pool and beach days."
  },
  {
    name: "Rain Jacket",
    category: "Fashion",
    price: 1399,
    originalPrice: 1999,
    rating: 4.2,
    image: "photo-1544923246-77307dd654cb",
    description: "A practical outer layer for rainy weather."
  },
  {
    name: "Flats",
    category: "Fashion",
    price: 799,
    originalPrice: 1199,
    rating: 4.2,
    image: "photo-1543163521-1bf539c55dd2",
    description: "Everyday flat footwear for comfort and versatility."
  },
  {
    name: "Sports Polo",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.1,
    image: "photo-1625910513413-5fc8b3bcb6c4",
    description: "A sporty polo shirt for active days."
  },
  {
    name: "Long Sleeve Top",
    category: "Fashion",
    price: 699,
    originalPrice: 999,
    rating: 4.2,
    image: "photo-1564257577-7a3d1c4a8a12",
    description: "A simple long-sleeve top for layering."
  },
  {
    name: "Puffer Jacket",
    category: "Fashion",
    price: 2799,
    originalPrice: 3699,
    rating: 4.5,
    image: "photo-1544923246-77307dd654cb",
    description: "A padded jacket for cold-weather layering."
  },
  {
    name: "Leather Sandals",
    category: "Fashion",
    price: 999,
    originalPrice: 1499,
    rating: 4.3,
    image: "photo-1603487742131-4160ec999306",
    description: "Comfortable sandals for daily use."
  },
  {
    name: "High Top Sneakers",
    category: "Fashion",
    price: 1699,
    originalPrice: 2399,
    rating: 4.3,
    image: "photo-1525966222134-fcfa99b8ae77",
    description: "High-top sneakers with a timeless casual style."
  },
  {
    name: "Chinos",
    category: "Fashion",
    price: 1199,
    originalPrice: 1699,
    rating: 4.3,
    image: "photo-1473966968600-fa801b869a1a",
    description: "Versatile chinos for smart casual dressing."
  },
  {
    name: "Printed Scarf",
    category: "Fashion",
    price: 499,
    originalPrice: 799,
    rating: 4.0,
    image: "photo-1601924994987-69e26d50dc26",
    description: "A lightweight scarf to complement everyday outfits."
  },
  {
    name: "Cardigan",
    category: "Fashion",
    price: 1299,
    originalPrice: 1899,
    rating: 4.4,
    image: "photo-1576566588028-4147f3842f27",
    description: "A comfortable cardigan for layering."
  },
  {
    name: "Dress Shoes",
    category: "Fashion",
    price: 2199,
    originalPrice: 2999,
    rating: 4.4,
    image: "photo-1614252369475-531eba835eb1",
    description: "Classic dress shoes for formal occasions."
  },
  {
    name: "Denim Shorts",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.2,
    image: "photo-1511196044526-5cb3bcb7071b",
    description: "Casual denim shorts for warm-weather outfits."
  },
  {
    name: "Athletic Tights",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.3,
    image: "photo-1506629905607-d9b1c7a8b9f1",
    description: "Stretch athletic tights for workouts."
  },
  {
    name: "Classic Blazer",
    category: "Fashion",
    price: 2999,
    originalPrice: 3999,
    rating: 4.5,
    image: "photo-1591047139829-d91aecb6caea",
    description: "A tailored blazer for office and formal looks."
  },
  {
    name: "Casual Loafers",
    category: "Fashion",
    price: 1499,
    originalPrice: 2199,
    rating: 4.2,
    image: "photo-1531310197839-ccf54634509e",
    description: "Easy-to-wear loafers for daily outfits."
  },
  {
    name: "Striped Shirt",
    category: "Fashion",
    price: 899,
    originalPrice: 1299,
    rating: 4.2,
    image: "photo-1603252109303-2751441dd157",
    description: "A striped shirt for a clean, casual look."
  },
  {
    name: "Everyday Trainers",
    category: "Fashion",
    price: 1599,
    originalPrice: 2299,
    rating: 4.3,
    image: "photo-1542291026-7eec264c27ff",
    description: "Versatile trainers for daily activities."
  },
  {
    name: "Casual Jumpsuit",
    category: "Fashion",
    price: 1799,
    originalPrice: 2499,
    rating: 4.4,
    image: "photo-1515372039744-b8f02a3ae446",
    description: "A one-piece outfit for relaxed styling."
  },
  {
    name: "Wool Beanie",
    category: "Fashion",
    price: 399,
    originalPrice: 599,
    rating: 4.1,
    image: "photo-1576871337622-98d48d1cf531",
    description: "A warm beanie for cool-weather outings."
  },
  {
    name: "Everyday Sandals",
    category: "Fashion",
    price: 699,
    originalPrice: 999,
    rating: 4.1,
    image: "photo-1603487742131-4160ec999306",
    description: "Simple sandals for everyday comfort."
  },

  // ACCESSORIES
  {
    name: "Travel Backpack",
    category: "Accessories",
    price: 1299,
    originalPrice: 1899,
    rating: 4.2,
    image: "photo-1553062407-98eeb64c6a62",
    description: "A spacious backpack for college, work, and travel."
  },
  {
    name: "Leather Wallet",
    category: "Accessories",
    price: 699,
    originalPrice: 999,
    rating: 4.2,
    image: "photo-1627123424574-724758594e93",
    description: "A compact wallet for organising daily essentials."
  },
  {
    name: "Everyday Tote Bag",
    category: "Accessories",
    price: 899,
    originalPrice: 1299,
    rating: 4.3,
    image: "photo-1548036328-c9fa89d128fa",
    description: "A versatile tote bag for everyday errands."
  },
  {
    name: "Leather Handbag",
    category: "Accessories",
    price: 2499,
    originalPrice: 3299,
    rating: 4.5,
    image: "photo-1584917865442-de89df76afd3",
    description: "A stylish handbag with space for daily essentials."
  },
  {
    name: "Travel Duffel Bag",
    category: "Accessories",
    price: 1499,
    originalPrice: 2199,
    rating: 4.4,
    image: "photo-1553062407-98eeb64c6a62",
    description: "A roomy duffel bag for short trips and gym sessions."
  },
  {
    name: "Card Holder",
    category: "Accessories",
    price: 399,
    originalPrice: 599,
    rating: 4.1,
    image: "photo-1627123424574-724758594e93",
    description: "A slim card holder for essential cards."
  },
  {
    name: "Travel Organizer",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1553062407-98eeb64c6a62",
    description: "Keep small travel essentials neatly organised."
  },
  {
    name: "Minimalist Necklace",
    category: "Accessories",
    price: 599,
    originalPrice: 899,
    rating: 4.3,
    image: "photo-1611652022419-a9419f74343d",
    description: "A simple necklace for everyday styling."
  },
  {
    name: "Classic Bracelet",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.1,
    image: "photo-1611591437281-460bfbe1220a",
    description: "A versatile bracelet for casual and formal outfits."
  },
  {
    name: "Stud Earrings",
    category: "Accessories",
    price: 299,
    originalPrice: 499,
    rating: 4.2,
    image: "photo-1535632066927-ab7c9ab60908",
    description: "Simple stud earrings for everyday wear."
  },
  {
    name: "Leather Keychain",
    category: "Accessories",
    price: 199,
    originalPrice: 349,
    rating: 4.0,
    image: "photo-1617038220319-276d3cfab638",
    description: "A compact keychain for organising your keys."
  },
  {
    name: "Travel Neck Pillow",
    category: "Accessories",
    price: 599,
    originalPrice: 899,
    rating: 4.3,
    image: "photo-1530789253388-582c481c54b0",
    description: "A travel pillow for added comfort on long journeys."
  },
  {
    name: "Passport Holder",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1476514525535-07fb3b4ae5f1",
    description: "Keep travel documents together in one holder."
  },
  {
    name: "Compact Umbrella",
    category: "Accessories",
    price: 399,
    originalPrice: 599,
    rating: 4.1,
    image: "photo-1534274988757-a28bf1a57c17",
    description: "A compact umbrella for unpredictable weather."
  },
  {
    name: "Sports Water Bottle",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.3,
    image: "photo-1602143407151-7111542de6e8",
    description: "A reusable bottle for workouts and everyday hydration."
  },
  {
    name: "Leather Watch Strap",
    category: "Accessories",
    price: 599,
    originalPrice: 899,
    rating: 4.2,
    image: "photo-1524592094714-0f0654e20314",
    description: "A replacement watch strap for compatible watches."
  },
  {
    name: "Hair Accessories Set",
    category: "Accessories",
    price: 299,
    originalPrice: 499,
    rating: 4.0,
    image: "photo-1522335789203-aabd1fc54bc9",
    description: "A useful set of accessories for everyday hairstyling."
  },
  {
    name: "Makeup Pouch",
    category: "Accessories",
    price: 399,
    originalPrice: 599,
    rating: 4.2,
    image: "photo-1596462502278-27bfdc403348",
    description: "A compact pouch for storing cosmetics and small items."
  },
  {
    name: "Laptop Sleeve",
    category: "Accessories",
    price: 799,
    originalPrice: 1199,
    rating: 4.4,
    image: "photo-1496181133206-80ce9b88a853",
    description: "A protective sleeve for carrying a compatible laptop."
  },
  {
    name: "Sling Bag",
    category: "Accessories",
    price: 999,
    originalPrice: 1499,
    rating: 4.3,
    image: "photo-1548036328-c9fa89d128fa",
    description: "A compact sling bag for daily essentials."
  },
  {
    name: "Canvas Tote",
    category: "Accessories",
    price: 299,
    originalPrice: 499,
    rating: 4.1,
    image: "photo-1590874103328-eac38a683ce7",
    description: "A reusable canvas tote for shopping and daily errands."
  },
  {
    name: "Travel Packing Cubes",
    category: "Accessories",
    price: 699,
    originalPrice: 999,
    rating: 4.3,
    image: "photo-1436491865332-7a61a109cc05",
    description: "Packing cubes for organising clothes in luggage."
  },
  {
    name: "Metal Key Organizer",
    category: "Accessories",
    price: 349,
    originalPrice: 549,
    rating: 4.0,
    image: "photo-1617038220319-276d3cfab638",
    description: "A compact accessory for keeping keys together."
  },
  {
    name: "Travel Luggage Tag",
    category: "Accessories",
    price: 199,
    originalPrice: 349,
    rating: 4.0,
    image: "photo-1436491865332-7a61a109cc05",
    description: "Identify your luggage with a simple travel tag."
  },
  {
    name: "Minimalist Ring",
    category: "Accessories",
    price: 399,
    originalPrice: 699,
    rating: 4.2,
    image: "photo-1605100804763-247f67b3557e",
    description: "A minimalist ring for everyday styling."
  },
  {
    name: "Pearl Earrings",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.3,
    image: "photo-1535632066927-ab7c9ab60908",
    description: "Pearl-style earrings for a timeless look."
  },
  {
    name: "Pendant Necklace",
    category: "Accessories",
    price: 699,
    originalPrice: 999,
    rating: 4.3,
    image: "photo-1611652022419-a9419f74343d",
    description: "A pendant necklace for simple everyday elegance."
  },
  {
    name: "Classic Cufflinks",
    category: "Accessories",
    price: 599,
    originalPrice: 899,
    rating: 4.2,
    image: "photo-1617038220319-276d3cfab638",
    description: "Cufflinks for formal shirts and special occasions."
  },
  
  {
    name: "Leather Gloves",
    category: "Accessories",
    price: 899,
    originalPrice: 1299,
    rating: 4.2,
    image: "photo-1511499767150-a48a237f0083",
    description: "A classic accessory for cooler weather."
  },
  {
    name: "Travel Toiletry Bag",
    category: "Accessories",
    price: 599,
    originalPrice: 899,
    rating: 4.2,
    image: "photo-1553062407-98eeb64c6a62",
    description: "A travel pouch for toiletries and grooming essentials."
  },
  {
    name: "Crossbody Bag",
    category: "Accessories",
    price: 1199,
    originalPrice: 1699,
    rating: 4.4,
    image: "photo-1584917865442-de89df76afd3",
    description: "A practical crossbody bag for daily outings."
  },
  {
    name: "Woven Beach Bag",
    category: "Accessories",
    price: 799,
    originalPrice: 1199,
    rating: 4.2,
    image: "photo-1548036328-c9fa89d128fa",
    description: "A spacious bag for beach trips and summer outings."
  },
  {
    name: "Coin Purse",
    category: "Accessories",
    price: 299,
    originalPrice: 499,
    rating: 4.0,
    image: "photo-1627123424574-724758594e93",
    description: "A small purse for coins and other essentials."
  },
  {
    name: "Reading Glasses Case",
    category: "Accessories",
    price: 249,
    originalPrice: 399,
    rating: 4.1,
    image: "photo-1511499767150-a48a237f0083",
    description: "A protective case for compatible eyeglasses."
  },
  {
    name: "Insulated Lunch Bag",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1547592180-85f173990554",
    description: "A lunch bag for carrying meals and snacks."
  },
  {
    name: "Travel Shoe Bag",
    category: "Accessories",
    price: 299,
    originalPrice: 499,
    rating: 4.0,
    image: "photo-1553062407-98eeb64c6a62",
    description: "Keep shoes separate from clothes in your luggage."
  },
  {
    name: "Laptop Messenger Bag",
    category: "Accessories",
    price: 1699,
    originalPrice: 2399,
    rating: 4.4,
    image: "photo-1553062407-98eeb64c6a62",
    description: "A messenger bag for carrying work essentials."
  },
  {
    name: "Jewellery Organizer",
    category: "Accessories",
    price: 799,
    originalPrice: 1199,
    rating: 4.3,
    image: "photo-1611652022419-a9419f74343d",
    description: "Organise jewellery and small accessories in one place."
  },
  {
    name: "Minimalist Backpack",
    category: "Accessories",
    price: 1399,
    originalPrice: 1999,
    rating: 4.3,
    image: "photo-1553062407-98eeb64c6a62",
    description: "A clean, minimalist backpack for everyday use."
  },
  {
    name: "Gym Duffel",
    category: "Accessories",
    price: 1199,
    originalPrice: 1699,
    rating: 4.3,
    image: "photo-1553062407-98eeb64c6a62",
    description: "A practical gym bag for sports clothing and equipment."
  },
  {
    name: "Foldable Shopping Bag",
    category: "Accessories",
    price: 199,
    originalPrice: 349,
    rating: 4.1,
    image: "photo-1544816155-12df9643f363",
    description: "A reusable bag that folds away when not in use."
  },
  {
    name: "Travel Document Wallet",
    category: "Accessories",
    price: 599,
    originalPrice: 899,
    rating: 4.2,
    image: "photo-1476514525535-07fb3b4ae5f1",
    description: "Keep travel documents neatly stored in one wallet."
  },
  {
    name: "Everyday Bracelet",
    category: "Accessories",
    price: 349,
    originalPrice: 549,
    rating: 4.1,
    image: "photo-1611591437281-460bfbe1220a",
    description: "A simple bracelet for everyday wear."
  },
  {
    name: "Compact Travel Wallet",
    category: "Accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1627123424574-724758594e93",
    description: "A compact wallet for carrying cards and travel essentials."
  },

  // HOME
  {
    name: "Modern Desk Lamp",
    category: "Home",
    price: 1099,
    originalPrice: 1599,
    rating: 4.3,
    image: "photo-1507473885765-e6ed057f782c",
    description: "A modern lamp for your desk, study table, or bedside."
  },
  {
    name: "Ceramic Coffee Mug",
    category: "Home",
    price: 399,
    originalPrice: 599,
    rating: 4.6,
    image: "photo-1514228742587-6b1558fcca3d",
    description: "An elegant ceramic mug for your favourite hot beverages."
  },
  {
    name: "Decorative Vase",
    category: "Home",
    price: 799,
    originalPrice: 1199,
    rating: 4.4,
    image: "photo-1578500494198-246f612d3b3d",
    description: "A decorative vase for shelves, tables, and living spaces."
  },
  {
    name: "Soft Cushion",
    category: "Home",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1584100936595-c0654b55a2e2",
    description: "A soft cushion to add comfort to your living room."
  },
  {
    name: "Cotton Bedsheet",
    category: "Home",
    price: 1299,
    originalPrice: 1899,
    rating: 4.4,
    image: "photo-1631049307264-da0ec9d70304",
    description: "A comfortable bedsheet for your bedroom."
  },
  {
    name: "Wall Clock",
    category: "Home",
    price: 899,
    originalPrice: 1299,
    rating: 4.3,
    image: "photo-1563861826100-9cb868fdbe1c",
    description: "A simple wall clock for home or office."
  },
  {
    name: "Storage Basket",
    category: "Home",
    price: 599,
    originalPrice: 899,
    rating: 4.2,
    image: "photo-1583847268964-b28dc8f51f92",
    description: "A practical basket for organising household items."
  },
  {
    name: "Ceramic Planter",
    category: "Home",
    price: 399,
    originalPrice: 599,
    rating: 4.3,
    image: "photo-1485955900006-10f4d324d411",
    description: "A planter for adding greenery to your home."
  },
  {
    name: "Table Runner",
    category: "Home",
    price: 499,
    originalPrice: 799,
    rating: 4.1,
    image: "photo-1600210492486-724fe5c67fb0",
    description: "A decorative runner for your dining or coffee table."
  },
  {
    name: "Scented Candle",
    category: "Home",
    price: 349,
    originalPrice: 549,
    rating: 4.4,
    image: "photo-1603006905003-be475563bc59",
    description: "A scented candle for a relaxing home atmosphere."
  },
  {
    name: "Throw Blanket",
    category: "Home",
    price: 999,
    originalPrice: 1499,
    rating: 4.5,
    image: "photo-1600210492486-724fe5c67fb0",
    description: "A soft blanket for cosy evenings and comfortable lounging."
  },
  {
    name: "Photo Frame",
    category: "Home",
    price: 299,
    originalPrice: 499,
    rating: 4.2,
    image: "photo-1513519245088-0e12902e5a38",
    description: "Display favourite photos on your desk or wall."
  },
  {
    name: "Ceramic Dinner Set",
    category: "Home",
    price: 1999,
    originalPrice: 2799,
    rating: 4.4,
    image: "photo-1603199506016-b9a594b593c0",
    description: "A ceramic dinner set for everyday meals."
  },
  {
    name: "Glass Water Bottle",
    category: "Home",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1602143407151-7111542de6e8",
    description: "A reusable glass bottle for daily hydration."
  },
  {
    name: "Kitchen Canisters",
    category: "Home",
    price: 899,
    originalPrice: 1299,
    rating: 4.3,
    image: "photo-1556911220-e15b29be8c8f",
    description: "Storage canisters for organising kitchen ingredients."
  },
  {
    name: "Serving Tray",
    category: "Home",
    price: 599,
    originalPrice: 899,
    rating: 4.2,
    image: "photo-1600210492486-724fe5c67fb0",
    description: "A versatile tray for serving drinks and snacks."
  },
  {
    name: "Floor Cushion",
    category: "Home",
    price: 799,
    originalPrice: 1199,
    rating: 4.3,
    image: "photo-1584100936595-c0654b55a2e2",
    description: "A comfortable cushion for casual seating."
  },
  {
    name: "Desk Organizer",
    category: "Home",
    price: 399,
    originalPrice: 599,
    rating: 4.2,
    image: "photo-1497366754035-f200968a6e72",
    description: "Keep stationery and small desk essentials organised."
  },
  {
    name: "Laundry Basket",
    category: "Home",
    price: 699,
    originalPrice: 999,
    rating: 4.1,
    image: "photo-1631679706909-1844bbd07221",
    description: "A household basket for collecting laundry."
  },
  {
    name: "Bathroom Dispenser",
    category: "Home",
    price: 299,
    originalPrice: 499,
    rating: 4.1,
    image: "photo-1620626011761-996317b8d101",
    description: "A refillable dispenser for bathroom essentials."
  },
  {
    name: "Kitchen Apron",
    category: "Home",
    price: 399,
    originalPrice: 599,
    rating: 4.2,
    image: "photo-1556911220-e15b29be8c8f",
    description: "An apron for everyday cooking and baking."
  },
  {
    name: "Wooden Cutting Board",
    category: "Home",
    price: 599,
    originalPrice: 899,
    rating: 4.4,
    image: "photo-1556911220-e15b29be8c8f",
    description: "A practical board for everyday food preparation."
  },
  {
    name: "Reusable Food Containers",
    category: "Home",
    price: 699,
    originalPrice: 999,
    rating: 4.3,
    image: "photo-1547592180-85f173990554",
    description: "Containers for storing meals and leftovers."
  },
  {
    name: "Decorative Mirror",
    category: "Home",
    price: 1499,
    originalPrice: 2199,
    rating: 4.4,
    image: "photo-1618221195710-dd6b41faaea6",
    description: "A decorative mirror for your bedroom or living room."
  },
  {
    name: "Minimalist Wall Art",
    category: "Home",
    price: 799,
    originalPrice: 1199,
    rating: 4.3,
    image: "photo-1513519245088-0e12902e5a38",
    description: "Wall art to complement a modern interior."
  },
  {
    name: "Bedside Table",
    category: "Home",
    price: 2499,
    originalPrice: 3299,
    rating: 4.4,
    image: "photo-1499933374294-4584851497cc",
    description: "A compact table for bedside essentials."
  },
  {
    name: "Bookshelf",
    category: "Home",
    price: 3999,
    originalPrice: 4999,
    rating: 4.5,
    image: "photo-1507842217343-583bb7270b66",
    description: "A bookshelf for displaying books and decorative items."
  },
  {
    name: "Dining Chair",
    category: "Home",
    price: 2999,
    originalPrice: 3999,
    rating: 4.3,
    image: "photo-1503602642458-232111445657",
    description: "A modern chair for a dining or workspace setup."
  },
  {
    name: "Accent Table",
    category: "Home",
    price: 1799,
    originalPrice: 2499,
    rating: 4.2,
    image: "photo-1499933374294-4584851497cc",
    description: "A compact accent table for small spaces."
  },
  {
    name: "Woven Rug",
    category: "Home",
    price: 1999,
    originalPrice: 2799,
    rating: 4.4,
    image: "photo-1600210492486-724fe5c67fb0",
    description: "A decorative rug to add warmth to your space."
  },
  {
    name: "Curtain Set",
    category: "Home",
    price: 1299,
    originalPrice: 1899,
    rating: 4.3,
    image: "photo-1616486338812-3dadae4b4ace",
    description: "A curtain set for adding privacy and style."
  },
  {
    name: "Decorative Bowl",
    category: "Home",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1578500494198-246f612d3b3d",
    description: "A decorative bowl for tables and shelves."
  },
  {
    name: "Ceramic Flower Pot",
    category: "Home",
    price: 349,
    originalPrice: 549,
    rating: 4.2,
    image: "photo-1485955900006-10f4d324d411",
    description: "A flower pot for indoor plants and herbs."
  },
  {
    name: "Coaster Set",
    category: "Home",
    price: 199,
    originalPrice: 349,
    rating: 4.1,
    image: "photo-1603199506016-b9a594b593c0",
    description: "A coaster set for protecting tables from drink marks."
  },
  {
    name: "Kitchen Storage Rack",
    category: "Home",
    price: 999,
    originalPrice: 1499,
    rating: 4.3,
    image: "photo-1556911220-e15b29be8c8f",
    description: "A rack for keeping kitchen essentials organised."
  },
  {
    name: "Bath Towel Set",
    category: "Home",
    price: 799,
    originalPrice: 1199,
    rating: 4.4,
    image: "photo-1620626011761-996317b8d101",
    description: "Soft towels for everyday bathroom use."
  },
  {
    name: "Pillow Set",
    category: "Home",
    price: 999,
    originalPrice: 1499,
    rating: 4.3,
    image: "photo-1631049307264-da0ec9d70304",
    description: "Comfortable pillows for restful sleep."
  },
  {
    name: "Bedside Organizer",
    category: "Home",
    price: 399,
    originalPrice: 599,
    rating: 4.1,
    image: "photo-1497366754035-f200968a6e72",
    description: "Keep small bedside items within easy reach."
  },
  {
    name: "Wall Shelf",
    category: "Home",
    price: 899,
    originalPrice: 1299,
    rating: 4.3,
    image: "photo-1618221195710-dd6b41faaea6",
    description: "A shelf for books, plants, and decorative pieces."
  },
  {
    name: "Folding Stool",
    category: "Home",
    price: 799,
    originalPrice: 1199,
    rating: 4.1,
    image: "photo-1503602642458-232111445657",
    description: "A compact stool for flexible seating."
  },
  {
    name: "Storage Ottoman",
    category: "Home",
    price: 1999,
    originalPrice: 2799,
    rating: 4.4,
    image: "photo-1616486338812-3dadae4b4ace",
    description: "A versatile ottoman for seating and storage."
  },
  {
    name: "Table Lamp",
    category: "Home",
    price: 1299,
    originalPrice: 1799,
    rating: 4.4,
    image: "photo-1507473885765-e6ed057f782c",
    description: "A table lamp for ambient lighting in your home."
  },
  {
    name: "Decorative Tray",
    category: "Home",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1600210492486-724fe5c67fb0",
    description: "A decorative tray for arranging home accessories."
  },
  {
    name: "Planter Stand",
    category: "Home",
    price: 899,
    originalPrice: 1299,
    rating: 4.3,
    image: "photo-1485955900006-10f4d324d411",
    description: "A stand for displaying indoor plants."
  },
  {
    name: "Throw Pillow Cover",
    category: "Home",
    price: 299,
    originalPrice: 499,
    rating: 4.1,
    image: "photo-1584100936595-c0654b55a2e2",
    description: "A pillow cover for refreshing your home decor."
  },
  {
    name: "Decorative Storage Box",
    category: "Home",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    image: "photo-1583847268964-b28dc8f51f92",
    description: "A storage box for organising small household items."
  },
  {
    name: "Ceramic Serving Set",
    category: "Home",
    price: 1199,
    originalPrice: 1699,
    rating: 4.3,
    image: "photo-1603199506016-b9a594b593c0",
    description: "A coordinated serving set for family meals."
  }
];

const products = catalog.map((product, index) => ({
  ...product,
  id: index + 1,
  image: `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=600&q=80`
}));

export default products;
