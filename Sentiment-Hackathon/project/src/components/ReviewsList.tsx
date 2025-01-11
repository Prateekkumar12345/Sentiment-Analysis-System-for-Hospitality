import React from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Review {
  id: string;
  category: string;
  text: string;
  sentiment: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    category: 'Service',
    text: 'The staff was extremely helpful and attentive throughout our stay.',
    sentiment: 0.9,
    date: '2024-03-10'
  },
  {
    id: '2',
    category: 'Cleanliness',
    text: 'Room was spotless, but the hallway needed some attention.',
    sentiment: 0.6,
    date: '2024-03-09'
  },
  {
    id: '3',
    category: 'Food Quality',
    text: 'Breakfast was disappointing, limited options and cold food.',
    sentiment: 0.2,
    date: '2024-03-09'
  }
];

export function ReviewsList() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Latest Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-600">{review.category}</span>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700 mb-2">{review.text}</p>
            <div className="flex items-center">
              {review.sentiment > 0.5 ? (
                <ThumbsUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <ThumbsDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm ${
                review.sentiment > 0.5 ? 'text-green-500' : 'text-red-500'
              }`}>
                Sentiment: {(review.sentiment * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}