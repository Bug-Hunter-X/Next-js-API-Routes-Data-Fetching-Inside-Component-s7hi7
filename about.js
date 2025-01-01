```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  //This will cause an error because the data is fetched inside the component
  //and not during the build process
  const data = fetch('/api/data');
  return (
    <div>About</div>
  );
}
```
```javascript
//pages/api/data.js
export default async function handler(req, res) {
  const data = await fetchData();
  res.status(200).json(data);
}
async function fetchData(){
  //Simulate data fetching
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {message: 'Hello'};
}
```