import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Globe } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import dubaiOffice from "@/assets/dubai-office.jpg";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Nesnar</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              A decade of excellence in delivering enterprise technology solutions
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
                
              </div>
              <div>
                <img src={teamCollaboration} alt="Nesnar team collaboration" className="rounded-lg shadow-card-hover w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <Eye className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground text-lg">To be the most trusted technology partner for enterprises driving digital transformation through innovative Oracle, Salesforce and Mobility solutions.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground text-lg">To simplify complex software challenges by delivering world-class consulting, implementation, and support services that enable our customers to achieve their business objectives.</p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Excellence</h4>
                    <p className="text-muted-foreground">
                      Delivering superior quality in every project we undertake
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                    <p className="text-muted-foreground">
                      Embracing cutting-edge technologies and best practices
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Integrity</h4>
                    <p className="text-muted-foreground">
                      Building trust through transparency and ethical practices
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
          backgroundImage: `url(${dubaiOffice})`
        }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Global Footprint</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Serving clients across multiple continents with local expertise and global standards
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-card">
                  
                </Card>
                <Card className="shadow-card">
                  
                </Card>
                <Card className="shadow-card">
                  
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;