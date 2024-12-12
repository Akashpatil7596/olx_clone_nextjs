import Page from "../navbar/page";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Page />
            {children}
        </div>
    );
}
