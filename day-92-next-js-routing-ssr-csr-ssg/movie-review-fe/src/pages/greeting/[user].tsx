import React from "react";
import { useRouter } from "next/router";

// export async function getServerSideProps(req: any) {
//   const { user } = req.params;
//   console.log(user);
//   return {
//     props: {
//       user,
//     },
//   };
// }

export default function Greeting(props: any): JSX.Element {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>Hello {query.user}</h1>
      <h2>He is {query.age} years old</h2>
    </div>
  );
}
