import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const fetchCartItems = async () => {
  // Replace with your actual API call
  return [
    { id: 1, name: "Sneaker", price: "$100", quantity: 1, image: "/placeholder.svg" },
    { id: 2, name: "Boot", price: "$150", quantity: 2, image: "/placeholder.svg" },
  ];
};

const Cart = () => {
  const { data: cartItems, error, isLoading } = useQuery({
    queryKey: ["cartItems"],
    queryFn: fetchCartItems,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart items</div>;

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="space-y-8">
      <section className="cart-items">
        <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{item.name}</CardTitle>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm">
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="cart-total">
        <h2 className="text-2xl font-semibold mb-4">Total: ${totalPrice}</h2>
        <Button variant="primary" size="lg">
          Proceed to Checkout
        </Button>
      </section>
    </div>
  );
};

export default Cart;