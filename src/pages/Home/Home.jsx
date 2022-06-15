import {useState} from 'react';

const Home = () => {
  const [postSort, setPostSort] = useState("Lastest");
  const sortOptions = [
    {label: "Latest", value: "latest_post"},
    {label: "Trending", value: "trending"},
    {label: "Oldest Post", value: "oldest_post"}
  ]
  return (
    <div>
      <div>
        <input type="textarea" placeholder="Write your tweet"/>
        <button>Post</button>
      </div>
      <div>
      <select value={postSort} onChange={(e) => setPostSort(e.target.value)}>
        {sortOptions.map(option => (
          <option value ={option.value}>{option.label}</option>
        ))}
      </select>

      <div>
        <h2>Anshul Raheja</h2>
        <h4>@anshulrahejaa</h4>
        <h5>2022/4/23 10:30am</h5>
        <button>option</button>
        <p>This is the tweet</p>
        <button>Like</button>
        <button>Bookmark</button>
        <button>Comment</button>
      </div>
    </div>
    </div>
  )
}

export default Home