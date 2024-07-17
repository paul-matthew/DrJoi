import React from 'react';
import FadeInSection from './components/FadeIn.js';
import './App.css';

const Terms = () => {
  return (
    <div className="BlogContainer">
      <div id='NavlogoMobile'>
        <img src='./logo-green4.png' alt='logo mobile' onClick={() => window.location.href = './'} />
      </div>
      <div className='Banner'>
        <img src='./bannerflower.png' alt='banner' />
      </div>
      <FadeInSection>
        <div className="contentContainer">
          <div className="MySkill" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 3vw" }}>
            <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex' }}>
              
              {/* Terms of Use Section */}
              <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                <div id="termsofuse" className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Terms of Use</div>
                <p>Welcome to Exotic Relief. By accessing and using our website and services, you agree to comply with the following Terms of Use. These terms are designed to ensure a safe and enjoyable experience for all users.</p>
                <p><b>Acceptance of Terms:</b> By accessing our site, you agree to be bound by these Terms of Use and any applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.</p>
                <p><b>Modification of Terms:</b> Exotic Relief reserves the right to modify these terms at any time. Your continued use of the site following any changes indicates your acceptance of the new terms.</p>
                <p><b>Use of Site:</b> You agree to use our site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our site.</p>
                <p><b>Intellectual Property:</b> All content on this site, including text, graphics, logos, icons, and images, is the property of Exotic Relief or its content suppliers and is protected by international copyright laws. You agree not to reproduce, duplicate, copy, sell, or resell any portion of the site without express written permission from Exotic Relief.</p>
                <p><b>Limitation of Liability:</b> Exotic Relief is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the site. This includes but is not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.</p>
              </div>
              
              {/* Privacy Policy Section */}
              <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                <div id="privacy" className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Privacy Policy</div>
                <p>At Exotic Relief, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
                <p><b>Information We Collect:</b> We collect information that you provide directly to us, such as when you create an account, place an order, subscribe to our newsletter, or contact us. This information may include your name, email address, phone number, and payment information.</p>
                <p><b>Use of Information:</b> The information we collect is used to provide and improve our services, process transactions, send you notifications, respond to your inquiries, and enhance your user experience. We may also use your information for marketing purposes, such as sending promotional emails or newsletters.</p>
                <p><b>Sharing of Information:</b> We do not sell, trade, or otherwise transfer your personal information to outside parties, except when necessary to provide our services or comply with the law. This includes trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
                <p><b>Security:</b> We implement a variety of security measures to maintain the safety of your personal information. Your information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.</p>
                <p><b>Your Rights:</b> You have the right to access, update, and delete your personal information. If you wish to exercise these rights or have any questions about our Privacy Policy, please contact us.</p>
              </div>
              
              {/* Refund Policy Section */}
              <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                <div id="refundpolicy" className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Refund Policy</div>
                <p>At Exotic Relief, we strive to provide the highest quality products and services. Due to the nature of our products, all sales are final. However, we are committed to customer satisfaction and addressing any issues that may arise.</p>
                <p><b>All Sales Are Final:</b> Once an order is placed, it cannot be canceled or refunded. Please ensure that you review your order carefully before making a purchase.</p>
                <p><b>Damaged or Defective Items:</b> In the event that you receive a damaged or defective item, please contact us within 15 days of delivery. Provide a clear image of the issue along with your order details. We will review the information and, if applicable, offer a replacement or a refund for the damaged item.</p>
                <p><b>How to Contact Us:</b> For any issues regarding damaged or defective items, please use the "Contact" form. We aim to respond to all inquiries within 48 hours.</p>
              </div>

              {/* Donation Policy Section */}
              <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                <div id="donationspolicy" className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Donations Policy</div>
                <p>Thank you for considering a donation to Exotic Relief by Dr. Joi. Your support allows us to further promote mental health and wellness through educational content and materials.</p>
                <p><b>Use of Donations:</b> All donations received by Exotic Relief by Dr. Joi are managed directly by our organization. These funds are used to produce additional content and materials aimed at educating the public on mental health and wellness topics.</p>
                <p><b>Commitment to Transparency:</b> We are committed to transparency in how donations are used. Regular updates on the use of funds will be provided to donors through our website and communications.</p>
                <p><b>Contact Information:</b> For any questions or concerns regarding donations, please use the "Contact" form on our website. We value your support and are grateful for your contributions to our mission.</p>
              </div>

              
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Terms;

