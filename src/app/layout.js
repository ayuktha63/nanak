// layout.js
import './globals.css';
import AOSProvider from '@/components/AOSProvider'; // Import the new AOS Provider

export const metadata = {
  title: 'Nanak Duct Cleaning',
  description: 'Professional duct cleaning services in Canada.',
  icons: {
    icon: '/title-logo.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {/* Wrap children with the AOSProvider */}
        <AOSProvider>
          <div className="container-max-width">
            {children}
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}