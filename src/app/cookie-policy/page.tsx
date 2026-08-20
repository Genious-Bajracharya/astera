const CookiePolicy = () => {
  return (
    <div className="pt-32 pb-20 px-4 lg:px-0">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-14">
        <h1 className="heading1 text-black mb-4">Cookie Policy</h1>
        <p className="text-gray-600 max-w-3xl">
          This policy explains how Astera Real Estate uses cookies to improve
          your experience.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 space-y-10">
        <section>
          <h2 className="heading3 mb-3">What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files stored on your device to help websites
            function efficiently and provide analytics.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">How We Use Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to understand user behavior, improve site
            performance, and personalize content.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">Managing Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            You can control or disable cookies through your browser settings at
            any time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
