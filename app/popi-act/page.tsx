import React from 'react';

const page = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16 md:px-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-mirage">
          POPIA Compliance Statement
        </h1>
        <p className="text-gray-600 text-lg">
          At OVCC, your privacy matters. We are fully committed to complying with the Protection of Personal Information Act (POPIA) and ensuring that all personal information collected is used lawfully, transparently, and securely.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-mirage">1. What We Collect</h2>
          <p>
            We collect necessary personal information from learners, parents, and educators in order to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provide educational content and personalized support</li>
            <li>Monitor learner performance and enable real-time reporting</li>
            <li>Facilitate career simulations and APS-based recommendations</li>
            <li>Communicate important updates and platform features</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">2. How Your Data is Protected</h2>
          <p>
            All data is stored securely and is only accessible by authorized personnel. We implement security measures including:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Data encryption and secure backups</li>
            <li>Two-factor authentication for staff</li>
            <li>Regular audits and compliance reviews</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">3. Your Rights</h2>
          <p>
            In line with POPIA, you have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Access your personal data</li>
            <li>Request corrections or deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-mirage">4. Contact Us</h2>
          <p>
            For any questions, access requests, or concerns about how we handle your data, please contact our Information Officer:
          </p>
          <p className="text-mirage font-semibold">
            Email: privacy@ovcc.africa
          </p>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Last Updated: April 2025
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
