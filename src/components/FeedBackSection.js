import React from "react";

const feedback = [
  {
    id: "1",
    message: "Hands down, One of the best",
    author: "Laura Craft",
    date: "20-02-20",
  },
  {
    id: "2",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20",
  },
  {
    id: "3",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20",
  },
  {
    id: "4",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20",
  },
  {
    id: "5",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20",
  },
  {
    id: "6",
    message:
      "Hands down, One of the best theprapist I ever have had, highly recommended",
    author: "Laura Craft",
    date: "20-02-20",
  },
  {
    id: "7",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20",
  },
];

const FeedbackSection = () => {
  return (
    <div className="bg-skin py-10">
      <div className="Feedback_header">
        <h2 className="font-normal text-2xl pb-8">Clients Feedback</h2>
        <p className="text-lg">
          These quotes represent a few of many positive reviews that we have
          recieved for therapists. If you would like to review your therapists,
          please send your review to
        </p>
      </div>
      <div className="flex flex-wrap gap-8 py-12 pl-8 ">
        {feedback.map((feedback) => {
          return (
            <div className="feedback_card " key={feedback.id}>
              <p className="font-normal">{feedback.message}</p>
              <div className="self-end text-cyan-600 text-sm">
                {feedback.author} | {feedback.date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackSection;
