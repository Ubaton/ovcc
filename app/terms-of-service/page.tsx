import React from 'react';
import BackButton from '../components/BackButton/BackButton';

const page = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16 md:px-24">
      <BackButton />
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-mirage">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 text-lg">
          By accessing or using the OVCC (Online Virtual Career Companion) platform, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-mirage">1. Use of Our Platform</h2>
          <p>
            OVCC provides academic tools, tutoring, and career simulation features to learners, educators, and parents. You agree to use the platform for lawful educational purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials. All activities under your account are your responsibility. If you suspect unauthorized access, notify us immediately.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">3. Content & Intellectual Property</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>All content, logos, and platform features are the property of OVCC or its licensors.</li>
            <li>You may not copy, distribute, or reverse-engineer any part of the platform without written consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">4. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date academic and career information, OVCC does not guarantee the absolute accuracy of all content or external resources.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">5. Limitation of Liability</h2>
          <p>
            OVCC will not be held liable for any direct or indirect damages resulting from the use or inability to use the platform, including data loss or interruptions.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the platform if these terms are violated, or for maintenance, security, or legal reasons.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">7. Modifications</h2>
          <p>
            OVCC may update these terms from time to time. Continued use of the platform after changes are made constitutes acceptance of those changes.
          </p>

          <h2 className="text-2xl font-semibold text-mirage">8. Contact Us</h2>
          <p>
            If you have any questions about these terms, please reach out to us:
          </p>
          <p className="text-mirage font-semibold">
            support@ovcc.africa
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
