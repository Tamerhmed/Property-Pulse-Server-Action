import '@/assets/styles/globals.css';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real estate',
  description:
    'Stay ahead in the market with up-to-date listings and insights, tailored to help you find the perfect rental or investment property.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
