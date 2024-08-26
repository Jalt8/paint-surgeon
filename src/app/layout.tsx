import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/common/WhatsAppWidget';
import '@/app/globals.css';

export const metadata = {
  title: 'Paint Surgeon - Professional Painting Services',
  description: 'Paint Surgeon offers expert painting services for residential and commercial properties in Gauteng, South Africa. Transform your space with our skilled team.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Paint Surgeon - Expert Painting Services" />
        <meta property="og:description" content="Transform your space with Paint Surgeon's professional painting services in Gauteng, South Africa." />
        <meta property="og:image" content="https://www.paintsurgeon.co.za/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget phoneNumber="+27836796055" message="Hello! I'm interested in Paint Surgeon services." />
      </body>
    </html>
  );
}