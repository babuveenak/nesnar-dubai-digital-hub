import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import clientLogos from "@/assets/client-logos.png";
const Clients = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Clients & Partners</h1>
            <p className="text-xl opacity-90 max-w-3xl">Trusted by leading organizations across regions</p>
          </div>
        </section>

        {/* Partnership Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Global Technology Partnerships</h2>
              <p className="text-xl text-muted-foreground">
                As certified partners of Oracle and Salesforce, we bring world-class expertise and best practices to every engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="shadow-card">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Oracle Partner</h3>
                  <p className="text-muted-foreground">
                    Certified Oracle partner specializing in EBS and Fusion implementations
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Salesforce Partner</h3>
                  <p className="text-muted-foreground">
                    Certified Salesforce consulting partner delivering comprehensive CRM solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Success */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Happy Customers</h2>
              
              <div className="bg-card rounded-lg p-8 shadow-card">
                <img src={clientLogos} alt="Our valued clients including FTG Development, Emaar, MAG, Imdaad, Ali Oman Al Owais Group, Al-Futtaim, Carillion, Securitas, Public Authority for Electricity & Water, Emirates Post, Eros Group, and Dubai Investment Real Estate" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        
      </main>

      <Footer />
    </div>;
};
export default Clients;