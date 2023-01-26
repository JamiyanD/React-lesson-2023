export default function InputForm({ isLoading, setisLoading, setData }) {
  const POST_DATA_URL = "http://localhost:8080/data";
  async function postData(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // objectiig string bolgodog
    };

    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
    if (FETCHED_DATA) {
      setisLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
    };
    setisLoading(true);
    postData(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          MAJOR:
          <input placeholder="Name" name="name" />
        </label>
        <br></br>
        <label>
          NAME:
          <input placeholder="Major" name="major" />
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
