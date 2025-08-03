import React from 'react';

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="bg-slate-900">{children}</div>;
}
