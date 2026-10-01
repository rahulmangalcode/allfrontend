import './JSXExamples.css'

function JSXExamples() {
  const name = "John Doe";
  const age = 30;
  const hobbies = ["Reading", "Traveling", "Cooking"];
  const currentDate = new Date().toLocaleDateString();

  return(
    <div className="jsx-examples">
        <h2>JSX Expressions</h2>

        <p> Name: {name}</p>
        <p> Age: {age}</p>
        <p> Age in 5 years: {age +5}</p>
        <p>Name uppercase: {name.toUpperCase()}</p>
        <p>Today: {currentDate}</p>
        <p> Hobbies: {hobbies.join(", ")}</p>
        <p>Random Number: {Math.floor(Math.random() * 100)}</p>
    </div>
  )
}

export default JSXExamples;