import React from 'react'

function Terms() {
  return ( <div className='w-screen h-full'>
      <div className='w-full h-auto bg-white'>
      <h1 className='font-bold text-black text-3xl p-4 place-items-center'><p>Term & Conditions:</p></h1>

      <div className="whitespace-pre-line text-gray-800 leading-relaxed p-6 rounded-2xl  m-3 bg-gray-100 ">
  {/* 1. Orders & Payments */}
  <h2 className="text-lg font-semibold mt-6 mb-2">1. Orders & Payments</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>We accept multiple payment options including <strong>COD</strong> and secure <strong>online gateways</strong>.</li>
    <li>Customers must ensure billing & shipping details are accurate.</li>
    <li>Orders with online payments will be processed only after confirmation.</li>
    <li>Suspicious or fraudulent transactions may be canceled without notice.</li>
    <li>Confirmation emails/SMS are sent after successful orders.</li>
    <li>Bulk orders may require additional verification.</li>
    <li>All prices are in PKR and inclusive of taxes unless stated otherwise.</li>
    <li>International card payments may incur conversion/bank fees.</li>
    <li>Discounts and vouchers cannot be combined unless specified.</li>
  </ul>

  {/* 2. Delivery Policy */}
  <h2 className="text-lg font-semibold mt-6 mb-2">2. Delivery Policy</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>We aim to deliver within <strong>48 working hours</strong> across Pakistan.</li>
    <li>Deliveries are only made on business days (Mon–Sat).</li>
    <li>Delivery charges may vary depending on location & order size.</li>
    <li>Customer must be present at provided address to receive package.</li>
    <li>Re-delivery charges may apply for failed attempts.</li>
    <li>Delays due to courier strikes/weather are beyond our control.</li>
    <li>Tracking details are shared upon dispatch.</li>
    <li>Inspect packages upon delivery and report damages immediately.</li>
  </ul>

  {/* 3. Return & Exchange Policy */}
  <h2 className="text-lg font-semibold mt-6 mb-2">3. Return & Exchange Policy</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>We offer a <strong>7-day return/exchange</strong> policy from delivery date.</li>
    <li>Conditions for returns:
      <ul className="list-disc list-inside ml-6">
        <li>Product must be unused, unwashed, with original tags & packaging.</li>
        <li>Damaged, worn, or altered items are not eligible.</li>
      </ul>
    </li>
    <li>Refunds processed only after quality inspection.</li>
    <li>Refunds may take 5–7 business days depending on payment method.</li>
    <li>Discounted/customized/undergarments are non-returnable.</li>
    <li>Return shipping charges apply unless item was defective.</li>
    <li>COD refunds issued via bank transfer/store credit.</li>
    <li>Valid proof of purchase (invoice/order no.) required.</li>
  </ul>

  {/* 4. Product Availability */}
  <h2 className="text-lg font-semibold mt-6 mb-2">4. Product Availability</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>All products are subject to stock availability.</li>
    <li>If unavailable, customers may:
      <ul className="list-disc list-inside ml-6">
        <li>Wait until restocked</li>
        <li>Select an alternative product</li>
        <li>Request a full refund</li>
      </ul>
    </li>
    <li>Prices may change anytime due to market fluctuations.</li>
    <li>Errors in pricing may lead to order cancellation.</li>
  </ul>

  {/* 5. Liability */}
  <h2 className="text-lg font-semibold mt-6 mb-2">5. Liability</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>We ensure quality before dispatch.</li>
    <li>We are not liable for courier delays, strikes, or natural disasters.</li>
    <li>Minor variations in color/texture due to display differences are not our responsibility.</li>
    <li>Our liability is limited to the value of purchased product.</li>
  </ul>

  {/* 6. Intellectual Property */}
  <h2 className="text-lg font-semibold mt-6 mb-2">6. Intellectual Property</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>All website content (logos, text, images, graphics) is company property.</li>
    <li>Unauthorized reproduction or distribution is prohibited.</li>
    <li>Content may only be used for personal, non-commercial purposes.</li>
  </ul>

  {/* 7. User Responsibilities */}
  <h2 className="text-lg font-semibold mt-6 mb-2">7. User Responsibilities</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Website must be used for lawful purposes only.</li>
    <li>Hacking, spreading malware, or unauthorized access is strictly prohibited.</li>
    <li>Users must keep login details confidential.</li>
    <li>Reviews/comments must not be offensive or misleading.</li>
  </ul>

  {/* 8. Modification of Terms */}
  <h2 className="text-lg font-semibold mt-6 mb-2">8. Modification of Terms</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>We may update Terms anytime without notice.</li>
    <li>Continued website usage means acceptance of revised terms.</li>
    <li>Customers should review Terms periodically.</li>
  </ul>

  {/* 9. Governing Law */}
  <h2 className="text-lg font-semibold mt-6 mb-2">9. Governing Law & Disputes</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>All transactions follow the laws of Pakistan.</li>
    <li>Disputes should first be raised with our support team.</li>
    <li>Unresolved disputes will be handled in Pakistani courts.</li>
  </ul>



</div>


      </div>
          </div>
  )
}

export default Terms