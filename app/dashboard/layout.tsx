import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Nghiem Le Do | Dashboard',
   description: 'Danh sach hoc vien',
};

export default function DashBoardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <section>{children}</section>;
}
