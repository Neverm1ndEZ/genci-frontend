import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import BillingPayments from './BillingPayments';
import Notification from './Notification';
import Privacy from './Privacy';
import Contact from './Contact';
import ProfilePage from '@/page-components/profile/ProfilePage';
import TermAndPrivacy from '@/page-components/profile/TermAndPrivacy';
import LogoutPage from '@/page-components/profile/LogoutPage';
import AchievementsAndCertifications from './AchievementsAndCertifications';

export function ProfileTabBar() {
  const data = [
    {
      label: 'Accounts Overview',
      value: 'accounts-overview',
      desc: <ProfilePage />,
    },
    {
      label: 'KYS',
      value: 'kys',
      desc: `Import component here`,
    },
    {
      label: 'Achievements and Certifications',
      value: 'a-c',
      desc: <AchievementsAndCertifications />,
    },
    {
      label: 'Billing and Payments',
      value: 'b-p',
      desc: <BillingPayments />,
    },
    {
      label: 'Notifications',
      value: 'notifcations',
      desc: <Notification />,
    },
    {
      label: 'Privacy Settings',
      value: 'p-s',
      desc: <Privacy />,
    },
    {
      label: 'Terms and policies',
      value: 't-p',
      desc: <TermAndPrivacy />,
    },
    {
      label: 'Contact Us',
      value: 'contact',
      desc: <Contact />,
    },
    {
      label: 'Logout',
      value: 'logout',
      desc: <LogoutPage />,
    },
  ];

  return (
    <Tabs value="html" orientation="vertical">
      <TabsHeader className="hidden lg:block bg-darkBackgroundSecondary rounded-xl w-full">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
