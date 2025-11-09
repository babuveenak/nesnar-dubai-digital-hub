import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last Updated: January 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies to understand how you use our website, remember your preferences, and improve your experience. This includes analytics cookies that help us understand website traffic.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Essential Cookies: Required for the website to function properly</li>
                <li>Analytics Cookies: Help us understand how visitors interact with our website</li>
                <li>Functional Cookies: Remember your preferences and choices</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our Cookie Policy, please contact us at info@nesnar.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
