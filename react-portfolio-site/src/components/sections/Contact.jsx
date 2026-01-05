import { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Implement actual email sending
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hello@khandakershahi.com',
      href: 'mailto:hello@khandakershahi.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+880 1XXX-XXXXXX',
      href: 'tel:+8801XXXXXXXX'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: 'Chat directly on WhatsApp',
      href: 'https://wa.me/8801XXXXXXXX'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, name: 'GitHub', href: 'https://github.com/khandakershahi' },
    { icon: FaLinkedin, name: 'LinkedIn', href: 'https://linkedin.com/in/khandakershahi' },
    { icon: FaTwitter, name: 'Twitter', href: 'https://twitter.com/khandakershahi' }
  ];

  return (
    <section id="contact" className="py-12 lg:py-20 px-6 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-16">
        {/* Contact Information */}
        <div className="flex flex-col gap-10 flex-1">
          <div className="flex flex-col gap-6">
            <h1 className="text-primary dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
              Let's Build <br/>
              <span className="text-secondary">Something Together</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed max-w-lg">
              I'm currently open to new opportunities and freelance projects. Whether you have a question about my work, a project proposal, or just want to connect, I'll try my best to get back to you!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`group flex gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 hover:border-secondary transition-all duration-300 items-start shadow-sm hover:shadow-md ${
                  index === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="bg-primary p-3 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <contact.icon size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary dark:text-white text-base font-bold">{contact.title}</h3>
                  <a
                    href={contact.href}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-secondary transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Connect on Socials
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-secondary transition-colors group shadow-sm"
                >
                  <social.icon className="text-primary dark:text-white group-hover:text-secondary" />
                  <span className="text-primary dark:text-white text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 max-w-xl w-full">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-xl">
            <h2 className="text-primary dark:text-white text-2xl font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name and Email Row */}
              <div className="flex flex-col md:flex-row gap-5">
                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Name</span>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-3 text-primary dark:text-white placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                </label>
                
                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Email</span>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-3 text-primary dark:text-white placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </label>
              </div>

              {/* Subject */}
              <label className="flex flex-col gap-2">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Subject</span>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-3 text-primary dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option>Project Inquiry</option>
                    <option>Job Opportunity</option>
                    <option>Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
              </label>

              {/* Message */}
              <label className="flex flex-col gap-2">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-[160px] resize-y rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-3 text-primary dark:text-white placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                  placeholder="Tell me about your project..."
                  required
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-lg bg-secondary hover:bg-secondary/80 disabled:bg-secondary/50 text-primary font-bold py-4 px-6 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane size={16} />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-400 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-400 text-sm">
                    Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;