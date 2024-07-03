import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchFeaturedProducts = async () => {
  // Replace with your actual API call
  return [
    { id: 1, name: "Sneaker", price: "$100", image: "/placeholder.svg" },
    { id: 2, name: "Boot", price: "$150", image: "/placeholder.svg" },
    { id: 3, name: "Sandal", price: "$50", image: "/placeholder.svg" },
  ];
};

const Index = () => {
  const { data: featuredProducts, error, isLoading } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: fetchFeaturedProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading featured products</div>;

  return (
    <div className="space-y-8">
      <section className="hero bg-gray-200 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Shoe Store</h1>
        <p className="text-lg mb-6">Find the best shoes for every occasion</p>
        <Button as={Link} to="/categories" variant="primary" size="lg">
          Shop Now
        </Button>
      </section>

      <section className="featured-products">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p>{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="/categories/sneakers" className="block p-4 bg-gray-100 rounded-lg text-center">
            Sneakers
          </Link>
          <Link to="/categories/boots" className="block p-4 bg-gray-100 rounded-lg text-center">
            Boots
          </Link>
          <Link to="/categories/sandals" className="block p-4 bg-gray-100 rounded-lg text-center">
            Sandals
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;