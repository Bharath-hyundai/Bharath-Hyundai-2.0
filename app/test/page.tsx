import { db } from '@/lib/db';

const Test = async () => {
  const res = await db.interest.count();
  console.log('count: ' + res);
  return <div>Test</div>;
};

export default Test;
