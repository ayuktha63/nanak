import './globals.css';

export const metadata = {
  title: 'Your Website Title',
  description: 'Your Website Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* You can add more meta tags here for SEO */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
