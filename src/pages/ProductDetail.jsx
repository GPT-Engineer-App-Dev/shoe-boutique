import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchProductDetail = async (id) => {
  // Replace with your actual API call
  return {
    id,
    name: "Sneaker",
    price: "$100",
    description: "A great sneaker for everyday use.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: ["7", "8", "9", "10"],
    colors: ["Red", "Blue", "Green"],
  };
};

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => fetchProductDetail(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  return (
    <div className="space-y-8">
      <section className="product-images grid grid-cols-1 sm:grid-cols-2 gap-4">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.name} className="w-full h-48 object-cover" />
        ))}
      </section>

      <section className="product-info">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-4">{product.price}</p>
        <p className="mb-4">{product.description}</p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Sizes</h2>
          <div className="flex gap-2">
            {product.sizes.map((size, index) => (
              <Button key={index} variant="outline" size="sm">
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Colors</h2>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <Button key={index} variant="outline" size="sm">
                {color}
              </Button>
            ))}
          </div>
        </div>

        <Button variant="primary" size="lg">
          Add to Cart
        </Button>
      </section>
    </div>
  );
};

export default ProductDetail;