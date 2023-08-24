export default function Main() {
  return (
    <div>
      <h1 className="good font-bold text-xl pl-40 pt-10 ">
        {morning} Readers!
      </h1>
      <hr />
    </div>
  );
}
const d = new Date();
let date = d.getHours();

let morning;
if (date < 12) {
  morning = "good morning ";
} else if (date < 16) {
  morning = "good Afternoon ";
} else if (date < 20) {
  morning = "good evening ";
} else {
  morning = "good Night ";
}
