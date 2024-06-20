import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some Address 5, 12345 Some City',
//     description: 'This is a first meetup.',
//   },
//   {
//     id: 'm2',
//     title: 'A Second Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some Address 5, 12345 Some City',
//     description: 'This is a second meetup.',
//   },
//   {
//     id: 'm3',
//     title: 'A Third Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some Address 5, 12345 Some City',
//     description: 'This is a third meetup.',
//   },
//   {
//     id: 'm4',
//     title: 'A Fourth Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some Address 5, 12345 Some City',
//     description: 'This is a fourth meetup.',
//   },
// ];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// Page will be faster, data will be cached and reused.
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://eturnerbisset:MzSWJELb2eIBQQ7g@cluster0.amsssd6.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
        image: meetup.image,
      })),
    },
    revalidate: 10,
  };
};

// Runs for every request, good for very frequently changing data.
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
