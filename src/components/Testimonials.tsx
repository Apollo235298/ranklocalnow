import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Emma Smith",
    location: "Chevy Chase",
    rating: 5,
    text: "It has been a true blessing to work with Rola! We are somewhat new to the area, and are first time home buyers and she really made this entire process a breeze. Even when we felt overwhelmed with decisions, discouraged about finding a home, or nervous about our offer being approved. If you need a realtor who is incredibly knowledgeable, advocates for her clients, and goes above and beyond, then Rola is the best choice.",
    service: "Home Purchase"
  }, {
    name: "Roman S",
    location: "Hamburg",
    rating: 5,
    text: "Thank you Rola for helping us find our dream home! We were new to Kentucky when we found Rola and didn't know where to start for buying a new home. Rola took the time to get to know us and our needs and fought to get us the best deal on our dream home. She made us feel like family. We recommend Rola to everyone!!!",
    service: "Home Sale"
  }, {
    name: "Nora Gharram",
    location: "Andover",
    rating: 5,
    text: "Rola exemplifies professionalism and expertise! My transaction with her was incredibly smooth from start to finish. I would absolutely welcome the opportunity to work with Rola again in the future!",
    service: "First-Time Buyers"
  }, {
    name: "Roofcred LLC",
    location: "Beaumont",
    rating: 5,
    text: "We have worked with Rola on a business level on numerous occasions and can tell you one thing... She means business! If you are buying or selling a home, you always want someone who can answer the tough questions, can negotiate on your behalf, knows the real estate process through and through and has your best interests in mind. Don't hesitate to call Rola for your real estate needs!",
    service: "Investment Property"
  }];
  return <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Clients
            <span className="block text-luxury">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            their experience working with me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="shadow-soft hover:shadow-elegant transition-luxury">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-luxury mr-4" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury text-luxury" />)}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}, Lexington</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-luxury/10 text-luxury text-sm rounded-full font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-muted/50">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-luxury text-luxury" />)}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">5.0 Average Rating</h3>
              <p className="text-muted-foreground">Based on 50 + Google Business & Zillow client reviews!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Testimonials;