import "../../style/Footer.css";
export default function Footer() {
  const year = new Date().getFullYear();

  return <footer>&copy; Moch Falih Fauzan {year} </footer>;
}
