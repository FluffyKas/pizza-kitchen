import { Link } from "react-router-dom";

const Base = () => {

  const bases = ['classic', 'thin', 'stuffed', 'chicago-style']

  return (
    <div>
      <h1 className="base-title">Choose your base: </h1>
      <form>
        <fieldset>
          {bases.map((base) => {
            return (
              <div>
                <input type="checkbox" id={base} value={base} name={base} />
                <label htmlFor={base}>{base}</label>
              </div>
            )
          })}
          <Link to="/toppings">Next: Toppings</Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Base;