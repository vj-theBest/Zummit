import React from 'react'

const FeedbackSection = () => {
  return (
    <div>
        <div className="w-3/5 mx-[10vw]">
            <h2 className="font-normal text-2xl mt-3 mb-6">Clients Feedback</h2>
            <p className="text-lg">These quotes represent a few of many positive reviews that we have recieved for therapists. 
                If you would like to review your therapists, please send your review to
            </p>
        </div>
        <div className="flex flex-wrap gap-6 py-12 pl-12 pr-16">
          {
            feedback.map((feedback) => {
              return (
                <div className="bg-[rgb(235,247,255)] min-w-[260px] max-w-xs grid gap-[7px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-3.5 rounded-[5px]" key={feedback.id}>
                  <p className="font-normal">{feedback.message}</p>
                  <div className="self-end text-cyan-600 text-sm">
                    {feedback.author} | {feedback.date}
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default FeedbackSection

const feedback = [
  {
    id: "1",
    message: "Hands down, One of the best",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "2",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "3",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "4",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "5",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "6",
    message: "Hands down, One of the best theprapist I ever have had, highly recommended",
    author: "Laura Craft",
    date: "20-02-20"
  },
  {
    id: "7",
    message: "Hands down, One of the best theprapist I have had",
    author: "Laura Craft",
    date: "20-02-20"
  },
  
]