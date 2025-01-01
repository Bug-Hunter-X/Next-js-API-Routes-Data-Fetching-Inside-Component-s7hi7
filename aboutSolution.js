```javascript
//pages/aboutSolution.js
import {getServerSideProps} from 'next';

export default function About({data}) {
  return (
    <div>About {data.message}</div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
```