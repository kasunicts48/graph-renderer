'use client';

import Button from '@/components/button';
import Error from '@/components/error';
import Input from '@/components/input';
import Watermark from '@/components/watermark';
import { redirectToDashboard } from './actions';
import { useState } from 'react';

export default function Page() {
    const [error, setError] = useState<string | null>(null);
    const [name, setName] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        setError(null);

        // Create FormData from the form
        const formData = new FormData(event.currentTarget);
        const result = await redirectToDashboard(formData);

        if (result?.error) {
            setError(result.error);
        }
    };

    return (
        <main className="bg-teal-100 flex flex-col h-screen">
            <Watermark />
            {error && <Error message={error} />}
            {/* // CODE FOR TASK 2.2 ----------------------------------------- */}
            <section className="items-center justify-center flex flex-col h-full text-center z-10 relative">
                <div className="animate-pulse text-2xl mb-8 text-left bg-gradient-to-l from-teal-300 to-teal-600 text-transparent bg-clip-text">
                    Welcome to <br />
                    <span className="text-5xl font-bold">Graph Renderer.</span>
                </div>
                <div className="bg-slate-50 border-2 border-gray-300 rounded p-5 shadow-lg max-w-sm mx-auto text-xs w-full">
                    <form onSubmit={handleSubmit}>
                        <label className="text-left block text-gray-600 mb-2">What&#39;s your name?</label>
                        <div className="flex gap-2 items-center overflow-hidden">
                            <Input
                                id="name"
                                type="text"
                                placeholder="e.g. John Appleseed"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Button type="submit" theme="primary">
                                Continue
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
            {/* // END OF CODE FOR TASK 2.2 ----------------------------------  */}
        </main>
    );
}
