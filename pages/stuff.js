import Heading1 from "../components/Heading1";
import PageContainer from "../components/PageContainer";
import Part from "../components/Part";

export default function stuff() {
  return (
    <>
      <PageContainer title="Solid Sound Stuff Page" link="stuff">
        <Heading1>Page of stuff!</Heading1>

        <Part color="khaki"><p>No stuff here pal!</p></Part>
      </PageContainer>
    </>
  );
}
