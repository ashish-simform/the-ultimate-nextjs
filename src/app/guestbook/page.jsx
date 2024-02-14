import React from "react";
import { getGuestbookEntries } from "../../../lib/mongo/guestbook";
import GuestbookEntryForm from "../components/GuestbookEntryForm";

//default is going to be the auto
//so that's why if we don't set as force-dynamic then
//we won't get the latest guest record in prod as in dev we are able to see but once we build
//then it will use that and won't run on every request so that's why we are using force-dynamic

// export const dynamic = "force-dynamic";

export const revalidate = 60;

async function getData() {
  const { entries, error } = await getGuestbookEntries();

  if (!entries || error) throw new Error("Failed to fetch entries");

  return entries;
}
async function getMetaData() {
  const { entries, error } = await getGuestbookEntries();
}

const GuestBook = async () => {
  //fetch previous entries
  const entries = await getData();

  const metadata = await getMetaData();
  return (
    <section className="py-24 m-10">
      <div className="container">
        <h1 className="text-3xl font-bold">Guestbook</h1>
        <GuestbookEntryForm />

        {entries.map(entry => {
          return (
            <div key={entry._id}>
              <div>
                {entry.name} : <span>{entry.message}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GuestBook;
