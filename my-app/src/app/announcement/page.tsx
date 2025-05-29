'use client';
import Head from "next/head";
import { useState } from "react";

interface Announcement {
  id: number;
  title: string;
  content: string;
  timestamp: string;
}

export default function AnnouncementMessenger() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      title: "Team Meeting",
      content: "Join us for the weekly team meeting on Zoom at 3 PM.",
      timestamp: "2025-05-29 09:00 AM",
    },
    {
      id: 2,
      title: "New Feature Release",
      content: "Our latest feature is now live! Check it out in the app.",
      timestamp: "2025-05-28 02:30 PM",
    },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = announcements.length + 1;
    const timestamp = new Date().toLocaleString();
    setAnnouncements([
      { id: newId, ...newAnnouncement, timestamp },
      ...announcements,
    ]);
    setNewAnnouncement({ title: "", content: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Announcement Messenger</title>
        <meta name="description" content="View and post announcements" />
      </Head>

      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Announcements
        </h1>

        {/* Announcement Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Post a New Announcement
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={newAnnouncement.title}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    title: e.target.value,
                  })
                }
                required
                className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter announcement title"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={newAnnouncement.content}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    content: e.target.value,
                  })
                }
                required
                rows={4}
                className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter announcement details"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post Announcement
            </button>
          </form>
        </div>

        {/* Announcement List */}
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <p className="text-gray-600 text-center">No announcements yet.</p>
          ) : (
            announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {announcement.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {announcement.timestamp}
                </p>
                <p className="text-gray-700 mt-2">{announcement.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
