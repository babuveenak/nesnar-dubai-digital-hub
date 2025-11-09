import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const Clients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Clients & Partners</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Trusted by leading organizations across the UAE, GCC, and MENA regions
            </p>
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
              <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <p className="text-muted-foreground">Satisfied Clients</p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <p className="text-muted-foreground">Countries Worldwide</p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <p className="text-muted-foreground">Client Retention Rate</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Regional Presence</h3>
                  <p className="text-muted-foreground mb-4">
                    Nesnar Software Services has established a strong presence across the Middle East and beyond, serving clients in:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">UAE</h4>
                      <p className="text-sm text-muted-foreground">Dubai, Abu Dhabi, Sharjah</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">GCC Countries</h4>
                      <p className="text-sm text-muted-foreground">Saudi Arabia, Kuwait, Qatar, Oman, Bahrain</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">MENA Region</h4>
                      <p className="text-sm text-muted-foreground">Egypt, Jordan, Lebanon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "Nesnar's expertise in Oracle Fusion helped us streamline our entire finance operation. Their team's professionalism and technical knowledge exceeded our expectations."
                  </p>
                  <div className="font-semibold">Leading Manufacturing Company, UAE</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
