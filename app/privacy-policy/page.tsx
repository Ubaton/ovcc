import React from 'react';
import BackButton from '../components/BackButton/BackButton';

const page = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16 md:px-24">
      <BackButton />
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-mirage">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-lg">
          At OVCC (Online Virtual Career Companion), we respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data across our website and platforms.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-mirage">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal identifiers: Name, email address, contact details</li>
            <li>Academic information: Grades, APS scores, subject performance</li>
            <li>Device & usage data: IP address, browser type, interactions</li>
            <li>Parent/guardian data: For account access and learner tracking</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">2. How We Use Your Information</h2>
          <p>Your data is used to:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provide tutoring, academic tools, and career simulations</li>
            <li>Enable personalized learning journeys</li>
            <li>Improve platform performance and user experience</li>
            <li>Communicate with learners, parents, and educators</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">3. Information Sharing</h2>
          <p>We do not sell or rent your personal information. We only share it:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>With authorized educators or staff supporting the platform</li>
            <li>With service providers who maintain our technical infrastructure</li>
            <li>As required by law or to protect user safety and security</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">4. Data Security</h2>
          <p>
            We use industry-standard encryption, authentication, and backups to protect your data. Only trained and authorized personnel have access to sensitive information.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">5. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>You can access and update your data anytime</li>
            <li>You may request deletion of your information</li>
            <li>You may opt-out of non-essential communications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">6. Children's Privacy</h2>
          <p>
            We collect information from learners with consent from schools or guardians. We do not knowingly collect information from children under 13 without parental consent.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">7. Contact Us</h2>
          <p>
            If you have questions or concerns about your privacy or this policy, please contact us at:
          </p>
          <p className="text-mirage font-semibold">
            privacy@ovcc.africa
          </p>
        </div>

        <p className="text-sm text-gray-500 pt-8">
          Last updated: April 2025
        </p>
      </div>
    </section>
  );
}

export default page;
