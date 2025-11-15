import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const Privacy = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last Updated: January 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Nesnar Software Services LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you contact us through our website, including your name, email address, phone number, and company information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about our products and services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">If you have questions about this Privacy Policy, please contact us at sales@nesnar.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Privacy;