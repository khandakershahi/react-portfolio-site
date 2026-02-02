const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-16 lg:py-20 px-6 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-[900px]">
        <h1 className="text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Introduction</h2>
            <p>
              Welcome to Khandaker Shahi's Portfolio ("we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Data:</strong> Name, email address, and phone number (when you contact us through the contact form)</li>
              <li><strong>Device Data:</strong> Information about your device, browser type, and operating system</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and links clicked</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Generate analytics to help us improve our website</li>
              <li>Compile reports and analytics about website traffic and user behavior</li>
              <li>Monitor and improve the website's functionality and user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Contact Form Information</h2>
            <p>
              When you submit the contact form on our website, we collect your name, email address, subject, and message. This information is used solely to respond to your inquiry. We do not share this information with third parties without your consent.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Disclosure of Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <ul className="space-y-2 ml-4">
              <li>Email: hello@khandakershahi.com</li>
              <li>Phone: +880 1750 400 444</li>
              <li>WhatsApp: +880 1750 400 444</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Changes and clarifications will take effect immediately upon their posting to the website. If we make material changes to this policy, we will notify you here that it has been updated.
            </p>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            Last updated: February 2, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
