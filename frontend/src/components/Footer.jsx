import React from 'react'

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="p-6 text-center text-sm text-stone-600 border-t mx-auto max-w-6xl">
                <h1>© Copyright {currentYear} by Debabrata Das | All rights reserved</h1>
            </div>
        </footer>
    );
}
