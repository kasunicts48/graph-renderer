'use client';

import Button from './button';
import Error from './error';
import Instructions from './instructions';
import Matrix from './matrix';
import TextArea from './textarea';
import { renderGraph } from '@/app/dashboard/actions';
import { useState } from 'react';

// Define the expected structure of the renderGraph result
interface RenderGraphResult {
    nodes?: string[];
    edges?: string[];
    message?: string;
}

export default function Dashboard() {
    const [error, setError] = useState<string | null>(null);
    const [graphNodes, setGraphNodes] = useState<string[]>([]);
    const [graphEdges, setGraphEdges] = useState<string[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(event.currentTarget); // Access form data
        const result: RenderGraphResult = await renderGraph(formData); // Ensure type safety

        if (result?.message) {
            setError(result.message);
            setGraphNodes([]);
            setGraphEdges([]);
        } else {
            setError(null);
            setGraphNodes(result.nodes || []); // Fallback to an empty array if undefined
            setGraphEdges(result.edges || []); // Fallback to an empty array if undefined
        }
    };

    const handleReset = () => {
        setError(null);
        setGraphNodes([]);
        setGraphEdges([]);
    };

    return (
        <main className="bg-teal-100 flex-1 flex flex-col">
            {error && <Error message={error} />}
            <section className="flex-1 flex flex-col gap-4 bg-teal-50 m-5 p-4 rounded border-2 border-gray-300 z-10">
                <Instructions />
                <div className="flex-1 flex flex-col gap-4 md:flex-row">
                    {/* // CODE FOR TASK 4.2 -----------------------------------------*/}
                    {/* Graph Editor Section */}
                    <div className="flex-1 flex flex-col">
                        <h2 className="bg-teal-500 text-white px-4 py-2 font-bold uppercase tracking-widest mb-4">
                            Graph Editor
                        </h2>
                        <div className="border-2 border-gray-300 rounded p-4">
                            <h3 className="text-sm mb-4 text-gray-600">Enter your graph notation below:</h3>
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit} onReset={handleReset}>
                                <TextArea id="graph-notation" placeholder="e.g. A->B" />
                                <div className="flex gap-4">
                                    <Button type="submit" theme="primary">
                                        Generate
                                    </Button>
                                    <Button type="reset" theme="secondary">
                                        Clear
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Adjacency Matrix Section */}
                    <div className="flex-1 flex flex-col">
                        <h2 className="bg-teal-500 text-white px-4 py-2 font-bold uppercase tracking-widest mb-4">
                            Adjacency Matrix
                        </h2>
                        <Matrix graphNodes={graphNodes} graphEdges={graphEdges} />
                    </div>
                    {/*  // END OF CODE FOR TASK 4.2 ---------------------------------- */}
                </div>
            </section>
        </main>
    );
}
