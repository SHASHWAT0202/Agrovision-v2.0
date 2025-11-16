import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Package, Wrench, Sprout, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { useRazorpay } from "@/hooks/useRazorpay";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  count: number;
}

const ShopSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<string[]>([]);
  const { initiatePayment } = useRazorpay();

  const categories: Category[] = [
    { name: "All", icon: <Package className="w-4 h-4" />, count: 12 },
    { name: "Seeds", icon: <Sprout className="w-4 h-4" />, count: 4 },
    { name: "Fertilizers", icon: <ShoppingCart className="w-4 h-4" />, count: 4 },
    { name: "Tools", icon: <Wrench className="w-4 h-4" />, count: 4 },
  ];

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Corn Seeds Premium",
        category: "Seeds",
        price: 3799,
        image: "/corn-seeds.svg",
        description: "High-yield corn seeds with excellent germination rate and disease resistance.",
        rating: 4.5
      },
      {
        id: "2",
        name: "Organic Fertilizer",
        category: "Fertilizers",
        price: 2450,
        image: "/organic-fertilizer.svg",
        description: "100% organic fertilizer made from natural compost. Rich in nutrients.",
        rating: 4.8
      },
      {
        id: "3",
        name: "Smart Irrigation Kit",
        category: "Tools",
        price: 16599,
        image: "/smart-irrigation.svg",
        description: "Automated irrigation system with smart sensors and mobile app control.",
        rating: 4.7
      },
      {
        id: "4",
        name: "Wheat Seeds Hybrid",
        category: "Seeds",
        price: 3210,
        image: "/wheat-seeds.svg",
        description: "Premium hybrid wheat variety with superior grain quality.",
        rating: 4.6
      },
      {
        id: "5",
        name: "NPK Fertilizer 20-20-20",
        category: "Fertilizers",
        price: 2675,
        image: "/npk-fertilizer.svg",
        description: "Balanced NPK fertilizer formula providing essential nutrients.",
        rating: 4.4
      },
      {
        id: "6",
        name: "Soil pH Meter Digital",
        category: "Tools",
        price: 5430,
        image: "/soil-ph-meter.svg",
        description: "Professional digital pH meter for accurate soil testing.",
        rating: 4.5
      },
      {
        id: "7",
        name: "Tomato Seeds Hybrid",
        category: "Seeds",
        price: 2075,
        image: "/tomato-seeds.svg",
        description: "Disease-resistant hybrid tomato seeds with exceptional flavor.",
        rating: 4.6
      },
      {
        id: "8",
        name: "Bio-Compost Enriched",
        category: "Fertilizers",
        price: 1660,
        image: "/bio-compost.svg",
        description: "Premium bio-compost enriched with essential minerals.",
        rating: 4.3
      },
      {
        id: "9",
        name: "Precision Seed Drill",
        category: "Tools",
        price: 7465,
        image: "/precision-drill.svg",
        description: "Manual precision seed drill for accurate seed placement.",
        rating: 4.2
      },
      {
        id: "10",
        name: "Rice Paddy Seeds",
        category: "Seeds",
        price: 4355,
        image: "/rice-seeds.svg",
        description: "High-yielding rice variety suitable for paddy cultivation.",
        rating: 4.8
      },
      {
        id: "11",
        name: "Liquid Micronutrients",
        category: "Fertilizers",
        price: 2965,
        image: "/liquid-micronutrients.svg",
        description: "Concentrated liquid micronutrient solution with essential minerals.",
        rating: 4.7
      },
      {
        id: "12",
        name: "Soil Moisture Sensor",
        category: "Tools",
        price: 3730,
        image: "/soil-moisture-sensor.svg",
        description: "Wireless soil moisture sensor with real-time monitoring.",
        rating: 4.5
      }
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleBuyNow = async (product: Product) => {
    try {
      await initiatePayment({
        amount: product.price,
        productName: product.name,
        productId: product.id,
        customerName: "Customer",
        customerEmail: "customer@example.com",
        customerPhone: "9999999999"
      });
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Failed to initiate payment. Please try again.');
    }
  };

  const handleAddToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
    alert('Product added to cart!');
    console.log('Added to cart:', productId);
  };

  return (
    <section id="shop" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-full mb-6">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Smart Farming <span className="gradient-text">Marketplace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium quality seeds, fertilizers, and modern farming equipment delivered to your doorstep
          </p>
        </div>        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.name)}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(12).fill(0).map((_, i) => (
              <Card key={i} className="h-96">
                <CardHeader className="space-y-0 pb-2">
                  <div className="w-full h-48 bg-muted rounded-lg animate-pulse"></div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-3 bg-muted rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="group card-hover shadow-elegant border-border/50 overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="space-y-0 pb-2 p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-3 right-3 backdrop-blur-sm bg-primary/90 text-white font-semibold">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-50 dark:bg-yellow-950/30 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-foreground">{product.rating}</span>
                    </div>
                    <p className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 hover:border-primary hover:bg-primary/5"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                      onClick={() => handleBuyNow(product)}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Buy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try selecting a different category to browse our products.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopSection;
