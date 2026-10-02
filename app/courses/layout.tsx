import type { ReactNode } from 'react';

interface CoursesLayoutProps {
    children: ReactNode;
}

export default function CoursesLayout({
    children,
}: CoursesLayoutProps) {
    return (
        <section
            style={{
                border: '2px solid #666',
                padding: '20px',
                marginTop: '16px',
            }}
        >
            <h2>Раздел «Курсы»</h2>
            <p>Общий layout для всех страниц раздела курсов.</p>

            {children}
        </section>
    );
}
