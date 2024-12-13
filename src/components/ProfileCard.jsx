import { Pen } from "lucide-react";
export default function ProfileCard(props) {
  return (
    <>
      <div className="card bg-neutral w-56 space-y-6">
        <picture>
          <img src={props.image} alt="" className="rounded-3xl" />
        </picture>
        <div className="p-4 space-y-4">
          <h2 className="uppercase">{props.name}</h2>
          <p>{props.description} </p>

          <button className="btn btn-primary w-full">
            {" "}
            <Pen color="white" size={16}></Pen> Update
          </button>
        </div>
      </div>
    </>
  );
}
