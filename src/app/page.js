import Image from "next/image";
import Form from "./components/form"

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-red-300 flex flex-col items-center justify-start">

      <div className=" w-[450px] h-[80px] bg-blue-300 flex justify-between items-center">
        <h1>Skill Plus Feedback</h1>
        
        <button className="border-1">Dark Mode</button>
      </div>

      <Form />
    </div>
    
  );
}
