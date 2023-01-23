export default function Input({ label, inputText, handleInput }) {
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={(e) => {
          handleInput(e);
        }}
        value={inputText}
      />
    </div>
  );
}
