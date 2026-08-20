const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 px-4 lg:px-0">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-14">
        <h1 className="heading1 text-black mb-4">Privacy Policy</h1>
        <p className="text-gray-600 max-w-3xl">
          At Astera Real Estate, we value your privacy and are committed to
          protecting your personal information.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 space-y-10">
        <section>
          <h2 className="heading3 mb-3">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal details such as your name, email address,
            phone number, and property preferences when you interact with our
            website or services.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Your information is used to provide property listings, respond to
            inquiries, improve our services, and communicate relevant updates.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">Data Protection</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate security measures to protect your data
            against unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to request access, correction, or deletion of
            your personal data at any time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
