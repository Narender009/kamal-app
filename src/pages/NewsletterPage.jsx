"use client";

import React, { useState } from "react";
import { Mail, Bell, BookOpen, CheckCircle } from "lucide-react";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interests, setInterests] = useState([]);
  const [subscribed, setSubscribed] = useState(false);

  const handleInterestChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", { name, email, interests });
    setSubscribed(true);
  };

  const interestOptions = [
    "GST Updates",
    "Income Tax News",
    "TDS Compliance",
    "Company Law Updates",
    "Accounting Standards",
    "Financial Planning",
  ];

  const recentNewsletters = [
    {
      id: 1,
      title: "Budget 2023 Highlights and Impact on Taxation",
      date: "July 15, 2023",
      excerpt:
        "Detailed analysis of the Union Budget 2023 and its implications on personal and business taxation...",
    },
    {
      id: 2,
      title: "GST Updates: New Compliance Requirements for E-commerce",
      date: "June 28, 2023",
      excerpt:
        "Recent changes in GST compliance requirements for e-commerce operators and sellers...",
    },
    {
      id: 3,
      title: "Important Due Dates for July-September Quarter",
      date: "June 10, 2023",
      excerpt:
        "Mark your calendar with these important tax and compliance due dates for the upcoming quarter...",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          FinTaxPro Newsletter
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest news, updates, and insights in finance,
          taxation, and accounting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          {!subscribed ? (
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Subscribe to Our Newsletter
                </h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Interests
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {interestOptions.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={option.replace(/\s+/g, "-").toLowerCase()}
                          value={option}
                          onChange={handleInterestChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={option.replace(/\s+/g, "-").toLowerCase()}
                          className="ml-2 block text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 text-sm text-gray-600">
                  By subscribing, you agree to receive our newsletter and accept
                  our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You for Subscribing!
                </h2>
                <p className="text-gray-600 mb-6">
                  You have successfully subscribed to our newsletter. You'll
                  start receiving updates soon.
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe Another Email
                </button>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">
              Recent Newsletters
            </h2>
          </div>

          <div className="space-y-6">
            {recentNewsletters.map((newsletter) => (
              <div
                key={newsletter.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {newsletter.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{newsletter.date}</p>
                <p className="text-gray-600 mb-4">{newsletter.excerpt}</p>
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Read More
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <div className="flex items-start">
              <Bell className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Newsletter Benefits
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span> Stay updated
                    with the latest tax laws and regulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span> Get expert
                    insights and analysis on financial matters
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span> Receive timely
                    reminders for important due dates
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span> Access
                    exclusive content and resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
