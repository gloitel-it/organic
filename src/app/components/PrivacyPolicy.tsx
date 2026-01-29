import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3a2e] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield size={20} />
            <span className="text-sm">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6">Privacy Policy</h1>
          <p className="text-lg text-green-100">
            Last Updated: January 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              At Ganeshadhari Agriculture, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <FileText className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-3 text-[#2d5f3f]">Personal Information</h3>
                <p className="text-gray-700 mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Book a farm plot or request our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our website or email</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-700 mt-3">This information may include your name, email address, phone number, postal address, and payment information.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-3 text-[#2d5f3f]">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-3">When you visit our website, we may automatically collect certain information about your device, including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <UserCheck className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">How We Use Your Information</h2>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process your farm plot bookings and service requests</li>
                <li>Send you important updates about your account and services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraudulent transactions and protect against security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <Eye className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Information Sharing and Disclosure</h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-[#2d5f3f]">Service Providers</h4>
                <p>We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-[#2d5f3f]">Legal Requirements</h4>
                <p>We may disclose your information when required by law or to protect our rights, property, or safety, or that of our users or others.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-[#2d5f3f]">Business Transfers</h4>
                <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <Lock className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Data Security</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We regularly review and update our security practices to ensure the ongoing protection of your data.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Your Privacy Rights</h2>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to the processing of your personal information</li>
                <li>Withdraw consent for marketing communications at any time</li>
                <li>Request a copy of your personal information in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@ganeshadhari.com" className="text-[#4caf50] hover:underline">privacy@ganeshadhari.com</a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our website.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-[#4caf50]/10 to-[#2d5f3f]/10 p-8 rounded-xl">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Ganeshadhari Agriculture</strong></p>
              <p>Block A LIG Indraprashta Raipura Chowk Raipur</p>
              <p>Chhattisgarh, India</p>
              <p>Email: <a href="mailto:privacy@ganeshadhari.com" className="text-[#4caf50] hover:underline">privacy@ganeshadhari.com</a></p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
