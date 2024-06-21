import GitHubCalendar from "react-github-calendar";

export default function GitHubCalendarSection() {
  return (
    <section className="my-12 flex flex-col items-center">
      <h2 className="inline-block mb-4">How frequently I code</h2>
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg hidden lg:block ">
        <GitHubCalendar username={"MasabBinZia"} blockSize={9} year={"last"} />
      </div>
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-4xl w-full block lg:hidden">
        <GitHubCalendar username={"MasabBinZia"} blockSize={9} year={"last"} />
      </div>
    </section>
  );
}
