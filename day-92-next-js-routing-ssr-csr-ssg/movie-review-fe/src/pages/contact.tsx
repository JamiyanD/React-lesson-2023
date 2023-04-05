import React from "react";

export async function getStaticProps() { 
    return {
        props: {
            theater : "test"
        },
        revalidate : 600,// time in secons (10minutes)
    }
}
export default function Contacts(props: any): JSX.Element{
    return(
        <div>
            <ul>
                <li>Email : myemail@exapmple.com</li>
            </ul>
            <h1>Its an contact page</h1>
            <div>
                <p>Theater name : {props.theater}</p>
            </div>
        </div>
    )
}