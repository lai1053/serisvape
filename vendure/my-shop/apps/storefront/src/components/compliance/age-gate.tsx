'use client';

import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';

const STORAGE_KEY = 'age_gate_21_plus';

export function AgeGate() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDenied, setIsDenied] = useState(false);

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
        if (stored !== 'true') {
            setIsOpen(true);
        }
    }, []);

    function handleAccept() {
        window.localStorage.setItem(STORAGE_KEY, 'true');
        setIsOpen(false);
    }

    function handleDeny() {
        setIsDenied(true);
        setIsOpen(true);
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-background p-6 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Age Verification</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">You must be 21+ to enter</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                    By entering, you confirm you are at least 21 years old and agree to browse device-only products.
                </p>
                {isDenied ? (
                    <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                        Access is restricted to visitors who are 21+.
                    </p>
                ) : null}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <Button variant="outline" onClick={handleDeny}>
                        I am under 21
                    </Button>
                    <Button onClick={handleAccept}>
                        I am 21+
                    </Button>
                </div>
            </div>
        </div>
    );
}
