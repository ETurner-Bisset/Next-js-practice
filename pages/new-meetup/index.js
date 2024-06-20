import { useRouter } from 'next/router';
import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const handleAddMeetup = async (enteredData) => {
    // console.log(enteredData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    console.log(responseData);
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Add Meetup</title>
        <meta name="description" content="Add new meetup!"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
};
export default NewMeetupPage;
