import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      price: "$485,000",
      address: "123 Regency Way, Lexington, KY",
      beds: 4,
      baths: 3,
      sqft: 2850,
      status: "For Sale",
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      price: "$325,000",
      address: "456 Brookwood Dr, Lexington, KY",
      beds: 3,
      baths: 2,
      sqft: 1950,
      status: "Sold",
      featured: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$750,000",
      address: "789 Tates Creek Rd, Lexington, KY",
      beds: 5,
      baths: 4,
      sqft: 3800,
      status: "For Sale",
      featured: true
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$420,000",
      address: "321 Southland Dr, Lexington, KY",
      beds: 3,
      baths: 2.5,
      sqft: 2200,
      status: "Pending",
      featured: false
    }
  ];

  return (
    <section id="properties" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="featured-properties" className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured
            <span className="block text-luxury">Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional homes in Lexington's most desirable neighborhoods. 
            Each property is carefully selected for its unique character and value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden shadow-soft hover:shadow-elegant transition-luxury">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.address}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-luxury"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge 
                    variant={property.status === 'For Sale' ? 'default' : property.status === 'Sold' ? 'secondary' : 'destructive'}
                    className="bg-white/90 text-primary font-medium"
                  >
                    {property.status}
                  </Badge>
                  {property.featured && (
                    <Badge className="bg-luxury text-luxury-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute top-4 right-4 bg-white/90 border-white/50 hover:bg-white transition-smooth"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">{property.price}</h3>
                </div>
                
                <div className="flex items-center space-x-1 mb-4 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.address}</span>
                </div>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4 text-luxury" />
                    <span className="text-sm font-medium">{property.beds} beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4 text-luxury" />
                    <span className="text-sm font-medium">{property.baths} baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4 text-luxury" />
                    <span className="text-sm font-medium">{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-luxury text-luxury-foreground hover:opacity-90 transition-smooth">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;