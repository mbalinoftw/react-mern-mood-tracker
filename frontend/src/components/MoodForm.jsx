import React from "react";

export default function MoodForm() {
  return (
    <form action="" className="p-6 bg-gray-200">
      <div className="flex flex-col">
        <label htmlFor="score" className="">
          Score
        </label>
        <input type="text" className="" name="score" id="score" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="date" className="">
          Date
        </label>
        <input type="date" className="" name="date" id="date" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="comment" className="">
          Comment
        </label>
        <textarea className="" name="comment" id="comment" cols="20" rows="5"></textarea>
      </div>
      <button type="submit" className="">Create</button>
    </form>
  );
}
