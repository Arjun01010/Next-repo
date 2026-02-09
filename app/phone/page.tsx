import { Suspense } from "react";
import PhoneClient from "./phone-client"

export default function PhonePage() {
  return (
    <Suspense fallback={<Loading />}>
      <PhoneClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <main className="container">
      <div className="card">
        <p>Loading...</p>
      </div>
    </main>
  );
}
