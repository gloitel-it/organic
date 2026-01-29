import { FileText, CheckCircle, AlertTriangle, Scale, ShieldAlert, Users } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3a2e] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Scale size={20} />
            <span className="text-sm">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6">Terms & Conditions</h1>
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
              Welcome to Ganeshadhari Agriculture. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read these terms carefully before using our services. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By creating an account, making a booking, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. These terms constitute a legally binding agreement between you and Ganeshadhari Agriculture.
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <FileText className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Our Services</h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>Ganeshadhari Agriculture provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Organic farm plot leasing and ownership opportunities</li>
                <li>Professional farm management and maintenance services</li>
                <li>Organic produce cultivation and delivery</li>
                <li>Agricultural consulting and guidance</li>
                <li>Educational farm tours and workshops</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </div>
          </div>

          {/* Plot Booking Terms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <Users className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Farm Plot Booking Terms</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-3 text-[#2d5f3f]">Booking Process</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>All bookings are subject to availability and confirmation</li>
                  <li>A booking is considered confirmed only upon receipt of payment</li>
                  <li>You must provide accurate and complete information during booking</li>
                  <li>Booking confirmation will be sent to your registered email address</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-3 text-[#2d5f3f]">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Payment must be made in full at the time of booking unless otherwise agreed</li>
                  <li>All prices are in Indian Rupees (INR) and include applicable taxes</li>
                  <li>We accept payment through bank transfer, UPI, credit/debit cards, and other specified methods</li>
                  <li>Payment receipts will be provided for all transactions</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-3 text-[#2d5f3f]">Cancellation and Refund Policy</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Cancellations made 30+ days before the start date: 90% refund</li>
                  <li>Cancellations made 15-29 days before: 50% refund</li>
                  <li>Cancellations made less than 15 days before: No refund</li>
                  <li>Refunds will be processed within 14 business days</li>
                  <li>Processing fees and transaction charges are non-refundable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <ShieldAlert className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">User Responsibilities</h2>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect the property and rights of Ganeshadhari Agriculture and other users</li>
                <li>Follow all safety guidelines and instructions provided during farm visits</li>
                <li>Not interfere with or disrupt our services or servers</li>
              </ul>
            </div>
          </div>

          {/* Organic Farming Disclaimer */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-[#4caf50]" size={24} />
              </div>
              <h2 className="text-2xl text-[#2d5f3f]">Organic Farming Disclaimer</h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                While we are committed to organic farming practices and follow all certified organic standards, agricultural production is subject to natural variations and environmental factors beyond our control.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <h4 className="font-medium mb-2 text-amber-900">Important Notice:</h4>
                <ul className="list-disc list-inside space-y-1 text-amber-900">
                  <li>Crop yields may vary based on weather, soil conditions, and other natural factors</li>
                  <li>We cannot guarantee specific harvest quantities or timing</li>
                  <li>Natural pests and diseases may occasionally affect crops despite organic management</li>
                  <li>Produce appearance may differ from conventional farming due to organic methods</li>
                </ul>
              </div>

              <p className="leading-relaxed">
                We will make every reasonable effort to provide you with quality organic produce and will keep you informed of any significant issues affecting your plot.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Ganeshadhari Agriculture and is protected by Indian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works from any content on our website without our prior written consent.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Ganeshadhari Agriculture shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or personal information</li>
                <li>Any interruption or cessation of transmission to or from our website</li>
                <li>Natural disasters, crop failures, or other agricultural risks</li>
                <li>Any errors or omissions in any content or services</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Our total liability shall not exceed the amount you paid for the specific service giving rise to the claim.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Ganeshadhari Agriculture, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your violation of these Terms and Conditions or your use of our services.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Raipur, Chhattisgarh.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Changes to Terms and Conditions</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </div>

          {/* Severability */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-[#4caf50]/10 to-[#2d5f3f]/10 p-8 rounded-xl">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Ganeshadhari Agriculture</strong></p>
              <p>Block A LIG Indraprashta Raipura Chowk Raipur</p>
              <p>Chhattisgarh, India</p>
              <p>Email: <a href="mailto:legal@ganeshadhari.com" className="text-[#4caf50] hover:underline">legal@ganeshadhari.com</a></p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
