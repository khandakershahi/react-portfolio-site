const TermsOfService = () => {
  return (
    <section id="terms" className="py-16 lg:py-20 px-6 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-[900px]">
        <h1 className="text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement made between you ("User", "you", or "your") and Khandaker Shahi ("Company", "we", "us", or "our"), concerning your access to and use of the Khandaker Shahi portfolio website and all related applications, tools, and services (the "Site").
            </p>
            <p>
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with our terms, then please do not use our Site.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Khandaker Shahi's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Use the materials for any unlawful purpose or in violation of any applicable laws or regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Disclaimer</h2>
            <p>
              The materials on Khandaker Shahi's website are provided on an 'as is' basis. Khandaker Shahi makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Limitations</h2>
            <p>
              In no event shall Khandaker Shahi or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Khandaker Shahi's website, even if Khandaker Shahi or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Accuracy of Materials</h2>
            <p>
              The materials appearing on Khandaker Shahi's website could include technical, typographical, or photographic errors. Khandaker Shahi does not warrant that any of the materials on the website are accurate, complete, or current. Khandaker Shahi may make changes to the materials contained on the website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Links</h2>
            <p>
              Khandaker Shahi has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Khandaker Shahi of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Modifications</h2>
            <p>
              Khandaker Shahi may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Bangladesh, and you irrevocably submit to the exclusive jurisdiction of the courts located in Bangladesh.
            </p>
          </div>

          <div>
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-3">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul className="space-y-2 ml-4">
              <li>Email: hello@khandakershahi.com</li>
              <li>Phone: +880 1750 400 444</li>
              <li>WhatsApp: +880 1750 400 444</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            Last updated: February 2, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
