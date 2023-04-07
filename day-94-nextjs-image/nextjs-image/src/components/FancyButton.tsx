export default function FancyButton(props: any) {
  return (
    <div>
      <button className="button">{props.children}</button>
      <style jsx>
        {`
          .button {
            padding: 2em;
            border-radius: 2em;
            border: none;
            background: purple;
            color: white;
          }
        `}
      </style>
    </div>
  );
}
