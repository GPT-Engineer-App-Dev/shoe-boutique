import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const fetchProducts = async (category) => {
  // Replace with your actual API call
  return [
    { id: 1, name: "Sneaker", price: "$100", image: "/placeholder.svg" },
    { id: 2, name: "Boot", price: "$150", image: "/placeholder.svg" },
    { id: 3, name: "Sandal", price: "$50", image: "/placeholder.svg" },
  ];
};

const ProductListing = () => {
  const { category } = useParams();
  const { data: products, error, isLoading } = useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="space-y-8">
      <section className="category-banner bg-gray-200 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{category}</h1>
      </section>

      <section className="product-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
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
    </div>
  );
};

export default ProductListing;