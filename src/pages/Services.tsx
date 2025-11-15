import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceComparison from "@/components/ServiceComparison";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Cloud, Cog, HeadphonesIcon, ArrowUpCircle, Layers, Smartphone, Tablet, Zap } from "lucide-react";
import oracleLogo from "@/assets/oracle-logo.png";
const Services = () => {
  const oracleServices = [{
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "Oracle EBS Migration",
    description: "Seamless migration of your Oracle E-Business Suite to newer versions or cloud platforms with minimal disruption."
  }, {
    icon: <ArrowUpCircle className="w-10 h-10 text-primary" />,
    title: "Oracle EBS Support & Upgrade",
    description: "Comprehensive support and upgrade services to keep your Oracle EBS running optimally and securely."
  }, {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: "Oracle Fusion ERP",
    description: "Full-scale implementations covering Financials, SCM, HCM, and Customer Applications modules."
  }];
  const salesforceServices = [{
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "Salesforce Implementation",
    description: "End-to-end Salesforce deployment tailored to your business processes and industry requirements."
  }, {
    icon: <Cog className="w-10 h-10 text-primary" />,
    title: "Customization & Integration",
    description: "Custom development and seamless integration with your existing systems and third-party applications."
  }, {
    icon: <HeadphonesIcon className="w-10 h-10 text-primary" />,
    title: "Salesforce Support",
    description: "Ongoing support, maintenance, and optimization services for your Salesforce environment."
  }];
  const mobilityServices = [{
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with modern frameworks and best practices."
  }, {
    icon: <Tablet className="w-10 h-10 text-primary" />,
    title: "Enterprise Mobility Solutions",
    description: "Comprehensive mobility strategies for workforce enablement and business process optimization."
  }, {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Mobile App Modernization",
    description: "Transform legacy mobile applications with modern architectures, enhanced UX, and improved performance."
  }];
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl opacity-90 max-w-3xl">Comprehensive Oracle, Salesforce and Mobile solutions for enterprise transformation</p>
          </div>
        </section>

        {/* Oracle Practice */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <img src={oracleLogo} alt="Oracle" className="h-12 md:h-16" />
                  <h2 className="text-3xl md:text-4xl font-bold">Oracle Practice</h2>
                </div>
                <p className="text-xl text-muted-foreground">
                  Expert Oracle solutions from migration to full-scale ERP implementations
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {oracleServices.map(service => <Card key={service.title} className="shadow-card hover:shadow-card-hover transition-all">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>)}
              </div>

              <Card className="bg-secondary border-none">
                
              </Card>
            </div>
          </div>
        </section>

        {/* Salesforce Solutions */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Salesforce Solutions</h2>
                <p className="text-xl text-muted-foreground">
                  Complete Salesforce services from implementation to ongoing support
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {salesforceServices.map(service => <Card key={service.title} className="shadow-card hover:shadow-card-hover transition-all">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* Mobility Practice */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobility Practice</h2>
                <p className="text-xl text-muted-foreground">
                  Cutting-edge mobile solutions for modern enterprise needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {mobilityServices.map(service => <Card key={service.title} className="shadow-card hover:shadow-card-hover transition-all">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <ServiceComparison />

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us to discuss how our services can benefit your organization
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Services;