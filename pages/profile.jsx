import ProfilePage from '@/page-components/profile/ProfilePage';
import TermAndPrivacy from '@/page-components/profile/TermAndPrivacy';
import { useRouter } from 'next/router';
import React from 'react';
import ProfileSidebarTab from './ProfileSidebarTab';
import AchievementsAndCertifications from '@/components/Profile-Components/AchievementsAndCertifications';
import LogoutPage from '@/page-components/profile/LogoutPage';
import BillingPayments from '@/components/Profile-Components/BillingPayments';
import Notification from '@/components/Profile-Components/Notification';
import Privacy from '@/components/Profile-Components/Privacy';
import Contact from '@/components/Profile-Components/Contact';

const profile = () => {
  const router = useRouter();
  const { tab } = router.query;
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="">
        <ProfileSidebarTab active={tab} />
      </div>
      <div className="md:col-span-5 flex">
        {(!tab || tab === 'accounts-overview') && <ProfilePage />}
        {tab === 'terms-and-policies' && <TermAndPrivacy />}
        {tab === 'billing-and-payments' && <BillingPayments />}
        {tab === 'notifications' && <Notification />}
        {tab === 'privacy-settings' && <Privacy />}
        {tab === 'contact-us' && <Contact />}
        {tab === 'logout' && <LogoutPage />}
        {tab === 'achievements-and-certifications' && (
          <AchievementsAndCertifications />
        )}
      </div>
    </div>
  );
};

export default profile;
