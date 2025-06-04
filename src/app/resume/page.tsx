"use client";

import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function ResumePage() {
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    await fetch('/api/resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
  };

  if (!session) {
    return <p>Please sign in to create a resume.</p>;
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Resume Builder</h1>
      <input
        className="w-full border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border p-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-500 text-white" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
