import { useParams } from "react-router";

export default function Details() {
    const {pid, uid} = useParams();
  return <div>Details - {pid} - {uid}</div>
}
