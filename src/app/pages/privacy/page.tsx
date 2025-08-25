import React from 'react'

function Privacy() {
  return (
    <div className='w-screen h-full'>
      <div className='w-full h-auto bg-white'>
      <h1 className='font-bold text-black text-3xl p-4 place-items-center'><p>Privacy Policies</p></h1>


<div className="whitespace-pre-line text-gray-800 leading-relaxed p-6 rounded-2xl  m-3 bg-gray-100 ">
  
      {/* 1. Information We Collect */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">1. Information We Collect</h2>
        <ul className="mt-3 list-disc list-inside space-y-1 leading-relaxed">
          <li><span className="font-semibold">Personal details</span>: name, phone number, email, shipping and billing addresses.</li>
          <li><span className="font-semibold">Payment & transaction data</span>: payment method, transaction IDs, billing confirmations (we do <span className="font-semibold">not</span> store full card/bank info).</li>
          <li><span className="font-semibold">Order & shopping history</span>: purchased products, wishlists, preferences, browsing behavior.</li>
          <li><span className="font-semibold">Technical data</span>: device, IP address, browser/OS info, approximate location, cookies and similar technologies.</li>
          <li><span className="font-semibold">Support interactions</span>: emails, calls, chats for service quality and dispute resolution.</li>
          <li><span className="font-semibold">Marketing & survey responses</span>: newsletter opt-ins, campaign engagement, feedback forms.</li>
        </ul>
      </section>

      {/* 2. How We Use Your Information */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
        <ul className="mt-3 list-disc list-inside space-y-1 leading-relaxed">
          <li>To confirm, process, and deliver your orders within promised timelines.</li>
          <li>To send order confirmations, shipping updates, and service notifications.</li>
          <li>To provide customer support, handle returns, and resolve disputes.</li>
          <li>To personalize your experience with tailored recommendations and offers (if subscribed).</li>
          <li>To maintain security, detect/prevent fraud, abuse, or unauthorized activity.</li>
          <li>To comply with applicable laws (tax, invoicing, consumer protection) and internal record keeping.</li>
          <li>To analyze performance and improve products, UX, and site reliability.</li>
        </ul>
      </section>

      {/* 3. Data Security */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">3. Data Security</h2>
        <ul className="mt-3 list-disc list-inside space-y-1 leading-relaxed">
          <li>All transmissions are protected via <span className="font-semibold">SSL/TLS</span>.</li>
          <li>Personal data is stored using encryption and access controls.</li>
          <li>Restricted staff access on a need-to-know basis with confidentiality obligations.</li>
          <li>Regular security reviews, logging, and risk assessments.</li>
          <li>Online payments are processed by <span className="font-semibold">PCI-DSS compliant</span> gateways; we do not store full card data.</li>
        </ul>
      </section>

      {/* 4. Cookies */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">4. Cookies & Tracking Technologies</h2>
        <p className="mt-3 leading-relaxed">
          We use cookies and similar tools to operate our website and enhance your experience. You can manage cookies in your browser; disabling some
          cookies may impact site functionality.
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 leading-relaxed">
          <li>Remember cart items and checkout preferences.</li>
          <li>Recognize returning visitors and keep you signed in.</li>
          <li>Show personalized recommendations and relevant promotions.</li>
          <li>Measure traffic, diagnose issues, and improve performance.</li>
        </ul>
      </section>

      {/* 5. Sharing of Information */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">5. Sharing of Information</h2>
        <p className="mt-3 leading-relaxed">
          We do <span className="font-semibold">not</span> sell or rent your personal data. We share limited information with trusted parties to run our business:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 leading-relaxed">
          <li><span className="font-semibold">Couriers & logistics</span> to deliver your orders.</li>
          <li><span className="font-semibold">Payment processors</span> to securely process transactions.</li>
          <li><span className="font-semibold">IT/security vendors</span> for hosting, maintenance, and protection.</li>
          <li><span className="font-semibold">Legal or authorities</span> where required by law or to protect rights, safety, and property.</li>
        </ul>
      </section>

      {/* 6. Your Rights */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">6. Your Rights</h2>
        <ul className="mt-3 list-disc list-inside space-y-1 leading-relaxed">
          <li>Access a copy of your personal data we hold.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Request deletion of your account/data (subject to legal obligations).</li>
          <li>Restrict or object to certain processing activities.</li>
          <li>Withdraw marketing consent and unsubscribe anytime.</li>
          <li>Request data portability in a machine-readable format.</li>
        </ul>
      </section>

      {/* 7. Retention */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">7. Retention of Information</h2>
        <ul className="mt-3 list-disc list-inside space-y-1 leading-relaxed">
          <li>Order and tax records are retained as required by law.</li>
          <li>Marketing data is kept until you unsubscribe or your consent is withdrawn.</li>
          <li>Account data remains while your account is active; afterwards it’s deleted or anonymized.</li>
        </ul>
      </section>

      {/* 8. Minors */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">8. Protection of Minors</h2>
        <p className="mt-3 leading-relaxed">
          Our services are intended for users aged 18+. We do not knowingly collect data from children; if such data is discovered, we will delete it promptly.
        </p>
      </section>

      {/* 9. International Transfers */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">9. International Data Transfers</h2>
        <p className="mt-3 leading-relaxed">
          Where data is transferred or stored outside your country, we ensure appropriate safeguards consistent with global standards
          (e.g., GDPR/CCPA principles) and contractual protections with our providers.
        </p>
      </section>

      {/* 10. Changes */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">10. Changes to this Policy</h2>
        <p className="mt-3 leading-relaxed">
          We may update this Privacy Policy to reflect changes in laws, technology, or our practices. Updates will be posted here; continued use of the
          website indicates acceptance of the revised policy.
        </p>
      </section> 
</div>




      </div>
          </div>
  )
}

export default Privacy


