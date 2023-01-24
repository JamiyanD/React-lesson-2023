import Counter from "./Component/Counter";
export default function Fancy() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {" "}
      <Counter isFancy={isFancy} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
