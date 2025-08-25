// layout.js
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
      </head>
      <body>
        <div className="container-max-width"> {/* Added a wrapper div */}
          {children}
        </div>
      </body>
    </html>
  );
}