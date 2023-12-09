import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);
  const tip = (bill * (userRating + friendRating)) / 2 / 100;

  function handleReset() {
    setBill("");
    setUserRating(0);
    setFriendRating(0);
  }
  return (
    <div>
      <InputBill bill={bill} onBill={setBill} />
      <SelectRating rating={userRating} onRating={setUserRating}>
        How did you like the service?
      </SelectRating>
      <SelectRating rating={friendRating} onRating={setFriendRating}>
        How did your friend like the service?
      </SelectRating>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <ButtonReset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function SelectRating({ children, rating, onRating }) {
  return (
    <div>
      <label>{children}</label>
      <select value={rating} onChange={(e) => onRating(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was supreme! (20%)</option>
      </select>
    </div>
  );
}

function InputBill({ bill, onBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function Output({ bill, tip }) {
  return <h3>{`You pay ${bill + tip} (${bill}$ + ${tip}$)`} </h3>;
}
function ButtonReset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
