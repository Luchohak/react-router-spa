import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error ocurred!</h1>
        <p>Could not find page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
