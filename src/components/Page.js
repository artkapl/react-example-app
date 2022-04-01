import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Page(props) {
  return (
    // empty <> is React Fragment, wird nicht gerendert
    <>
      <Navigation />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
}

export default Page;
