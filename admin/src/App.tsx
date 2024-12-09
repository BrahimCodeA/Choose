import "./App.scss";
import { formatDate } from "@shared/utils/formatDate";

export default function App() {
  console.log(formatDate(new Date(), "fr-FR"));
  return (
    <div>
      <h1>Admin</h1>
      <p>Admin page</p>
    </div>
  );
}
