import "./App.scss";
import Button from "@/components/ui/Button";
import Card from "@admin/components/ui/Card";
import { formatDate } from "@shared/utils/formatDate";

export default function App() {
  const now = new Date();
  console.log(formatDate(now, "fr-FR"));

  return (
    <div>
      <h1>App</h1>
      <Button />
      <Card />
    </div>
  );
}
