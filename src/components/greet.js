export default function Greet() {
  return (
    <div className="pl-40 pr-40 pt-10 pb-10 h-40">
      <h1 className=" text-5xl font-bold p-5 ">{morning} Readers!</h1>
    </div>
  );
}
const d = new Date();
let date = d.getHours();
let morning;
if (date < 12 && date > 3) {
  morning = "good morning ";
} else if (date < 16 && date > 11) {
  morning = "good Afternoon ";
} else if (date < 20 && date > 15) {
  morning = "good evening ";
} else {
  morning = "good Night ";
}
