import css from "./index.module.scss";

//components
import Home from "@/components/Home/Home";

export default function HomePage() {
  return (
    <div className={css.container}>
      <Home />
    </div>
  )
}
