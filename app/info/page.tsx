import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";

export default function About() {
  const features = [
    {
      title: "Order Management",
      description:
        "Track, manage, and process customer orders efficiently.",
      icon: <ShoppingCartIcon fontSize="large" />,
    },
    {
      title: "Sales Analytics",
      description:
        "Monitor revenue, profits, and business performance in real time.",
      icon: <TrendingUpIcon fontSize="large" />,
    },
    {
      title: "Customer Insights",
      description:
        "Understand customer behavior and improve engagement.",
      icon: <PeopleIcon fontSize="large" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-400 p-8">
      
      <section className="mb-10 text-center">
        <div className="font-bold">
          About Our Ecommerce
        </div>

        <div
          
          className="mt-4 max-w-3xl mx-auto text-gray-600"
        >
          Our E-commerce Dashboard provides powerful tools for monitoring
          sales, tracking orders, managing customers, and analyzing business
          performance through interactive charts and reports.
        </div>
      </section>


      <Card className="mb-10 shadow-lg">
        <CardContent>
          

          <div className="text-2xl font-bold">
            The platform helps store owners make data-driven decisions by
            providing real-time insights into sales, revenue, products, and
            customer activities.
          </div>
        </CardContent>
      </Card>

      <section>
        <div
        
          className="mb-6 text-center"
        >
          Key Features
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="hover:shadow-xl transition duration-300"
            >
              <CardContent className="flex flex-col items-center text-center">
                <Avatar
                  sx={{
                    bgcolor: "#1976d2",
                    width: 60,
                    height: 60,
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Avatar>

                <div className="bold">
                  {feature.title}
                </div>

                <div
                  
                
                  className="mt-2"
                >
                  {feature.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="mt-10 shadow-lg">
        <CardContent>
          

        

          <div className="text-xl">
            We aim to simplify e-commerce management by providing a modern,
            intuitive dashboard that enables businesses to track performance,
            optimize operations, and increase profitability.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}